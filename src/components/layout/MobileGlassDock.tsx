import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, FileText, MessageSquare, LayoutGrid } from 'lucide-react';
import { openBookingModal } from '../../utils/modalEvents';
import { companyConfig } from '../../data/company';

export const MobileGlassDock: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const location = useLocation();

  // Reset visibility on route change
  useEffect(() => {
    setIsVisible(true);
    lastScrollYRef.current = 0;
  }, [location.pathname]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY || document.documentElement.scrollTop;
          
          // Always show near the very top of the page (< 80px)
          if (currentScrollY < 80) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollYRef.current + 10) {
            // Scrolling down -> hide dock to free screen space
            setIsVisible(false);
          } else if (currentScrollY < lastScrollYRef.current - 10) {
            // Scrolling up -> reveal dock for quick navigation
            setIsVisible(true);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 z-40 md:hidden flex justify-center pointer-events-none transition-all duration-300 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
      style={{
        bottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))'
      }}
    >
      <nav 
        aria-label="Mobile Quick Actions"
        className="pointer-events-auto grid w-full max-w-md grid-cols-4 rounded-full px-1.5 py-1.5 bg-[#FAFAFA]/95 dark:bg-[#191919]/95 backdrop-blur-2xl border border-[#D8D8D8] dark:border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.55)] transition-colors duration-300"
      >
        {/* Book Call Button */}
        <button
          type="button"
          onClick={() => openBookingModal('call')}
          className="min-w-0 flex flex-col items-center justify-center py-1.5 px-1 rounded-full hover:bg-[#161616]/8 dark:hover:bg-white/10 text-[#161616] dark:text-white active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 text-black dark:text-white mb-0.5" />
          <span className="max-w-full truncate text-[0.62rem] font-sans font-semibold tracking-tight">Book Call</span>
        </button>

        {/* Request Quotation */}
        <button
          type="button"
          onClick={() => openBookingModal('quotation')}
          className="min-w-0 flex flex-col items-center justify-center py-1.5 px-1 rounded-full hover:bg-[#161616]/8 dark:hover:bg-white/10 text-[#161616] dark:text-white active:scale-95 transition-all"
        >
          <FileText className="w-4 h-4 text-black dark:text-white mb-0.5" />
          <span className="max-w-full truncate text-[0.62rem] font-sans font-semibold tracking-tight">Get Quote</span>
        </button>

        {/* WhatsApp Chat */}
        <a
          href={companyConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-0 flex flex-col items-center justify-center py-1.5 px-1 rounded-full hover:bg-[#161616]/8 dark:hover:bg-white/10 text-[#161616] dark:text-white active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 text-black dark:text-white mb-0.5" />
          <span className="max-w-full truncate text-[0.62rem] font-sans font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Selected Work */}
        <Link
          to="/work"
          className="min-w-0 flex flex-col items-center justify-center py-1.5 px-1 rounded-full hover:bg-[#161616]/8 dark:hover:bg-white/10 text-[#161616] dark:text-white active:scale-95 transition-all"
        >
          <LayoutGrid className="w-4 h-4 mb-0.5" />
          <span className="max-w-full truncate text-[0.62rem] font-sans font-semibold tracking-tight">Work</span>
        </Link>
      </nav>
    </div>
  );
};
