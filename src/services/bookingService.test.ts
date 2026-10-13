import { describe, it, expect, vi, beforeEach } from 'vitest';
import { 
  getAvailableDates, 
  getAvailableTimeSlots, 
  validateBookingForm, 
  validateQuoteForm,
  buildBookingMailto,
  buildQuoteMailto,
  submitBookingRequest,
  submitQuoteRequest
} from './bookingService';
import { companyConfig } from '../data/company';

describe('bookingService', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe('getAvailableDates', () => {
    it('returns upcoming dates and excludes Sundays', () => {
      // Mock a fixed Wednesday: 2026-10-14 10:00:00
      const mockDate = new Date(2026, 9, 14, 10, 0, 0);
      const dates = getAvailableDates(mockDate);

      expect(dates.length).toBeGreaterThan(5);
      // Ensure no Sunday is present
      const hasSunday = dates.some((d) => d.dayName === 'Sun');
      expect(hasSunday).toBe(false);
      // First item is today
      expect(dates[0].isToday).toBe(true);
      expect(dates[0].dateString).toBe('2026-10-14');
    });
  });

  describe('getAvailableTimeSlots', () => {
    it('enforces minimum 1-hour advance buffer for today', () => {
      // It is 11:00 AM on 2026-10-14
      const mockNow = new Date(2026, 9, 14, 11, 0, 0);
      const slots = getAvailableTimeSlots('2026-10-14', mockNow);

      // 10:00 AM is in the past -> unavailable
      const slot1000 = slots.find((s) => s.time === '10:00');
      expect(slot1000?.isAvailable).toBe(false);

      // 11:30 AM is only 30 mins away (less than 1 hr buffer) -> unavailable
      const slot1130 = slots.find((s) => s.time === '11:30');
      expect(slot1130?.isAvailable).toBe(false);

      // 14:00 (2:00 PM) is 3 hours away -> available!
      const slot1400 = slots.find((s) => s.time === '14:00');
      expect(slot1400?.isAvailable).toBe(true);
    });

    it('makes all standard slots available for future dates', () => {
      const mockNow = new Date(2026, 9, 14, 11, 0, 0);
      const slots = getAvailableTimeSlots('2026-10-15', mockNow);

      const allAvailable = slots.every((s) => s.isAvailable);
      expect(allAvailable).toBe(true);
    });
  });

  describe('validateBookingForm', () => {
    it('validates a correct booking payload', () => {
      const mockNow = new Date(2026, 9, 14, 11, 0, 0);
      const validForm = {
        name: 'Grace Hopper',
        email: 'grace@navy.mil',
        date: '2026-10-15',
        time: '14:00',
        topic: 'Compiler Systems Architecture',
      };
      const res = validateBookingForm(validForm, mockNow);
      expect(res.isValid).toBe(true);
      expect(Object.keys(res.errors).length).toBe(0);
    });

    it('rejects slot within 1 hour buffer on same day', () => {
      const mockNow = new Date(2026, 9, 14, 13, 15, 0); // 1:15 PM
      const invalidForm = {
        name: 'Grace Hopper',
        email: 'grace@navy.mil',
        date: '2026-10-14',
        time: '14:00', // only 45 mins away
        topic: 'Compiler Systems Architecture',
      };
      const res = validateBookingForm(invalidForm, mockNow);
      expect(res.isValid).toBe(false);
      expect(res.errors.time).toContain('1-hour advance notice window');
    });
  });

  describe('validateQuoteForm', () => {
    it('requires valid scope description and email', () => {
      const res = validateQuoteForm({
        name: 'Alan Turing',
        email: 'alan@bletchley.uk',
        projectType: 'SaaS Platform',
        budgetRange: '$10k-$25k',
        timeline: '1 Month',
        scopeDetails: 'Engineering a high-performance cryptographic automated decryption pipeline.',
      });
      expect(res.isValid).toBe(true);
    });
  });

  describe('mail builders & honest submissions', () => {
    it('builds mailto for booking containing company email and date', () => {
      const mailto = buildBookingMailto({
        name: 'Alan Turing',
        email: 'alan@bletchley.uk',
        date: '2026-10-20',
        time: '14:00',
        topic: 'Enigma Architecture',
      });
      expect(mailto).toContain(`mailto:${companyConfig.email}`);
      expect(decodeURIComponent(mailto)).toContain('2026-10-20');
      expect(decodeURIComponent(mailto)).toContain('14:00');
    });

    it('submitBookingRequest does not claim false success on network error', async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));
      const res = await submitBookingRequest({
        name: 'Alan Turing',
        email: 'alan@bletchley.uk',
        date: '2026-10-25',
        time: '14:00',
        topic: 'Enigma Architecture',
      });
      expect(res.success).toBe(false);
      expect(res.message).toContain('unavailable');
      expect(res.fallbackMailto).toBeDefined();
    });

    it('builds mailto for quote containing scope and deliverables', () => {
      const mailto = buildQuoteMailto({
        name: 'Ada Lovelace',
        email: 'ada@analyticalengine.org',
        projectType: 'Analytical Platform',
        budgetRange: '$5,000 - $10,000',
        timeline: '1-2 Months',
        scopeDetails: 'Engineering the first algorithmic pipeline for computation.',
        features: ['Algorithmic Engine', 'Bernoulli Table Generation'],
      });
      expect(mailto).toContain(`mailto:${companyConfig.email}`);
      const decoded = decodeURIComponent(mailto);
      expect(decoded).toContain('Ada Lovelace');
      expect(decoded).toContain('Algorithmic Engine');
      expect(decoded).toContain('Bernoulli Table Generation');
    });

    it('submitQuoteRequest returns honest fallback on network failure', async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error('Network offline'));
      const res = await submitQuoteRequest({
        name: 'Ada Lovelace',
        email: 'ada@analyticalengine.org',
        projectType: 'Analytical Platform',
        budgetRange: '$5,000 - $10,000',
        timeline: '1-2 Months',
        scopeDetails: 'Engineering the first algorithmic pipeline for computation.',
      });
      expect(res.success).toBe(false);
      expect(res.message).toContain('unavailable');
      expect(res.fallbackMailto).toBeDefined();
      expect(res.fallbackWhatsApp).toBeDefined();
    });
  });
});
