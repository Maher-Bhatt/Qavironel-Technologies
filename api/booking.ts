// Serverless handler for booking requests (Google Meet / Call appointments)
// Validates fields on server, sends via Resend if configured, returns honest status.

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

function renderBookingTeamEmail(data: {
  name: string;
  email: string;
  organization?: string;
  date: string;
  time: string;
  topic: string;
  notes?: string;
}): string {
  return `${EMAIL_HEAD}
          <tr>
            <td style="padding: 32px 32px 24px 32px;">
              <div style="display: inline-block; padding: 4px 12px; background-color: #E6ECE5; border-radius: 20px; font-size: 11px; font-weight: 700; color: #174C3A; font-family: 'Courier New', monospace; letter-spacing: 0.05em; margin-bottom: 16px;">
                ARCHITECTURE CALL REQUEST
              </div>
              <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 800; color: #191D1A; line-height: 1.25;">
                Call Requested by ${escapeHtml(data.name)}
              </h1>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #596159; line-height: 1.5;">
                A 60-minute technical discovery session (1 Hour) was requested on <a href="https://qavironel.com" style="color: #174C3A;">qavironel.com</a>.
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F9FAF9; border-radius: 12px; border: 1px solid #E6ECE5; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159; width: 35%;">Requested Date</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 14px; font-weight: 800; color: #103629;">${escapeHtml(data.date)}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159;">Time Slot (IST)</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 14px; font-weight: 800; color: #103629;">${escapeHtml(data.time)} (60 Minutes)</td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159;">Client Name</td>
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
                  <td style="padding: 14px 18px; font-size: 13px; color: #596159;">Topic</td>
                  <td style="padding: 14px 18px; font-size: 13px; font-weight: 700; color: #191D1A;">${escapeHtml(data.topic)}</td>
                </tr>
              </table>

              ${data.notes ? `
              <div style="margin-bottom: 24px;">
                <div style="font-size: 12px; font-family: 'Courier New', monospace; font-weight: 700; color: #596159; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">
                  MEETING PREPARATION NOTES
                </div>
                <div style="background-color: #F9FAF9; border-left: 3px solid #174C3A; padding: 14px 18px; border-radius: 4px; font-size: 13px; line-height: 1.6; color: #191D1A; white-space: pre-wrap;">
${escapeHtml(data.notes)}
                </div>
              </div>` : ''}

              <div style="text-align: left; padding-top: 8px;">
                <a href="mailto:${escapeHtml(data.email)}?subject=Confirmed:%20Architecture%20Call%20with%20Qavironel%20Technologies%20(${escapeHtml(data.date)})" style="display: inline-block; background-color: #174C3A; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 12px 26px; border-radius: 24px; text-decoration: none;">
                  Confirm &amp; Send Meet Link &rarr;
                </a>
              </div>
            </td>
          </tr>
${EMAIL_FOOTER}`;
}

