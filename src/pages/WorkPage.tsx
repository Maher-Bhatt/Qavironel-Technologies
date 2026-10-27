import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { ProjectVideoPreview } from '../components/work/ProjectVideoPreview';
import { ProjectFilters } from '../components/work/ProjectFilters';
import { projects, categories } from '../data/projects';
import { companyConfig } from '../data/company';
import { ProjectCategory } from '../types';

const projectNotes: Record<string, string> = {
  kalki: 'A local-first desktop assistant with voice input, flexible model routing, and guarded system actions.',
  ztees: 'A direct-to-customer streetwear shop built around product drops and an easy ordering flow.',
  'classic-infrastructure': 'A clear digital front door for a civil engineering team and its work in the field.',
  'civic-sathi': 'A civic platform helping residents and municipal teams follow local issues from report to resolution.',
  codedroid: 'An Android development environment bringing code editing and device tools into one portable workflow.',
  'itm-notes': 'A study portal organizing course resources and revision tools for engineering students.'
};

export const WorkPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Work');
  const counts = useMemo(() => {
    const result: Record<string, number> = { 'All Work': projects.length };
    projects.forEach((project) => { result[project.category] = (result[project.category] ?? 0) + 1; });
    return result;
  }, []);
  const visibleProjects = useMemo(
    () => (activeCategory === 'All Work' ? [...projects].sort((a, b) => a.order - b.order) : projects.filter((project) => project.category === activeCategory).sort((a, b) => a.order - b.order)),
    [activeCategory]
  );

  return (
    <>
      <SEO
        title="Selected Work & Case Studies"
        description="Selected client work and independent products by Qavironel: websites, commerce platforms, software, and applied AI."
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Selected Work — Qavironel Technologies',
          url: `${companyConfig.siteUrl}/work`,
          mainEntity: { '@type': 'ItemList', itemListElement: projects.map((project, index) => ({ '@type': 'ListItem', position: index + 1, name: project.title, url: `${companyConfig.siteUrl}/work/${project.slug}` })) }
        }}
      />

      <div className="site-page work-page">
        <section className="work-intro">
          <div className="site-container">
            <div className="work-intro__top"><p className="site-eyebrow">Project index / 2025—26</p><span>{visibleProjects.length.toString().padStart(2, '0')} projects</span></div>
            <div className="work-intro__main"><h1>Selected<br /><em>work.</em></h1><p>Different problems call for different answers. Here’s a closer look at the products, websites, and systems we’ve helped make.</p></div>
            <ProjectFilters categories={categories} activeCategory={activeCategory} onSelectCategory={setActiveCategory} counts={counts} />
          </div>
        </section>

        <section className="site-container work-index" aria-live="polite" aria-label="Selected projects">
          {visibleProjects.map((project, index) => (
            <article key={project.slug} className={`work-index__item${index % 2 === 1 ? ' work-index__item--reverse' : ''}`}>
              <div className="work-index__meta"><span><i>{String(index + 1).padStart(2, '0')}</i> {project.categoryLabel}</span><span>{project.year}</span></div>
              <div className="work-index__body">
                <Link to={`/work/${project.slug}`} className="work-index__image" aria-label={`Read the ${project.title} case study`}>
                  <ProjectVideoPreview project={project} priority={index === 0} />
                  <span className="work-index__image-label">{project.status}</span>
                  <span className="work-index__image-arrow"><ArrowUpRight aria-hidden="true" /></span>
                </Link>
                <div className="work-index__copy">
                  <p className="site-eyebrow">{project.eyebrow}</p>
                  <h2>{project.title}</h2>
                  <p>{projectNotes[project.slug] ?? project.summary}</p>
                  <div className="work-index__tags">{project.technologies.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <Link to={`/work/${project.slug}`} className="text-link">Read the case study <ArrowUpRight aria-hidden="true" /></Link>
                </div>
              </div>
            </article>
          ))}
          {visibleProjects.length === 0 && <p className="work-index__empty">No projects in this category yet.</p>}
        </section>

        <section className="work-outro"><div className="site-container"><p className="site-eyebrow">Your project could be next</p><h2>Have something that<br /><em>needs making?</em></h2><Link to="/contact" className="button button--dark">Tell us about it <ArrowUpRight aria-hidden="true" /></Link></div></section>
      </div>
    </>
  );
};

export default WorkPage;
