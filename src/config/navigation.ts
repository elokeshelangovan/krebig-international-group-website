import type { ComponentType, SVGAttributes } from "react";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  XIcon,
} from "@/components/layout/footer-icons";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<SVGAttributes<SVGSVGElement>>;
}

/**
 * Primary header navigation. Items with a dedicated route (Home, About,
 * How We Partner, Divisions, Industry Solutions) link there; the rest link
 * to the in-page sections they correspond to (`id="insights"`, etc. in
 * src/components/sections) since those don't have standalone routes yet.
 */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How We Partner", href: "/how-we-partner" },
  { label: "Divisions", href: "/divisions" },
  { label: "Industry Solutions", href: "/industries" },
  { label: "Insights", href: "/#insights" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/#contact" },
];

/** Optional primary call-to-action rendered at the end of the header nav. */
export const primaryNavCta: NavItem | null = { label: "Book Strategy Call", href: "/#contact" };

/** Footer link columns. */
export const footerNav: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Careers", href: "/#careers" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "How We Partner",
    links: [
      { label: "Launch", href: "/how-we-partner/launch" },
      { label: "Growth", href: "/how-we-partner/growth" },
      { label: "Scale", href: "/how-we-partner/scale" },
      { label: "Enterprise", href: "/how-we-partner/enterprise" },
    ],
  },
  {
    title: "Divisions",
    links: [
      { label: "Digital Media", href: "/divisions/digital-media" },
      { label: "Studio", href: "/divisions/studio" },
      { label: "Technology", href: "/divisions/technology" },
      { label: "Academy", href: "/divisions/academy" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Construction", href: "/industries/construction" },
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Education", href: "/industries/education" },
      { label: "Finance", href: "/industries/finance" },
    ],
  },
];

/** Legal links rendered in the footer bottom bar. */
export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms-of-service" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
];

/** Social links rendered in the footer. */
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/krebig", icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com/krebig", icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/krebig", icon: FacebookIcon },
  { label: "YouTube", href: "https://www.youtube.com/@krebig", icon: YouTubeIcon },
  { label: "X", href: "https://x.com/krebig", icon: XIcon },
];
