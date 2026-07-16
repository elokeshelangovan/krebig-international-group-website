"use client";

import type { ComponentType } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { BriefcaseIcon } from "@/components/sections/divisions-icons";
import {
  LayersIcon,
  TrendingUpIcon,
  SparklesIcon,
  type IconProps,
} from "@/components/sections/services-icons";
import { OfficeTowerIcon } from "@/components/sections/industries-icons";
import { PartnershipIcon } from "@/components/about/values-icons";

export interface WhyKrebigReason {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface WhyKrebigProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  reasons?: WhyKrebigReason[];
}

const defaultReasons: WhyKrebigReason[] = [
  {
    icon: BriefcaseIcon,
    title: "Business First",
    description: "Every engagement begins with business objectives.",
  },
  {
    icon: LayersIcon,
    title: "Integrated Expertise",
    description: "Strategy, creativity, technology and AI work together.",
  },
  {
    icon: PartnershipIcon,
    title: "Long-Term Partnership",
    description: "Focused on sustainable growth instead of short-term projects.",
  },
  {
    icon: TrendingUpIcon,
    title: "Measurable Outcomes",
    description: "Business decisions guided by data and performance.",
  },
  {
    icon: SparklesIcon,
    title: "AI-Enabled Execution",
    description: "AI accelerates delivery while people lead strategy.",
  },
  {
    icon: OfficeTowerIcon,
    title: "Enterprise Mindset",
    description: "Built for founders, leadership teams and growing organizations.",
  },
];

export function WhyKrebig({
  eyebrow = "Why KREBIG",
  heading = "Why Businesses Choose KREBIG",
  description = "Businesses don't need more vendors. They need one strategic partner capable of aligning business objectives, execution and long-term growth.",
  reasons = defaultReasons,
}: WhyKrebigProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="why-krebig" aria-label="Why KREBIG" tone="default" spacing="xl" containerSize="lg">
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
        <m.div variants={fadeInUp}>
          <Text variant="lead" className="text-muted-foreground text-pretty">
            {description}
          </Text>
        </m.div>
      </m.div>

      <m.div
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <m.div
              key={reason.title}
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
                  {reason.title}
                </Heading>
                <Text variant="small" className="text-muted-foreground text-pretty">
                  {reason.description}
                </Text>
              </Card>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
