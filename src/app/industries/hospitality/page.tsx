import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { IndustryPlaceholder } from "@/components/industry-solutions";
import { BellIcon } from "@/components/sections/industries-icons";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Hospitality & Restaurants Solutions | KREBIG International Group",
  description:
    "KREBIG creates memorable customer experiences through branding, digital marketing, content creation, and reputation management.",
  path: "/industries/hospitality",
});

export default function HospitalityPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Industry Solutions", url: new URL("/industries", siteConfig.url).toString() },
            {
              name: "Hospitality & Restaurants",
              url: new URL("/industries/hospitality", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <IndustryPlaceholder
        icon={<BellIcon className="size-8" />}
        name="Hospitality & Restaurants"
        description="Creating memorable customer experiences through branding, digital marketing, content creation, and reputation management."
        focusAreas={[
          "Branding",
          "Photography",
          "Video",
          "Social Media",
          "Local SEO",
          "Customer Engagement",
        ]}
      />
    </>
  );
}
