"use client";

import { m, useReducedMotion } from "framer-motion";
import { duration, easing } from "@/lib/motion/tokens";

const LINE_PATH =
  "M8 224C48 214 72 176 104 176C136 176 140 132 176 132C212 132 214 92 252 92C284 92 296 56 340 40C356 34 368 26 384 12";
const AREA_PATH = `${LINE_PATH}L384 240L8 240Z`;

const NODES = [
  { cx: 104, cy: 176, delay: 0 },
  { cx: 252, cy: 92, delay: 0.15 },
  { cx: 384, cy: 12, delay: 0.3 },
];

/**
 * Abstract, chart-inspired visual for the homepage hero — no stock imagery.
 * Represents "business growth" via an animated upward trend line, glowing
 * data nodes, and floating metric chips inside a dashboard-like panel.
 */
export function HeroVisual() {
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
        scale: [1, 1.35, 1],
        opacity: [0.6, 1, 0.6],
        transition: { duration: 2.4, ease: easing.standard, repeat: Infinity },
      };

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md sm:max-w-lg lg:mx-0 lg:max-w-none"
    >
      {/* Ambient gradient orbs */}
      <m.div
        className="bg-primary/30 absolute -top-10 -right-6 size-40 rounded-full blur-3xl"
        animate={floatLoop}
      />
      <m.div
        className="bg-accent/60 absolute -bottom-8 -left-8 size-48 rounded-full blur-3xl"
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
      <div className="border-border bg-card/70 shadow-modal relative flex h-full w-full flex-col justify-center overflow-hidden rounded-3xl border p-6 backdrop-blur-xl sm:p-8">
        <svg className="text-border absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
          <defs>
            <pattern id="hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        <m.svg viewBox="0 0 392 240" className="relative w-full" initial={false} fill="none">
          <defs>
            <linearGradient id="hero-line-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-accent-foreground)" />
            </linearGradient>
            <linearGradient id="hero-area-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
            </linearGradient>
          </defs>

          <m.path
            d={AREA_PATH}
            fill="url(#hero-area-gradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: duration.slow, delay: 0.6, ease: easing.out }}
          />

          <m.path
            d={LINE_PATH}
            stroke="url(#hero-line-gradient)"
            strokeWidth={3}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: easing.out, delay: 0.2 }}
          />

          {NODES.map((node) => (
            <m.circle
              key={`${node.cx}-${node.cy}`}
              cx={node.cx}
              cy={node.cy}
              r={5}
              className="fill-primary"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: duration.base, delay: 1 + node.delay, ease: easing.out }}
            />
          ))}
          {NODES.map((node) => (
            <m.circle
              key={`glow-${node.cx}-${node.cy}`}
              cx={node.cx}
              cy={node.cy}
              r={9}
              className="fill-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6, ...pulseLoop }}
              transition={{ delay: 1.2 + node.delay }}
            />
          ))}
        </m.svg>

        {/* Floating metric chips */}
        <m.div
          className="border-border bg-popover/90 text-popover-foreground shadow-dropdown absolute top-4 right-4 hidden items-center gap-2 rounded-full border px-4 py-2 sm:flex"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0, ...(floatLoop ? { ...floatLoop, y: [0, -6, 0] } : {}) }}
          transition={{ duration: duration.slow, delay: 1.4, ease: easing.out }}
        >
          <span className="bg-success size-2 rounded-full" />
          <span className="text-xs font-semibold whitespace-nowrap">Growth +128%</span>
        </m.div>

        <m.div
          className="border-border bg-popover/90 text-popover-foreground shadow-dropdown absolute bottom-6 left-4 hidden items-center gap-2 rounded-full border px-4 py-2 sm:flex"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, ...(floatLoop ? { ...floatLoop, y: [0, 6, 0] } : {}) }}
          transition={{ duration: duration.slow, delay: 1.6, ease: easing.out }}
        >
          <span className="bg-primary size-2 rounded-full" />
          <span className="text-xs font-semibold whitespace-nowrap">AI-Driven Strategy</span>
        </m.div>
      </div>
    </div>
  );
}
