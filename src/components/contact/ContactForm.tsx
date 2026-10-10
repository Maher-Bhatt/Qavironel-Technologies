import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { companyConfig } from '../../data/company';
import { CheckCircle2, AlertCircle, MessageSquare, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'High-Impact Custom Web Platform',
    timeline: '1–2 Months (Active Product Sprint)',
    engagementModel: 'Full-Cycle Product Architecture & Build',
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
    `Hello Qavironel Technologies, I would like to discuss an engineering project.\n\nName: ${formData.name || 'Not provided'}\nOrganization: ${formData.organization || 'Not provided'}\nFocus: ${formData.projectType}\nTimeline: ${formData.timeline}\nEngagement: ${formData.engagementModel}\nDetails: ${formData.details || 'Let us discuss our project requirements.'}`
  );

  if (isSubmitted) {
    return (
      <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl p-8 sm:p-12 text-center animate-fade-in space-y-6 text-[#0A0A0A] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <div className="w-16 h-16 rounded-full bg-[#E0561B]/10 border border-[#E0561B]/30 text-[#E0561B] mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A]">
            Thank you, {formData.name}.
          </h3>
          <p className="text-sm text-[#52525B] max-w-md mx-auto leading-relaxed font-light">
            Your inquiry has been received. Our founder will review your project requirements and reply within 12–24 hours to <span className="font-semibold text-[#0A0A0A]">{formData.email}</span>.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/919879529957?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E0561B] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#C2410C] transition-colors"
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
                projectType: 'High-Impact Custom Web Platform',
                timeline: '1–2 Months (Active Product Sprint)',
                engagementModel: 'Full-Cycle Product Architecture & Build',
                details: '',
              });
            }}
            className="px-6 py-3.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold uppercase tracking-widest text-[#0A0A0A] hover:bg-[#F4F4F5] transition-colors"
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
          <label htmlFor="contact-name" className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#0A0A0A] mb-2">
            Your Name <span className="text-[#E0561B]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Jane Doe"
            className={`w-full px-4 py-3 bg-white border rounded-lg text-sm text-[#0A0A0A] placeholder-[#71717A] shadow-xs focus:outline-none transition-colors ${
              errors.name ? 'border-red-500' : 'border-[#E5E7EB] focus:border-[#E0561B]'
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500 font-mono">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#0A0A0A] mb-2">
            Email Address <span className="text-[#E0561B]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@company.com"
            className={`w-full px-4 py-3 bg-white border rounded-lg text-sm text-[#0A0A0A] placeholder-[#71717A] shadow-xs focus:outline-none transition-colors ${
              errors.email ? 'border-red-500' : 'border-[#E5E7EB] focus:border-[#E0561B]'
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500 font-mono">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Organization */}
        <div>
          <label htmlFor="contact-org" className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#0A0A0A] mb-2">
            Company / Project Name
          </label>
          <input
            id="contact-org"
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="Acme Inc. / Stealth Startup"
            className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-sm text-[#0A0A0A] placeholder-[#71717A] shadow-xs focus:border-[#E0561B] focus:outline-none transition-colors"
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="contact-type" className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#0A0A0A] mb-2">
            Discipline & Focus Area
          </label>
          <select
            id="contact-type"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-sm text-[#0A0A0A] shadow-xs focus:border-[#E0561B] focus:outline-none transition-colors"
          >
            <option value="High-Impact Custom Web Platform">High-Impact Custom Web Platform</option>
            <option value="Full-Stack SaaS MVP / Web Application">Full-Stack SaaS MVP / Web App</option>
            <option value="Applied AI / LLM & Agentic Workflows">Applied AI / LLM & Agentic Workflows</option>
            <option value="Bespoke E-Commerce Architecture">Bespoke E-Commerce Architecture</option>
            <option value="Brand Identity, UX Design & Design Systems">Brand Identity, UX Design & Systems</option>
            <option value="Performance Engineering & Architecture Audit">Performance Engineering & Audit</option>
          </select>
        </div>
      </div>

      {/* Target Timeline & Engagement Model Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-timeline" className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#0A0A0A] mb-2">
            Target Timeline
          </label>
          <select
            id="contact-timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-sm text-[#0A0A0A] shadow-xs focus:border-[#E0561B] focus:outline-none transition-colors"
          >
            <option value="Immediate (Next 2–4 Weeks)">Immediate (Next 2–4 Weeks)</option>
            <option value="1–2 Months (Active Product Sprint)">1–2 Months (Active Product Sprint)</option>
            <option value="3+ Months (Strategic Roadmap)">3+ Months (Strategic Roadmap)</option>
            <option value="Flexible / Milestone-Driven">Flexible / Milestone-Driven</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-engagement" className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#0A0A0A] mb-2">
            Engagement Model
          </label>
          <select
            id="contact-engagement"
            value={formData.engagementModel}
            onChange={(e) => setFormData({ ...formData, engagementModel: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-sm text-[#0A0A0A] shadow-xs focus:border-[#E0561B] focus:outline-none transition-colors"
          >
            <option value="Full-Cycle Product Architecture & Build">Full-Cycle Product Architecture & Build</option>
            <option value="Design & Frontend Engineering Sprint">Design & Frontend Engineering Sprint</option>
            <option value="AI Integration & Custom Model Fine-Tuning">AI Integration & Custom Workflows</option>
            <option value="Dedicated Technical Studio Retainer">Dedicated Technical Studio Retainer</option>
          </select>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="contact-details" className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#0A0A0A] mb-2">
          Project Details & Goals <span className="text-[#E0561B]">*</span>
        </label>
        <textarea
          id="contact-details"
          rows={5}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          placeholder="Tell us what you're working on, what needs to improve, your target timeline, and any links to existing systems or designs."
          className={`w-full px-4 py-3 bg-white border rounded-lg text-sm text-[#0A0A0A] placeholder-[#71717A] shadow-xs focus:outline-none transition-colors ${
            errors.details ? 'border-red-500' : 'border-[#E5E7EB] focus:border-[#E0561B]'
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
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#52525B] hover:text-[#E0561B] transition-colors py-2 font-semibold"
        >
          <MessageSquare className="w-4 h-4 text-[#E0561B]" />
          <span>Or chat directly on WhatsApp</span>
        </a>
      </div>
    </form>
  );
};
