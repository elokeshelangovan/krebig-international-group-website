import * as React from "react";

export type IconProps = React.SVGAttributes<SVGSVGElement>;

const base: IconProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  stroke: "none",
  "aria-hidden": true,
};

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v10.75H3V9.75Zm7 0h3.83v1.47h.05c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14v6.2h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9v5.6h-4V9.75Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.35C16.24 4.32 15.35 4.25 14.32 4.25c-2.15 0-3.62 1.31-3.62 3.72v2.53H8v3h2.7V21h2.8Z" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21.6 7.6a2.7 2.7 0 0 0-1.9-1.92C18 5.25 12 5.25 12 5.25s-6 0-7.7.43A2.7 2.7 0 0 0 2.4 7.6 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.4 2.7 2.7 0 0 0 1.9 1.92c1.7.43 7.7.43 7.7.43s6 0 7.7-.43a2.7 2.7 0 0 0 1.9-1.92A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.4ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg
      {...base}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      {...props}
    >
      <path d="M4.5 4.5 19.5 19.5" />
      <path d="M19.5 4.5 4.5 19.5" />
    </svg>
  );
}
