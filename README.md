# KREBIG International Group — Website

Official website for KREBIG International Group — an AI-powered Business Growth Partner
delivering strategy, marketing, creative, technology, and AI solutions.

This repository currently contains the **project foundation** only. No marketing pages have
been built yet.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev)
- ESLint (flat config, `eslint-config-next` + `jsx-a11y`)
- Prettier (+ `prettier-plugin-tailwindcss`)
- Husky + lint-staged (pre-commit quality gate)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the dev server                     |
| `npm run build`        | Production build                         |
| `npm run start`        | Start the production server              |
| `npm run lint`         | Run ESLint                               |
| `npm run lint:fix`     | Run ESLint with autofix                  |
| `npm run typecheck`    | Run the TypeScript compiler (no emit)    |
| `npm run format`       | Format the codebase with Prettier        |
| `npm run format:check` | Check formatting without writing changes |

## Folder Structure

```
src/
  app/                # App Router routes, layouts, and metadata files
    layout.tsx         # Root layout (fonts, providers, base metadata)
    page.tsx            # Placeholder root route
    globals.css          # Tailwind entrypoint + design tokens
    robots.ts             # robots.txt generation
    sitemap.ts             # sitemap.xml generation
    manifest.ts              # Web app manifest
  components/
    ui/                 # Reusable, unstyled/low-level design-system primitives
    layout/              # Structural layout components (header, footer, shell)
    sections/              # Page-section-level composite components
  providers/            # App-wide React context/providers (e.g. MotionProvider)
  lib/
    utils/               # Generic utilities (e.g. `cn` class merge helper)
    seo/                  # SEO/metadata helpers
    validations/           # Schema/validation helpers
  hooks/                # Reusable React hooks
  types/                # Shared TypeScript types
  config/               # Site-wide configuration (site.ts, env.ts)
public/
  images/               # Static images
  icons/                # Static icons
  fonts/                # Self-hosted fonts (if any)
```

## Conventions

- **Mobile-first**: build styles for small viewports first, then scale up with Tailwind's
  responsive breakpoints.
- **SEO**: use `src/lib/seo/metadata.ts` (`buildMetadata`) to generate per-route metadata, and
  keep site-wide facts in `src/config/site.ts`.
- **Accessibility**: ESLint runs `eslint-plugin-jsx-a11y` via `eslint-config-next`; keep
  semantic HTML and landmark regions when adding UI.
- **Path alias**: import app code via `@/*` (maps to `src/*`).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values as needed.
