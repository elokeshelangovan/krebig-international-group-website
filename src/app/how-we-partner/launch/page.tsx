import type { Metadata } from "next";
import { Rocket } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { PartnershipModelPlaceholder } from "@/components/how-we-partner";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Launch Partnership Model | KREBIG International Group",
  description:
    "KREBIG's Launch partnership model helps startups and early-stage companies build brand identity, website, digital presence, and go-to-market strategy.",
  path: "/how-we-partner/launch",
});

export default function LaunchPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "How We Partner", url: new URL("/how-we-partner", siteConfig.url).toString() },
            { name: "Launch", url: new URL("/how-we-partner/launch", siteConfig.url).toString() },
          ]),
        )}
      />
      <PartnershipModelPlaceholder
        icon={<Rocket className="size-8" strokeWidth={1.75} />}
        name="Launch"
        description="For startups, new businesses, and early-stage companies building their foundation."
        perfectFor={["Startups", "New businesses", "Early-stage companies"]}
        focus={[
          "Brand Identity",
          "Website",
          "Digital Presence",
          "Go-to-Market Strategy",
          "Business Foundation",
        ]}
      />
    </>
  );
}
