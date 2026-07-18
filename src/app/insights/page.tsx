import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import {
  InsightsHero,
  FeaturedInsights,
  InsightsTopics,
  LatestArticles,
  BrowseByCategory,
  InsightsNewsletter,
} from "@/components/insights";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Insights | KREBIG International Group",
  description:
    "Explore KREBIG's insights on AI, business strategy, digital marketing, branding, and leadership to help your business grow with confidence.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Insights", url: new URL("/insights", siteConfig.url).toString() },
          ]),
        )}
      />
      <InsightsHero />
      <FeaturedInsights />
      <InsightsTopics />
      <LatestArticles />
      <BrowseByCategory />
      <InsightsNewsletter />
    </>
  );
}
