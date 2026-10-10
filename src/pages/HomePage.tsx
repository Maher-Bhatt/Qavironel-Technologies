import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { companyConfig, teamMembers } from '../data/company';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Globe, 
  Zap, 
  Code2, 
  Terminal, 
  Smartphone,
  ExternalLink,
  CheckCircle2,
  Lock,
  ChevronRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

export const HomePage: React.FC = () => {
  // Take 6 curated projects for sleek showcase
  const curatedProjects = projects.filter((p) => p.featured).slice(0, 6);
  const founder = teamMembers[0];

  const marqueeItems = [
    'IDEAS. ENGINEERED.',
    'APPLIED AI ARCHITECTURE',
    'BESPOKE WEB SYSTEMS',
    'DIGITAL CRAFTSMANSHIP',
    'GLOBAL REMOTE DELIVERY',
    'DEFENSIVE SECURITY BY DEFAULT',
    'ZERO TEMPLATES',
    'SUB-SECOND PERFORMANCE'
  ];

  return (
    <div className="bg-[#121212] text-[#F6F3ED] overflow-hidden selection:bg-[#C7612E] selection:text-white">
      {/* 01. BRAND-FIRST CINEMATIC HERO SECTION */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 border-b border-[#262624]">
        {/* Ambient Glowing Background Gradients */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C7612E]/10 rounded-full blur-[140px] pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#98431F]/5 rounded-full blur-[120px] pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          {/* Top Status Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A18] border border-[#2E2E2B] text-xs font-mono text-[#DEDAD3] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-white">GLOBAL REMOTE STUDIO</span>
              <span className="text-[#77746F]">·</span>
              <span className="text-[#C7612E]">AVAILABLE FOR Q2/Q3 BUILDS</span>
            </div>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-5xl"
          >
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.04] mb-8">
              We engineer digital products, <span className="text-[#C7612E]">applied AI</span> & web systems for the world.
            </h1>
          </motion.div>

          {/* Subheadline & Studio Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-[#A3A099] font-light leading-relaxed">
              Qavironel Technologies transforms ambitious ideas into thoughtfully architected, high-velocity software. We partner directly with visionary founders, startups, and companies worldwide—combining digital craftsmanship, modern full-stack engineering, and practical AI.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4"
          >
            <Button to="/contact" variant="primary" size="lg" showArrow>
              Start a Project
            </Button>
            <Button to="/services" variant="secondary" size="lg">
              Explore Capabilities
            </Button>
            <Link 
              to="/work" 
              className="px-4 py-3 text-xs font-mono text-[#A3A099] hover:text-[#C7612E] transition-colors flex items-center gap-1.5"
            >
              <span>View Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Telemetry Metrics Band */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 sm:mt-24 pt-8 border-t border-[#262624] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold font-sans text-white">&lt; 0.8s</p>
              <p className="text-xs font-mono uppercase tracking-wider text-[#C7612E] font-semibold">Sub-Second Load</p>
              <p className="text-[0.75rem] text-[#77746F]">Zero bloatware page builders</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold font-sans text-white">100%</p>
              <p className="text-xs font-mono uppercase tracking-wider text-[#C7612E] font-semibold">Handcrafted Code</p>
              <p className="text-[0.75rem] text-[#77746F]">Type-safe, clean architecture</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold font-sans text-white">Direct</p>
              <p className="text-xs font-mono uppercase tracking-wider text-[#C7612E] font-semibold">Founder Led</p>
              <p className="text-[0.75rem] text-[#77746F]">No account-manager telephone</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold font-sans text-white">Global</p>
              <p className="text-xs font-mono uppercase tracking-wider text-[#C7612E] font-semibold">Remote Reach</p>
              <p className="text-[0.75rem] text-[#77746F]">Serving clients across all time zones</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02. ANIMATED MARQUEE TICKER */}
      <div className="py-4 bg-[#171717] border-b border-[#262624] overflow-hidden whitespace-nowrap">
        <motion.div 
          className="flex gap-8 items-center"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 text-xs font-mono tracking-[0.2em] text-[#77746F]">
              <span className="text-white/90 hover:text-[#C7612E] transition-colors">{item}</span>
              <span className="text-[#C7612E]">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 03. STUDIO MANIFESTO & PHILOSOPHY (ESTABLISHING THE BRAND) */}
      <section className="py-24 sm:py-32 border-b border-[#262624] bg-[#121212] relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block">
                The Qavironel Standard
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Built for founders who refuse ordinary templates.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#A3A099] text-base sm:text-lg leading-relaxed font-light">
              <p>
                The digital web is saturated with sluggish WordPress themes, off-the-shelf page builders, and agency middlemen who charge large markups while farming out the code to unvetted contractors.
              </p>
              <p>
                <span className="text-white font-semibold">Qavironel Technologies</span> exists as an honest, high-craft alternative. We are an independent, remote-first studio that treats every web application, product MVP, and applied AI integration as a piece of disciplined digital craftsmanship.
              </p>
              <p>
                When you partner with us, you collaborate directly with the lead engineer writing your code. We ship with relentless momentum, defend your systems with ethical security standards, and deliver experiences that turn visitors into active customers.
              </p>
            </div>
          </div>

          {/* 4 Core Studio Pillars Grid */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              whileHover={{ y: -6, borderColor: 'rgba(199,97,46,0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-[#171717] border border-[#2E2E2B] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center mb-6">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-white mb-2">Architectural Rigor</h3>
                <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed">
                  Zero bloated plugins or slow builders. Handcrafted, type-safe full-stack code built for lightning performance and clean scalability.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#262624] text-[0.7rem] font-mono text-[#C7612E]">
                REACT 19 · TYPESCRIPT · VITE
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, borderColor: 'rgba(199,97,46,0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-[#171717] border border-[#2E2E2B] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center mb-6">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-white mb-2">Applied AI Systems</h3>
                <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed">
                  Practical intelligence: local-first LLM inference, vision OCR extraction, contextual advisory chat, and guarded system automations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#262624] text-[0.7rem] font-mono text-[#C7612E]">
                GROQ · LLAMA 3.3 · OLLAMA
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, borderColor: 'rgba(199,97,46,0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-[#171717] border border-[#2E2E2B] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-white mb-2">Defensive Security</h3>
                <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed">
                  Backed by Bug Bounty and CTF victories: strict CSP boundaries, token-authenticated localhost layers, and defensible data access controls.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#262624] text-[0.7rem] font-mono text-[#C7612E]">
                BSIDES VADODARA AWARDS · OWASP
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, borderColor: 'rgba(199,97,46,0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-[#171717] border border-[#2E2E2B] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center mb-6">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-white mb-2">Global Velocity</h3>
                <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed">
                  Remote-first workflows catering to clients worldwide. Rapid 1–3 week sprint deliverables, asynchronous video reviews, and zero bureaucracy.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#262624] text-[0.7rem] font-mono text-[#C7612E]">
                GLOBAL REACH · 24H CADENCE
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04. DISCIPLINES & SERVICES MATRIX */}
      <section className="py-24 sm:py-32 border-b border-[#262624] bg-[#171717]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#262624]">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-2">
                Disciplines & Capabilities
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                What we genuinely deliver.
              </h2>
            </div>
            <Link 
              to="/services" 
              className="text-xs font-mono text-[#C7612E] hover:underline flex items-center gap-1.5"
            >
              <span>View Full Service Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <motion.div
                key={svc.id}
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.2)' }}
                className="bg-[#121212] border border-[#2E2E2B] p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#77746F] pb-4 border-b border-[#262624]">
                    <span className="text-[#C7612E] font-semibold">{svc.number}</span>
                    <span>DISCIPLINE</span>
                  </div>

                  <h3 className="font-sans font-bold text-xl text-white mt-5 group-hover:text-[#C7612E] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#77746F] leading-relaxed">
                    {svc.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    <p className="text-[0.7rem] font-mono uppercase tracking-wider text-white font-semibold">
                      Deliverables:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#A3A099]">
                      {svc.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#C7612E] mt-0.5">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#262624] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {svc.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="text-[0.65rem] font-mono bg-[#1A1A18] px-2 py-0.5 text-[#77746F]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/services#${svc.id}`} 
                    className="text-xs font-mono text-[#A3A099] hover:text-[#C7612E] inline-flex items-center gap-1 transition-colors"
                  >
                    Details <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. CURATED WORK (SLEEK, REFINED AGENCY SHOWCASE — NOT OVERSIZED BLOCKS) */}
      <section className="py-24 sm:py-32 border-b border-[#262624] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#262624]">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-2">
                Selected Work
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                Featured software & digital platforms.
              </h2>
              <p className="mt-2 text-sm text-[#77746F] max-w-xl">
                Restrained, honest case studies of production client work, applied AI tools, and product lab prototypes.
              </p>
            </div>
            <Button to="/work" variant="secondary" size="md" showArrow>
              View All 11 Projects
            </Button>
          </div>

          {/* Sleek 2-Column / 3-Column Agency Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curatedProjects.map((project) => (
              <motion.article
                key={project.slug}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-[#171717] border border-[#2E2E2B] hover:border-[#C7612E]/50 transition-all flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Image Preview with sleek 16/10 aspect ratio */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#20201E]">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2 py-0.5 text-[0.65rem] font-mono bg-[#121212]/90 backdrop-blur-sm text-white border border-[#2E2E2B]">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-[0.7rem] font-mono text-[#77746F] mb-2">
                      <span className="text-[#C7612E] font-semibold">{project.category}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-sans font-bold text-xl text-white group-hover:text-[#C7612E] transition-colors">
                      <Link to={`/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#77746F] line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-[#262624] flex items-center justify-between">
                        <div>
                          <p className="text-base font-bold text-white">{project.metrics[0].value}</p>
                          <p className="text-[0.65rem] text-[#77746F] font-mono">{project.metrics[0].label}</p>
                        </div>
                        {project.metrics[1] && (
                          <div className="text-right">
                            <p className="text-base font-bold text-white">{project.metrics[1].value}</p>
                            <p className="text-[0.65rem] text-[#77746F] font-mono">{project.metrics[1].label}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#262624]/60">
                  <Link
                    to={`/work/${project.slug}`}
                    className="text-xs font-mono font-semibold uppercase tracking-wider text-white group-hover:text-[#C7612E] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {project.links.length > 0 && (
                    <a
                      href={project.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#77746F] hover:text-[#C7612E] transition-colors"
                      title={project.links[0].label}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button to="/work" variant="primary" size="lg" showArrow>
              Explore Complete Portfolio & Engineering Labs
            </Button>
          </div>
        </div>
      </section>

      {/* 06. SOLE FOUNDER LEADERSHIP SPOTLIGHT */}
      <section className="py-24 sm:py-32 border-b border-[#262624] bg-[#171717] relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block">
                Engineering Leadership
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                One founder. Direct engineering. No intermediaries.
              </h2>
              <p className="text-base text-[#A3A099] leading-relaxed font-light">
                When you partner with Qavironel, you don't talk to account managers or salespeople. You work directly with Maher Bhatt—from architecture and UI crafting to backend hardening and deployment.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={founder.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#121212] border border-[#2E2E2B] text-white hover:text-[#C7612E] hover:border-[#C7612E] transition-colors"
                  aria-label="Founder GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={founder.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#121212] border border-[#2E2E2B] text-white hover:text-[#C7612E] hover:border-[#C7612E] transition-colors"
                  aria-label="Founder LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <Button to="/about" variant="secondary" size="sm" showArrow>
                  Read Founder Story
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#121212] border border-[#2E2E2B] p-8 sm:p-10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#262624]">
                <div>
                  <h3 className="font-sans font-bold text-2xl text-white">{founder.name}</h3>
                  <p className="text-xs font-mono text-[#C7612E] uppercase tracking-wider mt-0.5">
                    {founder.role}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2E2E2B] text-xs font-mono text-[#77746F]">
                  <Globe className="w-3.5 h-3.5 text-[#C7612E]" />
                  <span>Remote-First Studio</span>
                </div>
              </div>

              <p className="text-sm text-[#A3A099] leading-relaxed">
                {founder.bio}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#262624]">
                <p className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                  Verified Technical Credentials:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#77746F]">
                  {founder.credentials.slice(0, 4).map((cred, i) => (
                    <div key={i} className="flex items-start gap-2 bg-[#171717] p-2.5 border border-[#2E2E2B]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C7612E] shrink-0 mt-0.5" />
                      <span className="text-[#DEDAD3] leading-snug">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. HOW WE BUILD — THE 4-STAGE GLOBAL DELIVERY MODEL */}
      <section className="py-24 sm:py-32 border-b border-[#262624] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-2">
              Our Process
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Disciplined execution from day zero to launch.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#171717] border border-[#2E2E2B] space-y-4">
              <span className="text-xs font-mono text-[#C7612E] font-bold">01 / BLUEPRINT</span>
              <h3 className="font-sans font-bold text-lg text-white">Discovery & Architecture</h3>
              <p className="text-xs text-[#77746F] leading-relaxed">
                We define core user flows, technical constraints, data schemas, and performance targets before writing a single line of production code.
              </p>
            </div>

            <div className="p-6 bg-[#171717] border border-[#2E2E2B] space-y-4">
              <span className="text-xs font-mono text-[#C7612E] font-bold">02 / INTERACTION</span>
              <h3 className="font-sans font-bold text-lg text-white">Design & Motion Systems</h3>
              <p className="text-xs text-[#77746F] leading-relaxed">
                High-fidelity interface design crafted with editorial typography, custom micro-interactions, responsive touch targets, and design tokens.
              </p>
            </div>

            <div className="p-6 bg-[#171717] border border-[#2E2E2B] space-y-4">
              <span className="text-xs font-mono text-[#C7612E] font-bold">03 / CODE</span>
              <h3 className="font-sans font-bold text-lg text-white">Full-Stack Engineering</h3>
              <p className="text-xs text-[#77746F] leading-relaxed">
                Handcrafted type-safe React, TanStack Start, Python, and applied AI models. Zero bloated dependencies. Sub-second performance by default.
              </p>
            </div>

            <div className="p-6 bg-[#171717] border border-[#2E2E2B] space-y-4">
              <span className="text-xs font-mono text-[#C7612E] font-bold">04 / MOMENTUM</span>
              <h3 className="font-sans font-bold text-lg text-white">Hardening & Global Launch</h3>
              <p className="text-xs text-[#77746F] leading-relaxed">
                Core Web Vitals tuning, defensive security verification, semantic search indexing, and 30-day dedicated post-launch support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08. HIGH-IMPACT CLOSING CTA */}
      <section className="py-24 sm:py-32 bg-[#171717] relative">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-8">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block">
            Start Your Next Build
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.08]">
            Have an ambitious idea? <br className="hidden sm:inline" />
            <span className="text-[#C7612E]">Let's engineer it.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A3A099] max-w-2xl mx-auto font-light leading-relaxed">
            We partner with founders and businesses globally to build custom web systems, SaaS MVPs, and applied AI applications. Direct collaboration. Relentless speed.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" showArrow>
              Start a Project
            </Button>
            <a
              href={companyConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#121212] hover:bg-[#20201E] text-white border border-[#2E2E2B] text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              Direct WhatsApp Line
            </a>
          </div>

          <p className="text-xs font-mono text-[#77746F] pt-4">
            Inquiries: <a href={`mailto:${companyConfig.email}`} className="text-[#C7612E] hover:underline">{companyConfig.email}</a> · Average response in &lt; 12 hours
          </p>
        </div>
      </section>
    </div>
  );
};
