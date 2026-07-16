"use client";

import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { FlagIcon, EyeIcon } from "@/components/sections/about-icons";
import { SparklesIcon } from "@/components/sections/services-icons";

export interface Pillar {
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  mission?: Pillar;
  vision?: Pillar;
  aiFirst?: Pillar;
  stats?: Stat[];
}

const defaultMission: Pillar = {
  title: "Our Mission",
  description:
    "To engineer measurable growth for ambitious enterprises by fusing strategic thinking, world-class creative, and applied AI into a single accountable growth engine.",
};

const defaultVision: Pillar = {
  title: "Our Vision",
  description:
    "To be the AI-powered growth partner of choice for enterprises across the UAE, India, and global markets — where every discipline works together as one intelligent system.",
};

const defaultAiFirst: Pillar = {
  title: "An AI-First Business, By Design",
  description:
    "AI isn't a bolt-on service at KREBIG — it's embedded in how we plan, create, and operate. From strategy modeling to automated execution, every engagement is architected AI-first from the outset, so our teams move faster and our clients compound their advantage.",
};

const defaultStats: Stat[] = [
  { value: "4", label: "Specialized Divisions" },
  { value: "2", label: "Global Hubs — UAE & India" },
  { value: "100%", label: "AI-Augmented Delivery" },
  { value: "24/7", label: "Always-On Automation" },
];

export function About({
  eyebrow = "About KREBIG",
  heading = "Engineered for Growth. Built AI-First.",
  description = "KREBIG International Group exists to give ambitious enterprises a single, accountable partner for growth — one that thinks in strategy, executes with creative precision, and operates on AI from day one.",
  mission = defaultMission,
  vision = defaultVision,
  aiFirst = defaultAiFirst,
  stats = defaultStats,
}: AboutProps) {
  return (
    <Section id="about" aria-label="About KREBIG" tone="default" spacing="xl" containerSize="lg">
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
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <m.div variants={fadeInUp}>
          <Card className="h-full">
            <CardHeader>
              <span
                aria-hidden="true"
                className="bg-accent text-accent-foreground mb-2 flex size-12 items-center justify-center rounded-xl"
              >
                <FlagIcon className="size-6" />
              </span>
              <CardTitle>{mission.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {mission.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </m.div>
        <m.div variants={fadeInUp}>
          <Card className="h-full">
            <CardHeader>
              <span
                aria-hidden="true"
                className="bg-accent text-accent-foreground mb-2 flex size-12 items-center justify-center rounded-xl"
              >
                <EyeIcon className="size-6" />
              </span>
              <CardTitle>{vision.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {vision.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </m.div>
      </m.div>

      <m.div
        className="bg-primary text-primary-foreground rounded-card mt-6 flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center lg:mt-8 lg:p-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
      >
        <span
          aria-hidden="true"
          className="bg-primary-foreground/10 flex size-14 shrink-0 items-center justify-center rounded-2xl"
        >
          <SparklesIcon className="size-7" />
        </span>
        <div className="flex flex-col gap-2">
          <Heading level={3}>{aiFirst.title}</Heading>
          <Text variant="body" className="text-primary-foreground/85 text-pretty">
            {aiFirst.description}
          </Text>
        </div>
      </m.div>

      <m.div
        className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {stats.map((stat) => (
          <m.div key={stat.label} variants={fadeInUp}>
            <Card className="flex h-full flex-col items-center gap-1.5 p-6 text-center">
              <span className="text-primary text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
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
