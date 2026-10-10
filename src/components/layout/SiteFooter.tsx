import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { companyConfig } from '../../data/company';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171717] text-[#F6F3ED] border-t border-[#2A2A28] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Upper Row: Brand & Big Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2A2A28]">
          <div className="lg:col-span-6 space-y-6">
            <Logo variant="full" theme="dark" size="lg" />
            <p className="text-2xl sm:text-3xl font-light text-[#F6F3ED] max-w-md tracking-tight leading-snug">
              Ideas. <span className="font-semibold text-[#C7612E]">Engineered.</span>
            </p>
            <p className="text-sm text-[#77746F] max-w-md leading-relaxed font-normal">
              Qavironel Technologies is an independent digital product and technology studio. We bring together strategy, design, full-stack software engineering, and applied AI to turn ambitious ideas into useful digital products.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href={companyConfig.githubOrg} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#2E2E2B] text-[#77746F] hover:text-[#C7612E] hover:border-[#C7612E]/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href={companyConfig.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#2E2E2B] text-[#77746F] hover:text-[#C7612E] hover:border-[#C7612E]/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a 
                href={companyConfig.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#2E2E2B] text-[#77746F] hover:text-[#C7612E] hover:border-[#C7612E]/40 transition-colors"
                aria-label="WhatsApp Contact"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E]">Navigation</p>
            <ul className="space-y-3 text-sm text-[#77746F]">
              <li>
                <Link to="/" className="hover:text-[#F6F3ED] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#F6F3ED] transition-colors">Selected Work</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F6F3ED] transition-colors">Services & Capabilities</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F6F3ED] transition-colors">About the Studio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F6F3ED] transition-colors">Start a Project</Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E]">Disciplines</p>
            <ul className="space-y-3 text-sm text-[#77746F]">
              <li>
                <Link to="/services#web-design-development" className="hover:text-[#F6F3ED] transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services#product-software-engineering" className="hover:text-[#F6F3ED] transition-colors">Software Engineering</Link>
              </li>
              <li>
                <Link to="/services#applied-ai-automation" className="hover:text-[#F6F3ED] transition-colors">Applied AI & Tools</Link>
              </li>
              <li>
                <Link to="/services#digital-product-design" className="hover:text-[#F6F3ED] transition-colors">Digital Product Design</Link>
              </li>
              <li>
                <Link to="/services#technical-optimization-seo" className="hover:text-[#F6F3ED] transition-colors">SEO & Performance</Link>
              </li>
            </ul>
          </div>

          {/* Studio Office / Contact */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E]">Contact</p>
            <div className="space-y-3 text-sm text-[#77746F]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C7612E] shrink-0 mt-0.5" />
                <span>Vadodara, Gujarat, India</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C7612E] shrink-0 mt-0.5" />
                <a href={`mailto:${companyConfig.email}`} className="hover:text-[#F6F3ED] transition-colors break-all">
                  {companyConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C7612E] shrink-0 mt-0.5" />
                <a href={companyConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#F6F3ED] transition-colors">
                  {companyConfig.phone}
                </a>
              </div>
              <p className="text-xs text-[#77746F]/80 pt-2 border-t border-[#2E2E2B]">
                Working with clients across India and internationally.
              </p>
            </div>
          </div>
        </div>

        {/* Lower Row: Copyright & Honest Provenance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77746F]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Qavironel Technologies. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-center sm:text-right">
            <span>Ideas. Engineered.</span>
            <span>·</span>
            <span className="text-[#F6F3ED]/60">Evolved from Velocity Web</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
