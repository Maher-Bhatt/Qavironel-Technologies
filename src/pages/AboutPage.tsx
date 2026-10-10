import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { teamMembers, companyConfig } from '../data/company';
import { 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Terminal, 
  Award, 
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl pb-12 border-b border-[#DEDAD3]">
          <SectionHeading
            eyebrow="Studio Origins & Philosophy"
            title="Design craftsmanship. Software engineering rigor."
            description="Qavironel Technologies is an independent technology and digital product studio founded in Gujarat, India. We build thoughtful software, high-impact storefronts, and applied AI systems for clients who value precision."
          />
        </div>

        {/* Narrative Section */}
        <section className="py-16 border-b border-[#DEDAD3]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7612E]">
                Why Qavironel Exists
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#171717] tracking-tight leading-tight">
                Ambitious ideas deserve more than generic templates.
              </h2>
              <div className="flex items-center gap-2 text-xs font-mono text-[#77746F] pt-2">
                <MapPin className="w-4 h-4 text-[#C7612E]" />
                <span>Rooted in Vadodara, Gujarat · Serving global clients</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#77746F] text-base sm:text-lg leading-relaxed">
              <p>
                The digital web is saturated with low-effort WordPress themes, bloated drag-and-drop page builders, and agency middlemen who charge large markups while farming out the actual code to unvetted contractors.
              </p>
              <p>
                We started <span className="text-[#171717] font-semibold">Qavironel Technologies</span> (evolving from Velocity Web) to offer an honest alternative: a direct, founder-led studio that treats every website and software build as a piece of digital craftsmanship.
              </p>
              <p>
                When you partner with us, you speak directly with the engineers writing the code. We take pride in sub-second load times, defensive security boundaries, mobile-first layouts, and clean interfaces that turn visitors into customers.
              </p>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="py-16 border-b border-[#DEDAD3]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
              Our Principles
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#171717] tracking-tight">
              The standards we build by.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFFFFF] border border-[#DEDAD3] p-8 space-y-4">
              <div className="w-10 h-10 bg-[#C7612E]/10 text-[#C7612E] flex items-center justify-center font-mono font-bold">
                01
              </div>
              <h3 className="font-sans font-bold text-xl text-[#171717]">Radical Honesty</h3>
              <p className="text-sm text-[#77746F] leading-relaxed">
                We never fabricate enterprise client logos, inflate project metrics, or pretend to be an 80-person agency. Our work and public repositories speak for themselves.
              </p>
            </div>

            <div className="bg-[#FFFFFF] border border-[#DEDAD3] p-8 space-y-4">
              <div className="w-10 h-10 bg-[#C7612E]/10 text-[#C7612E] flex items-center justify-center font-mono font-bold">
                02
              </div>
              <h3 className="font-sans font-bold text-xl text-[#171717]">Security by Default</h3>
              <p className="text-sm text-[#77746F] leading-relaxed">
                Cybersecurity is not an afterthought. With a background in ethical hacking, CTFs, and bug bounties, we build every backend, form, and local runtime with defensive boundaries.
              </p>
            </div>

            <div className="bg-[#FFFFFF] border border-[#DEDAD3] p-8 space-y-4">
              <div className="w-10 h-10 bg-[#C7612E]/10 text-[#C7612E] flex items-center justify-center font-mono font-bold">
                03
              </div>
              <h3 className="font-sans font-bold text-xl text-[#171717]">High-Speed Momentum</h3>
              <p className="text-sm text-[#77746F] leading-relaxed">
                We launch marketing sites and commerce storefronts in 1 to 2 weeks because we eliminate bureaucratic review cycles and build with modern, high-velocity tooling.
              </p>
            </div>
          </div>
        </section>

        {/* Founding Team */}
        <section className="py-16 border-b border-[#DEDAD3]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
              Leadership & Builders
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#171717] tracking-tight">
              Meet the founders writing your code.
            </h2>
            <p className="mt-3 text-base text-[#77746F]">
              Direct communication. No intermediaries. Tap into the specialists executing your product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="bg-[#FFFFFF] border border-[#DEDAD3] p-8 flex flex-col justify-between hover:border-[#171717]/40 transition-colors"
              >
                <div>
                  <div className="w-20 h-20 bg-[#20201E] overflow-hidden mb-6 border border-[#2E2E2B]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <h3 className="font-sans font-bold text-2xl text-[#171717]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7612E] mt-1 mb-4">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#DEDAD3]">
                    <p className="text-[0.68rem] font-mono font-semibold uppercase tracking-wider text-[#171717]">
                      Verified Proof & Highlights:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#77746F]">
                      {member.credentials.map((cred, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C7612E] shrink-0 mt-0.5" />
                          <span className="leading-snug">{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#DEDAD3] flex items-center gap-3">
                  {member.links.website && (
                    <a
                      href={member.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#171717] hover:text-[#C7612E] inline-flex items-center gap-1"
                    >
                      Portfolio <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#171717] hover:text-[#C7612E] inline-flex items-center gap-1"
                    >
                      GitHub <GithubIcon className="w-3 h-3" />
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#171717] hover:text-[#C7612E] inline-flex items-center gap-1"
                    >
                      LinkedIn <LinkedinIcon className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 bg-[#171717] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-bold text-2xl text-white">Let's build something exceptional.</h3>
            <p className="text-sm text-[#77746F] mt-1">Direct collaboration with engineers who care about the craft.</p>
          </div>
          <Button to="/contact" variant="primary" size="lg" showArrow>
            Start a Conversation
          </Button>
        </div>
      </div>
    </div>
  );
};
