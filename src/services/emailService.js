export const sendEmails = async (bookingData) => {
  const { name, email, businessName, whatsapp } = bookingData;
  const fromEmail = process.env.REACT_APP_FROM_EMAIL;
  const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;

  try {
    // Send confirmation email to user
    await sendEmail({
      to: email,
      from: fromEmail,
      subject: 'Your Growth Audit Booking is Confirmed! 🎯',
      html: generateUserEmailHTML(name, businessName),
    });

    // Send notification to admin
    await sendEmail({
      to: adminEmail,
      from: fromEmail,
      subject: `New Booking: ${name} - ${businessName}`,
      html: generateAdminEmailHTML(name, email, businessName, whatsapp),
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

const sendEmail = async ({ to, from, subject, html }) => {
  const apiKey = process.env.REACT_APP_SENDGRID_API_KEY;

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: to }],
        },
      ],
      from: {
        email: from,
        name: 'Solon Digital',
      },
      subject,
      content: [
        {
          type: 'text/html',
          value: html,
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`SendGrid error: ${error.errors?.[0]?.message || 'Unknown error'}`);
  }

  return response;
};

const generateUserEmailHTML = (name, businessName) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #FAFAF8 0%, #F5F3F0 100%); margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #D4AF37 0%, #E5C158 100%); padding: 40px 20px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 28px; }
    .content { padding: 40px; }
    .content h2 { color: #2A2A2A; font-size: 22px; margin: 0 0 15px 0; }
    .content p { color: #666666; font-size: 16px; line-height: 1.6; margin: 10px 0; }
    .detail { background: #F5F3F0; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #D4AF37; }
    .detail-label { color: #D4AF37; font-weight: 600; font-size: 12px; text-transform: uppercase; }
    .detail-value { color: #2A2A2A; font-size: 16px; margin-top: 5px; }
    .button { display: inline-block; background: #D4AF37; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 20px; }
    .footer { background: #F5F3F0; padding: 20px; text-align: center; color: #999; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Your Growth Audit is Booked! ✨</h1>
    </div>
    <div class="content">
      <h2>Hello ${name},</h2>
      <p>Thank you for booking your free growth audit with Solon Digital. We're excited to analyze ${businessName} and help you scale your business.</p>

      <div class="detail">
        <div class="detail-label">Business</div>
        <div class="detail-value">${businessName}</div>
      </div>

      <p><strong>What happens next?</strong></p>
      <ul style="color: #666666; line-height: 1.8;">
        <li><strong>Within 24 hours:</strong> We'll reach out via WhatsApp to confirm your appointment</li>
        <li><strong>Strategy call:</strong> Spend 15 minutes with our team to discuss your growth opportunities</li>
        <li><strong>Your roadmap:</strong> Leave with a clear digital strategy tailored to your business</li>
      </ul>

      <p>If you have any questions, feel free to reply to this email or message us on WhatsApp.</p>

      <a href="https://www.solondigital.com" class="button">Visit Our Website</a>
    </div>
    <div class="footer">
      <p>© 2025 Solon Digital. All rights reserved.</p>
      <p>Build Smart Websites That Work</p>
    </div>
  </div>
</body>
</html>
`;

const generateAdminEmailHTML = (name, email, businessName, whatsapp) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; padding: 20px; }
    .header { background: #D4AF37; color: white; padding: 15px; border-radius: 6px; margin-bottom: 20px; }
    .detail { margin: 15px 0; padding: 10px; background: #f9f9f9; border-left: 3px solid #D4AF37; }
    .label { color: #D4AF37; font-weight: 600; font-size: 12px; text-transform: uppercase; }
    .value { color: #2A2A2A; font-size: 14px; margin-top: 5px; word-break: break-all; }
    .whatsapp-link { display: inline-block; background: #25D366; color: white; padding: 10px 15px; border-radius: 5px; text-decoration: none; margin-top: 10px; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">🎯 New Audit Booking</h2>
    </div>

    <div class="detail">
      <div class="label">Name</div>
      <div class="value">${name}</div>
    </div>

    <div class="detail">
      <div class="label">Business</div>
      <div class="value">${businessName}</div>
    </div>

    <div class="detail">
      <div class="label">Email</div>
      <div class="value">${email}</div>
    </div>

    <div class="detail">
      <div class="label">WhatsApp</div>
      <div class="value">${whatsapp}</div>
      <a href="https://wa.me/${whatsapp.replace(/\\D/g, '')}?text=Hi%20${encodeURIComponent(name)}%2C%20this%20is%20Solon%20Digital" class="whatsapp-link">Message on WhatsApp</a>
    </div>

    <div class="detail">
      <div class="label">Booking Date</div>
      <div class="value">${new Date().toLocaleString()}</div>
    </div>

    <p style="color: #666; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
      ⏳ <strong>Next steps:</strong> Message ${name} on WhatsApp to confirm the appointment time.
    </p>
  </div>
</body>
</html>
`;
