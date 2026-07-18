"use client";

import type { LucideIcon } from "lucide-react";
import { Send, PhoneCall, Lightbulb, FileCheck2 } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { cn } from "@/lib/utils/cn";

export interface ConsultationStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ConsultationProcessProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  steps?: ConsultationStep[];
}

const defaultSteps: ConsultationStep[] = [
  {
    number: "01",
    icon: Send,
    title: "Submit Your Enquiry",
    description: "Share your business goals and requirements through our contact form.",
  },
  {
    number: "02",
    icon: PhoneCall,
    title: "Initial Consultation",
    description: "We schedule a call to understand your business and challenges.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Strategy Discussion",
    description: "Our team explores the right approach across strategy, creativity, and AI.",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Next Steps & Proposal",
    description: "You receive a clear proposal outlining scope, timeline, and next steps.",
  },
];

function StepCard({ step, className }: { step: ConsultationStep; className?: string }) {
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

export function ConsultationProcess({
  eyebrow = "Consultation Process",
  heading = "What Happens Next?",
  description = "Our process is simple, transparent, and focused on understanding your business before recommending the right solution.",
  steps = defaultSteps,
}: ConsultationProcessProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="consultation-process"
      aria-label="What Happens Next?"
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
        className="relative mt-16 hidden lg:grid lg:grid-cols-4 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <div
          aria-hidden="true"
          className="border-border pointer-events-none absolute top-7 right-[12%] left-[12%] border-t border-dashed"
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
