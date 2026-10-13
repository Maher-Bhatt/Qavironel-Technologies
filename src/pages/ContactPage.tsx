import { SEO } from '../components/seo/SEO';
import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  Calendar, 
  FileText, 
  ArrowUpRight, 
  ArrowRight,
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Copy,
  Check,
  Globe
} from 'lucide-react';
import { ContactForm } from '../components/contact/ContactForm';
import { companyConfig, faqs, teamMembers } from '../data/company';
import { openBookingModal } from '../components/booking/BookingModal';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const maher = teamMembers.find(m => m.name.toLowerCase().includes('maher')) || teamMembers[0];
  const anurag = teamMembers.find(m => m.name.toLowerCase().includes('anurag')) || teamMembers[1];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(companyConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Founders — Qavironel Technologies" 
        description="Direct founder collaboration with Maher Bhatt & Anurag Pandey. Discuss your web application, software system, or applied AI project with zero intermediary layers."
      />

      <div className="bg-[#F9F9F9] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#F4F4F5] pt-32 sm:pt-40 pb-28 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
        <div className="max-w-[1700px] w-full mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* ========================================================================= */}
          {/* 01. EDITORIAL PRESTIGE HEADER                                             */}
          {/* ========================================================================= */}
          <div className="pb-16 border-b border-black/10 dark:border-white/10 max-w-5xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
                Direct Founder Engagement · Zero Agency Middlemen
              </span>
            </div>
            
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl text-black dark:text-white tracking-[-0.04em] leading-[0.98]">
              Let's engineer <br />
              <span className="text-zinc-500 dark:text-zinc-400">your next breakthrough.</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-3xl">
              Every project begins with a direct, confidential conversation with our founding technical leads. We evaluate feasibility, recommend high-leverage architectural paths, and execute with disciplined 1–2 week sprints.
            </p>

            {/* Prestige Value Strip */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
                <Clock className="w-3.5 h-3.5 text-black dark:text-white" />
                <span>&lt; 12h Average Response</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
                <ShieldCheck className="w-3.5 h-3.5 text-black dark:text-white" />
                <span>100% Direct Founder Access</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white" />
                <span>Mutual NDA Protected</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
                <Globe className="w-3.5 h-3.5 text-black dark:text-white" />
                <span>Global Remote Delivery</span>
              </span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 02. PREMIER CENTERPIECE: BOOK 30-MIN TECHNICAL DISCOVERY SESSION           */}
          {/* ========================================================================= */}
          <div className="pt-12 pb-4">
            <div className="glass-card-luxury relative rounded-3xl p-8 sm:p-12 border border-black/10 dark:border-white/15 overflow-hidden shadow-lg">
              {/* Subtle ambient specular highlight */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/[0.12] dark:bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-xs font-mono font-bold uppercase tracking-widest text-zinc-700 dark:text-zinc-300">
                    <Sparkles className="w-3.5 h-3.5 text-black dark:text-white" />
                    <span>Premier Engagement Channel</span>
                  </div>
                  
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-black dark:text-white tracking-tight leading-[1.05]">
                    Book a 30-Min Technical Discovery Session
                  </h2>
                  
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                    Speak directly with founding engineers Maher Bhatt & Anurag Pandey. We evaluate system architecture, review code feasibility, and outline a fixed-cadence execution plan. Zero agency middlemen, zero sales fluff.
                  </p>

                  {/* Trust Badges Strip */}
                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-black dark:text-white" />
                      Instant Google Meet Link
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-black dark:text-white" />
                      Mutual NDA Protected
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-black dark:text-white" />
                      100% Free · No Obligation
                    </span>
                  </div>
                </div>

                {/* Interactive Direct Trigger Island */}
                <div className="lg:col-span-5 flex flex-col gap-3.5">
                  <button
                    type="button"
                    onClick={() => openBookingModal('call')}
                    className="btn-glass-shimmer group relative flex items-center justify-between px-8 py-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-mono font-bold text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all cursor-pointer border border-white/20 dark:border-black/20"
                  >
                    <span className="flex items-center gap-3">
                      <Calendar className="w-4 h-4" />
                      <span>Select Calendar Slot (30m)</span>
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                  <div className="p-3.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 text-center">
                    <span className="text-[0.72rem] font-mono text-zinc-600 dark:text-zinc-400">
                      Prefer sending written specifications? <a href="#intake-brief" className="text-black dark:text-white underline font-semibold">Configure Brief below ↓</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 03. DUAL-COLUMN PRESTIGE LAYOUT                                           */}
          {/* ========================================================================= */}
          <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ----------------------------------------------------------------------- */}
            {/* COLUMN 1: DIRECT FOUNDER COLLABORATION (5 Cols)                         */}
            {/* ----------------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Founder Access Card */}
              <div className="glass-card-luxury p-7 sm:p-8 rounded-3xl space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 block mb-1">
                    Technical Leadership
                  </span>
                  <h2 className="font-display font-bold text-2xl text-black dark:text-white">
                    Direct Founder Collaboration
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                    Collaborate directly with our co-founders from first blueprint to production handover. Zero agency fog.
                  </p>
                </div>

                {/* Founder Mini Profiles with Circular Avatars */}
                <div className="space-y-4 pt-2 border-t border-black/10 dark:border-white/10">
                  {/* Maher Bhatt */}
                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-black/5 dark:border-white/5">
                    <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-black/10 dark:border-white/20 bg-zinc-200 dark:bg-zinc-800 p-0.5">
                      <img 
                        src={maher.image} 
                        alt={maher.name} 
                        className="w-full h-full object-cover object-[50%_15%] rounded-full"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[0.65rem] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                        Founder & Technical Lead
                      </span>
                      <h4 className="font-display font-bold text-base text-black dark:text-white">
                        {maher.name}
                      </h4>
                      <p className="text-[0.7rem] font-mono text-zinc-500 dark:text-zinc-400">
                        Systems Architecture · Applied AI · Web Craftsmanship
                      </p>
                    </div>
                  </div>

                  {/* Anurag Pandey */}
                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-black/5 dark:border-white/5">
                    <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-black/10 dark:border-white/20 bg-zinc-200 dark:bg-zinc-800 p-0.5">
                      <img 
                        src={anurag.image} 
                        alt={anurag.name} 
                        className="w-full h-full object-cover object-[50%_25%] rounded-full"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[0.65rem] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                        Co-Founder & Backend Lead
                      </span>
                      <h4 className="font-display font-bold text-base text-black dark:text-white">
                        {anurag.name}
                      </h4>
                      <p className="text-[0.7rem] font-mono text-zinc-500 dark:text-zinc-400">
                        Distributed APIs · Database Resilience · Cloud Systems
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verified Response Metric */}
                <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[0.65rem] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                        Verified Response Cadence
                      </span>
                      <p className="font-mono font-bold text-sm text-black dark:text-white">
                        Average response in &lt; 12 hours
                      </p>
                    </div>
                  </div>
                  <span className="text-[0.65rem] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-black/10 dark:bg-white/10 text-black dark:text-white">
                    Guaranteed
                  </span>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-3.5">
                {/* Email Direct Card */}
                <div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-950 transition-all hover:border-black/30 dark:hover:border-white/30 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400">
                      <Mail className="w-3.5 h-3.5 text-black dark:text-white" />
                      <span>Primary Studio Inbox</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-xs font-mono text-zinc-500 hover:text-black dark:hover:text-white inline-flex items-center gap-1 transition-colors cursor-pointer"
                      title="Copy email address"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-black dark:text-white" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${companyConfig.email}`}
                    className="font-mono font-bold text-sm sm:text-base text-black dark:text-white mt-1.5 block hover:underline"
                  >
                    {companyConfig.email}
                  </a>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                    Direct inbox monitored continuously by Maher Bhatt
                  </p>
                </div>

                {/* WhatsApp Quick Connect Line */}
                <a
                  href={companyConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-950 transition-all hover:border-black/30 dark:hover:border-white/30 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400">
                      <MessageSquare className="w-3.5 h-3.5 text-black dark:text-white" />
                      <span>WhatsApp Quick Connect Line</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="font-mono font-bold text-sm sm:text-base text-black dark:text-white mt-1.5">
                    {companyConfig.phone}
                  </p>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                    Fastest channel for founders, urgent sprints & discovery
                  </p>
                </a>
              </div>

              {/* Call-to-Action Modal Trigger Buttons */}
              <div className="p-6 rounded-3xl bg-black dark:bg-white text-white dark:text-black space-y-4 shadow-lg">
                <div className="space-y-1">
                  <span className="text-[0.68rem] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-600 block">
                    Fast-Track Engineering
                  </span>
                  <h3 className="font-display font-bold text-xl">
                    Schedule a Discovery Session
                  </h3>
                  <p className="text-xs text-zinc-300 dark:text-zinc-700 leading-relaxed font-light">
                    Direct 30-minute technical evaluation on Google Meet with our co-founders. Review code, architecture, and timeline estimates.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={() => openBookingModal('call')}
                    className="w-full py-3.5 px-5 rounded-xl bg-white dark:bg-black text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 text-xs font-mono uppercase font-bold tracking-wider transition-colors flex items-center justify-between cursor-pointer group"
                  >
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Book 30-Min Discovery Call</span>
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openBookingModal('quotation')}
                    className="w-full py-3 px-5 rounded-xl bg-transparent hover:bg-white/10 dark:hover:bg-black/10 text-white dark:text-black border border-white/20 dark:border-black/20 text-xs font-mono uppercase font-semibold tracking-wider transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Request Scope Quotation</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Studio Guarantees */}
              <div className="p-6 rounded-3xl bg-zinc-100 dark:bg-zinc-900/60 border border-black/10 dark:border-white/10 space-y-3">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white">
                  Client Guarantees & Privacy:
                </p>
                <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                    <span><strong className="text-black dark:text-white">100% IP Ownership:</strong> Complete transfer of repositories, database schemas, and Figma tokens upon launch.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                    <span><strong className="text-black dark:text-white">Mutual NDA:</strong> Standard non-disclosure agreements executed before technical disclosure.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                    <span><strong className="text-black dark:text-white">Fixed-Scope Milestones:</strong> Staged billing gates (30% / 40% / 30%) with zero surprise overages.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* ----------------------------------------------------------------------- */}
            {/* COLUMN 2: LUXURY PROJECT SCOPE & BRIEF BUILDER (7 Cols)                 */}
            {/* ----------------------------------------------------------------------- */}
            <div id="intake-brief" className="lg:col-span-7 scroll-mt-28">
              <div className="glass-card-luxury rounded-3xl p-8 sm:p-10 relative overflow-hidden">
                {/* Header Lockup */}
                <div className="mb-8 space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-black dark:text-white" />
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                      Project Intake & Brief Builder
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-black dark:text-white tracking-tight">
                    Configure Your Project Scope
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    Select your architectural discipline, collaboration model, and timeline. Maher Bhatt & Anurag Pandey will review your brief and respond with an actionable proposal.
                  </p>
                </div>

                {/* Interactive Brief Builder Form Component */}
                <ContactForm />
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* 03. TRANSPARENCY & FREQUENTLY ASKED QUESTIONS                             */}
          {/* ========================================================================= */}
          <section className="py-20 border-t border-black/10 dark:border-white/10">
            <div className="mb-12 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 font-bold block mb-2">
                Studio Transparency
              </span>
              <h3 className="font-display font-bold text-3xl text-black dark:text-white tracking-tight">
                Frequently Asked Questions
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 font-light">
                Clear answers regarding IP ownership, engineering sprints, data privacy, and working directly with our founders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.slice(0, 6).map((f, i) => (
                <div 
                  key={i} 
                  className="glass-card-luxury p-6 sm:p-7 rounded-2xl space-y-2.5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <h4 className="font-display font-bold text-base sm:text-lg text-black dark:text-white">
                    {f.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
