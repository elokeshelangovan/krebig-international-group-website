"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface PartnershipModelPlaceholderProps {
  icon: ReactNode;
  name: string;
  description: string;
  perfectFor: string[];
  focus: string[];
}

export function PartnershipModelPlaceholder({
  icon,
  name,
  description,
  perfectFor,
  focus,
}: PartnershipModelPlaceholderProps) {
  return (
    <Section
      id="partnership-model-placeholder"
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
            {`${description} A dedicated page for this partnership model is on its way — in the meantime, here's what it's built for.`}
          </Text>
        </m.div>
        <m.div variants={fadeInUp} className="mt-2 grid grid-cols-1 gap-8 text-left sm:grid-cols-2">
          <div>
            <Text
              variant="caption"
              className="text-muted-foreground font-semibold tracking-wide uppercase"
            >
              Perfect For
            </Text>
            <ul className="mt-1.5 flex flex-col gap-1.5">
              {perfectFor.map((item) => (
                <li key={item} className="text-muted-foreground flex items-start gap-2 text-sm">
                  <span
                    aria-hidden="true"
                    className="bg-primary mt-1.5 size-1.5 shrink-0 rounded-full"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Text
              variant="caption"
              className="text-muted-foreground font-semibold tracking-wide uppercase"
            >
              Focus
            </Text>
            <ul className="mt-1.5 flex flex-col gap-1.5">
              {focus.map((item) => (
                <li key={item} className="text-foreground flex items-start gap-2 text-sm">
                  <Check
                    aria-hidden="true"
                    className="text-primary mt-0.5 size-4 shrink-0"
                    strokeWidth={2}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </m.div>
        <m.div variants={fadeInUp} className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/how-we-partner">Back to How We Partner</Link>
          </Button>
        </m.div>
      </m.div>
    </Section>
  );
}
