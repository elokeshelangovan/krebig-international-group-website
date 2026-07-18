"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

/**
 * Next.js App Router doesn't move focus on client-side navigation, so
 * screen reader users get no indication a new page loaded. Moves focus to
 * the main landmark (already a valid target via the skip link's
 * tabIndex={-1}) whenever the route changes, skipping the initial mount so
 * it doesn't steal focus from the browser's own load behavior.
 */
export function RouteFocusManager({ mainId }: { mainId: string }) {
  const pathname = usePathname();
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    document.getElementById(mainId)?.focus();
  }, [pathname, mainId]);

  return null;
}
