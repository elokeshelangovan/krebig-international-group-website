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
import { FinalCta } from "@/components/about";

export const metadata: Metadata = buildMetadata({
  fullTitle: "KREBIG Industry Solutions | Real Estate, Healthcare, Retail & More",
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
      <FinalCta
        heading="Let's Build Industry-Specific Growth Together"
        description="Every industry is different, and every business deserves a strategy designed around its unique goals. Partner with KREBIG to combine strategy, creativity, technology, and AI for sustainable business growth."
        primaryCtaLabel="Book a Strategy Session"
        primaryCtaHref="/#contact"
        secondaryCtaLabel="Contact Our Team"
        secondaryCtaHref="/#contact"
        secondaryIcon="none"
      />
    </>
  );
}
