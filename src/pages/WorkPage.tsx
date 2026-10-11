import { SEO } from '../components/seo/SEO';
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/work/ProjectCard';
import { ProjectFilters } from '../components/work/ProjectFilters';
import { Button } from '../components/ui/Button';
import { projects, categories } from '../data/projects';
import { ProjectCategory } from '../types';
import { ArrowUpRight } from 'lucide-react';

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

  // Main portfolio vs engineering archive
  const mainProjects = filteredProjects.filter((p) => p.category !== 'Experiments');
  const experimentProjects = filteredProjects.filter((p) => p.category === 'Experiments');

  return (
    <>
      <SEO title="Work" />
      <div className="bg-[#F6F3ED] dark:bg-[#171717] text-[#171717] dark:text-[#F6F3ED] pt-28 sm:pt-36 pb-24 selection:bg-[#C7612E] selection:text-white transition-colors duration-300">
      <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl pb-10 border-b border-[#DEDAD3] dark:border-white/10">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-2">
            Portfolio & Case Studies
          </span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-[#171717] dark:text-[#F6F3ED] tracking-tight">
            Selected work. <br />
            Real problems, engineered solutions.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#77746F] dark:text-[#A1A1AA] font-light leading-relaxed">
            A curated record of client platforms, independent digital products, applied AI systems, and engineering prototypes. Every project is labeled honestly with its true scope, live links, and verified technical outcomes.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mt-8 pb-6 border-b border-[#DEDAD3] dark:border-white/10">
          <ProjectFilters
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            counts={counts}
          />
        </div>

        {/* Primary Projects Grid */}
        {mainProjects.length > 0 && (
          <div className="mt-12 space-y-10">
            {/* Featured Hero Project when All Work is active */}
            {activeCategory === 'All Work' && (
              <ProjectCard 
                project={mainProjects[0]} 
                layout="featured" 
              />
            )}

            {/* Responsive Grid for All Other Projects (Expansive 2-Column Showcase) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              {(activeCategory === 'All Work' ? mainProjects.slice(1) : mainProjects).map((project) => (
                <ProjectCard 
                  key={project.slug} 
                  project={project} 
                  layout="standard" 
                />
              ))}
            </div>
          </div>
        )}

        {/* Engineering Archive & Experiments */}
        {(activeCategory === 'All Work' || activeCategory === 'Experiments') && experimentProjects.length > 0 && (
          <section className="mt-24 pt-16 border-t border-[#DEDAD3] dark:border-white/10">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
                Engineering Archive & Labs
              </span>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#171717] dark:text-[#F6F3ED] tracking-tight">
                Smaller builds, shown with honest weight.
              </h2>
              <p className="mt-3 text-sm text-[#77746F] dark:text-[#A1A1AA] leading-relaxed font-light">
                Public research repositories, cryptography tools, and security awareness demos that demonstrate continued technical practice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experimentProjects.map((item) => (
                <div 
                  key={item.slug}
                  className="bg-white dark:bg-[#20201E] border border-[#DEDAD3] dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between rounded-2xl transition-all duration-300 group shadow-xs hover:border-[#C7612E]/40"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#77746F] dark:text-[#A1A1AA] pb-3 border-b border-[#DEDAD3] dark:border-white/10">
                      <span>{item.status}</span>
                      <span>{item.year}</span>
                    </div>

                    <h3 className="font-sans font-bold text-lg text-[#171717] dark:text-[#F6F3ED] mt-4">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#77746F] dark:text-[#A1A1AA] leading-relaxed font-light">
                      {item.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1">
                      {item.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="text-[0.65rem] font-mono bg-[#F6F3ED] dark:bg-[#1A1A20] px-2 py-0.5 text-[#77746F] dark:text-[#A1A1AA] border border-[#DEDAD3] dark:border-white/10 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DEDAD3] dark:border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#77746F] dark:text-[#A1A1AA]">{item.eyebrow.split('·')[0]}</span>
                    {item.links.length > 0 && (
                      <a 
                        href={item.links[0].url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#C7612E] hover:underline inline-flex items-center gap-1 font-semibold"
                      >
                        Source <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
    </>
  );
};


