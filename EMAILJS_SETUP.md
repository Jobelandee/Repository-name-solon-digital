# EmailJS Setup Instructions

## Stap 1: Ga naar EmailJS.com
https://www.emailjs.com

## Stap 2: Registreer (gratis)
- Klik "Sign Up"
- Gebruik je email

## Stap 3: Voeg Email Service toe
1. Ga naar Dashboard → "Add Service"
2. Kies "Gmail" of jouw email provider
3. Volg de instructies
4. Copy je **Service ID** (ziet er uit als: `service_xxxxx`)

## Stap 4: Maak User Confirmation Email Template
1. Ga naar "Email Templates"
2. Klik "Create New Template"
3. Geef het naam: `User Confirmation Email`
4. Zet de content:

```
Subject: Your Growth Audit Booking is Confirmed! 🎯

Body:
Hello {{user_name}},

Thank you for booking your free growth audit with Solon Digital!

Business: {{business_name}}

What happens next?
- Within 24 hours: We'll reach out via WhatsApp
- Strategy call: 15 minutes with our team
- Your roadmap: Clear digital strategy for your business

If you have questions, reply to this email or message us on WhatsApp.

Best regards,
Solon Digital Team
```

5. Copy de **Template ID** (ziet er uit als: `template_xxxxx`)
6. Update in code: `USER_TEMPLATE_ID = 'your_template_id'`

## Stap 5: Maak Admin Notification Template
1. "Create New Template"
2. Geef het naam: `Admin Booking Notification`
3. Zet de content:

```
Subject: 🎯 New Audit Booking - {{client_name}}

Body:
New Booking Received!

Name: {{client_name}}
Business: {{business_name}}
Email: {{client_email}}
WhatsApp: {{whatsapp}}
Date: {{booking_date}}

Action: Message {{client_name}} on WhatsApp to confirm appointment.

WhatsApp: https://wa.me/{{whatsapp}}
```

4. Copy de **Template ID**
5. Update in code: `ADMIN_TEMPLATE_ID = 'your_template_id'`

## Stap 6: Krijg je Public Key
1. Ga naar "Account"
2. Copy je **Public Key**
3. Update in code: `EMAILJS_PUBLIC_KEY = 'your_public_key'`

## Stap 7: Update src/services/emailService.js
Vervang deze waarden bovenaan:

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
const SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
const ADMIN_TEMPLATE_ID = 'YOUR_ADMIN_TEMPLATE_ID_HERE';
const USER_TEMPLATE_ID = 'YOUR_USER_TEMPLATE_ID_HERE';
```

## Stap 8: Update de admin email
In emailService.js, zoek deze regel:
```javascript
to_email: 'job@gymtogether.nl',
```

En vervang met jouw admin email.

## Test het
1. Ga naar je website
2. Vul de audit form in
3. Check je inbox!

**Dat's het! Geen backend, geen kompleksheid. Je mails gaan direct! 🎉**

## Voordelen
✅ Gratis (tot 200 emails/maand)
✅ Geen backend nodig
✅ Makkelijk setup
✅ Alles client-side (beveiligd)
