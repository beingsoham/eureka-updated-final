# Eureka Doors - Next.js Project

India's leading door manufacturer website built with Next.js 14, React, and GSAP animations.

## Project Structure

```
eureka-doors/
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles and CSS variables
│   │   ├── layout.js      # Root layout with metadata
│   │   └── page.js        # Main homepage
│   └── components/
│       └── ClientScripts.js # GSAP animations (client-side)
├── jsconfig.json          # JavaScript path aliases
├── package.json           # Dependencies
└── README.md              # This file
```

## Features

- ✨ GSAP animations with ScrollTrigger
- 🎨 Custom CSS with design system variables
- 📱 Fully responsive design
- ♿ Accessible HTML structure
- 🚀 Next.js 14 App Router
- 🎯 Client-side interactions (preloader, custom cursor, filters, forms)
- 📊 Product filtering
- 🖼️ Gallery with lightbox
- 💬 Testimonials slider
- 📋 Quote request form
- ☎️ Contact integration (WhatsApp, phone, email)

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## Key Technologies

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with App Router |
| **React** | UI components |
| **GSAP 3** | Advanced animations |
| **ScrollTrigger** | Scroll-based animations |
| **Font Awesome 6.5** | Icons |
| **Google Fonts** | Playfair Display, Inter |

## CSS Architecture

The project uses a comprehensive CSS system with CSS variables for consistent theming:

```css
:root {
  --bg-primary: #F5F1E8;      /* Warm cream background */
  --bg-secondary: #EDE8D0;    /* Light beige accent */
  --text-primary: #1a1a1a;    /* Dark text */
  --text-secondary: #555;     /* Gray text */
  --accent-gold: #D4A574;     /* Brand gold */
  --accent-gold-dark: #B8925C;/* Dark gold */
  --border: #E0D5C7;          /* Light border */
  --white: #FFFFFF;           /* White */
}
```

## Component Details

### ClientScripts.js
Contains all client-side JavaScript for:
- Preloader animation
- Custom cursor interaction
- Header scroll effects
- Mobile menu toggle
- Product filtering with animations
- Testimonials slider
- Gallery lightbox
- Quote form validation
- GSAP scroll animations

### Page.js
The main homepage component rendering:
- Header with navigation
- Mobile menu
- Hero section with parallax
- Client logos marquee
- About section
- Stats with counters
- Products with filtering
- Gallery showcase
- Why Eureka features
- Testimonials
- CTA form
- Footer with links
- WhatsApp float
- Lightbox component

## Animations

All animations are powered by GSAP and ScrollTrigger:

- **Hero Timeline**: Label, title split text, description, buttons, stats sequenced
- **Scroll Reveals**: Elements animate in on scroll with stagger effects
- **Parallax**: Hero background and about image move on scroll
- **Counter Animation**: Numbers count up from 0 to target with easing
- **Product Filters**: Staggered fade/slide animations on filter change
- **Smooth Scroll**: Anchor links smoothly scroll to sections

## Form Validation

The quote request form includes:
- Real-time error clearing on focus
- Name validation (required)
- Phone validation (minimum 10 digits)
- Email validation (standard email format)
- Success modal with WhatsApp quick link
- Toast notifications

## Responsive Design

Breakpoints:
- `1024px` and below: Tablet adjustments
- `768px` and below: Mobile menu active
- `480px` and below: Mobile optimizations

## Customization

### Colors
Edit CSS variables in `src/app/globals.css`:

```css
--accent-gold: #YOUR_COLOR;
--bg-primary: #YOUR_COLOR;
```

### Content
Edit product data, testimonials, and features in `src/app/page.js`

### Animations
Adjust animation durations and easing in `src/components/ClientScripts.js`

## Performance

- ✅ Zero hydration mismatches (using standard `<img>` tags for external URLs)
- ✅ Deferred script loading (GSAP scripts load with `defer`)
- ✅ Lazy image loading where applicable
- ✅ CSS-optimized layout (no runtime calculations)
- ✅ Client-side validation (no server round-trips for forms)

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## Troubleshooting

**Issue**: Scripts not loading
- Solution: Clear browser cache and restart dev server

**Issue**: GSAP animations not working
- Solution: Verify GSAP libraries are loading in network tab (check Head section in `layout.js`)

**Issue**: Images not showing
- Solution: Check if external URLs are accessible; no Next.js Image domain config needed

**Issue**: Mobile menu not closing
- Solution: Ensure `ClientScripts.js` is injected into page (check DOM for `<script>`)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Eureka Doors. All Rights Reserved.

## Support

For questions or issues, contact: sales@eurekaindia.com | +91 8888 78 4444
# eureka-updated-final
