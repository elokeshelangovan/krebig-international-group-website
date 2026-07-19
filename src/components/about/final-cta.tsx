"use client";

import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

const secondaryIcons = { download: Download, mail: Mail, none: null } as const;

export interface FinalCtaProps {
  heading?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  /** Icon rendered before the secondary CTA label. Defaults to "download"; pass "none" to omit. */
  secondaryIcon?: keyof typeof secondaryIcons;
}

export function FinalCta({
  heading = "Let's Build Your Next Growth Story",
  description = "Whether you're launching a new business, accelerating growth or preparing for enterprise transformation, KREBIG is ready to partner with you.",
  primaryCtaLabel = "Book Strategy Call",
  primaryCtaHref = "/contact",
  secondaryCtaLabel = "Contact Our Team",
  secondaryCtaHref = "/contact",
  secondaryIcon = "none",
}: FinalCtaProps) {
  const SecondaryIcon = secondaryIcons[secondaryIcon];
  return (
    <Section id="final-cta" aria-label={heading} tone="default" spacing="xl" containerSize="lg">
      <m.div
        className="rounded-card flex flex-col items-center gap-6 bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-950 p-8 text-center lg:p-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <m.div variants={fadeInUp}>
          <Heading level={2} className="text-white">
            {heading}
          </Heading>
        </m.div>
        <m.div variants={fadeInUp}>
          <Text variant="lead" className="max-w-2xl text-pretty text-neutral-300">
            {description}
          </Text>
        </m.div>
        <m.div variants={fadeInUp} className="flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="text-primary bg-white hover:bg-neutral-100">
            <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href={secondaryCtaHref}>
              {SecondaryIcon ? <SecondaryIcon aria-hidden="true" className="size-4" /> : null}
              {secondaryCtaLabel}
            </Link>
          </Button>
        </m.div>
      </m.div>
    </Section>
  );
}
