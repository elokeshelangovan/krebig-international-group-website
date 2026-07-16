"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { HomeIcon, PulseIcon } from "@/components/sections/industries-icons";
import { SparklesIcon, type IconProps } from "@/components/sections/services-icons";

export interface CaseStudy {
  icon: ComponentType<IconProps>;
  industry: string;
  title: string;
  description: string;
  metricValue: string;
  metricLabel: string;
  href: string;
}

export interface PortfolioStat {
  label: string;
  value?: number;
  suffix?: string;
  staticText?: string;
}

export interface PortfolioProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  caseStudies?: CaseStudy[];
  stats?: PortfolioStat[];
}

const defaultCaseStudies: CaseStudy[] = [
  {
    icon: HomeIcon,
    industry: "Real Estate",
    title: "Luxury Real Estate Marketing",
    description:
      "Enterprise digital marketing and lead generation strategy for a premium property developer.",
    metricValue: "+240%",
    metricLabel: "Qualified Leads",
    href: "/portfolio/luxury-real-estate-marketing",
  },
  {
    icon: PulseIcon,
    industry: "Healthcare",
    title: "Healthcare Digital Transformation",
    description:
      "Modern website, AI automation and patient acquisition strategy for a healthcare organization.",
    metricValue: "+180%",
    metricLabel: "Patient Enquiries",
    href: "/portfolio/healthcare-digital-transformation",
  },
  {
    icon: SparklesIcon,
    industry: "Technology",
    title: "AI Business Automation",
    description: "AI workflow automation reducing manual operations and increasing productivity.",
    metricValue: "65%",
    metricLabel: "Time Saved",
    href: "/portfolio/ai-business-automation",
  },
];

const defaultStats: PortfolioStat[] = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 25, suffix: "+", label: "Industries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { staticText: "UAE • India • Global", label: "Countries Served" },
];

export function Portfolio({
  eyebrow = "Our Work",
  heading = "Results That Speak For Themselves",
  description = "Explore how KREBIG International Group helps businesses launch faster, scale smarter and transform digitally through strategy, technology, AI and creative excellence.",
  caseStudies = defaultCaseStudies,
  stats = defaultStats,
}: PortfolioProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="portfolio"
      aria-label="Portfolio & Case Studies"
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
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {caseStudies.map((caseStudy) => {
          const Icon = caseStudy.icon;
          return (
            <m.div
              key={caseStudy.title}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <Card className="group hover:shadow-dropdown duration-base ease-standard flex h-full flex-col overflow-hidden transition-shadow">
                <div className="from-primary/10 via-accent/60 to-background relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-gradient-to-br">
                  <svg
                    className="text-border absolute inset-0 h-full w-full opacity-30"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id={`portfolio-grid-${caseStudy.title}`}
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill={`url(#portfolio-grid-${caseStudy.title})`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      aria-hidden="true"
                      className="text-primary duration-slow ease-standard size-16 transition-transform group-hover:scale-110"
                    />
                  </div>
                  <span className="border-border bg-background/90 text-foreground absolute top-4 left-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur">
                    {caseStudy.industry}
                  </span>
                </div>

                <CardHeader>
                  <CardTitle>{caseStudy.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {caseStudy.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  <div className="border-border flex items-baseline gap-2 border-t pt-4">
                    <span className="text-primary text-2xl font-bold tracking-tight">
                      {caseStudy.metricValue}
                    </span>
                    <span className="text-muted-foreground text-sm">{caseStudy.metricLabel}</span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={caseStudy.href}>View Case Study</Link>
                  </Button>
                </CardFooter>
              </Card>
            </m.div>
          );
        })}
      </m.div>

      <m.div
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {stats.map((stat) => (
          <m.div key={stat.label} variants={fadeInUp}>
            <Card className="flex h-full flex-col items-center gap-1.5 p-6 text-center">
              <span className="text-primary text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value !== undefined ? (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.staticText
                )}
              </span>
              <Text variant="small" className="text-muted-foreground">
                {stat.label}
              </Text>
            </Card>
          </m.div>
        ))}
      </m.div>
    </Section>
  );
}
