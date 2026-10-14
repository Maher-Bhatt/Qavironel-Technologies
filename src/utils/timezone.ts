/**
 * Comprehensive Timezone and Scheduling Utilities for Global Engineering Ingestion.
 * Handles automatic timezone detection, slot conversion between India Standard Time (IST)
 * and international timezones, and one-click calendar invitation generation.
 */

export const STUDIO_TIMEZONE = 'Asia/Kolkata'; // UTC+05:30

export interface TimezoneOption {
  id: string;
  label: string;
  region: string;
  cities: string;
}

export const COMMON_TIMEZONES: TimezoneOption[] = [
  { id: 'Asia/Kolkata', label: 'IST (India Standard Time)', region: 'India (Studio HQ)', cities: 'Mumbai, Delhi, Bengaluru' },
  { id: 'America/New_York', label: 'EDT / EST (US Eastern)', region: 'North America', cities: 'New York, Boston, Miami, Toronto' },
  { id: 'America/Chicago', label: 'CDT / CST (US Central)', region: 'North America', cities: 'Chicago, Austin, Dallas' },
  { id: 'America/Denver', label: 'MDT / MST (US Mountain)', region: 'North America', cities: 'Denver, Phoenix, Salt Lake City' },
  { id: 'America/Los_Angeles', label: 'PDT / PST (US Pacific)', region: 'North America', cities: 'San Francisco, Seattle, Los Angeles' },
  { id: 'Europe/London', label: 'BST / GMT (British Time)', region: 'Europe', cities: 'London, Dublin, Edinburgh' },
  { id: 'Europe/Berlin', label: 'CEST / CET (Central European)', region: 'Europe', cities: 'Berlin, Paris, Amsterdam, Zurich' },
  { id: 'Asia/Dubai', label: 'GST (Gulf Standard Time)', region: 'Middle East', cities: 'Dubai, Abu Dhabi, Doha' },
  { id: 'Asia/Singapore', label: 'SGT (Singapore / HK Time)', region: 'Asia Pacific', cities: 'Singapore, Hong Kong, Kuala Lumpur' },
  { id: 'Asia/Tokyo', label: 'JST (Japan Standard Time)', region: 'Asia Pacific', cities: 'Tokyo, Osaka, Seoul' },
  { id: 'Australia/Sydney', label: 'AEST / AEDT (Eastern Australia)', region: 'Oceania', cities: 'Sydney, Melbourne, Brisbane' },
  { id: 'UTC', label: 'UTC (Coordinated Universal Time)', region: 'Universal', cities: 'Universal Reference Time' },
];

/**
 * Safely auto-detects the visitor's local browser timezone.
 */
export function detectUserTimezone(): string {
  try {
    if (typeof Intl !== 'undefined' && Intl.DateTimeFormat) {
      const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (detected && detected.length > 0) {
        return detected;
      }
    }
  } catch {
    // Fallback on error
  }
  return STUDIO_TIMEZONE;
}

/**
 * Gets a clean short label or abbreviation for a given timezone.
 */
export function getTimezoneShortName(timeZone: string, date: Date = new Date()): string {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZoneName: 'short',
      timeZone,
    }).formatToParts(date);
    const tzPart = parts.find((p) => p.type === 'timeZoneName');
    return tzPart?.value || timeZone;
  } catch {
    return timeZone;
  }
}

/**
 * Formats a Date object into a readable time string for a given timezone.
 */
export function formatTimeInZone(date: Date, timeZone: string): string {
  try {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone,
    }).format(date);
  } catch {
    return date.toLocaleTimeString();
  }
}

/**
 * Formats a Date object into a readable date string (e.g. "Wed, Oct 14") for a given timezone.
 */
export function formatDateInZone(date: Date, timeZone: string): string {
  try {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone,
    }).format(date);
  } catch {
    return date.toLocaleDateString();
  }
}

export interface ConvertedSlot {
  dateObj: Date;
  istTime: string;           // e.g. "18:30"
  istDisplay: string;        // e.g. "06:30 PM IST"
  userTimeDisplay: string;   // e.g. "09:00 AM"
  userDateDisplay: string;   // e.g. "Wed, Oct 14"
  userTimezoneAbbr: string;  // e.g. "EDT"
  isDifferentDate: boolean;
  dateShiftNote?: string;    // "Prev Day" | "Next Day"
  utcIso: string;
}

