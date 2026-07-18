import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import {
  IndustrySolutionsHero,
  IndustrySolutionsIntro,
  IndustrySolutionsApproach,
  IndustrySolutionsShowcase,
  WhyIndustryExpertiseMatters,
  SuccessFramework,
} from "@/components/industry-solutions";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Industry Solutions | KREBIG International Group",
  description:
    "KREBIG delivers industry-specific solutions across real estate, healthcare, technology and more — combining strategy, creativity and AI for measurable growth.",
  path: "/industries",
});

export default function IndustrySolutionsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Industry Solutions", url: new URL("/industries", siteConfig.url).toString() },
          ]),
        )}
      />
      <IndustrySolutionsHero />
      <IndustrySolutionsIntro />
      <IndustrySolutionsApproach />
      <IndustrySolutionsShowcase />
      <WhyIndustryExpertiseMatters />
      <SuccessFramework />
    </>
  );
}
