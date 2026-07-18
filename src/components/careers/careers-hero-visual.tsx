"use client";

import { m, useReducedMotion } from "framer-motion";
import { duration, easing } from "@/lib/motion/tokens";

const STEPS = [
  { cx: 56, cy: 300, r: 14 },
  { cx: 138, cy: 244, r: 17 },
  { cx: 220, cy: 176, r: 20 },
  { cx: 302, cy: 116, r: 23 },
  { cx: 384, cy: 64, r: 26 },
];

const PATH = "M56 300 L138 244 L220 176 L302 116 L384 64";

/**
 * Premium "growth path" visual for the Careers hero — matches the
 * Divisions/About/How We Partner/Industry Solutions/Insights hero
 * dashboard-panel visual language (glass card, dot-grid, gradient orbs,
 * floating chips) while representing this page's own theme: an ascending
 * path of growth, mirroring a career trajectory at KREBIG.
 */
export function CareersHeroVisual() {
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
        scale: [1, 1.12, 1],
        opacity: [0.55, 0.9, 0.55],
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
            <pattern id="careers-hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#careers-hero-grid)" />
        </svg>

        <m.svg
          viewBox="0 0 420 358"
          className="relative w-full max-w-[300px]"
          fill="none"
          initial={false}
        >
          <defs>
            <linearGradient
              id="careers-path-gradient"
              gradientUnits="userSpaceOnUse"
              x1="56"
              y1="300"
              x2="384"
              y2="64"
            >
              <stop offset="0%" stopColor="var(--color-accent-foreground)" />
              <stop offset="100%" stopColor="var(--color-primary)" />
            </linearGradient>
          </defs>

          <m.path
            d={PATH}
            stroke="url(#careers-path-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: duration.slow, delay: 0.2, ease: easing.out }}
          />

          {STEPS.map((step, index) => (
            <m.circle
              key={`glow-${step.cx}-${step.cy}`}
              cx={step.cx}
              cy={step.cy}
              r={step.r + 8}
              className="fill-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35, ...pulseLoop }}
              transition={{ delay: 0.6 + index * 0.12 }}
            />
          ))}

          {STEPS.map((step, index) => (
            <m.circle
              key={`node-${step.cx}-${step.cy}`}
              cx={step.cx}
              cy={step.cy}
              r={step.r}
              className={index === STEPS.length - 1 ? "fill-primary" : "fill-accent-foreground"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: duration.base,
                delay: 0.5 + index * 0.12,
                ease: easing.out,
              }}
            />
          ))}
        </m.svg>

        {/* Floating culture chips */}
        <m.div
          className="border-border bg-popover/90 text-popover-foreground shadow-dropdown absolute top-4 right-4 hidden items-center gap-2 rounded-full border px-4 py-2 sm:flex"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0, ...(floatLoop ? { ...floatLoop, y: [0, -6, 0] } : {}) }}
          transition={{ duration: duration.slow, delay: 1.2, ease: easing.out }}
        >
          <span className="bg-success size-2 rounded-full" />
          <span className="text-xs font-semibold whitespace-nowrap">Growth-Focused Culture</span>
        </m.div>

        <m.div
          className="border-border bg-popover/90 text-popover-foreground shadow-dropdown absolute bottom-6 left-4 hidden items-center gap-2 rounded-full border px-4 py-2 sm:flex"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, ...(floatLoop ? { ...floatLoop, y: [0, 6, 0] } : {}) }}
          transition={{ duration: duration.slow, delay: 1.4, ease: easing.out }}
        >
          <span className="bg-primary size-2 rounded-full" />
          <span className="text-xs font-semibold whitespace-nowrap">Build Your Future</span>
        </m.div>
      </div>
    </div>
  );
}
