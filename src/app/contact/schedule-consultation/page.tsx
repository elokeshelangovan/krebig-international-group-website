import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { ScheduleConsultationPlaceholder } from "@/components/contact";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Schedule a Consultation | KREBIG International Group",
  description:
    "Online consultation booking is coming soon. Reach out to KREBIG directly and our team will help you find a time that works.",
  path: "/contact/schedule-consultation",
  noIndex: true,
});

export default function ScheduleConsultationPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Contact", url: new URL("/contact", siteConfig.url).toString() },
            {
              name: "Schedule a Consultation",
              url: new URL("/contact/schedule-consultation", siteConfig.url).toString(),
            },
          ]),
        )}
      />
      <ScheduleConsultationPlaceholder />
    </>
  );
}
