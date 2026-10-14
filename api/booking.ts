// Serverless handler for booking requests (Google Meet / Call appointments)
// Validates fields on server, sends via Resend if configured, returns honest 503 if unconfigured.
import { renderBookingTeamEmail, renderBookingClientEmail, sendWithResend } from './templates';

interface BookingRequestBody {
  name?: string;
  email?: string;
  organization?: string;
  date?: string;
  time?: string;
  topic?: string;
  notes?: string;
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
      message: 'Too many requests from this IP address. Please wait a few minutes before trying again.',
    });
  }

  // 2. Body parsing and validation
  let body: any;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return res.status(400).json({ success: false, message: 'Invalid JSON payload.' });
    }
  } catch {
    return res.status(400).json({ success: false, message: 'Invalid JSON payload.' });
  }

  // Honeypot check
  const hpField = sanitizeText(body.hpField, 100);
  if (hpField.length > 0) {
    return res.status(200).json({ success: true, message: 'Request received.' });
  }

  const name = sanitizeText(body.name, 100);
  const email = sanitizeText(body.email, 120);
  const date = sanitizeText(body.date, 30);
  const time = sanitizeText(body.time, 30);
  const organization = sanitizeText(body.organization, 150) || 'N/A';
  const topic = sanitizeText(body.topic, 150) || 'General Architecture Consultation';
  const notes = sanitizeText(body.notes, 3000);

  if (!name || name.length < 2) {
    return res.status(400).json({ success: false, message: 'Invalid or missing name.' });
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid or missing email address.' });
  }
  if (!date || !time) {
    return res.status(400).json({ success: false, message: 'Missing date or time selection.' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const targetEmail = process.env.CONTACT_RECEIVER_EMAIL || 'maherbhatt01@gmail.com';
  const rawFrom = process.env.RESEND_FROM_EMAIL?.trim();
  const fromEmail = (rawFrom && !rawFrom.toLowerCase().includes('@qavironel.com'))
    ? rawFrom
    : 'Qavironel Technologies <onboarding@resend.dev>';

  if (resendApiKey) {
    try {
      const teamHtml = renderBookingTeamEmail({
        name,
        email,
        organization,
        date,
        time,
        topic,
        notes,
      });

      // 1. Dispatch Notification to Qavironel Team
      const dispatchResult = await sendWithResend({
        apiKey: resendApiKey,
        from: fromEmail,
        to: targetEmail,
        replyTo: email,
        subject: `[Call Request] ${sanitizeSubject(date)} at ${sanitizeSubject(time)} - ${sanitizeSubject(name)} (${sanitizeSubject(topic)})`,
        html: teamHtml,
      });

      if (!dispatchResult.ok) {
        return res.status(502).json({
          success: false,
          code: 'DISPATCH_ERROR',
          message: 'Failed to dispatch meeting notification.',
          detail: process.env.NODE_ENV !== 'production' ? dispatchResult.error : undefined,
        });
      }

      // 2. Dispatch Confirmation Auto-Responder to Client
      try {
        const clientHtml = renderBookingClientEmail({
          name,
          date,
          time,
          topic,
        });

        await sendWithResend({
          apiKey: resendApiKey,
          from: dispatchResult.usedFrom || fromEmail,
          to: email,
          replyTo: targetEmail,
          subject: `Architecture Call Request Received: ${sanitizeSubject(date)} — Qavironel Technologies`,
          html: clientHtml,
        }).catch((err) => console.warn('Client auto-responder skipped/restricted in sandbox:', err));
      } catch (autoErr) {
        console.warn('Client auto-responder exception caught:', autoErr);
      }

      return res.status(200).json({
        success: true,
        message: 'Your meeting request has been received. Maher Bhatt will review availability and confirm your calendar invite within 12 hours.',
      });
    } catch (err: any) {
      console.error('Internal error during booking dispatch:', err);
      return res.status(500).json({ success: false, message: 'Internal server error processing meeting dispatch.' });
    }
  }

  return res.status(503).json({
    success: false,
    code: 'CALENDAR_PROVIDER_NOT_CONFIGURED',
    message: 'Online meeting scheduling service is currently not configured on this environment.',
  });
}
