import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Divisions } from "@/components/sections/divisions";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { Insights } from "@/components/sections/insights";
import { Careers } from "@/components/sections/careers";
import { Testimonials } from "@/components/sections/testimonials";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Divisions />
      <Industries />
      <Process />
      <Portfolio />
      <Insights />
      <Careers />
      <Testimonials />
      <Services />
    </>
  );
}
