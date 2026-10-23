import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { services, processSteps } from '../data/services';
import { projects } from '../data/projects';

export const ServicesPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex] ?? services[0];
  const example = projects.find((project) => project.slug === activeService.exampleProjectSlug);

  return (
    <>
      <SEO title="Services" description="Product design, custom websites, software engineering, and applied AI from Qavironel, an independent studio in Vadodara, India." />
      <div className="site-page services-page">
        <section className="services-intro">
          <div className="site-container">
            <div className="services-intro__top"><p className="site-eyebrow">Design / Product / Engineering</p><span>Our practice · 01—05</span></div>
            <div className="services-intro__body"><h1>Make the right<br /><em>thing, well.</em></h1><div><p>Bring us a website, product, or workflow that needs attention. We’ll help find the useful shape, then design and build it with you.</p><Link to="/contact" className="text-link">Discuss a project <ArrowUpRight aria-hidden="true" /></Link></div></div>
            <div className="services-intro__index"><span>What we work across</span><p>Web & commerce <i>·</i> Digital products <i>·</i> Applied AI <i>·</i> Product design <i>·</i> Software</p></div>
          </div>
        </section>

        <section className="service-explorer" aria-label="Our services">
          <div className="site-container service-explorer__grid">
            <div className="service-explorer__choices">
              <p className="site-eyebrow">Choose a starting point</p>
              <div className="service-selector">
                {services.map((service, index) => (
                  <button
                    type="button"
                    id={service.id}
                    key={service.id}
                    aria-expanded={activeIndex === index}
                    aria-controls="active-service-detail"
                    onClick={() => setActiveIndex(index)}
                    className={`service-choice${activeIndex === index ? ' is-active' : ''}`}
                  >
                    <span>{service.number}</span><span>{service.title}{activeIndex === index && <small>{service.tagline}</small>}</span><ArrowUpRight aria-hidden="true" />
                  </button>
                ))}
              </div>
              <p className="service-explorer__aside">Each engagement is shaped around its people, constraints, and goals. We’ll work with you to find the right mix.</p>
            </div>

            <article className="service-detail" id="active-service-detail" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={activeService.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}>
                  <figure className="service-detail__image">
                    {activeService.image && <img src={activeService.image} alt={activeService.imageCaption ?? activeService.title} loading="lazy" />}
                    <figcaption><span>{activeService.imageCaption ?? activeService.title}</span><span>{activeService.number} / 0{services.length}</span></figcaption>
                  </figure>
                  <div className="service-detail__copy">
                    <p className="site-eyebrow">{activeService.badge ?? 'Our practice'}</p>
                    <h2>{activeService.description}</h2>
                    <p className="service-detail__fit"><strong>A good fit for</strong> {activeService.whoItsFor}</p>
                    <div className="service-detail__deliverables">
                      {activeService.deliverables.slice(0, 4).map((deliverable) => <p key={deliverable}><i aria-hidden="true" />{deliverable}</p>)}
                    </div>
                    <div className="service-detail__bottom">
                      <div className="service-detail__tags">{activeService.technologies.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}</div>
                      {example && <Link to={`/work/${example.slug}`} className="text-link">See {example.title} <ArrowRight aria-hidden="true" /></Link>}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </article>
          </div>
        </section>

        <section className="services-process section-pad">
          <div className="site-container">
            <div className="section-heading section-heading--spread"><div><p className="site-eyebrow">Working together</p><h2>Keep the work<br /><em>moving clearly.</em></h2></div><p>We’ll agree what matters before we start, share progress as we go, and leave you with a clean handover.</p></div>
            <div className="method-list">{processSteps.map((step) => <article key={step.step}><span>{step.step}</span><h3>{step.title}</h3><p>{step.summary}</p></article>)}</div>
          </div>
        </section>

        <section className="services-outro"><div className="site-container"><p className="site-eyebrow site-eyebrow--light">Every project begins somewhere</p><div><h2>Let’s work out<br /><em>the first step.</em></h2><Link to="/contact" className="button button--paper">Start a conversation <ArrowUpRight aria-hidden="true" /></Link></div></div></section>
      </div>
    </>
  );
};

export default ServicesPage;
