"use client";

import type { ComponentType } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { FlagIcon } from "@/components/sections/about-icons";
import { SparklesIcon, type IconProps } from "@/components/sections/services-icons";
import { WrenchIcon, ShieldIcon } from "@/components/sections/industries-icons";

export interface LeadershipPrinciple {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface LeadershipPhilosophyProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  principles?: LeadershipPrinciple[];
}

const defaultPrinciples: LeadershipPrinciple[] = [
  {
    icon: FlagIcon,
    title: "Think Long-Term",
    description: "We make decisions that compound in value over years, not just this quarter.",
  },
  {
    icon: WrenchIcon,
    title: "Execute With Discipline",
    description: "Consistent, structured execution turns strategy into real business outcomes.",
  },
  {
    icon: ShieldIcon,
    title: "Build With Integrity",
    description: "Every relationship is built on transparency, honesty and accountability.",
  },
  {
    icon: SparklesIcon,
    title: "Innovate Responsibly",
    description: "We adopt new technology and AI deliberately, always in service of the business.",
  },
];

export function LeadershipPhilosophy({
  eyebrow = "Leadership Philosophy",
  heading = "Leadership Built Around Business Growth",
  description = "KREBIG believes leadership is about creating clarity, empowering people, solving meaningful business problems and building organizations prepared for the future.",
  principles = defaultPrinciples,
}: LeadershipPhilosophyProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="leadership-philosophy"
      aria-label="Leadership Philosophy"
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
              <Card className="hover:shadow-dropdown duration-base ease-standard flex h-full flex-col items-center gap-2 p-6 text-center transition-shadow">
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
    </Section>
  );
}
