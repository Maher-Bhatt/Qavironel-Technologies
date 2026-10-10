import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '../ui/Button';
import { playSuccessSound, playErrorSound } from '../../utils/soundEffects';

interface ContactFormProps {
  theme?: 'light' | 'dark';
}

export const ContactForm: React.FC<ContactFormProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'High-Impact Custom Web Platform',
    timeline: 'Immediate (Next 2-4 Weeks)',
    engagementModel: 'Full-Cycle Product Architecture & Build',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.details.trim()) newErrors.details = 'Project details are required';
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      playErrorSound();
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    playSuccessSound();

    // Clear form
    setFormData({
      name: '',
      email: '',
      organization: '',
      projectType: 'High-Impact Custom Web Platform',
      timeline: 'Immediate (Next 2-4 Weeks)',
      engagementModel: 'Full-Cycle Product Architecture & Build',
      details: '',
    });
    alert('Thank you. We will respond within 12 hours.');
  };

  const whatsappMessage = encodeURIComponent(`Hi Qavironel Team, I'm interested in discussing a project.\n\nName: ${formData.name}\nType: ${formData.projectType}`);

  // Theme-specific classes
  const labelClass = `block text-xs font-mono font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gray-400' : 'text-[#0A0A0A]'}`;
  const inputClass = `w-full px-5 py-4 rounded-xl text-sm transition-all shadow-sm focus:outline-none ${
    isDark 
      ? 'bg-white/5 border-white/10 text-white placeholder-white/40 focus:bg-white/10 focus:border-[#E0561B]' 
      : 'bg-white border-[#E5E7EB] text-[#0A0A0A] placeholder-[#71717A] focus:border-[#E0561B]'
  } border`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Your Name <span className="text-[#E0561B]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Jane Doe"
            className={`${inputClass} ${errors.name ? 'border-red-500' : ''}`}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email Address <span className="text-[#E0561B]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@company.com"
            className={`${inputClass} ${errors.email ? 'border-red-500' : ''}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-org" className={labelClass}>
            Company / Project Name
          </label>
          <input
            id="contact-org"
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
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
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className={inputClass}
          >
            <option value="High-Impact Custom Web Platform" className="text-black">High-Impact Custom Web Platform</option>
            <option value="Full-Stack SaaS MVP / Web Application" className="text-black">Full-Stack SaaS MVP / Web App</option>
            <option value="Applied AI / LLM & Agentic Workflows" className="text-black">Applied AI / LLM & Agentic Workflows</option>
            <option value="Bespoke E-Commerce Architecture" className="text-black">Bespoke E-Commerce Architecture</option>
            <option value="Brand Identity, UX Design & Design Systems" className="text-black">Brand Identity, UX Design & Systems</option>
            <option value="Performance Engineering & Architecture Audit" className="text-black">Performance Engineering & Audit</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-timeline" className={labelClass}>
            Target Timeline
          </label>
          <select
            id="contact-timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className={inputClass}
          >
            <option value="Immediate (Next 2-4 Weeks)" className="text-black">Immediate (Next 2-4 Weeks)</option>
            <option value="1-2 Months (Active Product Sprint)" className="text-black">1-2 Months (Active Product Sprint)</option>
            <option value="3+ Months (Strategic Roadmap)" className="text-black">3+ Months (Strategic Roadmap)</option>
            <option value="Flexible / Milestone-Driven" className="text-black">Flexible / Milestone-Driven</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-engagement" className={labelClass}>
            Engagement Model
          </label>
          <select
            id="contact-engagement"
            value={formData.engagementModel}
            onChange={(e) => setFormData({ ...formData, engagementModel: e.target.value })}
            className={inputClass}
          >
            <option value="Full-Cycle Product Architecture & Build" className="text-black">Full-Cycle Product Architecture & Build</option>
            <option value="Design & Frontend Engineering Sprint" className="text-black">Design & Frontend Engineering Sprint</option>
            <option value="AI Integration & Custom Model Fine-Tuning" className="text-black">AI Integration & Custom Workflows</option>
            <option value="Dedicated Technical Studio Retainer" className="text-black">Dedicated Technical Studio Retainer</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-details" className={labelClass}>
          Project Details & Goals <span className="text-[#E0561B]">*</span>
        </label>
        <textarea
          id="contact-details"
          rows={5}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          placeholder="Tell us what you're working on, what needs to improve, your target timeline, and any links to existing systems or designs."
          className={`${inputClass} ${errors.details ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto shadow-xl shadow-[#E0561B]/20"
        >
          {isSubmitting ? 'Sending Request...' : 'Send Project Inquiry'}
        </Button>

        <a
          href={`https://wa.me/919879529957?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider transition-colors font-bold ${
            isDark ? 'text-gray-400 hover:text-white' : 'text-[#52525B] hover:text-[#E0561B]'
          }`}
        >
          <MessageSquare className="w-4 h-4 text-[#E0561B]" />
          <span>Or chat directly on WhatsApp</span>
        </a>
      </div>
    </form>
  );
};

