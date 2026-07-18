"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { CompassIcon, LayersIcon, type IconProps } from "@/components/sections/services-icons";
import { TargetIcon, PartnershipIcon } from "@/components/about/values-icons";

export interface PhilosophyPrinciple {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface BusinessPhilosophyProps {
  eyebrow?: string;
  heading?: string;
  principles?: PhilosophyPrinciple[];
  ctaHeading?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

const defaultPrinciples: PhilosophyPrinciple[] = [
  {
    icon: CompassIcon,
    title: "Strategy First",
    description:
      "Every engagement begins with understanding business objectives before recommending solutions.",
  },
  {
    icon: LayersIcon,
    title: "Integrated Thinking",
    description: "Strategy, creativity, technology and AI work together—not independently.",
  },
  {
    icon: TargetIcon,
    title: "Execution Excellence",
    description: "Ideas create value only when they are executed consistently.",
  },
  {
    icon: PartnershipIcon,
    title: "Long-Term Partnership",
    description: "We measure success by long-term business outcomes, not project completion.",
  },
];

export function BusinessPhilosophy({
  eyebrow = "Business Philosophy",
  heading = "How We Think About Business Growth",
  principles = defaultPrinciples,
  ctaHeading = "Let's Build Sustainable Business Growth Together",
  primaryCtaLabel = "Book Strategy Call",
  primaryCtaHref = "/contact",
  secondaryCtaLabel = "Explore How We Partner",
  secondaryCtaHref = "/how-we-partner",
}: BusinessPhilosophyProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="business-philosophy"
      aria-label="Business Philosophy"
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

      <m.div
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {principles.map((principle) => {
          const Icon = principle.icon;
          return (
            <m.div
              key={principle.title}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:shadow-dropdown duration-base ease-standard flex h-full flex-col gap-2 p-6 transition-shadow">
                <span
                  aria-hidden="true"
                  className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard mb-2 flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                >
                  <Icon className="size-6" />
                </span>
                <Heading level={3} className="text-base">
                  {principle.title}
                </Heading>
                <Text variant="small" className="text-muted-foreground text-pretty">
                  {principle.description}
                </Text>
              </Card>
            </m.div>
          );
        })}
      </m.div>

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
