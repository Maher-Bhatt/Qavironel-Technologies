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
  const founder = teamMembers.find((m) => m.name === 'Maher Bhatt') || teamMembers[0];
  const cofounder = teamMembers.find((m) => m.name === 'Anurag Pandey') || teamMembers[1];
  const foundingMembers = teamMembers.filter((m) => m.name !== 'Maher Bhatt' && m.name !== 'Anurag Pandey');

  return (
    <>
      <SEO title="About" />
      <div className="bg-[#F6F3ED] dark:bg-[#0C0C0E] text-[#141414] dark:text-[#F6F3ED] pt-28 sm:pt-36 pb-24 selection:bg-[#C7612E] selection:text-white transition-colors duration-300">
      <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header with 3D Spatial Crystalline Prism */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-[#DEDAD3] dark:border-white/10">
          <div className="lg:col-span-8 max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-3">
              Studio Origins & Philosophy
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-[#141414] dark:text-[#F6F3ED] tracking-tight leading-[1.08] mb-6">
              Design craftsmanship. <br />
              Software engineering rigor.
            </h1>
            <p className="text-lg sm:text-xl text-[#57544E] dark:text-[#A6A29A] font-light leading-relaxed">
              Qavironel Technologies is a global remote-first technology and digital product studio. We build thoughtful software, high-impact web platforms, and applied AI systems for founders and organizations worldwide who value precision.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center justify-center">
            <Spatial3DPrism size={220} />
          </div>
        </div>

        {/* Narrative Section */}
        <section className="py-20 border-b border-[#DEDAD3] dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7612E]">
                Why Qavironel Exists
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#141414] dark:text-[#F6F3ED] tracking-tight leading-tight">
                Ambitious ideas deserve more than generic templates.
              </h2>
              <div className="flex items-center gap-2 text-xs font-mono text-[#6E6B65] dark:text-[#A6A29A] pt-2">
                <Globe className="w-4 h-4 text-[#C7612E]" />
                <span>Remote-first studio · Catering to clients worldwide</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#57544E] dark:text-[#A6A29A] text-base sm:text-lg leading-relaxed font-light">
              <p>
                The modern digital landscape is saturated with bloated themes, slow drag-and-drop page builders, and agency middlemen who charge large retainers while outsourcing the actual programming.
              </p>
              <p>
                We founded <span className="text-[#171717] dark:text-white font-semibold">Qavironel Technologies</span> to offer an uncompromising alternative: a direct, founder-led studio that treats every web application, SaaS MVP, and AI workflow as a piece of digital craftsmanship.
              </p>
              <p>
                When you partner with us, you collaborate directly with the lead engineer writing your code. We take pride in sub-second load times, defensive security boundaries, mobile-first touch ergonomics, and clean interfaces that turn visitors into active customers.
              </p>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="py-20 border-b border-[#DEDAD3] dark:border-white/10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
              Our Principles
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#171717] dark:text-[#F6F3ED] tracking-tight">
              The standards we build by.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F6F3ED] dark:bg-[#121216] border border-[#DEDAD3] dark:border-white/10 rounded-2xl p-8 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#C7612E]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center font-mono font-bold">
                01
              </div>
              <h3 className="font-sans font-bold text-xl text-[#171717] dark:text-[#F6F3ED]">Radical Honesty</h3>
              <p className="text-xs sm:text-sm text-[#77746F] dark:text-[#A1A1AA] leading-relaxed">
                We never fabricate enterprise client logos, inflate project metrics, or pretend to be an 80-person agency. Our work, open-source repositories, and verified code speak for themselves.
              </p>
            </div>

            <div className="bg-[#F6F3ED] dark:bg-[#121216] border border-[#DEDAD3] dark:border-white/10 rounded-2xl p-8 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#C7612E]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center font-mono font-bold">
                02
              </div>
              <h3 className="font-sans font-bold text-xl text-[#171717] dark:text-[#F6F3ED]">Security by Default</h3>
              <p className="text-xs sm:text-sm text-[#77746F] dark:text-[#A1A1AA] leading-relaxed">
                Cybersecurity is not an afterthought. Backed by ethical hacking, CTF competitions, and bug bounties, we build every backend, form, and local runtime with defensive boundaries.
              </p>
            </div>

            <div className="bg-[#F6F3ED] dark:bg-[#121216] border border-[#DEDAD3] dark:border-white/10 rounded-2xl p-8 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#C7612E]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center font-mono font-bold">
                03
              </div>
              <h3 className="font-sans font-bold text-xl text-[#171717] dark:text-[#F6F3ED]">High-Speed Momentum</h3>
              <p className="text-xs sm:text-sm text-[#77746F] dark:text-[#A1A1AA] leading-relaxed">
                We launch web platforms and commerce storefronts in 1 to 2 weeks because we eliminate bureaucratic review cycles and build with modern, high-velocity tooling.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Team Presentation */}
        <section className="py-20 border-b border-[#DEDAD3] dark:border-white/10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2.5">
              Studio Leadership & Practice
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#141414] dark:text-[#F6F3ED] tracking-tight leading-[1.1]">
              People Behind the Engineering
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#57544E] dark:text-[#A6A29A] font-light leading-relaxed max-w-2xl">
              Different strengths. One shared commitment to building thoughtful technology.
            </p>
          </div>

          {/* Primary Leadership: Founder & Co-Founder Wide Editorial Arrangement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Founder Profile */}
            {founder && (
              <div className="bg-[#F6F3ED] dark:bg-[#121216] border border-[#DEDAD3] dark:border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#C7612E]/40 transition-colors">
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pb-6 border-b border-[#DEDAD3] dark:border-white/10">
                    <div className="flex items-center gap-5">
                      <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-xl overflow-hidden shrink-0 border border-[#DEDAD3] dark:border-white/10 shadow-xs bg-black/5 dark:bg-white/5">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <span className="text-[0.68rem] font-mono font-semibold uppercase tracking-widest text-[#77746F] dark:text-[#A6A29A] block mb-1">
                          FOUNDER · SYSTEMS ARCHITECT
                        </span>
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#141414] dark:text-[#F6F3ED]">
                          {founder.name}
                        </h3>
                        <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7612E] mt-1">
                          {founder.role}
                        </p>
                        <p className="text-xs text-[#77746F] dark:text-[#A6A29A] font-mono mt-0.5">
                          Vadodara, IN · Global Studio
                        </p>
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-2">
                      {founder.links.website && (
                        <a
                          href={founder.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 text-[#141414] dark:text-[#F6F3ED] hover:text-[#C7612E] dark:hover:text-[#C7612E] hover:border-[#C7612E]/40 shadow-xs transition-colors"
                          aria-label="Personal Portfolio"
                          title="Personal Portfolio"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {founder.links.github && (
                        <a
                          href={founder.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 text-[#141414] dark:text-[#F6F3ED] hover:text-[#C7612E] dark:hover:text-[#C7612E] hover:border-[#C7612E]/40 shadow-xs transition-colors"
                          aria-label="GitHub Profile"
                          title="GitHub Profile"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {founder.links.linkedin && (
                        <a
                          href={founder.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 text-[#141414] dark:text-[#F6F3ED] hover:text-[#C7612E] dark:hover:text-[#C7612E] hover:border-[#C7612E]/40 shadow-xs transition-colors"
                          aria-label="LinkedIn Profile"
                          title="LinkedIn Profile"
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-6 text-sm sm:text-base text-[#57544E] dark:text-[#A6A29A] leading-relaxed font-light">
                    {founder.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DEDAD3] dark:border-white/10">
                  <p className="text-[0.68rem] font-mono font-semibold uppercase tracking-wider text-[#77746F] dark:text-[#A6A29A] mb-3">
                    Core Disciplines:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {founder.credentials.map((discipline) => (
                      <span
                        key={discipline}
                        className="px-3 py-1.5 bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 rounded-md text-xs font-mono text-[#141414] dark:text-[#F6F3ED] shadow-xs"
                      >
                        {discipline}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Backend Co-Founder Profile */}
            {cofounder && (
              <div className="bg-[#F6F3ED] dark:bg-[#121216] border border-[#DEDAD3] dark:border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#C7612E]/40 transition-colors">
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pb-6 border-b border-[#DEDAD3] dark:border-white/10">
                    <div className="flex items-center gap-5">
                      <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-xl overflow-hidden shrink-0 border border-[#DEDAD3] dark:border-white/10 shadow-xs bg-black/5 dark:bg-white/5">
                        <img
                          src={cofounder.image}
                          alt={cofounder.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <span className="text-[0.68rem] font-mono font-semibold uppercase tracking-widest text-[#C7612E] dark:text-[#d96f3b] flex items-center gap-1.5 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C7612E]" />
                          CO-FOUNDER · BACKEND LEAD
                        </span>
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#141414] dark:text-[#F6F3ED]">
                          {cofounder.name}
                        </h3>
                        <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7612E] mt-1">
                          {cofounder.role}
                        </p>
                        <p className="text-xs text-[#77746F] dark:text-[#A6A29A] font-mono mt-0.5">
                          Vadodara, IN · Global Studio
                        </p>
                      </div>
                    </div>

                    {/* Social links (if available) */}
                    <div className="flex items-center gap-2">
                      {cofounder.links.github && (
                        <a
                          href={cofounder.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 text-[#141414] dark:text-[#F6F3ED] hover:text-[#C7612E] dark:hover:text-[#C7612E] hover:border-[#C7612E]/40 shadow-xs transition-colors"
                          aria-label="GitHub Profile"
                          title="GitHub Profile"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {cofounder.links.linkedin && (
                        <a
                          href={cofounder.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 text-[#141414] dark:text-[#F6F3ED] hover:text-[#C7612E] dark:hover:text-[#C7612E] hover:border-[#C7612E]/40 shadow-xs transition-colors"
                          aria-label="LinkedIn Profile"
                          title="LinkedIn Profile"
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-6 text-sm sm:text-base text-[#57544E] dark:text-[#A6A29A] leading-relaxed font-light">
                    {cofounder.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DEDAD3] dark:border-white/10">
                  <p className="text-[0.68rem] font-mono font-semibold uppercase tracking-wider text-[#77746F] dark:text-[#A6A29A] mb-3">
                    Core Disciplines:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cofounder.credentials.map((discipline) => (
                      <span
                        key={discipline}
                        className="px-3 py-1.5 bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 rounded-md text-xs font-mono text-[#141414] dark:text-[#F6F3ED] shadow-xs"
                      >
                        {discipline}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Founding Team Suite */}
          {foundingMembers.length > 0 && (
            <div className="mt-8 lg:mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                {foundingMembers.map((member) => (
                  <div
                    key={member.name}
                    className="bg-[#F6F3ED] dark:bg-[#121216] border border-[#DEDAD3] dark:border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#C7612E]/40 transition-colors"
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pb-6 border-b border-[#DEDAD3] dark:border-white/10">
                        <div className="flex items-center gap-5">
                          <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-xl overflow-hidden shrink-0 border border-[#DEDAD3] dark:border-white/10 shadow-xs bg-black/5 dark:bg-white/5">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div>
                            <span className="text-[0.68rem] font-mono font-semibold uppercase tracking-widest text-[#77746F] dark:text-[#A6A29A] block mb-1">
                              FOUNDING TEAM
                            </span>
                            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#141414] dark:text-[#F6F3ED]">
                              {member.name}
                            </h3>
                            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7612E] mt-1">
                              {member.role}
                            </p>
                            <p className="text-xs text-[#77746F] dark:text-[#A6A29A] font-mono mt-0.5">
                              Vadodara, IN · Global Studio
                            </p>
                          </div>
                        </div>

                        {/* Social links (if available) */}
                        <div className="flex items-center gap-2">
                          {member.links.linkedin && (
                            <a
                              href={member.links.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 text-[#141414] dark:text-[#F6F3ED] hover:text-[#C7612E] dark:hover:text-[#C7612E] hover:border-[#C7612E]/40 shadow-xs transition-colors"
                              aria-label={`${member.name} LinkedIn Profile`}
                              title="LinkedIn Profile"
                            >
                              <LinkedinIcon className="w-4 h-4" />
                            </a>
                          )}
                          {member.links.github && (
                            <a
                              href={member.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 text-[#141414] dark:text-[#F6F3ED] hover:text-[#C7612E] dark:hover:text-[#C7612E] hover:border-[#C7612E]/40 shadow-xs transition-colors"
                              aria-label={`${member.name} GitHub Profile`}
                              title="GitHub Profile"
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="mt-6 text-sm sm:text-base text-[#57544E] dark:text-[#A6A29A] leading-relaxed font-light">
                        {member.bio}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#DEDAD3] dark:border-white/10">
                      <p className="text-[0.68rem] font-mono font-semibold uppercase tracking-wider text-[#77746F] dark:text-[#A6A29A] mb-3">
                        Core Disciplines:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.credentials.map((discipline) => (
                          <span
                            key={discipline}
                            className="px-3 py-1.5 bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 rounded-md text-xs font-mono text-[#141414] dark:text-[#F6F3ED] shadow-xs"
                          >
                            {discipline}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Direct Architecture Model Strip */}
          <div className="mt-12 bg-[#F6F3ED] dark:bg-[#121216] border border-[#DEDAD3] dark:border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#DEDAD3] dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C7612E] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#141414] dark:text-white">
                  Direct Architecture Model
                </span>
              </div>
              <span className="text-xs font-mono text-[#77746F] dark:text-[#A6A29A]">
                NO BUREAUCRACY · 100% BUILDER ACCESS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 space-y-1.5 shadow-xs">
                <span className="text-[0.68rem] font-mono font-bold text-[#C7612E] uppercase tracking-wider">
                  Zero Fog Protocol
                </span>
                <h4 className="font-sans font-bold text-sm text-[#141414] dark:text-white">
                  Direct Senior Communication
                </h4>
                <p className="text-xs text-[#57544E] dark:text-[#A6A29A] leading-relaxed font-light">
                  You collaborate directly with the systems engineer architecting your code. No account-manager translation errors, no bureaucratic telephone games.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 space-y-1.5 shadow-xs">
                <span className="text-[0.68rem] font-mono font-bold text-[#C7612E] uppercase tracking-wider">
                  Performance Target
                </span>
                <h4 className="font-sans font-bold text-sm text-[#141414] dark:text-white">
                  Production Performance
                </h4>
                <p className="text-xs text-[#57544E] dark:text-[#A6A29A] leading-relaxed font-light">
                  Every deliverable is systematically audited against Core Web Vitals to optimize interaction latency, minimize render-blocking scripts, and improve discoverability.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 space-y-1.5 shadow-xs">
                <span className="text-[0.68rem] font-mono font-bold text-[#C7612E] uppercase tracking-wider">
                  Defensive Engineering
                </span>
                <h4 className="font-sans font-bold text-sm text-[#141414] dark:text-white">
                  Security-Hardened by Default
                </h4>
                <p className="text-xs text-[#57544E] dark:text-[#A6A29A] leading-relaxed font-light">
                  OWASP Top 10 compliance, rate-limiting, hardened form validation, and credential encryption embedded from day zero.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#57544E] dark:text-[#A6A29A] font-light">
                Available for discovery discussions and architecture sprints with international founders.
              </p>
              <button
                type="button"
                onClick={() => openBookingModal('call')}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C7612E] hover:bg-[#98431F] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Discovery Call</span>
              </button>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 glass-card rounded-2xl text-[#171717] dark:text-[#F6F3ED] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-bold text-2xl text-[#171717] dark:text-[#F6F3ED]">Let's build something exceptional.</h3>
            <p className="text-sm text-[#77746F] dark:text-[#A1A1AA] mt-1 font-light">Direct collaboration with the engineer who cares about the craft.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openBookingModal('call')}
              className="px-5 py-3 rounded-full bg-[#171717] dark:bg-white hover:bg-black dark:hover:bg-[#F6F3ED] text-white dark:text-[#171717] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C7612E]" />
              <span>Schedule 30-Min Call</span>
            </button>
            <button
              type="button"
              onClick={() => openBookingModal('quotation')}
              className="px-5 py-3 rounded-full bg-[#F6F3ED] dark:bg-[#20201E] hover:bg-[#DEDAD3] dark:hover:bg-[#2D2D2A] text-[#171717] dark:text-[#F6F3ED] text-xs font-bold uppercase tracking-wider transition-colors border border-[#DEDAD3] dark:border-white/10 flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#C7612E]" />
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
