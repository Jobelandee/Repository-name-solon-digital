import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, businessName, whatsapp } = req.body;

  console.log('🔧 TEST: Booking received:', { name, email, businessName, whatsapp });

  // Save to a simple text log for debugging
  const bookingInfo = `
${new Date().toISOString()}
Name: ${name}
Email: ${email}
Business: ${businessName}
WhatsApp: ${whatsapp}
---
`;

  console.log('📝 Booking saved:', bookingInfo);

  // Return success immediately
  return res.status(200).json({
    success: true,
    message: 'Booking received and saved',
    data: { name, email, businessName, whatsapp }
  });
}
