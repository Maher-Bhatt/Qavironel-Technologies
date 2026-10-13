import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { companyConfig } from '../../data/company';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-[#0D1511]/90 backdrop-blur-md border-b border-[#D9DED7] dark:border-white/10 py-3.5 shadow-xs' 
            : 'bg-transparent border-b border-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-[1700px] w-full mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          <Logo size="md" className="shrink-0" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-mono uppercase tracking-[0.16em] transition-colors py-1 relative ${
                    isActive 
                      ? 'text-black dark:text-white font-bold' 
                      : 'text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-black dark:bg-white" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-sm group"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 text-black dark:text-white bg-white dark:bg-zinc-900"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F5F5F0] dark:bg-[#0D1511] pt-24 px-6 flex flex-col justify-between pb-10 md:hidden animate-fade-in">
          <div className="space-y-6">
            <div className="pb-4 border-b border-[#D9DED7] dark:border-white/10 flex items-center justify-between">
              <Logo size="sm" />
              <span className="text-[0.68rem] font-mono uppercase tracking-[0.2em] text-[#737A73]">Navigation</span>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-3xl font-display font-bold tracking-tight transition-colors ${
                      isActive 
                        ? 'text-black dark:text-white' 
                        : 'text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-black/10 dark:border-white/10">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-black text-white dark:bg-white dark:text-black text-sm font-mono uppercase font-bold tracking-wider"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
              <a href={`mailto:${companyConfig.email}`} className="hover:underline">{companyConfig.email}</a>
              <a href={companyConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteHeader;
