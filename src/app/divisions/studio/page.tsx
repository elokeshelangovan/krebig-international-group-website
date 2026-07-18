import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { DivisionPlaceholder } from "@/components/divisions";
import { FilmIcon } from "@/components/sections/divisions-icons";

export const metadata: Metadata = buildMetadata({
  fullTitle: "KREBIG Studio | KREBIG International Group",
  description:
    "KREBIG Studio produces premium visual experiences through photography, videography, creative storytelling and AI-powered content creation.",
  path: "/divisions/studio",
});

export default function StudioPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Divisions", url: new URL("/divisions", siteConfig.url).toString() },
            { name: "Studio", url: new URL("/divisions/studio", siteConfig.url).toString() },
          ]),
        )}
      />
      <DivisionPlaceholder
        icon={<FilmIcon className="size-8" />}
        name="KREBIG Studio"
        description="Producing premium visual experiences through photography, videography, creative storytelling, post-production, and AI-powered content creation."
        capabilities={[
          "Video Production",
          "Photography",
          "Post Production",
          "Motion Graphics",
          "AI Content Creation",
          "Creative Direction",
        ]}
      />
    </>
  );
}
