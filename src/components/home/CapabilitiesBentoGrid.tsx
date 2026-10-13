import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Spatial3DPrism } from '../3d/Spatial3DPrism';

export const CapabilitiesBentoGrid: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'groq' | 'ollama' | 'memory'>('groq');

  return (
    <section className="py-24 sm:py-32 border-b border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F0] dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E5E5] dark:border-white/10">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#0A0A0A] dark:text-[#737373] block mb-2">
              Capabilities Architecture
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0A] dark:text-[#F5F5F0] tracking-tight leading-[1.08]">
              Modular engineering. High-craft depth.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#737373] dark:text-[#737373] max-w-md font-light leading-relaxed">
            Every layer of software we deploy adheres to strict performance budgets, defensive security boundaries, and modular component design.
          </p>
        </div>

        {/* 4-Tile Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* TILE 1: APPLIED AI & REASONING (LARGE 2-COL / 2-ROW) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-2 lg:col-span-2 p-5 sm:p-8 rounded-2xl bg-[#0A0A0A] text-white flex flex-col justify-between border border-[#E5E5E5]/20 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0A0A0A]/40 text-[#737373] flex items-center justify-center border border-[#737373]/30 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-white">01 // APPLIED AI ENGINE</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl sm:rounded-full bg-white/10 text-[0.65rem] font-mono">
                  <button 
                    onClick={() => setActiveModel('groq')}
                    className={`px-2.5 py-0.5 rounded-full transition-colors ${activeModel === 'groq' ? 'bg-[#0A0A0A] text-white' : 'text-zinc-400 hover:text-white'}`}
                  >
                    Groq 70B
                  </button>
                  <button 
                    onClick={() => setActiveModel('ollama')}
                    className={`px-2.5 py-0.5 rounded-full transition-colors ${activeModel === 'ollama' ? 'bg-[#0A0A0A] text-white' : 'text-zinc-400 hover:text-white'}`}
                  >
                    Local Ollama
                  </button>
                  <button 
                    onClick={() => setActiveModel('memory')}
                    className={`px-2.5 py-0.5 rounded-full transition-colors ${activeModel === 'memory' ? 'bg-[#0A0A0A] text-white' : 'text-zinc-400 hover:text-white'}`}
                  >
                    Vector Vault
                  </button>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-2">
                Local-First & Multi-Model Inference
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6 max-w-xl">
                We engineer practical LLMs, vector memory vaults, and agentic workflows that keep sensitive prompts safe on physical hardware while streaming high-speed reasoning.
              </p>

              {/* Simulated Live Token Streaming Output */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-[0.68rem] text-zinc-400 border-b border-white/5 pb-2">
                  <span>TELEMETRY STREAM // ACTIVE</span>
                  <span className="text-emerald-400 font-bold">240 TOKENS/SEC</span>
                </div>
                {activeModel === 'groq' && (
                  <p className="text-zinc-200 leading-relaxed">
                    <span className="text-[#737373]">&gt; Model:</span> Groq LLaMA-3.3-70B-Versatile<br />
                    <span className="text-emerald-400">&gt; Status:</span> Streaming context vector tokens with sub-180ms TTFT latency.
                  </p>
                )}
                {activeModel === 'ollama' && (
                  <p className="text-zinc-200 leading-relaxed">
                    <span className="text-[#737373]">&gt; Model:</span> Localhost Llama 3 8B Q4<br />
                    <span className="text-emerald-400">&gt; Status:</span> Air-gapped offline daemon. Zero cloud packets sent.
                  </p>
                )}
                {activeModel === 'memory' && (
                  <p className="text-zinc-200 leading-relaxed">
                    <span className="text-[#737373]">&gt; Memory:</span> SQLite Vector Embeddings (Cosine Sim &gt; 0.88)<br />
                    <span className="text-emerald-400">&gt; Status:</span> Indexed 14,200 conversational nodes in DPAPI hardware vault.
                  </p>
                )}
              </div>
            </div>

            {/* Ambient 3D Spatial Crystalline Prism */}
            <div className="absolute top-1/2 right-2 -translate-y-1/2 w-[160px] h-[160px] pointer-events-none opacity-45 hidden sm:block">
              <Spatial3DPrism size={160} />
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono relative z-10">
              <span className="text-zinc-400">PROVEN BUILD: K.A.L.K.I.</span>
              <Link to="/work/kalki" className="text-[#737373] hover:text-white flex items-center gap-1 font-semibold transition-colors">
                <span>View Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* TILE 2: SUB-SECOND CORE WEB VITALS (WIDE 2-COL) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-2 lg:col-span-2 p-5 sm:p-8 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-white/10 flex flex-col justify-between shadow-xs hover:border-[#0A0A0A]/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0A0A0A]/10 text-[#0A0A0A] dark:text-[#737373] flex items-center justify-center border border-[#0A0A0A]/20 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-[#0A0A0A] dark:text-[#F5F5F0]">02 // PERFORMANCE DISCIPLINE</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F4F4F4] dark:bg-[#0A0A0A]/30 text-[#0A0A0A] dark:text-[#737373] border border-[#737373]/20 text-[0.65rem] font-mono font-bold">
                  OPTIMIZED VITALS
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#F5F5F0] tracking-tight mb-2">
                Engineering for Speed & Stability
              </h3>
              <p className="text-xs sm:text-sm text-[#737373] dark:text-[#737373] font-light leading-relaxed mb-6">
                Zero bloated page builders or unnecessary vendor scripts. Handcrafted React and Vite setups tuned for instant user response, clean rendering, and minimal payload weight.
              </p>

              {/* Benchmark Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#F5F5F0] dark:bg-[#222923] border border-[#E5E5E5] dark:border-white/10 text-center">
                  <p className="text-xs sm:text-sm font-bold font-sans text-[#0A0A0A] dark:text-[#737373]">Zero Bloat</p>
                  <p className="text-[0.6rem] sm:text-[0.65rem] text-[#737373] dark:text-[#737373] font-mono mt-0.5">Lean Bundle</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#F5F5F0] dark:bg-[#222923] border border-[#E5E5E5] dark:border-white/10 text-center">
                  <p className="text-xs sm:text-sm font-bold font-sans text-[#0A0A0A] dark:text-[#737373]">Type-Safe</p>
                  <p className="text-[0.6rem] sm:text-[0.65rem] text-[#737373] dark:text-[#737373] font-mono mt-0.5">Architecture</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#F5F5F0] dark:bg-[#222923] border border-[#E5E5E5] dark:border-white/10 text-center">
                  <p className="text-xs sm:text-sm font-bold font-sans text-[#0A0A0A] dark:text-[#737373]">0 Layout Shifts</p>
                  <p className="text-[0.6rem] sm:text-[0.65rem] text-[#737373] dark:text-[#737373] font-mono mt-0.5">CLS Bound</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5E5E5] dark:border-white/10 flex items-center justify-between text-xs font-mono text-[#737373] dark:text-[#737373]">
              <span>HTTP/3 · BROTLI PIPELINE</span>
              <span className="text-[#0A0A0A] dark:text-[#737373] font-semibold">PRODUCTION TUNED</span>
            </div>
          </motion.div>

          {/* TILE 3: DEFENSIVE CYBERSECURITY (2-COL) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-1 lg:col-span-2 p-5 sm:p-8 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-white/10 flex flex-col justify-between shadow-xs hover:border-[#0A0A0A]/40 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#0A0A0A]/10 text-[#0A0A0A] dark:text-[#737373] flex items-center justify-center border border-[#0A0A0A]/20 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-bold tracking-wider text-[#0A0A0A] dark:text-[#F5F5F0]">03 // DEFENSIVE SECURITY</span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#0A0A0A] dark:text-[#F5F5F0] tracking-tight mb-2">
                Ethical Privacy & Boundary Control
              </h3>
              <p className="text-xs text-[#737373] dark:text-[#737373] font-light leading-relaxed mb-4">
                Strict Content Security Policies, DPAPI hardware token encryption, zero tracking cookies, and sandboxed platform action adapters.
              </p>

              <div className="space-y-2 text-xs text-[#737373] dark:text-[#737373]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0A0A0A] dark:text-[#737373] shrink-0" />
                  <span>Strict CSP headers: default-src 'self'</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0A0A0A] dark:text-[#737373] shrink-0" />
                  <span>Hardware-bound DPAPI secrets protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0A0A0A] dark:text-[#737373] shrink-0" />
                  <span>Zero tracking cookies & analytics bloat</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E5E5] dark:border-white/10 text-xs font-mono text-[#737373] dark:text-[#737373]">
              OWASP STANDARDS · ZERO TELEMETRY LEAKS
            </div>
          </motion.div>

          {/* TILE 4: FULL-STACK DISCIPLINE (2-COL) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-1 lg:col-span-2 p-5 sm:p-8 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-white/10 flex flex-col justify-between shadow-xs hover:border-[#0A0A0A]/40 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#0A0A0A]/10 text-[#0A0A0A] dark:text-[#737373] flex items-center justify-center border border-[#0A0A0A]/20">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-bold tracking-wider text-[#0A0A0A] dark:text-[#F5F5F0]">04 // FULL-STACK DISCIPLINE</span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#0A0A0A] dark:text-[#F5F5F0] tracking-tight mb-2">
                100% Type-Safe Architecture
              </h3>
              <p className="text-xs text-[#737373] dark:text-[#737373] font-light leading-relaxed mb-4">
                From database migrations to client components: strict TypeScript, TanStack Start, FastAPI, and Zod schemas guaranteeing contract integrity.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {['TypeScript', 'React 19', 'FastAPI', 'TanStack Start', 'Tailwind v4', 'PostgreSQL'].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-[#F5F5F0] dark:bg-[#222923] border border-[#E5E5E5] dark:border-white/10 text-[0.68rem] font-mono text-[#0A0A0A] dark:text-[#F5F5F0] font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E5E5] dark:border-white/10 text-xs font-mono text-[#737373] dark:text-[#737373]">
              CLEAN ARCHITECTURE · 100% CODE HANDOVER
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CapabilitiesBentoGrid;
