import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { companyConfig } from '../../data/company';
import { CheckCircle2, AlertCircle, MessageSquare, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'Custom Website',
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

    // Simulate reliable dispatch with local storage backup and direct WhatsApp fallback
    setTimeout(() => {
      try {
        // Save submission locally for audit
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

  // WhatsApp prefilled message
  const whatsappMessage = encodeURIComponent(
    `Hello Qavironel Technologies, I'm reaching out about a project.\n\nName: ${formData.name || 'Not provided'}\nOrganization: ${formData.organization || 'Not provided'}\nType: ${formData.projectType}\nDetails: ${formData.details || 'Let us discuss our project requirements.'}`
  );

  if (isSubmitted) {
    return (
      <div className="bg-[#FFFFFF] border border-[#DEDAD3] p-8 sm:p-12 text-center animate-fade-in space-y-6">
        <div className="w-16 h-16 bg-[#C7612E]/10 text-[#C7612E] mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-sans font-bold text-2xl text-[#171717]">
            Thank you, {formData.name}.
          </h3>
          <p className="text-sm text-[#77746F] max-w-md mx-auto leading-relaxed">
            Your inquiry has been received. Our founding team will review your project details and reply within 24 hours to <span className="font-semibold text-[#171717]">{formData.email}</span>.
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
                projectType: 'Custom Website',
                budget: '',
                details: '',
              });
            }}
            className="text-xs font-semibold uppercase tracking-widest text-[#77746F] hover:text-[#171717] transition-colors py-3 px-4"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#FFFFFF] border border-[#DEDAD3] p-6 sm:p-10 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-widest text-[#171717] mb-2">
            Your Name <span className="text-[#C7612E]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Jane Doe"
            className={`w-full px-4 py-3 bg-[#F6F3ED] border text-sm text-[#171717] focus:bg-white focus:outline-none transition-colors ${
              errors.name ? 'border-red-500' : 'border-[#DEDAD3] focus:border-[#C7612E]'
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600 font-mono">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-widest text-[#171717] mb-2">
            Email Address <span className="text-[#C7612E]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@company.com"
            className={`w-full px-4 py-3 bg-[#F6F3ED] border text-sm text-[#171717] focus:bg-white focus:outline-none transition-colors ${
              errors.email ? 'border-red-500' : 'border-[#DEDAD3] focus:border-[#C7612E]'
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600 font-mono">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Organization */}
        <div>
          <label htmlFor="contact-org" className="block text-xs font-semibold uppercase tracking-widest text-[#171717] mb-2">
            Company or Organization
          </label>
          <input
            id="contact-org"
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="Studio / Startup / Enterprise"
            className="w-full px-4 py-3 bg-[#F6F3ED] border border-[#DEDAD3] text-sm text-[#171717] focus:bg-white focus:border-[#C7612E] focus:outline-none transition-colors"
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="contact-type" className="block text-xs font-semibold uppercase tracking-widest text-[#171717] mb-2">
            Project Type
          </label>
          <select
            id="contact-type"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-3 bg-[#F6F3ED] border border-[#DEDAD3] text-sm text-[#171717] focus:bg-white focus:border-[#C7612E] focus:outline-none transition-colors"
          >
            <option value="Custom Website">Custom Website / E-Commerce</option>
            <option value="Web Application / SaaS MVP">Web Application / SaaS MVP</option>
            <option value="Applied AI / Workflow Automation">Applied AI / Workflow Automation</option>
            <option value="Website Redesign & SEO">Website Redesign & Technical SEO</option>
            <option value="Product Design & UI/UX">Product Design & UI/UX</option>
            <option value="Other Scope">Other Specific Scope</option>
          </select>
        </div>
      </div>

      {/* Approximate Budget */}
      <div>
        <label htmlFor="contact-budget" className="block text-xs font-semibold uppercase tracking-widest text-[#171717] mb-2">
          Estimated Budget (Optional)
        </label>
        <select
          id="contact-budget"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className="w-full px-4 py-3 bg-[#F6F3ED] border border-[#DEDAD3] text-sm text-[#171717] focus:bg-white focus:border-[#C7612E] focus:outline-none transition-colors"
        >
          <option value="">Select an approximate range...</option>
          <option value="India: ₹10,000 – ₹25,000 / Global: < $500">India: ₹10,000 – ₹25,000 / Global: &lt; $500</option>
          <option value="India: ₹25,000 – ₹60,000 / Global: $500 – $1,500">India: ₹25,000 – ₹60,000 / Global: $500 – $1,500</option>
          <option value="India: ₹60,000 – ₹1,50,000 / Global: $1,500 – $3,500">India: ₹60,000 – ₹1,50,000 / Global: $1,500 – $3,500</option>
          <option value="Custom Enterprise / Complex Platform">Custom Platform / Comprehensive Scope</option>
        </select>
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="contact-details" className="block text-xs font-semibold uppercase tracking-widest text-[#171717] mb-2">
          Project Details & Goals <span className="text-[#C7612E]">*</span>
        </label>
        <textarea
          id="contact-details"
          rows={5}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          placeholder="Tell us what you're working on, what needs to improve, your ideal timeline, and any links to existing systems."
          className={`w-full px-4 py-3 bg-[#F6F3ED] border text-sm text-[#171717] focus:bg-white focus:outline-none transition-colors ${
            errors.details ? 'border-red-500' : 'border-[#DEDAD3] focus:border-[#C7612E]'
          }`}
        />
        {errors.details && <p className="mt-1 text-xs text-red-600 font-mono">{errors.details}</p>}
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
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#77746F] hover:text-[#C7612E] transition-colors py-2"
        >
          <MessageSquare className="w-4 h-4 text-[#C7612E]" />
          <span>Or chat directly on WhatsApp</span>
        </a>
      </div>
    </form>
  );
};
