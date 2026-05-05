import type { VercelRequest, VercelResponse } from '@vercel/node';
import emailjs from '@emailjs/nodejs';

async function sendToSlack(bookingData: any) {
  try {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!webhookUrl) {
      throw new Error('Slack webhook URL not configured');
    }

    const message = {
      text: '🎯 Nieuwe Audit Boeking',
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🎯 Nieuwe Audit Boeking',
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Naam:*\n${bookingData.name}`,
            },
            {
              type: 'mrkdwn',
              text: `*Email:*\n${bookingData.email}`,
            },
            {
              type: 'mrkdwn',
              text: `*Bedrijf:*\n${bookingData.businessName}`,
            },
            {
              type: 'mrkdwn',
              text: `*WhatsApp:*\n${bookingData.whatsapp}`,
            },
          ],
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `Booked op: ${new Date().toLocaleString('nl-NL')}`,
            },
          ],
        },
      ],
    };

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });

    console.log('✅ Booking notification sent to Slack');
  } catch (error) {
    console.error('❌ Slack error:', error);
    throw error;
  }
}

async function sendConfirmationEmail(bookingData: any) {
  try {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const userTemplateId = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID;
    const adminTemplateId = process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID;
    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !userTemplateId || !adminTemplateId || !privateKey) {
      throw new Error('EmailJS credentials not fully configured');
    }

    emailjs.init({
      publicKey,
      privateKey,
    });

    // Send to user
    await emailjs.send(serviceId, userTemplateId, {
      to_email: bookingData.email,
      user_name: bookingData.name,
      business_name: bookingData.businessName,
      user_email: bookingData.email,
    });

    console.log('✅ User confirmation email sent');

    // Send to admin
    await emailjs.send(serviceId, adminTemplateId, {
      to_email: adminEmail,
      client_name: bookingData.name,
      client_email: bookingData.email,
      business_name: bookingData.businessName,
      whatsapp: bookingData.whatsapp,
      booking_date: new Date().toLocaleString('nl-NL'),
    });

    console.log('✅ Admin notification email sent');
  } catch (error) {
    console.error('❌ Email error:', error);
    throw error;
  }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, businessName, whatsapp } = req.body;

  console.log('📊 Processing booking:', { name, email, businessName, whatsapp });

  try {
    // Send notification to Slack
    await sendToSlack({ name, email, businessName, whatsapp });

    // Send confirmation emails via EmailJS
    await sendConfirmationEmail({ name, email, businessName, whatsapp });

    return res.status(200).json({
      success: true,
      message: 'Booking notification sent to Slack and confirmation emails sent',
      data: { name, email, businessName, whatsapp },
    });
  } catch (error) {
    console.error('❌ Handler error:', error);
    return res.status(500).json({
      error: 'Failed to process booking',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
