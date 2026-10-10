import React, { useState, useMemo, useEffect } from 'react';
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
  Sparkles,
  FileText,
  Send,
  ShieldCheck,
  Check
} from 'lucide-react';
import { companyConfig } from '../../data/company';

export type BookingModalTab = 'call' | 'quotation';

export const openBookingModal = (tab: BookingModalTab = 'call') => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { tab } }));
  }
};

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

  // Sync tab when initialTab changes or modal reopens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Lock body & html scroll and pause Lenis while modal is open (Zero background scroll bleed)
  useEffect(() => {
    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      (window as any).lenis?.stop();

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        (window as any).lenis?.start();
      };
    }
  }, [isOpen]);

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // TAB 1: CALL BOOKING STATE (Cal.com / sumitx.me style)
  // ---------------------------------------------------------------------------
  interface TimeSlotDefinition {
    id: string;
    hour: number;
    minute: number;
    label12h: string;
    label24h: string;
  }

  const ALL_SLOTS: TimeSlotDefinition[] = useMemo(() => [
    { id: '11-00', hour: 11, minute: 0, label12h: '11:00am', label24h: '11:00' },
    { id: '11-30', hour: 11, minute: 30, label12h: '11:30am', label24h: '11:30' },
    { id: '14-00', hour: 14, minute: 0, label12h: '02:00pm', label24h: '14:00' },
    { id: '14-30', hour: 14, minute: 30, label12h: '02:30pm', label24h: '14:30' },
    { id: '15-00', hour: 15, minute: 0, label12h: '03:00pm', label24h: '15:00' },
    { id: '15-30', hour: 15, minute: 30, label12h: '03:30pm', label24h: '15:30' },
    { id: '16-00', hour: 16, minute: 0, label12h: '04:00pm', label24h: '16:00' },
    { id: '16-30', hour: 16, minute: 30, label12h: '04:30pm', label24h: '16:30' },
    { id: '17-00', hour: 17, minute: 0, label12h: '05:00pm', label24h: '17:00' },
    { id: '17-30', hour: 17, minute: 30, label12h: '05:30pm', label24h: '17:30' },
    { id: '18-00', hour: 18, minute: 0, label12h: '06:00pm', label24h: '18:00' },
    { id: '18-30', hour: 18, minute: 30, label12h: '06:30pm', label24h: '18:30' },
  ], []);

  const isSlotAvailable = (slot: TimeSlotDefinition, year: number, month: number, date: number): boolean => {
    const now = new Date();
    const slotDate = new Date(year, month, date, slot.hour, slot.minute, 0, 0);
    // User must book at least 1 hour from current time
    const minBookingTime = new Date(now.getTime() + 60 * 60 * 1000);
    return slotDate.getTime() >= minBookingTime.getTime();
  };

  const isDateInPast = (year: number, month: number, date: number): boolean => {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    const targetDay = new Date(year, month, date, 0, 0, 0, 0);
    return targetDay.getTime() < todayStart.getTime();
  };

  const isDateToday = (year: number, month: number, date: number): boolean => {
    const now = new Date();
    return (
      now.getFullYear() === year &&
      now.getMonth() === month &&
      now.getDate() === date
    );
  };

  const getInitialBookableDate = () => {
    const now = new Date();
    const todaySlotsAvailable = ALL_SLOTS.some((slot) =>
      isSlotAvailable(slot, now.getFullYear(), now.getMonth(), now.getDate())
    );
    if (todaySlotsAvailable) {
      return {
        year: now.getFullYear(),
        month: now.getMonth(),
        day: now.getDate()
      };
    }
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return {
      year: tomorrow.getFullYear(),
      month: tomorrow.getMonth(),
      day: tomorrow.getDate()
    };
  };

  const initialDateObj = getInitialBookableDate();
  const [selectedDate, setSelectedDate] = useState<number>(initialDateObj.day);
  const [selectedMonth, setSelectedMonth] = useState<number>(initialDateObj.month);
  const [selectedYear, setSelectedYear] = useState<number>(initialDateObj.year);
  const [timeFormat, setTimeFormat] = useState<'12h' | '24h'>('12h');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(() => {
    const first = ALL_SLOTS.find(s => isSlotAvailable(s, initialDateObj.year, initialDateObj.month, initialDateObj.day));
    return first ? first.label12h : null;
  });
  const [timezone, setTimezone] = useState<string>('Asia/Kolkata (IST)');
  const [callStep, setCallStep] = useState<'pick' | 'details' | 'confirmed'>('pick');

  // When modal reopens, ensure valid upcoming bookable date and slot
  useEffect(() => {
    if (isOpen) {
      const validDate = getInitialBookableDate();
      setSelectedYear(validDate.year);
      setSelectedMonth(validDate.month);
      setSelectedDate(validDate.day);
      const validSlots = ALL_SLOTS.filter(s => isSlotAvailable(s, validDate.year, validDate.month, validDate.day));
      setSelectedSlot(validSlots.length > 0 ? (timeFormat === '12h' ? validSlots[0].label12h : validSlots[0].label24h) : null);
      setCallStep('pick');
    }
  }, [isOpen]);

  const [callForm, setCallForm] = useState({
    name: '',
    email: '',
    notes: '',
  });
  const [isSubmittingCall, setIsSubmittingCall] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = useMemo(() => {
    return new Date(selectedYear, selectedMonth + 1, 0).getDate();
  }, [selectedYear, selectedMonth]);

  const firstDayOfWeek = useMemo(() => {
    return new Date(selectedYear, selectedMonth, 1).getDay();
  }, [selectedYear, selectedMonth]);

  const now = new Date();
  const canGoPrevMonth = 
    selectedYear > now.getFullYear() || 
    (selectedYear === now.getFullYear() && selectedMonth > now.getMonth());

  const handlePrevMonth = () => {
    if (!canGoPrevMonth) return;
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

  const handleToggleTimeFormat = (fmt: '12h' | '24h') => {
    setTimeFormat(fmt);
    if (selectedSlot) {
      const found = ALL_SLOTS.find(s => s.label12h === selectedSlot || s.label24h === selectedSlot);
      if (found) {
        setSelectedSlot(fmt === '12h' ? found.label12h : found.label24h);
      }
    }
  };

  const availableSlotsForSelectedDate = useMemo(() => {
    return ALL_SLOTS.filter(slot => isSlotAvailable(slot, selectedYear, selectedMonth, selectedDate));
  }, [ALL_SLOTS, selectedYear, selectedMonth, selectedDate]);

  const handleConfirmCall = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callForm.name || !callForm.email) return;

    if (!selectedSlot) {
      alert('Please select an available time slot.');
      return;
    }

    const slotDef = ALL_SLOTS.find(s => s.label12h === selectedSlot || s.label24h === selectedSlot);
    if (!slotDef || !isSlotAvailable(slotDef, selectedYear, selectedMonth, selectedDate)) {
      alert('Selected slot is no longer available. Bookings require at least 1 hour advance notice. Please select another time slot.');
      setCallStep('pick');
      return;
    }

    setIsSubmittingCall(true);
    setTimeout(() => {
      setIsSubmittingCall(false);
      setCallStep('confirmed');

      try {
        const bookings = JSON.parse(localStorage.getItem('qavironel_bookings') || '[]');
        bookings.push({
          ...callForm,
          date: `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`,
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

  // ---------------------------------------------------------------------------
  // TAB 2: QUOTATION REQUEST STATE (Tailored scope proposal)
  // ---------------------------------------------------------------------------
  const [quoteStep, setQuoteStep] = useState<'form' | 'confirmed'>('form');
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    organization: '',
    selectedScopes: ['High-Impact Custom Web Platform'] as string[],
    timeline: '1–2 Months (Active Product Sprint)',
    engagementModel: 'Full-Cycle Product Architecture & Build',
    requirements: '',
  });
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);

  const scopeOptions = [
    'High-Impact Custom Web Platform',
    'Full-Stack SaaS MVP / Web App',
    'Applied AI & LLM Systems',
    'Brand Identity & Systems',
    'Bespoke E-Commerce Architecture',
    'Architecture & Performance Audit'
  ];

  const toggleScope = (scope: string) => {
    setQuoteForm((prev) => {
      const exists = prev.selectedScopes.includes(scope);
      if (exists) {
        return {
          ...prev,
          selectedScopes: prev.selectedScopes.filter((s) => s !== scope)
        };
      } else {
        return {
          ...prev,
          selectedScopes: [...prev.selectedScopes, scope]
        };
      }
    });
  };

  const handleConfirmQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteForm.name || !quoteForm.email || !quoteForm.requirements) return;

    setIsSubmittingQuote(true);
    setTimeout(() => {
      setIsSubmittingQuote(false);
      setQuoteStep('confirmed');

      try {
        const quotes = JSON.parse(localStorage.getItem('qavironel_quotations') || '[]');
        quotes.push({
          ...quoteForm,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('qavironel_quotations', JSON.stringify(quotes));
      } catch {
        // ignore
      }
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-6 backdrop-blur-sm animate-fade-in overscroll-contain"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto overscroll-contain bg-white dark:bg-[#0E0E12] border border-[#E5E7EB] dark:border-white/10 rounded-2xl shadow-2xl text-[#0A0A0A] dark:text-[#F4F4F5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header & Tab Switcher */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-[#0E0E12]/95 backdrop-blur-md border-b border-[#E5E7EB] dark:border-white/10 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E0561B]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0A] dark:text-white">
              Qavironel Client Portal
            </span>
          </div>

          {/* Dual Tabs Pill Switcher */}
          <div className="flex items-center bg-[#F4F4F5] dark:bg-[#18181D] p-1 rounded-full border border-[#E5E7EB] dark:border-[#27272A] self-start sm:self-center">
            <button
              type="button"
              onClick={() => setActiveTab('call')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'call'
                  ? 'bg-white dark:bg-[#27272A] text-[#0A0A0A] dark:text-white shadow-xs border border-[#E5E7EB] dark:border-white/10'
                  : 'text-[#71717A] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-white'
              }`}
            >
              <CalendarIcon className={`w-3.5 h-3.5 ${activeTab === 'call' ? 'text-[#E0561B]' : ''}`} />
              <span>Book a Call (30m)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('quotation')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'quotation'
                  ? 'bg-white dark:bg-[#27272A] text-[#0A0A0A] dark:text-white shadow-xs border border-[#E5E7EB] dark:border-white/10'
                  : 'text-[#71717A] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-white'
              }`}
            >
              <FileText className={`w-3.5 h-3.5 ${activeTab === 'quotation' ? 'text-[#E0561B]' : ''}`} />
              <span>Request Quotation</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 sm:static p-2 rounded-full hover:bg-[#F4F4F5] dark:hover:bg-[#1C1C22] text-[#71717A] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* =================================================================== */}
        {/* TAB 1: BOOK A DISCOVERY CALL (CAL.COM STYLE) */}
        {/* =================================================================== */}
        {activeTab === 'call' && (
          <div>
            {callStep === 'pick' && (
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Left Column: Meeting Info (4 cols) */}
                <div className="md:col-span-4 space-y-6 md:border-r md:border-[#E5E7EB] md:pr-6">
                  <div className="space-y-1">
                    <div className="w-10 h-10 rounded-xl bg-[#E0561B]/10 border border-[#E0561B]/20 text-[#E0561B] flex items-center justify-center font-bold font-sans">
                      Q
                    </div>
                    <h3 className="font-bold text-lg text-[#0A0A0A] pt-2">Qavironel Technologies</h3>
                    <p className="text-sm font-semibold text-[#E0561B]">30-Min Discovery & Scoping Session</p>
                  </div>

                  <div className="space-y-3 text-xs text-[#52525B]">
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#E0561B]" />
                      <span className="font-medium">30 Minutes Duration</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Video className="w-4 h-4 text-[#E0561B]" />
                      <span>Google Meet video room provided</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-[#E0561B]" />
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="bg-[#F8F9FA] border border-[#E5E7EB] rounded px-2.5 py-1 text-xs text-[#0A0A0A] focus:outline-none focus:border-[#E0561B]"
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

                  <div className="p-4 bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl text-xs space-y-2">
                    <p className="font-bold text-[#0A0A0A] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Direct Technical Leadership
                    </p>
                    <ul className="space-y-1 text-[#52525B] leading-relaxed">
                      <li>• Discuss architecture & tech stack options</li>
                      <li>• Transparent delivery roadmap & milestones</li>
                      <li>• No junior salespeople or generic scripts</li>
                    </ul>
                  </div>
                </div>

                {/* Middle Column: Calendar (5 cols) */}
                <div className="md:col-span-5 space-y-4">
                  <div className="flex items-center justify-between pb-2">
                    <span className="font-bold text-sm text-[#0A0A0A]">
                      {months[selectedMonth]} {selectedYear}
                    </span>
                    <div className="flex items-center gap-1">
                      <button 
                        type="button"
                        disabled={!canGoPrevMonth}
                        onClick={handlePrevMonth}
                        className={`p-1.5 rounded transition-colors ${
                          canGoPrevMonth 
                            ? 'hover:bg-[#F4F4F5] text-[#52525B] hover:text-[#0A0A0A]' 
                            : 'opacity-25 cursor-not-allowed text-[#A1A1AA]'
                        }`}
                        title={canGoPrevMonth ? 'Previous month' : 'Cannot navigate to past months'}
                        aria-label="Previous month"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button 
                        type="button"
                        onClick={handleNextMonth}
                        className="p-1.5 rounded hover:bg-[#F4F4F5] text-[#52525B] hover:text-[#0A0A0A] transition-colors"
                        title="Next month"
                        aria-label="Next month"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Day headers */}
                  <div className="grid grid-cols-7 gap-1 text-center text-[0.7rem] font-mono font-semibold text-[#71717A]">
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
                      const isPast = isDateInPast(selectedYear, selectedMonth, day);
                      const isToday = isDateToday(selectedYear, selectedMonth, day);

                      return (
                        <button
                          key={day}
                          type="button"
                          disabled={isPast}
                          onClick={() => {
                            if (isPast) return;
                            setSelectedDate(day);
                            const validForDay = ALL_SLOTS.filter(s => isSlotAvailable(s, selectedYear, selectedMonth, day));
                            const currentStillValid = validForDay.some(s => 
                              timeFormat === '12h' ? s.label12h === selectedSlot : s.label24h === selectedSlot
                            );
                            if (!currentStillValid) {
                              setSelectedSlot(validForDay.length > 0 ? (timeFormat === '12h' ? validForDay[0].label12h : validForDay[0].label24h) : null);
                            }
                          }}
                          className={`h-9 flex items-center justify-center rounded-lg transition-colors font-medium relative ${
                            isPast 
                              ? 'text-[#A1A1AA]/40 cursor-not-allowed bg-transparent hover:bg-transparent' 
                              : isSelected 
                                ? 'bg-[#E0561B] text-white font-bold shadow-md shadow-[#E0561B]/20' 
                                : isToday 
                                  ? 'bg-[#F4F4F5] text-[#0A0A0A] font-bold border border-[#E0561B]' 
                                  : 'hover:bg-[#F4F4F5] text-[#0A0A0A]'
                          }`}
                          title={isPast ? 'Past date cannot be booked' : undefined}
                        >
                          <span className={isPast ? 'line-through decoration-[#A1A1AA]/50' : ''}>{day}</span>
                          {isToday && !isSelected && (
                            <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#E0561B]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Time Slots (3 cols) */}
                <div className="md:col-span-3 space-y-4 md:border-l md:border-[#E5E7EB] md:pl-6">
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-xs font-mono font-semibold text-[#0A0A0A]">
                      {months[selectedMonth].slice(0, 3)} {selectedDate}
                    </span>
                    <div className="flex items-center bg-[#F4F4F5] border border-[#E5E7EB] rounded p-0.5 text-[0.65rem] font-mono">
                      <button 
                        type="button"
                        onClick={() => handleToggleTimeFormat('12h')}
                        className={`px-1.5 py-0.5 rounded transition-colors ${timeFormat === '12h' ? 'bg-[#E0561B] text-white font-bold' : 'text-[#71717A]'}`}
                      >
                        12h
                      </button>
                      <button 
                        type="button"
                        onClick={() => handleToggleTimeFormat('24h')}
                        className={`px-1.5 py-0.5 rounded transition-colors ${timeFormat === '24h' ? 'bg-[#E0561B] text-white font-bold' : 'text-[#71717A]'}`}
                      >
                        24h
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#F8F9FA] border border-[#E5E7EB] text-[0.68rem] font-mono text-[#71717A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E0561B] shrink-0" />
                    <span>Min 1-hr advance notice required</span>
                  </div>

                  {availableSlotsForSelectedDate.length === 0 ? (
                    <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-center space-y-2 my-2">
                      <Clock className="w-5 h-5 text-[#E0561B] mx-auto opacity-80" />
                      <p className="text-xs font-bold text-[#0A0A0A]">
                        {isDateToday(selectedYear, selectedMonth, selectedDate)
                          ? 'No slots remaining today'
                          : 'No slots available on this date'}
                      </p>
                      <p className="text-[0.7rem] text-[#71717A] leading-relaxed">
                        {isDateToday(selectedYear, selectedMonth, selectedDate)
                          ? 'Discovery calls require at least 1 hour preparation notice. Please select tomorrow or a future date.'
                          : 'Please choose another date on the calendar.'}
                      </p>
                      {isDateToday(selectedYear, selectedMonth, selectedDate) && (
                        <button
                          type="button"
                          onClick={() => {
                            const tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            setSelectedYear(tomorrow.getFullYear());
                            setSelectedMonth(tomorrow.getMonth());
                            setSelectedDate(tomorrow.getDate());
                            const tomorrowSlots = ALL_SLOTS.filter(s => 
                              isSlotAvailable(s, tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate())
                            );
                            if (tomorrowSlots.length > 0) {
                              setSelectedSlot(timeFormat === '12h' ? tomorrowSlots[0].label12h : tomorrowSlots[0].label24h);
                            }
                          }}
                          className="inline-block mt-1 px-3 py-1.5 rounded-full bg-[#0A0A0A] hover:bg-[#E0561B] text-white text-[0.65rem] font-bold uppercase tracking-wider transition-colors"
                        >
                          View Tomorrow's Slots →
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                      {availableSlotsForSelectedDate.map((slotDef) => {
                        const slotLabel = timeFormat === '12h' ? slotDef.label12h : slotDef.label24h;
                        const isSlotSelected = selectedSlot === slotLabel;
                        return (
                          <button
                            key={slotDef.id}
                            type="button"
                            onClick={() => setSelectedSlot(slotLabel)}
                            className={`w-full py-2.5 px-3 rounded-lg text-xs font-mono font-medium border transition-all text-center ${
                              isSlotSelected 
                                ? 'bg-[#E0561B] border-[#E0561B] text-white font-bold shadow-xs' 
                                : 'bg-white border-[#E5E7EB] hover:border-[#E0561B]/60 text-[#0A0A0A] hover:bg-[#F8F9FA]'
                            }`}
                          >
                            {slotLabel}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {selectedSlot && (
                    <button
                      type="button"
                      onClick={() => setCallStep('details')}
                      className="w-full mt-3 py-2.5 rounded-full bg-[#E0561B] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <span>Next: Enter Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {callStep === 'details' && (
              <form onSubmit={handleConfirmCall} className="p-8 max-w-xl mx-auto space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E0561B] font-semibold">Step 2 of 2</span>
                  <h3 className="text-2xl font-bold font-sans text-[#0A0A0A]">Confirm Discovery Session</h3>
                  <p className="text-xs text-[#52525B]">
                    Slot: <span className="text-[#0A0A0A] font-semibold">{months[selectedMonth]} {selectedDate}, {selectedYear}</span> at <span className="text-[#E0561B] font-semibold">{selectedSlot}</span> ({timezone})
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#0A0A0A] font-semibold mb-1.5">
                      Your Full Name <span className="text-[#E0561B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={callForm.name}
                      onChange={(e) => setCallForm({ ...callForm, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-sm text-[#0A0A0A] placeholder-[#71717A] focus:outline-none focus:border-[#E0561B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#0A0A0A] font-semibold mb-1.5">
                      Work Email Address <span className="text-[#E0561B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={callForm.email}
                      onChange={(e) => setCallForm({ ...callForm, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-sm text-[#0A0A0A] placeholder-[#71717A] focus:outline-none focus:border-[#E0561B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#0A0A0A] font-semibold mb-1.5">
                      Project Notes / Website Link (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={callForm.notes}
                      onChange={(e) => setCallForm({ ...callForm, notes: e.target.value })}
                      placeholder="Tell us what you're building or links to Figma / existing systems."
                      className="w-full px-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-sm text-[#0A0A0A] placeholder-[#71717A] focus:outline-none focus:border-[#E0561B] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#E5E7EB]">
                  <button
                    type="button"
                    onClick={() => setCallStep('pick')}
                    className="px-5 py-2.5 rounded-full bg-[#F4F4F5] hover:bg-[#E5E7EB] text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingCall}
                    className="flex-1 py-3 rounded-full bg-[#E0561B] hover:bg-[#C2410C] text-xs font-bold uppercase tracking-wider text-white transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    {isSubmittingCall ? 'Scheduling...' : 'Confirm 30-Min Call'}
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Confirmed */}
            {callStep === 'confirmed' && (
              <div className="p-10 text-center max-w-md mx-auto space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-sans text-[#0A0A0A]">Meeting Scheduled!</h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Thank you, <span className="text-[#0A0A0A] font-semibold">{callForm.name}</span>. A calendar invitation with the Google Meet room link has been dispatched to <span className="text-[#E0561B] font-mono font-semibold">{callForm.email}</span>.
                  </p>
                  <div className="p-3 bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl text-xs font-mono text-[#0A0A0A] mt-4 font-semibold">
                    <span>{months[selectedMonth]} {selectedDate}, {selectedYear} · {selectedSlot} ({timezone})</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href={companyConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={onClose}
                    className="py-2.5 px-6 rounded-full bg-[#F4F4F5] hover:bg-[#E5E7EB] text-xs font-semibold text-[#52525B] transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: REQUEST AN ARCHITECTURAL QUOTATION */}
        {/* =================================================================== */}
        {activeTab === 'quotation' && (
          <div className="p-6 sm:p-8">
            {quoteStep === 'form' && (
              <form onSubmit={handleConfirmQuote} className="max-w-2xl mx-auto space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E0561B] font-semibold block mb-1">
                    Direct Scope & Quotation Proposal
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#0A0A0A]">
                    Request a Project Quotation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525B] mt-1 leading-relaxed">
                    Select your project requirements and share details below. Our senior engineering team evaluates your scope and delivers an itemized milestone quotation within 24 hours.
                  </p>
                </div>

                {/* Scope Multi-Select Pills */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#0A0A0A] font-semibold mb-2.5">
                    Select Project Deliverables (Click to toggle)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {scopeOptions.map((scope) => {
                      const active = quoteForm.selectedScopes.includes(scope);
                      return (
                        <button
                          key={scope}
                          type="button"
                          onClick={() => toggleScope(scope)}
                          className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 ${
                            active
                              ? 'bg-[#E0561B] border-[#E0561B] text-white font-semibold shadow-xs'
                              : 'bg-[#F8F9FA] border-[#E5E7EB] text-[#52525B] hover:border-[#E0561B]/40 hover:text-[#0A0A0A]'
                          }`}
                        >
                          {active && <Check className="w-3 h-3 text-white" />}
                          <span>{scope}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Timeline & Engagement Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#0A0A0A] font-semibold mb-1.5">
                      Target Timeline
                    </label>
                    <select
                      value={quoteForm.timeline}
                      onChange={(e) => setQuoteForm({ ...quoteForm, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#0A0A0A] focus:outline-none focus:border-[#E0561B]"
                    >
                      <option value="Immediate (Next 2–4 Weeks)">Immediate (Next 2–4 Weeks)</option>
                      <option value="1–2 Months (Active Product Sprint)">1–2 Months (Active Product Sprint)</option>
                      <option value="3+ Months (Strategic Roadmap)">3+ Months (Strategic Roadmap)</option>
                      <option value="Flexible / Milestone-Driven">Flexible / Milestone-Driven</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#0A0A0A] font-semibold mb-1.5">
                      Engagement Model
                    </label>
                    <select
                      value={quoteForm.engagementModel}
                      onChange={(e) => setQuoteForm({ ...quoteForm, engagementModel: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#0A0A0A] focus:outline-none focus:border-[#E0561B]"
                    >
                      <option value="Full-Cycle Product Architecture & Build">Full-Cycle Product Architecture & Build</option>
                      <option value="Design & Frontend Engineering Sprint">Design & Frontend Engineering Sprint</option>
                      <option value="AI Integration & Custom Workflows">AI Integration & Custom Workflows</option>
                      <option value="Dedicated Technical Studio Retainer">Dedicated Technical Studio Retainer</option>
                    </select>
                  </div>
                </div>

                {/* Client Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#0A0A0A] font-semibold mb-1.5">
                      Your Name <span className="text-[#E0561B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#0A0A0A] placeholder-[#71717A] focus:outline-none focus:border-[#E0561B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#0A0A0A] font-semibold mb-1.5">
                      Work Email <span className="text-[#E0561B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#0A0A0A] placeholder-[#71717A] focus:outline-none focus:border-[#E0561B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#0A0A0A] font-semibold mb-1.5">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    value={quoteForm.organization}
                    onChange={(e) => setQuoteForm({ ...quoteForm, organization: e.target.value })}
                    placeholder="Acme Corp / Stealth Startup"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#0A0A0A] placeholder-[#71717A] focus:outline-none focus:border-[#E0561B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#0A0A0A] font-semibold mb-1.5">
                    Project Requirements & Scope Description <span className="text-[#E0561B]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={quoteForm.requirements}
                    onChange={(e) => setQuoteForm({ ...quoteForm, requirements: e.target.value })}
                    placeholder="Describe what you want to achieve, key user flows, target platform, any third-party APIs or existing designs."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#0A0A0A] placeholder-[#71717A] focus:outline-none focus:border-[#E0561B]"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                  <p className="text-[0.75rem] text-[#71717A] font-mono">
                    ✦ Guaranteed 24h engineering turnaround
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmittingQuote}
                    className="px-6 py-3 rounded-full bg-[#E0561B] hover:bg-[#C2410C] text-xs font-bold uppercase tracking-wider text-white transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmittingQuote ? 'Submitting Scope...' : 'Request Quotation'}</span>
                  </button>
                </div>
              </form>
            )}

            {quoteStep === 'confirmed' && (
              <div className="p-10 text-center max-w-md mx-auto space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-sans text-[#0A0A0A]">
                    Quotation Request Received!
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Thank you, <span className="text-[#0A0A0A] font-semibold">{quoteForm.name}</span>. Our technical director is assessing your requirements. An itemized scope & quotation proposal will be delivered to <span className="text-[#E0561B] font-mono font-semibold">{quoteForm.email}</span> within 24 hours.
                  </p>
                </div>

                <div className="p-4 bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl text-left text-xs space-y-2">
                  <p className="font-bold text-[#0A0A0A]">Captured Deliverables:</p>
                  <div className="flex flex-wrap gap-1">
                    {quoteForm.selectedScopes.map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-white border border-[#E5E7EB] rounded text-[0.7rem] text-[#0A0A0A]">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-[#71717A] pt-1">Target: {quoteForm.timeline}</p>
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/919879529957?text=${encodeURIComponent(
                      `Hello Qavironel Technologies, I just submitted a quotation request for: ${quoteForm.selectedScopes.join(', ')}.\nTimeline: ${quoteForm.timeline}\nFrom: ${quoteForm.name} (${quoteForm.email})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Scope to WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={onClose}
                    className="py-2.5 px-6 rounded-full bg-[#F4F4F5] hover:bg-[#E5E7EB] text-xs font-semibold text-[#52525B] transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

