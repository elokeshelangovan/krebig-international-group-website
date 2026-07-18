import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { LegalPlaceholder } from "@/components/legal";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Terms of Service | KREBIG International Group",
  description: "KREBIG's Terms of Service are being finalized and aren't published yet.",
  path: "/legal/terms-of-service",
  noIndex: true,
});

export default function TermsOfServicePage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            {
              name: "Terms of Service",
              url: new URL("/legal/terms-of-service", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <LegalPlaceholder name="Terms of Service" />
    </>
  );
}
