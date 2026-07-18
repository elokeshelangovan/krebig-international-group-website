"use client";

import { m, useReducedMotion } from "framer-motion";
import { duration, easing } from "@/lib/motion/tokens";

const SATELLITES = [
  { cx: 196, cy: 70, delay: 0 },
  { cx: 316, cy: 150, delay: 0.15 },
  { cx: 270, cy: 288, delay: 0.3 },
  { cx: 122, cy: 288, delay: 0.45 },
  { cx: 76, cy: 150, delay: 0.6 },
];

const HUB = { cx: 196, cy: 179 };

/**
 * Premium "hub and spoke" visual for the Insights hero — matches the
 * Divisions/About/How We Partner/Industry Solutions hero dashboard-panel
 * visual language (glass card, dot-grid, gradient orbs, floating chips)
 * while representing this page's own theme: many ideas and articles
 * (satellite nodes) radiating from one knowledge hub.
 */
export function InsightsHeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  const floatLoop = shouldReduceMotion
    ? undefined
    : {
        y: [0, -10, 0],
        transition: { duration: 6, ease: easing.standard, repeat: Infinity },
      };

  const pulseLoop = shouldReduceMotion
    ? undefined
    : {
        scale: [1, 1.15, 1],
        opacity: [0.5, 0.9, 0.5],
        transition: { duration: 2.8, ease: easing.standard, repeat: Infinity },
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
      <div className="border-border bg-card/70 shadow-modal relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-3xl border p-6 backdrop-blur-xl sm:p-8">
        <svg className="text-border absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
          <defs>
            <pattern id="insights-hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#insights-hero-grid)" />
        </svg>

        <m.svg
          viewBox="0 0 392 358"
          className="relative w-full max-w-[300px]"
          fill="none"
          initial={false}
        >
          <defs>
            <linearGradient
              id="insights-spoke-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="392"
              y2="358"
            >
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-accent-foreground)" />
            </linearGradient>
          </defs>

          {SATELLITES.map((node, index) => (
            <m.line
              key={`spoke-${node.cx}-${node.cy}`}
              x1={HUB.cx}
              y1={HUB.cy}
              x2={node.cx}
              y2={node.cy}
              stroke="url(#insights-spoke-gradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.55 }}
              transition={{ duration: duration.slow, delay: 0.2 + index * 0.1, ease: easing.out }}
            />
          ))}

          {SATELLITES.map((node) => (
            <m.circle
              key={`glow-${node.cx}-${node.cy}`}
              cx={node.cx}
              cy={node.cy}
              r={16}
              className="fill-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5, ...pulseLoop }}
              transition={{ delay: 0.8 + node.delay }}
            />
          ))}

          {SATELLITES.map((node) => (
            <m.circle
              key={`node-${node.cx}-${node.cy}`}
              cx={node.cx}
              cy={node.cy}
              r={10}
              className="fill-primary"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: duration.base, delay: 0.7 + node.delay, ease: easing.out }}
            />
          ))}

          <m.circle
            cx={HUB.cx}
            cy={HUB.cy}
            r={30}
            className="fill-primary"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.18, scale: 1, ...pulseLoop }}
            transition={{ duration: duration.slow, ease: easing.out }}
          />
          <m.circle
            cx={HUB.cx}
            cy={HUB.cy}
            r={20}
            className="fill-primary"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration.slow, ease: easing.out }}
          />
        </m.svg>

        {/* Floating metric chips */}
        <m.div
          className="border-border bg-popover/90 text-popover-foreground shadow-dropdown absolute top-4 right-4 hidden items-center gap-2 rounded-full border px-4 py-2 sm:flex"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0, ...(floatLoop ? { ...floatLoop, y: [0, -6, 0] } : {}) }}
          transition={{ duration: duration.slow, delay: 1.4, ease: easing.out }}
        >
          <span className="bg-success size-2 rounded-full" />
          <span className="text-xs font-semibold whitespace-nowrap">Expert Insights</span>
        </m.div>

        <m.div
          className="border-border bg-popover/90 text-popover-foreground shadow-dropdown absolute bottom-6 left-4 hidden items-center gap-2 rounded-full border px-4 py-2 sm:flex"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, ...(floatLoop ? { ...floatLoop, y: [0, 6, 0] } : {}) }}
          transition={{ duration: duration.slow, delay: 1.6, ease: easing.out }}
        >
          <span className="bg-primary size-2 rounded-full" />
          <span className="text-xs font-semibold whitespace-nowrap">Ideas That Grow Business</span>
        </m.div>
      </div>
    </div>
  );
}
