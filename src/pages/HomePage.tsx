import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { projects } from '../data/projects';
import { companyConfig } from '../data/company';
import { openBookingModal } from '../components/booking/BookingModal';
import { VideoShowreel } from '../components/media/VideoShowreel';
import { ScrollAutoplayVideo } from '../components/media/ScrollAutoplayVideo';
import { Spatial3DPrism } from '../components/3d/Spatial3DPrism';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Terminal, 
  Zap, 
  ExternalLink,
  Cpu,
  Radio,
  Sparkles,
  Activity,
  Volume2,
  VolumeX,
  Play,
  Pause
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [heroTab, setHeroTab] = useState<'kalki' | 'ztees' | 'telemetry'>('kalki');
  const [isHeroVideoMuted, setIsHeroVideoMuted] = useState<boolean>(true);
  const [tokensPerSec, setTokensPerSec] = useState<number>(142);
  const [latency, setLatency] = useState<number>(8.4);

  // Subtle live pulse for engine telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setTokensPerSec(Math.floor(138 + Math.random() * 12));
      setLatency(Number((7.8 + Math.random() * 1.4).toFixed(1)));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Flagship projects
  const kalkiProject = projects.find(p => p.slug === 'kalki') || projects[0];
  const zteesProject = projects.find(p => p.slug === 'ztees') || projects[1];
  const cipProject = projects.find(p => p.slug === 'classic-infrastructure') || projects[2];
  const civicProject = projects.find(p => p.slug === 'civic-sathi') || projects[3];
  const cyberProject = projects.find(p => p.slug === 'socialsafe') || projects[projects.length - 1] || projects[0];

  const disciplines = [
    {
      num: '01',
      title: 'Web Systems & Digital Platforms',
      summary: 'Marketing sites, commerce storefronts, and bespoke business web applications engineered from scratch. Fast, responsive, and completely free of template bloat.',
      deliverables: ['Custom React & Next.js architectures', 'High-conversion WhatsApp & Stripe commerce', 'Core Web Vitals & technical SEO', 'Zero-drift Figma to code'],
      stack: ['React 19', 'TanStack', 'Tailwind CSS', 'Vite', 'TypeScript'],
      caseStudySlug: 'ztees',
      caseStudyName: 'Ztees Streetwear Platform'
    },
    {
      num: '02',
      title: 'Software & Application Engineering',
      summary: 'Full-stack software products, role-based dashboards, and internal operational tools. Built with clean data schemas, resilient APIs, and strict security boundaries.',
      deliverables: ['SaaS MVPs shipped in 2–4 weeks', 'Role-based access control (RBAC) portals', 'PostgreSQL data modeling & REST APIs', 'Desktop applications & native runtimes'],
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'TypeScript', 'Node.js'],
      caseStudySlug: 'civic-sathi',
      caseStudyName: 'Civic Sathi Monorepo'
    },
    {
      num: '03',
      title: 'Applied AI & Intelligent Workflows',
      summary: 'Practical AI implementations built for real utility, not hype. From local-first desktop runtimes and air-gapped models to multi-LLM routing and guarded automation.',
      deliverables: ['Local-first inference with Ollama & LLaMA', 'Multi-model routing (Groq, Gemini, OpenAI)', 'Hardware-encrypted credentials (DPAPI)', 'Voice interfaces & neural speech (VOSK)'],
      stack: ['Python', 'Local LLMs', 'Groq LLaMA 3.3', 'VOSK', 'DPAPI Vault'],
      caseStudySlug: 'kalki',
      caseStudyName: 'K.A.L.K.I. Desktop Assistant'
    },
    {
      num: '04',
      title: 'UI/UX & Design Systems',
      summary: 'Editorial design systems, interface typography, and interactive components that turn complex technical workflows into natural, accessible user journeys.',
      deliverables: ['Cohesive design systems & tokens', 'Fluid micro-interactions & spring physics', 'Multi-device mobile & tablet ergonomics', 'Accessibility compliance (WCAG 2.1 AA)'],
      stack: ['Figma', 'Design Tokens', 'Framer Motion', 'Tailwind CSS'],
      caseStudySlug: 'codedroid',
      caseStudyName: 'CodeDroid Mobile IDE'
    }
  ];

  return (
    <>
      <SEO 
        title="Digital Product & Applied AI Engineering Studio" 
        description="Global engineering-led studio architecting bespoke web platforms, SaaS applications, and applied AI systems with sub-second execution speeds."
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': 'https://qavironel.com/#website',
              url: 'https://qavironel.com/',
              name: 'Qavironel Technologies',
              description: 'Global engineering-led digital product and applied AI studio.',
              publisher: { '@id': 'https://qavironel.com/#organization' }
            }
          ]
        }}
      />

      <div className="bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#FAFAFA] transition-colors duration-300 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        
        {/* ========================================================================= */}
        {/* 01. EDITORIAL ASYMMETRIC HERO SECTION                                     */}
        {/* ========================================================================= */}
        <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 border-b border-black/10 dark:border-white/10 overflow-hidden">
          <div className="max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            
            {/* Studio Identity Tags */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8 sm:mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-[0.68rem] sm:text-[0.7rem] font-mono tracking-widest uppercase text-black dark:text-white shadow-2xs max-w-full">
                <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse shrink-0" />
                <span className="truncate">INDEPENDENT DIGITAL STUDIO <span className="hidden sm:inline">· AVAILABLE FOR NEW BUILDS</span></span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-black/10 dark:border-white/10 text-[0.7rem] font-mono uppercase text-zinc-500 dark:text-zinc-400">
                <span>✦ Web Systems · Software · Applied AI</span>
              </span>
              <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-black/10 dark:border-white/10 text-[0.7rem] font-mono uppercase text-zinc-500 dark:text-zinc-400">
                <span>Zero Templates · Handcrafted Code</span>
              </span>
            </div>

            {/* Asymmetrical 2-Column Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column (7 cols): Editorial Typography + Direct Value CTAs */}
              <div className="lg:col-span-7 space-y-8 sm:space-y-10">
                <h1 className="font-display font-extrabold text-4xl sm:text-7xl lg:text-8xl tracking-[-0.04em] leading-[1.04] sm:leading-[0.98] text-[#0A0A0A] dark:text-[#FAFAFA]">
                  Software, <br className="sm:hidden" />
                  designed with <br className="hidden sm:inline" />
                  <span className="underline decoration-black/20 dark:decoration-white/25 underline-offset-8">intent.</span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
                  We design and engineer bespoke web platforms, software systems, and applied AI applications for ambitious founders and enterprises. Built with craftsmanship, zero template bloat, and direct founder accountability.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-md group cursor-pointer"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/work"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white text-xs font-mono font-semibold uppercase tracking-wider border border-black/10 dark:border-white/15 transition-all duration-200 shadow-2xs cursor-pointer"
                  >
                    <span>Explore Our Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openBookingModal('call')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-black dark:text-white" />
                    <span>Book 30m Call</span>
                  </button>
                </div>

                {/* Direct Studio Trust Factors */}
                <div className="pt-6 border-t border-black/10 dark:border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <div>
                    <span className="block text-black dark:text-white font-bold text-sm mb-0.5">Direct Access</span>
                    <span>Lead engineers Maher & Anurag</span>
                  </div>
                  <div>
                    <span className="block text-black dark:text-white font-bold text-sm mb-0.5">1–2 Wk Sprints</span>
                    <span>Continuous live staging</span>
                  </div>
                  <div>
                    <span className="block text-black dark:text-white font-bold text-sm mb-0.5">100% IP Transfer</span>
                    <span>Zero proprietary lock-in</span>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Interactive Systems Telemetry & Production Showcase */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#121212]/95 p-6 sm:p-7 shadow-xl backdrop-blur-sm relative overflow-hidden">
                  
                  {/* Console Header Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
                      <span className="text-[0.72rem] font-mono uppercase font-bold tracking-wider text-black dark:text-white">
                        SYS://LIVE-TELEMETRY
                      </span>
                    </div>
                    <span className="text-[0.68rem] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/15">
                      ACTIVE FEED · CERTIFIED
                    </span>
                  </div>

                  {/* Interactive Tab Switcher */}
                  <div className="flex items-center gap-1 my-4 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/10 text-[0.7rem] font-mono">
                    <button
                      type="button"
                      onClick={() => setHeroTab('kalki')}
                      className={`flex-1 py-1.5 px-2 rounded-lg font-semibold transition-all cursor-pointer ${
                        heroTab === 'kalki' 
                          ? 'bg-white dark:bg-zinc-800 text-black dark:text-white shadow-xs' 
                          : 'text-zinc-500 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      01. Tactical AI (Live)
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeroTab('ztees')}
                      className={`flex-1 py-1.5 px-2 rounded-lg font-semibold transition-all cursor-pointer ${
                        heroTab === 'ztees' 
                          ? 'bg-white dark:bg-zinc-800 text-black dark:text-white shadow-xs' 
                          : 'text-zinc-500 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      02. Platform Reel
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeroTab('telemetry')}
                      className={`flex-1 py-1.5 px-2 rounded-lg font-semibold transition-all cursor-pointer ${
                        heroTab === 'telemetry' 
                          ? 'bg-white dark:bg-zinc-800 text-black dark:text-white shadow-xs' 
                          : 'text-zinc-500 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      03. Vitals
                    </button>
                  </div>

                  {/* Tab 1: K.A.L.K.I. Tactical AI Runtime with LIVE VIDEO PLAYBACK */}
                  {heroTab === 'kalki' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="relative group/vid overflow-hidden rounded-xl border border-black/10 dark:border-white/15 bg-black aspect-[16/10]">
                        <video 
                          src="/videos/kalki-video.mp4" 
                          autoPlay 
                          loop 
                          muted={isHeroVideoMuted}
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[0.65rem] font-mono text-white border border-white/20 flex items-center gap-1.5 z-10 pointer-events-none">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>LIVE HUD v1.0.4 · PLAYING</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsHeroVideoMuted(!isHeroVideoMuted)}
                          className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-black/80 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all z-20 cursor-pointer"
                          aria-label={isHeroVideoMuted ? 'Unmute video audio' : 'Mute video audio'}
                          title={isHeroVideoMuted ? 'Unmute audio' : 'Mute audio'}
                        >
                          {isHeroVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-baseline justify-between">
                          <Link 
                            to={`/work/${kalkiProject.slug}`}
                            className="font-display font-bold text-lg sm:text-xl text-black dark:text-white hover:opacity-75 transition-opacity"
                          >
                            {kalkiProject.title}
                          </Link>
                          <span className="text-xs font-mono text-zinc-500">2025–2026</span>
                        </div>

                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                          {kalkiProject.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="text-[0.65rem] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/10">
                            Local LLaMA 3.3
                          </span>
                          <span className="text-[0.65rem] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/10">
                            Groq Multi-LLM
                          </span>
                          <span className="text-[0.65rem] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/10">
                            DPAPI Vault
                          </span>
                        </div>

                        <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                          <span className="text-black dark:text-white font-semibold text-[0.72rem]">
                            MS Store: 9P6HJPQZBGFQ
                          </span>
                          <Link 
                            to={`/work/${kalkiProject.slug}`} 
                            className="inline-flex items-center gap-1 text-black dark:text-white font-semibold hover:underline"
                          >
                            <span>Inspect Specs</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Live Platform Reel */}
                  {heroTab === 'ztees' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="relative group/vid overflow-hidden rounded-xl border border-black/10 dark:border-white/15 bg-black aspect-[16/10]">
                        <video 
                          src="/videos/project-reel.mp4" 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[0.65rem] font-mono text-white border border-white/20 flex items-center gap-1.5 z-10 pointer-events-none">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          <span>PRODUCTION REEL · TTFB &lt; 0.8s</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-baseline justify-between">
                          <Link 
                            to={`/work/${zteesProject.slug}`}
                            className="font-display font-bold text-lg sm:text-xl text-black dark:text-white hover:opacity-75 transition-opacity"
                          >
                            {zteesProject.title}
                          </Link>
                          <span className="text-xs font-mono text-zinc-500">Client Platform</span>
                        </div>

                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                          {zteesProject.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="text-[0.65rem] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/10">
                            React 19
                          </span>
                          <span className="text-[0.65rem] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/10">
                            WhatsApp Flow
                          </span>
                          <span className="text-[0.65rem] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/10">
                            Zero Hydration Lag
                          </span>
                        </div>

                        <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                          <span className="text-black dark:text-white font-semibold text-[0.72rem]">
                            Ergonomic Score 100/100
                          </span>
                          <Link 
                            to={`/work/${zteesProject.slug}`} 
                            className="inline-flex items-center gap-1 text-black dark:text-white font-semibold hover:underline"
                          >
                            <span>Inspect Specs</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Studio Core Vitals & Production Telemetry */}
                  {heroTab === 'telemetry' && (
                    <div className="space-y-4 py-2 animate-fade-in font-mono text-xs">
                      <div className="p-4 rounded-xl bg-zinc-950 text-zinc-300 border border-white/10 space-y-3">
                        <div className="flex items-center justify-between text-[0.68rem] text-zinc-400 border-b border-white/10 pb-2">
                          <span className="flex items-center gap-1.5 text-white">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            ENGINE_ACTIVE
                          </span>
                          <span>HOST: REGION_GLOBAL</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-1">
                          <div>
                            <span className="block text-[0.65rem] text-zinc-500 uppercase">Throughput</span>
                            <span className="text-sm font-bold text-white">{tokensPerSec} tok/s</span>
                          </div>
                          <div>
                            <span className="block text-[0.65rem] text-zinc-500 uppercase">Latency</span>
                            <span className="text-sm font-bold text-white">{latency} ms</span>
                          </div>
                          <div>
                            <span className="block text-[0.65rem] text-zinc-500 uppercase">Type Safety</span>
                            <span className="text-sm font-bold text-white">100% Strict</span>
                          </div>
                          <div>
                            <span className="block text-[0.65rem] text-zinc-500 uppercase">Hydration</span>
                            <span className="text-sm font-bold text-white">0.0 ms</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[0.65rem] text-zinc-400">
                          <span>SECURITY: DPAPI / ZERO TRUST</span>
                          <span className="text-white font-bold">VERIFIED</span>
                        </div>
                      </div>

                      <div className="pt-1 flex items-center justify-between text-xs font-mono">
                        <span className="text-black dark:text-white font-semibold text-[0.72rem]">
                          Continuous Telemetry
                        </span>
                        <Link 
                          to="/services" 
                          className="inline-flex items-center gap-1 text-black dark:text-white font-semibold hover:underline"
                        >
                          <span>Explore Services</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Console Footer Status */}
                  <div className="mt-5 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[0.65rem] font-mono text-zinc-500">
                    <span>STACK: REACT 19 · TS · TAILWIND · PYTHON</span>
                    <span className="font-semibold text-black dark:text-white">100% HANDCRAFTED</span>
                  </div>

                </div>
              </div>

            </div>

            {/* Studio Standards 4-Pillar Grid */}
            <div className="mt-14 sm:mt-20 pt-10 border-t border-black/10 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>01 / ARCHITECTURE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-black dark:text-white">Handcrafted</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Zero generic builders or bloated WordPress themes. Every line of code is purpose-built for speed and durability.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>02 / DISCIPLINE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-black dark:text-white">Type-Safe</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Strict TypeScript, defensive schema validation, and clean REST contracts ensure bulletproof production stability.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>03 / COLLABORATION</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-black dark:text-white">Direct Access</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Work directly with founding engineers Maher Bhatt & Anurag Pandey. Zero project managers or communication fog.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>04 / PRESENCE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-black dark:text-white">Global Reach</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Remote-first studio partnering with ambitious founders, startups, and companies across time zones.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 02. STUDIO INTRO & POSITIONING                                            */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 border-b border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 transition-colors">
          <div className="max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold block">
                  01 / The Studio Philosophy
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-black dark:text-white tracking-tight leading-tight">
                  Crafting software with direct accountability.
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-8">
                <p className="font-display text-xl sm:text-2xl text-black dark:text-white leading-snug font-normal">
                  The modern web is filled with bloated page builders, slow WordPress themes, and agency middlemen who charge large retainers while outsourcing the actual programming to junior contractors.
                </p>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  We founded Qavironel Technologies to offer an uncompromising alternative: a direct, founder-led studio that treats every web application, SaaS MVP, and AI workflow as a piece of digital craftsmanship. You collaborate directly with senior engineers who understand distributed systems, Core Web Vitals, and responsive interface design.
                </p>

                {/* 3 Value Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-black/10 dark:border-white/10">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100">01 / DIRECT ACCESS</span>
                    <h3 className="font-display font-bold text-base text-black dark:text-white">Zero Intermediaries</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Communicate directly with lead architects Maher Bhatt and Anurag Pandey on daily Slack channels and video reviews.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100">02 / BESPOKE RIGOR</span>
                    <h3 className="font-display font-bold text-base text-black dark:text-white">Handcrafted Architecture</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Clean modular React 19, Vite, TanStack, and Python. Every component is engineered for sub-second load times and reliability.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100">03 / DEFENSIVE BY DEFAULT</span>
                    <h3 className="font-display font-bold text-base text-black dark:text-white">Guarded Security</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Rooted in ethical hacking and cybersecurity workshops. Strict CSP, DPAPI vault encryption, and input sanitization by default.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 03. LIVE PRODUCTION SHOWREELS & ACTIVE PLAYBACK                           */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 border-b border-black/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A]">
          <div className="max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12 space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-black/10 dark:border-white/10">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold block">
                  02 / Live Media Showcase
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-black dark:text-white tracking-tight">
                  Active video playback.
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-mono text-zinc-500 max-w-md">
                Direct captures from tactical HUD runtimes, desktop clients, responsive web storefronts, and studio engineering craft.
              </p>
            </div>
            <VideoShowreel />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 04. ASYMMETRIC EDITORIAL PORTFOLIO (GENUINE PROJECTS)                     */}
        {/* ========================================================================= */}
        <section className="py-24 sm:py-32 border-b border-black/10 dark:border-white/10">
          <div className="max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
            
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-14 border-b border-black/10 dark:border-white/10">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold block">
                  03 / Selected Works
                </span>
                <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-black dark:text-white tracking-tight">
                  Proven builds. Real systems.
                </h2>
              </div>
              <Link 
                to="/work" 
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white hover:underline"
              >
                <span>View Full Portfolio ({projects.length} Projects)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Harmonized 4-Flagship Cinema Grid (Ztees, CIP, CyberGuard, Civic Sathi) */}
            {/* KALKI is spotlighted exclusively in the Hero Console & Video Showreel to avoid duplicate card sprawl */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16">
              
              {/* Card #01: Ztees Streetwear Commerce */}
              <div className="glass-card-luxury p-6 sm:p-8 rounded-3xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
                <div>
                  <Link 
                    to={`/work/${zteesProject.slug}`}
                    className="block group/img overflow-hidden rounded-2xl border border-black/10 dark:border-white/15 bg-black mb-5"
                  >
                    <ScrollAutoplayVideo 
                      src={zteesProject.videoSrc || '/videos/project-reel.mp4'}
                      poster="/images/projects/ztees-cover.jpg"
                      alt="Ztees streetwear commerce drop presentation video"
                      badgeText="LIVE STOREFRONT"
                      aspectRatio="aspect-[16/9]"
                    />
                  </Link>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.68rem] font-mono px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold border border-black/10 dark:border-white/15">
                        #01 · CLIENT STOREFRONT
                      </span>
                      <span className="text-[0.68rem] font-mono text-zinc-500">2026 · Commerce</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-black dark:text-white tracking-tight">
                      <Link to={`/work/${zteesProject.slug}`} className="hover:opacity-75 transition-opacity">
                        {zteesProject.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light line-clamp-2">
                      {zteesProject.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {zteesProject.technologies.slice(0, 4).map(t => (
                        <span key={t} className="text-[0.62rem] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <Link 
                    to={`/work/${zteesProject.slug}`} 
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white hover:underline"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[0.68rem] font-mono text-zinc-500">2.4x Drop Throughput</span>
                </div>
              </div>

              {/* Card #02: Classic Infrastructure Projects */}
              <div className="glass-card-luxury p-6 sm:p-8 rounded-3xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
                <div>
                  <Link 
                    to={`/work/${cipProject.slug}`}
                    className="block group/img overflow-hidden rounded-2xl border border-black/10 dark:border-white/15 bg-black mb-5"
                  >
                    <ScrollAutoplayVideo 
                      src={cipProject.videoSrc || '/videos/hero-showreel.mp4'}
                      poster="/images/projects/cip/cip-new-1-hero.webp"
                      alt="Classic Infrastructure Projects Corporate Platform video"
                      badgeText="HEAVY CIVIL EPC"
                      aspectRatio="aspect-[16/9]"
                    />
                  </Link>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.68rem] font-mono px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold border border-black/10 dark:border-white/15">
                        #02 · ENTERPRISE PLATFORM
                      </span>
                      <span className="text-[0.68rem] font-mono text-zinc-500">Est. 2008 · Full-Stack</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-black dark:text-white tracking-tight">
                      <Link to={`/work/${cipProject.slug}`} className="hover:opacity-75 transition-opacity">
                        {cipProject.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light line-clamp-2">
                      {cipProject.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cipProject.technologies.slice(0, 4).map(t => (
                        <span key={t} className="text-[0.62rem] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <Link 
                    to={`/work/${cipProject.slug}`} 
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white hover:underline"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[0.68rem] font-mono text-zinc-500">100% Zero-Defect Delivery</span>
                </div>
              </div>

              {/* Card #03: CyberGuard Security Lab */}
              <div className="glass-card-luxury p-6 sm:p-8 rounded-3xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
                <div>
                  <Link 
                    to={`/work/${cyberProject.slug}`}
                    className="block group/img overflow-hidden rounded-2xl border border-black/10 dark:border-white/15 bg-black mb-5"
                  >
                    <ScrollAutoplayVideo 
                      src={cyberProject.videoSrc || '/videos/hero-showreel.mp4'}
                      poster="/images/projects/kalki-security.png"
                      alt="CyberGuard Security Lab Interface video"
                      badgeText="DEFENSIVE LABS"
                      aspectRatio="aspect-[16/9]"
                    />
                  </Link>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.68rem] font-mono px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold border border-black/10 dark:border-white/15">
                        #03 · DEFENSIVE SECURITY
                      </span>
                      <span className="text-[0.68rem] font-mono text-zinc-500">2025–2026 · Workshops</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-black dark:text-white tracking-tight">
                      <Link to={`/work/${cyberProject.slug}`} className="hover:opacity-75 transition-opacity">
                        {cyberProject.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light line-clamp-2">
                      {cyberProject.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cyberProject.technologies.slice(0, 4).map(t => (
                        <span key={t} className="text-[0.62rem] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <Link 
                    to={`/work/${cyberProject.slug}`} 
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white hover:underline"
                  >
                    <span>Inspect Security Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[0.68rem] font-mono text-zinc-500">Strict CSP Isolation</span>
                </div>
              </div>

              {/* Card #04: Civic Sathi Monorepo Platform */}
              <div className="glass-card-luxury p-6 sm:p-8 rounded-3xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
                <div>
                  <Link 
                    to={`/work/${civicProject.slug}`}
                    className="block group/img overflow-hidden rounded-2xl border border-black/10 dark:border-white/15 bg-black mb-5"
                  >
                    <ScrollAutoplayVideo 
                      src={civicProject.videoSrc || '/videos/tech-atmosphere.mp4'}
                      poster="/images/projects/civic-public-home.png"
                      alt="Civic Sathi Public Citizen Interface video"
                      badgeText="4-ROLE MONOREPO"
                      aspectRatio="aspect-[16/9]"
                    />
                  </Link>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.68rem] font-mono px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold border border-black/10 dark:border-white/15">
                        #04 · MONOREPO GOVTECH
                      </span>
                      <span className="text-[0.68rem] font-mono text-zinc-500">SIH 2026 · Product Lab</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-black dark:text-white tracking-tight">
                      <Link to={`/work/${civicProject.slug}`} className="hover:opacity-75 transition-opacity">
                        {civicProject.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light line-clamp-2">
                      {civicProject.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {civicProject.technologies.slice(0, 4).map(t => (
                        <span key={t} className="text-[0.62rem] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Link 
                      to={`/work/${civicProject.slug}`} 
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white hover:underline"
                    >
                      <span>Inspect Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href="https://janmind-public.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-zinc-500 hover:text-black dark:hover:text-white flex items-center gap-1"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <span className="text-[0.68rem] font-mono text-zinc-500">HDBSCAN ML Engine</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 05. EDITORIAL CAPABILITIES & DISCIPLINES + 3D SPATIAL ARCHITECTURE         */}
        {/* ========================================================================= */}
        <section className="py-24 sm:py-32 border-b border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 transition-colors">
          <div className="max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-16 border-b border-black/10 dark:border-white/10">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold block">
                  04 / Core Capabilities
                </span>
                <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-black dark:text-white tracking-tight">
                  What we engineer.
                </h2>
                <p className="text-sm font-mono text-zinc-600 dark:text-zinc-400 max-w-xl pt-2">
                  No outsourcing. Every line authored and vetted by technical leadership Maher Bhatt & Anurag Pandey.
                </p>
              </div>

              {/* 3D Spatial Architecture Showcase */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-sm relative overflow-hidden group">
                <div className="absolute top-3 left-3 text-[0.65rem] font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white animate-pulse" />
                  <span>SPATIAL / 3D ARCHITECTURE</span>
                </div>
                <div className="my-2">
                  <Spatial3DPrism size={240} />
                </div>
                <span className="text-[0.65rem] font-mono text-zinc-500">Frosted Optical Glass · Titanium Specular</span>
              </div>
            </div>

            {/* Disciplines Editorial List */}
            <div className="divide-y divide-black/10 dark:divide-white/10">
              {disciplines.map((d) => (
                <div key={d.num} className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-1">
                    <span className="font-mono text-sm font-bold text-black dark:text-white">
                      {d.num}
                    </span>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white">
                      {d.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {d.summary}
                    </p>
                    <div className="pt-2">
                      <Link 
                        to={`/work/${d.caseStudySlug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-black dark:text-white hover:underline"
                      >
                        <span>Related Case: {d.caseStudyName}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">Deliverables</p>
                    <ul className="space-y-2 text-xs sm:text-sm text-black dark:text-white">
                      {d.deliverables.map(deliv => (
                        <li key={deliv} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-2 space-y-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {d.stack.map(st => (
                        <span key={st} className="text-[0.7rem] font-mono px-2 py-0.5 rounded bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 06. THE WAY WE BUILD: 4-STAGE SPRINT CADENCE                              */}
        {/* ========================================================================= */}
        <section className="py-24 sm:py-32 border-b border-black/10 dark:border-white/10">
          <div className="max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
            
            <div className="max-w-2xl space-y-4 mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold block">
                05 / Engineering Process
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-black dark:text-white tracking-tight">
                From napkin concept to production release.
              </h2>
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We eliminate multi-month agency stalls. Working in tight 1-to-2-week milestone sprints, we deliver staging environments you can click and test in real time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 space-y-4 shadow-xs">
                <span className="text-xs font-mono text-black dark:text-white font-bold">01 / DISCOVERY</span>
                <h3 className="font-display font-bold text-xl text-black dark:text-white">Understand & Scope</h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Direct call with Maher and Anurag. We clarify business objectives, user flows, reference benchmarks, and fixed deliverables.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 space-y-4 shadow-xs">
                <span className="text-xs font-mono text-black dark:text-white font-bold">02 / ARCHITECTURE</span>
                <h3 className="font-display font-bold text-xl text-black dark:text-white">Design & Schemas</h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Database models, REST contracts, and Figma interface tokens mapped out before coding to eliminate expensive scope churn.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 space-y-4 shadow-xs">
                <span className="text-xs font-mono text-black dark:text-white font-bold">03 / CODE SPRINT</span>
                <h3 className="font-display font-bold text-xl text-black dark:text-white">Precision Builds</h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Type-safe React, TanStack, and Python. Async daily Loom reviews and live staging links on every Git commit.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 space-y-4 shadow-xs">
                <span className="text-xs font-mono text-black dark:text-white font-bold">04 / LAUNCH</span>
                <h3 className="font-display font-bold text-xl text-black dark:text-white">Hardening & Handover</h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Core Web Vitals tuning, defensive security audit, DNS setup, and 30-day post-launch warranty with full IP handover.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 07. HIGH-IMPACT CLOSING CALL TO ACTION                                    */}
        {/* ========================================================================= */}
        <section className="py-28 sm:py-36 bg-zinc-950 text-white transition-colors relative overflow-hidden border-t border-white/10">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-8 relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-zinc-400 block">
              Start Your Next Build
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.06]">
              Have an ambitious idea? <br className="hidden sm:inline" />
              <span className="underline decoration-white/30 underline-offset-8">Let's engineer it.</span>
            </h2>
            <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              We partner with founders and businesses globally to build custom web systems, SaaS MVPs, and applied AI applications. Direct collaboration. Relentless speed.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-mono font-bold uppercase tracking-wider shadow-lg group transition-all cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={() => openBookingModal('call')}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Discovery (30m)</span>
              </button>

              <a
                href={companyConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/15 text-xs font-mono font-bold uppercase tracking-wider transition-colors"
              >
                <span>Direct WhatsApp Line</span>
              </a>
            </div>

            <p className="text-xs font-mono text-zinc-500 pt-4">
              Inquiries: <a href={`mailto:${companyConfig.email}`} className="text-white hover:underline font-semibold">{companyConfig.email}</a> · Direct responses in &lt; 12 hours
            </p>
          </div>
        </section>

      </div>
    </>
  );
};

export default HomePage;
