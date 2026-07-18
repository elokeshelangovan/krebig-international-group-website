import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { LegalPlaceholder } from "@/components/legal";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Privacy Policy | KREBIG International Group",
  description: "KREBIG's Privacy Policy is being finalized and isn't published yet.",
  path: "/legal/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            {
              name: "Privacy Policy",
              url: new URL("/legal/privacy-policy", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <LegalPlaceholder name="Privacy Policy" />
    </>
  );
}
