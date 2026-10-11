// Serverless handler for quotation requests
// Validates scope fields on server, dispatches via email provider, returns honest status.

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
  const projectType = body.projectType?.trim() || 'Custom Platform';
  const budgetRange = body.budgetRange?.trim() || 'Standard Tier';
  const timeline = body.timeline?.trim() || 'Flexible';
  const scopeDetails = body.scopeDetails?.trim();
  const features = Array.isArray(body.features) ? body.features.join(', ') : 'None selected';

  if (!name || name.length < 2 || !email || !scopeDetails || scopeDetails.length < 10) {
    return res.status(400).json({ success: false, message: 'Missing or invalid quotation fields.' });
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
          subject: `[Quotation Request] ${projectType} - ${name} (${budgetRange})`,
          html: `
            <h2>New Quotation Request from Qavironel.com</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organization:</strong> ${body.organization || 'N/A'}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget Tier:</strong> ${budgetRange}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
            <p><strong>Selected Features:</strong> ${features}</p>
            <hr />
            <h3>Scope & Requirements:</h3>
            <p style="white-space: pre-wrap;">${scopeDetails}</p>
          `,
        }),
      });

      if (!emailResp.ok) {
        return res.status(502).json({ success: false, message: 'Failed to dispatch quotation request.' });
      }

      return res.status(200).json({
        success: true,
        message: 'Your quotation request has been received. Our engineering lead will analyze your requirements and deliver a structured scope breakdown within 24 hours.',
      });
    } catch {
      return res.status(500).json({ success: false, message: 'Internal server error processing quote dispatch.' });
    }
  }

  return res.status(503).json({
    success: false,
    code: 'QUOTE_PROVIDER_NOT_CONFIGURED',
    message: 'Online quotation dispatch service is currently not configured on this environment.',
  });
}
