import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';

// Code Splitting for performance (Fixes > 500kb Vite Warning)
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

// Custom Hooks Abstraction
import { useScrollToTop } from './hooks/useScrollToTop';
import { useAmbientCursor } from './hooks/useAmbientCursor';
import { useBookingModalEvent } from './hooks/useBookingModalEvent';

/**
 * Root Application Component
 * Implements code-splitting, strict custom hook abstraction, and smooth routing boundaries.
 */
export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTab, setBookingTab] = useState<BookingModalTab>('call');

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
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/work/:slug" element={<CaseStudyPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<LegalPage />} />
              <Route path="/terms" element={<LegalPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
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
