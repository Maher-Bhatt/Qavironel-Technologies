import { SEO } from '../components/seo/SEO';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { RevealHeadline } from '../components/ui/RevealHeadline';
import { MagneticButton } from '../components/ui/MagneticButton';
import { CapabilitiesBentoGrid } from '../components/home/CapabilitiesBentoGrid';
import { projects } from '../data/projects';
import { companyConfig } from '../data/company';
import { VideoShowreel } from '../components/media/VideoShowreel';
import { Hero3DArchitectureStack } from '../components/3d/Hero3DArchitectureStack';

import { ProjectCard } from '../components/work/ProjectCard';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Code2, 
  Film, 
  Calendar, 
  FileText 
} from 'lucide-react';
import { openBookingModal } from '../components/booking/BookingModal';
import { StudioStandardsMatrix } from '../components/home/StudioStandardsMatrix';
import { playClickSound } from '../utils/soundEffects';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [workFilter, setWorkFilter] = useState<'all' | 'ai' | 'client' | 'security'>('all');
  const curatedProjects = projects.filter((p) => p.featured).slice(0, 6);

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
    <>
      <SEO title="Home" />
      <div className="bg-[#F6F3ED] dark:bg-[#0C0C0E] text-[#141414] dark:text-[#F6F3ED] overflow-hidden selection:bg-[#C7612E] selection:text-white transition-colors duration-300 pb-20 md:pb-0">
        
        {/* 01. BRAND-FIRST EDITORIAL HERO SECTION */}
        <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-20 border-b border-[#DEDAD3] dark:border-white/10 bg-[#F6F3ED] dark:bg-[#0C0C0E] transition-colors duration-300">
          {/* Subtle Ambient Radial Highlight */}
          <div 
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C7612E]/5 rounded-full blur-[140px] pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            {/* Top Status Pill & Kinetic Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#18181E] border border-[#DEDAD3] dark:border-white/10 text-xs font-mono text-[#57544E] dark:text-[#A6A29A] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-[#141414] dark:text-[#F6F3ED]">INDEPENDENT DIGITAL STUDIO</span>
                <span className="text-[#C7612E]">·</span>
                <span className="text-[#C7612E] font-medium">AVAILABLE FOR NEW BUILDS</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#18181E] border border-[#DEDAD3] dark:border-white/10 text-xs font-mono text-[#57544E] dark:text-[#A6A29A]">
                <span className="text-[#C7612E]">✦</span>
                <span>Web Systems · Software · Applied AI</span>
              </div>

              <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#18181E] border border-[#DEDAD3] dark:border-white/10 text-xs font-mono text-[#57544E] dark:text-[#A6A29A]">
                <span className="text-emerald-500">⚡</span>
                <span>Zero Templates · Handcrafted Code</span>
              </div>
            </motion.div>

            {/* Hero Two-Column Grid: Bold Editorial Typography + Interactive 3D WebGL Sculpture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Editorial Typography & Actions (7 Cols) */}
              <div className="lg:col-span-7">
                <RevealHeadline
                  className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-[#141414] dark:text-[#F6F3ED] leading-[1.08] mb-6"
                  delay={0.1}
                  highlightWord="engineered"
                >
                  {"Thoughtfully designed.\nPrecisely engineered."}
                </RevealHeadline>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <p className="text-base sm:text-lg lg:text-xl text-[#57544E] dark:text-[#A6A29A] font-light leading-relaxed max-w-2xl">
                    Qavironel Technologies is an independent engineering and design studio. We architect and build bespoke web platforms, custom SaaS applications, and applied AI systems that turn ambitious ideas into working digital products.
                  </p>
                </motion.div>

                {/* Action CTAs (Magnetic Physics + Micro-Acoustics) */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full"
                >
                  <MagneticButton
                    onClick={() => navigate('/contact')}
                    className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#C7612E] hover:bg-[#d04a14] text-white text-xs font-bold uppercase tracking-wider shadow-[0_8px_25px_rgba(199,97,46,0.3)] group justify-center w-full sm:w-auto"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>

                  <Link 
                    to="/work" 
                    className="px-6 py-3.5 sm:py-4 rounded-full bg-white dark:bg-[#18181E] hover:bg-[#EFEBE3] dark:hover:bg-[#25252E] text-[#141414] dark:text-[#F6F3ED] text-xs font-bold uppercase tracking-wider border border-[#DEDAD3] dark:border-white/10 transition-colors flex items-center justify-center gap-2 shadow-xs w-full sm:w-auto"
                  >
                    <span>Explore Our Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <MagneticButton
                    onClick={() => openBookingModal('call')}
                    className="px-6 py-3.5 sm:py-4 rounded-full bg-[#141414] dark:bg-white hover:bg-black dark:hover:bg-zinc-100 text-white dark:text-[#141414] text-xs font-bold uppercase tracking-wider shadow-xs group justify-center w-full sm:w-auto"
                  >
                    <Calendar className="w-4 h-4 text-[#C7612E] group-hover:scale-110 transition-transform" />
                    <span>Book Discovery (30m)</span>
                  </MagneticButton>
                </motion.div>
              </div>

              {/* Right Column: Hero 3D Spatial Architecture Core (5 Cols) */}
              <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative w-full max-w-[500px] flex items-center justify-center"
                >
                  {/* Ambient Subtle Radial Glow */}
                  <div className="absolute inset-0 bg-[#C7612E]/5 rounded-full blur-[90px] pointer-events-none" />
                  <Hero3DArchitectureStack className="w-full relative z-10" />
                </motion.div>
              </div>
            </div>

            {/* Telemetry Metrics Band - Tailored Mobile & Tablet Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 sm:mt-20 pt-8 border-t border-[#DEDAD3] dark:border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
            >
              <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#151518]/70 border border-[#DEDAD3] dark:border-white/10 backdrop-blur-sm flex flex-col justify-between space-y-1 shadow-xs">
                <div>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-[#141414] dark:text-[#F6F3ED] tracking-tight">Handcrafted</p>
                  <p className="text-[0.68rem] sm:text-xs font-mono uppercase tracking-wider text-[#C7612E] font-semibold mt-0.5">Custom Architecture</p>
                </div>
                <p className="text-[0.72rem] text-[#6E6B65] dark:text-[#A6A29A] leading-relaxed pt-2">Zero generic builders or bloated themes</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#151518]/70 border border-[#DEDAD3] dark:border-white/10 backdrop-blur-sm flex flex-col justify-between space-y-1 shadow-xs">
                <div>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-[#141414] dark:text-[#F6F3ED] tracking-tight">Type-Safe</p>
                  <p className="text-[0.68rem] sm:text-xs font-mono uppercase tracking-wider text-[#C7612E] font-semibold mt-0.5">Engineering Rigor</p>
                </div>
                <p className="text-[0.72rem] text-[#6E6B65] dark:text-[#A6A29A] leading-relaxed pt-2">Modern React, TypeScript & modular systems</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#151518]/70 border border-[#DEDAD3] dark:border-white/10 backdrop-blur-sm flex flex-col justify-between space-y-1 shadow-xs">
                <div>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-[#141414] dark:text-[#F6F3ED] tracking-tight">Direct</p>
                  <p className="text-[0.68rem] sm:text-xs font-mono uppercase tracking-wider text-[#C7612E] font-semibold mt-0.5">Senior Engineering</p>
                </div>
                <p className="text-[0.72rem] text-[#6E6B65] dark:text-[#A6A29A] leading-relaxed pt-2">Collaborate with builders, zero middle layers</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#151518]/70 border border-[#DEDAD3] dark:border-white/10 backdrop-blur-sm flex flex-col justify-between space-y-1 shadow-xs">
                <div>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-[#141414] dark:text-[#F6F3ED] tracking-tight">Global</p>
                  <p className="text-[0.68rem] sm:text-xs font-mono uppercase tracking-wider text-[#C7612E] font-semibold mt-0.5">Remote Reach</p>
                </div>
                <p className="text-[0.72rem] text-[#6E6B65] dark:text-[#A6A29A] leading-relaxed pt-2">Serving ambitious companies worldwide</p>
              </div>
            </motion.div>

            {/* HERO ANIMATED SHOWREEL / VIDEO REEL PLAYER */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-12 sm:mt-20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-4">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-[#C7612E] shrink-0" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#141414] dark:text-[#F6F3ED]">
                    Studio Showreel In Motion
                  </span>
                </div>
                <span className="text-[0.68rem] font-mono text-[#6E6B65] dark:text-[#A6A29A] tracking-wider">
                  RECORDED SCREEN RUNTIMES · VERIFIED BUILDS
                </span>
              </div>
              <VideoShowreel />
            </motion.div>
          </div>
        </section>

        {/* 02. ANIMATED MARQUEE TICKER */}
        <div className="py-4 bg-[#EFEBE3] dark:bg-[#121215] border-b border-[#DEDAD3] dark:border-white/10 overflow-hidden whitespace-nowrap transition-colors duration-300">
          <div className="animate-marquee-smooth flex items-center gap-8">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 text-xs font-mono tracking-[0.2em] text-[#6E6B65] dark:text-[#A6A29A]">
                <span className="text-[#141414] dark:text-[#F6F3ED] hover:text-[#C7612E] dark:hover:text-[#C7612E] transition-colors font-semibold">{item}</span>
                <span className="text-[#C7612E]">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* 03. INTERACTIVE CAPABILITIES BENTO ARCHITECTURE */}
        <CapabilitiesBentoGrid />

        {/* 04. STUDIO MANIFESTO & PHILOSOPHY */}
        <section className="py-24 sm:py-32 border-b border-[#DEDAD3] dark:border-white/10 bg-white dark:bg-[#121215] transition-colors duration-300 relative">
          <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-2">
                    The Qavironel Standard
                  </span>
                  <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#141414] dark:text-[#F6F3ED] tracking-tight leading-tight">
                    Built for founders who refuse ordinary templates.
                  </h2>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 text-[#57544E] dark:text-[#A6A29A] text-base sm:text-lg leading-relaxed font-light">
                <p>
                  The digital web is saturated with sluggish WordPress themes, off-the-shelf page builders, and agency middlemen who charge large markups while farming out the code to unvetted contractors.
                </p>
                <p>
                  <span className="text-[#141414] dark:text-[#F6F3ED] font-semibold">Qavironel Technologies</span> exists as an honest, high-craft alternative. We are an independent, remote-first studio that treats every web application, product MVP, and applied AI integration as a piece of disciplined digital craftsmanship.
                </p>
                <p>
                  When you partner with us, you collaborate directly with the lead engineer writing your code. We ship with relentless momentum, defend your systems with ethical security standards, and deliver experiences that turn visitors into active customers.
                </p>
              </div>
            </div>

            {/* 4 Core Studio Pillars Grid */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                whileHover={{ y: -6, borderColor: 'rgba(199, 97, 46, 0.6)' }}
                transition={{ duration: 0.2 }}
                className="bg-[#F6F3ED] dark:bg-[#18181E] rounded-2xl border border-[#DEDAD3] dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#C7612E]/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center mb-6">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#141414] dark:text-[#F6F3ED] mb-2">Architectural Rigor</h3>
                  <p className="text-xs sm:text-sm text-[#57544E] dark:text-[#A6A29A] leading-relaxed">
                    Zero bloated plugins or slow builders. Handcrafted, type-safe full-stack code built for lightning performance and clean scalability.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DEDAD3] dark:border-white/10 text-[0.7rem] font-mono text-[#C7612E] font-semibold">
                  REACT 19 · TYPESCRIPT · VITE
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -6, borderColor: 'rgba(199, 97, 46, 0.6)' }}
                transition={{ duration: 0.2 }}
                className="bg-[#F6F3ED] dark:bg-[#18181E] rounded-2xl border border-[#DEDAD3] dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#C7612E]/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center mb-6">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#141414] dark:text-[#F6F3ED] mb-2">Applied AI Systems</h3>
                  <p className="text-xs sm:text-sm text-[#57544E] dark:text-[#A6A29A] leading-relaxed">
                    Practical intelligence: local-first LLM inference, vision OCR extraction, contextual advisory chat, and guarded system automations.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DEDAD3] dark:border-white/10 text-[0.7rem] font-mono text-[#C7612E] font-semibold">
                  GROQ · LLAMA 3.3 · OLLAMA
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -6, borderColor: 'rgba(199, 97, 46, 0.6)' }}
                transition={{ duration: 0.2 }}
                className="bg-[#F6F3ED] dark:bg-[#18181E] rounded-2xl border border-[#DEDAD3] dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#C7612E]/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center mb-6">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#141414] dark:text-[#F6F3ED] mb-2">Defensive Security</h3>
                  <p className="text-xs sm:text-sm text-[#57544E] dark:text-[#A6A29A] leading-relaxed">
                    Backed by Bug Bounty and CTF victories: strict CSP boundaries, token-authenticated localhost layers, and defensible data access controls.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DEDAD3] dark:border-white/10 text-[0.7rem] font-mono text-[#C7612E] font-semibold">
                  BSIDES VADODARA AWARDS · OWASP
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -6, borderColor: 'rgba(199, 97, 46, 0.6)' }}
                transition={{ duration: 0.2 }}
                className="bg-[#F6F3ED] dark:bg-[#18181E] rounded-2xl border border-[#DEDAD3] dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#C7612E]/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center mb-6">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#141414] dark:text-[#F6F3ED] mb-2">Global Velocity</h3>
                  <p className="text-xs sm:text-sm text-[#57544E] dark:text-[#A6A29A] leading-relaxed">
                    Remote-first workflows catering to clients worldwide. Rapid 1–3 week sprint deliverables, asynchronous video reviews, and zero bureaucracy.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DEDAD3] dark:border-white/10 text-[0.7rem] font-mono text-[#C7612E] font-semibold">
                  GLOBAL REACH · 24H CADENCE
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 05. CURATED WORK */}
        <section className="py-24 sm:py-32 border-b border-[#DEDAD3] dark:border-white/10 bg-[#F6F3ED] dark:bg-[#0C0C0E] transition-colors duration-300 relative">
          <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#DEDAD3] dark:border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#C7612E] animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E]">
                    Curated Studio Archive
                  </span>
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#141414] dark:text-[#F6F3ED] tracking-tight">
                  Featured software & digital platforms.
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#57544E] dark:text-[#A6A29A] max-w-xl font-light">
                  Verifiable case studies of client production software, applied AI desktop assistants, and full-stack systems. Zero placeholder mockups.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-[#18181E] border border-[#DEDAD3] dark:border-white/10 shadow-xs">
                {[
                  { id: 'all', label: 'All Featured (6)' },
                  { id: 'ai', label: 'Applied AI & Runtimes' },
                  { id: 'client', label: 'Client Commerce' },
                  { id: 'security', label: 'Security & Labs' }
                ].map((tab) => {
                  const isActive = workFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        playClickSound();
                        setWorkFilter(tab.id as any);
                      }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                        isActive
                          ? 'bg-[#141414] dark:bg-[#F6F3ED] text-white dark:text-[#141414] shadow-xs'
                          : 'text-[#6E6B65] dark:text-[#A6A29A] hover:text-[#141414] dark:hover:text-white hover:bg-[#F6F3ED] dark:hover:bg-[#25252E]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Project Display: Flagship Spotlight + Grid */}
            <div className="mt-12 space-y-10">
              {(workFilter === 'all' || workFilter === 'ai') && (
                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3 text-xs font-mono text-[#6E6B65] dark:text-[#A6A29A]">
                    <span className="text-[#C7612E] font-bold text-[0.72rem] sm:text-xs tracking-tight">★ FLAGSHIP SHOWCASE · STORE CERTIFIED v1.0.4</span>
                    <span className="hidden sm:inline text-[0.7rem]">CLICK TABS BELOW TO INSPECT SCREENS</span>
                  </div>
                  <ProjectCard project={curatedProjects[0]} layout="featured" />
                </div>
              )}

              {/* Grid for Other Projects */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {curatedProjects
                  .filter((p) => {
                    if (workFilter === 'all') return p.slug !== 'kalki';
                    if (workFilter === 'ai') return (p.category === 'AI & Software' || p.category === 'Digital Products') && p.slug !== 'kalki';
                    if (workFilter === 'client') return p.category === 'Client Work';
                    if (workFilter === 'security') return p.category === 'Product Lab' || p.category === 'Academic Build' || p.category === 'Experiments';
                    return true;
                  })
                  .map((project) => (
                    <ProjectCard key={project.slug} project={project} layout="standard" />
                  ))}
              </div>
            </div>

            {/* Scope Estimator Quick-Launch Card */}
            <div className="mt-16 p-8 rounded-2xl bg-white dark:bg-[#151518] border border-[#DEDAD3] dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-xs font-mono text-[#C7612E] font-bold uppercase tracking-wider">
                  Instant Architecture Brief
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#141414] dark:text-[#F6F3ED]">
                  Have a specific project or platform in mind?
                </h3>
                <p className="text-xs sm:text-sm text-[#57544E] dark:text-[#A6A29A]">
                  Configure deliverables, tech modules, and receive an instant scope breakdown in under 60 seconds.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    playClickSound();
                    openBookingModal('quotation');
                  }}
                  className="px-5 py-3 rounded-full bg-[#C7612E] hover:bg-[#d04a14] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Configure Scope Brief</span>
                </button>

                <Button to="/work" variant="secondary" size="md" showArrow>
                  {`View Complete Archive (${projects.length})`}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 06. STUDIO ENGINEERING BENCHMARKS & COMPARISON MATRIX */}
        <StudioStandardsMatrix onOpenBooking={openBookingModal} />

        {/* 07. HOW WE BUILD — THE 4-STAGE GLOBAL DELIVERY MODEL */}
        <section className="py-24 sm:py-32 border-b border-[#DEDAD3] dark:border-white/10 bg-[#F6F3ED] dark:bg-[#0C0C0E] transition-colors duration-300">
          <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-2">
                Our Process
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#141414] dark:text-[#F6F3ED] tracking-tight">
                Disciplined execution from day zero to launch.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-7 bg-white dark:bg-[#151518] rounded-2xl border border-[#DEDAD3] dark:border-white/10 space-y-4 shadow-xs hover:border-[#C7612E]/40 transition-colors">
                <span className="text-xs font-mono text-[#C7612E] font-bold">01 / BLUEPRINT</span>
                <h3 className="font-display font-bold text-lg text-[#141414] dark:text-[#F6F3ED]">Discovery & Architecture</h3>
                <p className="text-xs sm:text-sm text-[#57544E] dark:text-[#A6A29A] leading-relaxed">
                  We define core user flows, technical constraints, data schemas, and performance targets before writing a single line of production code.
                </p>
              </div>

              <div className="p-7 bg-white dark:bg-[#151518] rounded-2xl border border-[#DEDAD3] dark:border-white/10 space-y-4 shadow-xs hover:border-[#C7612E]/40 transition-colors">
                <span className="text-xs font-mono text-[#C7612E] font-bold">02 / INTERACTION</span>
                <h3 className="font-display font-bold text-lg text-[#141414] dark:text-[#F6F3ED]">Design & Motion Systems</h3>
                <p className="text-xs sm:text-sm text-[#57544E] dark:text-[#A6A29A] leading-relaxed">
                  High-fidelity interface design crafted with editorial typography, custom micro-interactions, responsive touch targets, and design tokens.
                </p>
              </div>

              <div className="p-7 bg-white dark:bg-[#151518] rounded-2xl border border-[#DEDAD3] dark:border-white/10 space-y-4 shadow-xs hover:border-[#C7612E]/40 transition-colors">
                <span className="text-xs font-mono text-[#C7612E] font-bold">03 / CODE</span>
                <h3 className="font-display font-bold text-lg text-[#141414] dark:text-[#F6F3ED]">Full-Stack Engineering</h3>
                <p className="text-xs sm:text-sm text-[#57544E] dark:text-[#A6A29A] leading-relaxed">
                  Handcrafted type-safe React, TanStack Start, Python, and applied AI models. Clean modular architecture. Production-tuned performance by default.
                </p>
              </div>

              <div className="p-7 bg-white dark:bg-[#151518] rounded-2xl border border-[#DEDAD3] dark:border-white/10 space-y-4 shadow-xs hover:border-[#C7612E]/40 transition-colors">
                <span className="text-xs font-mono text-[#C7612E] font-bold">04 / MOMENTUM</span>
                <h3 className="font-display font-bold text-lg text-[#141414] dark:text-[#F6F3ED]">Hardening & Global Launch</h3>
                <p className="text-xs sm:text-sm text-[#57544E] dark:text-[#A6A29A] leading-relaxed">
                  Core Web Vitals tuning, defensive security verification, semantic search indexing, and 30-day dedicated post-launch support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 08. HIGH-IMPACT CLOSING CTA */}
        <section className="py-24 sm:py-32 bg-white dark:bg-[#121215] border-b border-[#DEDAD3] dark:border-white/10 transition-colors duration-300 relative">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block">
              Start Your Next Build
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-[#141414] dark:text-[#F6F3ED] tracking-tight leading-[1.08]">
              Have an ambitious idea? <br className="hidden sm:inline" />
              <span className="text-[#C7612E]">Let's engineer it.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#57544E] dark:text-[#A6A29A] max-w-2xl mx-auto font-light leading-relaxed">
              We partner with founders and businesses globally to build custom web systems, SaaS MVPs, and applied AI applications. Direct collaboration. Relentless speed.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-[#C7612E] hover:bg-[#d04a14] text-white text-xs font-bold uppercase tracking-wider shadow-[0_8px_25px_rgba(199,97,46,0.3)] group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                onClick={() => openBookingModal('call')}
                className="px-6 py-4 rounded-full bg-[#141414] dark:bg-white hover:bg-black dark:hover:bg-zinc-100 text-white dark:text-[#141414] text-xs font-bold uppercase tracking-wider shadow-xs group"
              >
                <Calendar className="w-4 h-4 text-[#C7612E] group-hover:scale-110 transition-transform" />
                <span>Book Discovery (30m)</span>
              </MagneticButton>

              <a
                href={companyConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-[#F6F3ED] dark:bg-[#1E1E24] hover:bg-[#EFEBE3] dark:hover:bg-[#25252E] text-[#141414] dark:text-[#F6F3ED] border border-[#DEDAD3] dark:border-white/10 text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                Direct WhatsApp Line
              </a>
            </div>

            <p className="text-xs font-mono text-[#6E6B65] dark:text-[#A6A29A] pt-4">
              Inquiries: <a href={`mailto:${companyConfig.email}`} className="text-[#C7612E] hover:underline font-semibold">{companyConfig.email}</a> · Average response in &lt; 12 hours
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default HomePage;
