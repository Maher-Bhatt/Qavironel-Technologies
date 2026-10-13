import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar as CalendarIcon, 
  FileText, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { ScheduleCallForm } from './ScheduleCallForm';
import { RequestQuoteForm } from './RequestQuoteForm';
import { playModalOpenSound, playModalCloseSound, playTabSound } from '../../utils/soundEffects';
import { BookingModalTab, openBookingModal } from '../../utils/modalEvents';

export type { BookingModalTab };
export { openBookingModal };

interface BookingModalProps {
  isOpen: boolean;
  initialTab?: BookingModalTab;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  initialTab = 'call', 
  onClose 
}) => {
  const [activeTab, setActiveTab] = useState<BookingModalTab>(initialTab);
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  // Sync tab when initialTab changes
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Lock background scroll while modal is open & manage focus & play sound
  useEffect(() => {
    if (!isOpen) return;

    playModalOpenSound();
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    (window as any).lenis?.stop();

    // Focus close button or first focusable element inside modal
    const focusTimer = setTimeout(() => {
      const closeBtn = modalRef.current?.querySelector<HTMLButtonElement>('button[aria-label="Close dialog"]');
      closeBtn?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        playModalCloseSound();
        onClose();
        return;
      }

      // Basic focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      (window as any).lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
      // Restore focus
      previouslyFocusedElementRef.current?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
          data-lenis-prevent="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              playModalCloseSound();
              onClose();
            }}
            aria-hidden="true"
            className="fixed inset-0 bg-[#171717]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white dark:bg-zinc-950 rounded-2xl md:rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 z-10 flex flex-col max-h-[92vh] overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 pb-4 border-b border-black/[0.08] dark:border-white/10 flex items-center justify-between shrink-0 bg-white dark:bg-zinc-950">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white dark:text-black" />
                </div>
                <div>
                  <h2 id="booking-modal-title" className="font-sans font-bold text-lg sm:text-xl text-[#0A0A0A] dark:text-white">
                    Direct Engineering Access
                  </h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Partner directly with our technical founders · Zero agency middlemen
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  playModalCloseSound();
                  onClose();
                }}
                aria-label="Close dialog"
                className="p-2 rounded-xl text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Switcher */}
            <div role="tablist" aria-label="Booking options" className="px-5 sm:px-6 pt-4 pb-2 border-b border-black/[0.08] dark:border-white/10 bg-[#F9FAFB] dark:bg-[#0A0A0A] flex gap-2 shrink-0">
              <button
                type="button"
                role="tab"
                id="booking-tab-call"
                aria-selected={activeTab === 'call'}
                aria-controls="booking-tabpanel"
                onClick={() => {
                  playTabSound();
                  setActiveTab('call');
                }}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'call'
                    ? 'bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <CalendarIcon className="w-3.5 h-3.5" />
                <span>Schedule Strategy Call</span>
              </button>

              <button
                type="button"
                role="tab"
                id="booking-tab-quotation"
                aria-selected={activeTab === 'quotation'}
                aria-controls="booking-tabpanel"
                onClick={() => {
                  playTabSound();
                  setActiveTab('quotation');
                }}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'quotation'
                    ? 'bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Request Scope Quote</span>
              </button>
            </div>

            {/* Modal Body with internal smooth scrolling */}
            <div 
              id="booking-tabpanel"
              role="tabpanel"
              aria-labelledby={activeTab === 'call' ? 'booking-tab-call' : 'booking-tab-quotation'}
              className="p-5 sm:p-6 overflow-y-auto flex-1 overscroll-contain bg-white dark:bg-zinc-950"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {activeTab === 'call' ? (
                <ScheduleCallForm onCancel={onClose} />
              ) : (
                <RequestQuoteForm onCancel={onClose} />
              )}
            </div>

            {/* Modal Footer Security Badge */}
            <div className="py-2.5 px-6 border-t border-black/[0.08] dark:border-white/10 bg-[#F9FAFB] dark:bg-[#0A0A0A] flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-black dark:text-white" />
                Mutual NDA Protected & Direct Engineering Oversight
              </span>
              <span>12h Response Guarantee</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
