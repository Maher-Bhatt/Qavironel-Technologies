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
  Lock
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

export const AboutPage: React.FC = () => {
  const founder = teamMembers[0];

  return (
    <div className="bg-[#121212] text-[#F6F3ED] pt-28 sm:pt-36 pb-24 selection:bg-[#C7612E] selection:text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl pb-12 border-b border-[#262624]">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-3">
            Studio Origins & Philosophy
          </span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.08] mb-6">
            Design craftsmanship. <br />
            Software engineering rigor.
          </h1>
          <p className="text-lg sm:text-xl text-[#A3A099] font-light leading-relaxed">
            Qavironel Technologies is a global remote-first technology and digital product studio. We build thoughtful software, high-impact web platforms, and applied AI systems for founders and organizations worldwide who value precision.
          </p>
        </div>

        {/* Narrative Section */}
        <section className="py-20 border-b border-[#262624]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7612E]">
                Why Qavironel Exists
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Ambitious ideas deserve more than generic templates.
              </h2>
              <div className="flex items-center gap-2 text-xs font-mono text-[#A3A099] pt-2">
                <Globe className="w-4 h-4 text-[#C7612E]" />
                <span>Remote-first studio · Catering to clients worldwide</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#A3A099] text-base sm:text-lg leading-relaxed font-light">
              <p>
                The modern digital landscape is saturated with bloated themes, slow drag-and-drop page builders, and agency middlemen who charge large retainers while outsourcing the actual programming.
              </p>
              <p>
                We founded <span className="text-white font-semibold">Qavironel Technologies</span> to offer an uncompromising alternative: a direct, founder-led studio that treats every web application, SaaS MVP, and AI workflow as a piece of digital craftsmanship.
              </p>
              <p>
                When you partner with us, you collaborate directly with the lead engineer writing your code. We take pride in sub-second load times, defensive security boundaries, mobile-first touch ergonomics, and clean interfaces that turn visitors into active customers.
              </p>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="py-20 border-b border-[#262624]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
              Our Principles
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
              The standards we build by.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#171717] border border-[#2E2E2B] p-8 space-y-4">
              <div className="w-10 h-10 bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center font-mono font-bold">
                01
              </div>
              <h3 className="font-sans font-bold text-xl text-white">Radical Honesty</h3>
              <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed">
                We never fabricate enterprise client logos, inflate project metrics, or pretend to be an 80-person agency. Our work, open-source repositories, and verified code speak for themselves.
              </p>
            </div>

            <div className="bg-[#171717] border border-[#2E2E2B] p-8 space-y-4">
              <div className="w-10 h-10 bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center font-mono font-bold">
                02
              </div>
              <h3 className="font-sans font-bold text-xl text-white">Security by Default</h3>
              <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed">
                Cybersecurity is not an afterthought. Backed by ethical hacking, CTF competitions, and bug bounties, we build every backend, form, and local runtime with defensive boundaries.
              </p>
            </div>

            <div className="bg-[#171717] border border-[#2E2E2B] p-8 space-y-4">
              <div className="w-10 h-10 bg-[#C7612E]/10 border border-[#C7612E]/20 text-[#C7612E] flex items-center justify-center font-mono font-bold">
                03
              </div>
              <h3 className="font-sans font-bold text-xl text-white">High-Speed Momentum</h3>
              <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed">
                We launch web platforms and commerce storefronts in 1 to 2 weeks because we eliminate bureaucratic review cycles and build with modern, high-velocity tooling.
              </p>
            </div>
          </div>
        </section>

        {/* Sole Founder Leadership Section */}
        <section className="py-20 border-b border-[#262624]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
              Studio Leadership
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Direct founder engineering.
            </h2>
            <p className="mt-3 text-base text-[#A3A099]">
              Direct communication. No intermediaries. Tap directly into the lead engineer architecting your product.
            </p>
          </div>

          <div className="max-w-3xl bg-[#171717] border border-[#2E2E2B] p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#262624]">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-[#20201E] border border-[#2E2E2B] overflow-hidden shrink-0">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-2xl text-white">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7612E] mt-1">
                    {founder.role}
                  </p>
                  <p className="text-xs text-[#77746F] font-mono mt-0.5">
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
                    className="p-2.5 bg-[#121212] border border-[#2E2E2B] text-white hover:text-[#C7612E] transition-colors"
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
                    className="p-2.5 bg-[#121212] border border-[#2E2E2B] text-white hover:text-[#C7612E] transition-colors"
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
                    className="p-2.5 bg-[#121212] border border-[#2E2E2B] text-white hover:text-[#C7612E] transition-colors"
                    aria-label="Founder LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-8 text-sm sm:text-base text-[#A3A099] leading-relaxed font-light">
              {founder.bio}
            </p>

            <div className="mt-8 pt-6 border-t border-[#262624] space-y-3">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                Verified Credentials & Highlights:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#77746F]">
                {founder.credentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-2 bg-[#121212] p-2.5 border border-[#2E2E2B]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C7612E] shrink-0 mt-0.5" />
                    <span className="text-[#DEDAD3] leading-snug">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#262624] flex flex-wrap gap-2">
              {founder.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-[#121212] border border-[#2E2E2B] text-[0.7rem] font-mono text-[#A3A099]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 bg-[#171717] border border-[#2E2E2B] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-bold text-2xl text-white">Let's build something exceptional.</h3>
            <p className="text-sm text-[#77746F] mt-1 font-light">Direct collaboration with the engineer who cares about the craft.</p>
          </div>
          <Button to="/contact" variant="primary" size="lg" showArrow>
            Start a Conversation
          </Button>
        </div>
      </div>
    </div>
  );
};
