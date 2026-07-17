"use client";

import type { ComponentType } from "react";
import { CheckCircle2, Clock, type LucideIcon } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { StarIcon } from "@/components/sections/testimonials-icons";
import { CompassIcon, SparklesIcon, type IconProps } from "@/components/sections/services-icons";
import { PartnershipIcon } from "@/components/about/values-icons";

export interface PartnerStat {
  icon: ComponentType<IconProps> | LucideIcon;
  label: string;
  value?: number;
  suffix?: string;
  staticText?: string;
}

export interface PartnerStatsProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  stats?: PartnerStat[];
}

const defaultStats: PartnerStat[] = [
  { icon: StarIcon, value: 98, suffix: "%", label: "Client Satisfaction" },
  { icon: CheckCircle2, value: 250, suffix: "+", label: "Projects Delivered" },
  { icon: Clock, staticText: "24/7", label: "Strategic Support" },
  { icon: SparklesIcon, staticText: "AI-First", label: "Execution" },
  { icon: CompassIcon, staticText: "Custom Strategy", label: "For Every Client" },
  { icon: PartnershipIcon, staticText: "Long-Term", label: "Growth Partner" },
];

export function PartnerStats({
  eyebrow = "Why KREBIG",
  heading = "Why Businesses Choose KREBIG",
  description = "Businesses choose KREBIG because we focus on measurable outcomes, long-term partnerships, and AI-powered execution—not just delivering services.",
  stats = defaultStats,
}: PartnerStatsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="partner-stats"
      aria-label="Why Businesses Choose KREBIG"
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
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-16 lg:grid-cols-6 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <m.div
              key={stat.label}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:border-primary/30 hover:shadow-dropdown duration-base ease-standard flex h-full flex-col items-center gap-2 p-6 text-center transition-[border-color,box-shadow]">
                <span
                  aria-hidden="true"
                  className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard mb-1 flex size-11 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <span className="text-primary text-2xl font-bold tracking-tight sm:text-3xl">
                  {stat.value !== undefined ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.staticText
                  )}
                </span>
                <Text variant="small" className="text-muted-foreground">
                  {stat.label}
                </Text>
              </Card>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
