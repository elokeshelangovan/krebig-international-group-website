"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface IndustryPlaceholderProps {
  icon: ReactNode;
  name: string;
  description: string;
  focusAreas: string[];
}

export function IndustryPlaceholder({
  icon,
  name,
  description,
  focusAreas,
}: IndustryPlaceholderProps) {
  return (
    <Section
      id="industry-placeholder"
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
            {`${description} A dedicated page for this industry is on its way — in the meantime, here's what we bring to the table.`}
          </Text>
        </m.div>
        <m.ul
          variants={fadeInUp}
          className="mt-2 grid grid-cols-1 gap-x-8 gap-y-2 text-left sm:grid-cols-2"
        >
          {focusAreas.map((focusArea) => (
            <li key={focusArea} className="text-foreground flex items-start gap-2 text-sm">
              <Check
                aria-hidden="true"
                className="text-primary mt-0.5 size-4 shrink-0"
                strokeWidth={2}
              />
              <span>{focusArea}</span>
            </li>
          ))}
        </m.ul>
        <m.div variants={fadeInUp} className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/industries">Back to Industries</Link>
          </Button>
        </m.div>
      </m.div>
    </Section>
  );
}
