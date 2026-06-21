# Resume Download Setup

## Current Setup

The portfolio has a downloadable resume feature. Currently, there's an HTML version of the resume at `public/resume.html`.

## How to Add PDF Resume

To enable PDF resume download:

1. **Option 1: Convert HTML to PDF**
   - Open `public/resume.html` in your browser
   - Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
   - Select "Save as PDF"
   - Save the file as `resume.pdf` in the `public` folder

2. **Option 2: Use Your Own PDF**
   - Place your existing resume PDF file in the `public` folder
   - Rename it to `resume.pdf`

3. **Option 3: Online PDF Conversion**
   - Visit any HTML to PDF converter online
   - Upload `public/resume.html`
   - Download the generated PDF
   - Save it as `public/resume.pdf`

## Resume Information Included

The resume includes:
- **Title**: Java Developer | Software Engineer | AI Researcher
- **Experience**: 2+ years at 56N Software
- **Skills**: All technical skills including Java, Spring Boot, AI/ML, React, Node.js, etc.
- **Core Expertise**: Backend Development, AI Systems, Full-stack, Integrations
- **Contact**: sandesh19yadav@gmail.com

## Where Resume Link Appears

The resume download button appears in:
1. Navbar (top right)
2. Hero section (main CTA)
3. About section (bottom CTA)

All buttons link to `/resume.pdf` which will work once you place the PDF file in the public folder.
