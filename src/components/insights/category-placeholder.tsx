"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface CategoryPlaceholderProps {
  icon: ReactNode;
  name: string;
  description: string;
  articleCount: number;
}

export function CategoryPlaceholder({
  icon,
  name,
  description,
  articleCount,
}: CategoryPlaceholderProps) {
  return (
    <Section
      id="category-placeholder"
      aria-label={name}
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
        <m.div variants={fadeInUp}>
          <Heading level={1} size={2}>
            {name}
          </Heading>
        </m.div>
        <m.div variants={fadeInUp}>
          <Text variant="lead" className="text-muted-foreground text-pretty">
            {`${description} A dedicated archive for this category is on its way — currently ${articleCount} ${articleCount === 1 ? "article is" : "articles are"} tagged here.`}
          </Text>
        </m.div>
        <m.div variants={fadeInUp} className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Contact Our Experts</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/insights">Back to Insights</Link>
          </Button>
        </m.div>
      </m.div>
    </Section>
  );
}
