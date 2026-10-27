import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, CheckCircle2, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { RevealHeadline } from '../components/ui/RevealHeadline';
import { ProjectVideoPreview } from '../components/work/ProjectVideoPreview';
import { projects } from '../data/projects';
import { companyConfig, teamMembers } from '../data/company';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { pricingTiers, engagementPillars } from '../data/pricing';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

const projectIntros: Record<string, string> = {
  kalki: 'A local-first desktop assistant bringing voice, model choice, and guarded system actions into one workspace.',
  ztees: 'A streetwear storefront shaped around product drops and direct ordering.',
  'classic-infrastructure': 'A clearer digital home for an infrastructure team and its field work.',
  'civic-sathi': 'A civic platform for reporting, reviewing, and following local issues.',
  codedroid: 'A pocket-sized Android coding environment with editing, terminal, and on-device tools.',
  'itm-notes': 'A focused study space for course material, practice, and revision.'
};

const disciplines = [
  ['01', 'Product', 'Tools for a real task and a real person.'],
  ['02', 'Experience', 'Websites and storefronts with a clear point of view.'],
  ['03', 'Engineering', 'Software made to work well and stay understandable.']
];

const methods = [
  ['01', 'Get close to the problem', 'Understand the people, the context, and the thing that needs to change.'],
  ['02', 'Make the decisions visible', 'Agree on a useful scope and share the work as it takes shape.'],
  ['03', 'Finish the parts that matter', 'Refine the details, launch with care, and leave a clear handover.']
];

const QavironelMarkSculpture = lazy(() => import('../components/3d/QavironelMarkSculpture').then((module) => ({ default: module.QavironelMarkSculpture })));

