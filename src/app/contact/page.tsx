import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import {
  ContactHero,
  ContactMethods,
  OfficeInformation,
  ContactForm,
  Faq,
  ConsultationProcess,
} from "@/components/contact";

export const metadata: Metadata = buildMetadata({
  fullTitle: "Contact KREBIG | Let's Start the Conversation",
  description:
    "Connect with KREBIG for business enquiries, partnerships, sales consultations, careers, or support. Let's build something meaningful together.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Contact", url: new URL("/contact", siteConfig.url).toString() },
          ]),
        )}
      />
      <ContactHero />
      <ContactMethods />
      <OfficeInformation />
      <ContactForm />
      <Faq />
      <ConsultationProcess />
    </>
  );
}
