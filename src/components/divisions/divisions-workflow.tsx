"use client";

import type { LucideIcon } from "lucide-react";
import { Search, Compass, Palette, Code2, Rocket, TrendingUp } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { cn } from "@/lib/utils/cn";

export interface WorkflowStage {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface DivisionsWorkflowProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  stages?: WorkflowStage[];
}

const defaultStages: WorkflowStage[] = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "Understand the business, goals, market and opportunities.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategy",
    description: "Align priorities and define a clear, measurable roadmap.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Creative",
    description: "Craft brand, content and storytelling that resonates.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Technology",
    description: "Build the platforms, automation and AI that power growth.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Execution",
    description: "Bring strategy, creative and technology together in market.",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Growth",
    description: "Measure outcomes and scale what's working sustainably.",
  },
];

function StageCard({ stage, className }: { stage: WorkflowStage; className?: string }) {
  const Icon = stage.icon;
  return (
    <Card
      className={cn(
        "hover:shadow-dropdown duration-base ease-standard flex flex-col items-center gap-2 p-6 text-center transition-shadow",
        className,
      )}
    >
      <Icon aria-hidden="true" className="text-primary size-6" strokeWidth={1.75} />
      <Heading level={3} className="text-base">
        {stage.title}
      </Heading>
      <Text variant="small" className="text-muted-foreground text-pretty">
        {stage.description}
      </Text>
    </Card>
  );
}

function StageMarker({ number }: { number: string }) {
  return (
    <span
      aria-hidden="true"
      className="bg-primary text-primary-foreground ring-background shadow-dropdown relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full text-lg font-bold ring-4"
    >
      {number}
    </span>
  );
}

export function DivisionsWorkflow({
  eyebrow = "How Our Divisions Work Together",
  heading = "One Workflow. Every Division Aligned.",
  description = "From first conversation to measurable growth, every division plays a defined role in a single, connected process.",
  stages = defaultStages,
}: DivisionsWorkflowProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="divisions-workflow"
      aria-label="How Our Divisions Work Together"
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
        className="relative mt-16 hidden lg:grid lg:grid-cols-6 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <div
          aria-hidden="true"
          className="border-border pointer-events-none absolute top-7 right-[8%] left-[8%] border-t border-dashed"
        />
        {stages.map((stage) => (
          <m.div key={stage.number} variants={fadeInUp} className="flex flex-col items-center">
            <StageMarker number={stage.number} />
            <m.div
              className="mt-6 w-full"
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <StageCard stage={stage} className="h-full" />
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
        {stages.map((stage) => (
          <m.div key={stage.number} variants={fadeInUp} className="relative flex gap-5">
            <StageMarker number={stage.number} />
            <StageCard stage={stage} className="flex-1 items-start text-left" />
          </m.div>
        ))}
      </m.div>
    </Section>
  );
}
