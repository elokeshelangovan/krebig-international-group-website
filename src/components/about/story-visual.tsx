"use client";

import { m } from "framer-motion";
import { duration, easing } from "@/lib/motion/tokens";
import {
  ArrowRightIcon,
  CompassIcon,
  PenToolIcon,
  SparklesIcon,
} from "@/components/sections/services-icons";
import { CodeIcon } from "@/components/sections/divisions-icons";

const scattered = [
  { label: "Agency", top: "6%", left: "6%", rotate: -6 },
  { label: "Consultant", top: "2%", left: "56%", rotate: 4 },
  { label: "Platform", top: "60%", left: "2%", rotate: -3 },
  { label: "Freelancer", top: "66%", left: "58%", rotate: 5 },
];

const capabilities = [
  { icon: CompassIcon, label: "Strategy" },
  { icon: PenToolIcon, label: "Creative" },
  { icon: CodeIcon, label: "Technology" },
  { icon: SparklesIcon, label: "AI" },
];

/**
 * Abstract "fragmented vendors → one integrated partner" diagram for the
 * Our Story section — no stock imagery. Visualizes the section's core
 * argument rather than illustrating it literally.
 */
export function StoryVisual() {
  return (
    <div aria-hidden="true" className="mx-auto flex w-full max-w-md flex-col gap-6 lg:mx-0">
      <div className="relative h-48 sm:h-56">
        {scattered.map((item, index) => (
          <m.span
            key={item.label}
            className="border-border bg-card text-muted-foreground absolute inline-flex items-center rounded-full border border-dashed px-3 py-1.5 text-xs font-medium"
            style={{ top: item.top, left: item.left, transform: `rotate(${item.rotate}deg)` }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: duration.base, delay: index * 0.08, ease: easing.out }}
          >
            {item.label}
          </m.span>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <m.span
          className="text-muted-foreground/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: duration.base, delay: 0.4, ease: easing.out }}
        >
          <ArrowRightIcon className="size-6 rotate-90" />
        </m.span>
      </div>

      <m.div
        className="border-border bg-card shadow-modal rounded-3xl border p-6"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: duration.slow, delay: 0.5, ease: easing.out }}
      >
        <span className="text-foreground mb-4 block text-sm font-semibold">
          KREBIG — One Ecosystem
        </span>
        <div className="grid grid-cols-4 gap-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <div key={capability.label} className="flex flex-col items-center gap-2">
                <span className="bg-accent text-accent-foreground flex size-10 items-center justify-center rounded-xl">
                  <Icon className="size-5" />
                </span>
                <span className="text-muted-foreground text-center text-[11px] font-medium">
                  {capability.label}
                </span>
              </div>
            );
          })}
        </div>
      </m.div>
    </div>
  );
}
