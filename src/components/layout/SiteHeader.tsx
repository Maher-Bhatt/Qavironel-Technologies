import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, Volume2, VolumeX, X } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { isAudioEnabled, toggleAudio } from '../../utils/soundEffects';

const navItems = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Studio', to: '/about' }
];

export const SiteHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(isAudioEnabled);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname]);
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
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `site-header__link${isActive ? ' is-active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggle variant="icon" className="site-header__theme" />
          <button
            type="button"
            className="site-header__sound"
            data-no-sound="true"
            aria-label={soundOn ? 'Turn interface sounds off' : 'Turn interface sounds on'}
            aria-pressed={soundOn}
            title={soundOn ? 'Interface sounds on' : 'Interface sounds off'}
            onClick={() => setSoundOn(toggleAudio())}
          >
            {soundOn ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
          </button>
          <Link to="/contact" className="site-header__contact">Start a project <ArrowUpRight aria-hidden="true" /></Link>
          <button
            type="button"
            className="site-header__menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`site-header__mobile${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <NavLink key={item.to} to={item.to} tabIndex={menuOpen ? 0 : -1} className={({ isActive }) => `site-header__mobile-link${isActive ? ' is-active' : ''}`}>
              <span>0{index + 1}</span>{item.label}<ArrowUpRight aria-hidden="true" />
            </NavLink>
          ))}
          <Link to="/contact" tabIndex={menuOpen ? 0 : -1} className="site-header__mobile-link">
            <span>04</span>Contact<ArrowUpRight aria-hidden="true" />
          </Link>
        </nav>
        <p>Independent digital studio · Vadodara, India</p>
      </div>
    </header>
  );
};

export default SiteHeader;
