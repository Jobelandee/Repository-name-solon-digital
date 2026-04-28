/**
 * Claude API Service
 * Handles all communication with Claude API for the chatbot
 */

const API_KEY = process.env.REACT_APP_CLAUDE_API_KEY;
const API_BASE = 'https://api.anthropic.com/v1/messages';

export async function getChatResponse(userMessage, websiteContent) {
  if (!API_KEY) {
    console.error('REACT_APP_CLAUDE_API_KEY is not set');
    return {
      error: true,
      message: 'Chatbot is temporarily unavailable. Please use WhatsApp: +34 621 80 58 64',
    };
  }

  try {
    // Build context from website content
    const context = buildContextFromContent(websiteContent);

    // System prompt that makes Claude act as Solon Digital's assistant
    const systemPrompt = `You are the Solon Digital Assistant, a friendly and professional AI helping potential customers learn about web development services in Tenerife.

About Solon Digital:
${context}

Instructions:
- Be helpful, friendly, and professional
- Provide accurate information about services, pricing, and timeline
- If the user asks something outside your knowledge, offer to connect them via WhatsApp
- Suggest WhatsApp contact (+34 621 80 58 64) for complex questions or when ready to book
- Keep responses concise (2-3 sentences max for chat)
- If asked about something specific, reference the relevant service or process
- Use the website content provided to answer questions accurately

Always respond in the same language the user writes to you.`;

    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-1-20250805',
        max_tokens: 500,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: userMessage,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Claude API error:', errorData);

      // Handle specific API errors
      if (response.status === 401) {
        return {
          error: true,
          message: 'Chatbot authentication failed. Please contact us via WhatsApp: +34 621 80 58 64',
        };
      }

      if (response.status === 429) {
        return {
          error: true,
          message: 'Chat temporarily busy. Try again in a moment or use WhatsApp: +34 621 80 58 64',
        };
      }

      return {
        error: true,
        message: 'Unable to process your message. Please try again or use WhatsApp: +34 621 80 58 64',
      };
    }

    const data = await response.json();

    // Extract the text response from Claude
    if (data.content && data.content[0] && data.content[0].text) {
      return {
        error: false,
        message: data.content[0].text,
        suggestWhatsApp: shouldSuggestWhatsApp(userMessage, data.content[0].text),
      };
    }

    return {
      error: true,
      message: 'No response received. Please try again.',
    };
  } catch (error) {
    console.error('Error calling Claude API:', error);
    return {
      error: true,
      message: 'Chat service unavailable. Reach us on WhatsApp: +34 621 80 58 64',
    };
  }
}

/**
 * Build context string from website content for Claude
 */
function buildContextFromContent(content) {
  const { services, pricing, method, industries, contact, company } = content;

  let contextStr = `**Company:** ${company.name} in ${company.location}\n`;
  contextStr += `**WhatsApp:** ${company.whatsAppNumber}\n`;
  contextStr += `**Email:** ${company.email}\n\n`;

  contextStr += `**Services:**\n`;
  services.forEach((service) => {
    contextStr += `- ${service.name}: ${service.description}\n`;
  });
  contextStr += '\n';

  contextStr += `**Pricing:**\n`;
  contextStr += `- Basic Website: ${pricing.starter.price} - ${pricing.starter.description}\n`;
  contextStr += `- E-Commerce: ${pricing.ecommerce.price} - ${pricing.ecommerce.description}\n`;
  contextStr += `- Note: ${pricing.note}\n\n`;

  contextStr += `**Process (5 Steps):**\n`;
  method.forEach((step) => {
    contextStr += `${step.num}. ${step.title}: ${step.description}\n`;
  });
  contextStr += '\n';

  contextStr += `**Industries Served:**\n`;
  industries.forEach((industry) => {
    contextStr += `- ${industry.title}: ${industry.description}\n`;
  });
  contextStr += '\n';

  contextStr += `**Contact Methods:** ${contact.methodsOfContact.join(' | ')}\n`;

  return contextStr;
}

/**
 * Determine if Claude should suggest WhatsApp
 * Based on keywords in the conversation
 */
function shouldSuggestWhatsApp(userMessage, response) {
  const keywords = [
    'book',
    'booking',
    'schedule',
    'call',
    'meeting',
    'project',
    'urgent',
    'asap',
    'quote',
    'pricing for my',
    'custom',
  ];

  const lowerMessage = userMessage.toLowerCase();
  const hasBookingKeyword = keywords.some((keyword) => lowerMessage.includes(keyword));

  // Only suggest WhatsApp if they're asking about booking or have a specific need
  if (hasBookingKeyword && !response.includes('WhatsApp')) {
    return true;
  }

  return false;
}

export default getChatResponse;
