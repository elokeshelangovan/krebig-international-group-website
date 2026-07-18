"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  items?: FaqItem[];
}

const defaultItems: FaqItem[] = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We typically respond to enquiries within one to two business days. For urgent matters, reaching out to the relevant team directly is the fastest way to connect.",
  },
  {
    question: "Can I schedule an online consultation?",
    answer:
      "Yes. Once you submit an enquiry, our team will follow up to arrange a consultation at a time that works for you.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We work across a range of industries, including real estate, healthcare, hospitality, retail, construction, and education, among others.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. KREBIG partners with businesses across the UAE, India, and international markets, with remote collaboration built into how we work.",
  },
  {
    question: "Can I request a custom proposal?",
    answer:
      "Absolutely. Share details about your business and goals through the form above, and our team will put together a proposal tailored to your needs.",
  },
  {
    question: "How do I apply for career opportunities?",
    answer:
      "Visit our Careers page to explore current opportunities, or use the Careers contact method above to reach our recruitment team directly.",
  },
];

export function Faq({
  eyebrow = "FAQ",
  heading = "Frequently Asked Questions",
  description = "Answers to the questions we hear most from businesses reaching out to KREBIG.",
  items = defaultItems,
}: FaqProps) {
  return (
    <Section
      id="faq"
      aria-label="Frequently Asked Questions"
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
        className="mx-auto mt-12 max-w-3xl lg:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
      >
        <Accordion.Root type="single" collapsible className="border-border border-t">
          {items.map((item, index) => (
            <Accordion.Item
              key={item.question}
              value={`item-${index}`}
              className="border-border border-b"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group focus-visible:ring-ring focus-visible:ring-offset-background duration-fast ease-standard flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none">
                  <Text as="span" variant="body" className="text-foreground font-semibold">
                    {item.question}
                  </Text>
                  <ChevronDown
                    aria-hidden="true"
                    className="text-muted-foreground duration-base ease-standard size-5 shrink-0 transition-transform group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content
                forceMount
                className="duration-base ease-standard grid overflow-hidden transition-[grid-template-rows] data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]"
              >
                <div className="overflow-hidden">
                  <Text variant="small" className="text-muted-foreground pb-5 text-pretty">
                    {item.answer}
                  </Text>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </m.div>
    </Section>
  );
}
