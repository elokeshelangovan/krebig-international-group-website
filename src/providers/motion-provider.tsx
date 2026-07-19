"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import type { WithChildren } from "@/types";

export function MotionProvider({ children }: WithChildren) {
  return (
    <LazyMotion features={domAnimation} strict>
      {/* Applies the OS-level prefers-reduced-motion setting to every motion
          component app-wide, so entrance/hover/stagger animations resolve
          instantly instead of requiring each usage to check it manually. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
