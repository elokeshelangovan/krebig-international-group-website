import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { DivisionPlaceholder } from "@/components/divisions";
import { GraduationCapIcon } from "@/components/sections/divisions-icons";

export const metadata: Metadata = buildMetadata({
  fullTitle: "KREBIG Academy | KREBIG International Group",
  description:
    "KREBIG Academy empowers professionals and businesses through practical learning, AI education, digital skills and leadership development.",
  path: "/divisions/academy",
});

export default function AcademyPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Divisions", url: new URL("/divisions", siteConfig.url).toString() },
            { name: "Academy", url: new URL("/divisions/academy", siteConfig.url).toString() },
          ]),
        )}
      />
      <DivisionPlaceholder
        icon={<GraduationCapIcon className="size-8" />}
        name="KREBIG Academy"
        description="Empowering professionals and businesses through practical learning, AI education, digital skills, leadership development, and business training."
        capabilities={[
          "Professional Training",
          "AI Education",
          "Digital Skills",
          "Business Workshops",
          "Leadership Development",
          "Corporate Learning",
        ]}
      />
    </>
  );
}
