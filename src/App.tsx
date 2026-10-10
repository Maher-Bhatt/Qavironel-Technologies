import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

// Scroll to top on route transition
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

import { BookingModal, BookingModalTab } from './components/booking/BookingModal';
import { MobileGlassDock } from './components/layout/MobileGlassDock';
import { SmoothScrollProvider } from './components/layout/SmoothScrollProvider';
import { Preloader } from './components/ui/Preloader';
import { FilmGrainOverlay } from './components/ui/FilmGrainOverlay';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTab, setBookingTab] = useState<BookingModalTab>('call');

  useEffect(() => {
    const handleOpenBooking = (e: Event) => {
      const customEvent = e as CustomEvent<{ tab?: BookingModalTab }>;
      if (customEvent.detail?.tab) {
        setBookingTab(customEvent.detail.tab);
      } else {
        setBookingTab('call');
      }
      setIsBookingOpen(true);
    };
    window.addEventListener('open-booking-modal', handleOpenBooking);
    return () => window.removeEventListener('open-booking-modal', handleOpenBooking);
  }, []);

  return (
    <SmoothScrollProvider>
      <Preloader />
      <FilmGrainOverlay />
      <div className="flex flex-col min-h-screen bg-white text-[#0A0A0A]">
        <ScrollToTop />
        <SiteHeader />
        <main className="flex-grow pb-16 md:pb-0">
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
