"use client";

import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface IndustrySolutionsShowcaseProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
}

export function IndustrySolutionsShowcase({
  eyebrow = "Industries We Serve",
  heading = "Explore Industry Solutions",
  description = "Twelve industries, one adaptable approach — explore how KREBIG tailors strategy, creative, and technology to each sector below.",
}: IndustrySolutionsShowcaseProps) {
  return (
    <Section
      id="industry-showcase"
      aria-label="Explore Industry Solutions"
      tone="muted"
      spacing="xl"
      containerSize="lg"
    >
      <m.div
        className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <m.span
          variants={fadeInUp}
          className="border-border bg-accent text-accent-foreground inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase"
        >
          {eyebrow}
        </m.span>
        <m.div variants={fadeInUp}>
          <Heading level={2}>{heading}</Heading>
        </m.div>
        <m.div variants={fadeInUp}>
          <Text variant="lead" className="text-muted-foreground text-pretty">
            {description}
          </Text>
        </m.div>
      </m.div>

      {/* I2 will add the industry showcase grid/cards here. */}
    </Section>
  );
}