export const HomePage: React.FC = () => {
  const selectedProjects = [...projects].filter((project) => project.featured).sort((a, b) => a.order - b.order);
  const founder = teamMembers.find((member) => member.name === 'Maher Bhatt') ?? teamMembers[0];

  return (
    <>
      <SEO
        title="Qavironel Technologies — Independent Digital Studio"
        description="An independent design and engineering studio in Vadodara, India, making useful websites, digital products, and software."
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': 'https://qavironel.com/#website',
          url: 'https://qavironel.com/',
          name: 'Qavironel Technologies',
          description: 'Independent digital product design and software engineering studio.',
          publisher: { '@id': 'https://qavironel.com/#organization' }
        }}
      />

      <div className="site-page home-page">
        {/* HERO SECTION */}
        <section className="home-hero">
          <div className="site-container home-hero__topline">
            <span>Independent digital studio</span>
            <span>Vadodara, India <i>·</i> Working worldwide</span>
          </div>
          <div className="site-container home-hero__main">
            <div className="home-hero__copy">
              <p className="site-eyebrow">Independent product & engineering studio</p>
              <RevealHeadline as="h1" className="home-hero__title" delay={0.06} highlightWord="Engineered.">
                {'Ideas.\nEngineered.'}
              </RevealHeadline>
              <p className="home-hero__intro">We design and build websites, software, and AI tools from Vadodara, working closely with the people who will use them.</p>
              <div className="home-hero__actions">
                <Link to="/work" className="button button--dark">Follow the work <ArrowUpRight aria-hidden="true" /></Link>
                <Link to="/contact" className="text-link">Bring us a problem <ArrowRight aria-hidden="true" /></Link>
              </div>
            </div>

            <div className="home-hero__folio" aria-label="Selected Qavironel project work">
              <div className="home-hero__folio-label"><span>A few things we’ve made</span><span>01—03 / 06</span></div>
              <div className="home-hero__folio-stage studio-scene" role="group" aria-label="A 3D study of the Qavironel mark among screens from three projects">
                <div className="studio-scene__grid" aria-hidden="true" />
                <div className="studio-scene__datum studio-scene__datum--top">OBJECT STUDY <i>Q / 01</i></div>
                <div className="studio-scene__datum studio-scene__datum--bottom">PRODUCT · DESIGN · SOFTWARE</div>
                <div className="studio-scene__halo" aria-hidden="true" />
                <div className="studio-scene__mark">
                  <Suspense fallback={<img className="studio-scene__mark-fallback" src="/brand/identity-v2/qavironel-mark-forest.svg" alt="" aria-hidden="true" />}>
                    <QavironelMarkSculpture className="studio-scene__sculpture" />
                  </Suspense>
                </div>
                <Link to="/work/ztees" className="studio-artifact studio-artifact--ztees" aria-label="Explore the Ztees commerce project">
                  <img src="/videos/ztees-video-poster.webp" alt="" fetchPriority="high" />
                  <span><i>01 / Commerce</i><strong>Ztees</strong><ArrowUpRight aria-hidden="true" /></span>
                </Link>
                <Link to="/work/kalki" className="studio-artifact studio-artifact--kalki" aria-label="Explore the KALKI 2.0 desktop software project">
                  <img src="/videos/kalki-video-poster.webp" alt="" />
                  <span><i>02 / Desktop software</i><strong>KALKI 2.0</strong><ArrowUpRight aria-hidden="true" /></span>
                </Link>
                <Link to="/work/civic-sathi" className="studio-artifact studio-artifact--civic" aria-label="Explore the Civic Sathi civic technology project">
                  <img src="/videos/civic-sathi-video-poster.webp" alt="" />
                  <span><i>03 / Civic technology</i><strong>Civic Sathi</strong><ArrowUpRight aria-hidden="true" /></span>
                </Link>
              </div>
              <div className="home-hero__folio-caption"><span>Commerce / Desktop software / Civic technology</span><span>Vadodara · India</span></div>
            </div>
          </div>
          <a className="site-container home-hero__scroll" href="#selected-work"><span>Scroll to selected work</span><ArrowDown aria-hidden="true" /></a>
        </section>

        {/* FOUNDER & STUDIO STATEMENT SECTION */}
        <section className="home-statement section-pad">
          <div className="site-container home-statement__grid">
            <p className="site-eyebrow">A small team, close to the work</p>
            <div>
              <h2>Good work starts with a clear view of the problem.</h2>
              <p>We stay involved from the first useful question through the design, the build, and the details that make something easier to use.</p>
              
              {/* Founder Note: Direct personal trust & accountability */}
              <div className="home-founder-note">
                <div className="home-founder-note__portrait">
                  <img src={founder.image} alt="Maher Bhatt, Founder & Systems Engineer at Qavironel Technologies" loading="lazy" />
                  <span className="home-founder-note__badge">FOUNDER</span>
                </div>
                <div className="home-founder-note__body">
                  <span className="home-founder-note__kicker">Direct Senior Engineering</span>
                  <h3>“When you hire Qavironel, you work directly with the people building your system. No account managers, no junior delegation.”</h3>
                  <p>
                    I founded Qavironel in Vadodara to give ambitious teams an engineering partner who cares about craft and clarity. My co-founder Anurag Pandey and I personally review, engineer, and ship every system — ensuring architectural integrity, defense-in-depth, and launch-day reliability.
                  </p>
                  <div className="home-founder-note__footer">
                    <div>
                      <strong>Maher Bhatt</strong>
                      <span>Founder & Systems Engineer · Vadodara, India</span>
                    </div>
                    <div className="home-founder-note__socials">
                      <a href={companyConfig.githubOrg} target="_blank" rel="noreferrer" aria-label="Maher Bhatt on GitHub">
                        <GithubIcon />
                        <span>GitHub</span>
                      </a>
                      <a href={companyConfig.linkedinUrl} target="_blank" rel="noreferrer" aria-label="Maher Bhatt on LinkedIn">
                        <LinkedinIcon />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="discipline-index">
                {disciplines.map(([number, title, description]) => (
                  <article key={number}><span>{number} / {title}</span><p>{description}</p></article>
                ))}
              </div>
              <Link to="/about" className="text-link">A little about the studio <ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        {/* SELECTED WORK SECTION */}
        <section id="selected-work" className="home-work section-pad">
          <div className="site-container">
            <div className="section-heading section-heading--spread">
              <div><p className="site-eyebrow">Selected work · 2025—26</p><h2>Six projects.<br /><em>Different working worlds.</em></h2></div>
              <div><p>Six different problems, from a desktop tool to a civic platform. Each project gets its own approach.</p><Link to="/work" className="text-link">Browse all projects <ArrowUpRight aria-hidden="true" /></Link></div>
            </div>
            <div className="home-project-grid">
              {selectedProjects.map((project, index) => (
                <article key={project.slug} className={`home-project home-project--${index + 1}`}>
                  <Link to={`/work/${project.slug}`} className="home-project__visual" aria-label={`View ${project.title} case study`}>
                    <ProjectVideoPreview project={project} priority={index < 2} />
                    <span className="home-project__number">0{index + 1} <i>/ 0{selectedProjects.length}</i></span>
                    <span className="home-project__title">{project.title}<ArrowUpRight aria-hidden="true" /></span>
                  </Link>
                  <div className="home-project__caption"><span>{project.categoryLabel}</span><p>{projectIntros[project.slug] ?? project.summary}</p></div>
                </article>
              ))}
            </div>
            <div className="home-work__end"><span>More work, notes, and details</span><Link to="/work">The full project index <ArrowRight aria-hidden="true" /></Link></div>
          </div>
        </section>

        {/* SOCIAL PROOF: VERIFIED CLIENT REVIEWS & PARTNERS */}
        <TestimonialsSection />

        {/* CAPABILITIES SECTION */}
        <section className="home-capabilities section-pad">
          <div className="site-container home-capabilities__grid">
            <div className="home-capabilities__lead">
              <p className="site-eyebrow">What we bring together</p>
              <h2>One team, from first question to working software.</h2>
              <p>Bring us one part of the project or the whole challenge. We’ll help find the right scope.</p>
              <Link to="/services" className="text-link">See how we can help <ArrowUpRight aria-hidden="true" /></Link>
            </div>
            <div className="capability-list">
              {[
                ['01', 'Websites & commerce', 'Brand-led sites, product stories, and thoughtful storefronts.'],
                ['02', 'Digital products', 'Useful apps and platforms shaped around how people work.'],
                ['03', 'Software & applied AI', 'Custom systems and AI features with clear boundaries.'],
                ['04', 'Product design', 'Journeys and interfaces that make complex work easier to follow.']
              ].map(([number, title, copy]) => (
                <Link key={number} to="/services" className="capability-row">
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING & ENGAGEMENT TRANSPARENCY SECTION */}
        <section className="home-pricing section-pad" aria-label="Pricing and engagement options">
          <div className="site-container">
            <div className="section-heading section-heading--spread">
              <div>
                <p className="site-eyebrow">Transparent engagement & pricing</p>
                <h2>Clear starting points.<br /><em>Fixed commitments.</em></h2>
              </div>
              <div>
                <p>No vague agency markups or surprise invoices. Every project is planned with a fixed scope, clear milestone gates, and 100% intellectual property handover.</p>
                <Link to="/contact" className="text-link">Request a detailed quote <ArrowUpRight aria-hidden="true" /></Link>
              </div>
            </div>

            {/* Pricing Tiers Grid */}
            <div className="home-pricing__grid">
              {pricingTiers.map((tier) => (
                <article key={tier.id} className="home-pricing-card">
                  <div className="home-pricing-card__header">
                    <span className="home-pricing-card__number">{tier.number}</span>
                    <span className="home-pricing-card__badge">{tier.badge}</span>
                  </div>
                  <h3>{tier.name}</h3>
                  <div className="home-pricing-card__price">
                    {tier.startingPriceInr && tier.startingPriceInr !== 'Custom quote' && !tier.startingPriceInr.startsWith('TODO') ? (
                      <>
                        <strong>{tier.startingPriceInr}</strong>
                        {tier.startingPriceUsd && <span>starts at / ~{tier.startingPriceUsd}</span>}
                      </>
                    ) : (
                      <div className="home-pricing-card__placeholder">
                        <span className="home-pricing-card__placeholder-tag">Starting Rate: Custom quote</span>
                      </div>
                    )}
                  </div>
                  <p className="home-pricing-card__tagline">{tier.tagline}</p>
                  
                  <div className="home-pricing-card__scope">
                    <span className="home-pricing-card__scope-label">What’s included:</span>
                    <ul>
                      {tier.scope.slice(0, 4).map((item) => (
                        <li key={item}>
                          <CheckCircle2 aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="home-pricing-card__footer">
                    <Link to="/contact" className="button button--dark w-full justify-between">
                      <span>{tier.actionText}</span>
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Engagement Guarantees */}
            <div className="home-pricing__pillars">
              {engagementPillars.map((pillar) => (
                <div key={pillar.number} className="home-pricing__pillar">
                  <span>{pillar.number}</span>
                  <div>
                    <h4>{pillar.title}</h4>
                    <p>{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FIELDNOTE SECTION */}
        <section className="home-fieldnote section-pad">
          <div className="site-container home-fieldnote__grid">
            <div className="home-fieldnote__visual" aria-label="Ztees storefront and shop management screens">
              <img className="home-fieldnote__store" src="/images/projects/ztees/ztees-storefront-hero.png" alt="Ztees India streetwear storefront" loading="lazy" />
              <img className="home-fieldnote__orders" src="/images/projects/ztees/ztees-owner-orders.png" alt="Ztees owner order management screen" loading="lazy" />
              <span className="home-fieldnote__image-caption">Storefront / Order desk</span>
            </div>
            <div className="home-fieldnote__copy">
              <p className="site-eyebrow">Project note / Ztees</p>
              <h2>Storefront and order desk, designed together.</h2>
              <p>The storefront puts product drops, details, and sizing in one place, then hands an order to WhatsApp. A private console gives the shop team a place to update its catalogue and review orders.</p>
              <Link to="/work/ztees" className="text-link">See the storefront and tools <ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        {/* METHOD SECTION */}
        <section className="home-method section-pad">
          <div className="site-container">
            <div className="section-heading section-heading--spread">
              <div><p className="site-eyebrow">How we work</p><h2>Work in the open.<br /><em>Make it together.</em></h2></div>
              <p>We share decisions and progress as we go, so you know what’s taking shape and where your input is needed.</p>
            </div>
            <div className="method-list">
              {methods.map(([number, title, description]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="home-cta">
          <div className="site-container home-cta__inner">
            <div>
              <p className="site-eyebrow site-eyebrow--light">Have a project in mind?</p>
              <h2>Let’s find the<br /><em>useful next step.</em></h2>
            </div>
            <div>
              <p>Bring the early idea or the complicated brief. We’ll help make the first decision a good one.</p>
              <Link to="/contact" className="button button--paper">Start a conversation <ArrowUpRight aria-hidden="true" /></Link>
              <div className="home-cta__contacts">
                <a href={`mailto:${companyConfig.email}`}>{companyConfig.email}</a>
                <a href={`tel:${companyConfig.phone.replace(/\s+/g, '')}`} className="home-cta__phone">
                  <Phone aria-hidden="true" />
                  <span>Call direct: {companyConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
