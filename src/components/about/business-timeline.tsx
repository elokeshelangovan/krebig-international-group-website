"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { easing } from "@/lib/motion/tokens";

export interface Milestone {
  title: string;
  description: string;
}

export interface BusinessTimelineProps {
  eyebrow?: string;
  heading?: string;
  milestones?: Milestone[];
  ctaHeading?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

const defaultMilestones: Milestone[] = [
  {
    title: "Foundation",
    description:
      "Establishing KREBIG's core vision: one accountable partner combining strategy, creativity, technology and AI.",
  },
  {
    title: "Brand Development",
    description:
      "Shaping a distinct enterprise identity built on consistency, trust and premium execution.",
  },
  {
    title: "Digital Ecosystem",
    description:
      "Connecting strategy, creative and technology into a single, integrated growth engine.",
  },
  {
    title: "Enterprise Platform",
    description: "Scaling systems, processes and delivery to support enterprise-grade engagements.",
  },
  {
    title: "Global Expansion",
    description: "Extending KREBIG's reach across the UAE, India and international markets.",
  },
  {
    title: "Future Innovation",
    description: "Continuing to explore how AI reshapes strategy, creativity and business growth.",
  },
];

export function BusinessTimeline({
  eyebrow = "Our Journey",
  heading = "Building The Future — One Milestone At A Time",
  milestones = defaultMilestones,
  ctaHeading = "Great Businesses Are Built On Strong Foundations",
  primaryCtaLabel = "Explore Our Approach",
  primaryCtaHref = "/approach",
  secondaryCtaLabel = "Book Strategy Call",
  secondaryCtaHref = "/#contact",
}: BusinessTimelineProps) {
  return (
    <Section
      id="our-journey"
      aria-label="Our Journey"
      tone="default"
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
      </m.div>

      <div className="relative mx-auto mt-12 max-w-2xl lg:mt-16">
        <div aria-hidden="true" className="bg-border absolute top-0 bottom-0 left-[7px] w-px" />
        <m.div
          aria-hidden="true"
          className="bg-primary absolute top-0 left-[7px] w-px origin-top"
          style={{ height: "100%" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: easing.out }}
        />

        <m.ol
          className="flex flex-col gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {milestones.map((milestone) => (
            <m.li key={milestone.title} variants={fadeInUp} className="relative pl-10">
              <span
                aria-hidden="true"
                className="border-background bg-primary absolute top-1 left-0 size-4 rounded-full border-2"
              />
              <Heading level={3} className="text-lg">
                {milestone.title}
              </Heading>
              <Text variant="small" className="text-muted-foreground mt-1 text-pretty">
                {milestone.description}
              </Text>
            </m.li>
          ))}
        </m.ol>
      </div>

      <m.div
        className="mt-16 flex flex-col items-center gap-6 text-center lg:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <m.div variants={fadeInUp}>
          <Heading level={3}>{ctaHeading}</Heading>
        </m.div>
        <m.div variants={fadeInUp} className="flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
          </Button>
        </m.div>
      </m.div>
    </Section>
  );
}
