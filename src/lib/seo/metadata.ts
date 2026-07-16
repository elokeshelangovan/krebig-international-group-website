import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataOptions {
  title?: string;
  /** Full literal `<title>` text, used verbatim instead of `${title} | ${siteConfig.name}`. */
  fullTitle?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  fullTitle,
  description = siteConfig.description,
  path = "/",
  noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const pageTitle = fullTitle ?? (title ? `${title} | ${siteConfig.name}` : siteConfig.name);

  return {
    // A plain string title is still combined with the root layout's
    // `template`; `absolute` is required to render `fullTitle` verbatim.
    title: fullTitle ? { absolute: fullTitle } : pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
