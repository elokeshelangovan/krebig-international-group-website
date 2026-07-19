"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { duration, easing } from "@/lib/motion/tokens";
import { ContactHeroVisual } from "@/components/contact/contact-hero-visual";

export interface ContactHeroProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function ContactHero({
  eyebrow = "Contact",
  heading = "Let's Start the Conversation",
  description = "Whether you're looking to grow your business, explore a partnership, discuss a project, or join our team, we're here to help. Connect with KREBIG and let's build something meaningful together.",
  primaryCtaLabel = "Schedule a Consultation",
  primaryCtaHref = "/contact/schedule-consultation",
  secondaryCtaLabel = "Send an Enquiry",
  secondaryCtaHref = "#contact-form",
}: ContactHeroProps) {
  return (
    <Section id="contact-hero" aria-label="Contact" tone="default" spacing="xl" containerSize="lg">
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
          <ContactHeroVisual />
        </m.div>
      </m.div>
    </Section>
  );
}
