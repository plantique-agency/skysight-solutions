import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, message, company } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Utilisight Contact <noreply@utilisight.ca>',
        to: [process.env.OWNER_EMAIL!],
        reply_to: email,
        subject: `New inquiry from ${name} — ${service || 'General'}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a2e;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold;">Name:</td>
                <td style="padding: 8px;">${name}</td>
              </tr>
              <tr style="background:#f9f9f9">
                <td style="padding: 8px; font-weight: bold;">Email:</td>
                <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Phone:</td>
                <td style="padding: 8px;">${phone || 'Not provided'}</td>
              </tr>
              <tr style="background:#f9f9f9">
                <td style="padding: 8px; font-weight: bold;">Company:</td>
                <td style="padding: 8px;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Service:</td>
                <td style="padding: 8px;">${service || 'Not specified'}</td>
              </tr>
              <tr style="background:#f9f9f9">
                <td style="padding: 8px; font-weight: bold;">Message:</td>
                <td style="padding: 8px;">${message}</td>
              </tr>
            </table>
            <p style="color: #888; font-size: 12px; margin-top: 24px;">
              Sent from utilisight.ca contact form
            </p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend error:', error);
      throw new Error('Failed to send email');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
