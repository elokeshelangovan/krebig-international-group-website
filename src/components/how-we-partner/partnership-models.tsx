"use client";

import type { LucideIcon } from "lucide-react";
import { Rocket, TrendingUp, Layers, Building2, Check } from "lucide-react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface PartnershipModelDetail {
  icon: LucideIcon;
  title: string;
  description: string;
  idealFor: string;
  outcomes: string[];
  ctaLabel: string;
  href: string;
}

export interface PartnershipModelsProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  models?: PartnershipModelDetail[];
}

const defaultModels: PartnershipModelDetail[] = [
  {
    icon: Rocket,
    title: "Launch",
    description: "For new ventures entering the market and building their foundation.",
    idealFor: "Early-stage businesses and new market entrants",
    outcomes: ["Brand and digital foundation", "Go-to-market strategy", "A fast, confident launch"],
    ctaLabel: "Learn More",
    href: "/how-we-partner/launch",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "For businesses ready to expand their reach and accelerate demand.",
    idealFor: "Established businesses ready to scale marketing and demand",
    outcomes: [
      "Marketing engines that compound",
      "Stronger lead generation",
      "Measurable growth systems",
    ],
    ctaLabel: "Learn More",
    href: "/how-we-partner/growth",
  },
  {
    icon: Layers,
    title: "Scale",
    description: "For growing businesses expanding operations across markets.",
    idealFor: "Businesses expanding into new markets or scaling operations",
    outcomes: [
      "Scalable technology and automation",
      "Operational efficiency",
      "Sustainable expansion",
    ],
    ctaLabel: "Learn More",
    href: "/how-we-partner/scale",
  },
  {
    icon: Building2,
    title: "Enterprise",
    description: "For large organizations undergoing full digital transformation.",
    idealFor: "Enterprises undergoing digital or organizational transformation",
    outcomes: [
      "Dedicated, integrated partnership",
      "Enterprise-grade execution",
      "Cross-functional transformation",
    ],
    ctaLabel: "Learn More",
    href: "/how-we-partner/enterprise",
  },
];

export function PartnershipModels({
  eyebrow = "Our Partnership Models",
  heading = "Four Ways We Partner With Ambitious Businesses",
  description = "No pricing tiers, no generic packages. Each partnership model is built around where your business stands today and where it needs to go next.",
  models = defaultModels,
}: PartnershipModelsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="partnership-models"
      aria-label="Our Partnership Models"
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
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {models.map((model) => {
          const Icon = model.icon;
          return (
            <m.div
              key={model.title}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:border-primary/30 hover:shadow-dropdown duration-base ease-standard flex h-full flex-col justify-between transition-[border-color,box-shadow]">
                <CardHeader>
                  <span
                    aria-hidden="true"
                    className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard mb-2 flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                  >
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <CardTitle>{model.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {model.description}
                  </CardDescription>

                  <div className="mt-4 flex flex-col gap-3">
                    <div>
                      <Text
                        variant="caption"
                        className="text-muted-foreground font-semibold tracking-wide uppercase"
                      >
                        Ideal For
                      </Text>
                      <Text variant="small" className="text-foreground mt-1 text-pretty">
                        {model.idealFor}
                      </Text>
                    </div>

                    <div>
                      <Text
                        variant="caption"
                        className="text-muted-foreground font-semibold tracking-wide uppercase"
                      >
                        Key Outcomes
                      </Text>
                      <ul className="mt-1 flex flex-col gap-1.5">
                        {model.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="text-foreground flex items-start gap-2 text-sm"
                          >
                            <Check
                              aria-hidden="true"
                              className="text-primary mt-0.5 size-4 shrink-0"
                              strokeWidth={2}
                            />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={model.href}>{model.ctaLabel}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
