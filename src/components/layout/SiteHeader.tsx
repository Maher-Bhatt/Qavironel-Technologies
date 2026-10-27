import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, Phone, Volume2, VolumeX, X } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { isAudioEnabled, toggleAudio } from '../../utils/soundEffects';
import { companyConfig } from '../../data/company';
import { studioSocialLinks, StudioSocialLink } from '../../data/socialLinks';
import { GithubIcon, LinkedinIcon, XIcon } from '../ui/Icons';

const navItems = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Studio', to: '/about' }
];

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

export const SiteHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(isAudioEnabled);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname]);

  // Lock body scroll on small screens when mobile drawer is open
  useEffect(() => {
    if (menuOpen && window.innerWidth <= 900) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const syncSound = (event: Event) => setSoundOn((event as CustomEvent<{ enabled: boolean }>).detail.enabled);
    window.addEventListener('qavironel_sfx_change', syncSound);
    return () => window.removeEventListener('qavironel_sfx_change', syncSound);
  }, []);

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Logo variant="horizontal" size="md" className="site-header__brand" />

        <nav className="site-header__nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `site-header__link${isActive ? ' is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          {/* Header Social Links */}
          <div className="site-header__socials site-header__socials--desktop" aria-label="Studio social profiles">
            {studioSocialLinks.map((link) => (
              <a
                key={link.id}
                href={link.isPlaceholder ? '#' : link.url}
                target={link.isPlaceholder ? undefined : '_blank'}
                rel={link.isPlaceholder ? undefined : 'noreferrer'}
                onClick={link.isPlaceholder ? (e) => e.preventDefault() : undefined}
                className="site-header__social-btn"
                aria-label={link.label}
                title={`${link.label}${link.isPlaceholder ? ' (TODO: Configure studio URL in src/data/socialLinks.ts)' : ''}`}
              >
                {renderSocialIcon(link.id)}
              </a>
            ))}
          </div>

          <ThemeToggle variant="icon" className="site-header__theme" />
          <button
            type="button"
            className="site-header__sound site-header__sound--desktop"
            data-no-sound="true"
            aria-label={soundOn ? 'Turn interface sounds off' : 'Turn interface sounds on'}
            aria-pressed={soundOn}
            title={soundOn ? 'Interface sounds on' : 'Interface sounds off'}
            onClick={() => setSoundOn(toggleAudio())}
          >
            {soundOn ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
          </button>
          <Link to="/contact" className="site-header__contact site-header__contact--desktop">
            <span>Start a project</span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="site-header__menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Menu'}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`site-header__mobile${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="site-header__mobile-inner">
          <div className="site-header__mobile-cta">
            <Link to="/contact" className="button button--dark w-full justify-between" tabIndex={menuOpen ? 0 : -1}>
              <span>Start a project</span>
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <a
              href={`tel:${companyConfig.phone.replace(/\s+/g, '')}`}
              className="site-header__mobile-phone"
              tabIndex={menuOpen ? 0 : -1}
            >
              <Phone aria-hidden="true" />
              <span>Direct call: {companyConfig.phone}</span>
            </a>
          </div>

          <nav aria-label="Mobile navigation" className="site-header__mobile-links">
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                tabIndex={menuOpen ? 0 : -1}
                className={({ isActive }) => `site-header__mobile-link${isActive ? ' is-active' : ''}`}
              >
                <span>0{index + 1}</span>
                {item.label}
                <ArrowUpRight aria-hidden="true" />
              </NavLink>
            ))}
            <Link to="/contact" tabIndex={menuOpen ? 0 : -1} className="site-header__mobile-link">
              <span>04</span>
              Contact
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </nav>

          <div className="site-header__mobile-meta">
            <button
              type="button"
              className="site-header__mobile-sound"
              onClick={() => setSoundOn(toggleAudio())}
              tabIndex={menuOpen ? 0 : -1}
            >
              {soundOn ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
              <span>Interface sounds: {soundOn ? 'Enabled' : 'Muted'}</span>
            </button>
            <div className="site-header__mobile-socials">
              {studioSocialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.isPlaceholder ? '#' : link.url}
                  target={link.isPlaceholder ? undefined : '_blank'}
                  rel={link.isPlaceholder ? undefined : 'noreferrer'}
                  onClick={link.isPlaceholder ? (e) => e.preventDefault() : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                  aria-label={link.label}
                  title={`${link.label}${link.isPlaceholder ? ' (TODO: Configure studio URL in src/data/socialLinks.ts)' : ''}`}
                >
                  {renderSocialIcon(link.id)}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
            <p>Independent digital studio · Vadodara, India</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
