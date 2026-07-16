"use client";

import type { LucideIcon } from "lucide-react";
import { Rocket, TrendingUp, Layers, Building2 } from "lucide-react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { ArrowRightIcon } from "@/components/sections/services-icons";

export interface PartnershipModel {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export interface HowWePartnerProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  models?: PartnershipModel[];
}

const defaultModels: PartnershipModel[] = [
  {
    icon: Rocket,
    title: "Launch",
    description:
      "For new ventures entering the market. We build the brand, technology, and go-to-market foundation to launch with confidence.",
    href: "/how-we-partner/launch",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "For businesses ready to scale their reach. We build the marketing engines and systems that compound results.",
    href: "/how-we-partner/growth",
  },
  {
    icon: Layers,
    title: "Scale",
    description:
      "For established businesses expanding operations. We deliver the technology, automation, and strategy to scale sustainably.",
    href: "/how-we-partner/scale",
  },
  {
    icon: Building2,
    title: "Enterprise",
    description:
      "For large organizations undergoing transformation. We operate as a dedicated, integrated partner across every discipline.",
    href: "/how-we-partner/enterprise",
  },
];

export function HowWePartner({
  eyebrow = "How We Partner",
  heading = "One Partner, Every Stage of Growth",
  description = "KREBIG International Group isn't a list of standalone services — we're a single accountable growth partner. Choose the partnership model that matches where your business stands today.",
  models = defaultModels,
}: HowWePartnerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="how-we-partner"
      aria-label="How We Partner"
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
                </CardHeader>
                <CardFooter>
                  <Link
                    href={model.href}
                    className="group/link text-primary duration-fast ease-standard hover:text-primary/80 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  >
                    Learn more
                    <ArrowRightIcon className="duration-base ease-standard size-4 transition-transform group-hover/link:translate-x-1" />
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
