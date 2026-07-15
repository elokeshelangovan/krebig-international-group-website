"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { WithChildren } from "@/types";

export function MotionProvider({ children }: WithChildren) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
