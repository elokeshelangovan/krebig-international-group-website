"use client";

import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import { Bot, Clock, Laptop } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { GraduationCapIcon } from "@/components/sections/divisions-icons";
import { TrendingUpIcon, type IconProps } from "@/components/sections/services-icons";
import { TargetIcon, PartnershipIcon } from "@/components/about/values-icons";
import { BadgeCheckIcon } from "@/components/careers/careers-icons";

export interface Benefit {
  icon: ComponentType<IconProps> | ComponentType<LucideProps>;
  title: string;
  description: string;
}

export interface BenefitsGrowthProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  benefits?: Benefit[];
}

const defaultBenefits: Benefit[] = [
  {
    icon: GraduationCapIcon,
    title: "Learning & Development",
    description: "Mentorship, training, and certifications to keep growing your skills.",
  },
  {
    icon: Bot,
    title: "AI-First Work Environment",
    description: "Work daily with AI tools that accelerate real business outcomes.",
  },
  {
    icon: TrendingUpIcon,
    title: "Career Growth Opportunities",
    description: "Clear paths to progress as your role and the business evolve.",
  },
  {
    icon: PartnershipIcon,
    title: "Collaborative Culture",
    description: "Cross-disciplinary teams that support and learn from each other.",
  },
  {
    icon: Clock,
    title: "Flexible Working Model",
    description: "Hybrid and remote options built around how your team works best.",
  },
  {
    icon: Laptop,
    title: "Modern Technology Stack",
    description: "Access to the platforms and tools that power scalable work.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Performance Recognition",
    description: "Contributions are noticed, celebrated, and rewarded.",
  },
  {
    icon: TargetIcon,
    title: "Meaningful Business Impact",
    description: "Your work directly shapes measurable outcomes for real clients.",
  },
];

export function BenefitsGrowth({
  eyebrow = "Benefits & Growth",
  heading = "Why Build Your Career at KREBIG",
  description = "Practical, everyday reasons our team chooses to grow their careers here.",
  benefits = defaultBenefits,
}: BenefitsGrowthProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="benefits-growth"
      aria-label="Benefits & Growth"
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
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6"
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
              <Card className="hover:shadow-dropdown duration-base ease-standard flex h-full flex-col items-center gap-2 p-6 text-center transition-shadow">
                <span
                  aria-hidden="true"
                  className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                >
                  <Icon className="size-6" strokeWidth={1.75} />
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
