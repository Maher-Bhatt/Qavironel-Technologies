import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { Button } from '../ui/Button';
import { companyConfig } from '../../data/company';
import { Menu, X, Globe, Calendar, FileText } from 'lucide-react';
import { openBookingModal } from '../booking/BookingModal';

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.03)]' 
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="full" theme="light" size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-200 relative py-1 ${
                    isActive 
                      ? 'text-[#E0561B]' 
                      : 'text-[#52525B] hover:text-[#0A0A0A]'
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

          {/* Desktop Status & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => openBookingModal('call')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F9FA] hover:bg-white border border-[#E5E7EB] hover:border-[#E0561B]/40 text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] hover:text-[#E0561B] transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E0561B]" />
              <span>Book Call</span>
            </button>
            <button
              type="button"
              onClick={() => openBookingModal('quotation')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F9FA] hover:bg-white border border-[#E5E7EB] hover:border-[#E0561B]/40 text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] hover:text-[#E0561B] transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#E0561B]" />
              <span>Get Quote</span>
            </button>
            <Button to="/contact" variant="primary" size="sm" showArrow>
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0A0A0A] hover:text-[#E0561B] transition-colors focus-visible:outline-2 focus-visible:outline-[#E0561B]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer with Frosted Glassmorphism */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md md:hidden animate-fade-in" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed inset-y-0 right-0 w-full max-w-sm backdrop-blur-2xl bg-white/92 border-l border-white/60 p-6 sm:p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.25)] text-[#0A0A0A]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]/80">
                <Logo variant="full" theme="light" size="sm" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/80 text-[#0A0A0A] hover:text-[#E0561B] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-4 py-2 px-3.5 glass-pill rounded-full flex items-center gap-2 text-xs font-mono text-[#52525B]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-[#0A0A0A]">GLOBAL STUDIO</span>
                <span className="text-[#E0561B]">·</span>
                <span>ONLINE 24/7</span>
              </div>

              <nav className="mt-8 flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-xl font-bold tracking-tight py-2 flex items-center justify-between transition-colors ${
                        isActive ? 'text-[#E0561B]' : 'text-[#0A0A0A] hover:text-[#E0561B]'
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
              <Button to="/contact" variant="primary" size="md" className="w-full" showArrow>
                Start a Project
              </Button>

              <div className="text-xs text-[#71717A] space-y-1.5">
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
