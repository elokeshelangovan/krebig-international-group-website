import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema, blogSchema, webPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import {
  InsightsHero,
  FeaturedInsights,
  InsightsTopics,
  LatestArticles,
  BrowseByCategory,
  InsightsNewsletter,
} from "@/components/insights";
import { defaultArticles } from "@/components/insights/data";
import { FinalCta } from "@/components/about";

export const metadata: Metadata = buildMetadata({
  fullTitle: "KREBIG Insights | Business Strategy, AI, Marketing & Leadership",
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
      <script
        {...jsonLdScriptProps(
          webPageSchema({
            name: "KREBIG Insights",
            description:
              "Explore KREBIG's insights on AI, business strategy, digital marketing, branding, and leadership to help your business grow with confidence.",
            url: new URL("/insights", siteConfig.url).toString(),
          }),
        )}
      />
      <script
        {...jsonLdScriptProps(
          blogSchema(
            defaultArticles.map((article) => ({
              title: article.title,
              description: article.summary,
              url: new URL(article.href, siteConfig.url).toString(),
              datePublished: article.publishedAt,
              author: article.author,
            })),
          ),
        )}
      />
      <InsightsHero />
      <FeaturedInsights />
      <InsightsTopics />
      <LatestArticles />
      <BrowseByCategory />
      <InsightsNewsletter />
      <FinalCta
        heading="Ready to Turn Insights into Business Growth?"
        description="Reading is only the beginning. Partner with KREBIG to transform ideas, strategies, and innovation into measurable business results through integrated expertise in strategy, creativity, technology, and AI."
        primaryCtaLabel="Book a Strategy Session"
        primaryCtaHref="/contact"
        secondaryCtaLabel="Contact Our Experts"
        secondaryCtaHref="/contact"
        secondaryIcon="none"
      />
    </>
  );
}
