"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface FinalCtaProps {
  heading?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function FinalCta({
  heading = "Let's Build Your Next Growth Story",
  description = "Whether you're launching a new business, accelerating growth or preparing for enterprise transformation, KREBIG is ready to partner with you.",
  primaryCtaLabel = "Book Strategy Call",
  primaryCtaHref = "/#contact",
  secondaryCtaLabel = "Download Company Profile",
  secondaryCtaHref = "/company-profile.pdf",
}: FinalCtaProps) {
  return (
    <Section
      id="final-cta"
      aria-label="Let's Build Your Next Growth Story"
      tone="default"
      spacing="xl"
      containerSize="lg"
    >
      <m.div
        className="from-primary to-accent-foreground text-primary-foreground rounded-card flex flex-col items-center gap-6 bg-gradient-to-br p-8 text-center lg:p-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <m.div variants={fadeInUp}>
          <Heading level={2} className="text-primary-foreground">
            {heading}
          </Heading>
        </m.div>
        <m.div variants={fadeInUp}>
          <Text variant="lead" className="text-primary-foreground/85 max-w-2xl text-pretty">
            {description}
          </Text>
        </m.div>
        <m.div variants={fadeInUp} className="flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
            <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
          >
            <Link href={secondaryCtaHref}>
              <Download aria-hidden="true" className="size-4" />
              {secondaryCtaLabel}
            </Link>
          </Button>
        </m.div>
      </m.div>
    </Section>
  );
}
