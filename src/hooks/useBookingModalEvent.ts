import { useEffect } from 'react';
import type { BookingModalTab } from '../utils/modalEvents';

/**
 * Custom hook to listen for the 'open-booking-modal' custom event.
 * Syncs the modal state and desired tab with the global App state.
 */
export const useBookingModalEvent = (
  setIsBookingOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setBookingTab: React.Dispatch<React.SetStateAction<BookingModalTab>>
) => {
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
  }, [setIsBookingOpen, setBookingTab]);
};
