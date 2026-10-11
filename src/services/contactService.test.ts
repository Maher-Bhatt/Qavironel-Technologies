import { describe, it, expect, vi, beforeEach } from 'vitest';
import { 
  validateContactForm, 
  buildContactMailto, 
  buildContactWhatsApp, 
  submitContactInquiry, 
  ContactFormData 
} from './contactService';
import { companyConfig } from '../data/company';

describe('contactService', () => {
  const validData: ContactFormData = {
    name: 'Ada Lovelace',
    email: 'ada@computing.org',
    organization: 'Analytical Studio',
    projectType: 'High-Impact Custom Web Platform',
    timeline: 'Immediate (Next 2-4 Weeks)',
    engagementModel: 'Full-Cycle Product Architecture & Build',
    details: 'Engineering an algorithmic computation engine for mechanical calculating looms.',
    hpField: '',
  };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe('validateContactForm', () => {
    it('validates a correct form payload successfully', () => {
      const result = validateContactForm(validData);
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors).length).toBe(0);
    });

    it('rejects empty or short name', () => {
      const result = validateContactForm({ ...validData, name: ' ' });
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBeDefined();

      const shortResult = validateContactForm({ ...validData, name: 'A' });
      expect(shortResult.isValid).toBe(false);
      expect(shortResult.errors.name).toContain('at least 2 characters');
    });

    it('rejects invalid email formats', () => {
      const result = validateContactForm({ ...validData, email: 'not-an-email' });
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBeDefined();
    });

    it('rejects short or empty details', () => {
      const result = validateContactForm({ ...validData, details: 'too short' });
      expect(result.isValid).toBe(false);
      expect(result.errors.details).toContain('at least 10 characters');
    });
  });

  describe('fallback builders', () => {
    it('builds a mailto URI containing company email and form details', () => {
      const mailto = buildContactMailto(validData);
      expect(mailto).toContain(`mailto:${companyConfig.email}`);
      expect(mailto).toContain('Ada%20Lovelace');
      expect(mailto).toContain('Analytical%20Studio');
    });

    it('builds a WhatsApp URI with company number and form summary', () => {
      const wa = buildContactWhatsApp(validData);
      expect(wa).toContain(companyConfig.whatsappUrl);
      expect(wa).toContain('Ada%20Lovelace');
    });
  });

  describe('submitContactInquiry', () => {
    it('rejects submissions if honeypot is populated', async () => {
      const result = await submitContactInquiry({ ...validData, hpField: 'bot-spam-content' });
      expect(result.success).toBe(false);
      expect(result.message).toContain('could not be verified');
    });

    it('handles network failure gracefully without claiming false success', async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

      const result = await submitContactInquiry(validData, 0);
      expect(result.success).toBe(false);
      expect(result.message).toContain('unavailable');
      expect(result.fallbackMailto).toBeDefined();
      expect(result.fallbackWhatsApp).toBeDefined();
    });

    it('returns success only when endpoint returns HTTP 200 ok', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, message: 'Inquiry received successfully.' }),
      } as any);

      const result = await submitContactInquiry(validData, 0);
      expect(result.success).toBe(true);
      expect(result.message).toContain('Inquiry received');
    });
  });
});
