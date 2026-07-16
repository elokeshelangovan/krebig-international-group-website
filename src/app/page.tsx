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
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/seo/schema";

export default function Home() {
  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbSchema([{ name: "Home", url: siteConfig.url }]))} />
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
