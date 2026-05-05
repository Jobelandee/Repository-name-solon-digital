const RETRY_ATTEMPTS = 3;
const RETRY_DELAY = 1000;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const sendEmails = async (bookingData, retryCount = 0) => {
  const { name, email, businessName, whatsapp } = bookingData;

  console.log('📧 Calling /api/send-email for:', { name, email, businessName });

  try {
    const apiUrl = process.env.REACT_APP_API_URL || '/api/send-email';
    console.log('Using API URL:', apiUrl);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, businessName, whatsapp }),
    });

    console.log('API Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error response:', errorText);
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('✅ API Success:', result);
    return result;
  } catch (error) {
    console.error('❌ Fetch error:', error.message);
    if (retryCount < RETRY_ATTEMPTS) {
      console.log(`⚠️ Retry attempt ${retryCount + 1}/${RETRY_ATTEMPTS}...`);
      await sleep(RETRY_DELAY * (retryCount + 1));
      return sendEmails(bookingData, retryCount + 1);
    }
    console.error('❌ Email error after retries:', error);
    throw error;
  }
};
