import { SEO } from '../components/seo/SEO';
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { services, processSteps } from '../data/services';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ArrowUpRight, Zap, Shield, Sparkles, Calendar, FileText } from 'lucide-react';
import { openBookingModal } from '../components/booking/BookingModal';
import { Spatial3DTorus } from '../components/3d/Spatial3DTorus';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO title="Services" />
      <div className="bg-[#F6F3ED] dark:bg-[#171717] text-[#171717] dark:text-[#F6F3ED] pt-28 sm:pt-36 pb-24 selection:bg-[#C7612E] selection:text-white transition-colors duration-300">
      <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header with 3D Spatial Torus Sculpture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-[#DEDAD3] dark:border-white/10">
          <div className="lg:col-span-8 max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-2">
              Capabilities & Offerings
            </span>
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-[#171717] dark:text-[#F6F3ED] tracking-tight leading-[1.08] mb-6">
              Disciplines engineered for real business momentum.
            </h1>
            <p className="text-lg sm:text-xl text-[#77746F] dark:text-[#A1A1AA] font-light leading-relaxed">
              We combine digital craftsmanship with full-stack software engineering and applied AI. Every service is delivered with direct technical leadership without junior agency fog or outsourced contractors.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center justify-center">
            <Spatial3DTorus size={240} />
          </div>
        </div>

        {/* Detailed Service Pillars */}
        <div className="mt-16 space-y-20">
          {services.map((svc) => {
            const exampleProject = projects.find((p) => p.slug === svc.exampleProjectSlug);

            return (
              <section 
                key={svc.id} 
                id={svc.id}
                className="scroll-mt-32 bg-white dark:bg-[#20201E] border border-[#DEDAD3] dark:border-white/10 p-6 sm:p-10 lg:p-14 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all hover:border-[#C7612E]/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                  {/* Left Column: Title, Concept, Architecture & Scope (5 Cols) */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-2xl font-extrabold text-[#C7612E]">{svc.number}</span>
                      {svc.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[0.68rem] font-mono font-bold tracking-wider text-[#C7612E] bg-[#C7612E]/10 border border-[#C7612E]/20">
                          {svc.badge}
                        </span>
                      )}
                    </div>

                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#171717] dark:text-[#F6F3ED] tracking-tight">
                      {svc.title}
                    </h2>

                    <p className="text-base sm:text-lg text-[#C7612E] font-medium leading-snug">
                      {svc.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-[#77746F] dark:text-[#A1A1AA] leading-relaxed font-light">
                      {svc.description}
                    </p>

                    {/* Who It's For Card */}
                    <div className="p-4 sm:p-5 bg-[#F6F3ED] dark:bg-[#1A1A20] border border-[#DEDAD3] dark:border-white/10 rounded-xl space-y-1.5">
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#171717] dark:text-[#F6F3ED]">
                        Who This Solves For:
                      </p>
                      <p className="text-xs sm:text-sm text-[#77746F] dark:text-[#A1A1AA] leading-relaxed font-light">
                        {svc.whoItsFor}
                      </p>
                    </div>

                    {/* Architecture Highlights */}
                    {svc.architectureHighlights && svc.architectureHighlights.length > 0 && (
                      <div className="p-4 sm:p-5 bg-[#F6F3ED] dark:bg-[#1A1A20] border border-[#DEDAD3] dark:border-white/10 rounded-xl space-y-2.5">
                        <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#171717] dark:text-[#F6F3ED]">
                          Architectural Highlights:
                        </p>
                        <ul className="space-y-1.5 text-xs text-[#77746F] dark:text-[#A1A1AA]">
                          {svc.architectureHighlights.map((hl, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C7612E] shrink-0 mt-1.5" />
                              <span className="leading-relaxed">{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies Deployed */}
                    <div>
                      <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#77746F] dark:text-[#A1A1AA] mb-2.5">
                        Technologies Deployed
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {svc.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono bg-[#F6F3ED] dark:bg-[#1A1A20] text-[#77746F] dark:text-[#A1A1AA] border border-[#DEDAD3] dark:border-white/10 rounded-md shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => openBookingModal('quotation')}
                        className="py-2.5 px-5 rounded-full bg-[#C7612E] hover:bg-[#98431F] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Request Scope Quote</span>
                      </button>

                      {exampleProject && (
                        <Link 
                          to={`/work/${exampleProject.slug}`} 
                          className="py-2.5 px-4 rounded-full bg-white dark:bg-[#1A1A20] hover:bg-zinc-100 dark:hover:bg-[#2D2D2A] text-[#171717] dark:text-[#F6F3ED] text-xs font-bold font-sans uppercase tracking-wider border border-[#DEDAD3] dark:border-white/10 transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#C7612E]" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Visual System Viewport, Telemetry & Deliverables (7 Cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Visual Studio Viewport Frame */}
                    {svc.image && (
                      <div className="rounded-2xl border border-[#DEDAD3] dark:border-white/10 bg-white dark:bg-[#1A1A20] overflow-hidden shadow-sm">
                        {/* Mockup Window Header */}
                        <div className="px-4 py-2.5 bg-[#F1F3F5] dark:bg-[#1C1C22] border-b border-[#DEDAD3] dark:border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#DEDAD3] dark:bg-zinc-700 border border-[#D1D5DB] dark:border-zinc-600" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#DEDAD3] dark:bg-zinc-700 border border-[#D1D5DB] dark:border-zinc-600" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#DEDAD3] dark:bg-zinc-700 border border-[#D1D5DB] dark:border-zinc-600" />
                          </div>
                          <div className="px-3 py-0.5 rounded-md bg-white dark:bg-[#20201E] border border-[#DEDAD3] dark:border-white/10 text-[0.68rem] font-mono text-[#77746F] dark:text-[#A1A1AA]">
                            qavironel.internal // {svc.id}
                          </div>
                          <div className="flex items-center gap-1.5 text-[0.65rem] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>PRODUCTION READY</span>
                          </div>
                        </div>

                        {/* Visual Image Viewport (object-contain with deep dark studio frame, zero cut) */}
                        <div className="relative aspect-[16/10] bg-[#171717] overflow-hidden flex items-center justify-center group">
                          <img 
                            src={svc.image} 
                            alt={svc.title}
                            className="w-full h-full object-contain sm:object-cover transition-transform duration-700 group-hover:scale-102"
                            loading="lazy" width="1920" height="1080"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                            <span className="font-mono text-[0.7rem] text-zinc-200 truncate drop-shadow-md">
                              {svc.imageCaption}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Live Telemetry / Metric Indicators */}
                    {svc.metrics && (
                      <div className="grid grid-cols-3 gap-3">
                        {svc.metrics.map((m, idx) => (
                          <div key={idx} className="p-3 sm:p-4 bg-[#F6F3ED] dark:bg-[#1A1A20] border border-[#DEDAD3] dark:border-white/10 rounded-xl text-center shadow-xs">
                            <div className="font-mono font-extrabold text-base sm:text-lg text-[#171717] dark:text-[#F6F3ED]">
                              {m.value}
                            </div>
                            <div className="text-[0.65rem] font-mono uppercase tracking-wider text-[#77746F] dark:text-[#A1A1AA] mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Deliverables Checklist Grid */}
                    <div className="p-6 bg-[#F6F3ED] dark:bg-[#1A1A20] border border-[#DEDAD3] dark:border-white/10 rounded-2xl shadow-xs">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#171717] dark:text-[#F6F3ED] mb-4">
                        What We Include & Deliver
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {svc.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#C7612E] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-[#2D2D2A] dark:text-[#E4E4E7] leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Transparent Pricing Starting Points */}
        <section className="mt-28 pt-16 border-t border-[#DEDAD3]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
              Transparent Starting Points
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#171717] dark:text-white tracking-tight">
              Honest project scopes. No hidden agency markup.
            </h2>
            <p className="mt-3 text-base text-[#77746F] dark:text-[#A1A1AA] leading-relaxed font-light">
              We align on exact pages, priorities, technical integrations, and deliverables before development begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* High-Velocity Web Platform */}
            <div className="glass-card rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#77746F] dark:text-[#A1A1AA] pb-4 border-b border-[#DEDAD3] dark:border-white/10">
                  <span className="font-semibold text-[#171717] dark:text-white">WEB & BRAND PLATFORMS</span>
                  <span className="text-[#C7612E] font-semibold">1–2 WEEKS SPRINT</span>
                </div>

                <h3 className="font-sans font-bold text-2xl text-[#171717] dark:text-white mt-6">
                  High-Impact Web Experience
                </h3>
                <p className="mt-2 text-sm text-[#77746F] dark:text-[#A1A1AA] font-light">
                  A bespoke, high-converting digital storefront or company platform for brands ready to present themselves with authority and sub-second speed.
                </p>

                <div className="my-6 py-4 border-y border-[#DEDAD3] dark:border-white/10">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#77746F] dark:text-[#A1A1AA]">Engagement Model</p>
                  <p className="text-2xl font-bold font-sans text-[#171717] dark:text-white mt-1">
                    Custom Milestone Scoping
                  </p>
                  <p className="text-xs text-[#77746F] dark:text-[#A1A1AA] font-mono mt-0.5">Tailored strictly to project specifications</p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#2D2D2A] dark:text-[#E4E4E7]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Bespoke responsive interface architecture (Zero templates)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Fluid micro-interactions & frosted glassmorphism</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Rigorous Core Web Vitals audit & load speed tuning</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Technical SEO: automated sitemaps, OpenGraph, JSON-LD Schema</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Direct engineering communication & 30-day stability guarantee</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#DEDAD3] dark:border-white/10 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openBookingModal('quotation')}
                  className="flex-1 py-3 px-4 rounded-full bg-[#C7612E] hover:bg-[#98431F] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request Scope Quote</span>
                </button>
                <button
                  type="button"
                  onClick={() => openBookingModal('call')}
                  className="py-3 px-4 rounded-full bg-[#F6F3ED] dark:bg-[#1C1C22] hover:bg-[#DEDAD3] dark:hover:bg-[#2D2D2A] text-[#171717] dark:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 border border-[#DEDAD3] dark:border-white/10"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C7612E]" />
                  <span>Book Call</span>
                </button>
              </div>
            </div>

            {/* Custom Application / Platform Plan */}
            <div className="glass-card rounded-2xl p-8 sm:p-10 text-[#171717] dark:text-white flex flex-col justify-between border-2 border-[#C7612E]/60 shadow-[0_12px_40px_rgba(199, 97, 46,0.08)]">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#77746F] dark:text-[#A1A1AA] pb-4 border-b border-[#DEDAD3] dark:border-white/10">
                  <span className="text-[#C7612E] font-semibold">SAAS & APPLIED AI</span>
                  <span className="text-[#171717] dark:text-white font-semibold">2–4 WEEKS SPRINT</span>
                </div>

                <h3 className="font-sans font-bold text-2xl text-[#171717] dark:text-white mt-6">
                  Custom Platform & AI System
                </h3>
                <p className="mt-2 text-sm text-[#77746F] dark:text-[#A1A1AA] font-light">
                  For startups, platforms, and applications requiring custom data models, role-based portals, or practical applied AI features.
                </p>

                <div className="my-6 py-4 border-y border-[#DEDAD3] dark:border-white/10">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#77746F] dark:text-[#A1A1AA]">Engagement Model</p>
                  <p className="text-2xl font-bold font-sans text-[#171717] dark:text-white mt-1">
                    Sprint-Based Architecture
                  </p>
                  <p className="text-xs text-[#77746F] dark:text-[#A1A1AA] font-mono mt-0.5">Transparent milestones, zero boilerplate</p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#2D2D2A] dark:text-[#E4E4E7]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Everything in Web plus full-stack SaaS architecture</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Multi-role authentication & granular user permissions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Applied AI integrations (LLM reasoning, vision OCR, RAG pipelines)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Relational database design (PostgreSQL / Supabase / Redis)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Direct engineering leadership & weekly staging milestone demos</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#DEDAD3] dark:border-white/10 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openBookingModal('quotation')}
                  className="flex-1 py-3 px-4 rounded-full bg-[#C7612E] hover:bg-[#98431F] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request Platform Quote</span>
                </button>
                <button
                  type="button"
                  onClick={() => openBookingModal('call')}
                  className="py-3 px-4 rounded-full bg-[#171717] dark:bg-white hover:bg-black dark:hover:bg-zinc-200 text-white dark:text-[#171717] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C7612E]" />
                  <span>Schedule Call</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="mt-28 pt-16 border-t border-[#DEDAD3]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
              Delivery Model
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#171717] tracking-tight">
              How every engagement operates.
            </h2>
            <p className="mt-3 text-base text-[#77746F] leading-relaxed font-light">
              Our process is engineered to remove ambiguity, eliminate scope creep, and ensure prompt delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="p-6 bg-[#F6F3ED] dark:bg-[#121216] border border-[#DEDAD3] dark:border-white/10 rounded-xl shadow-xs">
                <span className="font-mono text-xl font-bold text-[#C7612E]">{step.step}</span>
                <h4 className="font-sans font-bold text-lg text-[#171717] dark:text-white mt-3 mb-2">{step.title}</h4>
                <p className="text-xs sm:text-sm text-[#77746F] dark:text-[#A1A1AA] leading-relaxed font-light">{step.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 glass-card rounded-2xl text-[#171717] dark:text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-bold text-2xl text-[#171717] dark:text-white">Ready to scope your project?</h3>
            <p className="text-sm text-[#77746F] dark:text-[#A1A1AA] mt-1 font-light">Send us your requirements or pick a time. We reply with a structured scope within 12–24 hours.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openBookingModal('call')}
              className="px-5 py-3 rounded-full bg-[#171717] dark:bg-white hover:bg-black dark:hover:bg-zinc-200 text-white dark:text-[#171717] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C7612E]" />
              <span>Schedule Call (30m)</span>
            </button>
            <button
              type="button"
              onClick={() => openBookingModal('quotation')}
              className="px-5 py-3 rounded-full bg-[#F6F3ED] dark:bg-[#1C1C22] hover:bg-[#DEDAD3] dark:hover:bg-[#2D2D2A] text-[#171717] dark:text-white text-xs font-bold uppercase tracking-wider transition-colors border border-[#DEDAD3] dark:border-white/10 flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#C7612E]" />
              <span>Request Quote</span>
            </button>
            <Button to="/contact" variant="primary" size="md" showArrow>
              Start Project
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


