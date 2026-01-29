# NewGoldTech — LPG Gas Iron Website

A modern, fully responsive product website for **NewGoldTech** LPG gas irons, built with React (JSX), Tailwind CSS, Vite, React Router, and Framer Motion.

## Tech Stack

- **React** (JSX only — no TypeScript)
- **Tailwind CSS** for styling
- **Vite** for build and dev server
- **React Router** for navigation
- **Framer Motion** for animations

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) after running `npm run dev`.

## Pages

- **Home** — Hero carousel, Affordability section, Why Choose Us, Our Products, Our Team
- **About Us** — Company story, mission & vision, manufacturing & quality
- **Our Products** — Product grid with details and enquiry CTA
- **Contact** — Contact form, address/phone/email, Google Map embed, WhatsApp CTA

## Features

- Sticky navbar with transparent → solid on scroll and hover underline on links
- Hero image carousel with 3 slides and CTAs
- Smooth Framer Motion page and scroll animations
- Fully responsive layout
- WhatsApp floating button
- Dark footer with quick links and social icons

## Customization

- **Brand color**: Edit `tailwind.config.js` → `theme.extend.colors.brand`
- **WhatsApp number**: Update `whatsappNumber` in `src/components/WhatsAppButton.jsx` and Contact page
- **Map**: Replace the `src` URL in the iframe on `src/pages/Contact.jsx` with your Google Map embed URL
