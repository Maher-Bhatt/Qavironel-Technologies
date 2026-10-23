import { SEO } from '../components/seo/SEO';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { companyConfig } from '../data/company';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  Scale, 
  Printer, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Globe, 
  Terminal,
  Clock,
  ExternalLink
} from 'lucide-react';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(
    location.pathname.includes('terms') ? 'terms' : 'privacy'
  );

  useEffect(() => {
    setActiveTab(location.pathname.includes('terms') ? 'terms' : 'privacy');
  }, [location.pathname]);

  const handleTabChange = (tab: 'privacy' | 'terms') => {
    setActiveTab(tab);
    navigate(tab === 'terms' ? '/terms' : '/privacy', { replace: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEO 
        title={activeTab === 'terms' ? 'Terms of Service & IP Governance' : 'Privacy Policy & AI Confidentiality'} 
        description={
          activeTab === 'terms' 
            ? 'Terms of Service, intellectual property handover policies, and engineering contract governance for Qavironel Technologies.' 
            : 'Privacy Policy, data governance standards, and applied AI confidentiality commitments for Qavironel Technologies.'
        }
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: activeTab === 'terms' ? 'Terms of Service & IP Governance' : 'Privacy Policy & AI Confidentiality',
          url: activeTab === 'terms' ? 'https://qavironel.com/terms' : 'https://qavironel.com/privacy'
        }}
      />
      <div className="bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#FAFAFA] pt-28 sm:pt-36 pb-28 selection:bg-[#0A0A0A] selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300 min-h-screen">
        <div className="max-w-[1400px] w-full mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Header Section */}
          <div className="pb-10 border-b border-[#E5E5E5] dark:border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#0A0A0A] dark:text-[#737373] block">
                Governance & Legal Architecture
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-[#737373] dark:text-[#A3A3A3]">
                <Clock className="w-3.5 h-3.5 text-[#0A0A0A] dark:text-[#737373]" />
                <span>Effective Date: October 2026 · Version 2.4</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight leading-[1.08]">
                  {activeTab === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
                </h1>
                <p className="mt-3 text-base sm:text-lg text-[#404040] dark:text-[#A3A3A3] font-light max-w-2xl leading-relaxed">
                  {activeTab === 'terms'
                    ? 'Clear contractual milestones, 100% intellectual property handover upon delivery, and transparent engineering engagement standards.'
                    : 'Ethical privacy governance, zero tracking bloat, hardware-grade token encryption, and strict confidentiality for proprietary AI workflows.'}
                </p>
              </div>

              {/* Document Switcher & Print Trigger */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex p-1.5 rounded-full bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 shadow-xs">
                  <button
                    type="button"
                    onClick={() => handleTabChange('privacy')}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                      activeTab === 'privacy'
                        ? 'bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0A0A0A] dark:text-[#737373]" />
                    <span>Privacy Policy</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTabChange('terms')}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                      activeTab === 'terms'
                        ? 'bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    <Scale className="w-3.5 h-3.5 text-[#0A0A0A] dark:text-[#737373]" />
                    <span>Terms of Service</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-4 py-3 rounded-full bg-white dark:bg-[#121212] border border-[#E5E5E5] dark:border-white/10 text-xs font-mono text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-white transition-colors flex items-center gap-2 shadow-xs"
                  title="Print or save as PDF"
                >
                  <Printer className="w-3.5 h-3.5 text-[#0A0A0A] dark:text-[#737373]" />
                  <span className="hidden sm:inline">Print Document</span>
                </button>
              </div>
            </div>
          </div>

          {/* Document Content Layout */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Quick Table of Contents Sticky Index (4 Cols) */}
            <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#121212] border border-[#E5E5E5] dark:border-white/10 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-[#E5E5E5] dark:border-white/10 text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A] dark:text-[#737373]">
                  <FileText className="w-4 h-4" />
                  <span>Document Index</span>
                </div>

                <nav className="space-y-1.5 text-xs font-mono">
                  {activeTab === 'privacy' ? (
                    <>
                      <a href="#p-1" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">01 // Scope & Operating Model</a>
                      <a href="#p-2" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">02 // Information We Collect</a>
                      <a href="#p-3" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">03 // Zero Surveillance & Cookie Policy</a>
                      <a href="#p-4" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">04 // Applied AI & Model Confidentiality</a>
                      <a href="#p-5" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">05 // Hardware & Secret Vaulting</a>
                      <a href="#p-6" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">06 // Infrastructure & Subprocessors</a>
                      <a href="#p-7" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">07 // Data Subject Rights (GDPR / CCPA)</a>
                      <a href="#p-8" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">08 // Cryptographic Disposal & Retention</a>
                      <a href="#p-9" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">09 // Direct Privacy Inquiries</a>
                    </>
                  ) : (
                    <>
                      <a href="#t-1" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">01 // Contractual Framework</a>
                      <a href="#t-2" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">02 // Scope of Work & Sprints</a>
                      <a href="#t-3" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">03 // 100% IP Handover & Ownership</a>
                      <a href="#t-4" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">04 // Milestone Invoicing & Terms</a>
                      <a href="#t-5" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">05 // Client Cooperation & Dependencies</a>
                      <a href="#t-6" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">06 // 30-Day Engineering Warranty</a>
                      <a href="#t-7" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">07 // Mutual Confidentiality & NDA</a>
                      <a href="#t-8" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">08 // Security Standards & Ethical Boundaries</a>
                      <a href="#t-9" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">09 // Limitation of Liability</a>
                      <a href="#t-10" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">10 // Offboarding & Resource Transfer</a>
                      <a href="#t-11" className="block py-1 text-[#404040] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors">11 // Governing Law & Arbitration</a>
                    </>
                  )}
                </nav>

                <div className="pt-4 border-t border-[#E5E5E5] dark:border-white/10">
                  <p className="text-[0.72rem] text-[#737373] dark:text-[#A3A3A3] leading-relaxed">
                    Need a custom Enterprise NDA or signed Statement of Work prior to architectural disclosure?
                  </p>
                  <a
                    href={`mailto:${companyConfig.email}?subject=Enterprise%20NDA%20Request`}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373] hover:underline"
                  >
                    <span>Request Studio NDA</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Column: Detailed Clauses & Legal Language (8 Cols) */}
            <main className="lg:col-span-8 bg-white dark:bg-[#121212] border border-[#E5E5E5] dark:border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs space-y-12">
              
              {activeTab === 'privacy' ? (
                /* ─────────────────────────────────────────────────────────── */
                /* DETAILED PRIVACY POLICY CONTENT                            */
                /* ─────────────────────────────────────────────────────────── */
                <>
                  <section id="p-1" className="space-y-4 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 01 // OPERATING SCOPE & PRINCIPLES</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      1. Scope & Operating Model
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      Qavironel Technologies (“we”, “us”, “our”, or the “Studio”) operates as an independent, global technology and software engineering studio. We architect and deploy high-performance web systems, custom SaaS platforms, and applied AI infrastructure.
                    </p>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      This Privacy Policy governs how personal and technical data is processed across our public websites (<code className="font-mono text-xs bg-[#F4F4F4] dark:bg-[#171717] px-1.5 py-0.5 rounded text-[#0A0A0A] dark:text-[#737373]">qavironel.com</code> and related domains), consultation discovery workflows, and client engineering engagements.
                    </p>
                  </section>

                  <section id="p-2" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 02 // DATA INGESTION</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      2. Information We Collect
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      We collect strictly the minimum information required to deliver software engineering services and evaluate project feasibility:
                    </p>
                    
                    <div className="space-y-3 pt-2 text-sm text-[#404040] dark:text-[#A3A3A3]">
                      <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#171717] border border-[#E5E5E5] dark:border-white/10 space-y-1">
                        <p className="font-bold font-sans text-[#0A0A0A] dark:text-[#FAFAFA]">A. Discovery & Contact Data</p>
                        <p className="font-light text-xs leading-relaxed">
                          When you submit our discovery form, book a video consultation, or email the studio, we collect your full name, organizational email address, company name, project brief, budget parameters, and scheduling preferences.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#171717] border border-[#E5E5E5] dark:border-white/10 space-y-1">
                        <p className="font-bold font-sans text-[#0A0A0A] dark:text-[#FAFAFA]">B. Infrastructure Telemetry & Security Logs</p>
                        <p className="font-light text-xs leading-relaxed">
                          For DDoS prevention, rate limiting, and system reliability, our edge servers (Cloudflare / Vercel) log standard HTTP headers: client IP address (anonymized), browser user-agent, requested URL route, and millisecond response latency.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#171717] border border-[#E5E5E5] dark:border-white/10 space-y-1">
                        <p className="font-bold font-sans text-[#0A0A0A] dark:text-[#FAFAFA]">C. Client Engagement Credentials</p>
                        <p className="font-light text-xs leading-relaxed">
                          During contracted sprints, clients may provide GitHub repository invitations, staging API tokens, or cloud environment variables. All secrets are immediately vaulted in DPAPI-encrypted hardware keychains and never stored in plain text.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="p-3" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 03 // SURVEILLANCE CAPITALISM REFUSAL</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      3. Zero Surveillance & Cookie-Free Policy
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      Qavironel Technologies operates under an uncompromising ethical web standard:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#404040] dark:text-[#A3A3A3]">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                        <span><strong>Zero Advertising Trackers:</strong> We do not load Meta Pixels, Google Ads conversion tags, TikTok beacons, or third-party behavioral trackers.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                        <span><strong>Zero Data Monetization:</strong> We will never sell, rent, monetize, or trade client email lists or project details to data brokers or advertising exchanges.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                        <span><strong>Local Preference Storage:</strong> We only store functional preferences in your browser's local storage (e.g. your chosen light/dark theme and audio micro-haptic state).</span>
                      </li>
                    </ul>
                  </section>

                  <section id="p-4" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 04 // AI GOVERNANCE</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      4. Applied AI Systems & Model Confidentiality
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      When architecting Applied AI workflows for clients (RAG pipelines, custom LLM wrappers, vector databases, and multi-agent systems), we enforce strict contractual and technical boundaries:
                    </p>
                    <div className="p-5 rounded-2xl bg-black/5 dark:bg-black/40 border border-[#E5E5E5] dark:border-white/10 space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between text-[#0A0A0A] dark:text-[#737373] pb-2 border-b border-[#E5E5E5] dark:border-white/10">
                        <span>AI ARCHITECTURAL PROTOCOL</span>
                        <span className="text-zinc-500 font-bold">ZERO-TRAINING CLAUSE</span>
                      </div>
                      <p className="text-[#404040] dark:text-zinc-300 leading-relaxed font-sans">
                        1. <strong>No Model Training on Client IP:</strong> Client source code, proprietary documents, and prompts are never fed into public LLM training datasets. We strictly utilize enterprise API endpoints with verified Zero-Data-Retention policies (Groq, Anthropic Claude, OpenAI Enterprise, and Google Gemini API).
                      </p>
                      <p className="text-[#404040] dark:text-zinc-300 leading-relaxed font-sans">
                        2. <strong>Air-Gapped & Local Inference:</strong> Where regulatory compliance requires absolute isolation, we deploy on-premises or sovereign local inference daemons (Ollama, vLLM, private SQLite vector vaults) where zero data packets leave the client's network.
                      </p>
                    </div>
                  </section>

                  <section id="p-5" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 05 // DEFENSIVE SECURITY</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      5. Hardware & Key Vaulting Security
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      All systems engineered by Qavironel adhere to defensive cybersecurity best practices:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#404040] dark:text-[#A3A3A3]">
                      <li className="flex items-start gap-2.5">
                        <Lock className="w-4 h-4 text-[#0A0A0A] dark:text-[#737373] shrink-0 mt-0.5" />
                        <span><strong>Encryption Standards:</strong> Strict TLS 1.3 encryption in transit across all HTTP/3 connections and AES-256 encryption at rest.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Lock className="w-4 h-4 text-[#0A0A0A] dark:text-[#737373] shrink-0 mt-0.5" />
                        <span><strong>Content Security Policies:</strong> Robust CSP headers prohibiting inline script injection and unauthorized cross-origin framing.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Lock className="w-4 h-4 text-[#0A0A0A] dark:text-[#737373] shrink-0 mt-0.5" />
                        <span><strong>Ephemeral Credentials:</strong> Client deployment keys and database tokens are stored with time-to-live restrictions and revoked immediately upon contract delivery.</span>
                      </li>
                    </ul>
                  </section>

                  <section id="p-6" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 06 // THIRD-PARTY SUBPROCESSORS</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      6. Infrastructure & Subprocessors
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      We partner strictly with enterprise cloud providers for edge distribution, DNS, and transactional delivery:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-[#FAFAFA] dark:bg-[#171717] border border-[#E5E5E5] dark:border-white/10">
                        <p className="font-bold text-[#0A0A0A] dark:text-[#FAFAFA]">Vercel Inc. & Cloudflare</p>
                        <p className="text-[#737373] dark:text-[#A3A3A3] mt-0.5">Global edge hosting, static asset distribution & DDoS mitigation.</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FAFAFA] dark:bg-[#171717] border border-[#E5E5E5] dark:border-white/10">
                        <p className="font-bold text-[#0A0A0A] dark:text-[#FAFAFA]">Resend & AWS SES</p>
                        <p className="text-[#737373] dark:text-[#A3A3A3] mt-0.5">Transactional contact inquiries & consultation booking dispatches.</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FAFAFA] dark:bg-[#171717] border border-[#E5E5E5] dark:border-white/10">
                        <p className="font-bold text-[#0A0A0A] dark:text-[#FAFAFA]">Cal.com & Google Workspace</p>
                        <p className="text-[#737373] dark:text-[#A3A3A3] mt-0.5">Discovery sprint scheduling & confidential calendar sync.</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FAFAFA] dark:bg-[#171717] border border-[#E5E5E5] dark:border-white/10">
                        <p className="font-bold text-[#0A0A0A] dark:text-[#FAFAFA]">GitHub Enterprise</p>
                        <p className="text-[#737373] dark:text-[#A3A3A3] mt-0.5">Source code hosting, continuous integration & release branches.</p>
                      </div>
                    </div>
                  </section>

                  <section id="p-7" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 07 // GLOBAL COMPLIANCE</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      7. Data Subject Rights (GDPR & CCPA/CPRA)
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      Regardless of your physical location, we honor global data subject rights:
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#404040] dark:text-[#A3A3A3]">
                      <li>• <strong>Right of Access & Portability:</strong> You may request a machine-readable export of all contact records we hold for your account.</li>
                      <li>• <strong>Right to Rectification:</strong> You may request correction of inaccurate corporate records.</li>
                      <li>• <strong>Right to Erasure (“Right to be Forgotten”):</strong> You may request permanent deletion of all discovery correspondence and staging logs.</li>
                    </ul>
                  </section>

                  <section id="p-8" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 08 // RETENTION</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      8. Cryptographic Disposal & Retention
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      Contact form inquiries are retained for 12 months for commercial correspondence, after which they are systematically purged. Contracted project staging data is cryptographically wiped 30 days after final client acceptance and IP handover unless an ongoing maintenance retainer is in effect.
                    </p>
                  </section>

                  <section id="p-9" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 09 // CONTACT</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      9. Direct Privacy Inquiries
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      For any questions regarding our data practices or to execute a formal Data Processing Agreement (DPA), contact our governance desk:
                    </p>
                    <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#171717] border border-[#E5E5E5] dark:border-white/10 flex items-center justify-between text-xs font-mono">
                      <div>
                        <span className="text-[#737373] dark:text-[#A3A3A3] block">DATA GOVERNANCE DESK</span>
                        <a href={`mailto:${companyConfig.email}`} className="text-[#0A0A0A] dark:text-[#737373] font-bold hover:underline">
                          {companyConfig.email}
                        </a>
                      </div>
                      <span className="text-zinc-500 font-bold hidden sm:block">RESPONSE WITHIN 24H</span>
                    </div>
                  </section>
                </>
              ) : (
                /* ─────────────────────────────────────────────────────────── */
                /* DETAILED TERMS OF SERVICE CONTENT                          */
                /* ─────────────────────────────────────────────────────────── */
                <>
                  <section id="t-1" className="space-y-4 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 01 // CONTRACTUAL FRAMEWORK</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      1. Contractual Framework
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      These Terms of Service (“Terms”) constitute a legally binding agreement between Qavironel Technologies (“Studio”, “we”, “us”) and the corporate client, founder, or entity (“Client”, “you”) engaging our engineering, software architecture, UI/UX design, or consulting services.
                    </p>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      By signing an engineering proposal, issuing a purchase order, paying a project retainer, or commissioning a sprint, you agree to be bound by these Terms alongside the specific Statement of Work (“SOW”).
                    </p>
                  </section>

                  <section id="t-2" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 02 // SOW & SCOPE</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      2. Scope of Work & Agile Sprints
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      Every project is governed by a mutually agreed Statement of Work detailing specific technical milestones, design deliverables, API schemas, and sprint timelines.
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#404040] dark:text-[#A3A3A3]">
                      <li>• <strong>Scope Boundaries:</strong> Any feature, third-party integration, or architectural deviation not documented in the agreed SOW constitutes an extension.</li>
                      <li>• <strong>Change Orders:</strong> Scope extensions will be documented via a formal written Change Order specifying additional fee adjustments and revised sprint delivery dates before work commences.</li>
                    </ul>
                  </section>

                  <section id="t-3" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 03 // INTELLECTUAL PROPERTY</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      3. 100% Intellectual Property (IP) Handover
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      We operate on a pure craftsmanship model. We build your product for you to own:
                    </p>
                    <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-black/10 dark:border-white/10 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>FULL CLIENT OWNERSHIP GUARANTEE</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#0A0A0A] dark:text-[#FAFAFA] leading-relaxed">
                        Upon receipt of 100% of the agreed project fees, all bespoke code, custom database migrations, UI designs, component libraries, and written documentation created specifically for your project become the exclusive Intellectual Property of the Client.
                      </p>
                      <p className="text-xs text-[#404040] dark:text-[#A3A3A3] leading-relaxed">
                        <strong>Studio Pre-existing Tooling:</strong> Qavironel Technologies retains ownership of its proprietary pre-existing boilerplate utilities, open-source libraries, and internal build tooling. We grant the Client a perpetual, irrevocable, worldwide, royalty-free license to use, modify, and run such utilities as embedded within the delivered software.
                      </p>
                    </div>
                  </section>

                  <section id="t-4" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 04 // FINANCIAL TERMS</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      4. Milestone Invoicing & Payment Terms
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      We work on structured, milestone-based engagements:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#404040] dark:text-[#A3A3A3]">
                      <li>• <strong>Retainer Deposit:</strong> A non-refundable engineering commitment retainer (typically 40% to 50%) is due prior to sprint scheduling and repository initialization.</li>
                      <li>• <strong>Milestone Invoices:</strong> Intermediate sprint payments are triggered upon demonstration of agreed verifiable deliverables on staging environments.</li>
                      <li>• <strong>Final Handover:</strong> The final invoice is due prior to final production DNS deployment and administrative GitHub repository transfer.</li>
                      <li>• <strong>Payment Methods:</strong> Electronic bank wire (SWIFT / ACH), Stripe corporate invoicing, or approved multi-currency transfers in USD, EUR, or GBP. Net-14 payment terms apply to milestone invoices.</li>
                    </ul>
                  </section>

                  <section id="t-5" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 05 // CLIENT DEPENDENCIES</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      5. Client Cooperation & Dependencies
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      Sprint velocity requires timely collaboration. The Client agrees to designate a primary technical or product decision-maker, furnish necessary design assets and third-party API credentials, and provide review feedback within three (3) business days of milestone submissions.
                    </p>
                  </section>

                  <section id="t-6" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 06 // CODE WARRANTY</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      6. 30-Day Engineering Warranty & Defect Remediation
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      We stand behind the craftsmanship of every line of code we write:
                    </p>
                    <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#171717] border border-[#E5E5E5] dark:border-white/10 space-y-2 text-xs sm:text-sm text-[#404040] dark:text-[#A3A3A3]">
                      <p>
                        Qavironel Technologies provides a <strong>30-day post-launch warranty period</strong> starting on the date of production launch. During this period, we will remediate any reproducible bugs or functional defects that deviate from the agreed SOW at zero additional cost.
                      </p>
                      <p className="text-xs text-[#737373] dark:text-[#A3A3A3] font-light">
                        <em>Exclusions:</em> The warranty does not cover defects introduced by Client code modifications, third-party API outages or upstream breaking changes (e.g. Stripe, OpenAI API revisions), or hosting infrastructure downtime beyond our control.
                      </p>
                    </div>
                  </section>

                  <section id="t-7" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 07 // CONFIDENTIALITY</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      7. Mutual Confidentiality & NDA
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      Both parties agree to treat all business plans, financial data, unreleased product roadmaps, proprietary algorithms, and source code as Strictly Confidential. Neither party shall disclose Confidential Information to any third party without prior written authorization, surviving five (5) years past engagement completion.
                    </p>
                  </section>

                  <section id="t-8" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 08 // SECURITY & ETHICS</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      8. Security Standards & Ethical Boundaries
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      We strictly enforce ethical software engineering. We refuse projects involving malicious exploits, unvetted spyware, predatory scam platforms, or unlawful surveillance. All client software is engineered following OWASP security baselines and secure coding principles.
                    </p>
                  </section>

                  <section id="t-9" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 09 // LIABILITY</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      9. Limitation of Liability
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, punitive, or consequential damages (including loss of profits, data corruption, or business interruption).
                    </p>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      Our total aggregate liability under any statement of work shall not exceed the total fees actually received by Qavironel Technologies under the specific engagement giving rise to the claim in the six (6) months prior to the incident.
                    </p>
                  </section>

                  <section id="t-10" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 10 // OFFBOARDING & HANDOVER</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      10. Offboarding & Resource Transfer
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      Upon final settlement, Qavironel executes an orderly handover procedure:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#404040] dark:text-[#A3A3A3]">
                      <li>• Transfer of GitHub repositories with full commit history directly to the Client organization.</li>
                      <li>• Transfer of Vercel / Cloudflare hosting project ownership and custom domain DNS routing.</li>
                      <li>• Delivery of clean environment variable documentation, database seed scripts, and architectural READMEs.</li>
                    </ul>
                  </section>

                  <section id="t-11" className="space-y-4 pt-8 border-t border-[#E5E5E5] dark:border-white/10 scroll-mt-36">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-[#737373]">
                      <Terminal className="w-4 h-4" />
                      <span>SECTION 11 // GOVERNING JURISDICTION</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#0A0A0A] dark:text-[#FAFAFA] tracking-tight">
                      11. Governing Law & Arbitration
                    </h2>
                    <p className="text-sm text-[#404040] dark:text-[#A3A3A3] leading-relaxed font-light">
                      These Terms are governed by principles of international commercial contract law. Any dispute arising out of or related to an engagement shall first be subject to thirty (30) days of good-faith technical mediation. If unresolved, disputes shall be settled through binding commercial arbitration.
                    </p>
                    <div className="pt-4 border-t border-[#E5E5E5] dark:border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#737373] dark:text-[#A3A3A3]">GOVERNANCE INQUIRIES:</span>
                      <a href={`mailto:${companyConfig.email}`} className="text-[#0A0A0A] dark:text-[#737373] font-bold hover:underline">
                        {companyConfig.email}
                      </a>
                    </div>
                  </section>
                </>
              )}

            </main>
          </div>
        </div>
      </div>
    </>
  );
};
