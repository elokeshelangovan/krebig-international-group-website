import type { Metadata } from "next";
import { Layers } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { PartnershipModelPlaceholder } from "@/components/how-we-partner";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Scale Partnership Model | KREBIG International Group",
  description:
    "KREBIG's Scale partnership model helps established, multi-location businesses grow through automation, AI integration, and data analytics.",
  path: "/how-we-partner/scale",
});

export default function ScalePage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "How We Partner", url: new URL("/how-we-partner", siteConfig.url).toString() },
            { name: "Scale", url: new URL("/how-we-partner/scale", siteConfig.url).toString() },
          ]),
        )}
      />
      <PartnershipModelPlaceholder
        icon={<Layers className="size-8" strokeWidth={1.75} />}
        name="Scale"
        description="For established, multi-location businesses ready to grow with more structure and automation."
        perfectFor={["Established businesses", "Multi-location companies", "Growing organizations"]}
        focus={[
          "Business Automation",
          "AI Integration",
          "Process Optimization",
          "Team Enablement",
          "Data Analytics",
        ]}
      />
    </>
  );
}
