import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { companyConfig } from '../data/company';
import { VideoShowreel } from '../components/media/VideoShowreel';
import { AmbientHeroCanvas } from '../components/media/AmbientHeroCanvas';
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

export const HomePage: React.FC = () => {
  // Take 6 curated projects for sleek agency showcase
  const curatedProjects = projects.filter((p) => p.featured).slice(0, 6);

  // Interactive Capability Matrix Tab State (Clay.global signature feature)
  const [activeCapability, setActiveCapability] = useState<number>(0);

  const capabilities = [
    {
      id: 'digital-products',
      num: '01',
      title: 'Digital Products & Platforms',
      tagline: 'Production SaaS MVPs, client portals & custom web applications',
      description: 'We architect and build bespoke digital software that solves real business problems. From complex data visualizations to transactional user flows, every view is designed for sub-second performance and frictionless UX.',
      deliverables: ['Custom React 19 / TypeScript Web Apps', 'Interactive Analytics & Dashboards', 'Scalable Node.js & Python APIs', 'High-Fidelity Component Systems'],
      tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'FastAPI'],
      previewType: 'dashboard',
    },
    {
      id: 'applied-ai',
      num: '02',
      title: 'Applied AI & Intelligent Systems',
      tagline: 'Practical LLMs, local-first inference & agentic automations',
      description: 'We implement practical generative AI and machine learning that deliver measurable value. No marketing hype—we deploy structured reasoning pipelines, document intelligence, and privacy-first local models.',
      deliverables: ['Contextual RAG & Vector Retrieval', 'Local LLM Inference (Ollama / LLaMA 3.3)', 'Document OCR & Vision Extraction', 'Autonomous Agent Workflows'],
      tech: ['Groq LLaMA 3.3', 'Ollama', 'Python', 'LangChain', 'ChromaDB'],
      previewType: 'ai-agent',
    },
    {
      id: 'web-systems',
      num: '03',
      title: 'Bespoke Web Systems & E-Commerce',
      tagline: 'Custom storefronts, high-converting platforms & brand experiences',
      description: 'We replace slow, cookie-cutter WordPress themes with blazing-fast custom web platforms. Built with editorial typography, fluid micro-animations, and zero bloatware page builders.',
      deliverables: ['100/100 Core Web Vitals Audits', 'Custom E-Commerce Architectures', 'Dynamic Product Customizers', 'Defensive Cybersecurity & CSP'],
      tech: ['Vite', 'React', 'REST APIs', 'Stripe / Razorpay', 'Cloudflare'],
      previewType: 'vitals',
    },
    {
      id: 'developer-tooling',
      num: '04',
      title: 'Mobile Tooling & Developer Runtimes',
      tagline: 'Native Android environments, compilers & tactical HUD systems',
      description: 'Engineering systems with deep hardware and OS integration. From native mobile development IDEs to tactical computer vision interfaces, we build software that thrives under demanding constraints.',
      deliverables: ['Native Android Dev Environments', 'Offline Compiler Toolchains', 'Computer Vision & HUD Interfaces', 'Encrypted Local Storage Layers'],
      tech: ['Android SDK', 'Java / Kotlin', 'OpenCV', 'NDK', 'SQLite'],
      previewType: 'terminal',
    },
  ];

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

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
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

          {/* Main Hero Headline - Clay.global Big Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl"
          >
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#0A0A0A] leading-[1.03] mb-8">
              We architect digital products, <span className="text-[#E0561B]">applied AI</span> & high-velocity web systems.
            </h1>
          </motion.div>

          {/* Subheadline & Studio Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-[#52525B] font-light leading-relaxed">
              Qavironel Technologies transforms ambitious ideas into thoughtfully architected, high-velocity digital products. We partner directly with visionary founders, startups, and companies worldwide—combining digital craftsmanship, modern full-stack engineering, and practical AI.
            </p>
          </motion.div>

          {/* Action CTAs with Direct Book Call Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4"
          >
            <Button to="/contact" variant="primary" size="lg" showArrow>
              Start a Project
            </Button>
            <button
              type="button"
              onClick={() => openBookingModal('call')}
              className="px-6 py-4 rounded-full bg-[#0A0A0A] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs group"
            >
              <Calendar className="w-4 h-4 text-[#E0561B] group-hover:scale-110 transition-transform" />
              <span>Book Discovery Call (30m)</span>
            </button>
            <button
              type="button"
              onClick={() => openBookingModal('quotation')}
              className="px-6 py-4 rounded-full bg-[#F4F4F5] hover:bg-[#E5E7EB] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border border-[#E5E7EB] group"
            >
              <FileText className="w-4 h-4 text-[#E0561B] group-hover:scale-110 transition-transform" />
              <span>Request Quotation</span>
            </button>
            <Button to="/services" variant="secondary" size="lg">
              Explore Capabilities
            </Button>
            <Link 
              to="/work" 
              className="px-4 py-3 text-xs font-mono text-[#52525B] hover:text-[#E0561B] transition-colors flex items-center gap-1.5 font-semibold"
            >
              <span>View Selected Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

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

      {/* 03. CLAY.GLOBAL SIGNATURE: INTERACTIVE CAPABILITIES MATRIX SHOWCASE */}
      <section className="py-24 sm:py-32 border-b border-[#E5E7EB] bg-white relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E7EB]">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B] block mb-2">
                Interactive Capabilities Matrix
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight">
                Crafted disciplines, interactive depth.
              </h2>
            </div>
            <p className="text-sm text-[#52525B] max-w-md">
              Explore how we translate high-level product strategy into production-grade systems and applied artificial intelligence.
            </p>
          </div>

          {/* Interactive Matrix Tabs & Preview Panel */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Interactive Capability List (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {capabilities.map((cap, idx) => {
                const isActive = activeCapability === idx;
                return (
                  <motion.div
                    key={cap.id}
                    onClick={() => setActiveCapability(idx)}
                    whileHover={{ x: isActive ? 0 : 4 }}
                    className={`cursor-pointer p-6 sm:p-7 rounded-xl border transition-all duration-300 relative ${
                      isActive 
                        ? 'bg-white border-[#E0561B] shadow-[0_8px_30px_rgba(224,86,27,0.12)] ring-1 ring-[#E0561B]/20' 
                        : 'bg-[#F8F9FA] border-[#E5E7EB] hover:border-[#E0561B]/40 hover:bg-white'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E0561B] rounded-l-xl" />
                    )}
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className={`font-bold ${isActive ? 'text-[#E0561B]' : 'text-[#71717A]'}`}>
                        {cap.num}
                      </span>
                      <span className="text-[0.68rem] text-[#71717A] uppercase tracking-wider">
                        {isActive ? 'Active View' : 'Click to inspect'}
                      </span>
                    </div>

                    <h3 className={`font-sans font-bold text-xl transition-colors ${
                      isActive ? 'text-[#0A0A0A]' : 'text-[#3F3F46]'
                    }`}>
                      {cap.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#52525B] leading-relaxed line-clamp-2">
                      {cap.tagline}
                    </p>

                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-[#E5E7EB]"
                      >
                        <div className="flex flex-wrap gap-1.5">
                          {cap.tech.map((t) => (
                            <span key={t} className="text-[0.65rem] font-mono px-2 py-0.5 bg-[#F4F4F5] text-[#52525B] border border-[#E5E7EB]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Live Interactive Visual Preview Panel (7 Cols) */}
            <div className="lg:col-span-7 bg-[#F8F9FA] rounded-2xl border border-[#E5E7EB] p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={capabilities[activeCapability].id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E0561B]" />
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A]">
                        {capabilities[activeCapability].title}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#71717A]">DISCIPLINE #{capabilities[activeCapability].num}</span>
                  </div>

                  <div>
                    <h4 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight">
                      {capabilities[activeCapability].tagline}
                    </h4>
                    <p className="mt-3 text-sm text-[#52525B] leading-relaxed">
                      {capabilities[activeCapability].description}
                    </p>
                  </div>

                  {/* Dynamic Graphic Simulation based on Tab */}
                  {capabilities[activeCapability].previewType === 'dashboard' && (
                    <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 space-y-4 shadow-xs">
                      <div className="flex items-center justify-between text-xs font-mono text-[#71717A] pb-2 border-b border-[#E5E7EB]">
                        <span className="flex items-center gap-1.5 text-[#0A0A0A] font-semibold">
                          <Activity className="w-3.5 h-3.5 text-[#E0561B]" />
                          System Health & Performance
                        </span>
                        <span className="text-emerald-600 font-bold">99.98% UPTIME</span>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#E5E7EB]">
                          <p className="text-[0.68rem] text-[#71717A] font-mono">P95 LATENCY</p>
                          <p className="text-lg font-bold text-[#0A0A0A] mt-1">42ms</p>
                        </div>
                        <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#E5E7EB]">
                          <p className="text-[0.68rem] text-[#71717A] font-mono">THROUGHPUT</p>
                          <p className="text-lg font-bold text-[#0A0A0A] mt-1">12.4k req/s</p>
                        </div>
                        <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#E5E7EB]">
                          <p className="text-[0.68rem] text-[#71717A] font-mono">ERROR RATE</p>
                          <p className="text-lg font-bold text-emerald-600 mt-1">0.001%</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {capabilities[activeCapability].previewType === 'ai-agent' && (
                    <div className="bg-[#0A0A0A] text-white rounded-xl p-5 border border-[#27272A] font-mono text-xs space-y-3 shadow-md">
                      <div className="flex items-center justify-between text-[0.68rem] text-[#A1A1AA] pb-2 border-b border-[#27272A]">
                        <span className="flex items-center gap-1.5 text-white">
                          <Bot className="w-3.5 h-3.5 text-[#E0561B]" />
                          Groq LLaMA 3.3 70B · Token Pipeline
                        </span>
                        <span className="text-emerald-400 font-bold">148 TOKENS/SEC</span>
                      </div>
                      <div className="space-y-1 text-[#A1A1AA]">
                        <p className="text-[#E0561B]">&gt; Input Guardrail: Context Verification PASSED</p>
                        <p>&gt; Retrieval: Vector similarity cosine = 0.942</p>
                        <p className="text-white">&gt; Synthesis: "Generating structured JSON schema response without hallucinations..."</p>
                        <p className="text-emerald-400">&gt; Status: Output sanitized and delivered in 118ms</p>
                      </div>
                    </div>
                  )}

                  {capabilities[activeCapability].previewType === 'vitals' && (
                    <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 space-y-4 shadow-xs">
                      <div className="flex items-center justify-between text-xs font-mono text-[#71717A] pb-2 border-b border-[#E5E7EB]">
                        <span className="flex items-center gap-1.5 text-[#0A0A0A] font-semibold">
                          <Gauge className="w-3.5 h-3.5 text-[#E0561B]" />
                          Google Lighthouse Audit
                        </span>
                        <span className="text-emerald-600 font-bold">PERFECT 100</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-center">
                        <div className="p-2.5 bg-[#F8F9FA] rounded-lg border border-[#E5E7EB]">
                          <p className="text-lg font-bold text-emerald-600">100</p>
                          <p className="text-[0.65rem] text-[#71717A] font-mono mt-0.5">Performance</p>
                        </div>
                        <div className="p-2.5 bg-[#F8F9FA] rounded-lg border border-[#E5E7EB]">
                          <p className="text-lg font-bold text-emerald-600">100</p>
                          <p className="text-[0.65rem] text-[#71717A] font-mono mt-0.5">Accessibility</p>
                        </div>
                        <div className="p-2.5 bg-[#F8F9FA] rounded-lg border border-[#E5E7EB]">
                          <p className="text-lg font-bold text-emerald-600">100</p>
                          <p className="text-[0.65rem] text-[#71717A] font-mono mt-0.5">Best Practices</p>
                        </div>
                        <div className="p-2.5 bg-[#F8F9FA] rounded-lg border border-[#E5E7EB]">
                          <p className="text-lg font-bold text-emerald-600">100</p>
                          <p className="text-[0.65rem] text-[#71717A] font-mono mt-0.5">SEO</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {capabilities[activeCapability].previewType === 'terminal' && (
                    <div className="bg-[#0A0A0A] text-white rounded-xl p-5 border border-[#27272A] font-mono text-xs space-y-3 shadow-md">
                      <div className="flex items-center justify-between text-[0.68rem] text-[#A1A1AA] pb-2 border-b border-[#27272A]">
                        <span className="flex items-center gap-1.5 text-white">
                          <Terminal className="w-3.5 h-3.5 text-[#E0561B]" />
                          Android Toolchain Runtime
                        </span>
                        <span className="text-emerald-400 font-bold">BUILD READY</span>
                      </div>
                      <div className="space-y-1 text-[#A1A1AA]">
                        <p className="text-[#E0561B]">&gt; aapt2 compile --dir res/ -o compiled_res.zip</p>
                        <p>&gt; d8 --output classes.dex --lib android.jar *.class</p>
                        <p className="text-white">&gt; zipalign -v -p 4 app-unaligned.apk app-release.apk</p>
                        <p className="text-emerald-400">&gt; Standalone APK generated on-device with zero server dependency</p>
                      </div>
                    </div>
                  )}

                  {/* Deliverables Bullets */}
                  <div className="space-y-2.5">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A]">
                      Core Capabilities Delivered:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#52525B]">
                      {capabilities[activeCapability].deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E0561B] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
                <Link 
                  to="/services" 
                  className="text-xs font-mono text-[#E0561B] hover:underline inline-flex items-center gap-1.5 font-semibold"
                >
                  <span>Explore full service specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Button to="/contact" variant="primary" size="sm" showArrow>
                  Request Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. STUDIO MANIFESTO & PHILOSOPHY (ESTABLISHING THE BRAND) */}
      <section className="py-24 sm:py-32 border-b border-[#E5E7EB] bg-[#F8F9FA] relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B] block">
                The Qavironel Standard
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight leading-tight">
                Built for founders who refuse ordinary templates.
              </h2>
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
      <section className="py-24 sm:py-32 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E7EB]">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B] block mb-2">
                Selected Work
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight">
                Featured software & digital platforms.
              </h2>
              <p className="mt-2 text-sm text-[#52525B] max-w-xl">
                Restrained, honest case studies of production client work, applied AI tools, and product lab prototypes.
              </p>
            </div>
            <Button to="/work" variant="secondary" size="md" showArrow>
              {`View All ${projects.length} Projects`}
            </Button>
          </div>

          {/* Sleek 3-Column Agency Grid with 3D Tilt & Glass Badges */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curatedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} layout="standard" />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button to="/work" variant="primary" size="lg" showArrow>
              Explore Complete Portfolio & Engineering Labs
            </Button>
          </div>
        </div>
      </section>

      {/* 06. STUDIO ENGINEERING BENCHMARKS & COMPARISON MATRIX */}
      <StudioStandardsMatrix onOpenBooking={openBookingModal} />

      {/* 07. HOW WE BUILD — THE 4-STAGE GLOBAL DELIVERY MODEL */}
      <section className="py-24 sm:py-32 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
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
            <Button to="/contact" variant="primary" size="lg" showArrow>
              Start a Project
            </Button>
            <a
              href={companyConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white hover:bg-[#F4F4F5] text-[#0A0A0A] border border-[#E5E7EB] text-xs font-semibold uppercase tracking-widest transition-colors shadow-xs rounded-none"
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
  );
};
