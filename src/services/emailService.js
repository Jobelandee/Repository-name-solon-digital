import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const ADMIN_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID;
const USER_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID;
const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL || 'job@gymtogether.nl';

console.log('📋 EmailJS initialized');
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const RETRY_ATTEMPTS = 3;
const RETRY_DELAY = 1000;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const sendViaBrowser = async (bookingData, retryCount = 0) => {
  const { name, email, businessName, whatsapp } = bookingData;

  try {
    const userEmailAddr = email || 'booking@solondigital.com';
    console.log('📧 Sending user email to:', userEmailAddr);

    await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, {
      to_email: userEmailAddr,
      user_name: name,
      business_name: businessName,
      user_email: userEmailAddr,
    });
    console.log('✅ User email sent');

    console.log('📧 Sending admin email to:', ADMIN_EMAIL);
    await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, {
      to_email: ADMIN_EMAIL,
      admin_name: 'Admin',
      client_name: name,
      client_email: email,
      business_name: businessName,
      whatsapp: whatsapp,
      booking_date: new Date().toLocaleString(),
    });
    console.log('✅ Admin email sent');

    return { success: true };
  } catch (error) {
    if (retryCount < RETRY_ATTEMPTS) {
      console.log(`⚠️ Retry ${retryCount + 1}/${RETRY_ATTEMPTS}...`);
      await sleep(RETRY_DELAY * (retryCount + 1));
      return sendViaBrowser(bookingData, retryCount + 1);
    }
    throw error;
  }
};

const sendViaBackend = async (bookingData, retryCount = 0) => {
  const { name, email, businessName, whatsapp } = bookingData;

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, businessName, whatsapp }),
    });

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`);
    }

    console.log('✅ Backend returned success');
    return await response.json();
  } catch (error) {
    if (retryCount < RETRY_ATTEMPTS) {
      console.log(`⚠️ Retry ${retryCount + 1}/${RETRY_ATTEMPTS}...`);
      await sleep(RETRY_DELAY * (retryCount + 1));
      return sendViaBackend(bookingData, retryCount + 1);
    }
    throw error;
  }
};

export const sendEmails = async (bookingData) => {
  console.log('📧 Sending emails for:', { name: bookingData.name, email: bookingData.email });

  // In development (localhost), use backend server
  // In production (Vercel), use browser EmailJS
  const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  try {
    if (isDevelopment) {
      console.log('🔧 Using backend server (development)');
      return await sendViaBackend(bookingData);
    } else {
      console.log('🌐 Using browser EmailJS (production)');
      return await sendViaBrowser(bookingData);
    }
  } catch (error) {
    console.error('❌ Email error:', error);
    throw error;
  }
};
