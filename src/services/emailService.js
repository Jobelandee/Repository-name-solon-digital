export const sendEmails = async (bookingData) => {
  const { name, email, brandUrl, revenue } = bookingData;
  const fromEmail = process.env.REACT_APP_FROM_EMAIL;
  const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;

  try {
    // Send confirmation email to user
    await sendEmail({
      to: email,
      from: fromEmail,
      subject: 'Your Strategy Booking is Confirmed! 🎯',
      html: generateUserEmailHTML(name, brandUrl),
    });

    // Send notification to admin
    await sendEmail({
      to: adminEmail,
      from: fromEmail,
      subject: `New Booking: ${name} from ${brandUrl}`,
      html: generateAdminEmailHTML(name, email, brandUrl, revenue),
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

const generateUserEmailHTML = (name, brandUrl) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #FAFAF8 0%, #F5F3F0 100%); margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #C9A961 0%, #E8C96A 100%); padding: 40px 20px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 28px; }
    .content { padding: 40px; }
    .content h2 { color: #2A2A2A; font-size: 22px; margin: 0 0 15px 0; }
    .content p { color: #666666; font-size: 16px; line-height: 1.6; margin: 10px 0; }
    .detail { background: #F5F3F0; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #C9A961; }
    .detail-label { color: #C9A961; font-weight: 600; font-size: 12px; text-transform: uppercase; }
    .detail-value { color: #2A2A2A; font-size: 16px; margin-top: 5px; }
    .button { display: inline-block; background: #C9A961; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 20px; }
    .footer { background: #F5F3F0; padding: 20px; text-align: center; color: #999; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Booking Confirmed! ✨</h1>
    </div>
    <div class="content">
      <h2>Hello ${name},</h2>
      <p>Your strategy booking with Solon Digital has been confirmed. We're excited to help elevate your brand's digital presence.</p>

      <div class="detail">
        <div class="detail-label">Your Brand</div>
        <div class="detail-value">${brandUrl}</div>
      </div>

      <p><strong>What happens next?</strong></p>
      <ul style="color: #666666; line-height: 1.8;">
        <li><strong>24-48 hours:</strong> We'll conduct a comprehensive digital audit of your brand</li>
        <li><strong>Your audit report:</strong> Detailed findings with actionable recommendations</li>
        <li><strong>Strategy call:</strong> Our team will contact you to discuss results and next steps</li>
      </ul>

      <p>If you have any questions in the meantime, feel free to reply to this email.</p>

      <a href="https://solondigital.com" class="button">Visit Our Website</a>
    </div>
    <div class="footer">
      <p>© 2024 Solon Digital. All rights reserved.</p>
      <p>Build Your Brand Online</p>
    </div>
  </div>
</body>
</html>
`;

const generateAdminEmailHTML = (name, email, brandUrl, revenue) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; padding: 20px; }
    .header { background: #C9A961; color: white; padding: 15px; border-radius: 6px; margin-bottom: 20px; }
    .detail { margin: 15px 0; padding: 10px; background: #f9f9f9; border-left: 3px solid #C9A961; }
    .label { color: #C9A961; font-weight: 600; font-size: 12px; text-transform: uppercase; }
    .value { color: #2A2A2A; font-size: 14px; margin-top: 5px; word-break: break-all; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">🎯 New Booking Received</h2>
    </div>

    <div class="detail">
      <div class="label">Name</div>
      <div class="value">${name}</div>
    </div>

    <div class="detail">
      <div class="label">Email</div>
      <div class="value">${email}</div>
    </div>

    <div class="detail">
      <div class="label">Brand URL</div>
      <div class="value">${brandUrl}</div>
    </div>

    <div class="detail">
      <div class="label">Annual Revenue</div>
      <div class="value">${revenue}</div>
    </div>

    <div class="detail">
      <div class="label">Booking Date</div>
      <div class="value">${new Date().toLocaleString()}</div>
    </div>

    <p style="color: #666; margin-top: 30px; text-align: center;">
      Action required: Follow up with ${name} to schedule strategy call
    </p>
  </div>
</body>
</html>
`;
