"use client";

import { m, useReducedMotion } from "framer-motion";
import { duration, easing } from "@/lib/motion/tokens";

const HUBS = [
  { cx: 160, cy: 70, r: 6, delay: 0 },
  { cx: 250, cy: 110, r: 6, delay: 0.15 },
  { cx: 90, cy: 160, r: 6, delay: 0.3 },
  { cx: 220, cy: 200, r: 6, delay: 0.45 },
  { cx: 140, cy: 225, r: 5, delay: 0.6 },
];

const CONNECTIONS = [
  "M160,70 Q210,85 250,110",
  "M250,110 Q245,160 220,200",
  "M220,200 Q180,220 140,225",
  "M140,225 Q105,195 90,160",
  "M90,160 Q120,105 160,70",
];

/**
 * Premium "global network" visual for the About page hero — no stock
 * imagery. Matches the homepage hero's dashboard-panel visual language
 * (glass card, dot-grid, gradient orbs, floating chips) while representing
 * the About page's own themes: global business, AI, digital transformation,
 * innovation and leadership via an abstract wireframe globe with connected
 * hubs, rather than the homepage's growth chart.
 */
export function AboutHeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  const floatLoop = shouldReduceMotion
    ? undefined
    : {
        y: [0, -10, 0],
        transition: { duration: 6, ease: easing.standard, repeat: Infinity },
      };

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md sm:max-w-lg lg:mx-0 lg:max-w-none"
    >
      {/* Ambient gradient orbs */}
      <m.div
        className="bg-primary/25 absolute -top-8 -right-4 size-40 rounded-full blur-3xl"
        animate={floatLoop}
      />
      <m.div
        className="bg-accent/70 absolute -bottom-10 -left-6 size-48 rounded-full blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, 12, 0],
                transition: { duration: 7, ease: easing.standard, repeat: Infinity },
              }
        }
      />

      {/* Dashboard panel */}
      <div className="border-border bg-card/70 shadow-modal relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border p-6 backdrop-blur-xl sm:p-8">
        <svg className="text-border absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
          <defs>
            <pattern id="about-hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-hero-grid)" />
        </svg>

        {/* Wireframe globe + connected network */}
        <m.svg
          viewBox="0 0 320 300"
          className="relative w-full max-w-[280px]"
          fill="none"
          initial={false}
        >
          <defs>
            <linearGradient id="about-globe-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-accent-foreground)" />
            </linearGradient>
          </defs>

          <circle
            cx="160"
            cy="150"
            r="88"
            stroke="url(#about-globe-gradient)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <ellipse
            cx="160"
            cy="150"
            rx="88"
            ry="30"
            stroke="url(#about-globe-gradient)"
            strokeWidth="1.25"
            opacity="0.35"
          />
          <ellipse
            cx="160"
            cy="150"
            rx="30"
            ry="88"
            stroke="url(#about-globe-gradient)"
            strokeWidth="1.25"
            opacity="0.35"
          />
          <line
            x1="72"
            y1="150"
            x2="248"
            y2="150"
            stroke="url(#about-globe-gradient)"
            strokeWidth="1"
            opacity="0.3"
          />

          {CONNECTIONS.map((d, index) => (
            <m.path
              key={d}
              d={d}
              stroke="url(#about-globe-gradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: duration.slow, delay: 0.3 + index * 0.1, ease: easing.out }}
            />
          ))}

          {HUBS.map((hub) => (
            <m.circle
              key={`${hub.cx}-${hub.cy}`}
              cx={hub.cx}
              cy={hub.cy}
              r={hub.r}
              className="fill-primary"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: duration.base, delay: 0.8 + hub.delay, ease: easing.out }}
            />
          ))}
        </m.svg>

        <m.p
          className="text-muted-foreground relative text-center text-xs font-semibold tracking-wide uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration.slow, delay: 1.4, ease: easing.out }}
        >
          Leading Digital Transformation Worldwide
        </m.p>

        {/* Floating metric chips */}
        <m.div
          className="border-border bg-popover/90 text-popover-foreground shadow-dropdown absolute top-4 right-4 hidden items-center gap-2 rounded-full border px-4 py-2 sm:flex"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0, ...(floatLoop ? { ...floatLoop, y: [0, -6, 0] } : {}) }}
          transition={{ duration: duration.slow, delay: 1.6, ease: easing.out }}
        >
          <span className="bg-success size-2 rounded-full" />
          <span className="text-xs font-semibold whitespace-nowrap">Global Business</span>
        </m.div>

        <m.div
          className="border-border bg-popover/90 text-popover-foreground shadow-dropdown absolute bottom-6 left-4 hidden items-center gap-2 rounded-full border px-4 py-2 sm:flex"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, ...(floatLoop ? { ...floatLoop, y: [0, 6, 0] } : {}) }}
          transition={{ duration: duration.slow, delay: 1.8, ease: easing.out }}
        >
          <span className="bg-primary size-2 rounded-full" />
          <span className="text-xs font-semibold whitespace-nowrap">AI &amp; Innovation</span>
        </m.div>
      </div>
    </div>
  );
}
