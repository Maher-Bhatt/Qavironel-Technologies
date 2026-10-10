import { SEO } from '../components/seo/SEO';
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { teamMembers, companyConfig } from '../data/company';
import { 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Terminal, 
  Award, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Lock,
  Calendar,
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { openBookingModal } from '../components/booking/BookingModal';
import { Spatial3DPrism } from '../components/3d/Spatial3DPrism';

export const AboutPage: React.FC = () => {
  const founder = teamMembers[0];

  return (
    <>
      <SEO title="About" />
      <div className="bg-white text-[#0A0A0A] pt-28 sm:pt-36 pb-24 selection:bg-[#E0561B] selection:text-white">
      <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header with 3D Spatial Crystalline Prism */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-[#E5E7EB]">
          <div className="lg:col-span-8 max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B] block mb-3">
              Studio Origins & Philosophy
            </span>
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-[#0A0A0A] tracking-tight leading-[1.08] mb-6">
              Design craftsmanship. <br />
              Software engineering rigor.
            </h1>
            <p className="text-lg sm:text-xl text-[#52525B] font-light leading-relaxed">
              Qavironel Technologies is a global remote-first technology and digital product studio. We build thoughtful software, high-impact web platforms, and applied AI systems for founders and organizations worldwide who value precision.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center justify-center">
            <Spatial3DPrism size={220} />
          </div>
        </div>

        {/* Narrative Section */}
        <section className="py-20 border-b border-[#E5E7EB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E0561B]">
                Why Qavironel Exists
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight leading-tight">
                Ambitious ideas deserve more than generic templates.
              </h2>
              <div className="flex items-center gap-2 text-xs font-mono text-[#52525B] pt-2">
                <Globe className="w-4 h-4 text-[#E0561B]" />
                <span>Remote-first studio · Catering to clients worldwide</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#52525B] text-base sm:text-lg leading-relaxed font-light">
              <p>
                The modern digital landscape is saturated with bloated themes, slow drag-and-drop page builders, and agency middlemen who charge large retainers while outsourcing the actual programming.
              </p>
              <p>
                We founded <span className="text-[#0A0A0A] font-semibold">Qavironel Technologies</span> to offer an uncompromising alternative: a direct, founder-led studio that treats every web application, SaaS MVP, and AI workflow as a piece of digital craftsmanship.
              </p>
              <p>
                When you partner with us, you collaborate directly with the lead engineer writing your code. We take pride in sub-second load times, defensive security boundaries, mobile-first touch ergonomics, and clean interfaces that turn visitors into active customers.
              </p>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="py-20 border-b border-[#E5E7EB]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#E0561B] block mb-2">
              Our Principles
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
              The standards we build by.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl p-8 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#E0561B]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#E0561B]/10 border border-[#E0561B]/20 text-[#E0561B] flex items-center justify-center font-mono font-bold">
                01
              </div>
              <h3 className="font-sans font-bold text-xl text-[#0A0A0A]">Radical Honesty</h3>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                We never fabricate enterprise client logos, inflate project metrics, or pretend to be an 80-person agency. Our work, open-source repositories, and verified code speak for themselves.
              </p>
            </div>

            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl p-8 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#E0561B]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#E0561B]/10 border border-[#E0561B]/20 text-[#E0561B] flex items-center justify-center font-mono font-bold">
                02
              </div>
              <h3 className="font-sans font-bold text-xl text-[#0A0A0A]">Security by Default</h3>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                Cybersecurity is not an afterthought. Backed by ethical hacking, CTF competitions, and bug bounties, we build every backend, form, and local runtime with defensive boundaries.
              </p>
            </div>

            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl p-8 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#E0561B]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#E0561B]/10 border border-[#E0561B]/20 text-[#E0561B] flex items-center justify-center font-mono font-bold">
                03
              </div>
              <h3 className="font-sans font-bold text-xl text-[#0A0A0A]">High-Speed Momentum</h3>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                We launch web platforms and commerce storefronts in 1 to 2 weeks because we eliminate bureaucratic review cycles and build with modern, high-velocity tooling.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Leadership & Architecture Direction */}
        <section className="py-20 border-b border-[#E5E7EB]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#E0561B] block mb-2">
              Studio Leadership & Direction
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
              Technical Direction & Systems Architecture
            </h2>
            <p className="mt-3 text-base text-[#52525B]">
              Direct communication. No intermediaries. Tap directly into the systems engineer architecting your code.
            </p>
          </div>

          <div className="max-w-3xl bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-white border border-[#E5E7EB] overflow-hidden shrink-0">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-2xl text-[#0A0A0A]">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E0561B] mt-1">
                    {founder.role}
                  </p>
                  <p className="text-xs text-[#71717A] font-mono mt-0.5">
                    Remote-First Studio
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {founder.links.website && (
                  <a
                    href={founder.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white border border-[#E5E7EB] text-[#0A0A0A] hover:text-[#E0561B] shadow-xs transition-colors"
                    aria-label="Founder Portfolio"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {founder.links.github && (
                  <a
                    href={founder.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white border border-[#E5E7EB] text-[#0A0A0A] hover:text-[#E0561B] shadow-xs transition-colors"
                    aria-label="Founder GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {founder.links.linkedin && (
                  <a
                    href={founder.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white border border-[#E5E7EB] text-[#0A0A0A] hover:text-[#E0561B] shadow-xs transition-colors"
                    aria-label="Founder LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-8 text-sm sm:text-base text-[#52525B] leading-relaxed font-light">
              {founder.bio}
            </p>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB] space-y-3">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A]">
                Verified Technical Credentials:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#52525B]">
                {founder.credentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-[#E5E7EB]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E0561B] shrink-0 mt-0.5" />
                    <span className="text-[#0A0A0A] leading-snug">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex flex-wrap gap-2">
              {founder.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-white border border-[#E5E7EB] rounded text-[0.7rem] font-mono text-[#52525B]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 glass-card rounded-2xl text-[#0A0A0A] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-bold text-2xl text-[#0A0A0A]">Let's build something exceptional.</h3>
            <p className="text-sm text-[#52525B] mt-1 font-light">Direct collaboration with the engineer who cares about the craft.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openBookingModal('call')}
              className="px-5 py-3 rounded-full bg-[#0A0A0A] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E0561B]" />
              <span>Schedule 30-Min Call</span>
            </button>
            <button
              type="button"
              onClick={() => openBookingModal('quotation')}
              className="px-5 py-3 rounded-full bg-[#F4F4F5] hover:bg-[#E5E7EB] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-colors border border-[#E5E7EB] flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#E0561B]" />
              <span>Request Quote</span>
            </button>
            <Button to="/contact" variant="primary" size="md" showArrow>
              Start Conversation
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


