import { SEO } from '../components/seo/SEO';
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectFilters } from '../components/work/ProjectFilters';
import { projects, categories } from '../data/projects';
import { ProjectCategory, Project } from '../types';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';

export const WorkPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Work');

  // Filter counts
  const counts = useMemo(() => {
    const acc: Record<string, number> = { 'All Work': projects.length };
    for (const p of projects) {
      acc[p.category] = (acc[p.category] || 0) + 1;
    }
    return acc;
  }, []);

  // Filtered list
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Work') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const kalki = filteredProjects.find(p => p.slug === 'kalki');
  const otherProjects = filteredProjects.filter(p => p.slug !== 'kalki');

  return (
    <>
      <SEO 
        title="Selected Work & Case Studies — Qavironel Technologies" 
        description="Explore verified client platforms, independent products, applied AI systems, and open-source tools engineered by Qavironel Technologies."
      />

      <div className="bg-[#FAFAFA] dark:bg-[#0A0A0A] text-black dark:text-white pt-32 sm:pt-40 pb-28 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
        <div className="max-w-[1700px] w-full mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* ========================================================================= */}
          {/* HEADER SECTION                                                            */}
          {/* ========================================================================= */}
          <div className="pb-12 border-b border-black/[0.08] dark:border-white/10 max-w-4xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 block mb-3">
              Portfolio & Engineering Index
            </span>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl text-black dark:text-white tracking-[-0.04em] leading-[0.98]">
              Selected work.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
              A curated record of client platforms, independent digital products, applied AI systems, and academic tools. Every project is labeled honestly with its true scope, live links, and verified technical outcomes.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* CATEGORY FILTER BAR                                                       */}
          {/* ========================================================================= */}
          <div className="py-8 border-b border-black/[0.08] dark:border-white/10">
            <ProjectFilters
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              counts={counts}
            />
          </div>

          {/* ========================================================================= */}
          {/* FLAGSHIP FEATURE: K.A.L.K.I. (WHEN PRESENT IN FILTER)                     */}
          {/* ========================================================================= */}
          {kalki && (
            <section className="py-16 sm:py-20 border-b border-black/[0.08] dark:border-white/10">
              <div className="rounded-3xl border border-black/10 dark:border-white/15 bg-white dark:bg-zinc-900 p-6 sm:p-10 lg:p-12 shadow-sm">
                
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-black/[0.08] dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-black dark:bg-white animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-black dark:text-white">
                      FLAGSHIP INDEPENDENT PRODUCT · 2025–2026
                    </span>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white font-semibold border border-black/10 dark:border-white/15">
                    Microsoft Store Release ID: 9P6HJPQZBGFQ
                  </span>
                </div>

                {/* 2-Column Editorial Spread */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-10 items-center">
                  
                  {/* Visual Presentation (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <Link 
                      to={`/work/${kalki.slug}`}
                      className="block group overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-black transition-transform duration-300 hover:scale-[1.008]"
                    >
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img 
                          src="/images/projects/kalki-launch.png" 
                          alt="K.A.L.K.I. main tactical desktop HUD" 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[0.65rem] font-mono text-white border border-white/20 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>TACTICAL HUD v1.0.4</span>
                        </div>
                      </div>
                    </Link>

                    {/* Secondary Gallery Previews */}
                    <div className="grid grid-cols-3 gap-3">
                      {kalki.gallery.slice(1, 4).map((item, idx) => (
                        <div key={idx} className="aspect-[16/10] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black">
                          <img 
                            src={item.src} 
                            alt={item.alt} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Editorial Copy & Technical Specs (5 cols) */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <h2 className="font-display font-bold text-4xl sm:text-5xl text-black dark:text-white tracking-tight">
                        <Link to={`/work/${kalki.slug}`} className="hover:opacity-75 transition-opacity">
                          {kalki.title}
                        </Link>
                      </h2>
                      <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-2 font-semibold">
                        {kalki.eyebrow}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {kalki.summary}
                    </p>

                    {/* Verified Metrics */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-black/10 dark:border-white/10">
                      <div>
                        <span className="block font-display font-bold text-lg text-black dark:text-white">Local-First</span>
                        <span className="text-xs font-mono text-zinc-500">Ollama & DPAPI Vault</span>
                      </div>
                      <div>
                        <span className="block font-display font-bold text-lg text-black dark:text-white">Multi-LLM</span>
                        <span className="text-xs font-mono text-zinc-500">Groq LLaMA 3.3 Router</span>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {kalki.technologies.map(t => (
                        <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 border border-black/5 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        to={`/work/${kalki.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black text-xs font-mono uppercase font-bold tracking-wider transition-colors shadow-xs"
                      >
                        <span>Full Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href="https://apps.microsoft.com/detail/9P6HJPQZBGFQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-black dark:text-white hover:opacity-75 transition-opacity"
                      >
                        <span>Microsoft Store</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="https://github.com/Maher-Bhatt/KALKI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-black dark:text-white hover:opacity-75 transition-opacity"
                      >
                        <span>GitHub</span>
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* ASYMMETRIC EDITORIAL PORTFOLIO GRID                                       */}
          {/* ========================================================================= */}
          <div className="py-16 space-y-20">
            {otherProjects.map((project, index) => {
              // Alternating layouts: Even vs Odd creates deliberate editorial visual cadence
              const isEven = index % 2 === 0;

              return (
                <article 
                  key={project.slug} 
                  className="py-12 border-b border-black/10 dark:border-white/10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    
                    {/* Visual Media (6 or 7 cols) */}
                    <div className={`lg:col-span-7 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                      <Link 
                        to={`/work/${project.slug}`}
                        className="block group overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-3 transition-transform duration-300 hover:scale-[1.008]"
                      >
                        <div className="aspect-[16/10] rounded-xl overflow-hidden bg-black">
                          <img 
                            src={project.heroImage || project.gallery[0]?.src} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500" 
                          />
                        </div>
                      </Link>
                    </div>

                    {/* Project Editorial Meta & Story (5 cols) */}
                    <div className={`lg:col-span-5 space-y-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold border border-black/10 dark:border-white/15">
                            {project.category.toUpperCase()}
                          </span>
                          <span className="text-xs font-mono text-zinc-500">
                            {project.year}
                          </span>
                        </div>
                        <h2 className="font-display font-bold text-3xl sm:text-4xl text-black dark:text-white">
                          <Link to={`/work/${project.slug}`} className="hover:opacity-75 transition-opacity">
                            {project.title}
                          </Link>
                        </h2>
                        <p className="text-xs font-mono text-zinc-500 font-semibold">
                          {project.eyebrow}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Verified Metrics */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 py-4 border-y border-black/10 dark:border-white/10">
                          {project.metrics.slice(0, 2).map((m, idx) => (
                            <div key={idx}>
                              <span className="block font-display font-bold text-base text-black dark:text-white">{m.value}</span>
                              <span className="text-xs font-mono text-zinc-500">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 5).map(tech => (
                          <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="pt-2 flex flex-wrap items-center gap-4">
                        <Link
                          to={`/work/${project.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white hover:underline"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        
                        {project.links?.map(link => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-black dark:hover:text-white"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>

                    </div>

                  </div>
                </article>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* CLIENT CALLOUT FOOTER                                                     */}
          {/* ========================================================================= */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Ready to build something tangible?
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white">
                Every project begins with a 30-minute architectural conversation.
              </h3>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black text-xs font-mono uppercase font-bold tracking-wider transition-colors shrink-0"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default WorkPage;
