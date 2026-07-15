# KREBIG International Group — Website

Official website for KREBIG International Group — an AI-powered Business Growth Partner
delivering strategy, marketing, creative, technology, and AI solutions.

This repository currently contains the **project foundation** and **global design system**
only. No marketing pages have been built yet.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev)
- [class-variance-authority](https://cva.style) + [Radix Slot](https://www.radix-ui.com/primitives/docs/utilities/slot) (component variants / polymorphism)
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
    ui/                 # Design-system primitives (Button, Card, Typography)
    layout/              # Structural layout components (Container, Section, Navbar, Footer, SiteShell)
    sections/              # Page-section-level composite components (empty until pages are built)
  providers/            # App-wide React context/providers (e.g. MotionProvider)
  lib/
    utils/               # Generic utilities (e.g. `cn` class merge helper)
    seo/                  # SEO/metadata helpers
    motion/                # Framer Motion duration/easing tokens + reusable variants
    validations/           # Schema/validation helpers
  hooks/                # Reusable React hooks
  types/                # Shared TypeScript types
  config/               # Site-wide configuration (site.ts, env.ts, navigation.ts)
  styles/               # Design tokens (src/styles/tokens.css)
public/
  images/               # Static images
  icons/                # Static icons
  fonts/                # Self-hosted fonts (if any)
```

## Design System

Design tokens live in `src/styles/tokens.css` and are imported by `src/app/globals.css`. They
are exposed to Tailwind via `@theme inline`, so components consume semantic utility classes
rather than raw values:

| Token category     | Source                                           | Example utilities                                      |
| ------------------ | ------------------------------------------------ | ------------------------------------------------------ |
| Color              | `tokens.css` `:root` + dark-mode override block  | `bg-primary`, `text-muted-foreground`, `border-border` |
| Spacing            | Tailwind default scale + semantic section tokens | `p-4`, `py-section-md`, `gap-6`                        |
| Radius             | `--radius` base, derived scale + aliases         | `rounded-md`, `rounded-card`, `rounded-button`         |
| Shadow (elevation) | Base scale + aliases                             | `shadow-sm`, `shadow-card`, `shadow-dropdown`          |
| Motion (CSS)       | Durations + easings                              | `duration-fast`, `ease-standard`                       |
| Motion (Framer)    | `src/lib/motion/tokens.ts` + `variants.ts`       | `fadeIn`, `fadeInUp`, `collapse`, `staggerContainer`   |
| Breakpoints        | Tailwind defaults + `xs` (480px)                 | `xs:`, `sm:`, `md:`, `lg:`, `xl:`, `2xl:`              |

Component primitives (all in `src/components/`, prop-driven, no hardcoded copy):

- **`ui/button.tsx`** — `Button` with `variant` (primary/secondary/outline/ghost/link/destructive)
  and `size` (sm/md/lg/icon) via `cva`, plus `asChild` for polymorphic rendering (e.g. as a `Link`).
- **`ui/card.tsx`** — composable `Card`, `CardHeader`, `CardTitle`, `CardDescription`,
  `CardContent`, `CardFooter`.
- **`ui/typography.tsx`** — `Heading` (semantic `level` decoupled from visual `size`) and `Text`
  (`lead`/`body`/`muted`/`small`/`caption` variants).
- **`layout/container.tsx`** — `Container` with `size` variants (sm/md/lg/xl/full) and responsive
  gutters.
- **`layout/section.tsx`** — `Section` with vertical `spacing` and `tone` (background) variants,
  optionally wrapping children in a `Container`.
- **`layout/navbar.tsx`** — responsive `Navbar` with an animated mobile menu; renders nav items and
  a CTA passed as props (defaults come from `src/config/navigation.ts`, currently empty).
- **`layout/footer.tsx`** — composable `Footer` with link columns and social links passed as props.
- **`layout/site-shell.tsx`** — `SiteShell` composes a skip-link, `Navbar`, a single `<main>`
  landmark, and `Footer`; wired into the root layout.

Navigation/footer content lives in `src/config/navigation.ts` as typed, currently-empty arrays —
components render correctly with no data and are meant to be populated once real pages/routes
exist.

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
