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
  return String(str || '')
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

function sendJson(res: any, status: number, data: any) {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(status).json(data);
  }
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

const EMAIL_HEAD = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Qavironel Technologies</title>
  <style>
    body { margin: 0; padding: 0; background-color: #F5F5F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
    table { border-collapse: separate; }
    a { color: #174C3A; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #F5F5F0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #D9DED7; overflow: hidden; box-shadow: 0 4px 16px rgba(16, 54, 41, 0.06);">
          <tr>
            <td style="background-color: #103629; padding: 28px 32px; text-align: left; border-bottom: 3px solid #174C3A;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 20px; font-weight: 800; letter-spacing: 0.1em; color: #FFFFFF; text-transform: uppercase;">
                      QAVIRONEL
                    </div>
                    <div style="font-family: 'Courier New', Courier, monospace; font-size: 11px; letter-spacing: 0.2em; color: #879B89; text-transform: uppercase; margin-top: 4px;">
                      TECHNOLOGIES · IDEAS. ENGINEERED.
                    </div>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; padding: 4px 10px; background-color: rgba(255, 255, 255, 0.12); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 20px; font-family: 'Courier New', monospace; font-size: 10px; color: #E6ECE5; text-transform: uppercase; letter-spacing: 0.08em;">
                      STUDIO NOTIFICATION
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
`;

const EMAIL_FOOTER = `
          <tr>
            <td style="background-color: #F9FAF9; padding: 24px 32px; border-top: 1px solid #E6ECE5; font-size: 12px; color: #596159; line-height: 1.6;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <strong style="color: #191D1A; font-size: 13px;">Qavironel Technologies</strong><br>
                    Independent Digital Product, Web Platform & Applied AI Studio<br>
                    Vadodara, Gujarat, India · Partnering with Global Founders & Enterprises<br>
                    <a href="https://qavironel.com" style="color: #174C3A; font-weight: 600;">qavironel.com</a> · 
                    <a href="https://wa.me/919328944252" style="color: #174C3A;">WhatsApp Direct Line</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 14px; font-size: 11px; color: #879B89; border-top: 1px solid #E6ECE5; margin-top: 12px;">
                    This communication is direct and confidential between Qavironel Technologies technical leadership and verified correspondents.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

function renderContactTeamEmail(data: {
  name: string;
  email: string;
  organization?: string;
  projectType: string;
  timeline: string;
  engagementModel: string;
  details: string;
}): string {
  return `${EMAIL_HEAD}
          <tr>
            <td style="padding: 32px 32px 24px 32px;">
              <div style="display: inline-block; padding: 4px 12px; background-color: #E6ECE5; border-radius: 20px; font-size: 11px; font-weight: 700; color: #174C3A; font-family: 'Courier New', monospace; letter-spacing: 0.05em; margin-bottom: 16px;">
                NEW PROJECT INQUIRY
              </div>
              <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 800; color: #191D1A; line-height: 1.25;">
                Inquiry from ${escapeHtml(data.name)}
              </h1>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #596159; line-height: 1.5;">
                A new project scope brief was submitted through <a href="https://qavironel.com" style="color: #174C3A;">qavironel.com</a>.
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F9FAF9; border-radius: 12px; border: 1px solid #E6ECE5; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159; width: 35%;">Name</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; font-weight: 700; color: #191D1A;">${escapeHtml(data.name)}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159;">Email</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; font-weight: 700; color: #174C3A;"><a href="mailto:${escapeHtml(data.email)}" style="color: #174C3A;">${escapeHtml(data.email)}</a></td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159;">Organization</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; font-weight: 600; color: #191D1A;">${escapeHtml(data.organization || 'N/A')}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159;">Discipline</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; font-weight: 700; color: #191D1A;">${escapeHtml(data.projectType)}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159;">Target Timeline</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; font-weight: 600; color: #191D1A;">${escapeHtml(data.timeline)}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; font-size: 13px; color: #596159;">Engagement Model</td>
                  <td style="padding: 14px 18px; font-size: 13px; font-weight: 600; color: #191D1A;">${escapeHtml(data.engagementModel)}</td>
                </tr>
              </table>

              <div style="margin-bottom: 24px;">
                <div style="font-size: 12px; font-family: 'Courier New', monospace; font-weight: 700; color: #596159; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">
                  PROJECT SCOPE &amp; OBJECTIVES
                </div>
                <div style="background-color: #F9FAF9; border-left: 3px solid #174C3A; padding: 16px 20px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #191D1A; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
${escapeHtml(data.details)}
                </div>
              </div>

              <div style="text-align: left; padding-top: 8px;">
                <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20Project%20Inquiry%20%E2%80%94%20Qavironel%20Technologies" style="display: inline-block; background-color: #174C3A; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 12px 26px; border-radius: 24px; text-decoration: none; letter-spacing: 0.02em;">
                  Reply to ${escapeHtml(data.name)} &rarr;
                </a>
              </div>
            </td>
          </tr>
${EMAIL_FOOTER}`;
}

function renderContactClientEmail(data: {
  name: string;
  projectType: string;
  timeline: string;
  details: string;
}): string {
  return `${EMAIL_HEAD}
          <tr>
            <td style="padding: 32px 32px 24px 32px;">
              <div style="display: inline-block; padding: 4px 12px; background-color: #E6ECE5; border-radius: 20px; font-size: 11px; font-weight: 700; color: #174C3A; font-family: 'Courier New', monospace; letter-spacing: 0.05em; margin-bottom: 16px;">
                INQUIRY RECEIVED · CONFIRMATION
              </div>
              <h1 style="margin: 0 0 12px 0; font-size: 22px; font-weight: 800; color: #191D1A; line-height: 1.3;">
                Hello ${escapeHtml(data.name)}, we've received your inquiry.
              </h1>
              <p style="margin: 0 0 18px 0; font-size: 14px; color: #343A35; line-height: 1.6;">
                Thank you for considering <strong>Qavironel Technologies</strong> for your digital product and engineering build.
              </p>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #596159; line-height: 1.6;">
                Our technical leadership, <strong>Maher Bhatt &amp; Anurag Pandey</strong>, personally review every engineering inquiry. We are examining your requirements for <strong>${escapeHtml(data.projectType)}</strong> and will respond within <strong>12 hours</strong> with architecture feedback and recommended next steps.
              </p>

              <div style="background-color: #F9FAF9; border-radius: 12px; border: 1px solid #E6ECE5; padding: 20px; margin-bottom: 24px;">
                <div style="font-size: 11px; font-family: 'Courier New', monospace; font-weight: 700; color: #596159; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; border-bottom: 1px solid #E6ECE5; padding-bottom: 8px;">
                  SUMMARY OF YOUR SUBMISSION
                </div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 13px; line-height: 1.6;">
                  <tr>
                    <td style="color: #596159; padding-bottom: 6px; width: 35%;">Discipline:</td>
                    <td style="font-weight: 700; color: #191D1A; padding-bottom: 6px;">${escapeHtml(data.projectType)}</td>
                  </tr>
                  <tr>
                    <td style="color: #596159; padding-bottom: 6px;">Target Timeline:</td>
                    <td style="font-weight: 600; color: #191D1A; padding-bottom: 6px;">${escapeHtml(data.timeline)}</td>
                  </tr>
                </table>
                <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #E6ECE5; font-size: 13px; color: #191D1A; white-space: pre-wrap;">
                  <strong>Brief:</strong><br>${escapeHtml(data.details)}
                </div>
              </div>

              <p style="margin: 0 0 24px 0; font-size: 13px; color: #596159; line-height: 1.6;">
                If your project is on a critical timeline and you prefer instant direct communication, you can reach Maher directly via WhatsApp:
              </p>

              <div style="text-align: left;">
                <a href="https://wa.me/919328944252" style="display: inline-block; background-color: #174C3A; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 12px 24px; border-radius: 24px; text-decoration: none;">
                  Direct WhatsApp Line &rarr;
                </a>
              </div>
            </td>
          </tr>
${EMAIL_FOOTER}`;
}

async function sendWithResend(options: {
  apiKey: string;
  from?: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
}): Promise<{ ok: boolean; status: number; data?: any; error?: string; usedFrom?: string }> {
  const { apiKey, replyTo, subject, html } = options;

  let currentFrom = options.from?.trim() || '';
  if (!currentFrom || currentFrom.toLowerCase().includes('@qavironel.com')) {
    currentFrom = 'Qavironel Technologies <onboarding@resend.dev>';
  }

  let currentTo = Array.isArray(options.to) ? [...options.to] : [options.to];

  const doDispatch = async (fromAddr: string, toAddrs: string[]) => {
    return fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddr,
        to: toAddrs,
        reply_to: replyTo,
        subject,
        html,
      }),
    });
  };

  try {
    let resp = await doDispatch(currentFrom, currentTo);
    if (resp.ok) {
      const data = await resp.json().catch(() => ({}));
      return { ok: true, status: resp.status, data, usedFrom: currentFrom };
    }

    const errText = await resp.text();
    console.warn(`Resend dispatch initial attempt returned ${resp.status}:`, errText);

    let errJson: any = null;
    try {
      errJson = JSON.parse(errText);
    } catch {}
    const errMsg = (errJson?.message || errText).toLowerCase();

    let modified = false;

    if (errMsg.includes('domain') || errMsg.includes('from') || errMsg.includes('not verified')) {
      if (!currentFrom.includes('onboarding@resend.dev')) {
        currentFrom = 'Qavironel Technologies <onboarding@resend.dev>';
        modified = true;
      }
    }

    if (errMsg.includes('testing emails to your own email address') || errMsg.includes('own email address')) {
      const match = errText.match(/testing emails to your own email address \(([^)]+)\)/i) ||
                    errText.match(/\b([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,})\b/);
      if (match && match[1]) {
        const ownerEmail = match[1].trim();
        console.log(`Auto-routing to verified account email: ${ownerEmail}`);
        currentTo = [ownerEmail];
      } else {
        currentTo = ['maherbhatt01@gmail.com'];
      }
      currentFrom = 'Qavironel Technologies <onboarding@resend.dev>';
      modified = true;
    }

    if (modified) {
      resp = await doDispatch(currentFrom, currentTo);
      if (resp.ok) {
        const data = await resp.json().catch(() => ({}));
        return { ok: true, status: resp.status, data, usedFrom: currentFrom };
      }
    }

    if (currentFrom !== 'onboarding@resend.dev') {
      currentFrom = 'onboarding@resend.dev';
      resp = await doDispatch(currentFrom, currentTo);
      if (resp.ok) {
        const data = await resp.json().catch(() => ({}));
        return { ok: true, status: resp.status, data, usedFrom: currentFrom };
      }
    }

    const finalErr = await resp.text();
    return { ok: false, status: resp.status, error: finalErr };
  } catch (err: any) {
    return { ok: false, status: 500, error: err?.message || 'Network error' };
  }
}

