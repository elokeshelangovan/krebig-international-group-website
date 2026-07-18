"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { IndustrySolutionsHeroVisual } from "@/components/industry-solutions/industry-solutions-hero-visual";

export interface IndustrySolutionsHeroProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function IndustrySolutionsHero({
  eyebrow = "Industry Solutions",
  heading = "Solutions Designed Around Your Industry",
  description = "Every industry faces unique challenges, opportunities, and customer expectations. KREBIG combines strategy, creativity, technology, and AI to deliver industry-specific solutions that help businesses grow with confidence.",
  primaryCtaLabel = "Explore Industries",
  primaryCtaHref = "#industry-showcase",
  secondaryCtaLabel = "Talk to Our Team",
  secondaryCtaHref = "/contact",
}: IndustrySolutionsHeroProps) {
  return (
    <Section
      id="industry-solutions-hero"
      aria-label="Industry Solutions"
      tone="default"
      spacing="xl"
      containerSize="lg"
    >
      <m.div
        className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        initial="hidden"
        animate="visible"
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
            <Heading level={1}>{heading}</Heading>
          </m.div>

          <m.div variants={fadeInUp}>
            <Text variant="lead" className="text-muted-foreground max-w-xl text-pretty">
              {description}
            </Text>
          </m.div>

          <m.div variants={fadeInUp} className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </m.div>
        </div>

        <m.div variants={fadeInUp}>
          <IndustrySolutionsHeroVisual />
        </m.div>
      </m.div>
    </Section>
  );
}
