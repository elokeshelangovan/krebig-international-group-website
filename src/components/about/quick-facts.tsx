"use client";

import type { ComponentType } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { EyeIcon } from "@/components/sections/about-icons";
import { SparklesIcon, LayersIcon, type IconProps } from "@/components/sections/services-icons";
import { GlobeIcon } from "@/components/sections/divisions-icons";

export interface QuickFact {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface QuickFactsProps {
  eyebrow?: string;
  heading?: string;
  facts?: QuickFact[];
}

const defaultFacts: QuickFact[] = [
  {
    icon: EyeIcon,
    title: "Years of Vision",
    description:
      "A long-term vision for how strategy, creativity and technology should work as one system.",
  },
  {
    icon: SparklesIcon,
    title: "AI-First Approach",
    description: "AI is embedded in how we plan, create and operate — not bolted on afterward.",
  },
  {
    icon: GlobeIcon,
    title: "Global Business Focus",
    description: "Built to serve ambitious companies across the UAE, India and global markets.",
  },
  {
    icon: LayersIcon,
    title: "Integrated Growth Ecosystem",
    description: "One accountable partner, not a patchwork of disconnected vendors.",
  },
];

export function QuickFacts({
  eyebrow = "Quick Facts",
  heading = "What Defines KREBIG",
  facts = defaultFacts,
}: QuickFactsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="quick-facts" aria-label="Quick Facts" tone="muted" spacing="xl" containerSize="lg">
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
        {facts.map((fact) => {
          const Icon = fact.icon;
          return (
            <m.div
              key={fact.title}
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
                  {fact.title}
                </Heading>
                <Text variant="small" className="text-muted-foreground text-pretty">
                  {fact.description}
                </Text>
              </Card>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
