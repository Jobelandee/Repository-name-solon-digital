# Quick Start Checklist

## ⚡ 5-Minute Setup

### Step 1: Firebase (2 min)
- [ ] Go to https://console.firebase.google.com
- [ ] Create project: `solon-digital`
- [ ] Go to Settings → Project Settings
- [ ] Copy these 6 values:
  ```
  apiKey
  authDomain
  projectId
  storageBucket
  messagingSenderId
  appId
  ```
- [ ] Go to Firestore Database → Create Database → Production Mode
- [ ] Create Collection: `bookings` (add one empty document)

### Step 2: SendGrid (2 min)
- [ ] Go to https://sendgrid.com
- [ ] Sign up (free account)
- [ ] Go to Settings → API Keys
- [ ] Create API Key: "solon-digital-booking"
- [ ] Copy the key
- [ ] Go to Settings → Sender Authentication
- [ ] Add Sender: `hello@solondigital.com` (or your email)
- [ ] Verify in your email inbox

### Step 3: Fill .env File (1 min)
Open `.env` and paste:

```env
# From Firebase Settings
REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID

# From SendGrid
REACT_APP_SENDGRID_API_KEY=SG.YOUR_SENDGRID_KEY

# Email addresses
REACT_APP_FROM_EMAIL=hello@solondigital.com
REACT_APP_ADMIN_EMAIL=info@solondigital.com
```

### Step 4: Restart & Test (1 min)
```bash
# Kill the old server (Ctrl+C)
# Restart
npm start

# Go to http://localhost:3000
# Fill out the form
# Check your email ✅
```

---

## ✅ System Works When:

1. **Form submits successfully** → No errors in console
2. **Confirmation email arrives** → In your inbox within 30 seconds
3. **Admin email arrives** → At info@solondigital.com
4. **Firebase shows booking** → Check Firestore → bookings collection
5. **Confirmation page displays** → Shows your booking details

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| "Firebase is not initialized" | Restart `npm start` after filling .env |
| "SendGrid API error" | Check API key in .env, verify no extra spaces |
| Emails not arriving | Check spam folder, verify sender email verified in SendGrid |
| Form won't submit | Open F12 console, check for errors, verify all .env values |

---

## 📊 What Happens When User Books:

```
User → Fills Form → Clicks "Book" 
  ↓
Firebase saves booking
  ↓
SendGrid sends 2 emails
  ├→ Confirmation to user
  └→ Notification to admin
  ↓
Page redirects to /confirmation
  ↓
User sees booking confirmation page
```

---

## 🎯 Features Ready to Use:

✅ Light, luxe design  
✅ Working booking form  
✅ Firebase data storage  
✅ Automated confirmations via SendGrid  
✅ Confirmation page with booking details  
✅ Mobile responsive  
✅ Professional emails  
✅ Urgency messaging ("15 spots left")  
✅ Trust signals (100+ brands audited)  

---

## 📌 Important Files

- `.env` ← **EDIT THIS FIRST** with your API keys
- `src/components/AuditForm.jsx` - The booking form
- `src/components/ConfirmationPage.jsx` - Confirmation page after booking
- `SETUP_GUIDE.md` - Detailed setup instructions

---

**Done? Deploy to Vercel:**
```bash
npm run build
# Then deploy via Vercel dashboard
```

**Questions?** See `SETUP_GUIDE.md` for detailed instructions.
