"use client";

import type { LucideIcon } from "lucide-react";
import { Send, Search, Users, ClipboardCheck, Award } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { cn } from "@/lib/utils/cn";

export interface HiringStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface HiringProcessProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  steps?: HiringStep[];
}

const defaultSteps: HiringStep[] = [
  {
    number: "01",
    icon: Send,
    title: "Apply",
    description: "Submit your application.",
  },
  {
    number: "02",
    icon: Search,
    title: "Review",
    description: "Our recruitment team reviews your profile.",
  },
  {
    number: "03",
    icon: Users,
    title: "Interview",
    description: "Meet the team and discuss your experience.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Assessment",
    description: "Role-specific evaluation where applicable.",
  },
  {
    number: "05",
    icon: Award,
    title: "Offer",
    description: "Receive your offer and onboarding plan.",
  },
];

function StepCard({ step, className }: { step: HiringStep; className?: string }) {
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

export function HiringProcess({
  eyebrow = "Our Hiring Process",
  heading = "Simple. Transparent. Professional.",
  description = "Our hiring process is designed to help both candidates and our team find the right long-term fit.",
  steps = defaultSteps,
}: HiringProcessProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="hiring-process"
      aria-label="Our Hiring Process"
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
