import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Divisions } from "@/components/sections/divisions";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Divisions />
      <Services />
    </>
  );
}
