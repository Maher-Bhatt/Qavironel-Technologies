import { companyConfig } from '../data/company';

export interface BookingFormData {
  name: string;
  email: string;
  organization?: string;
  date: string; // YYYY-MM-DD
  time: string; // e.g., '14:00' or '2:00 PM'
  topic: string;
  notes?: string;
  hpField?: string;
  timezone?: string;
  localTimeDisplay?: string;
  studioTimeDisplay?: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  organization?: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  scopeDetails: string;
  features?: string[];
  hpField?: string;
}

export interface BookingSlot {
  time: string;
  display: string;
  isAvailable: boolean;
}

export interface AvailableDate {
  dateString: string; // YYYY-MM-DD
  dayName: string;   // e.g. 'Wed'
  dayNumber: number; // e.g. 11
  monthName: string; // e.g. 'Oct'
  isToday: boolean;
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export const STANDARD_SLOTS = [
  { time: '10:00', display: '10:00 AM' },
  { time: '11:30', display: '11:30 AM' },
  { time: '14:00', display: '02:00 PM' },
  { time: '15:30', display: '03:30 PM' },
  { time: '17:00', display: '05:00 PM' },
  { time: '18:30', display: '06:30 PM' },
  { time: '20:00', display: '08:00 PM' },
  { time: '21:30', display: '09:30 PM' },
];

/**
 * Generates selectable upcoming dates for the next 14 calendar days (excluding past dates).
 */
export function getAvailableDates(nowDate: Date = new Date()): AvailableDate[] {
  const dates: AvailableDate[] = [];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  for (let i = 0; i < 14; i++) {
    const d = new Date(nowDate.getTime());
    d.setDate(d.getDate() + i);

    // Skip Sundays for business architecture reviews
    if (d.getDay() === 0) continue;

    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const dayStr = String(d.getDate()).padStart(2, '0');
    const dateString = `${y}-${m}-${dayStr}`;

    dates.push({
      dateString,
      dayName: dayNames[d.getDay()],
      dayNumber: d.getDate(),
      monthName: monthNames[d.getMonth()],
      isToday: i === 0,
    });
  }

  return dates;
}

/**
 * Filters slots for a given date ensuring:
 * 1. No past slots.
 * 2. Minimum 1 hour buffer from current time for same-day bookings.
 */
export function getAvailableTimeSlots(
  selectedDateString: string,
  nowDate: Date = new Date()
): BookingSlot[] {
  const [year, month, day] = selectedDateString.split('-').map(Number);
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth() + 1;
  const nowDay = nowDate.getDate();

  const isToday = year === nowYear && month === nowMonth && day === nowDay;
  const isPastDate =
    year < nowYear ||
    (year === nowYear && month < nowMonth) ||
    (year === nowYear && month === nowMonth && day < nowDay);

  if (isPastDate) {
    return STANDARD_SLOTS.map((s) => ({ ...s, isAvailable: false }));
  }

  const currentMinutes = nowDate.getHours() * 60 + nowDate.getMinutes();
  const ONE_HOUR_BUFFER = 60; // minimum 60 mins lead time

  return STANDARD_SLOTS.map((slot) => {
    if (!isToday) {
      return { ...slot, isAvailable: true };
    }
    const [h, m] = slot.time.split(':').map(Number);
    const slotMinutes = h * 60 + m;
    const isAvailable = slotMinutes >= currentMinutes + ONE_HOUR_BUFFER;
    return { ...slot, isAvailable };
  });
}

export function validateBookingForm(data: BookingFormData, nowDate: Date = new Date()): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Please provide your name (at least 2 characters).';
  }

  if (!data.email.trim() || !EMAIL_REGEX.test(data.email.trim())) {
    errors.email = 'Please provide a valid business email address.';
  }

  if (!data.date) {
    errors.date = 'Please select a meeting date.';
  }

  if (!data.time) {
    errors.time = 'Please select a meeting time slot.';
  } else if (data.date) {
    const slots = getAvailableTimeSlots(data.date, nowDate);
    const chosenSlot = slots.find((s) => s.time === data.time || s.display === data.time);
    if (!chosenSlot || !chosenSlot.isAvailable) {
      errors.time = 'Selected time slot is either in the past or within the 1-hour advance notice window. Please choose a later slot.';
    }
  }

  if (!data.topic.trim()) {
    errors.topic = 'Please specify the consultation topic.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateQuoteForm(data: QuoteFormData): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Please provide your name (at least 2 characters).';
  }

  if (!data.email.trim() || !EMAIL_REGEX.test(data.email.trim())) {
    errors.email = 'Please provide a valid business email address.';
  }

  if (!data.scopeDetails.trim() || data.scopeDetails.trim().length < 10) {
    errors.scopeDetails = 'Please provide at least 10 characters describing your project requirements.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildBookingMailto(data: BookingFormData): string {
  const subject = encodeURIComponent(`Architecture Call Request: ${data.name.trim()} (${data.topic})`);
  const safeNotes = data.notes?.trim() ? (data.notes.trim().length > 1500 ? data.notes.trim().slice(0, 1500) + '...' : data.notes.trim()) : 'None';
  const timeDetails = data.localTimeDisplay 
    ? `• Local Time: ${data.localTimeDisplay} (${data.timezone || 'Local Timezone'})\n• Studio Time (IST): ${data.studioTimeDisplay || data.time}\n`
    : `• Requested Time Slot: ${data.time}\n• Timezone: ${data.timezone || 'IST'}\n`;

  const body = encodeURIComponent(
    `Hello Maher & Qavironel Team,\n\n` +
    `I would like to schedule a 30-minute architecture review call.\n\n` +
    `• Name: ${data.name.trim()}\n` +
    `• Email: ${data.email.trim()}\n` +
    `• Organization: ${data.organization?.trim() || 'N/A'}\n` +
    `• Requested Date: ${data.date}\n` +
    timeDetails +
    `• Topic: ${data.topic}\n` +
    `• Notes: ${safeNotes}\n\n` +
    `Please send a Google Meet invite to confirm.\n\n` +
    `Best regards,\n${data.name.trim()}`
  );
  return `mailto:${companyConfig.email}?subject=${subject}&body=${body}`;
}

