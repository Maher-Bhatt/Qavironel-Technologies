import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { companyConfig } from '../../data/company';

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
            <a href={`mailto:${companyConfig.email}`} className="site-footer__email">{companyConfig.email}<ArrowUpRight aria-hidden="true" /></a>
            <a href={companyConfig.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {year} Qavironel Technologies</span>
          <span>Design and engineering, working together.</span>
          <div><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
