"use client";

import type { LucideIcon } from "lucide-react";
import { Rocket, TrendingUp, Layers, Building2, Check } from "lucide-react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface PartnershipModelDetail {
  icon: LucideIcon;
  title: string;
  perfectFor: string[];
  focus: string[];
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
    perfectFor: ["Startups", "New businesses", "Early-stage companies"],
    focus: [
      "Brand Identity",
      "Website",
      "Digital Presence",
      "Go-to-Market Strategy",
      "Business Foundation",
    ],
    ctaLabel: "Start Your Journey",
    href: "/how-we-partner/launch",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    perfectFor: [
      "Growing businesses",
      "Companies generating consistent revenue",
      "Businesses expanding into new markets",
    ],
    focus: [
      "Lead Generation",
      "Performance Marketing",
      "SEO",
      "Content Strategy",
      "Marketing Automation",
    ],
    ctaLabel: "Accelerate Growth",
    href: "/how-we-partner/growth",
  },
  {
    icon: Layers,
    title: "Scale",
    perfectFor: ["Established businesses", "Multi-location companies", "Growing organizations"],
    focus: [
      "Business Automation",
      "AI Integration",
      "Process Optimization",
      "Team Enablement",
      "Data Analytics",
    ],
    ctaLabel: "Scale Your Business",
    href: "/how-we-partner/scale",
  },
  {
    icon: Building2,
    title: "Enterprise",
    perfectFor: ["Large organizations", "Corporate brands", "Enterprise transformation"],
    focus: [
      "Digital Transformation",
      "Enterprise Strategy",
      "Technology Consulting",
      "AI Systems",
      "Long-term Strategic Partnership",
    ],
    ctaLabel: "Talk to Our Team",
    href: "/how-we-partner/enterprise",
  },
];

export function PartnershipModels({
  eyebrow = "Partnership Models",
  heading = "Our Partnership Models",
  description = "Every business is at a different stage of growth. Our partnership models are designed to provide the right level of strategy, execution, and long-term support based on where your business is today and where you want to go next.",
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

                  <div className="mt-4 flex flex-col gap-4">
                    <div>
                      <Text
                        variant="caption"
                        className="text-muted-foreground font-semibold tracking-wide uppercase"
                      >
                        Perfect For
                      </Text>
                      <ul className="mt-1.5 flex flex-col gap-1.5">
                        {model.perfectFor.map((item) => (
                          <li
                            key={item}
                            className="text-muted-foreground flex items-start gap-2 text-sm"
                          >
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
                        {model.focus.map((item) => (
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
