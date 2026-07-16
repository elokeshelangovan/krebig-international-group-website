"use client";

import { m, useReducedMotion } from "framer-motion";
import { duration, easing } from "@/lib/motion/tokens";

export interface AnnouncementBarProps {
  message?: string;
  icon?: string;
  className?: string;
}

const defaultMessage = "AI-Powered Business Growth Partner | UAE • India • Global";

export function AnnouncementBar({
  message = defaultMessage,
  icon = "🚀",
  className,
}: AnnouncementBarProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      role="note"
      className={className ?? "bg-primary text-primary-foreground w-full"}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.slow, ease: easing.out }}
    >
      <div className="flex items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium sm:text-sm">
        <m.span
          aria-hidden="true"
          animate={shouldReduceMotion ? undefined : { scale: [1, 1.15, 1] }}
          transition={
            shouldReduceMotion ? undefined : { duration: 2.2, repeat: 3, ease: easing.standard }
          }
        >
          {icon}
        </m.span>
        <span>{message}</span>
      </div>
    </m.div>
  );
}
