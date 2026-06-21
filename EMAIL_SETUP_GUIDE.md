# Email Configuration Setup Guide

## Your Contact Information
- **Email**: sandesh19yadav@gmail.com
- **Phone**: +91 7697807800
- **LinkedIn**: linkedin.com/in/sandesh-yadav-7571aa215
- **GitHub**: github.com/sandesh1925

All contact information has been updated throughout the portfolio.

---

## EmailJS Setup (Contact Form)

To make the contact form send emails to **sandesh19yadav@gmail.com**, follow these steps:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE - 200 emails/month)
3. Sign up with your email

### Step 2: Add Email Service (Gmail)
1. After login, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with **sandesh19yadav@gmail.com**
6. Allow EmailJS to access your Gmail
7. Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"** in dashboard
2. Click **"Create New Template"**
3. Use this template content:

**Subject:**
```
New Portfolio Contact from {{name}}
```

**Body:**
```
You have received a new message from your portfolio website!

From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply to: {{email}}
```

4. Click **"Save"**
5. Note down your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (e.g., `user_ABCDefgh123456`)
3. Copy this key

### Step 5: Update Your Portfolio Code
1. Open `src/components/Contact.jsx`
2. Find these lines (around line 67-69):
```javascript
const serviceID = 'YOUR_SERVICE_ID'; // e.g., 'service_abc123'
const templateID = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xyz789'
const publicKey = 'YOUR_PUBLIC_KEY'; // e.g., 'user_ABCDefgh123456'
```

3. Replace with your actual values:
```javascript
const serviceID = 'service_abc123'; // Your actual Service ID
const templateID = 'template_xyz789'; // Your actual Template ID
const publicKey = 'user_ABCDefgh123456'; // Your actual Public Key
```

4. Save the file

### Step 6: Test
1. Run your portfolio: `npm run dev`
2. Go to the Contact section
3. Fill out the form and submit
4. Check **sandesh19yadav@gmail.com** inbox

---

## Alternative: Direct Email Link

If you don't want to set up EmailJS, the contact form error message shows your email, and all social icons work:

- **Email Icon**: Opens email client with sandesh19yadav@gmail.com
- **Phone Icon**: Opens dialer with +91 7697807800
- **LinkedIn Icon**: Opens your LinkedIn profile
- **GitHub Icon**: Opens your GitHub profile

Users can still contact you through these methods!

---

## Email Template Variables

Make sure your EmailJS template includes these variables:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

These match the form field names in your Contact component.

---

## Testing EmailJS

After setup, test by:
1. Submit a test message from your portfolio
2. Check EmailJS dashboard for delivery status
3. Check spam folder if email doesn't arrive
4. Verify Gmail allows EmailJS in security settings

---

## Troubleshooting

**"Failed to send message"**
- Check Service ID, Template ID, and Public Key are correct
- Verify Gmail account is connected in EmailJS
- Check EmailJS dashboard for error logs

**Emails going to spam**
- Add EmailJS to Gmail safe senders
- Ask contacts to check spam folder

**Rate limit reached**
- Free tier: 200 emails/month
- Upgrade to paid plan if needed

---

## Current Form Fields

Your contact form collects:
- Name
- Email
- Subject
- Message

All data is sent to sandesh19yadav@gmail.com when properly configured.
