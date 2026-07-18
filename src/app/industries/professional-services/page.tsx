import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { IndustryPlaceholder } from "@/components/industry-solutions";
import { BriefcaseIcon } from "@/components/sections/divisions-icons";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Professional Services Solutions | KREBIG International Group",
  description:
    "KREBIG helps consulting firms, legal practices, financial companies, and business advisors build authority and generate leads.",
  path: "/industries/professional-services",
});

export default function ProfessionalServicesPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Industry Solutions", url: new URL("/industries", siteConfig.url).toString() },
            {
              name: "Professional Services",
              url: new URL("/industries/professional-services", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <IndustryPlaceholder
        icon={<BriefcaseIcon className="size-8" />}
        name="Professional Services"
        description="Helping consulting firms, legal practices, financial companies, and business advisors build authority and generate qualified leads."
        focusAreas={[
          "Personal Branding",
          "Lead Generation",
          "SEO",
          "Website",
          "Marketing Automation",
          "Analytics",
        ]}
      />
    </>
  );
}
