import React from 'react';
import { ArrowUpRight, MapPin, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { companyConfig } from '../../data/company';
import { studioSocialLinks, StudioSocialLink } from '../../data/socialLinks';
import { GithubIcon, LinkedinIcon, XIcon } from '../ui/Icons';

const renderSocialIcon = (id: StudioSocialLink['id']) => {
  switch (id) {
    case 'github':
      return <GithubIcon />;
    case 'linkedin':
      return <LinkedinIcon />;
    case 'x':
      return <XIcon />;
  }
};

export const SiteFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo variant="horizontal" theme="dark" size="md" className="site-footer__logo" />
            <p>Digital products, websites, and software made with care for the details and the people using them.</p>
            <span><MapPin aria-hidden="true" /> Vadodara, India · Working worldwide</span>
            <div className="site-footer__socials" aria-label="Studio social profiles">
              {studioSocialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.isPlaceholder ? '#' : link.url}
                  target={link.isPlaceholder ? undefined : '_blank'}
                  rel={link.isPlaceholder ? undefined : 'noreferrer'}
                  onClick={link.isPlaceholder ? (e) => e.preventDefault() : undefined}
                  className="site-footer__social-link"
                  aria-label={link.label}
                  title={`${link.label}${link.isPlaceholder ? ' (TODO: Configure studio URL in src/data/socialLinks.ts)' : ''}`}
                >
                  {renderSocialIcon(link.id)}
                  <span>{link.label}</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="site-footer__nav-block">
            <span className="site-footer__label">Browse</span>
            <nav aria-label="Footer navigation">
              <Link to="/work">Work</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">Studio</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="site-footer__hello">
            <span className="site-footer__label">A good place to start</span>
            <a href={`mailto:${companyConfig.email}`} className="site-footer__email">
              {companyConfig.email}
              <ArrowUpRight aria-hidden="true" />
            </a>
            <div className="site-footer__direct-contact">
              <a href={`tel:${companyConfig.phone.replace(/\s+/g, '')}`} className="site-footer__phone-link">
                <Phone aria-hidden="true" />
                <span>Direct: {companyConfig.phone}</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a href={companyConfig.whatsappUrl} target="_blank" rel="noreferrer" className="site-footer__wa-link">
                <MessageSquare aria-hidden="true" />
                <span>WhatsApp: {companyConfig.phone}</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span className="site-footer__copyright">&copy; {year} QAVIRONEL TECHNOLOGIES</span>
          <span>Design and engineering, working together.</span>
          <div>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
