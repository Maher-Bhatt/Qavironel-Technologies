import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { companyConfig } from '../../data/company';
import { ArrowUpRight, Mail, Phone, Globe, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F9FA] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-[#F4F4F5] border-t border-[#E5E7EB] dark:border-white/10 pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
        {/* Massive Editorial Brand Statement */}
        <div className="pb-16 border-b border-[#E5E7EB] dark:border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B] block mb-3">
              Independent Digital Product & Software Studio
            </span>
            <h2 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#0A0A0A] dark:text-[#F4F4F5] leading-[1.05]">
              Ideas. <span className="text-[#E0561B]">Engineered.</span>
            </h2>
          </div>
          <div className="max-w-md space-y-4">
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
              We partner with visionary founders and companies globally to design, architect, and ship high-performance software, custom web systems, and applied AI applications.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#E0561B] font-semibold">
              <Globe className="w-3.5 h-3.5" />
              <span>Remote-First · Serving Clients Globally</span>
            </div>
          </div>
        </div>

        {/* Middle Grid: Navigation, Services, Direct Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16 border-b border-[#E5E7EB] dark:border-white/10">
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="full" size="md" />
            <p className="text-xs sm:text-sm text-[#52525B] max-w-sm leading-relaxed">
              No account-manager layers. No bloated templates. Direct founder engineering, defensive security standards, and production speed.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={companyConfig.githubOrg} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#E5E7EB] dark:border-white/10 text-[#0A0A0A] dark:text-[#F4F4F5] hover:text-[#E0561B] dark:hover:text-[#E0561B] hover:border-[#E0561B]/40 shadow-xs transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href={companyConfig.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#E5E7EB] dark:border-white/10 text-[#0A0A0A] dark:text-[#F4F4F5] hover:text-[#E0561B] dark:hover:text-[#E0561B] hover:border-[#E0561B]/40 shadow-xs transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a 
                href={companyConfig.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#E5E7EB] dark:border-white/10 text-[#0A0A0A] dark:text-[#F4F4F5] hover:text-[#E0561B] dark:hover:text-[#E0561B] hover:border-[#E0561B]/40 shadow-xs transition-colors"
                aria-label="WhatsApp Direct Line"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E0561B]">Navigation</p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#52525B]">
              <li>
                <Link to="/" className="hover:text-[#0A0A0A] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#0A0A0A] transition-colors">Selected Work</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0A0A0A] transition-colors">Capabilities & Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0A0A0A] transition-colors">About the Studio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0A0A0A] transition-colors">Start a Project</Link>
              </li>
            </ul>
          </div>

          {/* Core Disciplines */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E0561B]">Disciplines</p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#52525B]">
              <li>
                <Link to="/services#web-design-development" className="hover:text-[#0A0A0A] transition-colors">Web Architecture</Link>
              </li>
              <li>
                <Link to="/services#product-software-engineering" className="hover:text-[#0A0A0A] transition-colors">Software Engineering</Link>
              </li>
              <li>
                <Link to="/services#applied-ai-automation" className="hover:text-[#0A0A0A] transition-colors">Applied AI & Agents</Link>
              </li>
              <li>
                <Link to="/services#digital-product-design" className="hover:text-[#0A0A0A] transition-colors">Digital Product Design</Link>
              </li>
              <li>
                <Link to="/services#technical-optimization-seo" className="hover:text-[#0A0A0A] transition-colors">Performance & SEO</Link>
              </li>
            </ul>
          </div>

          {/* Direct Line / Global Dispatch */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E0561B]">Direct Line</p>
            <div className="space-y-3 text-xs sm:text-sm text-[#52525B]">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E0561B] shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${companyConfig.email}`} className="text-[#0A0A0A] hover:text-[#E0561B] transition-colors block font-mono font-semibold">
                    {companyConfig.email}
                  </a>
                  <a href={`mailto:${companyConfig.secondaryEmail}`} className="text-xs text-[#71717A] hover:text-[#E0561B] transition-colors block font-mono">
                    {companyConfig.secondaryEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E0561B] shrink-0 mt-0.5" />
                <a href={companyConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#0A0A0A] transition-colors font-mono">
                  {companyConfig.phone} (WhatsApp)
                </a>
              </div>
              <div className="pt-2 text-xs text-[#71717A]">
                <p>Global response window: within 12 hours across all international time zones.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Row: Copyright, Theme Switcher & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A] dark:text-[#A1A1AA]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Qavironel Technologies. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <ThemeToggle variant="pill" />
            <Link to="/privacy" className="hover:text-[#0A0A0A] dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#0A0A0A] dark:hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-[#E0561B] font-semibold">Global Remote-First Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

