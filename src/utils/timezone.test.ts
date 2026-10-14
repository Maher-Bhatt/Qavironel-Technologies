import { describe, it, expect } from 'vitest';
import { 
  detectUserTimezone, 
  convertSlotToUserTimezone, 
  buildGoogleCalendarUrl, 
  buildIcsDataUri,
  STUDIO_TIMEZONE 
} from './timezone';

describe('timezone utilities', () => {
  it('detects a timezone string or defaults to studio timezone', () => {
    const tz = detectUserTimezone();
    expect(typeof tz).toBe('string');
    expect(tz.length).toBeGreaterThan(0);
  });

  it('accurately converts 18:30 IST slot to New York (EDT) time', () => {
    // 18:30 IST is 13:00 UTC -> 09:00 AM EDT (in daylight savings October)
    const slot = convertSlotToUserTimezone('2026-10-14', '18:30', 'America/New_York');
    expect(slot.istTime).toBe('18:30');
    expect(slot.istDisplay).toContain('IST');
    expect(slot.userTimeDisplay).toBe('9:00 AM');
    expect(slot.userTimezoneAbbr).toMatch(/EDT|EST/);
    expect(slot.utcIso).toBe('2026-10-14T13:00:00.000Z');
  });

  it('accurately converts 14:00 IST slot to London (BST) time', () => {
    // 14:00 IST is 08:30 UTC -> 09:30 AM BST
    const slot = convertSlotToUserTimezone('2026-10-14', '14:00', 'Europe/London');
    expect(slot.userTimeDisplay).toBe('9:30 AM');
    expect(slot.utcIso).toBe('2026-10-14T08:30:00.000Z');
  });

  it('preserves same time when user timezone is Asia/Kolkata', () => {
    const slot = convertSlotToUserTimezone('2026-10-14', '10:00', 'Asia/Kolkata');
    expect(slot.userTimeDisplay).toBe('10:00 AM');
    expect(slot.isDifferentDate).toBe(false);
  });

  it('generates a valid Google Calendar URL containing UTC timestamps', () => {
    const testDate = new Date('2026-10-14T13:00:00.000Z');
    const url = buildGoogleCalendarUrl({
      title: 'Architecture Review with Qavironel',
      description: 'Discussing system design',
      startDate: testDate,
      durationMinutes: 30,
    });

    expect(url).toContain('https://calendar.google.com/calendar/render');
    expect(url).toContain('action=TEMPLATE');
    expect(url).toContain('20261014T130000Z');
    expect(url).toContain('20261014T133000Z');
  });

  it('generates a valid .ics data URI', () => {
    const testDate = new Date('2026-10-14T13:00:00.000Z');
    const ics = buildIcsDataUri({
      title: 'Architecture Review',
      description: 'System design discussion',
      startDate: testDate,
      durationMinutes: 30,
    });

    expect(ics).toContain('data:text/calendar;charset=utf8,');
    expect(decodeURIComponent(ics)).toContain('BEGIN:VCALENDAR');
    expect(decodeURIComponent(ics)).toContain('DTSTART:20261014T130000Z');
    expect(decodeURIComponent(ics)).toContain('DTEND:20261014T133000Z');
  });

  it('defaults to 60-minute duration when durationMinutes is omitted', () => {
    const testDate = new Date('2026-10-14T13:00:00.000Z');
    const url = buildGoogleCalendarUrl({
      title: '60-Min Architecture Discovery',
      description: 'Technical deep dive',
      startDate: testDate,
    });
    // 13:00 to 14:00 (60 minutes)
    expect(url).toContain('20261014T130000Z');
    expect(url).toContain('20261014T140000Z');

    const ics = buildIcsDataUri({
      title: '60-Min Architecture Discovery',
      description: 'Technical deep dive',
      startDate: testDate,
    });
    expect(decodeURIComponent(ics)).toContain('DTSTART:20261014T130000Z');
    expect(decodeURIComponent(ics)).toContain('DTEND:20261014T140000Z');
  });
});
