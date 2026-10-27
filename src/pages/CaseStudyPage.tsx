import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, FileText, Play } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { ImageLightbox } from '../components/work/ImageLightbox';
import { ScrollAutoplayVideo } from '../components/media/ScrollAutoplayVideo';
import { projects } from '../data/projects';
import { companyConfig } from '../data/company';
import { ProjectGalleryItem } from '../types';
import { openBookingModal } from '../utils/modalEvents';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);
  const [selectedImage, setSelectedImage] = useState<ProjectGalleryItem | null>(null);

  if (!project) {
    return <div className="site-page case-missing"><div className="site-container"><p className="site-eyebrow">Project not found</p><h1>That page has moved.</h1><Link to="/work" className="text-link"><ArrowLeft aria-hidden="true" /> Back to the work index</Link></div></div>;
  }

  const orderedProjects = [...projects].sort((a, b) => a.order - b.order);
  const currentIndex = orderedProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = orderedProjects[(currentIndex + 1) % orderedProjects.length];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    url: `${companyConfig.siteUrl}/work/${project.slug}`,
    image: `${companyConfig.siteUrl}${project.heroImage}`,
    dateCreated: project.year,
    author: { '@type': 'Organization', name: 'Qavironel Technologies', url: companyConfig.siteUrl },
    keywords: project.technologies.join(', ')
  };

  return (
    <>
      <SEO title={`${project.title} — Case Study`} description={project.summary.slice(0, 155)} structuredData={jsonLd} />
      <div className="site-page case-page">
        <section className="site-container case-intro">
          <Link to="/work" className="case-back"><ArrowLeft aria-hidden="true" /> All projects</Link>
          <div className="case-intro__meta"><span>{project.categoryLabel}</span><span>{project.year}</span></div>
          <div className="case-intro__main"><h1>{project.title}</h1><p>{project.summary}</p></div>
          <div className="case-intro__bottom"><span>{project.status}</span><div>{project.links.map((item) => item.url.startsWith('/') ? <Link key={item.url} to={item.url} className="text-link">{item.label} <ArrowUpRight aria-hidden="true" /></Link> : <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" className="text-link">{item.label} <ArrowUpRight aria-hidden="true" /></a>)}</div></div>
        </section>

        <section className="site-container case-film-section" aria-label={`${project.title} project film`}>
          {project.videoSrc ? (
            <ScrollAutoplayVideo src={project.videoSrc} poster={project.videoPoster ?? project.heroImage} alt={`${project.title} project preview`} badgeText={`${project.title} / project film`} aspectRatio="aspect-[16/9]" className="case-film" overlayGradient={false} />
          ) : (
            <figure className="case-still"><img src={project.heroImage} alt={`${project.title} project preview`} /><figcaption><Play aria-hidden="true" /> Project overview</figcaption></figure>
          )}
          <div className="case-film-section__caption"><span>01 / Project overview</span><span>Scroll to play · sound is off by default</span></div>
        </section>

        <section className="case-facts site-container">
          <div><span>Made for</span><p>{project.audience}</p></div>
          <div><span>Built with</span><ul>{project.technologies.slice(0, 6).map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
          <div><span>Project note</span><p>{project.scopeNote ?? project.whyItMatters}</p></div>
        </section>

        <section className="case-story site-container">
          <article className="case-story__block"><p className="site-eyebrow">The situation</p><h2>What needed<br /><em>to change.</em></h2><p>{project.challenge}</p></article>
          <article className="case-story__block case-story__block--answer"><p className="site-eyebrow">The response</p><h2>How we<br /><em>approached it.</em></h2><p>{project.solution}</p></article>
        </section>

        {project.objectives && project.objectives.length > 0 && (
          <section className="case-objectives">
            <div className="site-container"><div className="case-section-heading"><p className="site-eyebrow">The brief, in practice</p><h2>What the work<br /><em>needed to do.</em></h2></div>
              <ol>{project.objectives.map((objective, index) => <li key={objective}><span>{String(index + 1).padStart(2, '0')}</span><p>{objective}</p><ArrowUpRight aria-hidden="true" /></li>)}</ol>
            </div>
          </section>
        )}

        {project.gallery.length > 0 && (
          <section className="case-gallery site-container">
            <div className="case-section-heading"><p className="site-eyebrow">Screens & details</p><h2>See how it<br /><em>comes together.</em></h2><p>Select an image to view it larger.</p></div>
            <div className="case-gallery__grid">
              {project.gallery.map((item, index) => <button key={item.src} type="button" className="case-gallery__item" onClick={() => setSelectedImage(item)} aria-label={`View image ${index + 1}: ${item.caption ?? item.alt}`}><img src={item.src} alt={item.alt} loading="lazy" /><span><i>{String(index + 1).padStart(2, '0')}</i>{item.caption ?? item.alt}<ArrowUpRight aria-hidden="true" /></span></button>)}
            </div>
          </section>
        )}

        {project.workflow.length > 0 && (
          <section className="case-workflow">
            <div className="site-container"><div className="case-section-heading"><p className="site-eyebrow">A closer look</p><h2>From the user’s<br /><em>point of view.</em></h2></div><ol>{project.workflow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol></div>
          </section>
        )}

        {project.buildNotes && project.buildNotes.length > 0 && (
          <section className="case-build site-container"><div><p className="site-eyebrow">Under the surface</p><h2>Notes from<br /><em>the build.</em></h2></div><ul>{project.buildNotes.map((note) => <li key={note}><FileText aria-hidden="true" />{note}</li>)}</ul></section>
        )}

        <section className="case-contact"><div className="site-container"><div><p className="site-eyebrow site-eyebrow--light">Have a project like this?</p><h2>Let’s talk about<br /><em>what you need.</em></h2></div><div className="case-contact__actions"><button type="button" className="button button--paper" onClick={() => openBookingModal('call')}><CalendarDays aria-hidden="true" /> Book a conversation</button><button type="button" className="button button--outline-light" onClick={() => openBookingModal('quotation')}>Request a quote <ArrowRight aria-hidden="true" /></button><a href={`tel:${companyConfig.phone.replace(/\s+/g, '')}`} className="button button--outline-light">Call: {companyConfig.phone}</a></div></div></section>

        <section className="case-next site-container"><span>Next in the index</span><Link to={`/work/${nextProject.slug}`}><span>{nextProject.title}</span><ArrowUpRight aria-hidden="true" /></Link><Link to="/work" className="case-next__all">All projects <ArrowRight aria-hidden="true" /></Link></section>
      </div>
      <ImageLightbox item={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
};

export default CaseStudyPage;
