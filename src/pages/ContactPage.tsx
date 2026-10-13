import { SEO } from '../components/seo/SEO';
import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  Calendar, 
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
import { openBookingModal } from '../utils/modalEvents';

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
        title="Contact Founders & Book Discovery" 
        description="Partner directly with founders Maher Bhatt & Anurag Pandey. Book technical discovery for custom web apps, SaaS MVPs, and applied AI systems."
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Qavironel Technologies',
          url: 'https://qavironel.com/contact',
          mainEntity: {
            '@type': 'ContactPoint',
            contactType: 'technical discovery',
            email: 'qavironeltechnologies@gmail.com',
            availableLanguage: ['English', 'Hindi', 'Gujarati']
          }
        }}
      />

      <div className="bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#F4F4F5] pt-32 sm:pt-40 pb-28 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
        <div className="max-w-[1700px] w-full mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* ========================================================================= */}
          {/* 01. EDITORIAL PRESTIGE HEADER                                             */}
          {/* ========================================================================= */}
          <div className="pb-12 border-b border-black/10 dark:border-white/10 max-w-5xl">
            {/* Live Studio Status Pill */}
            <div className="mb-6 inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-[0.68rem] font-mono">
              <span className="flex items-center gap-1.5 text-black dark:text-white font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                STUDIO ACTIVE
              </span>
              <span className="text-zinc-400 dark:text-zinc-600">·</span>
              <span className="text-zinc-600 dark:text-zinc-400">
                DIRECT FOUNDER ACCESS
              </span>
              <span className="text-zinc-400 dark:text-zinc-600">·</span>
              <span className="text-black dark:text-white font-bold">
                AVG RESPONSE &lt; 12H
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
                Founder-Led Engineering · Zero Middlemen
              </span>
            </div>
            
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl text-black dark:text-white tracking-[-0.04em] leading-[0.98]">
              Let's engineer <br />
              <span className="text-zinc-500 dark:text-zinc-400">your next breakthrough.</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-3xl">
              Every project starts with a direct, confidential technical conversation with our founders. We evaluate architecture, recommend high-leverage execution paths, and ship in focused 1–2 week sprints.
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
          {/* 02. PROMINENT DISCOVERY CALL ACTION CENTER                                */}
          {/* ========================================================================= */}
          <div className="pt-10 pb-2">
            <div className="glass-card-luxury relative rounded-3xl p-7 sm:p-10 border border-black/10 dark:border-white/15 overflow-hidden shadow-lg">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-xs font-mono font-bold uppercase tracking-widest text-zinc-700 dark:text-zinc-300">
                    <Sparkles className="w-3.5 h-3.5 text-black dark:text-white" />
                    <span>Fast-Track Discovery</span>
                  </div>
                  
                  <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-black dark:text-white tracking-tight">
                    Book a 30-Min Technical Discovery Session
                  </h2>
                  
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                    Speak directly with founding engineers Maher Bhatt & Anurag Pandey on Google Meet. We review your architecture, code feasibility, and timeline. Zero fluff, 100% technical clarity.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white" />
                      Instant Google Meet Link
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-black dark:text-white" />
                      Mutual NDA Protected
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-black dark:text-white" />
                      100% Free · No Obligation
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => openBookingModal('call')}
                    className="btn-glass-shimmer group relative flex items-center justify-between px-6 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-mono font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all cursor-pointer border border-white/20 dark:border-black/20"
                  >
                    <span className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4" />
                      <span>Select Calendar Slot (30m)</span>
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                  <a
                    href={companyConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-3.5 rounded-2xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-black dark:text-white font-mono font-semibold text-xs tracking-wider transition-colors border border-black/5 dark:border-white/10"
                  >
                    <span className="flex items-center gap-2.5">
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Quick Connect</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 03. CLEAN DUAL-COLUMN LAYOUT                                              */}
          {/* ========================================================================= */}
          <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* COLUMN 1: DIRECT FOUNDER COLLABORATION (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="glass-card-luxury p-7 sm:p-8 rounded-3xl space-y-5">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 block mb-1">
                    Technical Leadership
                  </span>
                  <h3 className="font-display font-bold text-2xl text-black dark:text-white">
                    Direct Founder Access
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed font-light">
                    Collaborate directly with our founders from initial architecture to production launch.
                  </p>
                </div>

                {/* Founder Mini Profiles with Circular Avatars */}
                <div className="space-y-3.5 pt-2 border-t border-black/10 dark:border-white/10">
                  {/* Maher Bhatt */}
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-black/5 dark:border-white/5">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-black/10 dark:border-white/20 bg-zinc-200 dark:bg-zinc-800 p-0.5">
                      <img 
                        src={maher.image} 
                        alt={maher.name} 
                        className="w-full h-full object-cover object-center rounded-full"
                      />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="text-[0.62rem] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                        Founder & Technical Lead
                      </span>
                      <h4 className="font-display font-bold text-sm sm:text-base text-black dark:text-white truncate">
                        {maher.name}
                      </h4>
                      <p className="text-[0.68rem] font-mono text-zinc-500 dark:text-zinc-400 truncate">
                        Systems Architecture · Applied AI
                      </p>
                    </div>
                  </div>

                  {/* Anurag Pandey */}
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-black/5 dark:border-white/5">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-black/10 dark:border-white/20 bg-zinc-200 dark:bg-zinc-800 p-0.5">
                      <img 
                        src={anurag.image} 
                        alt={anurag.name} 
                        className="w-full h-full object-cover object-[50%_25%] rounded-full"
                      />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="text-[0.62rem] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                        Co-Founder & Backend Lead
                      </span>
                      <h4 className="font-display font-bold text-sm sm:text-base text-black dark:text-white truncate">
                        {anurag.name}
                      </h4>
                      <p className="text-[0.68rem] font-mono text-zinc-500 dark:text-zinc-400 truncate">
                        Distributed APIs · Data Resilience
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Inbox Card */}
                <div className="p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-950 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400">
                      <Mail className="w-3.5 h-3.5 text-black dark:text-white" />
                      <span>Direct Studio Email</span>
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
                    className="font-mono font-bold text-sm text-black dark:text-white mt-1 block hover:underline"
                  >
                    {companyConfig.email}
                  </a>
                </div>
              </div>

              {/* Client Guarantees */}
              <div className="p-6 rounded-3xl bg-zinc-100 dark:bg-zinc-900/60 border border-black/10 dark:border-white/10 space-y-3">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white">
                  Studio Guarantees:
                </p>
                <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                    <span><strong className="text-black dark:text-white">100% IP Ownership:</strong> Complete code, schema, and design token transfer upon delivery.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                    <span><strong className="text-black dark:text-white">Mutual NDA:</strong> Confidentiality protected from day zero.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                    <span><strong className="text-black dark:text-white">Fixed-Scope Milestones:</strong> Transparent milestone billing with no hidden surprises.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* COLUMN 2: STREAMLINED INTAKE BRIEF FORM (7 Cols) */}
            <div id="intake-brief" className="lg:col-span-7 scroll-mt-28">
              <div className="glass-card-luxury rounded-3xl p-7 sm:p-9 relative overflow-hidden">
                <div className="mb-6 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-black dark:text-white" />
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                      Project Intake
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-black dark:text-white tracking-tight">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    Fill out the brief below and our founders will get back to you with architectural recommendations within 12 hours.
                  </p>
                </div>

                {/* Clean Form Component */}
                <ContactForm />
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* 04. FREQUENTLY ASKED QUESTIONS                                            */}
          {/* ========================================================================= */}
          <section className="py-16 border-t border-black/10 dark:border-white/10">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 font-bold block mb-2">
                Transparency
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white tracking-tight">
                Frequently Asked Questions
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-light">
                Clear answers regarding IP ownership, engineering sprints, and direct founder collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.slice(0, 4).map((f, i) => (
                <div 
                  key={i} 
                  className="glass-card-luxury p-6 rounded-2xl space-y-2 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <h4 className="font-display font-bold text-sm sm:text-base text-black dark:text-white">
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
