export const siteConfig = {
  name: "KREBIG International Group",
  shortName: "KREBIG",
  description:
    "KREBIG International Group is an AI-powered Business Growth Partner delivering strategy, marketing, creative, technology, and AI solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.krebig.com",
  locale: "en_US",
  themeColor: "#0a0a0a",
  links: {
    linkedin: "",
    twitter: "",
    instagram: "",
  },
  contact: {
    email: "",
    phone: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
