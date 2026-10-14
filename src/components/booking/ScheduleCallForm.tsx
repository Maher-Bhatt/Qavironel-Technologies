import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  AlertCircle,
  Mail,
  Search,
  ChevronDown,
  Download,
  ExternalLink,
  Check,
  Sparkles
} from 'lucide-react';
import { 
  getAvailableDates, 
  getAvailableTimeSlots, 
  validateBookingForm, 
  submitBookingRequest,
  BookingFormData,
  buildBookingMailto
} from '../../services/bookingService';
import { 
  detectUserTimezone, 
  convertSlotToUserTimezone, 
  getTimezoneShortName, 
  COMMON_TIMEZONES, 
  STUDIO_TIMEZONE,
  buildGoogleCalendarUrl,
  buildIcsDataUri,
  ConvertedSlot
} from '../../utils/timezone';
import { companyConfig } from '../../data/company';
import { playSuccessSound, playErrorSound, playTabSound } from '../../utils/soundEffects';

interface ScheduleCallFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const ScheduleCallForm: React.FC<ScheduleCallFormProps> = ({ onSuccess, onCancel }) => {
  // 1. Timezone detection & state
  const detectedTz = useMemo(() => detectUserTimezone(), []);
  const [userTimezone, setUserTimezone] = useState<string>(detectedTz);
  const [isTzDropdownOpen, setIsTzDropdownOpen] = useState<boolean>(false);
  const [tzSearchQuery, setTzSearchQuery] = useState<string>('');
  const tzDropdownRef = useRef<HTMLDivElement>(null);

