"use client";

import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface PartnerStat {
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
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { staticText: "24/7", label: "Strategic Support" },
  { staticText: "AI-First", label: "Execution" },
];

export function PartnerStats({
  eyebrow = "Why Businesses Choose KREBIG",
  heading = "Trusted to Deliver Measurable Growth",
  description = "Businesses partner with KREBIG because we combine strategic thinking, creative execution and AI-powered operations into one accountable growth partnership.",
  stats = defaultStats,
}: PartnerStatsProps) {
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
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {stats.map((stat) => (
          <m.div key={stat.label} variants={fadeInUp}>
            <Card className="flex h-full flex-col items-center gap-1.5 p-6 text-center">
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
        ))}
      </m.div>
    </Section>
  );
}
