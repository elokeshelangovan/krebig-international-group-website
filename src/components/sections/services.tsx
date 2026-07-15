"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import {
  TrendingUpIcon,
  MegaphoneIcon,
  SparklesIcon,
  PenToolIcon,
  LayersIcon,
  CompassIcon,
  ArrowRightIcon,
  type IconProps,
} from "@/components/sections/services-icons";

export interface Service {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
  href: string;
}

export interface ServicesProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    icon: TrendingUpIcon,
    title: "Business Growth Strategy",
    description:
      "Data-driven growth roadmaps that align vision, market opportunity, and execution — engineered to compound enterprise value.",
    href: "/services/business-growth-strategy",
  },
  {
    icon: MegaphoneIcon,
    title: "Digital Marketing",
    description:
      "Full-funnel campaigns across search, social, and content that turn audiences into pipeline and predictable revenue.",
    href: "/services/digital-marketing",
  },
  {
    icon: SparklesIcon,
    title: "AI Automation",
    description:
      "Intelligent workflows and AI agents that eliminate manual work and accelerate decision-making across your business.",
    href: "/services/ai-automation",
  },
  {
    icon: PenToolIcon,
    title: "Creative Studio",
    description:
      "Brand, design, and content crafted to make every enterprise touchpoint feel premium and unmistakably yours.",
    href: "/services/creative-studio",
  },
  {
    icon: LayersIcon,
    title: "Technology Solutions",
    description:
      "Scalable platforms, integrations, and infrastructure built to support rapid, sustainable growth.",
    href: "/services/technology-solutions",
  },
  {
    icon: CompassIcon,
    title: "Business Consulting",
    description:
      "Strategic advisory for leadership teams navigating transformation, market entry, and operational excellence.",
    href: "/services/business-consulting",
  },
];

export function Services({
  eyebrow = "What We Do",
  heading = "Enterprise Services Built for Growth",
  description = "Six integrated disciplines, one accountable partner — everything your business needs to plan, launch, and scale.",
  services = defaultServices,
}: ServicesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="services" aria-label="Services" tone="muted" spacing="xl" containerSize="lg">
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
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <m.div
              key={service.title}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <Card className="hover:shadow-dropdown duration-base ease-standard flex h-full flex-col justify-between transition-shadow">
                <CardHeader>
                  <span
                    aria-hidden="true"
                    className="bg-accent text-accent-foreground mb-2 flex size-12 items-center justify-center rounded-xl"
                  >
                    <Icon className="size-6" />
                  </span>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={service.href}
                    className="group text-primary duration-fast ease-standard hover:text-primary/80 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  >
                    Learn more
                    <ArrowRightIcon className="duration-base ease-standard size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
