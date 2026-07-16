"use client";

import type { LucideIcon } from "lucide-react";
import { Bot, TrendingUp, Newspaper, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface InsightTopic {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

export interface InsightsProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  topics?: InsightTopic[];
  ctaHeading?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

const defaultTopics: InsightTopic[] = [
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Discover how AI is transforming marketing, operations, customer experience, and business growth.",
    ctaLabel: "Read More",
    href: "/insights/ai-automation",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Strategies, frameworks, and practical guides to help businesses launch, grow, and scale.",
    ctaLabel: "Read More",
    href: "/insights/business-growth",
  },
  {
    icon: Newspaper,
    title: "Industry Insights",
    description: "Latest trends, market analysis, and opportunities across multiple industries.",
    ctaLabel: "Read More",
    href: "/insights/industry-insights",
  },
  {
    icon: BookOpen,
    title: "Resources & Guides",
    description: "Download checklists, playbooks, frameworks, and implementation guides.",
    ctaLabel: "Explore Resources",
    href: "/resources",
  },
];

export function Insights({
  eyebrow = "Insights",
  heading = "Insights That Drive Better Business Decisions",
  description = "Stay ahead with practical insights, strategic thinking, industry trends, AI innovations, and growth frameworks designed for modern businesses.",
  topics = defaultTopics,
  ctaHeading = "Explore More Insights",
  primaryCtaLabel = "Visit Knowledge Hub",
  primaryCtaHref = "/insights",
  secondaryCtaLabel = "View All Articles",
  secondaryCtaHref = "/insights/articles",
}: InsightsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="insights" aria-label="Insights" tone="default" spacing="xl" containerSize="lg">
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
              <Card className="hover:border-primary/30 hover:shadow-dropdown duration-base ease-standard flex h-full flex-col justify-between transition-[border-color,box-shadow]">
                <CardHeader>
                  <span
                    aria-hidden="true"
                    className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard mb-2 flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                  >
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <CardTitle>{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={topic.href}
                    className="group/link text-primary duration-fast ease-standard hover:text-primary/80 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  >
                    {topic.ctaLabel}
                    <ArrowRight
                      aria-hidden="true"
                      className="duration-base ease-standard size-4 transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </CardFooter>
              </Card>
            </m.div>
          );
        })}
      </m.div>

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
