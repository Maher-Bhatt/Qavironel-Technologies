import { SEO } from '../components/seo/SEO';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { RevealHeadline } from '../components/ui/RevealHeadline';
import { MagneticButton } from '../components/ui/MagneticButton';
import { CapabilitiesBentoGrid } from '../components/home/CapabilitiesBentoGrid';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { companyConfig } from '../data/company';
import { VideoShowreel } from '../components/media/VideoShowreel';
import { AmbientHeroCanvas } from '../components/media/AmbientHeroCanvas';
import { Hero3DArchitectureStack } from '../components/3d/Hero3DArchitectureStack';

import { ProjectCard } from '../components/work/ProjectCard';
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
  ChevronRight,
  Activity,
  Gauge,
  Bot,
  LayoutGrid,
  Film,
  Calendar,
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { openBookingModal } from '../components/booking/BookingModal';
import { StudioEngineConsole } from '../components/home/StudioEngineConsole';
import { StudioStandardsMatrix } from '../components/home/StudioStandardsMatrix';
import { playClickSound } from '../utils/soundEffects';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [workFilter, setWorkFilter] = useState<'all' | 'ai' | 'client' | 'security'>('all');
  // Take 6 curated projects for sleek agency showcase
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
      <div className="bg-white text-[#0A0A0A] overflow-hidden selection:bg-[#E0561B] selection:text-white">
      {/* 01. BRAND-FIRST EDITORIAL HERO SECTION (CLAY.GLOBAL PURE WHITE CANVAS) */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 border-b border-[#E5E7EB]">
        {/* Interactive Ambient Fluid Wave Canvas */}
        <AmbientHeroCanvas />

        {/* Subtle Ambient Radial Highlight */}
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E0561B]/5 rounded-full blur-[140px] pointer-events-none" 
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F9FA] border border-[#E5E7EB] text-xs font-mono text-[#52525B] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-[#0A0A0A]">GLOBAL REMOTE STUDIO</span>
              <span className="text-[#E0561B]">·</span>
              <span className="text-[#E0561B] font-medium">AVAILABLE FOR NEW BUILDS</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F9FA] border border-[#E5E7EB] text-xs font-mono text-[#52525B]">
              <span className="text-[#E0561B]">✦</span>
              <span>Applied AI & Multimodal Workflows</span>
            </div>

            <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F9FA] border border-[#E5E7EB] text-xs font-mono text-[#52525B]">
              <span className="text-emerald-500">⚡</span>
              <span>Sub-0.8s Core Web Vitals</span>
            </div>
          </motion.div>

          {/* Hero Two-Column Grid: Bold Editorial Typography + Interactive 3D WebGL Sculpture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Editorial Typography & Actions (7 Cols) */}
            <div className="lg:col-span-7">
              <RevealHeadline
                className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-6xl xl:text-7xl tracking-tight text-[#0A0A0A] leading-[1.04] mb-6"
                delay={0.1}
                highlightWord={['applied', 'ai']}
              >
                {"We engineer digital products,\napplied AI & high-velocity web systems."}
              </RevealHeadline>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p className="text-base sm:text-lg lg:text-xl text-[#52525B] font-light leading-relaxed max-w-2xl">
                  Qavironel Technologies transforms ambitious ideas into thoughtfully architected, high-velocity digital products. We partner directly with visionary founders, startups, and companies worldwide—combining digital craftsmanship, modern full-stack engineering, and practical AI.
                </p>
              </motion.div>

              {/* Action CTAs (Magnetic Physics + Micro-Acoustics) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
              >
                <MagneticButton
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 rounded-full bg-[#E0561B] hover:bg-[#d04a14] text-white text-xs font-bold uppercase tracking-wider shadow-[0_8px_25px_rgba(224,86,27,0.3)] group"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>

                <MagneticButton
                  onClick={() => openBookingModal('call')}
                  className="px-6 py-4 rounded-full bg-[#0A0A0A] hover:bg-black text-white text-xs font-bold uppercase tracking-wider shadow-xs group"
                >
                  <Calendar className="w-4 h-4 text-[#E0561B] group-hover:scale-110 transition-transform" />
                  <span>Book Discovery (30m)</span>
                </MagneticButton>

                <MagneticButton
                  onClick={() => openBookingModal('quotation')}
                  className="px-6 py-4 rounded-full bg-[#F4F4F5] hover:bg-[#E5E7EB] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider border border-[#E5E7EB]"
                >
                  <FileText className="w-4 h-4 text-[#E0561B]" />
                  <span>Instant Quote</span>
                </MagneticButton>

                <Link 
                  to="/work" 
                  className="px-4 py-3 text-xs font-mono text-[#52525B] hover:text-[#E0561B] transition-colors flex items-center gap-1.5 font-semibold"
                >
                  <span>Selected Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Hero 3D Spatial Architecture Core (5 Cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-[500px] flex items-center justify-center"
              >
                {/* Ambient Subtle Radial Glow */}
                <div className="absolute inset-0 bg-[#E0561B]/5 rounded-full blur-[90px] pointer-events-none" />
                <Hero3DArchitectureStack className="w-full relative z-10" />
              </motion.div>
            </div>
          </div>

          {/* Telemetry Metrics Band */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 sm:mt-20 pt-8 border-t border-[#E5E7EB] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold font-sans text-[#0A0A0A]">&lt; 0.8s</p>
              <p className="text-xs font-mono uppercase tracking-wider text-[#E0561B] font-semibold">Sub-Second Load</p>
              <p className="text-[0.75rem] text-[#71717A]">Zero bloatware page builders</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold font-sans text-[#0A0A0A]">100%</p>
              <p className="text-xs font-mono uppercase tracking-wider text-[#E0561B] font-semibold">Handcrafted Code</p>
              <p className="text-[0.75rem] text-[#71717A]">Type-safe, clean architecture</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold font-sans text-[#0A0A0A]">Direct</p>
              <p className="text-xs font-mono uppercase tracking-wider text-[#E0561B] font-semibold">Senior Engineering</p>
              <p className="text-[0.75rem] text-[#71717A]">Zero junior account-manager fog</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold font-sans text-[#0A0A0A]">Global</p>
              <p className="text-xs font-mono uppercase tracking-wider text-[#E0561B] font-semibold">Remote Reach</p>
              <p className="text-[0.75rem] text-[#71717A]">Serving clients worldwide</p>
            </div>
          </motion.div>

          {/* 01.1 LIVE ARCHITECTURE TELEMETRY & RUNTIME BENCHMARK */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-16 sm:mt-20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#E0561B]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A]">
                  Studio Runtime & Telemetry Console
                </span>
              </div>
              <span className="text-xs font-mono text-[#71717A]">INTERACTIVE PREVIEW // CLICK TABS</span>
            </div>
            <StudioEngineConsole />
          </motion.div>

          {/* 01.2 HERO ANIMATED SHOWREEL / VIDEO REEL PLAYER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-16 sm:mt-20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#E0561B]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A]">
                  Studio Showreel In Motion
                </span>
              </div>
              <span className="text-xs font-mono text-[#71717A]">4K SCREEN RECORDINGS · LIVE CAPTURE</span>
            </div>
            <VideoShowreel />
          </motion.div>
        </div>
      </section>

      {/* 02. ANIMATED MARQUEE TICKER (CLAY CRISP LIGHT THEME) */}
      <div className="py-4 bg-[#F8F9FA] border-b border-[#E5E7EB] overflow-hidden whitespace-nowrap">
        <div className="animate-marquee-smooth flex items-center gap-8">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 text-xs font-mono tracking-[0.2em] text-[#71717A]">
              <span className="text-[#0A0A0A] hover:text-[#E0561B] transition-colors font-medium">{item}</span>
              <span className="text-[#E0561B]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 03. INTERACTIVE CAPABILITIES BENTO ARCHITECTURE (BLUEPRINT #03) */}
      <CapabilitiesBentoGrid />

      {/* 04. STUDIO MANIFESTO & PHILOSOPHY (ESTABLISHING THE BRAND) */}
      <section className="py-24 sm:py-32 border-b border-[#E5E7EB] bg-[#F8F9FA] relative">
        <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B] block mb-2">
                  The Qavironel Standard
                </span>
                <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight leading-tight">
                  Built for founders who refuse ordinary templates.
                </h2>
              </div>

              {/* Removed interactive sphere block as requested to keep 3D elements singular */}
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#52525B] text-base sm:text-lg leading-relaxed font-light">
              <p>
                The digital web is saturated with sluggish WordPress themes, off-the-shelf page builders, and agency middlemen who charge large markups while farming out the code to unvetted contractors.
              </p>
              <p>
                <span className="text-[#0A0A0A] font-semibold">Qavironel Technologies</span> exists as an honest, high-craft alternative. We are an independent, remote-first studio that treats every web application, product MVP, and applied AI integration as a piece of disciplined digital craftsmanship.
              </p>
              <p>
                When you partner with us, you collaborate directly with the lead engineer writing your code. We ship with relentless momentum, defend your systems with ethical security standards, and deliver experiences that turn visitors into active customers.
              </p>
            </div>
          </div>

          {/* 4 Core Studio Pillars Grid (White Cards on Clean Grey Surface) */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              whileHover={{ y: -6, borderColor: 'rgba(224,86,27,0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#E0561B]/10 border border-[#E0561B]/20 text-[#E0561B] flex items-center justify-center mb-6">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-[#0A0A0A] mb-2">Architectural Rigor</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Zero bloated plugins or slow builders. Handcrafted, type-safe full-stack code built for lightning performance and clean scalability.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-[0.7rem] font-mono text-[#E0561B] font-semibold">
                REACT 19 · TYPESCRIPT · VITE
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, borderColor: 'rgba(224,86,27,0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#E0561B]/10 border border-[#E0561B]/20 text-[#E0561B] flex items-center justify-center mb-6">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-[#0A0A0A] mb-2">Applied AI Systems</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Practical intelligence: local-first LLM inference, vision OCR extraction, contextual advisory chat, and guarded system automations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-[0.7rem] font-mono text-[#E0561B] font-semibold">
                GROQ · LLAMA 3.3 · OLLAMA
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, borderColor: 'rgba(224,86,27,0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#E0561B]/10 border border-[#E0561B]/20 text-[#E0561B] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-[#0A0A0A] mb-2">Defensive Security</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Backed by Bug Bounty and CTF victories: strict CSP boundaries, token-authenticated localhost layers, and defensible data access controls.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-[0.7rem] font-mono text-[#E0561B] font-semibold">
                BSIDES VADODARA AWARDS · OWASP
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, borderColor: 'rgba(224,86,27,0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#E0561B]/10 border border-[#E0561B]/20 text-[#E0561B] flex items-center justify-center mb-6">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-[#0A0A0A] mb-2">Global Velocity</h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Remote-first workflows catering to clients worldwide. Rapid 1–3 week sprint deliverables, asynchronous video reviews, and zero bureaucracy.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-[0.7rem] font-mono text-[#E0561B] font-semibold">
                GLOBAL REACH · 24H CADENCE
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05. CURATED WORK (SLEEK, REFINED AGENCY SHOWCASE — CLAY STYLE) */}
      <section className="py-24 sm:py-32 border-b border-[#E5E7EB] bg-white relative">
        <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E5E7EB]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E0561B] animate-pulse" />
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B]">
                  Curated Studio Archive
                </span>
              </div>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight">
                Featured software & digital platforms.
              </h2>
              <p className="mt-2 text-sm text-[#52525B] max-w-xl font-light">
                Verifiable case studies of client production software, applied AI desktop assistants, and full-stack systems. Zero placeholder mockups.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB]">
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
                        ? 'bg-[#0A0A0A] text-white shadow-xs'
                        : 'text-[#71717A] hover:text-[#0A0A0A] hover:bg-white'
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
            {/* If all or ai is selected, render Flagship K.A.L.K.I. with Featured Architecture Layout */}
            {(workFilter === 'all' || workFilter === 'ai') && (
              <div className="relative">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#71717A]">
                  <span className="text-[#E0561B] font-bold">★ FLAGSHIP SHOWCASE · STORE CERTIFIED v1.0.4</span>
                  <span>CLICK TABS BELOW TO INSPECT SCREENS</span>
                </div>
                <ProjectCard project={curatedProjects[0]} layout="featured" />
              </div>
            )}

            {/* Grid for Other Projects (Generous 2-Column Editorial Viewport) */}
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
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#F8F9FA] via-white to-[#F8F9FA] border border-[#E5E7EB] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-mono text-[#E0561B] font-bold uppercase tracking-wider">
                Instant Architecture Brief
              </span>
              <h3 className="font-sans font-bold text-xl text-[#0A0A0A]">
                Have a specific project or platform in mind?
              </h3>
              <p className="text-xs text-[#52525B]">
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
                className="px-5 py-3 rounded-full bg-[#E0561B] hover:bg-[#d04a14] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2"
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
      <section className="py-24 sm:py-32 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B] block mb-2">
              Our Process
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight">
              Disciplined execution from day zero to launch.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#F8F9FA] rounded-xl border border-[#E5E7EB] space-y-4 shadow-xs">
              <span className="text-xs font-mono text-[#E0561B] font-bold">01 / BLUEPRINT</span>
              <h3 className="font-sans font-bold text-lg text-[#0A0A0A]">Discovery & Architecture</h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                We define core user flows, technical constraints, data schemas, and performance targets before writing a single line of production code.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FA] rounded-xl border border-[#E5E7EB] space-y-4 shadow-xs">
              <span className="text-xs font-mono text-[#E0561B] font-bold">02 / INTERACTION</span>
              <h3 className="font-sans font-bold text-lg text-[#0A0A0A]">Design & Motion Systems</h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                High-fidelity interface design crafted with editorial typography, custom micro-interactions, responsive touch targets, and design tokens.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FA] rounded-xl border border-[#E5E7EB] space-y-4 shadow-xs">
              <span className="text-xs font-mono text-[#E0561B] font-bold">03 / CODE</span>
              <h3 className="font-sans font-bold text-lg text-[#0A0A0A]">Full-Stack Engineering</h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Handcrafted type-safe React, TanStack Start, Python, and applied AI models. Zero bloated dependencies. Sub-second performance by default.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FA] rounded-xl border border-[#E5E7EB] space-y-4 shadow-xs">
              <span className="text-xs font-mono text-[#E0561B] font-bold">04 / MOMENTUM</span>
              <h3 className="font-sans font-bold text-lg text-[#0A0A0A]">Hardening & Global Launch</h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Core Web Vitals tuning, defensive security verification, semantic search indexing, and 30-day dedicated post-launch support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08. HIGH-IMPACT CLOSING CTA */}
      <section className="py-24 sm:py-32 bg-[#F8F9FA] relative">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-8">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B] block">
            Start Your Next Build
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl text-[#0A0A0A] tracking-tight leading-[1.08]">
            Have an ambitious idea? <br className="hidden sm:inline" />
            <span className="text-[#E0561B]">Let's engineer it.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#52525B] max-w-2xl mx-auto font-light leading-relaxed">
            We partner with founders and businesses globally to build custom web systems, SaaS MVPs, and applied AI applications. Direct collaboration. Relentless speed.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-full bg-[#E0561B] hover:bg-[#d04a14] text-white text-xs font-bold uppercase tracking-wider shadow-[0_8px_25px_rgba(224,86,27,0.3)] group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            <MagneticButton
              onClick={() => openBookingModal('call')}
              className="px-6 py-4 rounded-full bg-[#0A0A0A] hover:bg-black text-white text-xs font-bold uppercase tracking-wider shadow-xs group"
            >
              <Calendar className="w-4 h-4 text-[#E0561B] group-hover:scale-110 transition-transform" />
              <span>Book Discovery (30m)</span>
            </MagneticButton>

            <a
              href={companyConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-full bg-white hover:bg-[#F4F4F5] text-[#0A0A0A] border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              Direct WhatsApp Line
            </a>
          </div>

          <p className="text-xs font-mono text-[#71717A] pt-4">
            Inquiries: <a href={`mailto:${companyConfig.email}`} className="text-[#E0561B] hover:underline font-semibold">{companyConfig.email}</a> · Average response in &lt; 12 hours
          </p>
        </div>
      </section>
    </div>
    </>
  );
};


