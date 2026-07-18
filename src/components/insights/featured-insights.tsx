"use client";

import Link from "next/link";
import { Bot, User, Calendar, Clock } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface FeaturedArticle {
  category: string;
  title: string;
  summary: string;
  author: string;
  publishedDate: string;
  readingTime: string;
  ctaLabel: string;
  href: string;
}

export interface FeaturedInsightsProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  article?: FeaturedArticle;
}

const defaultArticle: FeaturedArticle = {
  category: "AI & Automation",
  title: "How AI Is Reshaping Business Growth",
  summary:
    "From predictive analytics to intelligent automation, artificial intelligence is transforming how businesses operate, market, and scale. Here's what forward-thinking leaders need to know to stay ahead.",
  author: "KREBIG Editorial Team",
  publishedDate: "July 2026",
  readingTime: "6 min read",
  ctaLabel: "Read Article",
  href: "/insights/how-ai-is-reshaping-business-growth",
};

export function FeaturedInsights({
  eyebrow = "Editor's Pick",
  heading = "Featured Insights",
  description = "Discover our latest thinking on business growth, AI, technology, digital marketing, branding, leadership, and industry transformation.",
  article = defaultArticle,
}: FeaturedInsightsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="featured-insights"
      aria-label="Featured Insights"
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

      <m.div
        className="mt-12 lg:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <m.div
          variants={fadeInUp}
          whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <Card className="hover:shadow-modal duration-base ease-standard mx-auto grid max-w-5xl overflow-hidden transition-shadow lg:grid-cols-2">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-950 lg:aspect-auto">
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-20">
                <defs>
                  <pattern
                    id="featured-insight-grid"
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#featured-insight-grid)" />
              </svg>
              <Bot
                aria-hidden="true"
                className="relative size-24 text-white/90 sm:size-32"
                strokeWidth={1.25}
              />
              <span className="bg-popover text-popover-foreground shadow-dropdown absolute top-5 left-5 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
                {article.category}
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <CardHeader className="gap-3 p-8 sm:p-10">
                <CardTitle className="text-2xl leading-tight font-bold sm:text-3xl">
                  {article.title}
                </CardTitle>
                <Text variant="body" className="text-muted-foreground text-pretty">
                  {article.summary}
                </Text>
                <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <User aria-hidden="true" className="size-4" />
                    {article.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar aria-hidden="true" className="size-4" />
                    {article.publishedDate}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock aria-hidden="true" className="size-4" />
                    {article.readingTime}
                  </span>
                </div>
              </CardHeader>
              <CardFooter className="p-8 pt-0 sm:p-10 sm:pt-0">
                <Button asChild size="lg">
                  <Link href={article.href}>{article.ctaLabel}</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        </m.div>
      </m.div>
    </Section>
  );
}
