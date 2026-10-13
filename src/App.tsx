import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';

import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { BookingModal, BookingModalTab } from './components/booking/BookingModal';
import { MobileGlassDock } from './components/layout/MobileGlassDock';
import { SmoothScrollProvider } from './components/layout/SmoothScrollProvider';
import { FilmGrainOverlay } from './components/ui/FilmGrainOverlay';
import { PageTransition } from './components/layout/PageTransition';

// Custom Hooks Abstraction
import { useScrollToTop } from './hooks/useScrollToTop';
import { useAmbientCursor } from './hooks/useAmbientCursor';
import { useBookingModalEvent } from './hooks/useBookingModalEvent';
import { setupGlobalSoundListeners } from './utils/soundEffects';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTab, setBookingTab] = useState<BookingModalTab>('call');
  const location = useLocation();

  useScrollToTop();
  useBookingModalEvent(setIsBookingOpen, setBookingTab);
  useAmbientCursor();

  useEffect(() => {
    const cleanup = setupGlobalSoundListeners();
    return cleanup;
  }, []);

  return (
    <SmoothScrollProvider>
      <FilmGrainOverlay />
      <div className="flex flex-col min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#FAFAFA] transition-colors duration-300">
        <SiteHeader />
        <main className="flex-grow pb-28 sm:pb-32 md:pb-0">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
              <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
              <Route path="/work/:slug" element={<PageTransition><CaseStudyPage /></PageTransition>} />
              <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
              <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
              <Route path="/privacy" element={<PageTransition><LegalPage /></PageTransition>} />
              <Route path="/terms" element={<PageTransition><LegalPage /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <SiteFooter />
        <MobileGlassDock />
        <BookingModal 
          isOpen={isBookingOpen} 
          initialTab={bookingTab} 
          onClose={() => setIsBookingOpen(false)} 
        />
      </div>
    </SmoothScrollProvider>
  );
};

export default App;
