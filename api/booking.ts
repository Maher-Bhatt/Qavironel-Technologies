// Serverless handler for booking requests (Google Meet / Call appointments)
// Validates fields on server, sends via Resend if configured, returns honest 503 if unconfigured.

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  let body: any;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ success: false, message: 'Invalid JSON payload.' });
  }

  if (body.hpField && body.hpField.trim().length > 0) {
    return res.status(200).json({ success: true, message: 'Request received.' });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const date = body.date?.trim();
  const time = body.time?.trim();
  const topic = body.topic?.trim() || 'General Architecture Consultation';
  const notes = body.notes?.trim() || '';

  if (!name || name.length < 2 || !email || !date || !time) {
    return res.status(400).json({ success: false, message: 'Missing required booking fields.' });
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
          subject: `[Call Request] ${date} at ${time} - ${name} (${topic})`,
          html: `
            <h2>New Call Request from Qavironel.com</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organization:</strong> ${body.organization || 'N/A'}</p>
            <p><strong>Requested Date:</strong> ${date}</p>
            <p><strong>Requested Time Slot:</strong> ${time}</p>
            <p><strong>Topic:</strong> ${topic}</p>
            <p><strong>Notes:</strong> ${notes || 'None'}</p>
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
