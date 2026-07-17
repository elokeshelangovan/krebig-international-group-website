"use client";

import type { LucideIcon } from "lucide-react";
import { Search, Map, Rocket, Gauge, LineChart } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { cn } from "@/lib/utils/cn";

export interface JourneyStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PartnershipJourneyProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  steps?: JourneyStep[];
}

const defaultSteps: JourneyStep[] = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "Understand your business, goals, market and growth opportunities.",
  },
  {
    number: "02",
    icon: Map,
    title: "Strategy",
    description: "Build a clear roadmap aligned to priorities, positioning and growth stage.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution",
    description: "Deliver strategy, creative, technology and AI-powered execution.",
  },
  {
    number: "04",
    icon: Gauge,
    title: "Optimization",
    description: "Measure performance and continuously refine for better outcomes.",
  },
  {
    number: "05",
    icon: LineChart,
    title: "Scale",
    description: "Expand what works into new markets, channels and capabilities.",
  },
];

function StepCard({ step, className }: { step: JourneyStep; className?: string }) {
  const Icon = step.icon;
  return (
    <Card
      className={cn(
        "hover:shadow-dropdown duration-base ease-standard flex flex-col items-center gap-2 p-6 text-center transition-shadow",
        className,
      )}
    >
      <Icon aria-hidden="true" className="text-primary size-6" strokeWidth={1.75} />
      <Heading level={3} className="text-base">
        {step.title}
      </Heading>
      <Text variant="small" className="text-muted-foreground text-pretty">
        {step.description}
      </Text>
    </Card>
  );
}

function StepMarker({ number }: { number: string }) {
  return (
    <span
      aria-hidden="true"
      className="bg-primary text-primary-foreground ring-background shadow-dropdown relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full text-lg font-bold ring-4"
    >
      {number}
    </span>
  );
}

export function PartnershipJourney({
  eyebrow = "Our Partnership Journey",
  heading = "A Structured Path From Discovery to Scale",
  description = "Every partnership follows a proven framework that turns strategy into measurable business outcomes.",
  steps = defaultSteps,
}: PartnershipJourneyProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="partnership-journey"
      aria-label="Our Partnership Journey"
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

      {/* Desktop: horizontal timeline */}
      <m.div
        className="relative mt-16 hidden lg:grid lg:grid-cols-5 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <div
          aria-hidden="true"
          className="border-border pointer-events-none absolute top-7 right-[10%] left-[10%] border-t border-dashed"
        />
        {steps.map((step) => (
          <m.div key={step.number} variants={fadeInUp} className="flex flex-col items-center">
            <StepMarker number={step.number} />
            <m.div
              className="mt-6 w-full"
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <StepCard step={step} className="h-full" />
            </m.div>
          </m.div>
        ))}
      </m.div>

      {/* Mobile / tablet: vertical timeline */}
      <m.div
        className="relative mt-12 flex flex-col gap-6 lg:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <div
          aria-hidden="true"
          className="border-border pointer-events-none absolute top-7 bottom-7 left-7 border-l border-dashed"
        />
        {steps.map((step) => (
          <m.div key={step.number} variants={fadeInUp} className="relative flex gap-5">
            <StepMarker number={step.number} />
            <StepCard step={step} className="flex-1 items-start text-left" />
          </m.div>
        ))}
      </m.div>
    </Section>
  );
}
