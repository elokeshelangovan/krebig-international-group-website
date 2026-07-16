"use client";

import type { LucideIcon } from "lucide-react";
import { Search, Map, Rocket, Gauge, LineChart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { cn } from "@/lib/utils/cn";

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  steps?: ProcessStep[];
  ctaHeading?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

const defaultSteps: ProcessStep[] = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "Understand the business, goals, market, competitors, and opportunities.",
  },
  {
    number: "02",
    icon: Map,
    title: "Strategy",
    description:
      "Develop a clear roadmap with priorities, positioning, technology, and growth initiatives.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution",
    description: "Deliver creative, marketing, technology, automation, and operational solutions.",
  },
  {
    number: "04",
    icon: Gauge,
    title: "Optimization",
    description: "Measure performance, improve systems, refine campaigns, and increase efficiency.",
  },
  {
    number: "05",
    icon: LineChart,
    title: "Scale",
    description:
      "Expand into new markets, automate operations, and build long-term sustainable growth.",
  },
];

function StepCard({ step, className }: { step: ProcessStep; className?: string }) {
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

export function Process({
  eyebrow = "Our Process",
  heading = "From Vision to Sustainable Growth",
  description = "Every engagement follows a structured framework that aligns strategy, execution, technology, and continuous optimization—ensuring measurable business outcomes.",
  steps = defaultSteps,
  ctaHeading = "Ready to Start Your Growth Journey?",
  primaryCtaLabel = "Book a Strategy Call",
  primaryCtaHref = "/#contact",
  secondaryCtaLabel = "Explore Our Approach",
  secondaryCtaHref = "/#about",
}: ProcessProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="process" aria-label="Our Process" tone="muted" spacing="xl" containerSize="lg">
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

      {/* CTA */}
      <m.div
        className="mt-16 flex flex-col items-center gap-6 text-center lg:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <m.div variants={fadeInUp}>
          <Heading level={3}>{ctaHeading}</Heading>
        </m.div>
        <m.div variants={fadeInUp} className="flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
          </Button>
          <Link
            href={secondaryCtaHref}
            className="group text-primary duration-fast ease-standard hover:text-primary/80 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
          >
            {secondaryCtaLabel}
            <ArrowRight
              aria-hidden="true"
              className="duration-base ease-standard size-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </m.div>
      </m.div>
    </Section>
  );
}
