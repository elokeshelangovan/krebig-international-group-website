import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema, contactPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import {
  ContactHero,
  ContactMethods,
  OfficeInformation,
  ContactForm,
  Faq,
  ConsultationProcess,
} from "@/components/contact";
import { FinalCta } from "@/components/about";

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
      <script
        {...jsonLdScriptProps(
          contactPageSchema({
            name: "Contact KREBIG",
            description:
              "Connect with KREBIG for business enquiries, partnerships, sales consultations, careers, or support.",
            url: new URL("/contact", siteConfig.url).toString(),
          }),
        )}
      />
      <ContactHero />
      <ContactMethods />
      <OfficeInformation />
      <ContactForm />
      <Faq />
      <ConsultationProcess />
      <FinalCta
        heading="Let's Build Something Exceptional Together"
        description="Whether you're exploring a new project, seeking strategic guidance, or looking for a long-term business growth partner, we're ready to help. Let's start the conversation."
        primaryCtaLabel="Book a Consultation"
        primaryCtaHref="#contact-form"
        secondaryCtaLabel="Email Our Team"
        secondaryCtaHref="mailto:info@krebiginternationalgroup.com"
        secondaryIcon="none"
      />
    </>
  );
}
