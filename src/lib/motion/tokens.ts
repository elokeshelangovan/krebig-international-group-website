/**
 * JS-side mirror of the motion tokens defined in `src/styles/tokens.css`.
 * Framer Motion transitions need plain numbers/arrays rather than CSS
 * `var()` references, so these constants are kept in sync with the CSS
 * custom properties by convention (durations in seconds here vs. ms in CSS).
 */

export const duration = {
  fast: 0.15,
  base: 0.25,
  slow: 0.4,
} as const;

export const easing = {
  standard: [0.4, 0, 0.2, 1],
  out: [0, 0, 0.2, 1],
  in: [0.4, 0, 1, 1],
  emphasized: [0.2, 0, 0, 1],
} as const;

export type Duration = keyof typeof duration;
export type Easing = keyof typeof easing;
