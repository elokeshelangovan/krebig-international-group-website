import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { PartnershipModelPlaceholder } from "@/components/how-we-partner";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Growth Partnership Model | KREBIG International Group",
  description:
    "KREBIG's Growth partnership model helps growing businesses scale through lead generation, performance marketing, SEO, and marketing automation.",
  path: "/how-we-partner/growth",
});

export default function GrowthPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "How We Partner", url: new URL("/how-we-partner", siteConfig.url).toString() },
            { name: "Growth", url: new URL("/how-we-partner/growth", siteConfig.url).toString() },
          ]),
        )}
      />
      <PartnershipModelPlaceholder
        icon={<TrendingUp className="size-8" strokeWidth={1.75} />}
        name="Growth"
        description="For growing businesses generating consistent revenue and expanding into new markets."
        perfectFor={[
          "Growing businesses",
          "Companies generating consistent revenue",
          "Businesses expanding into new markets",
        ]}
        focus={[
          "Lead Generation",
          "Performance Marketing",
          "SEO",
          "Content Strategy",
          "Marketing Automation",
        ]}
      />
    </>
  );
}
