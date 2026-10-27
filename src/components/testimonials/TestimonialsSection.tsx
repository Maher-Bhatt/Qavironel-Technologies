import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { testimonials, clientPartners } from '../../data/testimonials';

export interface TestimonialsSectionProps {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  showPartners?: boolean;
  showMetrics?: boolean;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  eyebrow = 'Client feedback & verified trust',
  title = (
    <>
      Built with teams.<br />
      <em>Proven in practice.</em>
    </>
  ),
  description = 'We partner with founders, civil contractors, and ambitious builders. Here is what they say about working directly with our studio.',
  showPartners = true,
  showMetrics = true,
  ctaText = 'Discuss your timeline',
  ctaLink = '/contact',
  className = '',
}) => {
  return (
    <section className={`home-proof section-pad ${className}`.trim()} aria-label="Client feedback and verified track record">
      <div className="site-container">
        <div className="section-heading section-heading--spread">
          <div>
            <p className="site-eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          <div>
            {description && <p>{description}</p>}
            {ctaText && ctaLink && (
              <Link to={ctaLink} className="text-link">
                {ctaText} <ArrowUpRight aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>

        {/* Client Partners Bar */}
        {showPartners && clientPartners.length > 0 && (
          <div className="home-proof__partners" aria-label="Organizations and verified partners">
            <span className="home-proof__partners-label">Verified Client Work & Partners</span>
            <div className="home-proof__partners-list">
              {clientPartners.map((partner) => (
                <Link key={partner.name} to={`/work/${partner.projectSlug}`} className="home-proof__partner-chip">
                  <strong>{partner.name}</strong>
                  <span>{partner.category}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Testimonial Cards */}
        <div className="home-proof__quotes">
          {testimonials.map((t) => (
            <article key={t.id} className="home-quote">
              <div className="home-quote__top">
                <span className="home-quote__badge">{t.badge}</span>
                {showMetrics && t.metric && (
                  <div className="home-quote__metric">
                    <strong>{t.metric}</strong>
                    {t.metricLabel && <span>{t.metricLabel}</span>}
                  </div>
                )}
              </div>
              <blockquote className="home-quote__text">
                {t.isPlaceholder || t.quote.startsWith('TODO') ? (
                  <span className="opacity-75 italic text-[0.95rem]">{t.quote}</span>
                ) : (
                  `“${t.quote}”`
                )}
              </blockquote>
              <div className="home-quote__author">
                <div className="home-quote__author-details">
                  <strong>{t.author}</strong>
                  <span>
                    {t.role} · {t.company}
                  </span>
                  {t.location && (
                    <small>
                      <MapPin aria-hidden="true" /> {t.location}
                    </small>
                  )}
                </div>
                <Link
                  to={`/work/${t.projectSlug}`}
                  className="text-link"
                  aria-label={`Read ${t.projectTitle} case study`}
                >
                  Case study <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
