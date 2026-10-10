import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  Globe, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { companyConfig } from '../../data/company';

export const openBookingModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-booking-modal'));
  }
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<number>(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [timeFormat, setTimeFormat] = useState<'12h' | '24h'>('12h');
  const [timezone, setTimezone] = useState<string>('Asia/Kolkata (IST)');
  const [step, setStep] = useState<'pick' | 'details' | 'confirmed'>('pick');

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Month names
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Days in month calculation
  const daysInMonth = useMemo(() => {
    return new Date(selectedYear, selectedMonth + 1, 0).getDate();
  }, [selectedYear, selectedMonth]);

  const firstDayOfWeek = useMemo(() => {
    return new Date(selectedYear, selectedMonth, 1).getDay();
  }, [selectedYear, selectedMonth]);

  // Generate available slots based on selected date
  const availableSlots12h = [
    '11:00am', '11:30am', '02:00pm', '02:30pm', 
    '03:00pm', '03:30pm', '04:00pm', '04:30pm', 
    '05:00pm', '05:30pm', '06:00pm', '06:30pm'
  ];

  const availableSlots24h = [
    '11:00', '11:30', '14:00', '14:30', 
    '15:00', '15:30', '16:00', '16:30', 
    '17:00', '17:30', '18:00', '18:30'
  ];

  const displaySlots = timeFormat === '12h' ? availableSlots12h : availableSlots24h;

  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear((prev) => prev - 1);
    } else {
      setSelectedMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear((prev) => prev + 1);
    } else {
      setSelectedMonth((prev) => prev + 1);
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('confirmed');

      // Store in localStorage for audit
      try {
        const bookings = JSON.parse(localStorage.getItem('qavironel_bookings') || '[]');
        bookings.push({
          ...bookingForm,
          date: `${selectedYear}-${selectedMonth + 1}-${selectedDate}`,
          slot: selectedSlot,
          timezone,
          bookedAt: new Date().toISOString()
        });
        localStorage.setItem('qavironel_bookings', JSON.stringify(bookings));
      } catch {
        // ignore
      }
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-6 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0F0F11] border border-white/10 rounded-2xl shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header with Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="text-xl font-bold font-sans tracking-tight text-white">Book a Discovery Session</h2>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">Direct 30-min architecture consultation & milestone scoping</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'pick' && (
          <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column: Meeting Info (4 cols) */}
            <div className="md:col-span-4 space-y-6 md:border-r md:border-white/10 md:pr-6">
              <div className="space-y-1">
                <div className="w-10 h-10 rounded-xl bg-[#E0561B]/15 border border-[#E0561B]/30 text-[#E0561B] flex items-center justify-center font-bold">
                  Q
                </div>
                <h3 className="font-bold text-lg text-white pt-2">Qavironel Technologies</h3>
                <p className="text-sm font-semibold text-[#E0561B]">30-Min Discovery & Scope</p>
              </div>

              <div className="space-y-3 text-xs text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#E0561B]" />
                  <span>30 Minutes Duration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-[#E0561B]" />
                  <span>Google Meet / Cal Video link provided</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#E0561B]" />
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="bg-zinc-900 border border-white/10 rounded px-2 py-1 text-xs text-zinc-200 focus:outline-none focus:border-[#E0561B]"
                  >
                    <option value="Asia/Kolkata (IST)">Asia / Kolkata (IST)</option>
                    <option value="America/New_York (EST)">America / New York (EST)</option>
                    <option value="America/Los_Angeles (PST)">America / Los Angeles (PST)</option>
                    <option value="Europe/London (GMT)">Europe / London (GMT)</option>
                    <option value="Europe/Berlin (CET)">Europe / Berlin (CET)</option>
                    <option value="Asia/Dubai (GST)">Asia / Dubai (GST)</option>
                    <option value="Asia/Singapore (SGT)">Asia / Singapore (SGT)</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs text-zinc-400 space-y-1.5">
                <p className="font-semibold text-white">What we cover:</p>
                <ul className="space-y-1 list-disc list-inside text-zinc-300">
                  <li>Technical architecture & stack</li>
                  <li>Delivery timeline & milestones</li>
                  <li>Transparent scoping & pricing</li>
                </ul>
              </div>
            </div>

            {/* Middle Column: Calendar (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center justify-between pb-2">
                <span className="font-bold text-sm text-white">
                  {months[selectedMonth]} {selectedYear}
                </span>
                <div className="flex items-center gap-1">
                  <button 
                    type="button"
                    onClick={handlePrevMonth}
                    className="p-1.5 rounded hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    type="button"
                    onClick={handleNextMonth}
                    className="p-1.5 rounded hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 text-center text-[0.7rem] font-mono font-semibold text-zinc-400">
                <span>SUN</span>
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
              </div>

              {/* Date cells */}
              <div className="grid grid-cols-7 gap-1 text-xs font-mono">
                {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-9" />
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const isSelected = selectedDate === day;
                  const isToday = day === new Date().getDate() && selectedMonth === new Date().getMonth();

                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => {
                        setSelectedDate(day);
                        setSelectedSlot(null);
                      }}
                      className={`h-9 flex items-center justify-center rounded-lg transition-colors font-medium ${
                        isSelected 
                          ? 'bg-[#E0561B] text-white font-bold shadow-md shadow-[#E0561B]/30' 
                          : isToday 
                            ? 'bg-white/15 text-white font-bold border border-[#E0561B]/50' 
                            : 'hover:bg-white/10 text-zinc-300'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Time Slots (3 cols) */}
            <div className="md:col-span-3 space-y-4 md:border-l md:border-white/10 md:pl-6">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-mono text-zinc-400">
                  {months[selectedMonth].slice(0, 3)} {selectedDate}
                </span>
                <div className="flex items-center bg-zinc-900 border border-white/10 rounded p-0.5 text-[0.65rem] font-mono">
                  <button 
                    type="button"
                    onClick={() => setTimeFormat('12h')}
                    className={`px-1.5 py-0.5 rounded ${timeFormat === '12h' ? 'bg-[#E0561B] text-white' : 'text-zinc-400'}`}
                  >
                    12h
                  </button>
                  <button 
                    type="button"
                    onClick={() => setTimeFormat('24h')}
                    className={`px-1.5 py-0.5 rounded ${timeFormat === '24h' ? 'bg-[#E0561B] text-white' : 'text-zinc-400'}`}
                  >
                    24h
                  </button>
                </div>
              </div>

              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                {displaySlots.map((slot) => {
                  const isSlotSelected = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`w-full py-2.5 px-3 rounded-lg text-xs font-mono font-medium border transition-all text-center ${
                        isSlotSelected 
                          ? 'bg-[#E0561B] border-[#E0561B] text-white font-bold' 
                          : 'bg-zinc-900/80 border-white/10 hover:border-[#E0561B]/50 text-zinc-200 hover:text-white'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>

              {selectedSlot && (
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="w-full mt-4 py-2.5 rounded-full bg-[#E0561B] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Next: Your Info</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Details */}
        {step === 'details' && (
          <form onSubmit={handleConfirmBooking} className="p-8 max-w-xl mx-auto space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E0561B]">Step 2 of 2</span>
              <h3 className="text-2xl font-bold font-sans text-white">Confirm Your Details</h3>
              <p className="text-xs text-zinc-400">
                Booking for <span className="text-white font-semibold">{months[selectedMonth]} {selectedDate}, {selectedYear}</span> at <span className="text-[#E0561B] font-semibold">{selectedSlot}</span> ({timezone})
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                  Your Full Name <span className="text-[#E0561B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-2.5 bg-zinc-900 border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E0561B]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                  Work Email Address <span className="text-[#E0561B]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="w-full px-4 py-2.5 bg-zinc-900 border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E0561B]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                  Project Notes / Website Link (Optional)
                </label>
                <textarea
                  rows={3}
                  value={bookingForm.notes}
                  onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                  placeholder="Briefly tell us what you are looking to build or optimize."
                  className="w-full px-4 py-2.5 bg-zinc-900 border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E0561B]"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setStep('pick')}
                className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 rounded-full bg-[#E0561B] hover:bg-[#C2410C] text-xs font-bold uppercase tracking-wider text-white transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Confirming Booking...' : 'Schedule 30-Min Call'}
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Confirmed */}
        {step === 'confirmed' && (
          <div className="p-10 text-center max-w-md mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#E0561B]/20 border border-[#E0561B]/40 text-[#E0561B] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-sans text-white">Meeting Scheduled!</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Thank you, <span className="text-white font-semibold">{bookingForm.name}</span>. A calendar invite with your video room link has been dispatched to <span className="text-[#E0561B] font-mono">{bookingForm.email}</span>.
              </p>
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-zinc-300 mt-4">
                <span>{months[selectedMonth]} {selectedDate}, {selectedYear} · {selectedSlot} ({timezone})</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={companyConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-6 rounded-full bg-white/10 hover:bg-white/15 text-xs font-semibold text-zinc-300 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
