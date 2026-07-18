"use client";

import Link from "next/link";
import { User, Calendar, Clock, ArrowRight } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { defaultArticles, type Article } from "./data";

export type { Article };
export { defaultArticles };

export interface LatestArticlesProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  articles?: Article[];
}

export function LatestArticles({
  eyebrow = "Latest From KREBIG",
  heading = "Latest Articles",
  description = "Explore practical insights, expert opinions, business strategies, AI innovations, digital transformation ideas, and industry knowledge from the KREBIG team.",
  articles = defaultArticles,
}: LatestArticlesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="latest-articles"
      aria-label="Latest Articles"
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
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {articles.map((article) => {
          const Icon = article.icon;
          return (
            <m.div
              key={article.slug}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:border-primary/30 hover:shadow-dropdown duration-base ease-standard flex h-full flex-col overflow-hidden transition-[border-color,box-shadow]">
                <div className="from-primary to-accent-foreground relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br">
                  <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-20">
                    <defs>
                      <pattern
                        id={`article-grid-${article.slug}`}
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="1.25" cy="1.25" r="1.25" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#article-grid-${article.slug})`} />
                  </svg>
                  <Icon
                    aria-hidden="true"
                    className="text-primary-foreground/90 relative size-14"
                    strokeWidth={1.25}
                  />
                  <span className="bg-popover text-popover-foreground shadow-dropdown absolute top-4 left-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                    {article.category}
                  </span>
                </div>

                <CardHeader className="flex-1 gap-2">
                  <CardTitle className="text-lg leading-snug">{article.title}</CardTitle>
                  <Text variant="small" className="text-muted-foreground line-clamp-2 text-pretty">
                    {article.summary}
                  </Text>
                  <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
                    <span className="inline-flex items-center gap-1.5">
                      <User aria-hidden="true" className="size-3.5" />
                      {article.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar aria-hidden="true" className="size-3.5" />
                      {article.publishedDate}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock aria-hidden="true" className="size-3.5" />
                      {article.readingTime}
                    </span>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={article.href}
                    className="group/link text-primary duration-fast ease-standard hover:text-primary/80 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  >
                    Read Article
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
    </Section>
  );
}
