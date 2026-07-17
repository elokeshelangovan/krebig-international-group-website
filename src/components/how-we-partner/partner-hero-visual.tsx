"use client";

import { m, useReducedMotion } from "framer-motion";
import { duration, easing } from "@/lib/motion/tokens";

const STAGES = [
  { label: "Launch", x: 24, width: 64, height: 64, delay: 0 },
  { label: "Growth", x: 112, width: 64, height: 108, delay: 0.15 },
  { label: "Scale", x: 200, width: 64, height: 152, delay: 0.3 },
  { label: "Enterprise", x: 288, width: 64, height: 196, delay: 0.45 },
];

const BASE_Y = 232;
const LINE_PATH = STAGES.map(
  (stage) => `${stage.x + stage.width / 2},${BASE_Y - stage.height - 10}`,
)
  .map((point, index) => `${index === 0 ? "M" : "L"}${point}`)
  .join(" ");

/**
 * Premium "growth stages" visual for the How We Partner hero — no stock
 * imagery. Matches the homepage/about hero dashboard-panel visual language
 * (glass card, dot-grid, gradient orbs, floating chips) while foreshadowing
 * this page's own content: an ascending staircase representing the four
 * partnership models (Launch, Growth, Scale, Enterprise).
 */
export function PartnerHeroVisual() {
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
      <div className="border-border bg-card/70 shadow-modal relative flex h-full w-full flex-col justify-center overflow-hidden rounded-3xl border p-6 backdrop-blur-xl sm:p-8">
        <svg className="text-border absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
          <defs>
            <pattern id="partner-hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#partner-hero-grid)" />
        </svg>

        <m.svg viewBox="0 0 392 260" className="relative w-full" initial={false} fill="none">
          <defs>
            <linearGradient id="partner-line-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-accent-foreground)" />
            </linearGradient>
            <linearGradient id="partner-bar-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {STAGES.map((stage) => (
            <m.rect
              key={stage.label}
              x={stage.x}
              width={stage.width}
              rx={10}
              fill="url(#partner-bar-gradient)"
              stroke="var(--color-primary)"
              strokeOpacity="0.4"
              initial={{ height: 0, y: BASE_Y }}
              animate={{ height: stage.height, y: BASE_Y - stage.height }}
              transition={{ duration: duration.slow, delay: stage.delay, ease: easing.out }}
            />
          ))}

          <m.path
            d={LINE_PATH}
            stroke="url(#partner-line-gradient)"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, ease: easing.out, delay: 0.7 }}
          />

          {STAGES.map((stage) => (
            <m.circle
              key={`node-${stage.label}`}
              cx={stage.x + stage.width / 2}
              cy={BASE_Y - stage.height - 10}
              r={5}
              className="fill-primary"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: duration.base, delay: 0.9 + stage.delay, ease: easing.out }}
            />
          ))}

          {STAGES.map((stage) => (
            <text
              key={`label-${stage.label}`}
              x={stage.x + stage.width / 2}
              y={BASE_Y + 22}
              textAnchor="middle"
              className="fill-muted-foreground"
              style={{ fontSize: 13, fontWeight: 600 }}
            >
              {stage.label}
            </text>
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
          <span className="text-xs font-semibold whitespace-nowrap">4 Partnership Models</span>
        </m.div>

        <m.div
          className="border-border bg-popover/90 text-popover-foreground shadow-dropdown absolute bottom-6 left-4 hidden items-center gap-2 rounded-full border px-4 py-2 sm:flex"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, ...(floatLoop ? { ...floatLoop, y: [0, 6, 0] } : {}) }}
          transition={{ duration: duration.slow, delay: 1.6, ease: easing.out }}
        >
          <span className="bg-primary size-2 rounded-full" />
          <span className="text-xs font-semibold whitespace-nowrap">Built For Your Stage</span>
        </m.div>
      </div>
    </div>
  );
}
