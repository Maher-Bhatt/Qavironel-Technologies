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
    <div className="bg-white text-[#0A0A0A] pt-28 sm:pt-36 pb-24 selection:bg-[#E0561B] selection:text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl pb-10 border-b border-[#E5E7EB]">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B] block mb-2">
            Portfolio & Case Studies
          </span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-[#0A0A0A] tracking-tight">
            Selected work. <br />
            Real problems, engineered solutions.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] font-light leading-relaxed">
            A curated record of client platforms, independent digital products, applied AI systems, and engineering prototypes. Every project is labeled honestly with its true scope, live links, and verified technical outcomes.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mt-8 pb-6 border-b border-[#E5E7EB]">
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

            {/* Responsive Grid for All Other Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <section className="mt-24 pt-16 border-t border-[#E5E7EB]">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#E0561B] block mb-2">
                Engineering Archive & Labs
              </span>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight">
                Smaller builds, shown with honest weight.
              </h2>
              <p className="mt-3 text-sm text-[#71717A] leading-relaxed font-light">
                Public research repositories, cryptography tools, and security awareness demos that demonstrate continued technical practice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experimentProjects.map((item) => (
                <div 
                  key={item.slug}
                  className="glass-card p-6 sm:p-7 flex flex-col justify-between rounded-2xl transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#71717A] pb-3 border-b border-[#E5E7EB]">
                      <span>{item.status}</span>
                      <span>{item.year}</span>
                    </div>

                    <h3 className="font-sans font-bold text-lg text-[#0A0A0A] mt-4">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#52525B] leading-relaxed font-light">
                      {item.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1">
                      {item.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="text-[0.65rem] font-mono bg-[#F4F4F5] px-2 py-0.5 text-[#52525B] border border-[#E5E7EB] rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#71717A]">{item.eyebrow.split('·')[0]}</span>
                    {item.links.length > 0 && (
                      <a 
                        href={item.links[0].url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#E0561B] hover:underline inline-flex items-center gap-1 font-semibold"
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
  );
};
