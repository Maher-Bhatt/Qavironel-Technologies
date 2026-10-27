import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';

import type { BookingModalTab } from './utils/modalEvents';
import { SmoothScrollProvider } from './components/layout/SmoothScrollProvider';
import { PageTransition } from './components/layout/PageTransition';
import { SectionRevealObserver } from './components/layout/SectionRevealObserver';
import { setupGlobalSoundListeners } from './utils/soundEffects';

// Direct Page Imports: Eliminates the 3-second chunk suspension delay across route transitions
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Direct Modal Import: Ensures instant response when clicking "Request a quote" or "Book a conversation"
import { BookingModal } from './components/booking/BookingModal';

// Custom Hooks Abstraction
import { useScrollToTop } from './hooks/useScrollToTop';
import { useBookingModalEvent } from './hooks/useBookingModalEvent';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTab, setBookingTab] = useState<BookingModalTab>('call');
  const location = useLocation();

  useScrollToTop();
  useBookingModalEvent(setIsBookingOpen, setBookingTab);
  useEffect(() => setupGlobalSoundListeners(), []);

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScrollProvider>
        <div className="app-shell">
          <SiteHeader />
          <SectionRevealObserver />
          <main className="app-shell__main">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
                <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
                <Route path="/work/socialsafe" element={<Navigate to="/work" replace />} />
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
          {isBookingOpen && (
            <BookingModal 
              isOpen={isBookingOpen} 
              initialTab={bookingTab} 
              onClose={() => setIsBookingOpen(false)} 
            />
          )}
        </div>
      </SmoothScrollProvider>
    </MotionConfig>
  );
};

export default App;
