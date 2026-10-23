import React from 'react';
import { ArrowRight, ArrowUpRight, CalendarDays, Mail, MapPin, MessageCircle } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { ContactForm } from '../components/contact/ContactForm';
import { companyConfig } from '../data/company';
import { openBookingModal } from '../utils/modalEvents';

const firstSteps = [
  ['01', 'We read the brief', 'We’ll get back to you with any questions and a useful next step.'],
  ['02', 'We talk it through', 'A short conversation helps us understand the people, goals, and constraints.'],
  ['03', 'We shape the scope', 'If it feels like a fit, we’ll outline a clear way to move ahead.']
];

export const ContactPage: React.FC = () => (
  <>
    <SEO
      title="Contact Qavironel Technologies"
      description="Tell Qavironel Technologies what you are building. Start a conversation about websites, digital products, software, and applied AI."
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Qavironel Technologies',
        url: 'https://qavironel.com/contact',
        mainEntity: { '@type': 'ContactPoint', contactType: 'project inquiries', email: companyConfig.email, availableLanguage: ['English', 'Hindi', 'Gujarati'] }
      }}
    />

    <div className="site-page contact-page">
      <section className="contact-intro">
        <div className="site-container">
          <div className="contact-intro__top"><p className="site-eyebrow">Contact the studio</p><span>Vadodara, India · Working worldwide</span></div>
          <div className="contact-intro__main"><h1>What’s on<br /><em>your worktable?</em></h1><div><p>A first thought, a tangled workflow, a site that needs a better direction—it’s all a good place to begin.</p><p>Tell us enough to understand what you’re working on. We’ll take it from there.</p></div></div>
        </div>
      </section>

      <section className="site-container contact-layout" aria-label="Contact Qavironel">
        <div className="contact-form-panel">
          <div className="contact-form-panel__heading"><p className="site-eyebrow">Project inquiry</p><span>01 / 01</span></div>
          <h2>Tell us a little<br /><em>about the idea.</em></h2>
          <p className="contact-form-panel__intro">The brief doesn’t need to be polished. A few useful details help us prepare for a good first conversation.</p>
          <ContactForm theme="light" />
        </div>

        <aside className="contact-side">
          <div className="contact-side__direct">
            <p className="site-eyebrow site-eyebrow--light">Rather talk directly?</p>
            <h2>Pick the way<br /><em>that suits you.</em></h2>
            <a href={`mailto:${companyConfig.email}`}><span><Mail aria-hidden="true" /><small>Email</small><strong>{companyConfig.email}</strong></span><ArrowUpRight aria-hidden="true" /></a>
            <a href={companyConfig.whatsappUrl} target="_blank" rel="noreferrer"><span><MessageCircle aria-hidden="true" /><small>WhatsApp</small><strong>Message the studio</strong></span><ArrowUpRight aria-hidden="true" /></a>
            <button type="button" onClick={() => openBookingModal('call')}><span><CalendarDays aria-hidden="true" /><small>Schedule</small><strong>Book a conversation</strong></span><ArrowRight aria-hidden="true" /></button>
            <p className="contact-side__location"><MapPin aria-hidden="true" /> Based in Vadodara, India · Working worldwide</p>
          </div>
          <div className="contact-side__steps"><p className="site-eyebrow">What happens next</p>{firstSteps.map(([number, title, description]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        </aside>
      </section>
    </div>
  </>
);

export default ContactPage;