export function buildQuoteMailto(data: QuoteFormData): string {
  const subject = encodeURIComponent(`Quotation & Architecture Brief: ${data.name.trim()} - ${data.projectType}`);
  const safeScope = data.scopeDetails.trim().length > 1500 
    ? data.scopeDetails.trim().slice(0, 1500) + '...' 
    : data.scopeDetails.trim();
  const body = encodeURIComponent(
    `Hello Qavironel Team,\n\n` +
    `I would like to request a formal quotation and scope estimate.\n\n` +
    `• Name: ${data.name.trim()}\n` +
    `• Email: ${data.email.trim()}\n` +
    `• Organization: ${data.organization?.trim() || 'N/A'}\n` +
    `• Project Type: ${data.projectType}\n` +
    `• Budget Range: ${data.budgetRange}\n` +
    `• Target Timeline: ${data.timeline}\n` +
    (data.features && data.features.length > 0 ? `• Deliverables: ${data.features.join(', ')}\n` : '') +
    `\nScope & Objectives:\n${safeScope}\n\n` +
    `Best regards,\n${data.name.trim()}`
  );
  return `mailto:${companyConfig.email}?subject=${subject}&body=${body}`;
}

let lastBookingTime = 0;
let lastQuoteTime = 0;
const SUBMISSION_COOLDOWN_MS = 8000;

