import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { DivisionPlaceholder } from "@/components/divisions";
import { BroadcastIcon } from "@/components/sections/divisions-icons";

export const metadata: Metadata = buildMetadata({
  fullTitle: "KREBIG Digital Media | KREBIG International Group",
  description:
    "KREBIG Digital Media helps businesses grow through strategic digital marketing, branding, SEO, performance campaigns and lead generation.",
  path: "/divisions/digital-media",
});

export default function DigitalMediaPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Divisions", url: new URL("/divisions", siteConfig.url).toString() },
            {
              name: "Digital Media",
              url: new URL("/divisions/digital-media", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <DivisionPlaceholder
        icon={<BroadcastIcon className="size-8" />}
        name="KREBIG Digital Media"
        description="Helping businesses grow through strategic digital marketing, branding, SEO, performance campaigns, content marketing, and lead generation."
        capabilities={[
          "Digital Marketing",
          "SEO",
          "Social Media Marketing",
          "Paid Advertising",
          "Branding",
          "Lead Generation",
        ]}
      />
    </>
  );
}
