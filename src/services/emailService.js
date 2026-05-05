const RETRY_ATTEMPTS = 3;
const RETRY_DELAY = 1000;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const sendEmails = async (bookingData, retryCount = 0) => {
  const { name, email, businessName, whatsapp } = bookingData;

  console.log('📧 Frontend: Sending request to backend for:', { name, email, businessName });

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        businessName,
        whatsapp,
      }),
    });

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Frontend: Backend returned success');
    return result;
  } catch (error) {
    if (retryCount < RETRY_ATTEMPTS) {
      console.log(`⚠️ Retry attempt ${retryCount + 1}/${RETRY_ATTEMPTS}...`);
      await sleep(RETRY_DELAY * (retryCount + 1));
      return sendEmails(bookingData, retryCount + 1);
    }
    console.error('❌ Email error after retries:', error);
    throw error;
  }
};
