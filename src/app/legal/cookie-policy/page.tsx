import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { LegalPlaceholder } from "@/components/legal";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Cookie Policy | KREBIG International Group",
  description: "KREBIG's Cookie Policy is being finalized and isn't published yet.",
  path: "/legal/cookie-policy",
  noIndex: true,
});

export default function CookiePolicyPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            {
              name: "Cookie Policy",
              url: new URL("/legal/cookie-policy", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <LegalPlaceholder name="Cookie Policy" />
    </>
  );
}
