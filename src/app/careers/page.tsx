import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { CareersHero, WhyJoinKrebig, LifeAtKrebig } from "@/components/careers";

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
    </>
  );
}
