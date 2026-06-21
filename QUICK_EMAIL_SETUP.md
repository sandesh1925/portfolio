# 🚀 Quick Email Setup (5 Minutes)

## Make Contact Form Send to: sandesh19yadav@gmail.com

### Step 1: Sign Up EmailJS (1 min)
1. Visit: https://www.emailjs.com/
2. Click "Sign Up" (FREE - 200 emails/month)
3. Verify your email

### Step 2: Connect Gmail (2 min)
1. Dashboard → "Email Services" → "Add New Service"
2. Select "Gmail"
3. Sign in with **sandesh19yadav@gmail.com**
4. Allow access
5. **Copy Service ID** (looks like: `service_abc123`)

### Step 3: Create Template (1 min)
1. Dashboard → "Email Templates" → "Create New Template"
2. **Template Name**: Portfolio Contact Form
3. **Subject**: `New Portfolio Message from {{name}}`
4. **Content**:
```
From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}
```
5. Save and **Copy Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key (30 sec)
1. Dashboard → "Account" → "General"
2. **Copy Public Key** (looks like: `user_ABCDefgh123456`)

### Step 5: Update Code (30 sec)
1. Open: `src/components/Contact.jsx`
2. Find line 67-69
3. Replace:
```javascript
const serviceID = 'YOUR_SERVICE_ID';
const templateID = 'YOUR_TEMPLATE_ID'; 
const publicKey = 'YOUR_PUBLIC_KEY';
```

With your actual IDs:
```javascript
const serviceID = 'service_abc123';        // YOUR Service ID
const templateID = 'template_xyz789';      // YOUR Template ID
const publicKey = 'user_ABCDefgh123456';   // YOUR Public Key
```

### Step 6: Test! 🎉
1. Run: `npm run dev`
2. Go to Contact section
3. Fill form and submit
4. Check **sandesh19yadav@gmail.com**

---

## What to Copy From EmailJS

| What | Where | Looks Like |
|------|-------|------------|
| **Service ID** | Email Services page | `service_abc123` |
| **Template ID** | Email Templates page | `template_xyz789` |
| **Public Key** | Account → General | `user_ABCDefgh123456` |

---

## Template Variables (Must Include)

Your template MUST have these variables for the form to work:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email  
- `{{subject}}` - Message subject
- `{{message}}` - Message body

---

## Troubleshooting

**"Failed to send message"**
→ Check you replaced ALL THREE values (Service ID, Template ID, Public Key)

**Email not received**
→ Check spam folder first
→ Verify Gmail is connected in EmailJS dashboard

**Wrong email address**
→ Make sure you connected **sandesh19yadav@gmail.com** in EmailJS

---

## Without EmailJS Setup

Contact form shows error but:
✅ All other contact methods work
✅ Email icon → Opens sandesh19yadav@gmail.com
✅ Phone icon → Opens +91 7697807800
✅ LinkedIn & GitHub links work

Users can still contact you!

---

## Your Contact Info (All Working)

- 📧 **Email**: sandesh19yadav@gmail.com ✅
- 📱 **Phone**: +91 7697807800 ✅
- 💼 **LinkedIn**: linkedin.com/in/sandesh-yadav-7571aa215 ✅
- 🐙 **GitHub**: github.com/sandesh1925 ✅

All links are clickable throughout your portfolio!
