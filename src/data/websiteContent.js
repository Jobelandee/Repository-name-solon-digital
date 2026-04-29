/**
 * Central content hub for Solon Digital website
 * Single source of truth for all content used across the site and chatbot
 */

export const websiteContent = {
  // Company info
  company: {
    name: 'Solon Digital',
    location: 'Tenerife, Spain',
    whatsAppNumber: '+34621805864',
    email: 'info@solondigital.com',
    description: 'Building smart websites that work. AI-driven systems that act as your most efficient employee.',
  },

  // Hero section
  hero: {
    headline: 'Smart Websites. Tenerife Roots.',
    subheading: 'Stop the manual grind. We build high-performance systems that turn local traffic into predictable growth.',
    cta1: 'Start Your Audit',
    cta2: 'View the Blueprint',
    urgencyMessage: 'Stop giving your competitors the lead. Start scaling today.',
  },

  // Services & what they offer
  services: [
    {
      name: 'Custom Website Design',
      description: 'Beautiful, functional websites that align with your brand and user needs.',
    },
    {
      name: 'E-Commerce Setup',
      description: 'Full online store solutions with payment integration and inventory management.',
    },
    {
      name: 'Booking Systems',
      description: 'Automate your scheduling. Stop the WhatsApp booking chaos.',
    },
    {
      name: 'AI Chatbot Integration',
      description: 'Intelligent chatbots that handle customer inquiries 24/7.',
    },
    {
      name: 'SEO & Digital Strategy',
      description: 'Be found on page 1 of Google. Get qualified leads to your site.',
    },
  ],

  // Pricing information
  pricing: {
    starter: {
      name: 'Basic Website',
      price: '€2,500',
      description: 'Perfect for small businesses getting online.',
    },
    ecommerce: {
      name: 'E-Commerce Platform',
      price: 'From €5,000',
      description: 'Full online store with payment integration.',
    },
    custom: {
      name: 'Custom Solution',
      price: 'Let\'s talk',
      description: 'Complex requirements? We\'ll quote based on your needs.',
    },
    note: 'Payment plans available for larger projects.',
  },

  // Our 5-step method/process
  method: [
    {
      num: '1',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business, goals, and target audience to create a tailored digital strategy.',
    },
    {
      num: '2',
      title: 'Design & Planning',
      description: 'Our team designs a beautiful, functional website that aligns with your brand and user needs.',
    },
    {
      num: '3',
      title: 'Development',
      description: 'We build your website with clean code, fast performance, and the latest web technologies.',
    },
    {
      num: '4',
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures everything works perfectly before launch on your domain.',
    },
    {
      num: '5',
      title: 'Support & Growth',
      description: 'Post-launch support and continuous optimization to help your website grow and convert.',
    },
  ],

  // Our story / founding story
  story: {
    headline: 'Dutch Innovation. Tenerife Roots.',
    narrative: [
      'We moved from the Netherlands to Tenerife because we saw a massive gap: local businesses losing hours to manual work and thousands in revenue to outdated digital tools. We saw the potential, and we moved here to fix it.',
      'We don\'t just build websites; we build AI-driven systems that act as your most efficient employee, saving you time and money.',
    ],
    imageAlt: 'Job Eland and Rodney - Founders of Solon Digital',
  },

  // Industries they serve
  industries: [
    {
      title: 'Gyms & Padelclubs',
      description: 'Stop the WhatsApp booking chaos. Automate your courts and grow your community.',
      glowColor: '#0077BE',
      accentColor: '#4A90E2',
    },
    {
      title: 'Real Estate',
      description: 'Convert global searchers into pre-qualified leads. High-performance landing pages for Tenerife property.',
      glowColor: '#8B7355',
      accentColor: '#D4A574',
    },
    {
      title: 'Local Services',
      description: 'From Restaurants to Spas. Be found on page 1 of Google and automate your inquiries.',
      glowColor: '#0099FF',
      accentColor: '#FFA500',
    },
  ],

  // Section titles and messaging
  sections: {
    industriesTitle: 'The Cost of Waiting',
    industriesSubtitle: 'Every day you delay is a day your competitors gain ground.',
    methodTitle: 'Our Method',
    methodSubtitle: 'We follow a proven process that ensures your website is built right, launches smoothly, and drives real results for your business.',
  },

  // FAQ for chatbot
  faqs: [
    {
      keyword: ['price', 'cost', 'pricing'],
      answer: 'Our custom website packages start at €2,500 for small businesses. E-commerce solutions start from €5,000. Each project is tailored to your specific needs, and we offer payment plans for larger projects.',
    },
    {
      keyword: ['how long', 'timeline', 'duration', 'how many weeks'],
      answer: 'Most projects take 4-6 weeks from start to launch. We\'ll give you a specific timeline once we understand your needs. Complex projects may take longer, but we always prioritize quality and speed.',
    },
    {
      keyword: ['features', 'what do you build', 'what can you build'],
      answer: 'We build custom websites with: fast loading speeds, mobile optimization, booking systems, AI chatbots, SEO setup, e-commerce integration, and more. Whatever your business needs, we can build it.',
    },
    {
      keyword: ['booking', 'schedule', 'call', 'meeting'],
      answer: 'You can book a free strategy call using the form on this page, or chat with us here! You can also reach us via WhatsApp at +34 621 80 58 64.',
    },
    {
      keyword: ['contact', 'reach out', 'get in touch', 'email'],
      answer: 'You can reach us via: WhatsApp (+34 621 80 58 64), chat with our AI assistant right here, or use the booking form. We respond quickly!',
    },
    {
      keyword: ['payment', 'invoice', 'how do you charge'],
      answer: 'We accept all major payment methods. Payment plans are available for larger projects to make development more accessible.',
    },
    {
      keyword: ['services', 'what do you offer', 'offerings'],
      answer: 'We offer: custom website design, e-commerce setup, booking systems, chatbot integration, and digital strategy consulting. All tailored to your business needs.',
    },
    {
      keyword: ['help', 'assist', 'question'],
      answer: 'I can help you with pricing, services, booking information, contact details, timeline, and payment options. Just ask any question about Solon Digital!',
    },
  ],

  // Contact info & CTAs
  contact: {
    whatsAppLink: 'https://wa.me/34621805864?text=Hi%20Solon%20Digital%20-%20I%27m%20interested%20in%20learning%20more',
    bookingFormId: 'audit', // anchor link
    methodsOfContact: [
      'WhatsApp: +34 621 80 58 64',
      'Chat with our AI assistant',
      'Book a free strategy call',
      'Email: info@solondigital.com',
    ],
  },
};

export default websiteContent;
