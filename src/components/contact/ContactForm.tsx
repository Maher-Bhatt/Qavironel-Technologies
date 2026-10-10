import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { companyConfig } from '../../data/company';
import { CheckCircle2, AlertCircle, MessageSquare, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'Custom Website / Web Platform',
    budget: '',
    details: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.details.trim()) {
      errs.details = 'Please briefly describe what you are looking to build';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('qavironel_inquiries') || '[]');
        existing.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('qavironel_inquiries', JSON.stringify(existing));
      } catch {
        // ignore storage errors
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Qavironel Technologies, I'm reaching out about a project.\n\nName: ${formData.name || 'Not provided'}\nOrganization: ${formData.organization || 'Not provided'}\nType: ${formData.projectType}\nDetails: ${formData.details || 'Let us discuss our project requirements.'}`
  );

  if (isSubmitted) {
    return (
      <div className="bg-white border border-[#E5E2DC] p-8 sm:p-12 text-center animate-fade-in space-y-6 text-[#171717] shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
        <div className="w-16 h-16 bg-[#C7612E]/10 border border-[#C7612E]/30 text-[#C7612E] mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-sans font-bold text-2xl text-[#171717]">
            Thank you, {formData.name}.
          </h3>
          <p className="text-sm text-[#6E6B65] max-w-md mx-auto leading-relaxed font-light">
            Your inquiry has been received. Our founder will review your project requirements and reply within 12–24 hours to <span className="font-semibold text-[#171717]">{formData.email}</span>.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/919879529957?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C7612E] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#98431F] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Fast-Track on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                organization: '',
                projectType: 'Custom Website / Web Platform',
                budget: '',
                details: '',
              });
            }}
            className="px-6 py-3.5 bg-white border border-[#E5E2DC] text-xs font-semibold uppercase tracking-widest text-[#171717] hover:bg-[#F5F2EB] transition-colors"
          >
            Submit Another Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="contact-name" className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#171717] mb-2">
            Your Name <span className="text-[#C7612E]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Jane Doe"
            className={`w-full px-4 py-3 bg-white border text-sm text-[#171717] placeholder-[#8E8B84] shadow-xs focus:outline-none transition-colors ${
              errors.name ? 'border-red-500' : 'border-[#E5E2DC] focus:border-[#C7612E]'
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500 font-mono">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#171717] mb-2">
            Email Address <span className="text-[#C7612E]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@company.com"
            className={`w-full px-4 py-3 bg-white border text-sm text-[#171717] placeholder-[#8E8B84] shadow-xs focus:outline-none transition-colors ${
              errors.email ? 'border-red-500' : 'border-[#E5E2DC] focus:border-[#C7612E]'
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500 font-mono">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Organization */}
        <div>
          <label htmlFor="contact-org" className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#171717] mb-2">
            Company / Project Name
          </label>
          <input
            id="contact-org"
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="Acme Inc. / Stealth Startup"
            className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-sm text-[#171717] placeholder-[#8E8B84] shadow-xs focus:border-[#C7612E] focus:outline-none transition-colors"
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="contact-type" className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#171717] mb-2">
            Discipline / Scope
          </label>
          <select
            id="contact-type"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-sm text-[#171717] shadow-xs focus:border-[#C7612E] focus:outline-none transition-colors"
          >
            <option value="Custom Website / Web Platform">High-Impact Custom Web Platform</option>
            <option value="SaaS MVP / Web Application">Full-Stack SaaS MVP / Web App</option>
            <option value="Applied AI / Workflow Automation">Applied AI / LLM Integration</option>
            <option value="E-Commerce Storefront">E-Commerce Storefront</option>
            <option value="Website Redesign & Technical SEO">Performance Redesign & Technical SEO</option>
            <option value="Mobile Developer Tooling">Mobile Runtimes & Dev Tooling</option>
          </select>
        </div>
      </div>

      {/* Approximate Budget */}
      <div>
        <label htmlFor="contact-budget" className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#171717] mb-2">
          Estimated Budget Range (Optional)
        </label>
        <select
          id="contact-budget"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-sm text-[#171717] shadow-xs focus:border-[#C7612E] focus:outline-none transition-colors"
        >
          <option value="">Select an approximate scope range...</option>
          <option value="< $1,000 / ₹25,000 – ₹80,000">&lt; $1,000 / ₹25,000 – ₹80,000 (Sprint Build)</option>
          <option value="$1,000 – $3,500 / ₹80,000 – ₹2,50,000">$1,000 – $3,500 / ₹80,000 – ₹2,50,000 (Custom Platform)</option>
          <option value="$3,500 – $10,000+ / ₹2,50,000+">$3,500 – $10,000+ (Comprehensive Product MVP)</option>
          <option value="Enterprise / Dedicated Retainer">Dedicated Architecture / Ongoing Retainer</option>
        </select>
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="contact-details" className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#171717] mb-2">
          Project Details & Goals <span className="text-[#C7612E]">*</span>
        </label>
        <textarea
          id="contact-details"
          rows={5}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          placeholder="Tell us what you're working on, what needs to improve, your target timeline, and any links to existing systems or designs."
          className={`w-full px-4 py-3 bg-white border text-sm text-[#171717] placeholder-[#8E8B84] shadow-xs focus:outline-none transition-colors ${
            errors.details ? 'border-red-500' : 'border-[#E5E2DC] focus:border-[#C7612E]'
          }`}
        />
        {errors.details && <p className="mt-1 text-xs text-red-500 font-mono">{errors.details}</p>}
      </div>

      {/* Submit Button & Direct WhatsApp Link */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Sending Request...' : 'Send Project Inquiry'}
        </Button>

        <a
          href={`https://wa.me/919879529957?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6E6B65] hover:text-[#C7612E] transition-colors py-2 font-semibold"
        >
          <MessageSquare className="w-4 h-4 text-[#C7612E]" />
          <span>Or chat directly on WhatsApp</span>
        </a>
      </div>
    </form>
  );
};
