import { SEO } from '../components/seo/SEO';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/company';
import { ProjectGalleryItem } from '../types';
import { 
  ArrowRight, 
  Calendar, 
  Globe, 
  ShieldCheck, 
  ExternalLink,
  Maximize2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { openBookingModal } from '../utils/modalEvents';
import { Spatial3DPrism } from '../components/3d/Spatial3DPrism';
import { ImageLightbox } from '../components/work/ImageLightbox';

export const AboutPage: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<ProjectGalleryItem | null>(null);

  const maher = teamMembers.find(m => m.name.toLowerCase().includes('maher')) || teamMembers[0];
  const anurag = teamMembers.find(m => m.name.toLowerCase().includes('anurag')) || teamMembers[1];
  const jaydev = teamMembers.find(m => m.name.toLowerCase().includes('jaydev')) || teamMembers[2];
  const dhyani = teamMembers.find(m => m.name.toLowerCase().includes('dhyani')) || teamMembers[3];
  const aayushi = teamMembers.find(m => m.name.toLowerCase().includes('aayushi')) || teamMembers[4];

  return (
    <>
      <SEO 
        title="About the Studio & Founding Team" 
        description="Meet founders Maher Bhatt & Anurag Pandey. Founder-led engineering studio delivering resilient web architectures, local-first AI, and custom software."
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          mainEntity: {
            '@type': 'Organization',
            name: 'Qavironel Technologies',
            url: 'https://qavironel.com',
            founder: [
              {
                '@type': 'Person',
                name: 'Maher Bhatt',
                jobTitle: 'Founder & Lead Systems Engineer',
                sameAs: [
                  'https://github.com/Maher-Bhatt',
                  'https://linkedin.com/in/maher-bhatt-206035362',
                  'https://maherbhatt.me'
                ]
              },
              {
                '@type': 'Person',
                name: 'Anurag Pandey',
                jobTitle: 'Co-Founder & Backend Engineering Lead',
                sameAs: []
              }
            ]
          }
        }}
      />

      <div className="bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#F4F4F5] pt-32 sm:pt-40 pb-28 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
        <div className="max-w-[1700px] w-full mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* ========================================================================= */}
          {/* 01. EDITORIAL HEADER WITH 3D SPATIAL PRISM                                */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-black/10 dark:border-white/10">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 block">
                Studio Origins & Leadership
              </span>
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl text-black dark:text-white tracking-[-0.04em] leading-[0.98]">
                Design craftsmanship. <br />
                Software rigor.
              </h1>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-3xl">
                Qavironel Technologies is an independent software engineering and digital product studio. We build thoughtful software, high-impact web platforms, and applied AI systems for founders and organizations worldwide who value precision.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                <Spatial3DPrism size={280} className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 02. STUDIO METRICS BAND (4 PILLARS)                                       */}
          {/* ========================================================================= */}
          <div className="py-12 border-b border-black/10 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 shadow-xs space-y-2">
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Operating Model</span>
              <h3 className="font-display font-bold text-xl text-black dark:text-white">Remote-First Studio</h3>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Global Client Reach</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 shadow-xs space-y-2">
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Delivery Cadence</span>
              <h3 className="font-display font-bold text-xl text-black dark:text-white">1–2 Week Sprints</h3>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">High-Velocity Shipping</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 shadow-xs space-y-2">
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Security Posture</span>
              <h3 className="font-display font-bold text-xl text-black dark:text-white">Defensive by Default</h3>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">OWASP & DPAPI Boundaries</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 shadow-xs space-y-2">
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Collaboration</span>
              <h3 className="font-display font-bold text-xl text-black dark:text-white">100% Direct Access</h3>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Zero Middlemen or Fog</p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 03. STUDIO MANIFESTO & ORIGIN STORY                                       */}
          {/* ========================================================================= */}
          <section className="py-20 border-b border-black/10 dark:border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold block">
                  Why We Built Qavironel
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-black dark:text-white tracking-tight leading-tight">
                  Ambitious ideas deserve more than generic templates.
                </h2>
                <div className="pt-4 flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <Globe className="w-3.5 h-3.5 text-black dark:text-white" />
                  <span>Remote-First Studio · Serving Ambitious Clients Globally</span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  The modern digital landscape is saturated with bloated themes, slow drag-and-drop page builders, and agency middlemen who charge large retainers while outsourcing the actual programming.
                </p>
                <p>
                  We founded <strong className="font-semibold text-black dark:text-white">Qavironel Technologies</strong> to offer an uncompromising alternative: a direct, founder-led studio that treats every web application, SaaS MVP, and AI workflow as a piece of digital craftsmanship.
                </p>
                <p>
                  When you partner with us, you collaborate directly with the founding engineers architecting your software. We take pride in sub-second load times, defensive security boundaries, type safety, and clean handover with zero proprietary framework lock-in.
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* ========================================================================= */}
          {/* 04. PROMINENT TECHNICAL LEADERSHIP (CIRCULAR FROSTED HALO PORTRAITS)      */}
          {/* ========================================================================= */}
          <section id="team" className="py-20 border-b border-black/10 dark:border-white/10 scroll-mt-28">
            <div className="mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold block mb-2">
                Technical Leadership & Core Engineering
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-black dark:text-white tracking-tight">
                Direct collaboration with senior engineers.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* Founder & Lead Systems Engineer: Maher Bhatt */}
              <div className="glass-card-luxury rounded-3xl p-7 sm:p-9 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  {/* Circular Avatar + Title Lockup */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 sm:gap-6">
                    {/* Concentric Frosted Halo Circular Avatar */}
                    <div className="relative shrink-0 p-1.5 rounded-full bg-white/70 dark:bg-white/[0.08] backdrop-blur-md border border-black/10 dark:border-white/20 shadow-sm">
                      <div 
                        onClick={() => setLightboxItem({ 
                          src: maher.image, 
                          alt: `${maher.name} — ${maher.role}`,
                          caption: `${maher.name} · Founder & Lead Systems Engineer · Qavironel Technologies` 
                        })}
                        className="group w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden cursor-pointer relative"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            setLightboxItem({ 
                              src: maher.image, 
                              alt: `${maher.name} — ${maher.role}`,
                              caption: `${maher.name} · Founder & Lead Systems Engineer · Qavironel Technologies` 
                            });
                          }
                        }}
                        aria-label={`View high-resolution portrait of ${maher.name}`}
                      >
                        <img 
                          src={maher.image} 
                          alt={`${maher.name}, Founder & Technical Lead`} 
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Maximize2 className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      {/* Active Status Beacon */}
                      <span className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-zinc-950 ring-2 ring-white dark:ring-zinc-900 shadow-xs" title="Founder & Lead Architect">
                        <span className="h-2 w-2 rounded-full bg-black dark:bg-white animate-pulse" />
                      </span>
                    </div>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <span className="text-[0.68rem] font-mono font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                          Founder & Technical Lead
                        </span>
                        <span className="text-[0.62rem] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/10">
                          Active Lead
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-black dark:text-white tracking-tight">
                        {maher.name}
                      </h3>
                      <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                        Systems Architecture · Applied AI · Web Craftsmanship
                      </p>
                      <div className="pt-1 flex items-center justify-center sm:justify-start gap-2 text-[0.7rem] font-mono text-zinc-500 dark:text-zinc-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-black dark:text-white" />
                        <span>Direct Client Collaboration</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                    {maher.bio}
                  </p>

                  {/* Credentials / Focus */}
                  <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white">
                      Core Architectural Focus:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {maher.skills.map(skill => (
                        <span key={skill} className="text-xs font-mono px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social Action Buttons */}
                <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-2.5 text-xs font-mono">
                  {maher.links?.github && (
                    <a 
                      href={maher.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/15 dark:border-white/20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white hover:border-black/40 dark:hover:border-white/40 hover:bg-black/5 dark:hover:bg-white/10 transition-all font-medium shadow-2xs hover:scale-105 active:scale-95"
                    >
                      <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {maher.links?.linkedin && (
                    <a 
                      href={maher.links.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/15 dark:border-white/20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white hover:border-black/40 dark:hover:border-white/40 hover:bg-black/5 dark:hover:bg-white/10 transition-all font-medium shadow-2xs hover:scale-105 active:scale-95"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {maher.links?.website && (
                    <a 
                      href={maher.links.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/15 dark:border-white/20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white hover:border-black/40 dark:hover:border-white/40 hover:bg-black/5 dark:hover:bg-white/10 transition-all font-medium shadow-2xs hover:scale-105 active:scale-95"
                    >
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      <span>maherbhatt.me</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Co-Founder & Backend Engineering Lead: Anurag Pandey */}
              <div className="glass-card-luxury rounded-3xl p-7 sm:p-9 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  {/* Circular Avatar + Title Lockup */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 sm:gap-6">
                    {/* Concentric Frosted Halo Circular Avatar */}
                    <div className="relative shrink-0 p-1.5 rounded-full bg-white/70 dark:bg-white/[0.08] backdrop-blur-md border border-black/10 dark:border-white/20 shadow-sm">
                      <div 
                        onClick={() => setLightboxItem({ 
                          src: anurag.image, 
                          alt: `${anurag.name} — ${anurag.role}`,
                          caption: `${anurag.name} · Co-Founder & Backend Engineering Lead · Qavironel Technologies` 
                        })}
                        className="group w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden cursor-pointer relative"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            setLightboxItem({ 
                              src: anurag.image, 
                              alt: `${anurag.name} — ${anurag.role}`,
                              caption: `${anurag.name} · Co-Founder & Backend Engineering Lead · Qavironel Technologies` 
                            });
                          }
                        }}
                        aria-label={`View high-resolution portrait of ${anurag.name}`}
                      >
                        <img 
                          src={anurag.image} 
                          alt={`${anurag.name}, Co-Founder & Backend Engineering Lead`} 
                          className="w-full h-full object-cover object-[50%_25%] group-hover:scale-110 transition-transform duration-500 ease-out"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Maximize2 className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      {/* Active Status Beacon */}
                      <span className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-zinc-950 ring-2 ring-white dark:ring-zinc-900 shadow-xs" title="Co-Founder & Backend Lead">
                        <span className="h-2 w-2 rounded-full bg-black dark:bg-white animate-pulse" />
                      </span>
                    </div>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <span className="text-[0.68rem] font-mono font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                          Co-Founder & Backend Lead
                        </span>
                        <span className="text-[0.62rem] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/10">
                          Active Lead
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-black dark:text-white tracking-tight">
                        {anurag.name}
                      </h3>
                      <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                        Server Architecture · Distributed APIs · Data Resilience
                      </p>
                      <div className="pt-1 flex items-center justify-center sm:justify-start gap-2 text-[0.7rem] font-mono text-zinc-500 dark:text-zinc-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-black dark:text-white" />
                        <span>High-Throughput Reliability</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                    {anurag.bio}
                  </p>

                  {/* Credentials / Focus */}
                  <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white">
                      Core Architectural Focus:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {anurag.skills.map(skill => (
                        <span key={skill} className="text-xs font-mono px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-zinc-500 dark:text-zinc-400">Distributed APIs & Server Architecture</span>
                  <span className="px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 text-[0.68rem] text-zinc-700 dark:text-zinc-300 font-medium">
                    Backend Core
                  </span>
                </div>
              </div>

              {/* Core Member: Jaydev Gohil */}
              <div className="glass-card-luxury rounded-3xl p-7 sm:p-9 flex flex-col justify-between space-y-6 md:col-span-2 lg:col-span-1">
                <div className="space-y-6">
                  {/* Circular Avatar + Title Lockup */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 sm:gap-6">
                    {/* Concentric Frosted Halo Circular Avatar */}
                    <div className="relative shrink-0 p-1.5 rounded-full bg-white/70 dark:bg-white/[0.08] backdrop-blur-md border border-black/10 dark:border-white/20 shadow-sm">
                      <div 
                        onClick={() => setLightboxItem({ 
                          src: jaydev.image, 
                          alt: `${jaydev.name} — ${jaydev.role}`,
                          caption: `${jaydev.name} · Core Member · Full-Stack & Systems Architecture · Qavironel Technologies` 
                        })}
                        className="group w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden cursor-pointer relative"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            setLightboxItem({ 
                              src: jaydev.image, 
                              alt: `${jaydev.name} — ${jaydev.role}`,
                              caption: `${jaydev.name} · Core Member · Full-Stack & Systems Architecture · Qavironel Technologies` 
                            });
                          }
                        }}
                        aria-label={`View high-resolution portrait of ${jaydev.name}`}
                      >
                        <img 
                          src={jaydev.image} 
                          alt={`${jaydev.name}, Core Member`} 
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Maximize2 className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      {/* Active Status Beacon */}
                      <span className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-zinc-950 ring-2 ring-white dark:ring-zinc-900 shadow-xs" title="Core Member">
                        <span className="h-2 w-2 rounded-full bg-black dark:bg-white animate-pulse" />
                      </span>
                    </div>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <span className="text-[0.68rem] font-mono font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                          Core Member
                        </span>
                        <span className="text-[0.62rem] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/10">
                          Systems
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-black dark:text-white tracking-tight">
                        {jaydev.name}
                      </h3>
                      <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                        Full-Stack Architecture · Interactive Systems · UI/UX
                      </p>
                      <div className="pt-1 flex items-center justify-center sm:justify-start gap-2 text-[0.7rem] font-mono text-zinc-500 dark:text-zinc-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-black dark:text-white" />
                        <span>Direct Technical Delivery</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                    {jaydev.bio}
                  </p>

                  {/* Credentials / Focus */}
                  <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white">
                      Core Architectural Focus:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {jaydev.skills.map(skill => (
                        <span key={skill} className="text-xs font-mono px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-zinc-500 dark:text-zinc-400">Full-Stack Architecture & Reactive Systems</span>
                  <span className="px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 text-[0.68rem] text-zinc-700 dark:text-zinc-300 font-medium">
                    Full-Stack Core
                  </span>
                </div>
              </div>

            </div>
          </section>

          {/* ========================================================================= */}
          {/* 05. COMPLEMENTARY FOUNDING TEAM MEMBERS (CIRCULAR FROSTED HALO CARDS)     */}
          {/* ========================================================================= */}
          <section className="py-20 border-b border-black/10 dark:border-white/10">
            <div className="mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold block mb-2">
                Founding Team Members
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white tracking-tight">
                Frontend implementation & operational coordination.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Aayushi Jasani */}
              <div className="glass-card-luxury rounded-3xl p-7 sm:p-8 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5">
                    {/* Concentric Frosted Halo Circular Avatar */}
                    <div className="relative shrink-0 p-1.5 rounded-full bg-white/70 dark:bg-white/[0.08] backdrop-blur-md border border-black/10 dark:border-white/20 shadow-sm">
                      <div 
                        onClick={() => setLightboxItem({ 
                          src: aayushi.image, 
                          alt: `${aayushi.name} — Founding Team Member`,
                          caption: `${aayushi.name} · Founding Team Member · Frontend & Operations` 
                        })}
                        className="group w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden cursor-pointer relative"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            setLightboxItem({ 
                              src: aayushi.image, 
                              alt: `${aayushi.name} — Founding Team Member`,
                              caption: `${aayushi.name} · Founding Team Member · Frontend & Operations` 
                            });
                          }
                        }}
                        aria-label={`View high-resolution portrait of ${aayushi.name}`}
                      >
                        <img 
                          src={aayushi.image} 
                          alt={aayushi.name}
                          className="w-full h-full object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-500 ease-out" 
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Maximize2 className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[0.68rem] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                        Founding Team Member
                      </span>
                      <h3 className="font-display font-bold text-2xl text-black dark:text-white">
                        {aayushi.name}
                      </h3>
                      <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        Frontend Implementation & Operations Support
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                    {aayushi.bio}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/10 dark:border-white/10">
                  {aayushi.credentials.map(c => (
                    <span key={c} className="text-[0.7rem] font-mono px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dhyani Parikh */}
              <div className="glass-card-luxury rounded-3xl p-7 sm:p-8 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5">
                    {/* Concentric Frosted Halo Circular Avatar */}
                    <div className="relative shrink-0 p-1.5 rounded-full bg-white/70 dark:bg-white/[0.08] backdrop-blur-md border border-black/10 dark:border-white/20 shadow-sm">
                      <div 
                        onClick={() => setLightboxItem({ 
                          src: dhyani.image, 
                          alt: `${dhyani.name} — Founding Team Member`,
                          caption: `${dhyani.name} · Founding Team Member · Frontend & Operations` 
                        })}
                        className="group w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden cursor-pointer relative"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            setLightboxItem({ 
                              src: dhyani.image, 
                              alt: `${dhyani.name} — Founding Team Member`,
                              caption: `${dhyani.name} · Founding Team Member · Frontend & Operations` 
                            });
                          }
                        }}
                        aria-label={`View high-resolution portrait of ${dhyani.name}`}
                      >
                        <img 
                          src={dhyani.image} 
                          alt={dhyani.name}
                          className="w-full h-full object-cover object-[50%_25%] group-hover:scale-110 transition-transform duration-500 ease-out" 
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Maximize2 className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[0.68rem] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                        Founding Team Member
                      </span>
                      <h3 className="font-display font-bold text-2xl text-black dark:text-white">
                        {dhyani.name}
                      </h3>
                      <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        Frontend Implementation & Project Coordination
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                    {dhyani.bio}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-black/10 dark:border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {dhyani.credentials.map(c => (
                      <span key={c} className="text-[0.7rem] font-mono px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
                        {c}
                      </span>
                    ))}
                  </div>
                  {dhyani.links?.linkedin && (
                    <a 
                      href={dhyani.links.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/15 dark:border-white/20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white hover:border-black/40 dark:hover:border-white/40 hover:bg-black/5 dark:hover:bg-white/10 transition-all text-xs font-mono font-medium shadow-2xs hover:scale-105 active:scale-95"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </section>

          {/* ========================================================================= */}
          {/* 06. CALL TO ACTION (LUXURY BLACK & WHITE)                                 */}
          {/* ========================================================================= */}
          <section className="mt-16 glass-card-luxury p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Work Directly with Our Founders
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white">
                Let's turn your concept into production software.
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-glass-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-mono uppercase font-bold tracking-wider transition-all shadow-sm hover:-translate-y-0.5"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => openBookingModal('call')}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white border border-black/15 dark:border-white/20 text-xs font-mono uppercase font-bold tracking-wider transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                <span>Book 30m Discovery</span>
              </button>
            </div>
          </section>

        </div>
      </div>

      {/* High-Resolution Portrait Lightbox Modal */}
      <ImageLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
};

export default AboutPage;
