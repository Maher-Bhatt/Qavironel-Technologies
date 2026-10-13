import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, FileText, MessageSquare, LayoutGrid } from 'lucide-react';
import { openBookingModal } from '../booking/BookingModal';
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
        className="pointer-events-auto w-full max-w-sm rounded-full px-2 py-1.5 flex items-center justify-between bg-white/95 dark:bg-[#121915]/95 backdrop-blur-2xl border border-black/10 dark:border-white/10 dark:border-white/15 shadow-[0_12px_36px_rgba(25,29,26,0.14)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-colors duration-300"
      >
        {/* Book Call Button */}
        <button
          type="button"
          onClick={() => openBookingModal('call')}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-full hover:bg-white dark:hover:bg-white/10 text-black dark:text-white dark:text-[#F5F5F0] active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 text-black dark:text-white mb-0.5" />
          <span className="text-[0.65rem] font-mono font-bold tracking-tight">Book Call</span>
        </button>

        {/* Separator */}
        <div className="w-[1px] h-6 bg-black/10 dark:bg-white/10" />

        {/* Request Quotation */}
        <button
          type="button"
          onClick={() => openBookingModal('quotation')}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-full hover:bg-white dark:hover:bg-white/10 text-black dark:text-white dark:text-[#F5F5F0] active:scale-95 transition-all"
        >
          <FileText className="w-4 h-4 text-black dark:text-white mb-0.5" />
          <span className="text-[0.65rem] font-mono font-bold tracking-tight">Get Quote</span>
        </button>

        {/* Separator */}
        <div className="w-[1px] h-6 bg-black/10 dark:bg-white/10" />

        {/* WhatsApp Chat */}
        <a
          href={companyConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-full hover:bg-white dark:hover:bg-white/10 text-black dark:text-white dark:text-[#F5F5F0] active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 text-black dark:text-white mb-0.5" />
          <span className="text-[0.65rem] font-mono font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Separator */}
        <div className="w-[1px] h-6 bg-black/10 dark:bg-white/10" />

        {/* Selected Work */}
        <Link
          to="/work"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-full hover:bg-white dark:hover:bg-white/10 text-black dark:text-white dark:text-[#F5F5F0] active:scale-95 transition-all"
        >
          <LayoutGrid className="w-4 h-4 text-zinc-500 dark:text-[#A7B0A7] mb-0.5" />
          <span className="text-[0.65rem] font-mono font-bold tracking-tight">Work</span>
        </Link>
      </nav>
    </div>
  );
};