function renderBookingClientEmail(data: {
  name: string;
  date: string;
  time: string;
  topic: string;
}): string {
  return `${EMAIL_HEAD}
          <tr>
            <td style="padding: 32px 32px 24px 32px;">
              <div style="display: inline-block; padding: 4px 12px; background-color: #E6ECE5; border-radius: 20px; font-size: 11px; font-weight: 700; color: #174C3A; font-family: 'Courier New', monospace; letter-spacing: 0.05em; margin-bottom: 16px;">
                60-MIN CALL REQUEST RECEIVED · PENDING CONFIRMATION
              </div>
              <h1 style="margin: 0 0 12px 0; font-size: 22px; font-weight: 800; color: #191D1A; line-height: 1.3;">
                Hello ${escapeHtml(data.name)}, your call request is received.
              </h1>
              <p style="margin: 0 0 18px 0; font-size: 14px; color: #343A35; line-height: 1.6;">
                Thank you for requesting a 60-minute architecture discovery session with <strong>Qavironel Technologies</strong>.
              </p>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #596159; line-height: 1.6;">
                Founding engineer <strong>Maher Bhatt</strong> is reviewing availability for your chosen slot. You will receive an official Google Calendar invite containing the Google Meet room link within <strong>12 hours</strong>.
              </p>

              <div style="background-color: #F9FAF9; border-radius: 12px; border: 1px solid #E6ECE5; padding: 20px; margin-bottom: 24px;">
                <div style="font-size: 11px; font-family: 'Courier New', monospace; font-weight: 700; color: #596159; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; border-bottom: 1px solid #E6ECE5; padding-bottom: 8px;">
                  REQUESTED SESSION SPECIFICATION (60 MINUTES)
                </div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 13px; line-height: 1.8;">
                  <tr>
                    <td style="color: #596159; width: 35%;">Date:</td>
                    <td style="font-weight: 800; color: #103629;">${escapeHtml(data.date)}</td>
                  </tr>
                  <tr>
                    <td style="color: #596159;">Time (Studio IST):</td>
                    <td style="font-weight: 800; color: #103629;">${escapeHtml(data.time)} (60 Minutes)</td>
                  </tr>
                  <tr>
                    <td style="color: #596159;">Topic:</td>
                    <td style="font-weight: 600; color: #191D1A;">${escapeHtml(data.topic)}</td>
                  </tr>
                  <tr>
                    <td style="color: #596159;">Platform:</td>
                    <td style="font-weight: 600; color: #174C3A;">Google Meet (Link will be sent in calendar invite)</td>
                  </tr>
                </table>
              </div>

              <div style="text-align: left;">
                <a href="https://wa.me/919328944252" style="display: inline-block; background-color: #174C3A; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 12px 24px; border-radius: 24px; text-decoration: none;">
                  Message Maher on WhatsApp &rarr;
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
  isAutoResponder?: boolean;
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
      if (options.isAutoResponder) {
        console.warn('Sandbox mode: Resend restricts sending auto-responders to unverified external emails without a custom domain. Suppressing reroute to owner so founder does not receive duplicate client email.');
        return { ok: false, status: 403, error: 'Sandbox mode: auto-responder skipped to prevent sending client email to owner.' };
      }
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
  if (req.method !== 'POST') {
    res.setHeader?.('Allow', 'POST');
    return sendJson(res, 405, { success: false, message: 'Method Not Allowed' });
  }

  const clientIp = (req.headers?.['x-vercel-ip'] as string)?.trim() ||
                   (req.headers?.['x-real-ip'] as string)?.trim() ||
                   (req.headers?.['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 
                   req.socket?.remoteAddress || '127.0.0.1';

  if (!checkRateLimit(clientIp)) {
    return sendJson(res, 429, {
      success: false,
      message: 'Too many booking requests from this IP address. Please wait a few minutes before trying again.',
    });
  }

  let body: any;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return sendJson(res, 400, { success: false, message: 'Invalid JSON payload.' });
    }
  } catch {
    return sendJson(res, 400, { success: false, message: 'Invalid JSON payload.' });
  }

  const hpField = sanitizeText(body.hpField, 100);
  if (hpField.length > 0) {
    return sendJson(res, 200, {
      success: true,
      message: 'Booking request received.',
    });
  }

  const name = sanitizeText(body.name, 100);
  const email = sanitizeText(body.email, 120);
  const organization = sanitizeText(body.organization, 150) || 'N/A';
  const date = sanitizeText(body.date, 30);
  const time = sanitizeText(body.time, 30);
  const topic = sanitizeText(body.topic, 100) || 'Discovery & Architecture';
  const notes = sanitizeText(body.notes, 2000);

  if (!name || name.length < 2) {
    return sendJson(res, 400, { success: false, message: 'Invalid or missing name.' });
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return sendJson(res, 400, { success: false, message: 'Invalid or missing email address.' });
  }
  if (!date || !time) {
    return sendJson(res, 400, { success: false, message: 'Missing date or time selection.' });
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

      const dispatchResult = await sendWithResend({
        apiKey: resendApiKey,
        from: fromEmail,
        to: targetEmail,
        replyTo: email,
        subject: `[Call Request (60m)] ${sanitizeSubject(date)} at ${sanitizeSubject(time)} - ${sanitizeSubject(name)} (${sanitizeSubject(topic)})`,
        html: teamHtml,
        isAutoResponder: false,
      });

      if (!dispatchResult.ok) {
        return sendJson(res, 502, {
          success: false,
          code: 'DISPATCH_ERROR',
          message: 'Failed to dispatch meeting notification.',
          detail: process.env.NODE_ENV !== 'production' ? dispatchResult.error : undefined,
        });
      }

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
          subject: `Meeting Requested: 60-Min Architecture Discovery Session — Qavironel Technologies`,
          html: clientHtml,
          isAutoResponder: true,
        }).catch((err) => console.warn('Client auto-responder skipped/restricted in sandbox:', err));
      } catch (autoErr) {
        console.warn('Client auto-responder exception caught:', autoErr);
      }

      return sendJson(res, 200, {
        success: true,
        message: 'Your meeting request has been received. Maher Bhatt will review availability and confirm your calendar invite within 12 hours.',
      });
    } catch (err: any) {
      console.error('Internal error during booking dispatch:', err);
      return sendJson(res, 500, { success: false, message: 'Internal server error processing meeting dispatch.' });
    }
  }

  return sendJson(res, 503, {
    success: false,
    code: 'CALENDAR_PROVIDER_NOT_CONFIGURED',
    message: 'Online meeting scheduling service is currently not configured on this environment.',
  });
}
