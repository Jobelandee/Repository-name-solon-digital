# Solon Digital v2.0 - Setup Guide

## Overview
This guide walks you through setting up Firebase and SendGrid to enable the booking system and email confirmations.

## Step 1: Firebase Setup

### 1.1 Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Name it: `solon-digital`
4. Accept the terms and create

### 1.2 Get Firebase Config
1. In Firebase Console, click the gear icon → Project Settings
2. Scroll to "Your apps" section
3. Click the web icon `</>` if not already created
4. Copy the config object with these keys:
   - apiKey
   - authDomain
   - projectId
   - storageBucket
   - messagingSenderId
   - appId

### 1.3 Create Firestore Database
1. In Firebase Console, go to **Firestore Database**
2. Click **Create database**
3. Choose **Start in production mode**
4. Select a location (closest to your users)
5. Click **Create**

### 1.4 Create Firestore Collection
1. In Firestore, click **Start collection**
2. Name it: `bookings`
3. Add a document with these fields (can leave empty for now):
   - `name` (string)
   - `email` (string)
   - `brandUrl` (string)
   - `revenue` (string)
   - `createdAt` (timestamp)
   - `status` (string)

## Step 2: SendGrid Setup

### 2.1 Create SendGrid Account
1. Go to [SendGrid](https://sendgrid.com/)
2. Sign up for a free account
3. Verify your email

### 2.2 Get SendGrid API Key
1. In SendGrid Dashboard, go to **Settings** → **API Keys**
2. Click **Create API Key**
3. Name it: `solon-digital-booking`
4. Select "Full Access"
5. Create and copy the key (you won't see it again!)

### 2.3 Verify Sender Email
1. In SendGrid, go to **Settings** → **Sender Authentication**
2. Click **Create New Sender**
3. Use email: `hello@solondigital.com` (or your preferred sender)
4. Verify the sender following SendGrid's instructions

## Step 3: Update .env File

Open `.env` in the project root and fill in the values:

```env
# Firebase - Copy from Project Settings
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# SendGrid - Copy API key from SendGrid Dashboard
REACT_APP_SENDGRID_API_KEY=SG.your_sendgrid_key_here

# Email - Use verified sender from Step 2.3
REACT_APP_FROM_EMAIL=hello@solondigital.com
REACT_APP_ADMIN_EMAIL=info@solondigital.com
```

## Step 4: Test the Setup

1. **Restart the dev server** (if running):
   ```bash
   npm start
   ```

2. **Fill the booking form** with test data
3. **Check your email** for confirmation
4. **Check Firebase Firestore** → `bookings` collection to verify data is saved
5. **Check your admin email** (info@solondigital.com) for admin notification

## Firestore Rules (Optional but Recommended)

For production, add security rules to prevent unauthorized access:

1. In Firestore, go to **Rules**
2. Replace with:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to write to bookings
    match /bookings/{document=**} {
      allow write: if true;
      allow read: if false;
    }
  }
}
```

## Troubleshooting

### "Firebase is not initialized"
- Check `.env` file has all Firebase keys
- Restart dev server after updating `.env`
- Check Firebase project is active in console

### "SendGrid API error"
- Verify API key is correct in `.env`
- Check API key hasn't been revoked in SendGrid Dashboard
- Ensure sender email is verified

### Emails not arriving
- Check spam folder
- Verify sender email in SendGrid Settings → Sender Authentication
- Check SendGrid Activity feed for bounces/blocks

### Form submit fails silently
- Check browser console (F12 → Console tab)
- Check network tab for failed requests
- Verify `.env` values are correct

## Email Customization

Email templates are in `src/services/emailService.js`:
- `generateUserEmailHTML()` - User confirmation email
- `generateAdminEmailHTML()` - Admin notification

Edit these functions to customize email styling and content.

## Next Steps

1. ✅ Test booking flow end-to-end
2. ✅ Update email templates with your branding
3. ✅ Configure SendGrid deliverability settings
4. ✅ Set up analytics in Google Analytics
5. ✅ Deploy to production (Vercel recommended)

---

**Need help?**
- Firebase Docs: https://firebase.google.com/docs
- SendGrid Docs: https://docs.sendgrid.com
