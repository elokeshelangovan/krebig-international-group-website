import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { IndustryPlaceholder } from "@/components/industry-solutions";
import { BookOpenIcon } from "@/components/sections/industries-icons";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Education & Training Solutions | KREBIG International Group",
  description:
    "KREBIG helps educational institutions and training providers attract learners through modern digital experiences.",
  path: "/industries/education",
});

export default function EducationPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Industry Solutions", url: new URL("/industries", siteConfig.url).toString() },
            {
              name: "Education & Training",
              url: new URL("/industries/education", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <IndustryPlaceholder
        icon={<BookOpenIcon className="size-8" />}
        name="Education & Training"
        description="Helping educational institutions and training providers attract learners through modern digital experiences."
        focusAreas={[
          "Learning Platforms",
          "Branding",
          "Digital Marketing",
          "AI Education",
          "Content Strategy",
          "Automation",
        ]}
      />
    </>
  );
}
