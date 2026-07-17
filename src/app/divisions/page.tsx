import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import {
  DivisionsHero,
  DivisionsIntro,
  DivisionsWorkflow,
  DivisionsShowcase,
} from "@/components/divisions";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Divisions | KREBIG International Group",
  description:
    "KREBIG's specialized divisions work as one integrated ecosystem, combining creativity, technology, education and strategy to deliver measurable growth.",
  path: "/divisions",
});

export default function DivisionsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Divisions", url: new URL("/divisions", siteConfig.url).toString() },
          ]),
        )}
      />
      <DivisionsHero />
      <DivisionsIntro />
      <DivisionsWorkflow />
      <DivisionsShowcase />
    </>
  );
}
