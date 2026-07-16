"use client";

import type { ComponentType } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { ShieldIcon } from "@/components/sections/industries-icons";
import { CompassIcon, TrendingUpIcon, type IconProps } from "@/components/sections/services-icons";
import { GraduationCapIcon } from "@/components/sections/divisions-icons";
import { TargetIcon, PartnershipIcon, LightbulbIcon } from "@/components/about/values-icons";

export interface CoreValue {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface CoreValuesProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  values?: CoreValue[];
}

const defaultValues: CoreValue[] = [
  {
    icon: ShieldIcon,
    title: "Integrity",
    description: "We build trust through honesty, transparency and accountability.",
  },
  {
    icon: CompassIcon,
    title: "Strategic Thinking",
    description:
      "Every engagement begins with understanding business objectives before recommending solutions.",
  },
  {
    icon: TargetIcon,
    title: "Execution Excellence",
    description: "Great ideas matter only when they are executed consistently.",
  },
  {
    icon: LightbulbIcon,
    title: "Innovation",
    description: "We continuously explore better ways to create measurable business value.",
  },
  {
    icon: PartnershipIcon,
    title: "Partnership",
    description: "We succeed when our clients achieve sustainable growth.",
  },
  {
    icon: GraduationCapIcon,
    title: "Continuous Learning",
    description: "Technology evolves every day, and so do we.",
  },
  {
    icon: TrendingUpIcon,
    title: "Business Outcomes",
    description: "Our success is measured by business impact—not activity.",
  },
];

export function CoreValues({
  eyebrow = "Core Values",
  heading = "The Principles That Guide Every Decision",
  description = "Every decision at KREBIG is guided by a commitment to long-term business value, continuous improvement and measurable outcomes.",
  values = defaultValues,
}: CoreValuesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="core-values"
      aria-label="Core Values"
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
        <m.div variants={fadeInUp}>
          <Text variant="lead" className="text-muted-foreground text-pretty">
            {description}
          </Text>
        </m.div>
      </m.div>

      <m.div
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <m.div
              key={value.title}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:shadow-dropdown duration-base ease-standard relative flex h-full flex-col gap-2 p-6 transition-shadow">
                <span
                  aria-hidden="true"
                  className="text-muted-foreground/30 absolute top-6 right-6 font-mono text-xs"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard mb-2 flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                >
                  <Icon className="size-6" />
                </span>
                <Heading level={3} className="pr-6 text-base">
                  {value.title}
                </Heading>
                <Text variant="small" className="text-muted-foreground text-pretty">
                  {value.description}
                </Text>
              </Card>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
