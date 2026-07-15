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
}

/** Primary header navigation. */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Divisions", href: "/divisions" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

/** Optional primary call-to-action rendered at the end of the header nav. */
export const primaryNavCta: NavItem | null = { label: "Book Strategy Call", href: "/contact" };

/** Footer link columns. Intentionally empty until pages exist. */
export const footerNav: FooterColumn[] = [];

/** Social links rendered in the footer. Intentionally empty. */
export const socialLinks: SocialLink[] = [];
