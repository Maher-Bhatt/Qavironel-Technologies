// Serverless API route for contact form submission
// Compatible with Vercel Serverless Functions (Node.js runtime)

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

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export default async function handler(req: any, res: any) {
  // Only allow POST
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
      message: 'Too many inquiries from this IP address. Please wait a few minutes before trying again.',
    });
  }

  // 2. Parse and Validate Body
  let body: ContactRequestBody;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ success: false, message: 'Invalid JSON payload.' });
  }

  // 3. Honeypot check (spam protection)
  if (body.hpField && body.hpField.trim().length > 0) {
    // Silently accept without action to thwart spambots
    return res.status(200).json({
      success: true,
      message: 'Inquiry received. Thank you.',
    });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const details = body.details?.trim();
  const organization = body.organization?.trim() || 'N/A';
  const projectType = body.projectType?.trim() || 'Custom Engineering';
  const timeline = body.timeline?.trim() || 'Not specified';
  const engagementModel = body.engagementModel?.trim() || 'Not specified';

  if (!name || name.length < 2 || name.length > 100) {
    return res.status(400).json({ success: false, message: 'Invalid or missing name.' });
  }
  if (!email || !EMAIL_REGEX.test(email) || email.length > 120) {
    return res.status(400).json({ success: false, message: 'Invalid or missing email address.' });
  }
  if (!details || details.length < 10 || details.length > 5000) {
    return res.status(400).json({ success: false, message: 'Project details must be between 10 and 5000 characters.' });
  }

  // 4. Delivery via configured email provider
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
          subject: `[New Inquiry] ${projectType} - ${name}`,
          html: `
            <h2>New Project Inquiry from Qavironel.com</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <p><strong>Discipline:</strong> ${projectType}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
            <p><strong>Engagement Model:</strong> ${engagementModel}</p>
            <hr />
            <h3>Project Details:</h3>
            <p style="white-space: pre-wrap;">${details}</p>
          `,
        }),
      });

      if (!emailResp.ok) {
        const errorText = await emailResp.text();
        // Do not leak secrets to console
        return res.status(502).json({
          success: false,
          code: 'DISPATCH_ERROR',
          message: 'Error communicating with mail provider.',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Your project inquiry has been received. Maher Bhatt will review and reply within 12 hours.',
      });
    } catch (e) {
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
