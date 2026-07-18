"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { AboutHeroVisual } from "@/components/about/about-hero-visual";

export interface AboutHeroProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function AboutHero({
  eyebrow = "About KREBIG",
  heading = "Building Businesses That Are Ready For Tomorrow.",
  description = "KREBIG International Group partners with ambitious businesses to launch, grow, scale and transform through an integrated ecosystem of strategy, creativity, technology and artificial intelligence.",
  primaryCtaLabel = "Book Strategy Call",
  primaryCtaHref = "/contact",
  secondaryCtaLabel = "Contact Our Team",
  secondaryCtaHref = "/contact",
}: AboutHeroProps) {
  return (
    <Section
      id="about-hero"
      aria-label="About KREBIG"
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
          <AboutHeroVisual />
        </m.div>
      </m.div>
    </Section>
  );
}
