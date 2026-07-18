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
        className="rounded-card mx-auto flex max-w-3xl flex-col items-center gap-6 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-950 p-8 text-center lg:p-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <m.span
          variants={fadeInUp}
          aria-hidden="true"
          className="flex size-14 items-center justify-center rounded-2xl bg-white/15 text-white"
        >
          <Mail className="size-7" strokeWidth={1.75} />
        </m.span>
        <m.div variants={fadeInUp}>
          <Heading level={2} className="text-white">
            {heading}
          </Heading>
        </m.div>
        <m.div variants={fadeInUp}>
          <Text variant="lead" className="max-w-xl text-pretty text-indigo-100">
            {description}
          </Text>
        </m.div>

        <m.div variants={fadeInUp} className="w-full max-w-md">
          {submitted ? (
            <div
              role="status"
              className="rounded-input border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-white"
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
                className="rounded-input duration-fast ease-standard w-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm text-white transition-colors placeholder:text-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
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

        <m.div variants={fadeInUp} className="inline-flex items-center gap-2 text-xs text-white/70">
          <ShieldCheck aria-hidden="true" className="size-4" />
          {privacyNote}
        </m.div>
      </m.div>
    </Section>
  );
}
