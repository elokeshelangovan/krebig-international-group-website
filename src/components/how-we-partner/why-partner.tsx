"use client";

import type { ComponentType } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { PartnershipIcon } from "@/components/about/values-icons";
import {
  CompassIcon,
  SparklesIcon,
  TrendingUpIcon,
  type IconProps,
} from "@/components/sections/services-icons";
import { ChartBarIcon, RefreshIcon } from "@/components/how-we-partner/partner-icons";

export interface PartnerReason {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface WhyPartnerProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  reasons?: PartnerReason[];
}

const defaultReasons: PartnerReason[] = [
  {
    icon: PartnershipIcon,
    title: "Long-Term Relationships",
    description:
      "We invest in multi-year partnerships, not one-off projects, so our incentives stay aligned with your growth.",
  },
  {
    icon: TrendingUpIcon,
    title: "Business Outcomes",
    description:
      "Every engagement is measured by the business results it produces — not the hours logged or deliverables shipped.",
  },
  {
    icon: CompassIcon,
    title: "Strategy Before Execution",
    description:
      "We understand your business, market and goals before we recommend a single tactic, tool or platform.",
  },
  {
    icon: SparklesIcon,
    title: "AI-Powered Operations",
    description:
      "AI is embedded across how we plan, build and operate — helping us move faster without sacrificing quality.",
  },
  {
    icon: ChartBarIcon,
    title: "Data-Driven Decision Making",
    description:
      "Every recommendation is grounded in data and evidence, so resources go where they create the most value.",
  },
  {
    icon: RefreshIcon,
    title: "Continuous Optimization",
    description:
      "Growth doesn't stop at launch. We continuously refine strategy, systems and execution as your business evolves.",
  },
];

export function WhyPartner({
  eyebrow = "Why Partner With KREBIG",
  heading = "A Partnership Built Around Your Business",
  description = "We don't sell a list of services. We build long-term partnerships engineered around measurable business outcomes.",
  reasons = defaultReasons,
}: WhyPartnerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="why-partner"
      aria-label="Why Partner With KREBIG"
      tone="muted"
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
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <m.div
              key={reason.title}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:shadow-dropdown duration-base ease-standard relative flex h-full flex-col gap-2 p-6 transition-shadow">
                <span
                  aria-hidden="true"
                  className="text-muted-foreground/30 absolute top-6 right-6 font-mono text-xs"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard mb-2 flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                >
                  <Icon className="size-6" />
                </span>
                <Heading level={3} className="pr-6 text-base">
                  {reason.title}
                </Heading>
                <Text variant="small" className="text-muted-foreground text-pretty">
                  {reason.description}
                </Text>
              </Card>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