/**
 * Converts a canonical IST slot (dateString "YYYY-MM-DD" + istTime "HH:MM")
 * into the visitor's local timezone with high precision.
 */
export function convertSlotToUserTimezone(
  dateString: string,
  istTime: string,
  userTimeZone: string = STUDIO_TIMEZONE
): ConvertedSlot {
  // IST is fixed at UTC+05:30
  const istIsoString = `${dateString}T${istTime}:00+05:30`;
  const dateObj = new Date(istIsoString);

  // Format in user's timezone
  const userTimeDisplay = formatTimeInZone(dateObj, userTimeZone);
  const userDateDisplay = formatDateInZone(dateObj, userTimeZone);
  const userTimezoneAbbr = getTimezoneShortName(userTimeZone, dateObj);

  // Format in studio timezone for dual display
  const istTimeDisplay = `${formatTimeInZone(dateObj, STUDIO_TIMEZONE)} IST`;
  const istDateDisplay = formatDateInZone(dateObj, STUDIO_TIMEZONE);

  const isDifferentDate = userDateDisplay !== istDateDisplay;
  let dateShiftNote: string | undefined;

  if (isDifferentDate) {
    const userMid = new Date(new Intl.DateTimeFormat('en-US', { timeZone: userTimeZone }).format(dateObj)).getTime();
    const istMid = new Date(new Intl.DateTimeFormat('en-US', { timeZone: STUDIO_TIMEZONE }).format(dateObj)).getTime();
    dateShiftNote = userMid < istMid ? 'Prev Day' : 'Next Day';
  }

  return {
    dateObj,
    istTime,
    istDisplay: istTimeDisplay,
    userTimeDisplay,
    userDateDisplay,
    userTimezoneAbbr,
    isDifferentDate,
    dateShiftNote,
    utcIso: dateObj.toISOString(),
  };
}

/**
 * Generates an instant one-click Google Calendar URL in UTC.
 * Google Calendar automatically displays UTC events at the user's local timezone.
 */
export function buildGoogleCalendarUrl(params: {
  title: string;
  description: string;
  startDate: Date;
  durationMinutes?: number;
  location?: string;
}): string {
  const { title, description, startDate, durationMinutes = 60, location = 'Google Meet (Link will be emailed upon confirmation)' } = params;
  const endDate = new Date(startDate.getTime() + durationMinutes * 60 * 1000);

  const formatUtcForGCal = (d: Date) => {
    return d.toISOString().replace(/-|:|\.\d\d\d/g, '');
  };

  const datesParam = `${formatUtcForGCal(startDate)}/${formatUtcForGCal(endDate)}`;

  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.set('action', 'TEMPLATE');
  url.searchParams.set('text', title);
  url.searchParams.set('dates', datesParam);
  url.searchParams.set('details', description);
  url.searchParams.set('location', location);

  return url.toString();
}

/**
 * Builds an RFC-5545 compliant .ics calendar file content as a Data URI.
 * Works seamlessly with Apple Calendar, Outlook, and mobile calendar apps.
 */
export function buildIcsDataUri(params: {
  title: string;
  description: string;
  startDate: Date;
  durationMinutes?: number;
  location?: string;
}): string {
  const { title, description, startDate, durationMinutes = 60, location = 'Google Meet' } = params;
  const endDate = new Date(startDate.getTime() + durationMinutes * 60 * 1000);

  const formatUtc = (d: Date) => {
    return d.toISOString().replace(/-|:|\.\d\d\d/g, '');
  };

  const nowStr = formatUtc(new Date());
  const startStr = formatUtc(startDate);
  const endStr = formatUtc(endDate);

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Qavironel Technologies//Architecture Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:qavironel-${startDate.getTime()}@qavironel.com`,
    `DTSTAMP:${nowStr}`,
    `DTSTART:${startStr}`,
    `DTEND:${endStr}`,
    `SUMMARY:${title.replace(/,/g, '\\,')} (Provisional)`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n').replace(/,/g, '\\,')}`,
    `LOCATION:${location.replace(/,/g, '\\,')}`,
    'STATUS:TENTATIVE',
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return `data:text/calendar;charset=utf8,${encodeURIComponent(icsLines.join('\r\n'))}`;
}
