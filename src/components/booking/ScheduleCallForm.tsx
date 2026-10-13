import React, { useState, useMemo } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  AlertCircle,
  Mail
} from 'lucide-react';
import { 
  getAvailableDates, 
  getAvailableTimeSlots, 
  validateBookingForm, 
  submitBookingRequest,
  BookingFormData,
  buildBookingMailto
} from '../../services/bookingService';
import { companyConfig } from '../../data/company';
import { playSuccessSound, playErrorSound, playTabSound } from '../../utils/soundEffects';

interface ScheduleCallFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const ScheduleCallForm: React.FC<ScheduleCallFormProps> = ({ onSuccess, onCancel }) => {
  const dates = useMemo(() => getAvailableDates(), []);
  const [selectedDate, setSelectedDate] = useState<string>(dates[0]?.dateString || '');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const slots = useMemo(() => {
    return selectedDate ? getAvailableTimeSlots(selectedDate) : [];
  }, [selectedDate]);

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
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionResult(null);

    const fullPayload: BookingFormData = {
      ...formData,
      date: selectedDate,
      time: selectedTime,
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
      setSubmissionResult(res);
      if (res.success) {
        playSuccessSound();
        if (onSuccess) onSuccess();
      } else {
        playErrorSound();
      }
    } catch {
      playErrorSound();
      setSubmissionResult({
        success: false,
        message: 'Network service unavailable. Please dispatch your meeting request via direct email or WhatsApp below.',
        fallbackMailto: buildBookingMailto(fullPayload),
        fallbackWhatsApp: `${companyConfig.whatsappUrl}?text=${encodeURIComponent(
          `Hi Qavironel Team, I would like to schedule an Architecture Call.\nName: ${fullPayload.name}\nDate: ${fullPayload.date} at ${fullPayload.time}`
        )}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionResult?.success) {
    return (
      <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-300 dark:border-emerald-700/50 shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-black dark:text-white">
            Request Transmitted
          </span>
          <h3 className="font-sans font-bold text-2xl text-black dark:text-white dark:text-[#F5F5F0]">
            Meeting Request Received
          </h3>
          <p className="text-sm text-zinc-500 dark:text-[#A7B0A7] leading-relaxed font-light">
            {submissionResult.message}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#F5F5F0] dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 dark:border-white/10 max-w-sm mx-auto text-left text-xs space-y-1 font-mono text-black dark:text-white dark:text-[#F5F5F0]">
          <p><span className="text-zinc-500 dark:text-[#A7B0A7]">Date:</span> {selectedDate}</p>
          <p><span className="text-zinc-500 dark:text-[#A7B0A7]">Slot:</span> {selectedTime}</p>
          <p><span className="text-zinc-500 dark:text-[#A7B0A7]">Recipient:</span> {formData.email}</p>
          <p><span className="text-zinc-500 dark:text-[#A7B0A7]">Host:</span> Maher Bhatt (Lead Systems Engineer)</p>
        </div>

        <div className="pt-2">
          <a
            href={`${companyConfig.whatsappUrl}?text=${encodeURIComponent(
              `Hi Maher, I just submitted an Architecture Call request for ${selectedDate} at ${selectedTime}. Looking forward to connecting!`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-black dark:text-white hover:underline"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Notify directly via WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  const labelClass = `block text-xs font-mono font-bold uppercase tracking-wider mb-2 text-black dark:text-white dark:text-[#F5F5F0]`;
  const inputClass = `w-full px-4 py-3 rounded-xl text-sm transition-all bg-white dark:bg-[#0B100D] border border-black/10 dark:border-white/10 dark:border-white/10 text-black dark:text-white dark:text-[#F5F5F0] placeholder-[#52635A] dark:placeholder-[#83988D] focus:outline-hidden focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white`;

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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1713] dark:bg-white text-white dark:text-black dark:text-white text-xs font-mono font-bold uppercase"
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-mono font-bold uppercase"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </a>
              )}
            </div>
          )}
        </div>
      )}

      {/* Overview Meta */}
      <div className="flex flex-wrap items-center gap-4 py-3 px-4 rounded-xl bg-[#F5F5F0] dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 dark:border-white/10 text-xs font-mono text-zinc-500 dark:text-[#A7B0A7]">
        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-black dark:text-white" /> 30 Minutes</span>
        <span className="flex items-center gap-1.5"><Video className="w-3.5 h-3.5 text-black dark:text-white" /> Google Meet</span>
        <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-black dark:text-white" /> IST / Global Timezones</span>
      </div>

      {/* Step 1: Select Date */}
      <div>
        <label className={labelClass}>
          Select Date <span className="text-black dark:text-white">*</span>
        </label>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
          {dates.map((d) => (
            <button
              key={d.dateString}
              type="button"
              onClick={() => {
                playTabSound();
                setSelectedDate(d.dateString);
                setSelectedTime('');
              }}
              className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                selectedDate === d.dateString
                  ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] dark:bg-white dark:text-[#0A0A0A] dark:border-white shadow-sm'
                  : 'bg-white dark:bg-zinc-900 border-black/10 dark:border-white/10 text-[#0A0A0A] dark:text-white hover:border-black dark:hover:border-white'
              }`}
            >
              <div className="text-[10px] font-mono uppercase tracking-wider opacity-70">{d.dayName}</div>
              <div className="text-base font-bold font-sans mt-0.5">{d.dayNumber}</div>
              <div className="text-[10px] font-mono opacity-70">{d.monthName}</div>
            </button>
          ))}
        </div>
        {errors.date && <p className="mt-1 text-xs text-red-600 font-sans">{errors.date}</p>}
      </div>

      {/* Step 2: Select Time Slot (enforcing 1-hr advance window) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className={labelClass}>
            Select Time Slot <span className="text-black dark:text-white">*</span>
          </label>
          <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
            Min. 1 hour advance notice
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {slots.map((s) => (
            <button
              key={s.time}
              type="button"
              disabled={!s.isAvailable}
              onClick={() => {
                playTabSound();
                setSelectedTime(s.display);
              }}
              className={`py-3 px-4 rounded-xl border text-xs font-mono font-bold transition-all text-center ${
                !s.isAvailable
                  ? 'bg-zinc-100 dark:bg-zinc-900/40 text-zinc-400 dark:text-zinc-600 border-zinc-200 dark:border-zinc-800 cursor-not-allowed line-through'
                  : selectedTime === s.display
                  ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] dark:bg-white dark:text-[#0A0A0A] dark:border-white shadow-sm'
                  : 'bg-white dark:bg-zinc-900 border-black/10 dark:border-white/10 text-[#0A0A0A] dark:text-white hover:border-black dark:hover:border-white cursor-pointer'
              }`}
            >
              {s.display}
            </button>
          ))}
        </div>
        {errors.time && <p className="mt-1 text-xs text-red-600 font-sans">{errors.time}</p>}
      </div>

      {/* Step 3: Contact & Topic Details */}
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
          placeholder="Share your platform goals, current tech stack, or questions for Maher."
          className={inputClass}
        />
      </div>

      {/* Submission Actions */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0A0A0A] hover:bg-[#262626] text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-[#0A0A0A] text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Transmitting Request...</span>
            </>
          ) : (
            <>
              <span>Submit Meeting Request</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="text-xs font-mono uppercase text-zinc-500 hover:text-black dark:text-white dark:hover:text-[#F4F7F5]"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};
