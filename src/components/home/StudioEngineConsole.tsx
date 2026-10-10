import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  Radio, 
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const StudioEngineConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai' | 'performance' | 'security'>('ai');
  const [streamProgress, setStreamProgress] = useState<number>(85);
  const [tokensPerSec, setTokensPerSec] = useState<number>(142);
  const [latency, setLatency] = useState<number>(8.4);

  // Subtle real-time oscillation to give live pulse feel
  useEffect(() => {
    const interval = setInterval(() => {
      setTokensPerSec(Math.floor(138 + Math.random() * 12));
      setLatency(Number((7.8 + Math.random() * 1.4).toFixed(1)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl bg-[#09090B] border border-white/10 shadow-2xl overflow-hidden text-zinc-300 font-mono text-xs select-none">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#121215] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
          </div>
          <span className="text-[0.7rem] text-zinc-400 font-semibold ml-2 tracking-wider">
            QAVIRONEL_ENGINE_v4.2 // PRODUCTION RUNTIME
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[0.65rem] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>NODE_LIVE</span>
          </div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center border-b border-white/10 bg-black/40 px-2 text-[0.72rem]">
        <button
          type="button"
          onClick={() => setActiveTab('ai')}
          className={`flex items-center gap-2 px-4 py-2.5 font-semibold transition-colors border-b-2 ${
            activeTab === 'ai' 
              ? 'border-[#E0561B] text-white bg-white/5' 
              : 'border-transparent text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Cpu className="w-3.5 h-3.5 text-[#E0561B]" />
          <span>01. Applied AI Orchestrator</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('performance')}
          className={`flex items-center gap-2 px-4 py-2.5 font-semibold transition-colors border-b-2 ${
            activeTab === 'performance' 
              ? 'border-[#E0561B] text-white bg-white/5' 
              : 'border-transparent text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-[#E0561B]" />
          <span>02. Web Architecture Vitals</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('security')}
          className={`flex items-center gap-2 px-4 py-2.5 font-semibold transition-colors border-b-2 ${
            activeTab === 'security' 
              ? 'border-[#E0561B] text-white bg-white/5' 
              : 'border-transparent text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#E0561B]" />
          <span>03. Zero-Trust Security Vault</span>
        </button>
      </div>

      {/* Tab Content Panes */}
      <div className="p-5 min-h-[260px] bg-gradient-to-b from-[#09090B] to-black">
        <AnimatePresence mode="wait">
          {activeTab === 'ai' && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between text-[0.7rem] text-zinc-400 pb-2 border-b border-white/5">
                <span>INFERENCE ENGINE: GROQ LLaMA-3.3-70B // HYBRID LOCAL FALLBACK</span>
                <span className="text-[#E0561B] font-bold">{tokensPerSec} TOKENS/SEC</span>
              </div>

              {/* Pipeline Flow Visualization */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-[0.68rem]">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                  <p className="text-zinc-400">INPUT STREAM</p>
                  <p className="font-bold text-white">Multimodal Voice/Text</p>
                  <span className="text-[0.6rem] text-emerald-400">● 16-bit PCM In</span>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                  <p className="text-zinc-400">COGNITIVE ROUTER</p>
                  <p className="font-bold text-[#E0561B]">Dynamic Model Intent</p>
                  <span className="text-[0.6rem] text-zinc-400">Context: &lt; 4096 tokens</span>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                  <p className="text-zinc-400">VECTOR MEMORY</p>
                  <p className="font-bold text-white">Hardware DPAPI Vault</p>
                  <span className="text-[0.6rem] text-emerald-400">● Zero Cloud Leak</span>
                </div>

                <div className="p-3 bg-[#E0561B]/10 border border-[#E0561B]/30 rounded-xl space-y-1">
                  <p className="text-[#E0561B]">STREAMED OUTPUT</p>
                  <p className="font-bold text-white">Guarded Actions Exec</p>
                  <span className="text-[0.6rem] text-[#E0561B]">● Latency: {latency}ms</span>
                </div>
              </div>

              {/* Code / Command Prompt simulation */}
              <div className="p-3.5 bg-black/60 border border-white/10 rounded-xl font-mono text-[0.7rem] text-zinc-300 space-y-1.5 leading-relaxed">
                <div className="text-zinc-400">
                  <span className="text-[#E0561B]">$</span> qavironel-ai orchestrate --provider=hybrid --target=production-agent
                </div>
                <div className="text-emerald-400">
                  ✓ Vector memory loaded (14,280 chunks indexed)
                </div>
                <div className="text-zinc-300">
                  [TELEMETRY] Neural response stream active. Zero-hallucination guardrails verified.
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'performance' && (
            <motion.div
              key="performance"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between text-[0.7rem] text-zinc-400 pb-2 border-b border-white/5">
                <span>CORE WEB VITALS BENCHMARK // AUDITED ON REACT 19 & VITE</span>
                <span className="text-emerald-400 font-bold">100 / 100 LIGHTHOUSE</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-2xl font-bold font-sans text-emerald-400">0.58s</span>
                  <p className="text-[0.65rem] text-zinc-400 uppercase mt-1">LCP (Fastest Render)</p>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-2xl font-bold font-sans text-emerald-400">0 ms</span>
                  <p className="text-[0.65rem] text-zinc-400 uppercase mt-1">INP (Zero Input Lag)</p>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-2xl font-bold font-sans text-emerald-400">0.00</span>
                  <p className="text-[0.65rem] text-zinc-400 uppercase mt-1">CLS (Zero Layout Shift)</p>
                </div>
                <div className="p-3 bg-[#E0561B]/15 border border-[#E0561B]/30 rounded-xl">
                  <span className="text-2xl font-bold font-sans text-[#E0561B]">Zero</span>
                  <p className="text-[0.65rem] text-[#E0561B] uppercase mt-1">Bloatware / Plugins</p>
                </div>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between text-[0.7rem]">
                <span className="text-zinc-400">Bundle Architecture: Tree-shaken ESM & Modern CSS variables</span>
                <span className="text-emerald-400 font-bold">GZIP: &lt; 46 kB</span>
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between text-[0.7rem] text-zinc-400 pb-2 border-b border-white/5">
                <span>SECURITY ARCHITECTURE // HARDENED BY ETHICAL HACKING BENCHMARKS</span>
                <span className="text-[#E0561B] font-bold">BSIDES CTF VERIFIED</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[0.7rem]">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                  <p className="text-white font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>DPAPI Hardware Vault</span>
                  </p>
                  <p className="text-zinc-400 text-[0.65rem]">Keys encrypted with TPM/DPAPI machine boundaries.</p>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                  <p className="text-white font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Strict CSP & Sanitization</span>
                  </p>
                  <p className="text-zinc-400 text-[0.65rem]">XSS and injection attack surface reduced to absolute zero.</p>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                  <p className="text-white font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Zero Data Harvesting</span>
                  </p>
                  <p className="text-zinc-400 text-[0.65rem]">No third-party trackers, invasive cookies, or analytics leaks.</p>
                </div>
              </div>

              <div className="p-3 bg-black/60 border border-white/10 rounded-xl font-mono text-[0.68rem] text-zinc-300">
                <span className="text-emerald-400">● AUDIT STATUS:</span> All communication channels, form payloads, and API endpoints authenticated with strict TLS 1.3 & token rotation.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Status Ribbon */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0F0F12] border-t border-white/10 text-[0.68rem] text-zinc-400">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-[#E0561B]" />
          <span>GLOBAL CLUSTER: US-EAST · EU-CENTRAL · AP-SOUTH</span>
        </div>
        <span className="text-zinc-300 font-bold">UPTIME: 99.98%</span>
      </div>
    </div>
  );
};
