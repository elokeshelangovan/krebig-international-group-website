import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  return {
    title: pageTitle,
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
