"use client";

import type { ComponentType } from "react";
import { Users } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { PartnershipIcon } from "@/components/about/values-icons";
import { CompassIcon, TrendingUpIcon, type IconProps } from "@/components/sections/services-icons";
import { CpuIcon } from "@/components/sections/industries-icons";
import { ChartBarIcon } from "@/components/how-we-partner/partner-icons";

export interface ExpertiseBenefit {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface WhyIndustryExpertiseMattersProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  benefits?: ExpertiseBenefit[];
}

const defaultBenefits: ExpertiseBenefit[] = [
  {
    icon: CompassIcon,
    title: "Industry Understanding",
    description: "We tailor every strategy to your industry's unique needs.",
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    description: "Solutions built around customer expectations and buying behavior.",
  },
  {
    icon: CpuIcon,
    title: "AI-Powered Innovation",
    description: "Leverage automation and intelligent technologies to improve efficiency.",
  },
  {
    icon: ChartBarIcon,
    title: "Data-Driven Decisions",
    description: "Strategies guided by analytics, insights, and measurable outcomes.",
  },
  {
    icon: TrendingUpIcon,
    title: "Scalable Growth",
    description: "Solutions that evolve as your business grows.",
  },
  {
    icon: PartnershipIcon,
    title: "Long-Term Partnership",
    description: "Supporting your business through every stage of growth.",
  },
];

export function WhyIndustryExpertiseMatters({
  eyebrow = "Why It Matters",
  heading = "Why Industry Expertise Matters",
  description = "Every industry has unique customer behaviors, operational challenges, regulations, and growth opportunities. Our approach combines deep business understanding with strategy, creativity, technology, and AI to deliver solutions that create measurable impact.",
  benefits = defaultBenefits,
}: WhyIndustryExpertiseMattersProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="why-industry-expertise-matters"
      aria-label="Why Industry Expertise Matters"
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
