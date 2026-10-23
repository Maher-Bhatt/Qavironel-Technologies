import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  Mail, 
  MessageSquare,
  Check
} from 'lucide-react';
import { 
  validateQuoteForm, 
  submitQuoteRequest, 
  QuoteFormData,
  buildQuoteMailto 
} from '../../services/bookingService';
import { companyConfig } from '../../data/company';
import { playSuccessSound, playErrorSound, playTabSound } from '../../utils/soundEffects';

interface RequestQuoteFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

const AVAILABLE_DELIVERABLES = [
  'Custom Web Platform & Responsive UI',
  'Full-Stack Architecture & API Routes',
  'User Login & Role-Based Access (RBAC)',
  'Applied AI & Local LLM Workflows',
  'Payment Integration (Stripe / Razorpay / UPI)',
  'Database Modeling (PostgreSQL / SQLite)',
  'Defensive Security & Input Hardening',
  'Speed, SEO & Core Web Vitals Tuning',
];

export const RequestQuoteForm: React.FC<RequestQuoteFormProps> = ({ onSuccess, onCancel }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    organization: '',
    projectType: 'High-Impact Custom Web Platform',
    budgetRange: '$2k – $5k / ₹1.5L – ₹4L (Sprint MVP)',
    timeline: '2-4 Weeks (Product Sprint)',
    scopeDetails: '',
    features: ['Custom Web Platform & Responsive UI', 'Full-Stack Architecture & API Routes'],
    hpField: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
    fallbackMailto?: string;
    fallbackWhatsApp?: string;
  } | null>(null);

  const toggleFeature = (feature: string) => {
    playTabSound();
    setFormData((prev) => {
      const current = prev.features || [];
      const updated = current.includes(feature)
        ? current.filter((f) => f !== feature)
        : [...current, feature];
      return { ...prev, features: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmissionResult(null);

    const validation = validateQuoteForm(formData);
    if (!validation.isValid) {
      playErrorSound();
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await submitQuoteRequest(formData);
      setSubmissionResult(res);
      if (res.success) {
        playSuccessSound();
        if (onSuccess) onSuccess();
      } else {
        playErrorSound();
      }
    } catch {
      playErrorSound();
      setSubmissionResult({
        success: false,
        message: 'Network service unavailable. Please dispatch your quotation requirements via direct email or WhatsApp below.',
        fallbackMailto: buildQuoteMailto(formData),
        fallbackWhatsApp: `${companyConfig.whatsappUrl}?text=${encodeURIComponent(
          `Hi Qavironel Team, I would like to request an architecture quotation.\nName: ${formData.name}\nProject: ${formData.projectType}`
        )}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionResult?.success) {
    return (
      <div role="status" aria-live="polite" className="py-8 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-950/50 text-zinc-600 dark:text-zinc-300 mx-auto flex items-center justify-center border border-zinc-300 dark:border-zinc-700/50 shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-black dark:text-white">
            Request Transmitted
          </span>
          <h3 className="font-sans font-bold text-2xl text-black dark:text-white">
            Quotation Request Received
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
            {submissionResult.message}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#F7F7F7] dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 max-w-sm mx-auto text-left text-xs space-y-1 font-mono text-black dark:text-white">
          <p><span className="text-zinc-500">Project:</span> {formData.projectType}</p>
          <p><span className="text-zinc-500">Budget Tier:</span> {formData.budgetRange}</p>
          <p><span className="text-zinc-500">Timeline:</span> {formData.timeline}</p>
          <p><span className="text-zinc-500">Contact:</span> {formData.email}</p>
        </div>

        <div className="pt-2">
          <a
            href={`${companyConfig.whatsappUrl}?text=${encodeURIComponent(
              `Hi Maher, I just submitted an architecture quote request for ${formData.projectType}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-black dark:text-white hover:underline"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Notify directly via WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  const labelClass = `block text-xs font-mono font-bold uppercase tracking-wider mb-2 text-black dark:text-white`;
  const inputClass = `w-full px-4 py-3 rounded-xl text-sm transition-all bg-white dark:bg-[#0A0A0A]/20 border border-black/10 dark:border-white/10 text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-hidden focus:border-[#161616] dark:focus:border-[#A0A0A0] focus:ring-1 focus:ring-[#161616] dark:focus:ring-[#A0A0A0] disabled:opacity-60 disabled:cursor-not-allowed`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', height: 0, overflow: 'hidden' }}>
        <label htmlFor="quote_bot_hp" className="sr-only">Leave this field blank</label>
        <input
          id="quote_bot_hp"
          type="text"
          name="quote_bot_hp"
          tabIndex={-1}
          autoComplete="off"
          value={formData.hpField}
          onChange={(e) => setFormData({ ...formData, hpField: e.target.value })}
        />
      </div>

      {submissionResult && !submissionResult.success && (
        <div role="alert" className="p-4 rounded-xl border bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50 text-red-900 dark:text-red-200 text-xs space-y-2">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <p className="font-semibold">{submissionResult.message}</p>
          </div>
          {(submissionResult.fallbackMailto || submissionResult.fallbackWhatsApp) && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-red-200/60 dark:border-red-900/40">
              {submissionResult.fallbackMailto && (
                <a
                  href={submissionResult.fallbackMailto}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0A0A] dark:bg-white text-white dark:text-black text-xs font-mono font-bold uppercase"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send via Email</span>
                </a>
              )}
              {submissionResult.fallbackWhatsApp && (
                <a
                  href={submissionResult.fallbackWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161616] text-white text-xs font-mono font-bold uppercase"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </a>
              )}
            </div>
          )}
        </div>
      )}

      {/* Row 1: Project Type, Budget Tier & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="quote-type" className={labelClass}>
            Discipline & Scope
          </label>
          <select
            id="quote-type"
            disabled={isSubmitting}
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className={inputClass}
          >
            <option value="High-Impact Custom Web Platform">High-Impact Custom Web Platform</option>
            <option value="Full-Stack SaaS MVP / Web Application">Full-Stack SaaS MVP / Web App</option>
            <option value="Applied AI / LLM & Agentic Workflows">Applied AI / LLM & Agentic Workflows</option>
            <option value="Bespoke E-Commerce Architecture">Bespoke E-Commerce Architecture</option>
            <option value="Performance Engineering & Architecture Audit">Performance Engineering & Audit</option>
          </select>
        </div>

        <div>
          <label htmlFor="quote-budget" className={labelClass}>
            Estimated Budget Tier
          </label>
          <select
            id="quote-budget"
            disabled={isSubmitting}
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            className={inputClass}
          >
            <option value="< $2,000 / < ₹1.5L (Starter Sprint)">Under $2,000 / ₹1.5L (Starter Sprint)</option>
            <option value="$2k – $5k / ₹1.5L – ₹4L (Sprint MVP)">$2,000 – $5,000 / ₹1.5L – ₹4L (Sprint MVP)</option>
            <option value="$5k – $10k / ₹4L – ₹8L (Core Sprint)">$5,000 – $10,000 / ₹4L – ₹8L (Core Sprint)</option>
            <option value="$10k – $25k / ₹8L – ₹20L (Full Production)">$10,000 – $25,000 / ₹8L – ₹20L (Full Production)</option>
            <option value="$25k+ / ₹20L+ (Enterprise Architecture)">$25,000+ / ₹20L+ (Enterprise Architecture)</option>
            <option value="Flexible / Retainer Milestone">Flexible / Retainer Milestone</option>
          </select>
        </div>

        <div>
          <label htmlFor="quote-timeline" className={labelClass}>
            Target Timeline
          </label>
          <select
            id="quote-timeline"
            disabled={isSubmitting}
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className={inputClass}
          >
            <option value="1-2 Weeks (Urgent Sprint)">1–2 Weeks (Urgent Sprint)</option>
            <option value="2-4 Weeks (Product Sprint)">2–4 Weeks (Product Sprint)</option>
            <option value="1-2 Months (Multi-Milestone Build)">1–2 Months (Multi-Milestone Build)</option>
            <option value="Flexible / Ongoing Retainer">Flexible / Ongoing Retainer</option>
          </select>
        </div>
      </div>

      {/* Deliverable Checkboxes */}
      <fieldset className="border-0 p-0 m-0">
        <legend className={labelClass}>Key Required Deliverables</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {AVAILABLE_DELIVERABLES.map((deliverable) => {
            const isChecked = formData.features?.includes(deliverable);
            return (
              <button
                key={deliverable}
                type="button"
                role="checkbox"
                aria-checked={isChecked}
                disabled={isSubmitting}
                onClick={() => toggleFeature(deliverable)}
                className={`p-3 rounded-xl border text-left text-xs font-sans transition-all flex items-center justify-between cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${
                  isChecked
                    ? 'bg-zinc-100 dark:bg-zinc-800/60 border-black dark:border-white text-[#0A0A0A] dark:text-white font-medium'
                    : 'bg-white dark:bg-zinc-900 border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:border-black/30 dark:hover:border-white/30'
                }`}
              >
                <span>{deliverable}</span>
                <span className={`w-4 h-4 rounded-md flex items-center justify-center border transition-all ${
                  isChecked ? 'bg-[#0A0A0A] border-[#0A0A0A] dark:bg-white dark:border-white text-white dark:text-[#0A0A0A]' : 'border-zinc-300 dark:border-zinc-700'
                }`}>
                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Scope Details */}
      <div>
        <label htmlFor="quote-scope" className={labelClass}>
          Scope Breakdown & Objectives <span className="text-black dark:text-white">*</span>
        </label>
        <textarea
          id="quote-scope"
          rows={4}
          required
          disabled={isSubmitting}
          value={formData.scopeDetails}
          onChange={(e) => setFormData({ ...formData, scopeDetails: e.target.value })}
          placeholder="Describe your current system or proposed product, core user journeys, target deadline, and specific technical requirements."
          className={`${inputClass} ${errors.scopeDetails ? 'border-red-500' : ''}`}
        />
        {errors.scopeDetails && <p className="mt-1 text-xs text-red-600">{errors.scopeDetails}</p>}
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="quote-name" className={labelClass}>
            Name <span className="text-black dark:text-white">*</span>
          </label>
          <input
            id="quote-name"
            type="text"
            required
            disabled={isSubmitting}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Jane Doe"
            className={`${inputClass} ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="quote-email" className={labelClass}>
            Email <span className="text-black dark:text-white">*</span>
          </label>
          <input
            id="quote-email"
            type="email"
            required
            disabled={isSubmitting}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@company.com"
            className={`${inputClass} ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="quote-org" className={labelClass}>
            Organization
          </label>
          <input
            id="quote-org"
            type="text"
            disabled={isSubmitting}
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="Company / Project"
            className={inputClass}
          />
        </div>
      </div>

      {/* Submission Actions */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0A0A0A] hover:bg-[#262626] text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-[#0A0A0A] text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Analyzing Scope & Transmitting...</span>
            </>
          ) : (
            <>
              <FileText className="w-4 h-4" />
              <span>Submit Quotation Request</span>
            </>
          )}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="text-xs font-mono uppercase text-zinc-500 hover:text-black dark:text-white dark:hover:text-[#F7F7F7]"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};
