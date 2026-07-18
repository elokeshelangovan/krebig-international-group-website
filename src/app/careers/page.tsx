import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import {
  CareersHero,
  WhyJoinKrebig,
  LifeAtKrebig,
  OpenOpportunities,
  HiringProcess,
  BenefitsGrowth,
} from "@/components/careers";
import { FinalCta } from "@/components/about";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Careers at KREBIG | Build Your Future in Business Growth",
  description:
    "Join a team combining strategy, creativity, technology, and AI to solve real business challenges. Discover what it's like to build your career at KREBIG.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Careers", url: new URL("/careers", siteConfig.url).toString() },
          ]),
        )}
      />
      <CareersHero />
      <WhyJoinKrebig />
      <LifeAtKrebig />
      <OpenOpportunities />
      <HiringProcess />
      <BenefitsGrowth />
      <FinalCta
        heading="Ready to Build Your Career with KREBIG?"
        description="If you're passionate about innovation, creativity, technology, AI, and solving meaningful business challenges, we'd love to hear from you. Join us in shaping the future of business growth."
        primaryCtaLabel="Apply Now"
        primaryCtaHref="#open-opportunities"
        secondaryCtaLabel="Contact Recruitment"
        secondaryCtaHref="/contact"
        secondaryIcon="none"
      />
    </>
  );
}
