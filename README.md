# iVMS Marketing Website

Official marketing site for **iVMS** (Innovative Vehicle Management Solutions) — the operating system for national mobility.

The site presents iVMS as an AI fleet, automated enforcement, and integrated payments platform for governments and enterprise operators. It covers investment highlights, sovereign client references (RTA Dubai, ITC Abu Dhabi), product verticals (iTaxi, iBUS, iDeliver, SpeedSense, iPAY), platform capabilities, R&D, compliance, and deployment models aligned with national mobility strategy.

**Production domain:** [https://ivms.io](https://ivms.io)

This is a single-page React application with scroll-driven sections, hero intro animation, and a responsive layout tuned for desktop (1920px design baseline) and smaller viewports.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | React 19 |
| Language | TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Animation | GSAP (ScrollTrigger), Framer Motion |
| Linting | ESLint 10 |

## Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** 10+

## Local development

```bash
# Install dependencies
npm install

# Start dev server (default http://localhost:5173)
npm run dev
```

## Production build

```bash
# Type-check and build static assets to dist/
npm run build

# Preview production build locally
npm run preview
```

The `dist/` folder is ready to deploy to any static host (Vercel, Netlify, Cloudflare Pages, S3 + CDN, Nginx, etc.).

## Project structure

```
src/
  components/   # Layout, UI primitives, home page sections
  context/      # Hero intro state
  data/         # Copy, design tokens, section content
  lib/          # Shared hooks and utilities
  pages/        # Home page entry
  styles/       # Global CSS (glass effects, fonts)
public/
  images/       # Optimized WebP/SVG assets
  robots.txt    # Crawler rules
  sitemap.xml   # Sitemap for https://ivms.io
  llms.txt      # Summary for LLM crawlers
  favicon.svg
```

## SEO & metadata

Site metadata lives in `index.html` (title, description, Open Graph, Twitter cards, JSON-LD). Static files in `public/`:

- `robots.txt` — search and AI crawler policy
- `sitemap.xml` — canonical URL map
- `llms.txt` — short summary for LLM crawlers (links to full detail)
- `llms-full.txt` — extended structured site content for AI indexing
- `site.webmanifest` — PWA manifest (theme, icons)

## Environment notes

- No backend or environment variables are required for the static site.
- Update canonical URLs and social images in `index.html` if the domain or OG asset changes.
- Social preview image: `public/og-image.webp` (1200×630).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | Run ESLint |
