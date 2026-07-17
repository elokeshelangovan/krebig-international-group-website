"use client";

import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface DivisionsIntroProps {
  eyebrow?: string;
  heading?: string;
  paragraphs?: string[];
}

const defaultParagraphs: string[] = [
  "Our divisions combine creativity, technology, education, and strategy to help businesses grow faster, operate smarter, and adapt confidently in a rapidly changing world.",
  "Every division has a clear purpose, but together they create greater value through collaboration, innovation, and shared expertise.",
];

export function DivisionsIntro({
  eyebrow = "Introduction",
  heading = "An Integrated Business Ecosystem",
  paragraphs = defaultParagraphs,
}: DivisionsIntroProps) {
  return (
    <Section
      id="divisions-intro"
      aria-label="An Integrated Business Ecosystem"
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
        {paragraphs.map((paragraph) => (
          <m.div key={paragraph} variants={fadeInUp}>
            <Text variant="lead" className="text-muted-foreground text-pretty">
              {paragraph}
            </Text>
          </m.div>
        ))}
      </m.div>
    </Section>
  );
}
