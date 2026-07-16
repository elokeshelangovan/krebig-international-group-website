"use client";

import type { ComponentType } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import {
  TrendingUpIcon,
  MegaphoneIcon,
  type IconProps,
} from "@/components/sections/services-icons";
import { WrenchIcon } from "@/components/sections/industries-icons";
import { CodeIcon, GlobeIcon } from "@/components/sections/divisions-icons";
import { FlagIcon } from "@/components/sections/about-icons";

export interface BusinessOutcome {
  icon: ComponentType<IconProps>;
  label: string;
}

export interface BusinessOutcomesProps {
  eyebrow?: string;
  heading?: string;
  outcomes?: BusinessOutcome[];
}

const defaultOutcomes: BusinessOutcome[] = [
  { icon: TrendingUpIcon, label: "Revenue Growth" },
  { icon: WrenchIcon, label: "Operational Efficiency" },
  { icon: MegaphoneIcon, label: "Customer Acquisition" },
  { icon: FlagIcon, label: "Brand Positioning" },
  { icon: CodeIcon, label: "Digital Transformation" },
  { icon: GlobeIcon, label: "Market Expansion" },
];

export function BusinessOutcomes({
  eyebrow = "Business Outcomes",
  heading = "What Success Looks Like",
  outcomes = defaultOutcomes,
}: BusinessOutcomesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="business-outcomes"
      aria-label="Business Outcomes"
      tone="muted"
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
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-16 lg:grid-cols-6 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {outcomes.map((outcome) => {
          const Icon = outcome.icon;
          return (
            <m.div
              key={outcome.label}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:shadow-dropdown duration-base ease-standard flex h-full flex-col items-center gap-3 p-6 text-center transition-shadow">
                <span
                  aria-hidden="true"
                  className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                >
                  <Icon className="size-6" />
                </span>
                <Text variant="small" className="text-foreground font-semibold">
                  {outcome.label}
                </Text>
              </Card>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
