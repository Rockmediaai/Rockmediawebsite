# Zen Growth Lab - React Landing Page

A modern, clean landing page built with React + Vite and styled using Tailwind CSS. Inspired by zen-growth-lab.

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

Open the URL printed in your terminal (usually http://localhost:5173).

3. Build for production

```bash
npm run build
npm run preview
```

## Tech Stack
- React 18
- Vite
- Tailwind CSS

## Structure
- `src/components` includes modular sections: Hero, Feature Grid, Testimonials, Pricing, CTA, Footer.
- `tailwind.config.cjs` and `postcss.config.js` configure Tailwind.

## Notes
This is a general-purpose, clean implementation—not a pixel-perfect clone. You can customize copy, colors, and layout easily in the components.

## Run with Docker (no local Node required)
Build and run a production preview container:

```bash
docker build -t zen-growth-lab .
docker run -it --rm -p 5173:5173 zen-growth-lab
```

Then open http://localhost:5173

## Node version
An `.nvmrc` with Node 20.12.2 is included. If you use nvm:

```bash
nvm use
```
