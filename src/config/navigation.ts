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
 * Primary header navigation. The site is currently a single homepage, so
 * these link to the in-page sections they correspond to (`id="about"`,
 * `id="services"`, etc. in src/components/sections) rather than separate
 * routes that don't exist yet.
 */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Divisions", href: "/#divisions" },
  { label: "Industries", href: "/#industries" },
  { label: "Portfolio", href: "/#portfolio" },
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
      { label: "Grow", href: "/how-we-partner/grow" },
      { label: "Scale", href: "/how-we-partner/scale" },
      { label: "Enterprise", href: "/how-we-partner/enterprise" },
    ],
  },
  {
    title: "Divisions",
    links: [
      { label: "Digital Media", href: "/divisions/digital-media" },
      { label: "Studio", href: "/divisions/studio" },
      { label: "Technologies", href: "/divisions/technologies" },
      { label: "Academy", href: "/divisions/academy" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Business Setup", href: "/industries/business-setup" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "Construction", href: "/industries/construction" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Technology", href: "/industries/technology" },
      { label: "Education", href: "/industries/education" },
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