  // Close timezone dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (tzDropdownRef.current && !tzDropdownRef.current.contains(e.target as Node)) {
        setIsTzDropdownOpen(false);
      }
    };
    if (isTzDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isTzDropdownOpen]);

  // Filtered timezone options
  const timezoneOptions = useMemo(() => {
    const query = tzSearchQuery.toLowerCase().trim();
    const list = [...COMMON_TIMEZONES];

    // If detected timezone is not in the common list, prepend it
    if (!list.some(t => t.id === detectedTz)) {
      list.unshift({
        id: detectedTz,
        label: `${detectedTz.replace(/_/g, ' ')} (Your Detected Timezone)`,
        region: 'Auto-Detected',
        cities: 'Current Location',
      });
    }

    if (!query) return list;
    return list.filter(t => 
      t.id.toLowerCase().includes(query) ||
      t.label.toLowerCase().includes(query) ||
      t.region.toLowerCase().includes(query) ||
      t.cities.toLowerCase().includes(query)
    );
  }, [detectedTz, tzSearchQuery]);

  // 2. Dates & Slots
  const dates = useMemo(() => getAvailableDates(), []);
  const [selectedDate, setSelectedDate] = useState<string>(dates[0]?.dateString || '');
  const [selectedSlotData, setSelectedSlotData] = useState<ConvertedSlot | null>(null);

  // Raw slots in IST
  const rawSlots = useMemo(() => {
    return selectedDate ? getAvailableTimeSlots(selectedDate) : [];
  }, [selectedDate]);

  // Converted slots for user's timezone
  const convertedSlots = useMemo(() => {
    return rawSlots.map((raw) => {
      const converted = convertSlotToUserTimezone(selectedDate, raw.time, userTimezone);
      return {
        ...raw,
        converted,
      };
    });
  }, [rawSlots, selectedDate, userTimezone]);

  // Form inputs
  const [formData, setFormData] = useState<Omit<BookingFormData, 'date' | 'time'>>({
    name: '',
    email: '',
    organization: '',
    topic: 'Architecture Review & Platform Discovery',
    notes: '',
    hpField: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
    fallbackMailto?: string;
    fallbackWhatsApp?: string;
    bookingRecord?: BookingFormData;
    convertedRecord?: ConvertedSlot;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmissionResult(null);

    if (!selectedSlotData) {
      setErrors({ time: 'Please select a meeting time slot.' });
      playErrorSound();
      return;
    }

    const fullPayload: BookingFormData = {
      ...formData,
      date: selectedDate,
      time: selectedSlotData.istTime,
      timezone: userTimezone,
      localTimeDisplay: `${selectedSlotData.userTimeDisplay} ${selectedSlotData.userTimezoneAbbr}`,
      studioTimeDisplay: selectedSlotData.istDisplay,
    };

    const validation = validateBookingForm(fullPayload);
    if (!validation.isValid) {
      playErrorSound();
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await submitBookingRequest(fullPayload);
      if (res.success) {
        playSuccessSound();
        setSubmissionResult({
          ...res,
          bookingRecord: fullPayload,
          convertedRecord: selectedSlotData,
        });
        if (onSuccess) onSuccess();
      } else {
        playErrorSound();
        setSubmissionResult(res);
      }
    } catch {
      playErrorSound();
      setSubmissionResult({
        success: false,
        message: 'Network service unavailable. Please dispatch your meeting request via direct email or WhatsApp below.',
        fallbackMailto: buildBookingMailto(fullPayload),
        fallbackWhatsApp: `${companyConfig.whatsappUrl}?text=${encodeURIComponent(
          `Hi Qavironel Team, I would like to schedule an Architecture Call.\nName: ${fullPayload.name}\nDate: ${fullPayload.date} at ${selectedSlotData.userTimeDisplay} (${userTimezone})`
        )}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS CONFIRMATION VIEW WITH 1-CLICK CALENDAR SYNC
  if (submissionResult?.success && submissionResult.bookingRecord && submissionResult.convertedRecord) {
    const { bookingRecord, convertedRecord } = submissionResult;
    const gCalUrl = buildGoogleCalendarUrl({
      title: `Technical Architecture Review — Qavironel Technologies`,
      description: `Direct Founder Architecture Review with Maher Bhatt & Anurag Pandey.\n\nTopic: ${bookingRecord.topic}\nClient: ${bookingRecord.name} (${bookingRecord.email})\nOrganization: ${bookingRecord.organization || 'N/A'}\n\nGoogle Meet link will be activated for the call.`,
      startDate: convertedRecord.dateObj,
      durationMinutes: 30,
      location: 'Google Meet',
    });

    const icsUri = buildIcsDataUri({
      title: `Technical Architecture Review — Qavironel Technologies`,
      description: `Direct Founder Architecture Review with Maher Bhatt & Anurag Pandey.\nTopic: ${bookingRecord.topic}`,
      startDate: convertedRecord.dateObj,
      durationMinutes: 30,
      location: 'Google Meet',
    });

    return (
      <div role="status" aria-live="polite" className="py-6 text-center space-y-6 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-300 dark:border-emerald-700/50 shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2 max-w-lg mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Meeting Request Dispatched</span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white">
            Architecture Call Requested
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            Your meeting request has been received. Maher Bhatt will review availability and confirm your calendar invite with the official Google Meet link within 12 hours.
          </p>
        </div>

        {/* Dual-Timezone Meeting Dossier */}
        <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/15 max-w-md mx-auto text-left text-xs space-y-2.5 font-mono shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-black/10 dark:border-white/10 font-bold text-black dark:text-white">
            <span>MEETING SPECIFICATION</span>
            <span className="text-[0.68rem] text-emerald-600 dark:text-emerald-400">30 MIN GOOGLE MEET</span>
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="flex items-start justify-between">
              <span className="text-zinc-500">YOUR LOCAL TIME:</span>
              <span className="font-bold text-black dark:text-white text-right">
                {convertedRecord.userDateDisplay} · {convertedRecord.userTimeDisplay} ({convertedRecord.userTimezoneAbbr})
              </span>
            </div>

            <div className="flex items-start justify-between">
              <span className="text-zinc-500">STUDIO TIME (IST):</span>
              <span className="text-zinc-700 dark:text-zinc-300 text-right">
                {convertedRecord.istDisplay}
              </span>
            </div>

            <div className="flex items-start justify-between">
              <span className="text-zinc-500">TIMEZONE APPLIED:</span>
              <span className="text-zinc-700 dark:text-zinc-300 text-right truncate max-w-[200px]">
                {userTimezone}
              </span>
            </div>

            <div className="flex items-start justify-between">
              <span className="text-zinc-500">ATTENDEES:</span>
              <span className="text-black dark:text-white text-right">
                {bookingRecord.email} & Maher Bhatt (Founding Lead)
              </span>
            </div>
          </div>
        </div>

        {/* 1-Click Calendar Hold Options */}
        <div className="space-y-3 max-w-md mx-auto pt-1">
          <div className="text-[0.68rem] font-mono uppercase tracking-wider text-zinc-500">
            Provisional Calendar Hold (UTC Grounded)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href={gCalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass-shimmer inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-mono font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-sm"
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Hold in Google Calendar</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={icsUri}
              download="Qavironel-Architecture-Call-Provisional.ics"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-black/10 dark:border-white/10 text-black dark:text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .ICS Hold</span>
            </a>
          </div>

          <div className="pt-2">
            <a
              href={`${companyConfig.whatsappUrl}?text=${encodeURIComponent(
                `Hi Maher, I just scheduled an Architecture Call for ${convertedRecord.userDateDisplay} at ${convertedRecord.userTimeDisplay} (${userTimezone} / ${convertedRecord.istDisplay}). Looking forward to discussing system architecture!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-black dark:text-white hover:underline"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Notify Maher directly via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  const labelClass = `block text-xs font-mono font-bold uppercase tracking-wider mb-2 text-black dark:text-white`;
  const inputClass = `w-full px-4 py-3.5 rounded-xl text-sm transition-all bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-black dark:text-white placeholder-zinc-400 focus:outline-hidden focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', height: 0, overflow: 'hidden' }}>
        <input
          type="text"
          name="meeting_bot_hp"
          tabIndex={-1}
          autoComplete="off"
          value={formData.hpField}
          onChange={(e) => setFormData({ ...formData, hpField: e.target.value })}
        />
      </div>

      {submissionResult && !submissionResult.success && (
        <div role="alert" className="p-4 rounded-xl border bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50 text-red-900 dark:text-red-200 text-xs space-y-2">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <p className="font-semibold">{submissionResult.message}</p>
          </div>
          {(submissionResult.fallbackMailto || submissionResult.fallbackWhatsApp) && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-red-200/60 dark:border-red-900/40">
              {submissionResult.fallbackMailto && (
                <a
                  href={submissionResult.fallbackMailto}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black dark:bg-white text-white dark:text-black text-xs font-mono font-bold uppercase"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send via Email</span>
                </a>
              )}
              {submissionResult.fallbackWhatsApp && (
                <a
                  href={submissionResult.fallbackWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-mono font-bold uppercase"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </a>
              )}
            </div>
          )}
        </div>
      )}

      {/* Live Cal.com Direct Booking Card */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 border border-black/10 dark:border-white/10 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Instant Google Meet Booking</span>
            </div>
            <h3 className="font-sans font-bold text-sm sm:text-base text-black dark:text-white">
              Live Calendar &amp; Instant Google Meet Link
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Pick your exact time slot directly on Cal.com to auto-sync with Maher's calendar and get an instant meeting invite.
            </p>
          </div>
          <a
            href={companyConfig.calComUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass-shimmer inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-mono font-bold text-xs uppercase tracking-wider hover:scale-[1.02] transition-all shrink-0 shadow-md"
          >
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Book on Cal.com &rarr;</span>
          </a>
        </div>
      </div>

      <div className="relative flex py-1 items-center">
        <div className="flex-grow border-t border-black/10 dark:border-white/10"></div>
        <span className="flex-shrink mx-4 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
          Or submit preferred slot below
        </span>
        <div className="flex-grow border-t border-black/10 dark:border-white/10"></div>
      </div>

      {/* ========================================================================= */}
      {/* 01. GLOBAL TIMEZONE SELECTOR & CALL PARAMETERS                            */}
      {/* ========================================================================= */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-black/10 dark:border-white/10 text-xs font-mono">
          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-black dark:text-white" />
              <span>30 Min</span>
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
            <span className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-black dark:text-white" />
              <span>Google Meet</span>
            </span>
          </div>

          {/* Interactive Timezone Switcher Pill */}
          <div className="relative" ref={tzDropdownRef}>
            <button
              type="button"
              onClick={() => setIsTzDropdownOpen(!isTzDropdownOpen)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-black border border-black/15 dark:border-white/20 text-xs font-mono font-bold hover:border-black/40 dark:hover:border-white/40 transition-all cursor-pointer shadow-xs group"
              aria-expanded={isTzDropdownOpen}
              aria-haspopup="listbox"
              title="Click to switch your timezone"
            >
              <Globe className="w-3.5 h-3.5 text-black dark:text-white shrink-0 group-hover:rotate-12 transition-transform" />
              <span className="text-black dark:text-white">
                {getTimezoneShortName(userTimezone)}
              </span>
              <span className="text-[0.68rem] text-zinc-500 font-normal truncate max-w-[120px] sm:max-w-[180px]">
                {userTimezone.split('/')[1]?.replace(/_/g, ' ') || userTimezone}
              </span>
              {userTimezone === detectedTz && (
                <span className="px-1.5 py-0.2 rounded text-[0.6rem] bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-500/20">
                  Detected
                </span>
              )}
              <ChevronDown className="w-3 h-3 text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
            </button>

            {/* Timezone Selector Modal/Dropdown */}
            {isTzDropdownOpen && (
              <div 
                className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-2xl bg-white dark:bg-zinc-950 border border-black/15 dark:border-white/20 shadow-2xl z-50 p-3 space-y-2.5 animate-in fade-in zoom-in-95 duration-150"
                role="listbox"
              >
                <div className="flex items-center justify-between pb-2 border-b border-black/10 dark:border-white/10 text-xs font-mono">
                  <span className="font-bold text-black dark:text-white">Select Timezone</span>
                  <span className="text-[0.65rem] text-zinc-500">Auto-detected: {detectedTz}</span>
                </div>

                {/* Search Box */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={tzSearchQuery}
                    onChange={(e) => setTzSearchQuery(e.target.value)}
                    placeholder="Search city, country or timezone..."
                    className="w-full pl-8 pr-3 py-2 rounded-xl text-xs font-mono bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-black dark:text-white focus:outline-hidden focus:border-black dark:focus:border-white"
                    autoFocus
                  />
                </div>

                {/* Quick List */}
                <div className="max-h-60 overflow-y-auto space-y-1 scrollbar-thin">
                  {timezoneOptions.map((tz) => {
                    const isSelected = userTimezone === tz.id;
                    return (
                      <button
                        key={tz.id}
                        type="button"
                        onClick={() => {
                          playTabSound();
                          setUserTimezone(tz.id);
                          setIsTzDropdownOpen(false);
                          setSelectedSlotData(null);
                        }}
                        className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                            : 'hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300'
                        }`}
                      >
                        <div className="space-y-0.5 min-w-0">
                          <div className="text-xs font-mono flex items-center gap-1.5 truncate">
                            <span>{tz.label}</span>
                            {tz.id === detectedTz && (
                              <span className={`text-[0.6rem] px-1 py-0.2 rounded ${isSelected ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black' : 'bg-emerald-500/15 text-emerald-600'}`}>
                                Local
                              </span>
                            )}
                          </div>
                          <div className={`text-[0.65rem] truncate ${isSelected ? 'text-zinc-300 dark:text-zinc-600' : 'text-zinc-500 dark:text-zinc-400'}`}>
                            {tz.cities}
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-2 border-t border-black/10 dark:border-white/10 text-[0.65rem] font-mono text-zinc-500 text-center">
                  Studio active in India Standard Time ({STUDIO_TIMEZONE})
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Dual-Timezone Active Banner */}
        <div className="py-2 px-3.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 flex items-center justify-between text-[0.72rem] font-mono">
          <span className="text-zinc-600 dark:text-zinc-400">
            Time slots converted to: <strong className="text-black dark:text-white">{userTimezone} ({getTimezoneShortName(userTimezone)})</strong>
          </span>
          <span className="hidden sm:inline text-zinc-500 text-[0.68rem]">
            Studio: IST (UTC+5:30)
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 02. SELECT DATE (14 UPCOMING DAYS)                                        */}
      {/* ========================================================================= */}
      <div>
        <label className={labelClass}>
          Select Date <span className="text-black dark:text-white">*</span>
        </label>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
          {dates.map((d) => {
            const isSelected = selectedDate === d.dateString;
            return (
              <button
                key={d.dateString}
                type="button"
                onClick={() => {
                  playTabSound();
                  setSelectedDate(d.dateString);
                  setSelectedSlotData(null);
                }}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-md'
                    : 'bg-white dark:bg-zinc-900 border-black/10 dark:border-white/10 text-black dark:text-white hover:border-black/40 dark:hover:border-white/40'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider opacity-70">{d.dayName}</div>
                <div className="text-base font-bold font-sans mt-0.5">{d.dayNumber}</div>
                <div className="text-[10px] font-mono opacity-70">{d.monthName}</div>
              </button>
            );
          })}
        </div>
        {errors.date && <p className="mt-1 text-xs text-red-600 font-sans">{errors.date}</p>}
      </div>

      {/* ========================================================================= */}
      {/* 03. SELECT CONVERTED TIME SLOT (SHOWING USER & STUDIO TIMES)               */}
      {/* ========================================================================= */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className={labelClass}>
            Select Time Slot <span className="text-black dark:text-white">*</span>
          </label>
          <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
            Min. 1 hour advance notice
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {convertedSlots.map(({ time, isAvailable, converted }) => {
            const isSelected = selectedSlotData?.istTime === time;
            return (
              <button
                key={time}
                type="button"
                disabled={!isAvailable}
                onClick={() => {
                  playTabSound();
                  setSelectedSlotData(converted);
                }}
                className={`py-3 px-3.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center cursor-pointer ${
                  !isAvailable
                    ? 'bg-zinc-100 dark:bg-zinc-900/40 text-zinc-400 dark:text-zinc-600 border-zinc-200 dark:border-zinc-800 cursor-not-allowed line-through'
                    : isSelected
                    ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-md scale-[1.01]'
                    : 'bg-white dark:bg-zinc-900 border-black/10 dark:border-white/10 text-black dark:text-white hover:border-black/40 dark:hover:border-white/40 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                }`}
              >
                {/* User's Local Time */}
                <div className="text-xs sm:text-sm font-mono font-bold tracking-tight">
                  {converted.userTimeDisplay}
                </div>

                {/* Studio Time Indicator */}
                <div className={`text-[0.62rem] font-mono mt-0.5 ${
                  isSelected ? 'text-zinc-300 dark:text-zinc-600' : 'text-zinc-500 dark:text-zinc-400'
                }`}>
                  {userTimezone === STUDIO_TIMEZONE ? 'IST (Studio)' : `${converted.istDisplay.split(' ')[0]} IST`}
                </div>

                {/* Date shift notification if slot crosses midnight in user's timezone */}
                {converted.isDifferentDate && (
                  <div className={`text-[0.58rem] font-mono mt-0.5 font-bold ${
                    isSelected ? 'text-[#E6ECE5] dark:text-[#E6ECE5]' : 'text-[#174C3A] dark:text-[#879B89]'
                  }`}>
                    {converted.dateShiftNote}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {errors.time && <p className="mt-1 text-xs text-red-600 font-sans">{errors.time}</p>}
      </div>

      {/* Selected Slot Confirmation Strip */}
      {selectedSlotData && (
        <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/15 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-700 dark:text-zinc-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Selected: <strong>{selectedSlotData.userDateDisplay} at {selectedSlotData.userTimeDisplay} ({selectedSlotData.userTimezoneAbbr})</strong></span>
          </div>
          <span className="text-[0.68rem] text-zinc-500">
            Studio: {selectedSlotData.istDisplay}
          </span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 04. CONTACT & CONSULTATION DETAILS                                        */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="call-name" className={labelClass}>
            Your Name <span className="text-black dark:text-white">*</span>
          </label>
          <input
            id="call-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Jane Doe"
            className={`${inputClass} ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="call-email" className={labelClass}>
            Business Email <span className="text-black dark:text-white">*</span>
          </label>
          <input
            id="call-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@company.com"
            className={`${inputClass} ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="call-org" className={labelClass}>
          Company / Startup (Optional)
        </label>
        <input
          id="call-org"
          type="text"
          value={formData.organization}
          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
          placeholder="e.g. Acme Health / Stealth AI Lab"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="call-topic" className={labelClass}>
          Consultation Focus
        </label>
        <select
          id="call-topic"
          value={formData.topic}
          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
          className={inputClass}
        >
          <option value="Architecture Review & Platform Discovery">Architecture Review & Platform Discovery</option>
          <option value="Full-Stack Web App / SaaS Build Planning">Full-Stack Web App / SaaS Build Planning</option>
          <option value="Applied AI Integration & Workflow Automation">Applied AI Integration & Workflow Automation</option>
          <option value="Performance & Core Web Vitals Remediation">Performance & Core Web Vitals Remediation</option>
          <option value="General Technical Consultation">General Technical Consultation</option>
        </select>
      </div>

      <div>
        <label htmlFor="call-notes" className={labelClass}>
          Brief Context or Questions (Optional)
        </label>
        <textarea
          id="call-notes"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Share your platform goals, current tech stack, or questions for Maher & Anurag."
          className={inputClass}
        />
      </div>

      {/* ========================================================================= */}
      {/* 05. SUBMISSION ACTIONS                                                    */}
      {/* ========================================================================= */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-glass-shimmer w-full sm:w-auto px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-black text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-70 border border-white/10 dark:border-black/10 group"
        >
          {isSubmitting ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Transmitting Request...</span>
            </>
          ) : (
            <>
              <span>Schedule 30-Min Discovery Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="text-xs font-mono uppercase text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white cursor-pointer"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};
