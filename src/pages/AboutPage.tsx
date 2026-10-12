import { SEO } from '../components/seo/SEO';
import React from 'react';
import { motion } from 'framer-motion';
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
  FileText,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { openBookingModal } from '../components/booking/BookingModal';
import { Spatial3DPrism } from '../components/3d/Spatial3DPrism';

export const AboutPage: React.FC = () => {
  const getMemberBadge = (idx: number) => {
    switch (idx) {
      case 0:
        return 'FOUNDER · SYSTEMS ARCHITECT';
      case 1:
        return 'CO-FOUNDER · BACKEND LEAD';
      case 2:
        return 'FOUNDING TEAM · FRONTEND & OPS';
      case 3:
        return 'FOUNDING TEAM · UI & OPERATIONS';
      default:
        return 'CORE TEAM';
    }
  };

  const getCredentialsLabel = (idx: number) => {
    switch (idx) {
      case 0:
        return 'Verified Technical Credentials:';
      case 1:
        return 'Core Architecture & Systems Focus:';
      case 2:
        return 'Core Focus & Responsibilities:';
      case 3:
        return 'Core Focus & Responsibilities:';
      default:
        return 'Core Capabilities:';
    }
  };

  const getSkillsLabel = (idx: number) => {
    switch (idx) {
      case 0:
        return 'Applied Tech Stack & Competencies:';
      case 1:
        return 'Backend Tech Stack & Infrastructure:';
      case 2:
        return 'Frontend & Operational Competencies:';
      case 3:
        return 'UI Design & Workflow Competencies:';
      default:
        return 'Technical Competencies:';
    }
  };

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

          {/* Studio Telemetry Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-8 border-b border-[#DEDAD3] dark:border-white/10">
            <div className="bg-[#F6F3ED] dark:bg-[#121216] border border-[#DEDAD3] dark:border-white/10 rounded-xl p-5 shadow-xs hover:border-[#C7612E]/40 transition-colors">
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-[#77746F] dark:text-[#A6A29A] block mb-1">
                OPERATING MODEL
              </span>
              <div className="text-lg sm:text-2xl font-display font-bold text-[#141414] dark:text-[#F6F3ED]">
                Remote-First Studio
              </div>
              <p className="text-xs font-mono text-[#C7612E] mt-1">Global Client Reach</p>
            </div>

            <div className="bg-[#F6F3ED] dark:bg-[#121216] border border-[#DEDAD3] dark:border-white/10 rounded-xl p-5 shadow-xs hover:border-[#C7612E]/40 transition-colors">
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-[#77746F] dark:text-[#A6A29A] block mb-1">
                DELIVERY CADENCE
              </span>
              <div className="text-lg sm:text-2xl font-display font-bold text-[#141414] dark:text-[#F6F3ED]">
                1–2 Week Sprints
              </div>
              <p className="text-xs font-mono text-[#C7612E] mt-1">High-Velocity Shipping</p>
            </div>

            <div className="bg-[#F6F3ED] dark:bg-[#121216] border border-[#DEDAD3] dark:border-white/10 rounded-xl p-5 shadow-xs hover:border-[#C7612E]/40 transition-colors">
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-[#77746F] dark:text-[#A6A29A] block mb-1">
                SECURITY POSTURE
              </span>
              <div className="text-lg sm:text-2xl font-display font-bold text-[#141414] dark:text-[#F6F3ED]">
                Defensive by Default
              </div>
              <p className="text-xs font-mono text-[#C7612E] mt-1">OWASP & DPAPI Boundaries</p>
            </div>

            <div className="bg-[#F6F3ED] dark:bg-[#121216] border border-[#DEDAD3] dark:border-white/10 rounded-xl p-5 shadow-xs hover:border-[#C7612E]/40 transition-colors">
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-[#77746F] dark:text-[#A6A29A] block mb-1">
                COLLABORATION
              </span>
              <div className="text-lg sm:text-2xl font-display font-bold text-[#141414] dark:text-[#F6F3ED]">
                100% Direct Access
              </div>
              <p className="text-xs font-mono text-[#C7612E] mt-1">Zero Middlemen or Fog</p>
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

          {/* Meet the Team — Studio Leadership & Founding Profiles */}
          <section className="py-20 border-b border-[#DEDAD3] dark:border-white/10">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2.5">
                Studio Leadership & Team
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#141414] dark:text-[#F6F3ED] tracking-tight leading-[1.1]">
                Meet the People Behind Qavironel
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#57544E] dark:text-[#A6A29A] font-light leading-relaxed max-w-2xl">
                Different strengths. One shared commitment to building better technology. Direct collaboration and hands-on craftsmanship across every discipline.
              </p>
            </div>

            {/* 2-Column Balanced Team Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              {teamMembers.map((member, idx) => (
                <div 
                  key={member.name}
                  className="bg-[#F6F3ED] dark:bg-[#121216] border border-[#DEDAD3] dark:border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-8 hover:border-[#C7612E]/40 transition-colors"
                >
                  <div>
                    {/* Member Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#DEDAD3] dark:border-white/10">
                      <div className="flex items-center gap-5">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white dark:bg-[#1C1C22] border-2 border-[#DEDAD3] dark:border-white/15 ring-2 ring-[#C7612E]/25 overflow-hidden shrink-0 shadow-md flex items-center justify-center relative">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-top"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const next = e.currentTarget.nextElementSibling;
                                if (next) (next as HTMLElement).style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <div 
                            className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FAFAFA] to-[#EBE7DF] dark:from-[#202026] dark:to-[#141418] text-[#171717] dark:text-[#F6F3ED] font-mono font-bold text-xl sm:text-2xl select-none ${
                              member.image ? 'hidden' : 'flex'
                            }`}
                          >
                            <span className="tracking-tight text-[#C7612E]">
                              {member.name.split(' ').map((n) => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-[0.68rem] font-mono font-semibold uppercase tracking-widest text-[#C7612E] block mb-1">
                            {getMemberBadge(idx)}
                          </span>
                          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#141414] dark:text-[#F6F3ED]">
                            {member.name}
                          </h3>
                          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#77746F] dark:text-[#A6A29A] mt-0.5">
                            {member.role}
                          </p>
                          <p className="text-xs text-[#77746F] dark:text-[#A6A29A] font-mono mt-0.5">
                            Remote-First Studio · Vadodara, IN
                          </p>
                        </div>
                      </div>

                      {/* Social / External Links (if provided) */}
                      <div className="flex items-center gap-2">
                        {member.links.website && (
                          <a
                            href={member.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 text-[#141414] dark:text-[#F6F3ED] hover:text-[#C7612E] dark:hover:text-[#C7612E] hover:border-[#C7612E]/40 shadow-xs transition-colors"
                            aria-label={`${member.name} Personal Portfolio`}
                            title="Personal Portfolio"
                          >
                            <ExternalLink className="w-4 h-4" />
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
                      </div>
                    </div>

                    {/* Biography */}
                    <p className="mt-6 text-sm sm:text-base text-[#57544E] dark:text-[#A6A29A] leading-relaxed font-light">
                      {member.bio}
                    </p>

                    {/* Credentials / Core Focus Points */}
                    <div className="pt-6 mt-6 border-t border-[#DEDAD3] dark:border-white/10 space-y-3">
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#141414] dark:text-white">
                        {getCredentialsLabel(idx)}
                      </p>
                      <div className="grid grid-cols-1 gap-2.5 text-xs text-[#57544E] dark:text-[#A6A29A]">
                        {member.credentials.map((cred, i) => (
                          <div key={i} className="flex items-start gap-2.5 bg-white dark:bg-[#1C1C22] rounded-lg p-3 border border-[#DEDAD3] dark:border-white/10 shadow-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C7612E] shrink-0 mt-0.5" />
                            <span className="text-[#141414] dark:text-[#F6F3ED] leading-snug">{cred}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills / Tech Stack Chips */}
                  <div className="pt-6 border-t border-[#DEDAD3] dark:border-white/10">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#141414] dark:text-white mb-3">
                      {getSkillsLabel(idx)}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-white dark:bg-[#1C1C22] border border-[#DEDAD3] dark:border-white/10 rounded text-[0.7rem] font-mono text-[#57544E] dark:text-[#A6A29A]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
