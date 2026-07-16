import { env } from "@/config/env";

export const siteConfig = {
  name: "KREBIG International Group",
  shortName: "KREBIG",
  description:
    "KREBIG International Group is an AI-powered Business Growth Partner delivering strategy, marketing, creative, technology, and AI solutions.",
  url: env.NEXT_PUBLIC_SITE_URL,
  locale: "en_US",
  themeColor: "#0a0a0a",
} as const;

export type SiteConfig = typeof siteConfig;
