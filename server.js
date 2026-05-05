const express = require('express');
const emailjs = require('@emailjs/nodejs');
require('dotenv').config();

const app = express();
app.use(express.json());

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const USER_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID;
const ADMIN_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID;
const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL || 'job@gymtogether.nl';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;

emailjs.init({
  publicKey: PUBLIC_KEY,
  privateKey: PRIVATE_KEY,
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, businessName, whatsapp } = req.body;

  console.log('🔧 Backend: Sending emails for:', { name, email, businessName });

  try {
    const userEmailAddr = email || 'booking@solondigital.com';

    console.log('📧 Backend: Sending user email to:', userEmailAddr);
    await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, {
      to_email: userEmailAddr,
      user_name: name,
      business_name: businessName,
      user_email: userEmailAddr,
    });
    console.log('✅ Backend: User email sent');

    console.log('📧 Backend: Sending admin email to:', ADMIN_EMAIL);
    await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, {
      to_email: ADMIN_EMAIL,
      admin_name: 'Admin',
      client_name: name,
      client_email: email,
      business_name: businessName,
      whatsapp: whatsapp,
      booking_date: new Date().toLocaleString(),
    });
    console.log('✅ Backend: Admin email sent');

    res.json({ success: true, message: 'Emails sent' });
  } catch (error) {
    console.error('❌ Backend error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`);
});
