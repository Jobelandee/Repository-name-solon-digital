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

  return res.status(200).json({
    success: true,
    message: 'Booking saved',
    data: { name, email, businessName, whatsapp },
  });
}
