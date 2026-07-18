import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { PartnershipModelPlaceholder } from "@/components/how-we-partner";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Enterprise Partnership Model | KREBIG International Group",
  description:
    "KREBIG's Enterprise partnership model helps large organizations drive digital transformation through strategy, technology consulting, and AI systems.",
  path: "/how-we-partner/enterprise",
});

export default function EnterprisePage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "How We Partner", url: new URL("/how-we-partner", siteConfig.url).toString() },
            {
              name: "Enterprise",
              url: new URL("/how-we-partner/enterprise", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <PartnershipModelPlaceholder
        icon={<Building2 className="size-8" strokeWidth={1.75} />}
        name="Enterprise"
        description="For large organizations and corporate brands pursuing enterprise-wide transformation."
        perfectFor={["Large organizations", "Corporate brands", "Enterprise transformation"]}
        focus={[
          "Digital Transformation",
          "Enterprise Strategy",
          "Technology Consulting",
          "AI Systems",
          "Long-term Strategic Partnership",
        ]}
      />
    </>
  );
}
