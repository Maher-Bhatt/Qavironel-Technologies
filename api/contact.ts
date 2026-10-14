// Serverless API route for contact form submission
// Compatible with Vercel Serverless Functions (Node.js runtime)
import { renderContactTeamEmail, renderContactClientEmail } from './templates';

interface ContactRequestBody {
  name?: string;
  email?: string;
  organization?: string;
  projectType?: string;
  timeline?: string;
  engagementModel?: string;
  details?: string;
  hpField?: string;
}

// In-memory rate limiter per IP: max 5 requests per 10 minutes
const ipRateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  if (ipRateLimitMap.size > 1000) {
    for (const [key, value] of ipRateLimitMap.entries()) {
      if (now > value.resetAt) {
        ipRateLimitMap.delete(key);
      }
    }
  }
  const record = ipRateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    ipRateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }
  record.count += 1;
  return true;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeText(val: unknown, maxLen: number): string {
  if (typeof val !== 'string') return '';
  return val.trim().slice(0, maxLen);
}

function sanitizeSubject(val: unknown, maxLen = 120): string {
  if (typeof val !== 'string') return '';
  return val.replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, maxLen);
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export default async function handler(req: any, res: any) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const clientIp = (req.headers['x-vercel-ip'] as string)?.trim() ||
                   (req.headers['x-real-ip'] as string)?.trim() ||
                   (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 
                   req.socket?.remoteAddress || '127.0.0.1';

  // 1. Rate Limit Check
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      message: 'Too many inquiries from this IP address. Please wait a few minutes before trying again.',
    });
  }

  // 2. Parse and Validate Body
  let body: any;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return res.status(400).json({ success: false, message: 'Invalid JSON payload.' });
    }
  } catch {
    return res.status(400).json({ success: false, message: 'Invalid JSON payload.' });
  }

  // 3. Honeypot check (spam protection)
  const hpField = sanitizeText(body.hpField, 100);
  if (hpField.length > 0) {
    // Silently accept without action to thwart spambots
    return res.status(200).json({
      success: true,
      message: 'Inquiry received. Thank you.',
    });
  }

  const name = sanitizeText(body.name, 100);
  const email = sanitizeText(body.email, 120);
  const details = sanitizeText(body.details, 5000);
  const organization = sanitizeText(body.organization, 150) || 'N/A';
  const projectType = sanitizeText(body.projectType, 100) || 'Custom Engineering';
  const timeline = sanitizeText(body.timeline, 100) || 'Not specified';
  const engagementModel = sanitizeText(body.engagementModel, 100) || 'Not specified';

  if (!name || name.length < 2) {
    return res.status(400).json({ success: false, message: 'Invalid or missing name.' });
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid or missing email address.' });
  }
  if (!details || details.length < 10) {
    return res.status(400).json({ success: false, message: 'Project details must be between 10 and 5000 characters.' });
  }

  // 4. Delivery via configured email provider
  const resendApiKey = process.env.RESEND_API_KEY;
  const targetEmail = process.env.CONTACT_RECEIVER_EMAIL || 'qavironeltechnologies@gmail.com';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'inquiries@qavironel.com';

  if (resendApiKey) {
    try {
      const teamHtml = renderContactTeamEmail({
        name,
        email,
        organization,
        projectType,
        timeline,
        engagementModel,
        details,
      });

      // 1. Dispatch Notification to Qavironel Team
      const emailResp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [targetEmail],
          reply_to: email,
          subject: `[New Inquiry] ${sanitizeSubject(projectType)} - ${sanitizeSubject(name)}`,
          html: teamHtml,
        }),
      });

      if (!emailResp.ok) {
        return res.status(502).json({
          success: false,
          code: 'DISPATCH_ERROR',
          message: 'Error communicating with mail provider.',
        });
      }

      // 2. Dispatch Confirmation Auto-Responder to Client
      try {
        const clientHtml = renderContactClientEmail({
          name,
          projectType,
          timeline,
          details,
        });

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [email],
            reply_to: targetEmail,
            subject: `Inquiry Received: ${sanitizeSubject(projectType)} — Qavironel Technologies`,
            html: clientHtml,
          }),
        });
      } catch {
        // In sandbox testing mode (onboarding@resend.dev), Resend restricts external sending.
        // We log nothing and continue so client submission remains successful.
      }

      return res.status(200).json({
        success: true,
        message: 'Your project inquiry has been received. Maher Bhatt will review and reply within 12 hours.',
      });
    } catch {
      return res.status(500).json({
        success: false,
        code: 'INTERNAL_ERROR',
        message: 'Internal server error processing dispatch.',
      });
    }
  }

  // If no delivery service credentials are configured in environment
  return res.status(503).json({
    success: false,
    code: 'MAIL_PROVIDER_NOT_CONFIGURED',
    message: 'Online inquiry delivery service is currently not configured on this environment.',
  });
}
