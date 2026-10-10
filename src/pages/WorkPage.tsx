import React, { useState, useMemo } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/work/ProjectCard';
import { ProjectFilters } from '../components/work/ProjectFilters';
import { Button } from '../components/ui/Button';
import { projects, categories } from '../data/projects';
import { ProjectCategory } from '../types';
import { ArrowUpRight, Github, Code, Shield } from 'lucide-react';

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
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl pb-10 border-b border-[#DEDAD3]">
          <SectionHeading
            eyebrow="Portfolio & Case Studies"
            title="Selected work. Real problems, engineered solutions."
            description="A curated record of client storefronts, independent digital products, applied AI systems, and academic prototypes. Every project is labeled honestly with its true scope, live links, and verified technical outcomes."
          />
        </div>

        {/* Filter Navigation */}
        <div className="mt-8 pb-6 border-b border-[#DEDAD3]">
          <ProjectFilters
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            counts={counts}
          />
        </div>

        {/* Primary Projects Grid */}
        {mainProjects.length > 0 && (
          <div className="mt-12 space-y-12">
            {mainProjects.map((project, idx) => (
              <ProjectCard 
                key={project.slug} 
                project={project} 
                layout={idx === 0 && activeCategory === 'All Work' ? 'featured' : 'standard'} 
              />
            ))}
          </div>
        )}

        {/* Engineering Archive & Experiments */}
        {(activeCategory === 'All Work' || activeCategory === 'Experiments') && experimentProjects.length > 0 && (
          <section className="mt-24 pt-16 border-t-2 border-[#171717]">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
                Engineering Archive & Labs
              </span>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#171717] tracking-tight">
                Smaller builds, shown with the right weight.
              </h2>
              <p className="mt-3 text-sm text-[#77746F] leading-relaxed">
                Public research repositories, cryptography tools, and security awareness demos that demonstrate continued technical practice. They are not presented as commercial client outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experimentProjects.map((item) => (
                <div 
                  key={item.slug}
                  className="bg-[#FFFFFF] border border-[#DEDAD3] p-6 flex flex-col justify-between hover:border-[#171717]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#77746F] pb-3 border-b border-[#DEDAD3]">
                      <span>{item.status}</span>
                      <span>{item.year}</span>
                    </div>

                    <h3 className="font-sans font-bold text-lg text-[#171717] mt-4">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#77746F] leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1">
                      {item.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="text-[0.65rem] font-mono bg-[#F6F3ED] px-2 py-0.5 text-[#77746F]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DEDAD3] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#77746F]">{item.eyebrow.split('·')[0]}</span>
                    {item.links.length > 0 ? (
                      <a 
                        href={item.links[0].url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#C7612E] hover:underline inline-flex items-center gap-1 font-semibold"
                      >
                        Source <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[#77746F]/60">Archived</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Empty Filter State */}
        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-base text-[#77746F]">No projects found in this category.</p>
            <button
              onClick={() => setActiveCategory('All Work')}
              className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#C7612E] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-24 pt-16 border-t border-[#DEDAD3] flex flex-col md:flex-row items-center justify-between gap-8 bg-[#FFFFFF] p-8 sm:p-12">
          <div>
            <h3 className="font-sans font-bold text-2xl text-[#171717]">
              Have a similar product or website in mind?
            </h3>
            <p className="mt-2 text-sm text-[#77746F]">
              Let's discuss how we can engineer a thoughtful solution for your business.
            </p>
          </div>
          <Button to="/contact" variant="primary" size="lg" showArrow>
            Start a Conversation
          </Button>
        </div>
      </div>
    </div>
  );
};
