import type { IconProps } from "@/components/sections/services-icons";

const base: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function BadgeCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2 14.5 4.5 18 4 18 7.5 20.5 10 18 12.5 18 16 14.5 15.5 12 18 9.5 15.5 6 16 6 12.5 3.5 10 6 7.5 6 4 9.5 4.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
