"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface LegalPlaceholderProps {
  name: string;
}

export function LegalPlaceholder({ name }: LegalPlaceholderProps) {
  return (
    <Section
      id="legal-placeholder"
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
          Not Yet Published
        </m.span>
        <m.span
          variants={fadeInUp}
          aria-hidden="true"
          className="bg-accent text-accent-foreground flex size-16 items-center justify-center rounded-2xl"
        >
          <FileText className="size-8" strokeWidth={1.75} />
        </m.span>
        <m.div variants={fadeInUp}>
          <Heading level={1} size={2}>
            {name}
          </Heading>
        </m.div>
        <m.div variants={fadeInUp}>
          <Text variant="lead" className="text-muted-foreground text-pretty">
            Our {name.toLowerCase()} is being finalized and isn&apos;t published yet. If you have
            questions about how KREBIG handles data, terms, or cookies in the meantime, reach out
            directly and our team will help.
          </Text>
        </m.div>
        <m.div variants={fadeInUp} className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </m.div>
      </m.div>
    </Section>
  );
}
