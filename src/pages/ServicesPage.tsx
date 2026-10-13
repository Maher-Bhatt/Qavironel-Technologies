import { SEO } from '../components/seo/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { services, processSteps } from '../data/services';
import { projects } from '../data/projects';
import { faqs, companyConfig } from '../data/company';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Calendar, 
  Layers, 
  ShieldCheck, 
  Code2, 
  Cpu, 
  ExternalLink 
} from 'lucide-react';
import { openBookingModal } from '../components/booking/BookingModal';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Services & Capabilities — Qavironel Technologies" 
        description="Bespoke web development, full-stack software engineering, applied AI workflows, and digital product design delivered with senior technical leadership."
      />

      <div className="bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#FAFAFA] pt-32 sm:pt-40 pb-28 selection:bg-[#0A0A0A] selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
        <div className="max-w-[1700px] w-full mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* ========================================================================= */}
          {/* 01. EDITORIAL HEADER (NO 3D OBJECTS)                                      */}
          {/* ========================================================================= */}
          <div className="pb-16 border-b border-black/[0.08] dark:border-white/10 max-w-4xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 block mb-3">
              Capabilities & Disciplines
            </span>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl text-[#0A0A0A] dark:text-white tracking-[-0.04em] leading-[0.98]">
              Disciplines engineered for real momentum.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-3xl">
              We combine digital craftsmanship with full-stack software engineering and applied AI. Every service is delivered with direct technical leadership—no junior account managers, no outsourced contractors, and zero template bloat.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* 02. EDITORIAL SERVICES MATRIX WITH DIVERSE COMPOSITIONS                   */}
          {/* ========================================================================= */}
          <div className="divide-y divide-black/10 dark:divide-white/10">
            
            {/* 01. Web Design & Development (Asymmetrical 2-Column Split with Real Image) */}
            <section id="web-design-development" className="py-20 scroll-mt-28">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-bold text-black dark:text-white">01</span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold border border-black/10 dark:border-white/15">
                      FRONTEND CRAFTSMANSHIP
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-black dark:text-white tracking-tight">
                    Web Design & Development
                  </h2>
                  <p className="text-base sm:text-lg text-black dark:text-white font-medium leading-snug">
                    Marketing sites, commerce storefronts, and business platforms built from scratch.
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    We design and engineer bespoke web experiences that load instantly, command attention, and turn visitors into qualified business leads. No generic templates, bloated page-builders, or fragile plugins.
                  </p>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-black dark:text-white font-semibold">
                      Key Deliverables:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0" />
                        <span>Bespoke responsive frontend</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0" />
                        <span>High-conversion commerce</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0" />
                        <span>Core Web Vitals tuning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0" />
                        <span>Zero builder bloat</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to="/work/ztees"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white hover:underline"
                    >
                      <span>Featured Case Study: Ztees Storefront</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4 shadow-sm">
                    <div className="aspect-[16/11] rounded-xl overflow-hidden bg-black">
                      <img 
                        src="/images/work/ztees-hero.webp" 
                        alt="Ztees streetwear platform showcase"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-3 px-1 flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400">
                      <span>Ztees Streetwear Platform</span>
                      <span className="text-black dark:text-white font-semibold">&lt; 0.8s LCP Speed</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 02. Product & Software Engineering (Deep Technical Architecture Spread) */}
            <section id="product-software-engineering" className="py-20 scroll-mt-28">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4 shadow-sm">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-black">
                      <img 
                        src="/images/projects/civic-public-home.png" 
                        alt="Civic Sathi Multi-Role RBAC Portal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-3 px-1 flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400">
                      <span>Civic Sathi Monorepo (SIH 2026)</span>
                      <span className="text-black dark:text-white font-semibold">4 Role Portals · RBAC</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-bold text-black dark:text-white">02</span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold border border-black/10 dark:border-white/15">
                      SYSTEMS ARCHITECTURE
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-black dark:text-white tracking-tight">
                    Product & Software Engineering
                  </h2>
                  <p className="text-base sm:text-lg text-black dark:text-white font-medium leading-snug">
                    Custom web applications, dashboards, SaaS MVPs, and internal operational tooling.
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    We engineer full-stack digital products from initial architectural schema to production release. We focus on clean data models, resilient APIs, and intuitive user experiences built to scale without rewriting.
                  </p>

                  <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 space-y-2">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white">
                      Architectural Highlights:
                    </p>
                    <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                        <span>Strict role-based access control (RBAC) across multiple operational surfaces</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                        <span>Type-safe API contracts with automated schema validation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                        <span>Rapid MVP release cycles shipped to staging in 2 to 4 weeks</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      to="/work/civic-sathi"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white hover:underline"
                    >
                      <span>Explore Civic Sathi Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </section>

            {/* 03. Applied AI & Automation (Featured Prominently) */}
            <section id="applied-ai-automation" className="py-20 scroll-mt-28">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-bold text-black dark:text-white">03</span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold border border-black/10 dark:border-white/15">
                      APPLIED AI & NEURAL RUNTIMES
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-black dark:text-white tracking-tight">
                    Applied AI & Intelligent Workflows
                  </h2>
                  <p className="text-base sm:text-lg text-black dark:text-white font-medium leading-snug">
                    Practical LLM integrations, intelligent workflows, and local-first desktop AI tools.
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    We cut through the industry hype to engineer genuinely useful AI capabilities. From privacy-safe local inference on physical hardware to dynamic multi-model routing and guarded execution adapters, we build AI that solves operational bottlenecks.
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-3">
                    <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10">
                      <span className="block font-display font-bold text-base text-black dark:text-white">Air-Gapped Models</span>
                      <span className="text-xs font-mono text-zinc-500">Ollama & LLaMA 3.3 offline</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10">
                      <span className="block font-display font-bold text-base text-black dark:text-white">DPAPI Encryption</span>
                      <span className="text-xs font-mono text-zinc-500">Hardware-bound credentials</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      to="/work/kalki"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white hover:underline"
                    >
                      <span>Explore K.A.L.K.I. Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4 shadow-sm">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-black">
                      <img 
                        src="/images/projects/kalki/kalki-hero.png" 
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src !== '/images/projects/kalki-hero.png') {
                            target.src = '/images/projects/kalki-hero.png';
                          } else {
                            target.src = '/images/projects/kalki-launch.png';
                          }
                        }}
                        alt="K.A.L.K.I. multi-model AI assistant"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-3 px-1 flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400">
                      <span>K.A.L.K.I. Desktop Assistant</span>
                      <span className="text-black dark:text-white font-semibold">Live on Microsoft Store</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 04 & 05. UI/UX Systems & Technical Optimization (Editorial 2-Column Grid) */}
            <section className="py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* 04. UI/UX */}
                <div id="digital-product-design" className="space-y-6 scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl font-bold text-black dark:text-white">04</span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold border border-black/10 dark:border-white/15">
                      PRODUCT CRAFT
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white">
                    Digital Product Design & Systems
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Great software starts with clear thinking. We craft cohesive design tokens, intuitive user journeys, and responsive typography that make complex workflows feel effortless for end users.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black dark:text-white" />
                      <span>Mathematical 4pt/8pt spacing scale</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black dark:text-white" />
                      <span>WCAG 2.1 AA accessibility & contrast validation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black dark:text-white" />
                      <span>Zero-drift Figma to Tailwind CSS handoff</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Link to="/work/codedroid" className="text-xs font-mono font-bold uppercase text-black dark:text-white hover:underline flex items-center gap-1.5">
                      <span>Related: CodeDroid Design System</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 05. Technical Optimization */}
                <div id="technical-optimization-seo" className="space-y-6 scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl font-bold text-black dark:text-white">05</span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold border border-black/10 dark:border-white/15">
                      EDGE PERFORMANCE
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white">
                    Performance Hardening & Technical SEO
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    A digital platform cannot succeed if it suffers from poor discoverability or sluggish loading. We audit, refactor, and tune websites to achieve top Core Web Vitals and solid organic visibility.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black dark:text-white" />
                      <span>Sub-second Largest Contentful Paint (LCP) engineering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black dark:text-white" />
                      <span>Semantic Schema.org JSON-LD microdata integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black dark:text-white" />
                      <span>Next-gen WebP/AVIF asset pipelines & edge caching</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Link to="/contact" className="text-xs font-mono font-bold uppercase text-black dark:text-white hover:underline flex items-center gap-1.5">
                      <span>Request a Performance Audit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </section>

          </div>

          {/* ========================================================================= */}
          {/* 03. FREQUENTLY ASKED QUESTIONS (PRACTICAL CLIENT TERMS)                   */}
          {/* ========================================================================= */}
          <section className="py-24 border-t border-black/10 dark:border-white/10">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold block mb-2">
                Questions & Transparency
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-black dark:text-white tracking-tight">
                Clear answers before we write a line of code.
              </h2>
            </div>

            <div className="divide-y divide-black/10 dark:divide-white/10">
              {faqs.slice(0, 5).map((faq, idx) => (
                <div key={idx} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-5">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-black dark:text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 04. CALL TO ACTION                                                        */}
          {/* ========================================================================= */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Ready to discuss your project?
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white">
                Schedule a direct 30-minute architectural consultation.
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black text-xs font-mono uppercase font-bold tracking-wider transition-colors shadow-xs"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => openBookingModal('call')}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/15 text-black dark:text-white text-xs font-mono uppercase font-bold tracking-wider hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <Calendar className="w-4 h-4 text-black dark:text-white" />
                <span>Book Discovery Call</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServicesPage;
