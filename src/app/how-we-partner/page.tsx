import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import {
  PartnerHero,
  WhyPartner,
  PartnershipModels,
  PartnershipJourney,
  PartnerStats,
} from "@/components/how-we-partner";
import { FinalCta } from "@/components/about";

export const metadata: Metadata = buildMetadata({
  fullTitle: "How We Partner | KREBIG International Group",
  description:
    "KREBIG International Group partners with businesses through four growth models — Launch, Growth, Scale and Enterprise — powered by strategy, technology and AI.",
  path: "/how-we-partner",
});

export default function HowWePartnerPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "How We Partner", url: new URL("/how-we-partner", siteConfig.url).toString() },
          ]),
        )}
      />
      <PartnerHero />
      <WhyPartner />
      <PartnershipModels />
      <PartnershipJourney />
      <PartnerStats />
      <FinalCta
        heading="Let's Build Your Next Stage of Growth"
        description="Whether you're launching a new business, accelerating growth, scaling operations, or transforming an enterprise, KREBIG is ready to become your long-term business growth partner."
        primaryCtaLabel="Book a Consultation"
        primaryCtaHref="/contact"
        secondaryCtaLabel="Contact Our Team"
        secondaryCtaHref="/contact"
        secondaryIcon="none"
      />
    </>
  );
}
