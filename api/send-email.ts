import type { VercelRequest, VercelResponse } from '@vercel/node';
import emailjs from '@emailjs/nodejs';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const USER_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID;
const ADMIN_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID;
const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL || 'job@gymtogether.nl';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;

if (PUBLIC_KEY && PRIVATE_KEY) {
  emailjs.init({
    publicKey: PUBLIC_KEY,
    privateKey: PRIVATE_KEY,
  });
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, businessName, whatsapp } = req.body;

  console.log('🔧 Vercel: Sending emails for:', { name, email, businessName });

  try {
    const userEmailAddr = email || 'booking@solondigital.com';

    console.log('📧 Vercel: Sending user email to:', userEmailAddr);
    await emailjs.send(SERVICE_ID!, USER_TEMPLATE_ID!, {
      to_email: userEmailAddr,
      user_name: name,
      business_name: businessName,
      user_email: userEmailAddr,
    });

    console.log('📧 Vercel: Sending admin email to:', ADMIN_EMAIL);
    await emailjs.send(SERVICE_ID!, ADMIN_TEMPLATE_ID!, {
      to_email: ADMIN_EMAIL,
      admin_name: 'Admin',
      client_name: name,
      client_email: email,
      business_name: businessName,
      whatsapp: whatsapp,
      booking_date: new Date().toLocaleString(),
    });

    console.log('✅ Vercel: Emails sent successfully');
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('❌ Vercel error:', error);
    return res.status(500).json({ error: error.message });
  }
}
