import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { IndustryPlaceholder } from "@/components/industry-solutions";
import { WrenchIcon } from "@/components/sections/industries-icons";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Construction & Engineering Solutions | KREBIG International Group",
  description:
    "KREBIG supports construction, engineering, and contracting businesses with professional branding, digital presence, and business systems.",
  path: "/industries/construction",
});

export default function ConstructionPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Industry Solutions", url: new URL("/industries", siteConfig.url).toString() },
            {
              name: "Construction & Engineering",
              url: new URL("/industries/construction", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <IndustryPlaceholder
        icon={<WrenchIcon className="size-8" />}
        name="Construction & Engineering"
        description="Supporting construction, engineering, and contracting businesses with professional branding, digital presence, and business systems."
        focusAreas={[
          "Corporate Branding",
          "Website",
          "Documentation",
          "Marketing",
          "Automation",
          "AI Solutions",
        ]}
      />
    </>
  );
}
