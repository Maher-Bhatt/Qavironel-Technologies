import React from 'react';
import { useLocation } from 'react-router-dom';
import { companyConfig } from '../data/company';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const isTerms = location.pathname.includes('terms');

  return (
    <div className="bg-[#FBF9F5] text-[#171717] pt-32 sm:pt-40 pb-24 selection:bg-[#C7612E] selection:text-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-2">
          {isTerms ? 'Terms of Service' : 'Privacy Policy'}
        </span>
        <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#171717] tracking-tight mb-8">
          {isTerms ? 'Terms of Service' : 'Privacy Policy'}
        </h1>

        <div className="space-y-6 text-sm text-[#6E6B65] leading-relaxed font-light">
          <p>
            Last Updated: March 2026
          </p>

          <section className="space-y-3 pt-6 border-t border-[#E5E2DC]">
            <h2 className="text-lg font-bold text-[#171717] font-sans">
              1. Overview & Operating Model
            </h2>
            <p>
              Qavironel Technologies operates as an independent, remote-first software engineering and digital product studio. We provide custom software architecture, web development, applied AI workflows, and related technology consulting to clients worldwide.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#E5E2DC]">
            <h2 className="text-lg font-bold text-[#171717] font-sans">
              2. Data Protection & Confidentiality
            </h2>
            <p>
              We treat client intellectual property, technical requirements, and private credentials with strict confidentiality. We do not sell, distribute, or unethically disclose client data to unauthorized third parties. All client interactions adhere to defensive security standards.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#E5E2DC]">
            <h2 className="text-lg font-bold text-[#171717] font-sans">
              3. Contact Information
            </h2>
            <p>
              For any legal or privacy inquiries, contact the studio directly at{' '}
              <a href={`mailto:${companyConfig.email}`} className="text-[#C7612E] hover:underline font-mono font-semibold">
                {companyConfig.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
