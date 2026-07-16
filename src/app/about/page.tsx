import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import {
  AboutHero,
  QuickFacts,
  CoreValues,
  LeadershipPhilosophy,
  BusinessTimeline,
} from "@/components/about";

export const metadata: Metadata = buildMetadata({
  fullTitle: "About KREBIG International Group | AI-Powered Business Growth Partner",
  description:
    "Learn about KREBIG International Group, our mission, vision, values and how we help businesses launch, grow, scale and transform through strategy, creativity, technology and AI.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "About", url: new URL("/about", siteConfig.url).toString() },
          ]),
        )}
      />
      <AboutHero />
      <QuickFacts />
      <CoreValues />
      <LeadershipPhilosophy />
      <BusinessTimeline />
    </>
  );
}
