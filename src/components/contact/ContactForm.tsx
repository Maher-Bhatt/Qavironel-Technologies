import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  MessageSquare, 
  Layers, 
  Clock, 
  Check,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { playSuccessSound, playErrorSound } from '../../utils/soundEffects';
import { 
  ContactFormData, 
  ContactValidationErrors, 
  validateContactForm, 
  submitContactInquiry,
  buildContactMailto,
  buildContactWhatsApp
} from '../../services/contactService';
import { companyConfig } from '../../data/company';

interface ContactFormProps {
  theme?: 'light' | 'dark';
}

const SCOPE_OPTIONS = [
  { 
    id: 'web', 
    label: 'Website or online store',
    value: 'Website or online store',
    badge: 'Web & storefronts'
  },
  { 
    id: 'saas', 
    label: 'Digital product',
    value: 'Digital product or SaaS',
    badge: 'Apps & platforms'
  },
  { 
    id: 'ai', 
    label: 'Applied AI', 
    value: 'Applied AI or automation',
    badge: 'AI & integrations'
  },
  { 
    id: 'audit', 
    label: 'Improve an existing product',
    value: 'Existing product improvement',
    badge: 'Design & engineering'
  },
];

const TIMELINE_OPTIONS = [
  { label: 'Within a month', value: 'Within a month' },
  { label: '1–2 months', value: '1–2 months' },
  { label: 'Flexible', value: 'Flexible' },
];

