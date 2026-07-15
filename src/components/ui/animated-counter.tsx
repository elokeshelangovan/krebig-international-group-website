"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { easing } from "@/lib/motion/tokens";

export interface AnimatedCounterProps {
  /** Target numeric value to count up to. */
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/** Counts up from 0 to `value` once it scrolls into view; jumps straight to the final value under prefers-reduced-motion. */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: shouldReduceMotion ? 0 : duration,
      ease: easing.out,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
