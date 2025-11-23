# Email Form Setup Instructions

## Current Implementation
The contact form is configured to send submissions to `rockmediaai@gmail.com` using Formspree.

## Formspree Setup Required
To activate email delivery, you need to:

### 1. Create Formspree Account (Free)
- Go to https://formspree.io
- Sign up with your `rockmediaai@gmail.com` account
- Verify your email address

### 2. Create New Form
- Click "New Form" in your Formspree dashboard
- Set the email endpoint to: `rockmediaai@gmail.com`
- Copy the form endpoint URL (looks like: `https://formspree.io/f/[FORM_ID]`)

### 3. Update Form Endpoint
- Replace the placeholder endpoint in `src/components/ContactFormSection.jsx`
- Current line: `const response = await fetch('https://formspree.io/f/xanyqnkn', {`
- Replace `xanyqnkn` with your actual Formspree form ID

### 4. Email Template
Each submission will include:
- **Contact Info**: First Name, Last Name, Email/Phone, Contact Method
- **Optional Details**: Company Name, Current Followers, Social Platforms, Biggest Challenge
- **Metadata**: Submission Date, Formatted Subject Line

## Alternative: Netlify Forms (if deploying to Netlify)
If deploying to Netlify, you can use their built-in form handling:

1. Add `netlify` attribute to form tag
2. Add hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Forms will appear in your Netlify dashboard
4. Set up email notifications to `rockmediaai@gmail.com`

## Email Format
Submissions will arrive as:
```
Subject: New Strategy Call Request from [First] [Last]

First Name: John
Last Name: Smith
Email: john@example.com (or Phone: if phone selected)
Contact Method: email

Company Name: Smith Marketing
Current Followers: 10k-50k
Social Platforms: Instagram, TikTok, LinkedIn
Biggest Challenge: Creating consistent content that drives engagement

Submitted: [Date and Time]
```

## Testing
- Submit a test form to verify emails are received
- Check spam folder if emails don't appear in inbox
- Formspree free plan allows 50 submissions/month

## Backup Plan
If Formspree has issues, the form shows a fallback message directing users to email `rockmediaai@gmail.com` directly.