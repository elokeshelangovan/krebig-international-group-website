"use client";

import { MotionProvider } from "@/providers/motion-provider";
import type { WithChildren } from "@/types";

export function AppProviders({ children }: WithChildren) {
  return <MotionProvider>{children}</MotionProvider>;
}
