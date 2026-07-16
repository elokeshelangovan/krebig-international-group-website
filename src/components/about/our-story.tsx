"use client";

import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { StoryVisual } from "@/components/about/story-visual";

export interface OurStoryProps {
  eyebrow?: string;
  heading?: string;
  paragraphs?: string[];
}

const defaultParagraphs = [
  "Most businesses today work with a patchwork of agencies, consultants and technology vendors — each solving a different piece of the puzzle, but rarely working from the same strategy. The result is fragmented execution: disconnected campaigns, inconsistent branding and technology that doesn't talk to the rest of the business.",
  "KREBIG was created to close that gap. We bring strategy, creativity, technology and AI together under one accountable partner, so every decision, campaign and system works toward the same business outcome — not in isolation, but as one integrated growth engine.",
];

export function OurStory({
  eyebrow = "Our Story",
  heading = "Why KREBIG Was Created",
  paragraphs = defaultParagraphs,
}: OurStoryProps) {
  return (
    <Section id="our-story" aria-label="Our Story" tone="default" spacing="xl" containerSize="lg">
      <m.div
        className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <div className="flex flex-col items-start gap-6 text-left">
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
              <Text variant="body" className="text-muted-foreground text-pretty">
                {paragraph}
              </Text>
            </m.div>
          ))}
        </div>

        <m.div variants={fadeInUp}>
          <StoryVisual />
        </m.div>
      </m.div>
    </Section>
  );
}
