# Doctor Shortage Visualizer

An interactive dashboard that explores Ontario's primary care gap through data visualizations, narrative context, and supporting statistics.

## Getting Started

```sh
npm install
npm run dev
```

The dev server runs on `http://localhost:8080`.

## Available Scripts

- `npm run dev` – start the Vite dev server
- `npm run build` – create an optimized production build
- `npm run preview` – preview the production build locally
- `npm run lint` – lint the project with ESLint

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui component primitives
- TanStack Query

## Project Structure

- `src/pages` – top-level routes
- `src/components` – reusable UI and chart components
- `src/data` – data used throughout the visualizations
- `public` – static assets served as-is

## Deployment

Run `npm run build` to generate production assets in `dist/`. Deploy the resulting folder to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).