export async function submitBookingRequest(data: BookingFormData): Promise<{
  success: boolean;
  message: string;
  fallbackMailto?: string;
  fallbackWhatsApp?: string;
}> {
  const validation = validateBookingForm(data);
  if (!validation.isValid) {
    return {
      success: false,
      message: Object.values(validation.errors)[0] || 'Invalid booking details.',
    };
  }

  // Honeypot check
  if (data.hpField && data.hpField.trim().length > 0) {
    return { success: false, message: 'Request could not be verified.' };
  }

  const now = Date.now();
  if (now - lastBookingTime < SUBMISSION_COOLDOWN_MS) {
    const waitSeconds = Math.ceil((SUBMISSION_COOLDOWN_MS - (now - lastBookingTime)) / 1000);
    return {
      success: false,
      message: `Please wait ${waitSeconds}s before submitting another booking request.`,
    };
  }

  const endpoint = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_BOOKING_ENDPOINT) || '/api/booking';
  const mailtoFallback = buildBookingMailto(data);
  const timeNote = data.localTimeDisplay ? `${data.localTimeDisplay} (${data.timezone})` : data.time;
  const whatsappFallback = `${companyConfig.whatsappUrl}?text=${encodeURIComponent(
    `Hi Maher, I would like to schedule an Architecture Call.\nName: ${data.name}\nDate: ${data.date} at ${timeNote}\nTopic: ${data.topic}`
  )}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString(),
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (res.ok) {
      lastBookingTime = Date.now();
      return {
        success: true,
        message: 'Your meeting request has been submitted. Maher Bhatt will review availability and confirm your calendar invite with a Google Meet link within 12 hours.',
      };
    }

    let errMsg = 'Online calendar service is currently unconfigured or unavailable.';
    try {
      const errJson = await res.json();
      if (errJson?.message) errMsg = errJson.message;
    } catch {
      // ignore
    }

    return {
      success: false,
      message: errMsg,
      fallbackMailto: mailtoFallback,
      fallbackWhatsApp: whatsappFallback,
    };
  } catch {
    return {
      success: false,
      message: 'Network service unavailable. You can dispatch your meeting request directly to our team via email or WhatsApp below.',
      fallbackMailto: mailtoFallback,
      fallbackWhatsApp: whatsappFallback,
    };
  }
}

export async function submitQuoteRequest(data: QuoteFormData): Promise<{
  success: boolean;
  message: string;
  fallbackMailto?: string;
  fallbackWhatsApp?: string;
}> {
  const validation = validateQuoteForm(data);
  if (!validation.isValid) {
    return {
      success: false,
      message: Object.values(validation.errors)[0] || 'Invalid quote details.',
    };
  }

  if (data.hpField && data.hpField.trim().length > 0) {
    return { success: false, message: 'Request could not be verified.' };
  }

  const now = Date.now();
  if (now - lastQuoteTime < SUBMISSION_COOLDOWN_MS) {
    const waitSeconds = Math.ceil((SUBMISSION_COOLDOWN_MS - (now - lastQuoteTime)) / 1000);
    return {
      success: false,
      message: `Please wait ${waitSeconds}s before submitting another quote request.`,
    };
  }

  const endpoint = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_QUOTE_ENDPOINT) || '/api/quote';
  const mailtoFallback = buildQuoteMailto(data);
  const whatsappFallback = `${companyConfig.whatsappUrl}?text=${encodeURIComponent(
    `Hi Maher, I would like to request an architecture scope quotation.\nName: ${data.name}\nProject: ${data.projectType}\nBudget: ${data.budgetRange}`
  )}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString(),
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (res.ok) {
      lastQuoteTime = Date.now();
      return {
        success: true,
        message: 'Your quotation request has been received. Our engineering lead will analyze your deliverables and deliver a structured scope breakdown within 24 hours.',
      };
    }

    let errMsg = 'Quote dispatch service is currently unconfigured.';
    try {
      const errJson = await res.json();
      if (errJson?.message) errMsg = errJson.message;
    } catch {
      // ignore
    }

    return {
      success: false,
      message: errMsg,
      fallbackMailto: mailtoFallback,
      fallbackWhatsApp: whatsappFallback,
    };
  } catch {
    return {
      success: false,
      message: 'Network service unavailable. You can send your project requirements directly to our team via email or WhatsApp below.',
      fallbackMailto: mailtoFallback,
      fallbackWhatsApp: whatsappFallback,
    };
  }
}
