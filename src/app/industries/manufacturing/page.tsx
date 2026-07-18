import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { IndustryPlaceholder } from "@/components/industry-solutions";
import { FactoryIcon } from "@/components/sections/industries-icons";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Manufacturing & Industrial Solutions | KREBIG International Group",
  description:
    "KREBIG helps industrial companies modernize their digital presence, improve operational visibility, and support long-term growth.",
  path: "/industries/manufacturing",
});

export default function ManufacturingPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Industry Solutions", url: new URL("/industries", siteConfig.url).toString() },
            {
              name: "Manufacturing & Industrial",
              url: new URL("/industries/manufacturing", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <IndustryPlaceholder
        icon={<FactoryIcon className="size-8" />}
        name="Manufacturing & Industrial"
        description="Helping industrial companies modernize their digital presence, improve operational visibility, and support long-term business growth."
        focusAreas={[
          "Digital Transformation",
          "AI Automation",
          "Corporate Website",
          "Branding",
          "Marketing",
          "Business Systems",
        ]}
      />
    </>
  );
}
