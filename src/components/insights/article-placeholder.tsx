"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { User, Calendar, Clock } from "lucide-react";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface ArticlePlaceholderProps {
  icon: ReactNode;
  category: string;
  title: string;
  summary: string;
  author: string;
  publishedDate: string;
  readingTime: string;
}

export function ArticlePlaceholder({
  icon,
  category,
  title,
  summary,
  author,
  publishedDate,
  readingTime,
}: ArticlePlaceholderProps) {
  return (
    <Section
      id="article-placeholder"
      aria-label={title}
      tone="default"
      spacing="xl"
      containerSize="lg"
      className="flex flex-1 items-center"
    >
      <m.div
        className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <m.span
          variants={fadeInUp}
          className="border-border bg-accent text-accent-foreground inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase"
        >
          Coming Soon
        </m.span>
        <m.span
          variants={fadeInUp}
          aria-hidden="true"
          className="bg-accent text-accent-foreground flex size-16 items-center justify-center rounded-2xl"
        >
          {icon}
        </m.span>
        <m.span
          variants={fadeInUp}
          className="text-primary text-xs font-semibold tracking-wide uppercase"
        >
          {category}
        </m.span>
        <m.div variants={fadeInUp}>
          <Heading level={1} size={2}>
            {title}
          </Heading>
        </m.div>
        <m.div variants={fadeInUp}>
          <Text variant="lead" className="text-muted-foreground text-pretty">
            {`${summary} The full article is on its way — in the meantime, here's what to expect.`}
          </Text>
        </m.div>
        <m.div
          variants={fadeInUp}
          className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm"
        >
          <span className="inline-flex items-center gap-1.5">
            <User aria-hidden="true" className="size-4" />
            {author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar aria-hidden="true" className="size-4" />
            {publishedDate}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock aria-hidden="true" className="size-4" />
            {readingTime}
          </span>
        </m.div>
        <m.div variants={fadeInUp} className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/#contact">Contact Our Experts</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/insights">Back to Insights</Link>
          </Button>
        </m.div>
      </m.div>
    </Section>
  );
}
