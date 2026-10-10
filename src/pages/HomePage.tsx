import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronRight,
  Activity,
  Gauge,
  Bot,
  LayoutGrid
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

export const HomePage: React.FC = () => {
  // Take 6 curated projects for sleek agency showcase
  const curatedProjects = projects.filter((p) => p.featured).slice(0, 6);
  const founder = teamMembers[0];

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
    <div className="bg-[#FBF9F5] text-[#171717] overflow-hidden selection:bg-[#C7612E] selection:text-white">
      {/* 01. BRAND-FIRST EDITORIAL HERO SECTION */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 border-b border-[#E5E2DC]">
        {/* Subtle Ambient Radial Glow */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C7612E]/5 rounded-full blur-[140px] pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#98431F]/3 rounded-full blur-[120px] pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          {/* Top Status Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E2DC] text-xs font-mono text-[#6E6B65] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-[#171717]">GLOBAL REMOTE STUDIO</span>
              <span className="text-[#C7612E]">·</span>
              <span className="text-[#C7612E] font-medium">AVAILABLE FOR NEW BUILDS</span>
            </div>
          </motion.div>

          {/* Main Hero Headline - Clay.global Big Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl"
          >
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#171717] leading-[1.04] mb-8">
              We engineer digital products, <span className="text-[#C7612E]">applied AI</span> & web systems for the world.
            </h1>
          </motion.div>

          {/* Subheadline & Studio Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-[#6E6B65] font-light leading-relaxed">
              Qavironel Technologies transforms ambitious ideas into thoughtfully architected, high-velocity digital products. We partner directly with visionary founders, startups, and companies worldwide—combining digital craftsmanship, modern full-stack engineering, and practical AI.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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
              className="px-4 py-3 text-xs font-mono text-[#6E6B65] hover:text-[#C7612E] transition-colors flex items-center gap-1.5"
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
            className="mt-16 sm:mt-24 pt-8 border-t border-[#E5E2DC] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold font-sans text-[#171717]">&lt; 0.8s</p>
              <p className="text-xs font-mono uppercase tracking-wider text-[#C7612E] font-semibold">Sub-Second Load</p>
              <p className="text-[0.75rem] text-[#8E8B84]">Zero bloatware page builders</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold font-sans text-[#171717]">100%</p>
              <p className="text-xs font-mono uppercase tracking-wider text-[#C7612E] font-semibold">Handcrafted Code</p>
              <p className="text-[0.75rem] text-[#8E8B84]">Type-safe, clean architecture</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold font-sans text-[#171717]">Direct</p>
              <p className="text-xs font-mono uppercase tracking-wider text-[#C7612E] font-semibold">Founder Led</p>
              <p className="text-[0.75rem] text-[#8E8B84]">Maher Bhatt · No agency telephone</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold font-sans text-[#171717]">Global</p>
              <p className="text-xs font-mono uppercase tracking-wider text-[#C7612E] font-semibold">Remote Reach</p>
              <p className="text-[0.75rem] text-[#8E8B84]">Serving clients worldwide</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02. ANIMATED MARQUEE TICKER (LIGHT THEME) */}
      <div className="py-4 bg-[#F5F2EB] border-b border-[#E5E2DC] overflow-hidden whitespace-nowrap">
        <motion.div 
          className="flex gap-8 items-center"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 text-xs font-mono tracking-[0.2em] text-[#8E8B84]">
              <span className="text-[#171717] hover:text-[#C7612E] transition-colors">{item}</span>
              <span className="text-[#C7612E]">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 03. CLAY.GLOBAL SIGNATURE: INTERACTIVE CAPABILITIES MATRIX SHOWCASE */}
      <section className="py-24 sm:py-32 border-b border-[#E5E2DC] bg-[#FBF9F5] relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E2DC]">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-2">
                Interactive Capabilities Matrix
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#171717] tracking-tight">
                Crafted disciplines, interactive depth.
              </h2>
            </div>
            <p className="text-sm text-[#6E6B65] max-w-md">
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
                    className={`cursor-pointer p-6 sm:p-7 border transition-all duration-300 relative ${
                      isActive 
                        ? 'bg-white border-[#C7612E] shadow-[0_8px_30px_rgba(199,97,46,0.12)]' 
                        : 'bg-white/60 border-[#E5E2DC] hover:border-[#C7612E]/40 hover:bg-white'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#C7612E]" />
                    )}
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className={`font-bold ${isActive ? 'text-[#C7612E]' : 'text-[#8E8B84]'}`}>
                        {cap.num}
                      </span>
                      <span className="text-[0.68rem] text-[#8E8B84] uppercase tracking-wider">
                        {isActive ? 'Active View' : 'Click to inspect'}
                      </span>
                    </div>

                    <h3 className={`font-sans font-bold text-xl transition-colors ${
                      isActive ? 'text-[#171717]' : 'text-[#44413C]'
                    }`}>
                      {cap.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#6E6B65] leading-relaxed line-clamp-2">
                      {cap.tagline}
                    </p>

                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-[#E5E2DC]"
                      >
                        <div className="flex flex-wrap gap-1.5">
                          {cap.tech.map((t) => (
                            <span key={t} className="text-[0.65rem] font-mono px-2 py-0.5 bg-[#F5F2EB] text-[#6E6B65] border border-[#E5E2DC]">
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
            <div className="lg:col-span-7 bg-white border border-[#E5E2DC] p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={capabilities[activeCapability].id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-[#E5E2DC]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C7612E]" />
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#171717]">
                        {capabilities[activeCapability].title}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#8E8B84]">DISCIPLINE #{capabilities[activeCapability].num}</span>
                  </div>

                  <div>
                    <h4 className="font-sans font-bold text-2xl sm:text-3xl text-[#171717] tracking-tight">
                      {capabilities[activeCapability].tagline}
                    </h4>
                    <p className="mt-3 text-sm text-[#6E6B65] leading-relaxed">
                      {capabilities[activeCapability].description}
                    </p>
                  </div>

                  {/* Dynamic Graphic Simulation based on Tab */}
                  {capabilities[activeCapability].previewType === 'dashboard' && (
                    <div className="bg-[#FBF9F5] border border-[#E5E2DC] p-5 space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-[#8E8B84] pb-2 border-b border-[#E5E2DC]">
                        <span className="flex items-center gap-1.5 text-[#171717] font-semibold">
                          <Activity className="w-3.5 h-3.5 text-[#C7612E]" />
                          System Health & Performance
                        </span>
                        <span className="text-emerald-600 font-bold">99.98% UPTIME</span>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 bg-white border border-[#E5E2DC]">
                          <p className="text-[0.68rem] text-[#8E8B84] font-mono">P95 LATENCY</p>
                          <p className="text-lg font-bold text-[#171717] mt-1">42ms</p>
                        </div>
                        <div className="p-3 bg-white border border-[#E5E2DC]">
                          <p className="text-[0.68rem] text-[#8E8B84] font-mono">THROUGHPUT</p>
                          <p className="text-lg font-bold text-[#171717] mt-1">12.4k req/s</p>
                        </div>
                        <div className="p-3 bg-white border border-[#E5E2DC]">
                          <p className="text-[0.68rem] text-[#8E8B84] font-mono">ERROR RATE</p>
                          <p className="text-lg font-bold text-emerald-600 mt-1">0.001%</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {capabilities[activeCapability].previewType === 'ai-agent' && (
                    <div className="bg-[#171717] text-white p-5 border border-[#2E2E2B] font-mono text-xs space-y-3">
                      <div className="flex items-center justify-between text-[0.68rem] text-[#8E8B84] pb-2 border-b border-[#2E2E2B]">
                        <span className="flex items-center gap-1.5 text-white">
                          <Bot className="w-3.5 h-3.5 text-[#C7612E]" />
                          Groq LLaMA 3.3 70B · Token Pipeline
                        </span>
                        <span className="text-emerald-400 font-bold">148 TOKENS/SEC</span>
                      </div>
                      <div className="space-y-1 text-[#A3A099]">
                        <p className="text-[#C7612E]">&gt; Input Guardrail: Context Verification PASSED</p>
                        <p>&gt; Retrieval: Vector similarity cosine = 0.942</p>
                        <p className="text-white">&gt; Synthesis: "Generating structured JSON schema response without hallucinations..."</p>
                        <p className="text-emerald-400">&gt; Status: Output sanitized and delivered in 118ms</p>
                      </div>
                    </div>
                  )}

                  {capabilities[activeCapability].previewType === 'vitals' && (
                    <div className="bg-[#FBF9F5] border border-[#E5E2DC] p-5 space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-[#8E8B84] pb-2 border-b border-[#E5E2DC]">
                        <span className="flex items-center gap-1.5 text-[#171717] font-semibold">
                          <Gauge className="w-3.5 h-3.5 text-[#C7612E]" />
                          Google Lighthouse Audit
                        </span>
                        <span className="text-emerald-600 font-bold">PERFECT 100</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-center">
                        <div className="p-2.5 bg-white border border-[#E5E2DC]">
                          <p className="text-lg font-bold text-emerald-600">100</p>
                          <p className="text-[0.65rem] text-[#8E8B84] font-mono mt-0.5">Performance</p>
                        </div>
                        <div className="p-2.5 bg-white border border-[#E5E2DC]">
                          <p className="text-lg font-bold text-emerald-600">100</p>
                          <p className="text-[0.65rem] text-[#8E8B84] font-mono mt-0.5">Accessibility</p>
                        </div>
                        <div className="p-2.5 bg-white border border-[#E5E2DC]">
                          <p className="text-lg font-bold text-emerald-600">100</p>
                          <p className="text-[0.65rem] text-[#8E8B84] font-mono mt-0.5">Best Practices</p>
                        </div>
                        <div className="p-2.5 bg-white border border-[#E5E2DC]">
                          <p className="text-lg font-bold text-emerald-600">100</p>
                          <p className="text-[0.65rem] text-[#8E8B84] font-mono mt-0.5">SEO</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {capabilities[activeCapability].previewType === 'terminal' && (
                    <div className="bg-[#171717] text-white p-5 border border-[#2E2E2B] font-mono text-xs space-y-3">
                      <div className="flex items-center justify-between text-[0.68rem] text-[#8E8B84] pb-2 border-b border-[#2E2E2B]">
                        <span className="flex items-center gap-1.5 text-white">
                          <Terminal className="w-3.5 h-3.5 text-[#C7612E]" />
                          Android Toolchain Runtime
                        </span>
                        <span className="text-emerald-400 font-bold">BUILD READY</span>
                      </div>
                      <div className="space-y-1 text-[#A3A099]">
                        <p className="text-[#C7612E]">&gt; aapt2 compile --dir res/ -o compiled_res.zip</p>
                        <p>&gt; d8 --output classes.dex --lib android.jar *.class</p>
                        <p className="text-white">&gt; zipalign -v -p 4 app-unaligned.apk app-release.apk</p>
                        <p className="text-emerald-400">&gt; Standalone APK generated on-device with zero server dependency</p>
                      </div>
                    </div>
                  )}

                  {/* Deliverables Bullets */}
                  <div className="space-y-2.5">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#171717]">
                      Core Capabilities Delivered:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6E6B65]">
                      {capabilities[activeCapability].deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C7612E] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-[#E5E2DC] flex items-center justify-between">
                <Link 
                  to="/services" 
                  className="text-xs font-mono text-[#C7612E] hover:underline inline-flex items-center gap-1.5 font-semibold"
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
      <section className="py-24 sm:py-32 border-b border-[#E5E2DC] bg-[#F5F2EB] relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block">
                The Qavironel Standard
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#171717] tracking-tight leading-tight">
                Built for founders who refuse ordinary templates.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#6E6B65] text-base sm:text-lg leading-relaxed font-light">
              <p>
                The digital web is saturated with sluggish WordPress themes, off-the-shelf page builders, and agency middlemen who charge large markups while farming out the code to unvetted contractors.
              </p>
              <p>
                <span className="text-[#171717] font-semibold">Qavironel Technologies</span> exists as an honest, high-craft alternative. We are an independent, remote-first studio that treats every web application, product MVP, and applied AI integration as a piece of disciplined digital craftsmanship.
              </p>
              <p>
                When you partner with us, you collaborate directly with the lead engineer writing your code. We ship with relentless momentum, defend your systems with ethical security standards, and deliver experiences that turn visitors into active customers.
              </p>
            </div>
          </div>

          {/* 4 Core Studio Pillars Grid (White Cards on Light Tint) */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              whileHover={{ y: -6, borderColor: 'rgba(199,97,46,0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-[#E5E2DC] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div>
                <div className="w-10 h-10 bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center mb-6">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-[#171717] mb-2">Architectural Rigor</h3>
                <p className="text-xs sm:text-sm text-[#6E6B65] leading-relaxed">
                  Zero bloated plugins or slow builders. Handcrafted, type-safe full-stack code built for lightning performance and clean scalability.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E2DC] text-[0.7rem] font-mono text-[#C7612E] font-semibold">
                REACT 19 · TYPESCRIPT · VITE
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, borderColor: 'rgba(199,97,46,0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-[#E5E2DC] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div>
                <div className="w-10 h-10 bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center mb-6">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-[#171717] mb-2">Applied AI Systems</h3>
                <p className="text-xs sm:text-sm text-[#6E6B65] leading-relaxed">
                  Practical intelligence: local-first LLM inference, vision OCR extraction, contextual advisory chat, and guarded system automations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E2DC] text-[0.7rem] font-mono text-[#C7612E] font-semibold">
                GROQ · LLAMA 3.3 · OLLAMA
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, borderColor: 'rgba(199,97,46,0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-[#E5E2DC] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div>
                <div className="w-10 h-10 bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-[#171717] mb-2">Defensive Security</h3>
                <p className="text-xs sm:text-sm text-[#6E6B65] leading-relaxed">
                  Backed by Bug Bounty and CTF victories: strict CSP boundaries, token-authenticated localhost layers, and defensible data access controls.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E2DC] text-[0.7rem] font-mono text-[#C7612E] font-semibold">
                BSIDES VADODARA AWARDS · OWASP
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, borderColor: 'rgba(199,97,46,0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-[#E5E2DC] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div>
                <div className="w-10 h-10 bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center mb-6">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-[#171717] mb-2">Global Velocity</h3>
                <p className="text-xs sm:text-sm text-[#6E6B65] leading-relaxed">
                  Remote-first workflows catering to clients worldwide. Rapid 1–3 week sprint deliverables, asynchronous video reviews, and zero bureaucracy.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E2DC] text-[0.7rem] font-mono text-[#C7612E] font-semibold">
                GLOBAL REACH · 24H CADENCE
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05. CURATED WORK (SLEEK, REFINED AGENCY SHOWCASE — PROPORTIONED CARDS) */}
      <section className="py-24 sm:py-32 border-b border-[#E5E2DC] bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E2DC]">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-2">
                Selected Work
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#171717] tracking-tight">
                Featured software & digital platforms.
              </h2>
              <p className="mt-2 text-sm text-[#6E6B65] max-w-xl">
                Restrained, honest case studies of production client work, applied AI tools, and product lab prototypes.
              </p>
            </div>
            <Button to="/work" variant="secondary" size="md" showArrow>
              View All 11 Projects
            </Button>
          </div>

          {/* Sleek 3-Column Agency Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curatedProjects.map((project) => (
              <motion.article
                key={project.slug}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-[#E5E2DC] hover:border-[#C7612E]/50 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] transition-all flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Image Preview with sleek 16/10 aspect ratio */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F2EB]">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2 py-0.5 text-[0.65rem] font-mono bg-[#171717]/90 backdrop-blur-xs text-white border border-[#2E2E2B]">
                        {project.status}
                      </span>
                      <span className="px-2 py-0.5 text-[0.65rem] font-mono bg-[#C7612E] text-white font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-[0.7rem] font-mono text-[#8E8B84] mb-2">
                      <span className="text-[#C7612E] font-semibold">{project.eyebrow}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-sans font-bold text-xl text-[#171717] group-hover:text-[#C7612E] transition-colors">
                      <Link to={`/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#6E6B65] line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-[#E5E2DC] flex items-center justify-between">
                        <div>
                          <p className="text-base font-bold text-[#171717]">{project.metrics[0].value}</p>
                          <p className="text-[0.65rem] text-[#8E8B84] font-mono">{project.metrics[0].label}</p>
                        </div>
                        {project.metrics[1] && (
                          <div className="text-right">
                            <p className="text-base font-bold text-[#171717]">{project.metrics[1].value}</p>
                            <p className="text-[0.65rem] text-[#8E8B84] font-mono">{project.metrics[1].label}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#E5E2DC]/60">
                  <Link
                    to={`/work/${project.slug}`}
                    className="text-xs font-mono font-semibold uppercase tracking-wider text-[#171717] group-hover:text-[#C7612E] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {project.links.length > 0 && (
                    <a
                      href={project.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#8E8B84] hover:text-[#C7612E] transition-colors"
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
      <section className="py-24 sm:py-32 border-b border-[#E5E2DC] bg-[#F5F2EB] relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block">
                Engineering Leadership
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#171717] tracking-tight leading-tight">
                One founder. Direct engineering. No intermediaries.
              </h2>
              <p className="text-base text-[#6E6B65] leading-relaxed font-light">
                When you partner with Qavironel, you don't talk to account managers or salespeople. You work directly with Maher Bhatt—from architecture and UI crafting to backend hardening and deployment.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={founder.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white border border-[#E5E2DC] text-[#171717] hover:text-[#C7612E] hover:border-[#C7612E] shadow-xs transition-colors"
                  aria-label="Founder GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={founder.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white border border-[#E5E2DC] text-[#171717] hover:text-[#C7612E] hover:border-[#C7612E] shadow-xs transition-colors"
                  aria-label="Founder LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <Button to="/about" variant="secondary" size="sm" showArrow>
                  Read Founder Story
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-[#E5E2DC] p-8 sm:p-10 space-y-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E2DC]">
                <div>
                  <h3 className="font-sans font-bold text-2xl text-[#171717]">{founder.name}</h3>
                  <p className="text-xs font-mono text-[#C7612E] uppercase tracking-wider mt-0.5 font-semibold">
                    {founder.role}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F2EB] border border-[#E5E2DC] text-xs font-mono text-[#6E6B65]">
                  <Globe className="w-3.5 h-3.5 text-[#C7612E]" />
                  <span>Remote-First Studio</span>
                </div>
              </div>

              <p className="text-sm text-[#6E6B65] leading-relaxed">
                {founder.bio}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#E5E2DC]">
                <p className="text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold">
                  Verified Technical Credentials:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6E6B65]">
                  {founder.credentials.slice(0, 4).map((cred, i) => (
                    <div key={i} className="flex items-start gap-2 bg-[#FBF9F5] p-2.5 border border-[#E5E2DC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C7612E] shrink-0 mt-0.5" />
                      <span className="text-[#171717] leading-snug">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. HOW WE BUILD — THE 4-STAGE GLOBAL DELIVERY MODEL */}
      <section className="py-24 sm:py-32 border-b border-[#E5E2DC] bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-2">
              Our Process
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#171717] tracking-tight">
              Disciplined execution from day zero to launch.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-[#E5E2DC] space-y-4 shadow-xs">
              <span className="text-xs font-mono text-[#C7612E] font-bold">01 / BLUEPRINT</span>
              <h3 className="font-sans font-bold text-lg text-[#171717]">Discovery & Architecture</h3>
              <p className="text-xs text-[#6E6B65] leading-relaxed">
                We define core user flows, technical constraints, data schemas, and performance targets before writing a single line of production code.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5E2DC] space-y-4 shadow-xs">
              <span className="text-xs font-mono text-[#C7612E] font-bold">02 / INTERACTION</span>
              <h3 className="font-sans font-bold text-lg text-[#171717]">Design & Motion Systems</h3>
              <p className="text-xs text-[#6E6B65] leading-relaxed">
                High-fidelity interface design crafted with editorial typography, custom micro-interactions, responsive touch targets, and design tokens.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5E2DC] space-y-4 shadow-xs">
              <span className="text-xs font-mono text-[#C7612E] font-bold">03 / CODE</span>
              <h3 className="font-sans font-bold text-lg text-[#171717]">Full-Stack Engineering</h3>
              <p className="text-xs text-[#6E6B65] leading-relaxed">
                Handcrafted type-safe React, TanStack Start, Python, and applied AI models. Zero bloated dependencies. Sub-second performance by default.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5E2DC] space-y-4 shadow-xs">
              <span className="text-xs font-mono text-[#C7612E] font-bold">04 / MOMENTUM</span>
              <h3 className="font-sans font-bold text-lg text-[#171717]">Hardening & Global Launch</h3>
              <p className="text-xs text-[#6E6B65] leading-relaxed">
                Core Web Vitals tuning, defensive security verification, semantic search indexing, and 30-day dedicated post-launch support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08. HIGH-IMPACT CLOSING CTA */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-8">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block">
            Start Your Next Build
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl text-[#171717] tracking-tight leading-[1.08]">
            Have an ambitious idea? <br className="hidden sm:inline" />
            <span className="text-[#C7612E]">Let's engineer it.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6E6B65] max-w-2xl mx-auto font-light leading-relaxed">
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
              className="px-6 py-3.5 bg-white hover:bg-[#F5F2EB] text-[#171717] border border-[#E5E2DC] text-xs font-semibold uppercase tracking-widest transition-colors shadow-xs"
            >
              Direct WhatsApp Line
            </a>
          </div>

          <p className="text-xs font-mono text-[#8E8B84] pt-4">
            Inquiries: <a href={`mailto:${companyConfig.email}`} className="text-[#C7612E] hover:underline font-semibold">{companyConfig.email}</a> · Average response in &lt; 12 hours
          </p>
        </div>
      </section>
    </div>
  );
};
