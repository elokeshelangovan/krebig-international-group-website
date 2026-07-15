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

/**
 * Primary header navigation. Intentionally empty — this sprint ships the
 * design system only. Populate once real routes/pages exist.
 */
export const primaryNav: NavItem[] = [];

/** Optional primary call-to-action rendered at the end of the header nav. */
export const primaryNavCta: NavItem | null = null;

/** Footer link columns. Intentionally empty until pages exist. */
export const footerNav: FooterColumn[] = [];

/** Social links rendered in the footer. Intentionally empty. */
export const socialLinks: SocialLink[] = [];
