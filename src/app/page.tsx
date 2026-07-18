import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Divisions } from "@/components/sections/divisions";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { Insights } from "@/components/sections/insights";
import { Careers } from "@/components/sections/careers";
import { Contact } from "@/components/sections/contact";
import { Testimonials } from "@/components/sections/testimonials";
import { HowWePartner } from "@/components/sections/how-we-partner";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  fullTitle: "KREBIG International Group | AI-Powered Business Growth Partner",
  description:
    "KREBIG International Group helps businesses launch, grow, scale and transform through an integrated ecosystem of strategy, creativity, technology and AI.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          webPageSchema({
            name: "KREBIG International Group | AI-Powered Business Growth Partner",
            description:
              "KREBIG International Group helps businesses launch, grow, scale and transform through an integrated ecosystem of strategy, creativity, technology and AI.",
            url: siteConfig.url,
          }),
        )}
      />
      <Hero />
      <About />
      <Divisions />
      <Industries />
      <Process />
      <Portfolio />
      <Insights />
      <Careers />
      <Contact />
      <Testimonials />
      <HowWePartner />
    </>
  );
}
