"use client";

import { type FormEvent, useId, useState } from "react";
import { Mail, ShieldCheck } from "lucide-react";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface InsightsNewsletterProps {
  heading?: string;
  description?: string;
  ctaLabel?: string;
  privacyNote?: string;
}

/**
 * No newsletter backend exists yet — submission only confirms locally so
 * the UI doesn't overstate what's implemented. Wiring this to a real
 * email service is future work.
 */
function handleSubmit(event: FormEvent<HTMLFormElement>, onSubmit: () => void) {
  event.preventDefault();
  onSubmit();
}

export function InsightsNewsletter({
  heading = "Stay Ahead with KREBIG Insights",
  description = "Receive practical business insights, AI trends, marketing strategies, and technology updates directly in your inbox.",
  ctaLabel = "Subscribe",
  privacyNote = "We respect your privacy. No spam. Unsubscribe anytime.",
}: InsightsNewsletterProps) {
  const emailId = useId();
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section
      id="insights-newsletter"
      aria-label={heading}
      tone="default"
      spacing="xl"
      containerSize="lg"
    >
      <m.div
        className="from-primary to-accent-foreground rounded-card mx-auto flex max-w-3xl flex-col items-center gap-6 bg-gradient-to-br p-8 text-center lg:p-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <m.span
          variants={fadeInUp}
          aria-hidden="true"
          className="bg-primary-foreground/15 text-primary-foreground flex size-14 items-center justify-center rounded-2xl"
        >
          <Mail className="size-7" strokeWidth={1.75} />
        </m.span>
        <m.div variants={fadeInUp}>
          <Heading level={2} className="text-primary-foreground">
            {heading}
          </Heading>
        </m.div>
        <m.div variants={fadeInUp}>
          <Text variant="lead" className="text-primary-foreground/85 max-w-xl text-pretty">
            {description}
          </Text>
        </m.div>

        <m.div variants={fadeInUp} className="w-full max-w-md">
          {submitted ? (
            <div
              role="status"
              className="bg-primary-foreground/10 text-primary-foreground rounded-input border-primary-foreground/20 border px-4 py-3 text-sm font-medium"
            >
              Thanks for subscribing — you&apos;re on the list.
            </div>
          ) : (
            <form
              onSubmit={(event) => handleSubmit(event, () => setSubmitted(true))}
              noValidate
              className="flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor={emailId} className="sr-only">
                Email Address
              </label>
              <input
                id={emailId}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email Address"
                className="border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 rounded-input duration-fast ease-standard focus-visible:ring-primary-foreground w-full border px-4 py-2.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              />
              <Button
                type="submit"
                size="lg"
                className="shrink-0 bg-white text-indigo-700 hover:bg-indigo-50"
              >
                {ctaLabel}
              </Button>
            </form>
          )}
        </m.div>

        <m.div
          variants={fadeInUp}
          className="text-primary-foreground/70 inline-flex items-center gap-2 text-xs"
        >
          <ShieldCheck aria-hidden="true" className="size-4" />
          {privacyNote}
        </m.div>
      </m.div>
    </Section>
  );
}
