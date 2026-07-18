"use client";

import { m, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { duration, easing } from "@/lib/motion/tokens";

const RINGS = [70, 100, 130];

/**
 * Premium "conversation" visual for the Contact hero — matches the
 * Divisions/About/How We Partner/Industry Solutions/Insights/Careers hero
 * dashboard-panel visual language (glass card, dot-grid, gradient orbs,
 * floating chips) while representing this page's own theme: a message
 * radiating outward, like a conversation opening up.
 */
export function ContactHeroVisual() {
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
      <div className="border-border bg-card/70 shadow-modal relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-3xl border p-6 backdrop-blur-xl sm:p-8">
        <svg className="text-border absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
          <defs>
            <pattern id="contact-hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-hero-grid)" />
        </svg>

        <div className="relative flex size-64 items-center justify-center sm:size-72">
          <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" fill="none">
            {RINGS.map((radius, index) => (
              <m.circle
                key={radius}
                cx="150"
                cy="150"
                r={radius}
                className="stroke-primary"
                strokeWidth="1.5"
                fill="none"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={
                  shouldReduceMotion
                    ? { opacity: 0.25, scale: 1 }
                    : {
                        opacity: [0.05, 0.3, 0.05],
                        scale: [0.92, 1, 0.92],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: duration.slow, ease: easing.out }
                    : {
                        duration: 4,
                        ease: easing.standard,
                        repeat: Infinity,
                        delay: index * 0.4,
                      }
                }
              />
            ))}
          </svg>

          <m.span
            className="bg-primary text-primary-foreground shadow-dropdown ring-background relative z-10 flex size-24 items-center justify-center rounded-full ring-8 sm:size-28"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration.slow, ease: easing.out }}
          >
            <MessageCircle aria-hidden="true" className="size-10 sm:size-12" strokeWidth={1.5} />
          </m.span>
        </div>

        {/* Floating culture chips */}
        <m.div
          className="border-border bg-popover/90 text-popover-foreground shadow-dropdown absolute top-4 right-4 hidden items-center gap-2 rounded-full border px-4 py-2 sm:flex"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0, ...(floatLoop ? { ...floatLoop, y: [0, -6, 0] } : {}) }}
          transition={{ duration: duration.slow, delay: 1.2, ease: easing.out }}
        >
          <span className="bg-success size-2 rounded-full" />
          <span className="text-xs font-semibold whitespace-nowrap">Quick Response</span>
        </m.div>

        <m.div
          className="border-border bg-popover/90 text-popover-foreground shadow-dropdown absolute bottom-6 left-4 hidden items-center gap-2 rounded-full border px-4 py-2 sm:flex"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, ...(floatLoop ? { ...floatLoop, y: [0, 6, 0] } : {}) }}
          transition={{ duration: duration.slow, delay: 1.4, ease: easing.out }}
        >
          <span className="bg-primary size-2 rounded-full" />
          <span className="text-xs font-semibold whitespace-nowrap">{"We're Here to Help"}</span>
        </m.div>
      </div>
    </div>
  );
}
