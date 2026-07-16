"use client";

import { m, useReducedMotion } from "framer-motion";
import { duration, easing } from "@/lib/motion/tokens";

const LAYERS = [
  { label: "Strategy", rotate: -6, offsetX: -18, offsetY: 8, size: "78%", delay: 0 },
  { label: "Creative", rotate: 4, offsetX: 14, offsetY: -6, size: "88%", delay: 0.12 },
  { label: "Technology", rotate: -3, offsetX: -8, offsetY: -18, size: "96%", delay: 0.24 },
  { label: "AI", rotate: 5, offsetX: 10, offsetY: 4, size: "100%", delay: 0.36 },
];

const NODES = [
  { top: "8%", left: "14%", delay: 0 },
  { top: "18%", left: "82%", delay: 0.2 },
  { top: "84%", left: "76%", delay: 0.4 },
  { top: "78%", left: "10%", delay: 0.6 },
];

/**
 * Abstract, geometric "layered ecosystem" visual for the About page hero —
 * no stock imagery. Distinct from the homepage hero's chart panel: stacked,
 * gently rotated panels represent strategy/creative/technology/AI operating
 * as one integrated system, with floating connective nodes around it.
 */
export function AboutHeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  const floatLoop = (offset: number) =>
    shouldReduceMotion
      ? undefined
      : {
          y: [0, offset, 0],
          transition: { duration: 7, ease: easing.standard, repeat: Infinity },
        };

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md sm:max-w-lg lg:mx-0 lg:max-w-none"
    >
      {/* Ambient gradient orbs */}
      <m.div
        className="bg-primary/25 absolute -top-8 -right-4 size-40 rounded-full blur-3xl"
        animate={floatLoop(-10)}
      />
      <m.div
        className="bg-accent/70 absolute -bottom-10 -left-6 size-48 rounded-full blur-3xl"
        animate={floatLoop(12)}
      />

      {/* Layered panel stack */}
      <div className="relative flex h-full w-full items-center justify-center">
        {LAYERS.map((layer, index) => (
          <m.div
            key={layer.label}
            className="border-border bg-card/80 shadow-modal absolute flex items-start justify-start rounded-3xl border p-5 backdrop-blur-xl"
            style={{
              width: layer.size,
              height: layer.size,
              zIndex: index,
            }}
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: layer.rotate,
              x: layer.offsetX,
              y: layer.offsetY,
            }}
            transition={{ duration: duration.slow, delay: layer.delay, ease: easing.out }}
          >
            <span className="border-border bg-accent text-accent-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold">
              {layer.label}
            </span>
          </m.div>
        ))}

        {/* Floating connective nodes */}
        {NODES.map((node) => (
          <m.span
            key={`${node.top}-${node.left}`}
            className="bg-primary shadow-dropdown absolute size-3 rounded-full"
            style={{ top: node.top, left: node.left }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration.base, delay: 0.6 + node.delay, ease: easing.out }}
          />
        ))}
      </div>
    </div>
  );
}
