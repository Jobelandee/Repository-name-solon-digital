// Google Sheets integration via Webhook
// Send booking data to a Google Sheet via a webhook service

export const saveBookingToSheet = async (bookingData) => {
  try {
    // Using Google Forms submission as alternative to direct API
    // For a real implementation, you would use Google Sheets API
    // For now, we'll log the data and rely on email as the backup
    console.log('Booking data ready to be saved to sheet:', bookingData);

    // Optional: Send to a webhook service (e.g., Zapier, Make.com)
    // This would connect to Google Sheets automatically
    const webhookUrl = process.env.REACT_APP_SHEETS_WEBHOOK_URL;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: bookingData.name,
          businessName: bookingData.businessName,
          whatsapp: bookingData.whatsapp,
          email: bookingData.email,
          submittedAt: bookingData.createdAt,
        }),
      }).catch(() => {
        // Silently fail if webhook is not configured
      });
    }

    return true;
  } catch (error) {
    console.error('Error saving to sheet:', error);
    return false;
  }
};
