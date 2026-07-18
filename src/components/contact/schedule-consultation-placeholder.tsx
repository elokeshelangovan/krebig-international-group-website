"use client";

import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export function ScheduleConsultationPlaceholder() {
  return (
    <Section
      id="schedule-consultation-placeholder"
      aria-label="Schedule a Consultation"
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
          <CalendarClock className="size-8" strokeWidth={1.75} />
        </m.span>
        <m.div variants={fadeInUp}>
          <Heading level={1} size={2}>
            Schedule a Consultation
          </Heading>
        </m.div>
        <m.div variants={fadeInUp}>
          <Text variant="lead" className="text-muted-foreground text-pretty">
            Online consultation booking is on its way. In the meantime, reach out directly and our
            team will help you find a time that works.
          </Text>
        </m.div>
        <m.div variants={fadeInUp} className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="mailto:hello@krebig.com">Email Our Team</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Back to Contact</Link>
          </Button>
        </m.div>
      </m.div>
    </Section>
  );
}
