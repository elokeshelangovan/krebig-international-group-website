import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { IndustryPlaceholder } from "@/components/industry-solutions";
import { ShoppingBagIcon } from "@/components/sections/industries-icons";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Retail & E-Commerce Solutions | KREBIG International Group",
  description:
    "KREBIG helps retailers increase online visibility, improve customer engagement, and grow revenue through digital transformation.",
  path: "/industries/retail-ecommerce",
});

export default function RetailEcommercePage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Industry Solutions", url: new URL("/industries", siteConfig.url).toString() },
            {
              name: "Retail & E-Commerce",
              url: new URL("/industries/retail-ecommerce", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <IndustryPlaceholder
        icon={<ShoppingBagIcon className="size-8" />}
        name="Retail & E-Commerce"
        description="Helping retailers increase online visibility, improve customer engagement, and grow revenue through digital transformation."
        focusAreas={[
          "E-Commerce",
          "Performance Marketing",
          "SEO",
          "Social Media",
          "Automation",
          "Analytics",
        ]}
      />
    </>
  );
}
