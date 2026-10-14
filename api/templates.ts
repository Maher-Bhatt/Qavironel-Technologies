// Ultra-Executive HTML Email Templates for Qavironel Technologies
// Compatible across all email clients (Gmail, Apple Mail, Outlook, iOS, Android)
// Styled according to official Qavironel Brand Kit v2.0 (Forest Green #174C3A, Deep Evergreen #103629, Warm Ivory #F5F5F0)

function escapeHtml(str: string): string {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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
        <!-- Main Card Container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #D9DED7; overflow: hidden; box-shadow: 0 4px 16px rgba(16, 54, 41, 0.06);">
          
          <!-- Brand Header -->
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
          <!-- Studio Sign-off & Footer -->
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

/**
 * 1. Team Notification for Contact Inquiries
 */
export function renderContactTeamEmail(data: {
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

              <!-- Parameters Grid -->
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

              <!-- Project Scope Box -->
              <div style="margin-bottom: 24px;">
                <div style="font-size: 12px; font-family: 'Courier New', monospace; font-weight: 700; color: #596159; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">
                  PROJECT SCOPE &amp; OBJECTIVES
                </div>
                <div style="background-color: #F9FAF9; border-left: 3px solid #174C3A; padding: 16px 20px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #191D1A; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
${escapeHtml(data.details)}
                </div>
              </div>

              <!-- Action Button -->
              <div style="text-align: left; padding-top: 8px;">
                <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20Project%20Inquiry%20%E2%80%94%20Qavironel%20Technologies" style="display: inline-block; background-color: #174C3A; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 12px 26px; border-radius: 24px; text-decoration: none; letter-spacing: 0.02em;">
                  Reply to ${escapeHtml(data.name)} &rarr;
                </a>
              </div>
            </td>
          </tr>
${EMAIL_FOOTER}`;
}

/**
 * 2. Client Auto-Responder for Contact Inquiries
 */
export function renderContactClientEmail(data: {
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

              <!-- Copy of Submission -->
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

              <!-- Urgent Line -->
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

/**
 * 3. Team Notification for Call Bookings
 */
export function renderBookingTeamEmail(data: {
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
                A 30-minute technical discovery call was requested on <a href="https://qavironel.com" style="color: #174C3A;">qavironel.com</a>.
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F9FAF9; border-radius: 12px; border: 1px solid #E6ECE5; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159; width: 35%;">Requested Date</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 14px; font-weight: 800; color: #103629;">${escapeHtml(data.date)}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159;">Time Slot (IST)</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 14px; font-weight: 800; color: #103629;">${escapeHtml(data.time)}</td>
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

              <!-- Action: Send Google Meet Invite -->
              <div style="text-align: left; padding-top: 8px;">
                <a href="mailto:${escapeHtml(data.email)}?subject=Confirmed:%20Architecture%20Call%20with%20Qavironel%20Technologies%20(${escapeHtml(data.date)})" style="display: inline-block; background-color: #174C3A; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 12px 26px; border-radius: 24px; text-decoration: none;">
                  Confirm &amp; Send Meet Link &rarr;
                </a>
              </div>
            </td>
          </tr>
${EMAIL_FOOTER}`;
}

/**
 * 4. Client Auto-Responder for Call Bookings
 */
export function renderBookingClientEmail(data: {
  name: string;
  date: string;
  time: string;
  topic: string;
}): string {
  return `${EMAIL_HEAD}
          <tr>
            <td style="padding: 32px 32px 24px 32px;">
              <div style="display: inline-block; padding: 4px 12px; background-color: #E6ECE5; border-radius: 20px; font-size: 11px; font-weight: 700; color: #174C3A; font-family: 'Courier New', monospace; letter-spacing: 0.05em; margin-bottom: 16px;">
                CALL REQUEST RECEIVED · PENDING CONFIRMATION
              </div>
              <h1 style="margin: 0 0 12px 0; font-size: 22px; font-weight: 800; color: #191D1A; line-height: 1.3;">
                Hello ${escapeHtml(data.name)}, your call request is received.
              </h1>
              <p style="margin: 0 0 18px 0; font-size: 14px; color: #343A35; line-height: 1.6;">
                Thank you for requesting an architecture review session with <strong>Qavironel Technologies</strong>.
              </p>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #596159; line-height: 1.6;">
                Founding engineer <strong>Maher Bhatt</strong> is reviewing availability for your chosen slot. You will receive an official Google Calendar invite containing the Google Meet room link within <strong>12 hours</strong>.
              </p>

              <!-- Slot Details -->
              <div style="background-color: #F9FAF9; border-radius: 12px; border: 1px solid #E6ECE5; padding: 20px; margin-bottom: 24px;">
                <div style="font-size: 11px; font-family: 'Courier New', monospace; font-weight: 700; color: #596159; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; border-bottom: 1px solid #E6ECE5; padding-bottom: 8px;">
                  REQUESTED SESSION SPECIFICATION
                </div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 13px; line-height: 1.8;">
                  <tr>
                    <td style="color: #596159; width: 35%;">Date:</td>
                    <td style="font-weight: 800; color: #103629;">${escapeHtml(data.date)}</td>
                  </tr>
                  <tr>
                    <td style="color: #596159;">Time (Studio IST):</td>
                    <td style="font-weight: 800; color: #103629;">${escapeHtml(data.time)}</td>
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

/**
 * 5. Team Notification for Quotation Requests
 */
export function renderQuoteTeamEmail(data: {
  name: string;
  email: string;
  organization?: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  features: string;
  scopeDetails: string;
}): string {
  return `${EMAIL_HEAD}
          <tr>
            <td style="padding: 32px 32px 24px 32px;">
              <div style="display: inline-block; padding: 4px 12px; background-color: #E6ECE5; border-radius: 20px; font-size: 11px; font-weight: 700; color: #174C3A; font-family: 'Courier New', monospace; letter-spacing: 0.05em; margin-bottom: 16px;">
                NEW QUOTATION REQUEST
              </div>
              <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 800; color: #191D1A; line-height: 1.25;">
                Quotation Request: ${escapeHtml(data.projectType)}
              </h1>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #596159; line-height: 1.5;">
                A formal quotation and scope estimate was requested by ${escapeHtml(data.name)}.
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F9FAF9; border-radius: 12px; border: 1px solid #E6ECE5; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159; width: 35%;">Client Name</td>
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
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159;">Project Type</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; font-weight: 700; color: #191D1A;">${escapeHtml(data.projectType)}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159;">Budget Tier</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 14px; font-weight: 800; color: #103629;">${escapeHtml(data.budgetRange)}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; color: #596159;">Timeline Target</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E6ECE5; font-size: 13px; font-weight: 600; color: #191D1A;">${escapeHtml(data.timeline)}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; font-size: 13px; color: #596159;">Selected Deliverables</td>
                  <td style="padding: 14px 18px; font-size: 13px; font-weight: 600; color: #191D1A;">${escapeHtml(data.features)}</td>
                </tr>
              </table>

              <div style="margin-bottom: 24px;">
                <div style="font-size: 12px; font-family: 'Courier New', monospace; font-weight: 700; color: #596159; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">
                  SCOPE &amp; REQUIREMENTS SPECIFICATION
                </div>
                <div style="background-color: #F9FAF9; border-left: 3px solid #174C3A; padding: 16px 20px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #191D1A; white-space: pre-wrap;">
${escapeHtml(data.scopeDetails)}
                </div>
              </div>

              <div style="text-align: left; padding-top: 8px;">
                <a href="mailto:${escapeHtml(data.email)}?subject=Quotation%20%26%20Scope%20Breakdown%20%E2%80%94%20Qavironel%20Technologies" style="display: inline-block; background-color: #174C3A; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 12px 26px; border-radius: 24px; text-decoration: none;">
                  Send Quotation Breakdown &rarr;
                </a>
              </div>
            </td>
          </tr>
${EMAIL_FOOTER}`;
}

/**
 * 6. Client Auto-Responder for Quotation Requests
 */
export function renderQuoteClientEmail(data: {
  name: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  features: string;
  scopeDetails: string;
}): string {
  return `${EMAIL_HEAD}
          <tr>
            <td style="padding: 32px 32px 24px 32px;">
              <div style="display: inline-block; padding: 4px 12px; background-color: #E6ECE5; border-radius: 20px; font-size: 11px; font-weight: 700; color: #174C3A; font-family: 'Courier New', monospace; letter-spacing: 0.05em; margin-bottom: 16px;">
                QUOTATION REQUEST RECEIVED
              </div>
              <h1 style="margin: 0 0 12px 0; font-size: 22px; font-weight: 800; color: #191D1A; line-height: 1.3;">
                Hello ${escapeHtml(data.name)}, your quotation request is received.
              </h1>
              <p style="margin: 0 0 18px 0; font-size: 14px; color: #343A35; line-height: 1.6;">
                Thank you for requesting an architectural quotation and milestone estimate from <strong>Qavironel Technologies</strong>.
              </p>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #596159; line-height: 1.6;">
                Our technical lead is analyzing your project scope for <strong>${escapeHtml(data.projectType)}</strong> (${escapeHtml(data.budgetRange)}). We will prepare and deliver a structured scope, sprint milestone breakdown, and commercial estimate within <strong>24 hours</strong>.
              </p>

              <div style="background-color: #F9FAF9; border-radius: 12px; border: 1px solid #E6ECE5; padding: 20px; margin-bottom: 24px;">
                <div style="font-size: 11px; font-family: 'Courier New', monospace; font-weight: 700; color: #596159; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; border-bottom: 1px solid #E6ECE5; padding-bottom: 8px;">
                  REQUEST SUMMARY
                </div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 13px; line-height: 1.8;">
                  <tr>
                    <td style="color: #596159; width: 35%;">Project Type:</td>
                    <td style="font-weight: 700; color: #191D1A;">${escapeHtml(data.projectType)}</td>
                  </tr>
                  <tr>
                    <td style="color: #596159;">Budget Tier:</td>
                    <td style="font-weight: 700; color: #103629;">${escapeHtml(data.budgetRange)}</td>
                  </tr>
                  <tr>
                    <td style="color: #596159;">Target Timeline:</td>
                    <td style="font-weight: 600; color: #191D1A;">${escapeHtml(data.timeline)}</td>
                  </tr>
                  <tr>
                    <td style="color: #596159;">Deliverables:</td>
                    <td style="font-weight: 600; color: #191D1A;">${escapeHtml(data.features)}</td>
                  </tr>
                </table>
              </div>

              <div style="text-align: left;">
                <a href="https://wa.me/919328944252" style="display: inline-block; background-color: #174C3A; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 12px 24px; border-radius: 24px; text-decoration: none;">
                  Direct WhatsApp Line &rarr;
                </a>
              </div>
            </td>
          </tr>
${EMAIL_FOOTER}`;
}

export interface ResendDispatchOptions {
  apiKey: string;
  from?: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
}

export interface ResendDispatchResult {
  ok: boolean;
  status: number;
  data?: any;
  error?: string;
  deliveredTo?: string[];
  usedFrom?: string;
}

/**
 * Robust Resend dispatcher with automatic domain/sandbox fallbacks.
 * 1. Defaults to Resend's free verified sandbox ('Qavironel Technologies <onboarding@resend.dev>')
 *    if the domain 'qavironel.com' is not yet verified.
 * 2. If Resend restricts delivery in sandbox to the registered account owner,
 *    it automatically parses the registered email from Resend's error response and retries.
 * 3. Handles plain sender fallback if display-name wrapper fails.
 */
export async function sendWithResend(options: ResendDispatchOptions): Promise<ResendDispatchResult> {
  const { apiKey, replyTo, subject, html } = options;

  // Determine initial sender: if empty or unverified qavironel.com, default to onboarding@resend.dev
  let currentFrom = options.from?.trim() || '';
  if (!currentFrom || currentFrom.toLowerCase().includes('@qavironel.com')) {
    currentFrom = 'Qavironel Technologies <onboarding@resend.dev>';
  }

  // Ensure recipient is array
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

  // Attempt 1: configured from & to
  let resp = await doDispatch(currentFrom, currentTo);
  if (resp.ok) {
    const data = await resp.json().catch(() => ({}));
    return { ok: true, status: resp.status, data, deliveredTo: currentTo, usedFrom: currentFrom };
  }

  const errText = await resp.text();
  console.warn(`Resend dispatch initial attempt returned ${resp.status}:`, errText);

  let errJson: any = null;
  try {
    errJson = JSON.parse(errText);
  } catch {}
  const errMsg = (errJson?.message || errText).toLowerCase();

  let modified = false;

  // Recovery 1: Unverified domain in from -> switch to onboarding@resend.dev
  if (errMsg.includes('domain') || errMsg.includes('from') || errMsg.includes('not verified')) {
    if (!currentFrom.includes('onboarding@resend.dev')) {
      console.warn('Switching from unverified domain to fallback sandbox sender onboarding@resend.dev');
      currentFrom = 'Qavironel Technologies <onboarding@resend.dev>';
      modified = true;
    }
  }

  // Recovery 2: Sandbox restriction -> Resend says:
  // "You can only send testing emails to your own email address (xyz@gmail.com)..."
  if (errMsg.includes('testing emails to your own email address') || errMsg.includes('own email address')) {
    const match = errText.match(/testing emails to your own email address \(([^)]+)\)/i) ||
                  errText.match(/\b([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,})\b/);
    if (match && match[1]) {
      const ownerEmail = match[1].trim();
      console.log(`Detected verified Resend account owner email: ${ownerEmail}. Auto-routing...`);
      currentTo = [ownerEmail];
      currentFrom = 'Qavironel Technologies <onboarding@resend.dev>';
      modified = true;
    } else {
      currentTo = ['maherbhatt01@gmail.com'];
      currentFrom = 'Qavironel Technologies <onboarding@resend.dev>';
      modified = true;
    }
  }

  if (modified) {
    resp = await doDispatch(currentFrom, currentTo);
    if (resp.ok) {
      const data = await resp.json().catch(() => ({}));
      console.log('Resend dispatch succeeded on auto-recovery attempt.');
      return { ok: true, status: resp.status, data, deliveredTo: currentTo, usedFrom: currentFrom };
    }
  }

  // Recovery 3: Plain onboarding@resend.dev without display name
  if (currentFrom !== 'onboarding@resend.dev') {
    currentFrom = 'onboarding@resend.dev';
    resp = await doDispatch(currentFrom, currentTo);
    if (resp.ok) {
      const data = await resp.json().catch(() => ({}));
      console.log('Resend dispatch succeeded with plain onboarding@resend.dev sender.');
      return { ok: true, status: resp.status, data, deliveredTo: currentTo, usedFrom: currentFrom };
    }
  }

  const finalErr = await resp.text();
  console.error('Resend dispatch could not be completed:', resp.status, finalErr);
  return { ok: false, status: resp.status, error: finalErr };
}
