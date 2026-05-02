import emailjs from '@emailjs/browser';

// EmailJS Configuration - Get these from https://emailjs.com/dashboard
// See EMAILJS_SETUP.md for detailed instructions
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'PASTE_YOUR_PUBLIC_KEY_HERE';
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'PASTE_YOUR_SERVICE_ID_HERE';
const ADMIN_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID || 'PASTE_ADMIN_TEMPLATE_ID_HERE';
const USER_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID || 'PASTE_USER_TEMPLATE_ID_HERE';
const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL || 'job@gymtogether.nl';

// Initialize EmailJS
console.log('EmailJS Config:', {
  publicKey: EMAILJS_PUBLIC_KEY ? EMAILJS_PUBLIC_KEY.substring(0, 5) + '...' : 'MISSING',
  serviceId: SERVICE_ID ? SERVICE_ID.substring(0, 5) + '...' : 'MISSING',
  adminTemplate: ADMIN_TEMPLATE_ID ? ADMIN_TEMPLATE_ID.substring(0, 5) + '...' : 'MISSING',
  userTemplate: USER_TEMPLATE_ID ? USER_TEMPLATE_ID.substring(0, 5) + '...' : 'MISSING',
});
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendEmails = async (bookingData) => {
  const { name, email, businessName, whatsapp } = bookingData;

  try {
    // Send confirmation email to user
    await emailjs.send(
      SERVICE_ID,
      USER_TEMPLATE_ID,
      {
        to_email: email || 'booking@solondigital.com',
        user_name: name,
        business_name: businessName,
        user_email: email,
      }
    );

    // Send notification to admin
    await emailjs.send(
      SERVICE_ID,
      ADMIN_TEMPLATE_ID,
      {
        to_email: ADMIN_EMAIL,
        admin_name: 'Admin',
        client_name: name,
        client_email: email,
        business_name: businessName,
        whatsapp: whatsapp,
        booking_date: new Date().toLocaleString(),
      }
    );

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};
