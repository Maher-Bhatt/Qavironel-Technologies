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
    <footer className="bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#FAFAFA] border-t border-black/[0.08] dark:border-white/10 pt-24 pb-28 sm:pb-32 md:pb-12 transition-colors duration-300">
      <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
        {/* Massive Editorial Brand Statement */}
        <div className="pb-16 border-b border-black/[0.08] dark:border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 block mb-3">
              Independent Digital Product & Software Studio
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#0A0A0A] dark:text-white leading-[1.05]">
              Ideas. <span className="text-zinc-400 dark:text-zinc-500 font-light">Engineered.</span>
            </h2>
          </div>
          <div className="max-w-md space-y-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We partner with visionary founders and companies globally to design, architect, and ship high-performance software, custom web systems, and applied AI applications.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 font-semibold">
              <Globe className="w-3.5 h-3.5" />
              <span>Remote-First · Serving Clients Globally</span>
            </div>
          </div>
        </div>

        {/* Middle Grid: Navigation, Services, Direct Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16 border-b border-black/[0.08] dark:border-white/10">
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="full" size="md" showTagline={true} />
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              No account-manager layers. No bloated templates. Direct founder engineering, defensive security standards, and production speed.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={companyConfig.githubOrg} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 text-[#0A0A0A] dark:text-white hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 shadow-xs transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href={companyConfig.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 text-[#0A0A0A] dark:text-white hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 shadow-xs transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a 
                href={companyConfig.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 text-[#0A0A0A] dark:text-white hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 shadow-xs transition-colors"
                aria-label="WhatsApp Direct Line"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Navigation</p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-black dark:hover:text-white transition-colors">Selected Work</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-black dark:hover:text-white transition-colors">Capabilities & Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">About the Studio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Let's Talk</Link>
              </li>
            </ul>
          </div>

          {/* Core Disciplines */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Disciplines</p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              <li>
                <Link to="/services#web-design-development" className="hover:text-black dark:hover:text-white transition-colors">Web Architecture</Link>
              </li>
              <li>
                <Link to="/services#product-software-engineering" className="hover:text-black dark:hover:text-white transition-colors">Software Engineering</Link>
              </li>
              <li>
                <Link to="/services#applied-ai-automation" className="hover:text-black dark:hover:text-white transition-colors">Applied AI & Agents</Link>
              </li>
              <li>
                <Link to="/services#digital-product-design" className="hover:text-black dark:hover:text-white transition-colors">Digital Product Design</Link>
              </li>
              <li>
                <Link to="/services#technical-optimization-seo" className="hover:text-black dark:hover:text-white transition-colors">Performance & SEO</Link>
              </li>
            </ul>
          </div>

          {/* Direct Line / Global Dispatch */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Direct Line</p>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${companyConfig.email}`} className="text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors block font-mono font-semibold">
                    {companyConfig.email}
                  </a>
                  <a href={`mailto:${companyConfig.secondaryEmail}`} className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-white transition-colors block font-mono">
                    {companyConfig.secondaryEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />
                <a href={companyConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors font-mono">
                  {companyConfig.phone} (WhatsApp)
                </a>
              </div>
              <div className="pt-2 text-xs text-zinc-500 dark:text-zinc-400">
                <p>Global response window: within 12 hours across all international time zones.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Row: Copyright, Theme Switcher & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Qavironel Technologies. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-[0.72rem] font-mono">
            <ThemeToggle variant="pill" />
            <span className="text-zinc-300 dark:text-white/15 hidden sm:inline" aria-hidden="true">|</span>
            <Link 
              to="/privacy" 
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-white transition-colors inline-flex items-center gap-1 group py-1"
            >
              <span>Privacy Policy</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500 dark:text-zinc-400">↗</span>
            </Link>
            <span className="text-zinc-300 dark:text-white/15 hidden sm:inline" aria-hidden="true">·</span>
            <Link 
              to="/terms" 
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-white transition-colors inline-flex items-center gap-1 group py-1"
            >
              <span>Terms of Service</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500 dark:text-zinc-400">↗</span>
            </Link>
            <span className="text-zinc-300 dark:text-white/15 hidden sm:inline" aria-hidden="true">|</span>
            <span className="text-zinc-500 dark:text-zinc-400 font-semibold tracking-wide">Global Remote-First Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

