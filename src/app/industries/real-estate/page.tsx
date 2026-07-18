import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { IndustryPlaceholder } from "@/components/industry-solutions";
import { HomeIcon } from "@/components/sections/industries-icons";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Real Estate Solutions | KREBIG International Group",
  description:
    "KREBIG helps developers, brokers, and property companies attract buyers, generate qualified leads, and strengthen their brand presence.",
  path: "/industries/real-estate",
});

export default function RealEstatePage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Industry Solutions", url: new URL("/industries", siteConfig.url).toString() },
            {
              name: "Real Estate",
              url: new URL("/industries/real-estate", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <IndustryPlaceholder
        icon={<HomeIcon className="size-8" />}
        name="Real Estate"
        description="Helping developers, brokers, and property companies attract buyers, generate qualified leads, and strengthen their brand presence."
        focusAreas={[
          "Digital Marketing",
          "Property Branding",
          "Lead Generation",
          "Video Production",
          "Website Development",
          "AI Automation",
        ]}
      />
    </>
  );
}
