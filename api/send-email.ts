import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, businessName, whatsapp } = req.body;
  console.log('✅ Booking received:', { name, email, businessName, whatsapp });

  // Send email via webhook to external service
  try {
    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'info@solondigital.com' }],
          },
        ],
        from: { email: 'noreply@solondigital.com' },
        subject: `🎯 Nieuwe Audit Aanmelding - ${name}`,
        content: [
          {
            type: 'text/html',
            value: `
              <h2>🎯 Nieuwe Audit Aanmelding</h2>
              <p><strong>Naam:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Bedrijf:</strong> ${businessName}</p>
              <p><strong>WhatsApp:</strong> ${whatsapp}</p>
              <p><strong>Aangemeld op:</strong> ${new Date().toLocaleString('nl-NL')}</p>
            `,
          },
        ],
      }),
    });
    console.log('✅ Email sent');
  } catch (err) {
    console.error('⚠️ Email failed (non-blocking):', err);
  }

  return res.status(200).json({
    success: true,
    message: 'Booking saved',
    data: { name, email, businessName, whatsapp },
  });
}
