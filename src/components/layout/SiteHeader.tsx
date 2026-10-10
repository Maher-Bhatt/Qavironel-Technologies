import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { companyConfig } from '../../data/company';
import { Menu, X, Globe, Calendar, FileText, Volume2, VolumeX } from 'lucide-react';
import { openBookingModal } from '../booking/BookingModal';
import { isAudioEnabled, toggleAudio, playClickSound } from '../../utils/soundEffects';

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const location = useLocation();

  const isDarkRoute = false;

  useEffect(() => {
    setSoundOn(isAudioEnabled());
  }, []);

  const handleToggleSound = () => {
    const active = toggleAudio();
    setSoundOn(active);
    if (active) {
      playClickSound();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  // Dynamic Styles for Light/Dark context
  const headerBgClass = isScrolled 
    ? 'bg-white/85 dark:bg-[#0A0A0C]/85 backdrop-blur-xl border-[#E5E7EB]/80 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3 sm:py-4'
    : 'bg-transparent border-transparent py-4 sm:py-6';

  const textColorClass = 'text-[#0A0A0A] dark:text-[#F4F4F5]';
  const mutedTextColorClass = 'text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF]';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${headerBgClass}`}
      >
        <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          <Logo variant="horizontal" size="md" className="shrink-0" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-200 relative py-1 ${
                    isActive 
                      ? 'text-[#E0561B]' 
                      : mutedTextColorClass
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E0561B]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right: Sound Toggle + Theme Toggle + Minimal CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleToggleSound}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.68rem] font-mono transition-all border ${
                soundOn
                  ? 'bg-[#E0561B]/10 border-[#E0561B]/30 text-[#E0561B]'
                  : 'bg-[#F4F4F5] dark:bg-[#18181D] hover:bg-[#E5E7EB] dark:hover:bg-[#27272A] border-[#E5E7EB] dark:border-[#27272A] text-[#71717A] dark:text-[#A1A1AA]'
              }`}
              title={soundOn ? 'Mute audio micro-haptics' : 'Enable audio micro-haptics'}
              aria-label="Toggle micro-haptic sound effects"
            >
              {soundOn ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#E0561B] animate-pulse" />
                  <span className="font-bold">SFX ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>SFX OFF</span>
                </>
              )}
            </button>

            <ThemeToggle variant="pill" />

            <button
              type="button"
              onClick={() => {
                if (soundOn) playClickSound();
                openBookingModal('call');
              }}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#E0561B]/25 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] hover:bg-[#E0561B] dark:hover:bg-[#E0561B] dark:hover:text-white"
            >
              <span>Let's Talk</span>
              <span className="w-1.5 h-1.5 rounded-full transition-colors bg-[#E0561B] group-hover:bg-white" />
            </button>
          </div>

          {/* Mobile Right Controls: Sound Toggle + Theme Toggle + Menu Trigger */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              type="button"
              onClick={handleToggleSound}
              className={`p-2 rounded-full border transition-colors ${
                soundOn
                  ? 'bg-[#E0561B]/10 border-[#E0561B]/30 text-[#E0561B]'
                  : 'bg-[#F4F4F5] dark:bg-[#18181D] border-[#E5E7EB] dark:border-[#27272A] text-[#71717A] dark:text-[#A1A1AA]'
              }`}
              title="Toggle sound effects"
              aria-label="Toggle sound effects"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-[#E0561B]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <ThemeToggle variant="icon" />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 transition-colors focus-visible:outline-2 focus-visible:outline-[#E0561B] text-[#0A0A0A] dark:text-[#F4F4F5] hover:text-[#E0561B]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with Frosted Glassmorphism */}
      {mobileMenuOpen && (
        <div data-lenis-prevent="true" className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md md:hidden animate-fade-in" onClick={() => setMobileMenuOpen(false)}>
          <div 
            data-lenis-prevent="true"
            className="fixed inset-y-0 right-0 w-full max-w-sm backdrop-blur-2xl bg-white/95 dark:bg-[#0E0E12]/95 border-l border-white/60 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.25)] text-[#0A0A0A] dark:text-[#F4F4F5] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]/80 dark:border-white/10">
                <Logo variant="full" size="lg" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/80 dark:hover:bg-white/10 text-[#0A0A0A] dark:text-[#F4F4F5] hover:text-[#E0561B] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-2.5">
                <div className="py-2 px-3.5 glass-pill rounded-full flex items-center gap-2 text-xs font-mono text-[#52525B] dark:text-[#A1A1AA]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-[#0A0A0A] dark:text-white">GLOBAL STUDIO</span>
                  <span className="text-[#E0561B]">·</span>
                  <span>ONLINE 24/7</span>
                </div>

                <div className="px-3.5 py-2 rounded-2xl bg-[#F8F9FA] dark:bg-[#18181D] border border-[#E5E7EB] dark:border-[#27272A] flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-[#71717A] dark:text-[#A1A1AA]">Appearance</span>
                  <ThemeToggle variant="pill" />
                </div>
              </div>

              <nav className="mt-6 flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-xl font-bold tracking-tight py-2 flex items-center justify-between transition-colors ${
                        isActive ? 'text-[#E0561B]' : 'text-[#0A0A0A] dark:text-[#F4F4F5] hover:text-[#E0561B]'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-[#A1A1AA]">0{idx + 1}</span>
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-[#E5E7EB] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal('call');
                }}
                className="w-full py-3 rounded-full bg-[#0A0A0A] hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#E0561B]" />
                <span>Book a Discovery Call</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal('quotation');
                }}
                className="w-full py-3 rounded-full bg-[#F4F4F5] hover:bg-[#E5E7EB] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#E5E7EB]"
              >
                <FileText className="w-4 h-4 text-[#E0561B]" />
                <span>Request Project Quotation</span>
              </button>
              <Button to="/contact" variant="primary" size="lg" className="w-full" showArrow>
                Start a Project
              </Button>

              <div className="text-xs text-[#71717A] space-y-1.5 mt-4">
                <p className="font-semibold uppercase tracking-wider text-[#0A0A0A]">Qavironel Technologies</p>
                <p className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#E0561B]" />
                  <span>Remote-First · Serving Ambitious Clients Worldwide</span>
                </p>
                <a href={`mailto:${companyConfig.email}`} className="text-[#E0561B] hover:underline block pt-1 font-mono font-semibold">
                  {companyConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



