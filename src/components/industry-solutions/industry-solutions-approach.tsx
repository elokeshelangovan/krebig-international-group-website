"use client";

import type { LucideIcon } from "lucide-react";
import { Search, AlertTriangle, Compass, Rocket, BarChart3, TrendingUp } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { cn } from "@/lib/utils/cn";

export interface ApproachStage {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface IndustrySolutionsApproachProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  stages?: ApproachStage[];
}

const defaultStages: ApproachStage[] = [
  {
    number: "01",
    icon: Search,
    title: "Understand Industry",
    description: "Learn your market, customers, and competitive landscape.",
  },
  {
    number: "02",
    icon: AlertTriangle,
    title: "Identify Challenges",
    description: "Pinpoint the barriers holding your industry back.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Build Strategy",
    description: "Design a clear, measurable plan built for your sector.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Execute Solutions",
    description: "Deploy strategy, creative, and technology together.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Measure Results",
    description: "Track performance against real business outcomes.",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Scale Growth",
    description: "Expand what works and compound long-term growth.",
  },
];

function StageCard({ stage, className }: { stage: ApproachStage; className?: string }) {
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

export function IndustrySolutionsApproach({
  eyebrow = "How We Work",
  heading = "Our Approach",
  description = "A repeatable six-stage process that adapts strategy, creativity, and technology to the realities of your industry.",
  stages = defaultStages,
}: IndustrySolutionsApproachProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="industry-solutions-approach"
      aria-label="Our Approach"
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
