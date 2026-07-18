import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { DivisionPlaceholder } from "@/components/divisions";
import { CodeIcon } from "@/components/sections/divisions-icons";

export const metadata: Metadata = buildMetadata({
  fullTitle: "KREBIG Technology | KREBIG International Group",
  description:
    "KREBIG Technology builds scalable digital products, intelligent automation, AI solutions and business technology for long-term growth.",
  path: "/divisions/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Divisions", url: new URL("/divisions", siteConfig.url).toString() },
            {
              name: "Technology",
              url: new URL("/divisions/technology", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <DivisionPlaceholder
        icon={<CodeIcon className="size-8" />}
        name="KREBIG Technology"
        description="Building scalable digital products, intelligent automation, AI solutions, websites, and business technology that enable long-term growth."
        capabilities={[
          "Website Development",
          "AI Automation",
          "Business Systems",
          "Custom Software",
          "Cloud Solutions",
          "Digital Transformation",
        ]}
      />
    </>
  );
}
