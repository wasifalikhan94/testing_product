# testing_product — Landing Page

A modern, responsive SaaS landing page built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- **Hero Section** — Headline, subheadline, dual CTAs, dashboard mockup
- **Features Section** — 6 feature cards with icons and hover effects
- **Testimonials Section** — 3 customer testimonials with stats
- **Pricing Section** — Free / Pro / Enterprise plans with monthly/yearly toggle
- **FAQ Section** — 7 accordion Q&As
- **Footer** — Navigation, social links, copyright

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <YOUR_REPO_URL>
cd testing_product

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Built files are in `dist/`.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
testing_product/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky nav with mobile menu
│   │   ├── Hero.tsx         # Hero with dashboard mockup
│   │   ├── Features.tsx     # 6-card feature grid
│   │   ├── Testimonials.tsx # Customer testimonials + stats
│   │   ├── Pricing.tsx      # 3-tier pricing with billing toggle
│   │   ├── FAQ.tsx          # Accordion FAQ
│   │   └── Footer.tsx       # Footer with nav + social links
│   ├── App.tsx
│   ├── index.css            # Global styles + Tailwind
│   └── main.tsx
├── index.html               # SEO metadata
├── vite.config.ts
└── tsconfig.json
```

## License

MIT
