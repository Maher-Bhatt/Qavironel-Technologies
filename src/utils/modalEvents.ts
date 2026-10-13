export type BookingModalTab = 'call' | 'quotation';

/**
 * Dispatches a lightweight custom DOM event to open the Booking modal with the requested tab.
 * Keeps page bundles decoupled from the heavy modal component and forms.
 */
export const openBookingModal = (tab: BookingModalTab = 'call') => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { tab } }));
  }
};
