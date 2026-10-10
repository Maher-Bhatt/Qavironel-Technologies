import React, { useState, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';

// Code Splitting for performance
const HomePage = React.lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const WorkPage = React.lazy(() => import('./pages/WorkPage').then(module => ({ default: module.WorkPage })));
const CaseStudyPage = React.lazy(() => import('./pages/CaseStudyPage').then(module => ({ default: module.CaseStudyPage })));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const LegalPage = React.lazy(() => import('./pages/LegalPage').then(module => ({ default: module.LegalPage })));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));

import { BookingModal, BookingModalTab } from './components/booking/BookingModal';
import { MobileGlassDock } from './components/layout/MobileGlassDock';
import { SmoothScrollProvider } from './components/layout/SmoothScrollProvider';
import { Preloader } from './components/ui/Preloader';
import { FilmGrainOverlay } from './components/ui/FilmGrainOverlay';
import { PageTransition } from './components/layout/PageTransition';

// Custom Hooks Abstraction
import { useScrollToTop } from './hooks/useScrollToTop';
import { useAmbientCursor } from './hooks/useAmbientCursor';
import { useBookingModalEvent } from './hooks/useBookingModalEvent';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTab, setBookingTab] = useState<BookingModalTab>('call');
  const location = useLocation();

  useScrollToTop();
  useBookingModalEvent(setIsBookingOpen, setBookingTab);
  useAmbientCursor();

  return (
    <SmoothScrollProvider>
      <Preloader />
      <FilmGrainOverlay />
      <div className="flex flex-col min-h-screen bg-white text-[#0A0A0A]">
        <SiteHeader />
        <main className="flex-grow pb-16 md:pb-0">
          <Suspense fallback={null}>
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
