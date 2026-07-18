"use client";

import type { ComponentType } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { TargetIcon, PartnershipIcon } from "@/components/about/values-icons";
import { LayersIcon, TrendingUpIcon, type IconProps } from "@/components/sections/services-icons";
import { PulseIcon, CpuIcon } from "@/components/sections/industries-icons";

export interface StructureBenefit {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface WhyStructureWorksProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  benefits?: StructureBenefit[];
}

const defaultBenefits: StructureBenefit[] = [
  {
    icon: TargetIcon,
    title: "Unified Strategy",
    description: "All divisions align around one business objective.",
  },
  {
    icon: PulseIcon,
    title: "Faster Execution",
    description: "Cross-functional collaboration reduces delays.",
  },
  {
    icon: LayersIcon,
    title: "Consistent Brand Experience",
    description: "Maintain quality across every customer touchpoint.",
  },
  {
    icon: CpuIcon,
    title: "AI-Driven Innovation",
    description: "Technology and automation accelerate growth.",
  },
  {
    icon: TrendingUpIcon,
    title: "Scalable Solutions",
    description: "Support businesses from startup to enterprise.",
  },
  {
    icon: PartnershipIcon,
    title: "Long-Term Partnership",
    description: "We grow alongside our clients through every stage.",
  },
];

export function WhyStructureWorks({
  eyebrow = "Why Our Structure Works",
  heading = "Why Businesses Choose an Integrated Partner",
  description = "Instead of managing multiple agencies or vendors, businesses work with one strategic partner that brings together complementary expertise under a unified vision.",
  benefits = defaultBenefits,
}: WhyStructureWorksProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="why-structure-works"
      aria-label="Why Businesses Choose an Integrated Partner"
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
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <m.div
              key={benefit.title}
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
                  {benefit.title}
                </Heading>
                <Text variant="small" className="text-muted-foreground text-pretty">
                  {benefit.description}
                </Text>
              </Card>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
