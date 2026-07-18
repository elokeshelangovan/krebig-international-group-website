import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { IndustryPlaceholder } from "@/components/industry-solutions";
import { PulseIcon } from "@/components/sections/industries-icons";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Healthcare Solutions | KREBIG International Group",
  description:
    "KREBIG supports clinics, hospitals, and healthcare providers with patient-focused digital experiences and sustainable growth strategies.",
  path: "/industries/healthcare",
});

export default function HealthcarePage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Industry Solutions", url: new URL("/industries", siteConfig.url).toString() },
            {
              name: "Healthcare",
              url: new URL("/industries/healthcare", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <IndustryPlaceholder
        icon={<PulseIcon className="size-8" />}
        name="Healthcare"
        description="Supporting clinics, hospitals, and healthcare providers with patient-focused digital experiences and sustainable growth strategies."
        focusAreas={[
          "Healthcare Marketing",
          "Website Solutions",
          "SEO",
          "Patient Acquisition",
          "Brand Strategy",
          "Automation",
        ]}
      />
    </>
  );
}
