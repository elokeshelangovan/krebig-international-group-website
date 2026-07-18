"use client";

import type { ComponentType } from "react";
import { Bot, Award, Newspaper } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { MegaphoneIcon, CompassIcon, PenToolIcon } from "@/components/sections/services-icons";
import { CodeIcon } from "@/components/sections/divisions-icons";
import { LightbulbIcon } from "@/components/about/values-icons";
import type { IconProps } from "@/components/sections/services-icons";

export interface InsightTopicItem {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface InsightsTopicsProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  topics?: InsightTopicItem[];
}

const defaultTopics: InsightTopicItem[] = [
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Practical ways AI and automation accelerate business performance.",
  },
  {
    icon: MegaphoneIcon,
    title: "Digital Marketing",
    description: "Strategies for visibility, engagement, and measurable growth.",
  },
  {
    icon: CompassIcon,
    title: "Business Strategy",
    description: "Frameworks and thinking for confident, informed decisions.",
  },
  {
    icon: CodeIcon,
    title: "Technology",
    description: "Platforms and systems that power scalable businesses.",
  },
  {
    icon: PenToolIcon,
    title: "Branding",
    description: "Building brands that earn trust and stand apart.",
  },
  {
    icon: Award,
    title: "Leadership",
    description: "Perspectives on leading teams through change and growth.",
  },
  {
    icon: Newspaper,
    title: "Industry Insights",
    description: "Trends and shifts shaping businesses across sectors.",
  },
  {
    icon: LightbulbIcon,
    title: "Innovation",
    description: "Fresh thinking on what's next for modern business.",
  },
];

export function InsightsTopics({
  eyebrow = "Explore by Topic",
  heading = "Topics We Cover",
  description = "Insights organized around the subjects that matter most to modern businesses.",
  topics = defaultTopics,
}: InsightsTopicsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="insights-topics"
      aria-label="Topics We Cover"
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
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {topics.map((topic) => {
          const Icon = topic.icon;
          return (
            <m.div
              key={topic.title}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:border-primary/30 hover:shadow-dropdown duration-base ease-standard flex h-full flex-col gap-2 p-6 transition-[border-color,box-shadow]">
                <span
                  aria-hidden="true"
                  className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard mb-2 flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                >
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <Heading level={3} className="text-base">
                  {topic.title}
                </Heading>
                <Text variant="small" className="text-muted-foreground text-pretty">
                  {topic.description}
                </Text>
              </Card>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