export const ContactForm: React.FC<ContactFormProps> = () => {
  const mountTimestampRef = useRef<number>(Date.now());
  
  const [formData, setFormData] = useState<ContactFormData>(() => ({
    name: '',
    email: '',
    organization: '',
    projectType: 'Website or online store',
    timeline: 'Within a month',
    engagementModel: 'Project inquiry',
    details: '',
    hpField: '',
  }));

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ContactValidationErrors>({});
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
    mailtoFallback?: string;
    whatsappFallback?: string;
  } | null>(null);

  useEffect(() => {
    mountTimestampRef.current = Date.now();
  }, []);

  const handleChange = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof ContactValidationErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof ContactValidationErrors];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // 1. Client-side validation
    const { isValid, errors: validationErrors } = validateContactForm(formData);
    if (!isValid) {
      setErrors(validationErrors);
      try {
        playErrorSound();
      } catch {
        // audio fail-safe
      }
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(`contact-${firstErrorField}`);
      element?.focus();
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const result = await submitContactInquiry(formData, mountTimestampRef.current);
      
      if (result.success) {
        try {
          playSuccessSound();
        } catch {
          // audio fail-safe
        }
        setStatusMessage({
          type: 'success',
          text: result.message,
        });
        // Reset form details while keeping contact identity for convenience
        setFormData((prev) => ({
          ...prev,
          details: '',
          organization: '',
        }));
      } else {
        try {
          playErrorSound();
        } catch {
          // audio fail-safe
        }
        setStatusMessage({
          type: 'error',
          text: result.message,
          mailtoFallback: result.fallbackMailto || buildContactMailto(formData),
          whatsappFallback: result.fallbackWhatsApp || buildContactWhatsApp(formData),
        });
      }
    } catch {
      try {
        playErrorSound();
      } catch {
        // audio fail-safe
      }
      setStatusMessage({
        type: 'error',
        text: 'We couldn’t send this just now. Your details are still here; you can reach us by email or WhatsApp below.',
        mailtoFallback: buildContactMailto(formData),
        whatsappFallback: buildContactWhatsApp(formData),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappDirectUrl = `${companyConfig.whatsappUrl}?text=${encodeURIComponent(
    `Hello Qavironel team, I would like to discuss a project.\nName: ${formData.name || 'Prospective client'}\nProject: ${formData.projectType}\nTimeline: ${formData.timeline}`
  )}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="contact-form space-y-6">
      {/* Honeypot spam trap */}
      <div 
        aria-hidden="true" 
        style={{ position: 'absolute', left: '-9999px', top: '-9999px', height: 0, overflow: 'hidden' }}
      >
        <label htmlFor="contact-hpField">Leave this field blank</label>
        <input
          id="contact-hpField"
          type="text"
          name="website_url_hp"
          tabIndex={-1}
          autoComplete="off"
          value={formData.hpField}
          onChange={(e) => handleChange('hpField', e.target.value)}
        />
      </div>

      {/* Status Feedback Notification */}
      {statusMessage && (
        <div
          role="alert"
          aria-live="polite"
          className={`p-5 rounded-2xl border transition-all ${
            statusMessage.type === 'success'
              ? 'bg-zinc-100 dark:bg-zinc-900 border-black/15 dark:border-white/20 text-black dark:text-white'
              : 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200'
          }`}
        >
          <div className="flex items-start gap-3">
            {statusMessage.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-black dark:text-white shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            )}
            <div className="text-sm font-sans leading-relaxed">
              <p className="font-semibold">{statusMessage.text}</p>
              {statusMessage.type === 'error' && (
                <p className="text-xs mt-1 text-zinc-600 dark:text-zinc-400">
                  Your details are still here. You can send them directly using:
                </p>
              )}
            </div>
          </div>

          {statusMessage.type === 'error' && (statusMessage.mailtoFallback || statusMessage.whatsappFallback) && (
            <div className="flex flex-wrap gap-2.5 pt-3 mt-3 border-t border-red-200/60 dark:border-red-900/40">
              {statusMessage.mailtoFallback && (
                <a
                  href={statusMessage.mailtoFallback}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send by email</span>
                </a>
              )}
              {statusMessage.whatsappFallback && (
                <a
                  href={statusMessage.whatsappFallback}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-zinc-800 dark:hover:bg-white transition-colors shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send by WhatsApp</span>
                </a>
              )}
            </div>
          )}
        </div>
      )}

      {/* 01. PROJECT DISCIPLINE SELECTOR */}
      <div className="space-y-2.5">
        <label className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-black dark:text-white" />
          <span>What would you like to make?</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {SCOPE_OPTIONS.map((scope) => {
            const isSelected = formData.projectType === scope.value;
            return (
              <button
                key={scope.id}
                type="button"
                onClick={() => handleChange('projectType', scope.value)}
                aria-pressed={isSelected}
                className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-sm'
                    : 'bg-zinc-50 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-0.5">
                  <span className="font-display font-bold text-xs sm:text-sm tracking-tight">
                    {scope.label}
                  </span>
                  {isSelected ? (
                    <Check className="w-3.5 h-3.5 shrink-0 text-white dark:text-black" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  )}
                </div>
                <span className={`text-[0.65rem] font-mono ${isSelected ? 'text-zinc-300 dark:text-zinc-600' : 'text-zinc-500 dark:text-zinc-400'}`}>
                  {scope.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 02. CONTACT CREDENTIALS (NAME, EMAIL, ENTITY) */}
      <div className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-mono font-bold uppercase tracking-wider mb-1.5 text-black dark:text-white">
              Your name <span className="text-zinc-400" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              autoComplete="name"
              disabled={isSubmitting}
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Your name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'contact-error-name' : undefined}
              className={`w-full px-3.5 py-3 rounded-xl text-sm transition-all bg-zinc-50 dark:bg-zinc-900/90 border text-black dark:text-white placeholder-zinc-400 focus:outline-hidden focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white ${
                errors.name ? 'border-red-500' : 'border-black/10 dark:border-white/10'
              }`}
            />
            {errors.name && (
              <p id="contact-error-name" role="alert" className="mt-1 text-xs text-red-600 dark:text-red-400 font-sans">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-mono font-bold uppercase tracking-wider mb-1.5 text-black dark:text-white">
              Email address <span className="text-zinc-400" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              autoComplete="email"
              disabled={isSubmitting}
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'contact-error-email' : undefined}
              className={`w-full px-3.5 py-3 rounded-xl text-sm transition-all bg-zinc-50 dark:bg-zinc-900/90 border text-black dark:text-white placeholder-zinc-400 focus:outline-hidden focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white ${
                errors.email ? 'border-red-500' : 'border-black/10 dark:border-white/10'
              }`}
            />
            {errors.email && (
              <p id="contact-error-email" role="alert" className="mt-1 text-xs text-red-600 dark:text-red-400 font-sans">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="contact-org" className="block text-xs font-mono font-bold uppercase tracking-wider mb-1.5 text-black dark:text-white">
            Company / organization <span className="text-[0.68rem] text-zinc-400 font-normal lowercase">(optional)</span>
          </label>
          <input
            id="contact-org"
            type="text"
            autoComplete="organization"
            disabled={isSubmitting}
            value={formData.organization}
            onChange={(e) => handleChange('organization', e.target.value)}
            placeholder="Company or team (optional)"
            className="w-full px-3.5 py-3 rounded-xl text-sm transition-all bg-zinc-50 dark:bg-zinc-900/90 border border-black/10 dark:border-white/10 text-black dark:text-white placeholder-zinc-400 focus:outline-hidden focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white"
          />
        </div>
      </div>

      {/* 03. TARGET TIMELINE SELECTOR */}
      <div className="space-y-2">
        <label className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-black dark:text-white" />
          <span>When would you like to start?</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {TIMELINE_OPTIONS.map((t) => {
            const isSelected = formData.timeline === t.value;
            return (
              <button
                key={t.value}
                type="button"
                onClick={() => handleChange('timeline', t.value)}
                aria-pressed={isSelected}
                className={`py-2 px-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-2xs'
                    : 'bg-zinc-50 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                <span className="text-xs font-mono font-semibold">
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 04. PROJECT BRIEF & OBJECTIVES */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor="contact-details" className="block text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white">
            A little about the project <span className="text-zinc-400" aria-hidden="true">*</span>
          </label>
          <span className="text-[0.68rem] font-mono text-zinc-400">Min 10 characters</span>
        </div>
        <textarea
          id="contact-details"
          rows={4}
          required
          disabled={isSubmitting}
          value={formData.details}
          onChange={(e) => handleChange('details', e.target.value)}
          placeholder="What are you trying to achieve? Share any useful context, goals, or constraints."
          aria-invalid={!!errors.details}
          aria-describedby={errors.details ? 'contact-error-details' : undefined}
          className={`w-full px-3.5 py-3 rounded-xl text-sm transition-all bg-zinc-50 dark:bg-zinc-900/90 border text-black dark:text-white placeholder-zinc-400 focus:outline-hidden focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white leading-relaxed ${
            errors.details ? 'border-red-500' : 'border-black/10 dark:border-white/10'
          }`}
        />
        {errors.details && (
          <p id="contact-error-details" role="alert" className="mt-1 text-xs text-red-600 dark:text-red-400 font-sans">
            {errors.details}
          </p>
        )}
      </div>

      {/* 05. PRIVACY NOTICE & SUBMIT BUTTON */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10 dark:border-white/10">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-glass-shimmer w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#161616] hover:bg-[#0A0A0A] text-white dark:bg-[#D4D4D4] dark:hover:bg-[#E5E5E5] dark:text-[#111111] font-sans font-semibold uppercase tracking-[0.1em] text-xs transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 group border border-[#161616]/10 dark:border-white/10"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                <span>Sending inquiry…</span>
            </>
          ) : (
            <>
              <span>Send project inquiry</span>
              <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </>
          )}
        </button>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-black dark:text-white" />
            <span>Project details stay private</span>
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">·</span>
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Connect</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