export default async function handler(req: any, res: any) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader?.('Allow', 'POST');
    return sendJson(res, 405, { success: false, message: 'Method Not Allowed' });
  }

  const clientIp = (req.headers?.['x-vercel-ip'] as string)?.trim() ||
                   (req.headers?.['x-real-ip'] as string)?.trim() ||
                   (req.headers?.['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 
                   req.socket?.remoteAddress || '127.0.0.1';

  // 1. Rate Limit Check
  if (!checkRateLimit(clientIp)) {
    return sendJson(res, 429, {
      success: false,
      message: 'Too many inquiries from this IP address. Please wait a few minutes before trying again.',
    });
  }

  // 2. Parse and Validate Body
  let body: any;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return sendJson(res, 400, { success: false, message: 'Invalid JSON payload.' });
    }
  } catch {
    return sendJson(res, 400, { success: false, message: 'Invalid JSON payload.' });
  }

  // 3. Honeypot check (spam protection)
  const hpField = sanitizeText(body.hpField, 100);
  if (hpField.length > 0) {
    return sendJson(res, 200, {
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
    return sendJson(res, 400, { success: false, message: 'Invalid or missing name.' });
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return sendJson(res, 400, { success: false, message: 'Invalid or missing email address.' });
  }
  if (!details || details.length < 10) {
    return sendJson(res, 400, { success: false, message: 'Project details must be between 10 and 5000 characters.' });
  }

  // 4. Delivery via configured email provider
  const resendApiKey = process.env.RESEND_API_KEY;
  const targetEmail = process.env.CONTACT_RECEIVER_EMAIL || 'maherbhatt01@gmail.com';
  const rawFrom = process.env.RESEND_FROM_EMAIL?.trim();
  const fromEmail = (rawFrom && !rawFrom.toLowerCase().includes('@qavironel.com'))
    ? rawFrom
    : 'Qavironel Technologies <onboarding@resend.dev>';

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
      const dispatchResult = await sendWithResend({
        apiKey: resendApiKey,
        from: fromEmail,
        to: targetEmail,
        replyTo: email,
        subject: `[New Inquiry] ${sanitizeSubject(projectType)} - ${sanitizeSubject(name)}`,
        html: teamHtml,
      });

      if (!dispatchResult.ok) {
        return sendJson(res, 502, {
          success: false,
          code: 'DISPATCH_ERROR',
          message: 'Error communicating with mail provider.',
          detail: process.env.NODE_ENV !== 'production' ? dispatchResult.error : undefined,
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

        await sendWithResend({
          apiKey: resendApiKey,
          from: dispatchResult.usedFrom || fromEmail,
          to: email,
          replyTo: targetEmail,
          subject: `Inquiry Received: ${sanitizeSubject(projectType)} — Qavironel Technologies`,
          html: clientHtml,
        }).catch((err) => console.warn('Client auto-responder skipped/restricted in sandbox:', err));
      } catch (autoErr) {
        console.warn('Client auto-responder exception caught:', autoErr);
      }

      return sendJson(res, 200, {
        success: true,
        message: 'Your project inquiry has been received. Maher Bhatt will review and reply within 12 hours.',
      });
    } catch (err: any) {
      console.error('Internal error during dispatch:', err);
      return sendJson(res, 500, {
        success: false,
        code: 'INTERNAL_ERROR',
        message: 'Internal server error processing dispatch.',
      });
    }
  }

  // If no delivery service credentials are configured in environment
  return sendJson(res, 503, {
    success: false,
    code: 'MAIL_PROVIDER_NOT_CONFIGURED',
    message: 'Online inquiry delivery service is currently not configured on this environment.',
  });
}
