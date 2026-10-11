// Serverless handler for booking requests (Google Meet / Call appointments)
// Validates fields on server, sends via Resend if configured, returns honest 503 if unconfigured.

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

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 
                   req.socket?.remoteAddress || '127.0.0.1';

  // 1. Rate Limit Check
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests from this IP address. Please wait a few minutes before trying again.',
    });
  }

  // 2. Body parsing and validation
  let body: BookingRequestBody;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ success: false, message: 'Invalid JSON payload.' });
  }

  // Honeypot check
  if (body.hpField && body.hpField.trim().length > 0) {
    return res.status(200).json({ success: true, message: 'Request received.' });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const date = body.date?.trim();
  const time = body.time?.trim();
  const organization = body.organization?.trim() || 'N/A';
  const topic = body.topic?.trim() || 'General Architecture Consultation';
  const notes = body.notes?.trim() || '';

  if (!name || name.length < 2 || name.length > 100) {
    return res.status(400).json({ success: false, message: 'Invalid or missing name.' });
  }
  if (!email || !EMAIL_REGEX.test(email) || email.length > 120) {
    return res.status(400).json({ success: false, message: 'Invalid or missing email address.' });
  }
  if (!date || !time) {
    return res.status(400).json({ success: false, message: 'Missing date or time selection.' });
  }
  if (notes.length > 3000) {
    return res.status(400).json({ success: false, message: 'Notes must be 3000 characters or fewer.' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const targetEmail = process.env.CONTACT_RECEIVER_EMAIL || 'qavironeltechnologies@gmail.com';

  if (resendApiKey) {
    try {
      const emailResp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'inquiries@qavironel.com',
          to: [targetEmail],
          reply_to: email,
          subject: `[Call Request] ${escapeHtml(date)} at ${escapeHtml(time)} - ${escapeHtml(name)} (${escapeHtml(topic)})`,
          html: `
            <h2>New Call Request from Qavironel.com</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Organization:</strong> ${escapeHtml(organization)}</p>
            <p><strong>Requested Date:</strong> ${escapeHtml(date)}</p>
            <p><strong>Requested Time Slot:</strong> ${escapeHtml(time)}</p>
            <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
            <p><strong>Notes:</strong> ${escapeHtml(notes || 'None')}</p>
          `,
        }),
      });

      if (!emailResp.ok) {
        return res.status(502).json({ success: false, message: 'Failed to dispatch meeting notification.' });
      }

      return res.status(200).json({
        success: true,
        message: 'Your meeting request has been received. Maher Bhatt will review availability and confirm your calendar invite within 12 hours.',
      });
    } catch {
      return res.status(500).json({ success: false, message: 'Internal server error processing meeting dispatch.' });
    }
  }

  return res.status(503).json({
    success: false,
    code: 'CALENDAR_PROVIDER_NOT_CONFIGURED',
    message: 'Online meeting scheduling service is currently not configured on this environment.',
  });
}
