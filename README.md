# 🚀 Open Source Portfolio Website

> A minimal, modern React portfolio site powered by Vite showcasing MERN stack projects, DSA skills, AI/ML expertise, and competitive programming achievements.

[![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.14-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Deployment Guide](#-deployment-to-vercel)
- [Customization](#-customization)
- [Project Structure](#-project-structure)
- [Portfolio Sections](#-portfolio-sections)

## 🎯 Overview

A modern, responsive portfolio website built with React and Vite, featuring:

- ✨ Animated professional introduction with typing effects
- 📱 Fully responsive design for all devices
- 📧 Live contact form with email integration
- 🎨 Beautiful UI with Tailwind CSS and custom animations
- 🚀 Fast performance with Vite bundler

## ✨ Features

- **Animated Intro** - Dynamic typing effect showcasing roles: DSA, MERN, AI/ML
- **Responsive Sections** - About, Skills, Education, Experience, Projects, Contact
- **Live Messaging** - Contact form with [EmailJS](https://www.emailjs.com/) integration and [React Toastify](https://fkhadra.github.io/react-toastify/) notifications
- **Interactive UI** - Modal project cards, parallax tilt effects, animated blobs
- **Timeline Visuals** - Elegant education and experience timelines
- **Mobile Optimized** - Responsive navigation and smooth scrolling

## 🛠️ Tech Stack

### Core Technologies

- **[React 19](https://react.dev/)** - JavaScript library for building user interfaces
- **[Vite](https://vitejs.dev/)** - Next-generation frontend build tool
- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon library
- **[React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)** - 3D tilt hover effect
- **[React Typing Effect](https://www.npmjs.com/package/react-typing-effect)** - Animated typing component

### Routing & Effects

- **[React Router DOM](https://reactrouter.com/)** - Client-side routing
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Toast notifications

### Form & Communication

- **[EmailJS](https://www.emailjs.com/)** - Send emails directly from JavaScript

### Development Tools

- **[ESLint](https://eslint.org/)** - JavaScript linter
- **[PropTypes](https://www.npmjs.com/package/prop-types)** - Runtime type checking

## 🚀 Getting Started

### Prerequisites

- **[Node.js](https://nodejs.org/)** (v18 or higher)
- **[npm](https://www.npmjs.com/)** or **[yarn](https://yarnpkg.com/)**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/amritanshu2005/MY-PORTFOLIO.git
   cd MY-PORTFOLIO
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 🌐 Deployment to Vercel

### Deploy via Vercel Dashboard

1. **Sign up for Vercel**

   - Go to [vercel.com](https://vercel.com/)
   - Sign up with your GitHub account

2. **Import Your Repository**

   - Click "Add New Project"
   - Select your GitHub repository (`MY-PORTFOLIO`)
   - Vercel will auto-detect Vite configuration

3. **Configure Build Settings** (Usually auto-detected)

   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**

   - Click "Deploy"
   - Your site will be live in ~1 minute at `https://your-project.vercel.app`

5. **Automatic Deployments**
   - Every push to your `master` branch will automatically trigger a new deployment
   - Pull requests will generate preview deployments

### Environment Variables (Optional - For EmailJS)

If you're using the contact form with EmailJS:

1. Go to your Vercel Project → **Settings** → **Environment Variables**
2. Add the following variables:
   - `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
   - `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
   - `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

### Custom Domain (Optional)

1. In Vercel Dashboard, go to **Project Settings** → **Domains**
2. Click "Add Domain"
3. Enter your custom domain name
4. Follow Vercel's instructions to update your DNS records
5. SSL certificate will be automatically provisioned

## 🎨 Customization

### Update Personal Information

Edit `/src/constants.js` to customize:

- Skills and technologies
- Work experience
- Education details
- Project showcase
- Social media links

### Update Images & Logos

Replace assets in:

- `/src/assets/company_logo/` - Company/organization logos
- `/src/assets/education_logo/` - Educational institution logos
- `/src/assets/tech_logo/` - Technology stack logos
- `/src/assets/projectslogo/` - Project thumbnails

### Modify Styles & Animations

- Global styles: `/src/App.css` and `/src/index.css`
- Component-specific styles: Individual component files
- Tailwind configuration: `tailwind.config.js` (if exists)

### Update Email Configuration

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Set up email service and template
3. Update credentials in your Contact component or environment variables

## 📁 Project Structure

```
MY-PORTFOLIO/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, logos, icons
│   │   ├── company_logo/
│   │   ├── education_logo/
│   │   ├── projectslogo/
│   │   └── tech_logo/
│   ├── components/      # React components
│   │   ├── About/
│   │   ├── Contact/     # EmailJS integration
│   │   ├── Education/   # Timeline component
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Navbar/      # Responsive navigation
│   │   ├── Skills/      # Skills grid
│   │   └── Work/        # Project cards with modal
│   ├── App.css          # Global styles
│   ├── App.jsx          # Main app component
│   ├── BlurBlob.jsx     # Animated background
│   ├── constants.js     # Content configuration
│   ├── index.css        # Base styles
│   └── main.jsx         # Entry point
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md            # Documentation
```

## 🎯 Portfolio Sections

### Navbar

- Sticky navigation with scroll effects
- Desktop and mobile optimized menu
- Smooth scrolling to sections

### About

- Professional introduction
- Animated typing effect
- Role highlights

### Skills

- Technology logo grid
- Categorized skill display
- Interactive hover effects

### Education & Experience

- Visual timeline layout
- Company/institution logos
- Date ranges and descriptions

### Projects

- Interactive project cards
- Modal for detailed view
- Tags and technology stack
- GitHub and live demo links

### Contact

- Live email form
- Real-time validation
- Success/error notifications
- Form reset on submission

