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
    "KREBIG International Group partners with ambitious businesses through four growth-stage models — Launch, Growth, Scale and Enterprise — built on strategy, technology, creativity and AI.",
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
        description="Whichever stage your business is at, KREBIG is ready to partner with you on the strategy, technology and execution to get there."
        primaryCtaLabel="Book a Consultation"
        primaryCtaHref="/#contact"
        secondaryCtaLabel="Contact Our Team"
        secondaryCtaHref="mailto:hello@krebig.com"
        secondaryIcon="mail"
      />
    </>
  );
}
