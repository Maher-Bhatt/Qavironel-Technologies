import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';

import type { BookingModalTab } from './utils/modalEvents';
import { MobileGlassDock } from './components/layout/MobileGlassDock';
import { SmoothScrollProvider } from './components/layout/SmoothScrollProvider';
import { FilmGrainOverlay } from './components/ui/FilmGrainOverlay';
import { PageTransition } from './components/layout/PageTransition';

// Route Code Splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const WorkPage = lazy(() => import('./pages/WorkPage').then(m => ({ default: m.WorkPage })));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then(m => ({ default: m.CaseStudyPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const LegalPage = lazy(() => import('./pages/LegalPage').then(m => ({ default: m.LegalPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));
const BookingModal = lazy(() => import('./components/booking/BookingModal').then(m => ({ default: m.BookingModal })));

// Custom Hooks Abstraction
import { useScrollToTop } from './hooks/useScrollToTop';
import { useAmbientCursor } from './hooks/useAmbientCursor';
import { useBookingModalEvent } from './hooks/useBookingModalEvent';
import { setupGlobalSoundListeners } from './utils/soundEffects';

const PageFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-black/20 dark:border-white/20 border-t-black dark:border-t-white rounded-full animate-spin" />
  </div>
);

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
    <MotionConfig reducedMotion="user">
      <SmoothScrollProvider>
        <FilmGrainOverlay />
        <div className="flex flex-col min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#FAFAFA] transition-colors duration-300">
          <SiteHeader />
          <main className="flex-grow pb-28 sm:pb-32 md:pb-0">
            <Suspense fallback={<PageFallback />}>
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
            </Suspense>
          </main>
          <SiteFooter />
          <MobileGlassDock />
          {isBookingOpen && (
            <Suspense fallback={null}>
              <BookingModal 
                isOpen={isBookingOpen} 
                initialTab={bookingTab} 
                onClose={() => setIsBookingOpen(false)} 
              />
            </Suspense>
          )}
        </div>
      </SmoothScrollProvider>
    </MotionConfig>
  );
};

export default App;
