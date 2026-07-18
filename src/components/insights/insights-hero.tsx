"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { InsightsHeroVisual } from "@/components/insights/insights-hero-visual";

export interface InsightsHeroProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function InsightsHero({
  eyebrow = "Insights",
  heading = "Ideas That Drive Business Growth",
  description = "Explore expert perspectives, practical strategies, industry trends, AI innovations, and digital transformation insights designed to help businesses make smarter decisions and achieve sustainable growth.",
  primaryCtaLabel = "Explore Insights",
  primaryCtaHref = "#featured-insights",
  secondaryCtaLabel = "Contact Our Experts",
  secondaryCtaHref = "/#contact",
}: InsightsHeroProps) {
  return (
    <Section
      id="insights-hero"
      aria-label="Insights"
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
          <InsightsHeroVisual />
        </m.div>
      </m.div>
    </Section>
  );
}
