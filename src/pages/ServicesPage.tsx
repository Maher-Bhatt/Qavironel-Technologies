import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { services, processSteps } from '../data/services';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ArrowUpRight, Zap, Shield, Sparkles } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#121212] text-[#F6F3ED] pt-28 sm:pt-36 pb-24 selection:bg-[#C7612E] selection:text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl pb-12 border-b border-[#262624]">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-2">
            Capabilities & Offerings
          </span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.08] mb-6">
            Disciplines engineered for real business momentum.
          </h1>
          <p className="text-lg sm:text-xl text-[#A3A099] font-light leading-relaxed">
            We combine digital craftsmanship with full-stack software engineering and applied AI. Every service is delivered directly by our founder without outsourcing or account-manager fog.
          </p>
        </div>

        {/* Detailed Service Pillars */}
        <div className="mt-16 space-y-16">
          {services.map((svc) => {
            const exampleProject = projects.find((p) => p.slug === svc.exampleProjectSlug);

            return (
              <section 
                key={svc.id} 
                id={svc.id}
                className="scroll-mt-32 bg-[#171717] border border-[#2E2E2B] p-8 sm:p-12 lg:p-16"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column: Title & Overview */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-bold text-[#C7612E]">{svc.number}</span>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#77746F]">Capability</span>
                    </div>

                    <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
                      {svc.title}
                    </h2>

                    <p className="text-lg text-[#C7612E] font-medium leading-snug">
                      {svc.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-[#A3A099] leading-relaxed font-light">
                      {svc.description}
                    </p>

                    <div className="p-5 bg-[#121212] border border-[#2E2E2B] space-y-2">
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                        Who This Solves For:
                      </p>
                      <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed">
                        {svc.whoItsFor}
                      </p>
                    </div>

                    {exampleProject && (
                      <div className="pt-2">
                        <p className="text-xs font-mono text-[#77746F] mb-2 uppercase tracking-wider">Related Build:</p>
                        <Link 
                          to={`/work/${exampleProject.slug}`} 
                          className="inline-flex items-center gap-2 text-xs font-bold font-sans uppercase tracking-widest text-white hover:text-[#C7612E] transition-colors"
                        >
                          <span>Explore {exampleProject.title} Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Deliverables & Stack */}
                  <div className="lg:col-span-7 space-y-8 lg:pl-6 lg:border-l lg:border-[#262624]">
                    <div>
                      <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-white mb-4">
                        What We Include & Deliver
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {svc.deliverables.map((item, idx) => (
                          <div key={idx} className="p-4 bg-[#121212] border border-[#2E2E2B] flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#C7612E] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-[#DEDAD3] leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#262624]">
                      <p className="text-xs font-mono font-semibold uppercase tracking-widest text-white mb-3">
                        Technologies Deployed
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {svc.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 text-xs font-mono bg-[#121212] text-[#DEDAD3] border border-[#2E2E2B]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <Button to="/contact" variant="primary" size="md" showArrow>
                        Discuss This Scope
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Transparent Pricing Starting Points */}
        <section className="mt-28 pt-16 border-t border-[#262624]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
              Transparent Starting Points
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Honest project scopes. No hidden agency markup.
            </h2>
            <p className="mt-3 text-base text-[#A3A099] leading-relaxed font-light">
              We align on exact pages, priorities, technical integrations, and deliverables before development begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Essential Plan */}
            <div className="bg-[#171717] border border-[#2E2E2B] p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#77746F] pb-4 border-b border-[#262624]">
                  <span>ESSENTIAL TIER</span>
                  <span className="text-[#C7612E] font-semibold">1–2 WEEKS</span>
                </div>

                <h3 className="font-sans font-bold text-2xl text-white mt-6">
                  Essential Web Launch
                </h3>
                <p className="mt-2 text-sm text-[#77746F] font-light">
                  A focused, bespoke marketing or commerce storefront for brands ready to present themselves with authority.
                </p>

                <div className="my-6 py-4 border-y border-[#262624]">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#77746F]">Starting From</p>
                  <p className="text-3xl font-bold font-sans text-white mt-1">
                    $499 <span className="text-xs font-mono font-normal text-[#77746F]">USD (International) / ₹19,999 INR</span>
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#DEDAD3]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Up to 10 bespoke responsive pages or drop collection</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Mobile-first layout & touch-first ergonomics</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Fast contact form or WhatsApp Commerce integration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Technical SEO: sitemaps, OpenGraph, JSON-LD</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>30-day post-launch support and stability warranty</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#262624]">
                <Button to="/contact?plan=Essential" variant="secondary" size="md" className="w-full">
                  Request Essential Scope
                </Button>
              </div>
            </div>

            {/* Custom Application / Platform Plan */}
            <div className="bg-[#171717] border border-[#C7612E]/40 p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#77746F] pb-4 border-b border-[#262624]">
                  <span className="text-[#C7612E] font-semibold">TAILORED SCOPE</span>
                  <span className="text-white font-semibold">2–4 WEEKS</span>
                </div>

                <h3 className="font-sans font-bold text-2xl text-white mt-6">
                  Custom Platform & AI System
                </h3>
                <p className="mt-2 text-sm text-[#77746F] font-light">
                  For startups, platforms, and applications requiring custom data models, role-based portals, or applied AI features.
                </p>

                <div className="my-6 py-4 border-y border-[#262624]">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#77746F]">Scoped Milestone Pricing</p>
                  <p className="text-3xl font-bold font-sans text-white mt-1">
                    Custom <span className="text-xs font-mono font-normal text-[#77746F]">Based on exact architecture</span>
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-white/90">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Everything in Essential plus full-stack architecture</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Multi-role authentication & portal permissions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Applied AI integrations (LLM APIs, local Ollama, vision OCR)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Relational database design (PostgreSQL / Supabase)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7612E]" />
                    <span>Direct founder WhatsApp & weekly milestone staging demos</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#262624]">
                <Button to="/contact?plan=Platform" variant="primary" size="md" className="w-full">
                  Discuss Custom Platform
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="mt-28 pt-16 border-t border-[#262624]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
              Delivery Model
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
              How every engagement operates.
            </h2>
            <p className="mt-3 text-base text-[#A3A099] leading-relaxed font-light">
              Our process is engineered to remove ambiguity, eliminate scope creep, and ensure prompt delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="p-6 bg-[#171717] border border-[#2E2E2B]">
                <span className="font-mono text-xl font-bold text-[#C7612E]">{step.step}</span>
                <h4 className="font-sans font-bold text-lg text-white mt-3 mb-2">{step.title}</h4>
                <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed font-light">{step.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 bg-[#171717] border border-[#2E2E2B] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-bold text-2xl text-white">Ready to scope your project?</h3>
            <p className="text-sm text-[#77746F] mt-1 font-light">Send us your requirements. We reply with a structured scope within 12–24 hours.</p>
          </div>
          <Button to="/contact" variant="primary" size="lg" showArrow>
            Start a Conversation
          </Button>
        </div>
      </div>
    </div>
  );
};
