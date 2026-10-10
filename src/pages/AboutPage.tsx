import { SEO } from '../components/seo/SEO';
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { teamMembers, companyConfig } from '../data/company';
import { 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Terminal, 
  Award, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Lock,
  Calendar,
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { openBookingModal } from '../components/booking/BookingModal';
import { Spatial3DPrism } from '../components/3d/Spatial3DPrism';

export const AboutPage: React.FC = () => {
  const founder = teamMembers[0];

  return (
    <>
      <SEO title="About" />
      <div className="bg-white dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-[#F4F4F5] pt-28 sm:pt-36 pb-24 selection:bg-[#E0561B] selection:text-white transition-colors duration-300">
      <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header with 3D Spatial Crystalline Prism */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-[#E5E7EB] dark:border-white/10">
          <div className="lg:col-span-8 max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B] block mb-3">
              Studio Origins & Philosophy
            </span>
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-[#0A0A0A] dark:text-[#F4F4F5] tracking-tight leading-[1.08] mb-6">
              Design craftsmanship. <br />
              Software engineering rigor.
            </h1>
            <p className="text-lg sm:text-xl text-[#52525B] dark:text-[#A1A1AA] font-light leading-relaxed">
              Qavironel Technologies is a global remote-first technology and digital product studio. We build thoughtful software, high-impact web platforms, and applied AI systems for founders and organizations worldwide who value precision.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center justify-center">
            <Spatial3DPrism size={220} />
          </div>
        </div>

        {/* Narrative Section */}
        <section className="py-20 border-b border-[#E5E7EB] dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E0561B]">
                Why Qavironel Exists
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A0A0A] dark:text-[#F4F4F5] tracking-tight leading-tight">
                Ambitious ideas deserve more than generic templates.
              </h2>
              <div className="flex items-center gap-2 text-xs font-mono text-[#52525B] dark:text-[#A1A1AA] pt-2">
                <Globe className="w-4 h-4 text-[#E0561B]" />
                <span>Remote-first studio · Catering to clients worldwide</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#52525B] dark:text-[#A1A1AA] text-base sm:text-lg leading-relaxed font-light">
              <p>
                The modern digital landscape is saturated with bloated themes, slow drag-and-drop page builders, and agency middlemen who charge large retainers while outsourcing the actual programming.
              </p>
              <p>
                We founded <span className="text-[#0A0A0A] dark:text-white font-semibold">Qavironel Technologies</span> to offer an uncompromising alternative: a direct, founder-led studio that treats every web application, SaaS MVP, and AI workflow as a piece of digital craftsmanship.
              </p>
              <p>
                When you partner with us, you collaborate directly with the lead engineer writing your code. We take pride in sub-second load times, defensive security boundaries, mobile-first touch ergonomics, and clean interfaces that turn visitors into active customers.
              </p>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="py-20 border-b border-[#E5E7EB] dark:border-white/10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#E0561B] block mb-2">
              Our Principles
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A0A0A] dark:text-[#F4F4F5] tracking-tight">
              The standards we build by.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8F9FA] dark:bg-[#121216] border border-[#E5E7EB] dark:border-white/10 rounded-2xl p-8 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#E0561B]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#E0561B]/10 border border-[#E0561B]/20 text-[#E0561B] flex items-center justify-center font-mono font-bold">
                01
              </div>
              <h3 className="font-sans font-bold text-xl text-[#0A0A0A] dark:text-[#F4F4F5]">Radical Honesty</h3>
              <p className="text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                We never fabricate enterprise client logos, inflate project metrics, or pretend to be an 80-person agency. Our work, open-source repositories, and verified code speak for themselves.
              </p>
            </div>

            <div className="bg-[#F8F9FA] dark:bg-[#121216] border border-[#E5E7EB] dark:border-white/10 rounded-2xl p-8 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#E0561B]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#E0561B]/10 border border-[#E0561B]/20 text-[#E0561B] flex items-center justify-center font-mono font-bold">
                02
              </div>
              <h3 className="font-sans font-bold text-xl text-[#0A0A0A] dark:text-[#F4F4F5]">Security by Default</h3>
              <p className="text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                Cybersecurity is not an afterthought. Backed by ethical hacking, CTF competitions, and bug bounties, we build every backend, form, and local runtime with defensive boundaries.
              </p>
            </div>

            <div className="bg-[#F8F9FA] dark:bg-[#121216] border border-[#E5E7EB] dark:border-white/10 rounded-2xl p-8 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#E0561B]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#E0561B]/10 border border-[#E0561B]/20 text-[#E0561B] flex items-center justify-center font-mono font-bold">
                03
              </div>
              <h3 className="font-sans font-bold text-xl text-[#0A0A0A] dark:text-[#F4F4F5]">High-Speed Momentum</h3>
              <p className="text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                We launch web platforms and commerce storefronts in 1 to 2 weeks because we eliminate bureaucratic review cycles and build with modern, high-velocity tooling.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Leadership & Architecture Direction */}
        <section className="py-20 border-b border-[#E5E7EB] dark:border-white/10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#E0561B] block mb-2">
              Studio Leadership & Direction
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A0A0A] dark:text-[#F4F4F5] tracking-tight">
              Technical Direction & Systems Architecture
            </h2>
            <p className="mt-3 text-base text-[#52525B] dark:text-[#A1A1AA]">
              Direct communication. No intermediaries. Tap directly into the systems engineer architecting your code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Founder Profile & Credentials (7 cols) */}
            <div className="lg:col-span-7 bg-[#F8F9FA] dark:bg-[#121216] border border-[#E5E7EB] dark:border-white/10 rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#E5E7EB] dark:border-white/10">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-[#1C1C22] border border-[#E5E7EB] dark:border-white/10 overflow-hidden shrink-0 shadow-sm">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] dark:text-[#F4F4F5]">
                      {founder.name}
                    </h3>
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E0561B] mt-1">
                      {founder.role}
                    </p>
                    <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] font-mono mt-0.5">
                      Remote-First Studio · Vadodara, IN
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  {founder.links.website && (
                    <a
                      href={founder.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#E5E7EB] dark:border-white/10 text-[#0A0A0A] dark:text-[#F4F4F5] hover:text-[#E0561B] dark:hover:text-[#E0561B] hover:border-[#E0561B]/40 shadow-xs transition-colors"
                      aria-label="Founder Portfolio"
                      title="Founder Portfolio"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {founder.links.github && (
                    <a
                      href={founder.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#E5E7EB] dark:border-white/10 text-[#0A0A0A] dark:text-[#F4F4F5] hover:text-[#E0561B] dark:hover:text-[#E0561B] hover:border-[#E0561B]/40 shadow-xs transition-colors"
                      aria-label="Founder GitHub"
                      title="Founder GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {founder.links.linkedin && (
                    <a
                      href={founder.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#E5E7EB] dark:border-white/10 text-[#0A0A0A] dark:text-[#F4F4F5] hover:text-[#E0561B] dark:hover:text-[#E0561B] hover:border-[#E0561B]/40 shadow-xs transition-colors"
                      aria-label="Founder LinkedIn"
                      title="Founder LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed font-light">
                {founder.bio}
              </p>

              <div className="pt-6 border-t border-[#E5E7EB] dark:border-white/10 space-y-3">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A] dark:text-white">
                  Verified Technical Credentials:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#52525B] dark:text-[#A1A1AA]">
                  {founder.credentials.map((cred, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white dark:bg-[#1C1C22] rounded-lg p-3 border border-[#E5E7EB] dark:border-white/10 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E0561B] shrink-0 mt-0.5" />
                      <span className="text-[#0A0A0A] dark:text-[#F4F4F5] leading-snug">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E5E7EB] dark:border-white/10">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A] dark:text-white mb-3">
                  Applied Tech Stack & Competencies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {founder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-white dark:bg-[#1C1C22] border border-[#E5E7EB] dark:border-white/10 rounded text-[0.7rem] font-mono text-[#52525B] dark:text-[#A1A1AA]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Studio Engineering Principles & Direct Engagement (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F8F9FA] dark:bg-[#121216] border border-[#E5E7EB] dark:border-white/10 rounded-2xl p-8 space-y-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E0561B] animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A] dark:text-white">
                    Direct Architecture Model
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C22] border border-[#E5E7EB] dark:border-white/10 space-y-1.5 shadow-xs">
                    <span className="text-[0.68rem] font-mono font-bold text-[#E0561B] uppercase tracking-wider">
                      Zero Fog Protocol
                    </span>
                    <h4 className="font-sans font-bold text-sm text-[#0A0A0A] dark:text-white">
                      Direct Senior Communication
                    </h4>
                    <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                      You collaborate directly with the systems engineer architecting your code. No account-manager translation errors, no bureaucratic telephone games.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C22] border border-[#E5E7EB] dark:border-white/10 space-y-1.5 shadow-xs">
                    <span className="text-[0.68rem] font-mono font-bold text-[#E0561B] uppercase tracking-wider">
                      Performance Target
                    </span>
                    <h4 className="font-sans font-bold text-sm text-[#0A0A0A] dark:text-white">
                      Sub-Second Standard
                    </h4>
                    <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                      Every deliverable is benchmarked against Core Web Vitals to guarantee instant interaction speeds, zero render-blocking bloat, and top SEO rankings.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C22] border border-[#E5E7EB] dark:border-white/10 space-y-1.5 shadow-xs">
                    <span className="text-[0.68rem] font-mono font-bold text-[#E0561B] uppercase tracking-wider">
                      Defensive Engineering
                    </span>
                    <h4 className="font-sans font-bold text-sm text-[#0A0A0A] dark:text-white">
                      Security-Hardened by Default
                    </h4>
                    <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                      OWASP Top 10 compliance, rate-limiting, hardened form validation, and credential encryption embedded from day zero.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => openBookingModal('call')}
                    className="w-full py-3.5 rounded-full bg-[#E0561B] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Discovery with Lead Engineer</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 glass-card rounded-2xl text-[#0A0A0A] dark:text-[#F4F4F5] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] dark:text-[#F4F4F5]">Let's build something exceptional.</h3>
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mt-1 font-light">Direct collaboration with the engineer who cares about the craft.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openBookingModal('call')}
              className="px-5 py-3 rounded-full bg-[#0A0A0A] dark:bg-white hover:bg-black dark:hover:bg-[#F4F4F5] text-white dark:text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E0561B]" />
              <span>Schedule 30-Min Call</span>
            </button>
            <button
              type="button"
              onClick={() => openBookingModal('quotation')}
              className="px-5 py-3 rounded-full bg-[#F4F4F5] dark:bg-[#18181D] hover:bg-[#E5E7EB] dark:hover:bg-[#27272A] text-[#0A0A0A] dark:text-[#F4F4F5] text-xs font-bold uppercase tracking-wider transition-colors border border-[#E5E7EB] dark:border-white/10 flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#E0561B]" />
              <span>Request Quote</span>
            </button>
            <Button to="/contact" variant="primary" size="md" showArrow>
              Start Conversation
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
