import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { companyConfig } from '../../data/company';
import { ArrowUpRight, Mail, Phone, Globe, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] text-[#F6F3ED] border-t border-[#262624] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Massive Editorial Brand Statement */}
        <div className="pb-16 border-b border-[#262624] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-3">
              Independent Digital Product & Software Studio
            </span>
            <h2 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05]">
              Ideas. <span className="text-[#C7612E]">Engineered.</span>
            </h2>
          </div>
          <div className="max-w-md space-y-4">
            <p className="text-sm text-[#A3A099] leading-relaxed">
              We partner with visionary founders and companies globally to design, architect, and ship high-performance software, custom web systems, and applied AI applications.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#C7612E]">
              <Globe className="w-3.5 h-3.5" />
              <span>Remote-First · Serving Clients Globally</span>
            </div>
          </div>
        </div>

        {/* Middle Grid: Navigation, Services, Direct Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16 border-b border-[#262624]">
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="full" theme="dark" size="md" />
            <p className="text-xs sm:text-sm text-[#77746F] max-w-sm leading-relaxed">
              No account-manager layers. No bloated templates. Direct founder engineering, defensive security standards, and production speed.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={companyConfig.githubOrg} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[#2E2E2B] text-[#A3A099] hover:text-[#C7612E] hover:border-[#C7612E]/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href={companyConfig.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[#2E2E2B] text-[#A3A099] hover:text-[#C7612E] hover:border-[#C7612E]/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a 
                href={companyConfig.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[#2E2E2B] text-[#A3A099] hover:text-[#C7612E] hover:border-[#C7612E]/40 transition-colors"
                aria-label="WhatsApp Direct Line"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E]">Navigation</p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A3A099]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">Selected Work</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Capabilities & Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About the Studio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Start a Project</Link>
              </li>
            </ul>
          </div>

          {/* Core Disciplines */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E]">Disciplines</p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A3A099]">
              <li>
                <Link to="/services#web-design-development" className="hover:text-white transition-colors">Web Architecture</Link>
              </li>
              <li>
                <Link to="/services#product-software-engineering" className="hover:text-white transition-colors">Software Engineering</Link>
              </li>
              <li>
                <Link to="/services#applied-ai-automation" className="hover:text-white transition-colors">Applied AI & Agents</Link>
              </li>
              <li>
                <Link to="/services#digital-product-design" className="hover:text-white transition-colors">Digital Product Design</Link>
              </li>
              <li>
                <Link to="/services#technical-optimization-seo" className="hover:text-white transition-colors">Performance & SEO</Link>
              </li>
            </ul>
          </div>

          {/* Direct Line / Global Dispatch */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E]">Direct Line</p>
            <div className="space-y-3 text-xs sm:text-sm text-[#A3A099]">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C7612E] shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${companyConfig.email}`} className="text-white hover:text-[#C7612E] transition-colors block font-mono">
                    {companyConfig.email}
                  </a>
                  <a href={`mailto:${companyConfig.secondaryEmail}`} className="text-xs text-[#77746F] hover:text-[#C7612E] transition-colors block font-mono">
                    {companyConfig.secondaryEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C7612E] shrink-0 mt-0.5" />
                <a href={companyConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono">
                  {companyConfig.phone} (WhatsApp)
                </a>
              </div>
              <div className="pt-2 text-xs text-[#77746F]">
                <p>Global response window: within 12 hours across all international time zones.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Row: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77746F]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Qavironel Technologies. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-[#C7612E]">Global Remote-First Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
