"use client";

import type { ComponentType } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { GraduationCapIcon } from "@/components/sections/divisions-icons";
import { TrendingUpIcon, type IconProps } from "@/components/sections/services-icons";
import { TargetIcon, PartnershipIcon, LightbulbIcon } from "@/components/about/values-icons";
import { BadgeCheckIcon } from "@/components/careers/careers-icons";

export interface CareerValue {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface WhyJoinKrebigProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  values?: CareerValue[];
}

const defaultValues: CareerValue[] = [
  {
    icon: GraduationCapIcon,
    title: "Continuous Learning",
    description:
      "Ongoing mentorship, training, and exposure to new tools so your skills keep pace with the industry.",
  },
  {
    icon: LightbulbIcon,
    title: "Innovation First",
    description: "We encourage fresh thinking and give people the room to experiment and build.",
  },
  {
    icon: PartnershipIcon,
    title: "Collaboration",
    description:
      "Cross-disciplinary teams working together across strategy, creative, technology, and AI.",
  },
  {
    icon: TargetIcon,
    title: "Ownership",
    description: "Autonomy to lead projects, make decisions, and be accountable for outcomes.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Client Success",
    description: "Everything we do is measured by the real business impact we create for clients.",
  },
  {
    icon: TrendingUpIcon,
    title: "Long-Term Growth",
    description:
      "Clear paths to develop your career as the business and your role evolve together.",
  },
];

export function WhyJoinKrebig({
  eyebrow = "Why Join KREBIG",
  heading = "More Than a Workplace",
  description = "We're building an environment where talented people can grow professionally, collaborate across disciplines, embrace innovation, and create meaningful impact for businesses around the world.",
  values = defaultValues,
}: WhyJoinKrebigProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="why-join-krebig"
      aria-label="Why Join KREBIG"
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
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <m.div
              key={value.title}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:border-primary/30 hover:shadow-dropdown duration-base ease-standard flex h-full flex-col gap-2 p-6 transition-[border-color,box-shadow]">
                <span
                  aria-hidden="true"
                  className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard mb-2 flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                >
                  <Icon className="size-6" />
                </span>
                <Heading level={3} className="text-base">
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
