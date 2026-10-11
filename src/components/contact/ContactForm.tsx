import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, AlertCircle, CheckCircle2, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
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

export const ContactForm: React.FC<ContactFormProps> = ({ theme = 'light' }) => {
  const mountTimestampRef = useRef<number>(Date.now());
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    organization: '',
    projectType: 'High-Impact Custom Web Platform',
    timeline: 'Immediate (Next 2-4 Weeks)',
    engagementModel: 'Full-Cycle Product Architecture & Build',
    details: '',
    hpField: '',
  });

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
    // Clear error for field on change
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
        // ignore audio errors
      }
      // Focus first erroneous input for accessibility
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
          // ignore audio
        }
        setStatusMessage({
          type: 'success',
          text: result.message,
        });

        // Reset form data on confirmed success
        setFormData({
          name: '',
          email: '',
          organization: '',
          projectType: 'High-Impact Custom Web Platform',
          timeline: 'Immediate (Next 2-4 Weeks)',
          engagementModel: 'Full-Cycle Product Architecture & Build',
          details: '',
          hpField: '',
        });
      } else {
        try {
          playErrorSound();
        } catch {
          // ignore audio
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
        // ignore
      }
      setStatusMessage({
        type: 'error',
        text: 'A network error prevented submission. Please reach us directly via email or WhatsApp below.',
        mailtoFallback: buildContactMailto(formData),
        whatsappFallback: buildContactWhatsApp(formData),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappQuickMessage = encodeURIComponent(
    `Hi Qavironel Team, I would like to discuss a project.\nName: ${formData.name || 'Prospect'}\nDiscipline: ${formData.projectType}`
  );

  const labelClass = `block text-xs font-mono font-bold uppercase tracking-widest mb-2 text-[#171717] dark:text-zinc-300`;
  const inputClass = `w-full px-5 py-4 rounded-xl text-sm transition-all shadow-xs focus:outline-hidden bg-white dark:bg-[#18181D] border border-[#DEDAD3] dark:border-[#27272A] text-[#171717] dark:text-white placeholder-[#77746F] dark:placeholder-zinc-500 focus:border-[#C7612E] dark:focus:border-[#C7612E] focus:ring-1 focus:ring-[#C7612E]`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot anti-spam trap */}
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

      {/* Status feedback banner */}
      {statusMessage && (
        <div
          role="alert"
          aria-live="polite"
          className={`p-5 rounded-xl border flex flex-col gap-3 ${
            statusMessage.type === 'success'
              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700/50 text-emerald-900 dark:text-emerald-200'
              : 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700/50 text-amber-950 dark:text-amber-200'
          }`}
        >
          <div className="flex items-start gap-3">
            {statusMessage.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            )}
            <div className="text-sm font-sans leading-relaxed">
              <p className="font-semibold">{statusMessage.text}</p>
              {statusMessage.type === 'error' && (
                <p className="text-xs mt-1 text-[#77746F] dark:text-zinc-400">
                  Your entered details have been preserved. You can send them directly with one click:
                </p>
              )}
            </div>
          </div>

          {statusMessage.type === 'error' && (statusMessage.mailtoFallback || statusMessage.whatsappFallback) && (
            <div className="flex flex-wrap gap-3 pt-2 border-t border-amber-200/60 dark:border-amber-800/40">
              {statusMessage.mailtoFallback && (
                <a
                  href={statusMessage.mailtoFallback}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#171717] dark:bg-white text-white dark:text-[#171717] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#C7612E] dark:hover:bg-[#C7612E] dark:hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </a>
              )}
              {statusMessage.whatsappFallback && (
                <a
                  href={statusMessage.whatsappFallback}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </a>
              )}
            </div>
          )}
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Your Name <span className="text-[#C7612E]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            disabled={isSubmitting}
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'contact-error-name' : undefined}
            className={`${inputClass} ${errors.name ? 'border-red-500 dark:border-red-500' : ''}`}
          />
          {errors.name && (
            <p id="contact-error-name" role="alert" className="mt-1.5 text-xs text-red-600 dark:text-red-400 font-sans">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email Address <span className="text-[#C7612E]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            disabled={isSubmitting}
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'contact-error-email' : undefined}
            className={`${inputClass} ${errors.email ? 'border-red-500 dark:border-red-500' : ''}`}
          />
          {errors.email && (
            <p id="contact-error-email" role="alert" className="mt-1.5 text-xs text-red-600 dark:text-red-400 font-sans">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Organization & Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-org" className={labelClass}>
            Company / Organization
          </label>
          <input
            id="contact-org"
            type="text"
            autoComplete="organization"
            disabled={isSubmitting}
            value={formData.organization}
            onChange={(e) => handleChange('organization', e.target.value)}
            placeholder="Acme Inc. / Stealth Startup"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-type" className={labelClass}>
            Discipline & Focus Area
          </label>
          <select
            id="contact-type"
            disabled={isSubmitting}
            value={formData.projectType}
            onChange={(e) => handleChange('projectType', e.target.value)}
            className={inputClass}
          >
            <option value="High-Impact Custom Web Platform" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">High-Impact Custom Web Platform</option>
            <option value="Full-Stack SaaS MVP / Web Application" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">Full-Stack SaaS MVP / Web App</option>
            <option value="Applied AI / LLM & Agentic Workflows" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">Applied AI / LLM & Agentic Workflows</option>
            <option value="Bespoke E-Commerce Architecture" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">Bespoke E-Commerce Architecture</option>
            <option value="Brand Identity, UX Design & Systems" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">Brand Identity, UX Design & Systems</option>
            <option value="Performance Engineering & Architecture Audit" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">Performance Engineering & Audit</option>
          </select>
        </div>
      </div>

      {/* Row 3: Timeline & Engagement Model */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-timeline" className={labelClass}>
            Target Timeline
          </label>
          <select
            id="contact-timeline"
            disabled={isSubmitting}
            value={formData.timeline}
            onChange={(e) => handleChange('timeline', e.target.value)}
            className={inputClass}
          >
            <option value="Immediate (Next 2-4 Weeks)" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">Immediate (Next 2-4 Weeks)</option>
            <option value="1-2 Months (Active Product Sprint)" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">1-2 Months (Active Product Sprint)</option>
            <option value="3+ Months (Strategic Roadmap)" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">3+ Months (Strategic Roadmap)</option>
            <option value="Flexible / Milestone-Driven" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">Flexible / Milestone-Driven</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-engagement" className={labelClass}>
            Engagement Model
          </label>
          <select
            id="contact-engagement"
            disabled={isSubmitting}
            value={formData.engagementModel}
            onChange={(e) => handleChange('engagementModel', e.target.value)}
            className={inputClass}
          >
            <option value="Full-Cycle Product Architecture & Build" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">Full-Cycle Product Architecture & Build</option>
            <option value="Design & Frontend Engineering Sprint" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">Design & Frontend Engineering Sprint</option>
            <option value="AI Integration & Custom Workflows" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">AI Integration & Custom Workflows</option>
            <option value="Dedicated Technical Studio Retainer" className="bg-white dark:bg-[#18181D] text-[#171717] dark:text-white">Dedicated Technical Studio Retainer</option>
          </select>
        </div>
      </div>

      {/* Row 4: Details */}
      <div>
        <label htmlFor="contact-details" className={labelClass}>
          Project Details & Goals <span className="text-[#C7612E]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-details"
          rows={5}
          required
          disabled={isSubmitting}
          value={formData.details}
          onChange={(e) => handleChange('details', e.target.value)}
          placeholder="Tell us what you are building, your primary technical objectives, target deadline, and any references to existing platforms or repositories."
          aria-invalid={!!errors.details}
          aria-describedby={errors.details ? 'contact-error-details' : undefined}
          className={`${inputClass} ${errors.details ? 'border-red-500 dark:border-red-500' : ''}`}
        />
        {errors.details && (
          <p id="contact-error-details" role="alert" className="mt-1.5 text-xs text-red-600 dark:text-red-400 font-sans">
            {errors.details}
          </p>
        )}
      </div>

      {/* Submission Actions */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto shadow-lg shadow-[#C7612E]/20"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Transmitting Inquiry...</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <Send className="w-4 h-4" />
              <span>Send Project Inquiry</span>
            </span>
          )}
        </Button>

        <a
          href={`${companyConfig.whatsappUrl}?text=${whatsappQuickMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider transition-colors font-bold text-[#77746F] dark:text-zinc-400 hover:text-[#C7612E] dark:hover:text-[#C7612E]"
        >
          <MessageSquare className="w-4 h-4 text-[#C7612E]" />
          <span>Or chat directly on WhatsApp</span>
        </a>
      </div>
    </form>
  );
};
