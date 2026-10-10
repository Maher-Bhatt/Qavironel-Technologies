import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Calendar, 
  ArrowRight, 
  MessageSquare,
  Globe,
  Award,
  Layers
} from 'lucide-react';
import { companyConfig } from '../../data/company';

interface StudioStandardsMatrixProps {
  onOpenBooking: () => void;
}

export const StudioStandardsMatrix: React.FC<StudioStandardsMatrixProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 sm:py-32 border-b border-[#E5E7EB] bg-[#F8F9FA] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#E0561B]/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B] block mb-3">
            Engineering Benchmarks & Governance
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0A] tracking-tight leading-[1.08]">
            Built for companies who refuse ordinary templates.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] font-light leading-relaxed">
            The difference between a website that merely exists and a high-performance digital asset is in the engineering standards beneath the surface.
          </p>
        </div>

        {/* Head-to-Head Comparison Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Legacy Agency / Freelancer Column */}
          <div className="lg:col-span-5 bg-white border border-[#E5E7EB] rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">The Industry Standard</span>
                <span className="text-xs font-mono text-red-500 font-bold">FRAGILE</span>
              </div>

              <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-6 mb-2">
                Legacy Agencies & Templates
              </h3>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mb-6 font-light">
                Sluggish page builders, opaque middle managers, and off-the-shelf templates that degrade over time.
              </p>

              <ul className="space-y-4 text-xs sm:text-sm text-zinc-600">
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Bloated WordPress plugins with slow, 3+ second mobile load times</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Account managers who act as messengers and cannot modify code</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Outsourced offshore contractor chains with zero security vetting</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Fragile third-party dependencies prone to CVE vulnerabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Unpredictable hourly billing overruns with slow multi-month delivery</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB] text-xs font-mono text-zinc-400">
              Typical outcome: High maintenance bills, technical debt, and poor conversion.
            </div>
          </div>

          {/* Qavironel Technologies Engineering Studio Column */}
          <div className="lg:col-span-7 bg-[#0A0A0A] text-white border-2 border-[#E0561B] rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgba(224,86,27,0.12)] relative overflow-hidden">
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-[#E0561B] text-white px-4 py-1 text-[0.65rem] font-mono font-bold tracking-widest uppercase rounded-bl-xl">
              CRAFTED BY QAVIRONEL
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#E0561B] uppercase tracking-wider font-semibold">Qavironel Engineering Studio</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">100% PRODUCTION-GRADE</span>
              </div>

              <h3 className="font-sans font-bold text-2xl text-white mt-6 mb-2">
                Disciplined Craftsmanship & High-Velocity Code
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                Direct senior engineering from day one. Bespoke modern React 19/TypeScript architecture, hardware-bound security, and sub-second performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 text-[#E0561B]">
                    <Zap className="w-4 h-4" />
                    <span className="font-bold text-sm text-white">Sub-0.8s Load Times</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    Tree-shaken, zero-bloat modern web architectures audited for 100/100 Core Web Vitals.
                  </p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 text-[#E0561B]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-bold text-sm text-white">Defensive Hardening</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    Hardened by verified CTF and bug bounty practices. DPAPI hardware token encryption.
                  </p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 text-[#E0561B]">
                    <Cpu className="w-4 h-4" />
                    <span className="font-bold text-sm text-white">Practical AI Integration</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    Production neural workflows (Groq LLaMA, local Ollama, vision OCR) without uninspected cloud leaks.
                  </p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 text-[#E0561B]">
                    <Globe className="w-4 h-4" />
                    <span className="font-bold text-sm text-white">1–2 Week Turnaround</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    Eliminate bureaucratic lag. Transparent milestone pricing with direct founder communication.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions Row inside card */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for international client sprints</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-[#E0561B] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book 30-Min Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Dispatch Strip */}
        <div className="bg-white border border-[#E5E2DC] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E0561B]/10 border border-[#E0561B]/20 text-[#E0561B] flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-lg text-[#0A0A0A]">
                Have an active roadmap or upcoming project?
              </h4>
              <p className="text-xs sm:text-sm text-[#52525B] font-light">
                Pick a time on our calendar or message directly on WhatsApp to get immediate technical feasibility.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-[#0A0A0A] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E0561B]" />
              <span>Schedule Call</span>
            </button>
            <a
              href={companyConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
