"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { duration, easing } from "@/lib/motion/tokens";
import { PartnerHeroVisual } from "@/components/how-we-partner/partner-hero-visual";

export interface PartnerHeroProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function PartnerHero({
  eyebrow = "How We Partner",
  heading = "Partnerships Built for Sustainable Business Growth",
  description = "Every business is at a different stage of growth. Our partnership model is designed to help you launch, grow, scale, and transform with the right strategy, technology, creativity, and execution.",
  primaryCtaLabel = "Book a Consultation",
  primaryCtaHref = "/contact",
  secondaryCtaLabel = "Explore Partnership Models",
  secondaryCtaHref = "#partnership-models",
}: PartnerHeroProps) {
  return (
    <Section
      id="partner-hero"
      aria-label="How We Partner"
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

          {/* Animated independently (not via the container's stagger) so the
              LCP-critical heading paints at full opacity as early as possible. */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.base, ease: easing.out }}
          >
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
          <PartnerHeroVisual />
        </m.div>
      </m.div>
    </Section>
  );
}
