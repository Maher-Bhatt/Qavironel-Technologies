import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { ProjectCard } from '../components/work/ProjectCard';
import { projects } from '../data/projects';
import { services, processSteps } from '../data/services';
import { companyConfig, teamMembers, testimonials } from '../data/company';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Code2, 
  Terminal, 
  Compass,
  CheckCircle2
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="pt-24 sm:pt-28">
      {/* 01. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-20 sm:pt-14 sm:pb-28 border-b border-[#DEDAD3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Eyebrow & Brand Anchor */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-[#C7612E]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#171717]">
              {companyConfig.eyebrow}
            </span>
          </div>

          {/* Hero Typography */}
          <div className="max-w-4xl">
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.04em] text-[#171717] leading-[1.05] editorial-title">
              Digital experiences.{' '}
              <span className="text-[#C7612E] block sm:inline">Engineered for impact.</span>
            </h1>

            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-[#77746F] leading-relaxed max-w-2xl font-normal">
              Qavironel Technologies brings together digital craftsmanship, software engineering, and applied AI to build thoughtful, resilient digital products for ambitious businesses.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Button to="/contact" variant="primary" size="lg" showArrow>
                Start a Project
              </Button>
              <Button to="/work" variant="secondary" size="lg">
                Explore Our Work
              </Button>
            </div>
          </div>

          {/* Hero Live Interface Montage */}
          <div className="mt-14 sm:mt-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Primary Showcase Card: Ztees Storefront */}
              <div className="lg:col-span-7 bg-[#20201E] border border-[#2E2E2B] p-4 sm:p-6 text-white flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#2E2E2B] text-xs font-mono text-[#77746F]">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      LIVE STOREFRONT · PRODUCTION
                    </span>
                    <span>ZTEES.STORE</span>
                  </div>
                  <div className="mt-4 overflow-hidden aspect-[16/10] bg-[#171717]">
                    <img
                      src="/images/work/ztees-hero.webp"
                      alt="Ztees live mobile-first storefront"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#2E2E2B] flex items-center justify-between">
                  <div>
                    <h2 className="font-sans font-bold text-lg text-white">Ztees E-Commerce Storefront</h2>
                    <p className="text-xs text-[#77746F] font-mono mt-0.5">Mobile-first streetwear drop with direct WhatsApp checkout</p>
                  </div>
                  <Link to="/work/ztees" className="p-2 bg-[#C7612E] hover:bg-[#98431F] text-white transition-colors" aria-label="View Ztees case study">
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Secondary Stack: Applied AI HUD + CodeDroid */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* K.A.L.K.I. Preview Card */}
                <div className="bg-[#171717] border border-[#2E2E2B] p-5 text-white group flex-1 flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#2E2E2B] text-xs font-mono text-[#77746F]">
                      <span className="text-[#C7612E]">APPLIED AI ENGINE</span>
                      <span>LOCAL-FIRST</span>
                    </div>
                    <div className="mt-3 aspect-[16/9] overflow-hidden bg-[#20201E]">
                      <img
                        src="/images/work/kalki-standby.webp"
                        alt="K.A.L.K.I. local-first desktop HUD assistant"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#2E2E2B] flex items-center justify-between">
                    <div>
                      <h2 className="font-sans font-semibold text-sm text-white">K.A.L.K.I. Assistant</h2>
                      <p className="text-[0.7rem] text-[#77746F] font-mono">Token-guarded localhost AI system</p>
                    </div>
                    <Link to="/work/kalki" className="text-xs text-[#C7612E] hover:underline flex items-center gap-1 font-mono">
                      Case Study <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* CodeDroid Preview Card */}
                <div className="bg-[#FFFFFF] border border-[#DEDAD3] p-5 group flex-1 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#DEDAD3] text-xs font-mono text-[#77746F]">
                      <span className="text-[#171717] font-semibold">ANDROID RUNTIME</span>
                      <span>18 LANGUAGES</span>
                    </div>
                    <div className="mt-3 aspect-[16/9] overflow-hidden bg-[#F6F3ED]">
                      <img
                        src="/images/work/codedroid-multidevice.webp"
                        alt="CodeDroid mobile IDE on Android"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#DEDAD3] flex items-center justify-between">
                    <div>
                      <h2 className="font-sans font-semibold text-sm text-[#171717]">CodeDroid Mobile IDE</h2>
                      <p className="text-[0.7rem] text-[#77746F] font-mono">On-device Python & JavaScript interpreters</p>
                    </div>
                    <Link to="/work/codedroid" className="text-xs text-[#C7612E] hover:underline flex items-center gap-1 font-mono">
                      Case Study <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. STUDIO INTRODUCTION & PHILOSOPHY */}
      <section className="py-20 sm:py-28 border-b border-[#DEDAD3] bg-[#F6F3ED]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-3">
                Company Positioning
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#171717] tracking-tight leading-tight">
                Not a low-cost commodity freelancer. A product-minded technology partner.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#77746F] text-base sm:text-lg leading-relaxed">
              <p>
                Qavironel Technologies operates from <span className="text-[#171717] font-semibold">Gujarat, India</span>. We evolved out of Velocity Web to reflect our full capabilities across custom software engineering, mobile development environments, and applied AI systems.
              </p>
              <p>
                We do not outsource your code or hide behind account managers. You collaborate directly with the engineers and designers building your product. Every interface is designed with editorial intention, built mobile-first, and optimized for sub-second performance and organic search discoverability.
              </p>
              
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-[#DEDAD3]">
                <div>
                  <p className="text-2xl font-bold font-sans text-[#171717]">Direct</p>
                  <p className="text-xs text-[#77746F] font-mono mt-1">Founder collaboration</p>
                </div>
                <div>
                  <p className="text-2xl font-bold font-sans text-[#171717]">100%</p>
                  <p className="text-xs text-[#77746F] font-mono mt-1">Mobile-first code</p>
                </div>
                <div>
                  <p className="text-2xl font-bold font-sans text-[#171717]">Zero</p>
                  <p className="text-xs text-[#77746F] font-mono mt-1">Bloated page-builders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. SELECTED WORK */}
      <section className="py-20 sm:py-28 border-b border-[#DEDAD3] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#DEDAD3]">
            <SectionHeading
              eyebrow="Curated Portfolio"
              title="Selected work. Real problems, engineered solutions."
              description="Real software, e-commerce storefronts, and independent tools. Each project is clearly labelled with verified evidence, technologies, and public links."
            />
            <Button to="/work" variant="secondary" size="md" showArrow>
              View All 10+ Projects
            </Button>
          </div>

          {/* Project Showcase Grid */}
          <div className="mt-12 space-y-12">
            {featuredProjects.map((project, idx) => (
              <ProjectCard 
                key={project.slug} 
                project={project} 
                layout={idx === 0 ? 'featured' : 'standard'} 
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button to="/work" variant="primary" size="lg" showArrow>
              Explore Complete Portfolio & Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* 04. CAPABILITIES & SERVICES */}
      <section className="py-20 sm:py-28 border-b border-[#DEDAD3] bg-[#F6F3ED]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Disciplines & Services"
            title="Capabilities we genuinely deliver."
            description="We focus strictly on the technologies and disciplines our team has mastered. No superficial consulting claims or unverified enterprise promises."
          />

          <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div 
                key={svc.id}
                className="bg-[#FFFFFF] border border-[#DEDAD3] p-8 flex flex-col justify-between hover:border-[#171717]/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#77746F] pb-4 border-b border-[#DEDAD3]">
                    <span className="text-[#C7612E] font-semibold">{svc.number}</span>
                    <span>DISCIPLINE</span>
                  </div>

                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#171717] mt-5 group-hover:text-[#C7612E] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#77746F] leading-relaxed">
                    {svc.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold">
                      Key Deliverables:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#77746F]">
                      {svc.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#C7612E] mt-0.5">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#DEDAD3] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {svc.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="text-[0.65rem] font-mono bg-[#F6F3ED] px-2 py-0.5 text-[#77746F]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/services#${svc.id}`} 
                    className="text-xs font-mono text-[#171717] hover:text-[#C7612E] inline-flex items-center gap-1 transition-colors"
                  >
                    Details <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/services" variant="secondary" size="md" showArrow>
              Read Full Service Specifications
            </Button>
          </div>
        </div>
      </section>

      {/* 05. DIFFERENTIATION: WHY QAVIRONEL */}
      <section className="py-20 sm:py-28 border-b border-[#DEDAD3] bg-[#20201E] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E] block">
                Engineering Values
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-[#FFFFFF]">
                How we build makes the difference.
              </h2>
              <p className="text-base text-[#77746F] leading-relaxed">
                We believe that software craftsmanship is not an accident. It is the result of disciplined decisions made at every level of the stack.
              </p>
              <div className="pt-2">
                <Button to="/about" variant="primary" size="md" showArrow>
                  Our Philosophy & Story
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#171717] border border-[#2E2E2B] space-y-3">
                <div className="w-10 h-10 bg-[#C7612E]/10 text-[#C7612E] flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-lg text-white">Mobile-First by Default</h3>
                <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed">
                  Over 75% of your visitors browse on phones. We design touch targets, typography, and viewport layouts for handheld ergonomics first.
                </p>
              </div>

              <div className="p-6 bg-[#171717] border border-[#2E2E2B] space-y-3">
                <div className="w-10 h-10 bg-[#C7612E]/10 text-[#C7612E] flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-lg text-white">Sub-Second Performance</h3>
                <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed">
                  Fast sites convert better and rank higher. We eliminate heavy libraries, optimize asset delivery, and tune Core Web Vitals to score 95+.
                </p>
              </div>

              <div className="p-6 bg-[#171717] border border-[#2E2E2B] space-y-3">
                <div className="w-10 h-10 bg-[#C7612E]/10 text-[#C7612E] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-lg text-white">Security-Aware Thinking</h3>
                <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed">
                  Backed by cybersecurity CTF and bug-bounty experience, we enforce strict CSP headers, input validation, and protected API boundaries.
                </p>
              </div>

              <div className="p-6 bg-[#171717] border border-[#2E2E2B] space-y-3">
                <div className="w-10 h-10 bg-[#C7612E]/10 text-[#C7612E] flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-lg text-white">Zero Account-Manager Fog</h3>
                <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed">
                  No intermediaries playing telephone with your requirements. You speak directly to the engineers writing and shipping your code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. PROCESS TIMELINE */}
      <section className="py-20 sm:py-28 border-b border-[#DEDAD3] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="The Build Lifecycle"
            title="A clear, predictable process from idea to launch."
            description="We move fast without cutting corners. Here is how we take you from a high-level concept to a production-ready system."
          />

          <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div 
                key={step.step}
                className="border-t-2 border-[#171717] pt-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-[#C7612E]">{step.step}</span>
                    <span className="text-[0.65rem] font-mono uppercase tracking-wider text-[#77746F]">PHASE</span>
                  </div>
                  <h3 className="font-sans font-bold text-xl text-[#171717] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#77746F] leading-relaxed">
                    {step.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DEDAD3] text-xs text-[#77746F]/80">
                  {step.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. TESTIMONIALS / VERIFIED PROOF */}
      <section className="py-20 sm:py-28 border-b border-[#DEDAD3] bg-[#F6F3ED]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Verified Feedback"
            title="What people say about building with us."
            description="Genuine feedback from real clients and platform users—without fabricated quotes or unverified corporate logos."
          />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-[#FFFFFF] border border-[#DEDAD3] p-8 sm:p-10 flex flex-col justify-between shadow-sm"
              >
                <blockquote className="text-base sm:text-lg text-[#171717] font-normal leading-relaxed italic">
                  "{t.quote}"
                </blockquote>
                <div className="mt-8 pt-6 border-t border-[#DEDAD3] flex items-center justify-between">
                  <div>
                    <p className="font-sans font-bold text-sm text-[#171717]">{t.author}</p>
                    <p className="text-xs text-[#77746F] font-mono mt-0.5">{t.role}, {t.organization}</p>
                  </div>
                  {t.projectSlug && (
                    <Link to={`/work/${t.projectSlug}`} className="text-xs font-mono text-[#C7612E] hover:underline flex items-center gap-1">
                      Case Study <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. FINAL CTA SECTION */}
      <section className="py-20 sm:py-28 bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E]">
              Get In Touch
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white editorial-title">
              Have something worth building?
            </h2>
            <p className="text-base sm:text-lg text-[#77746F] max-w-2xl mx-auto leading-relaxed">
              Tell us what you're working on, what needs to improve, and where you'd like to go. We will shape a clear, honest project scope and reply within 24 hours.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg" showArrow>
                Start a Conversation
              </Button>
              <a
                href={companyConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#20201E] hover:bg-[#2A2A28] text-white border border-[#2E2E2B] text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center gap-2"
              >
                <span>Direct WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#C7612E]" />
              </a>
            </div>
            <p className="text-xs text-[#77746F] pt-4 font-mono">
              Vadodara, Gujarat · Working remotely with Indian & International founders
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
