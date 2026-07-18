import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import {
  DivisionsHero,
  DivisionsIntro,
  DivisionsWorkflow,
  DivisionsShowcase,
  DivisionsCollaboration,
  WhyStructureWorks,
} from "@/components/divisions";
import { FinalCta } from "@/components/about";

export const metadata: Metadata = buildMetadata({
  fullTitle: "KREBIG Divisions | Marketing, Studio, Technology & Academy",
  description:
    "KREBIG's four specialized divisions — Digital Media, Studio, Technology and Academy — work as one integrated ecosystem to deliver measurable business growth.",
  path: "/divisions",
});

export default function DivisionsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Divisions", url: new URL("/divisions", siteConfig.url).toString() },
          ]),
        )}
      />
      <DivisionsHero />
      <DivisionsIntro />
      <DivisionsWorkflow />
      <DivisionsShowcase />
      <DivisionsCollaboration />
      <WhyStructureWorks />
      <FinalCta
        heading="Build Your Business with the Right Expertise"
        description="Whether you need strategic marketing, creative production, technology solutions, or professional development, KREBIG brings together specialized expertise to help your business grow with confidence."
        primaryCtaLabel="Start a Conversation"
        primaryCtaHref="/contact"
        secondaryCtaLabel="Contact Our Team"
        secondaryCtaHref="/contact"
        secondaryIcon="none"
      />
    </>
  );
}
