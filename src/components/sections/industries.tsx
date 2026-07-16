"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import {
  HomeIcon,
  PulseIcon,
  WrenchIcon,
  BellIcon,
  ShoppingBagIcon,
  FactoryIcon,
  BookOpenIcon,
  BankIcon,
  ShieldIcon,
  TruckIcon,
  CpuIcon,
  OfficeTowerIcon,
} from "@/components/sections/industries-icons";
import type { IconProps } from "@/components/sections/services-icons";

export interface Industry {
  icon: ComponentType<IconProps>;
  name: string;
  description: string;
  href: string;
}

export interface IndustriesProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  industries?: Industry[];
}

const defaultIndustries: Industry[] = [
  {
    icon: HomeIcon,
    name: "Real Estate",
    description: "Property marketing, lead generation, branding and digital transformation.",
    href: "/industries/real-estate",
  },
  {
    icon: PulseIcon,
    name: "Healthcare",
    description: "Hospitals, clinics, medical centers and healthcare technology.",
    href: "/industries/healthcare",
  },
  {
    icon: WrenchIcon,
    name: "Construction",
    description: "Construction companies, engineering firms and infrastructure projects.",
    href: "/industries/construction",
  },
  {
    icon: BellIcon,
    name: "Hospitality",
    description: "Hotels, resorts, restaurants and tourism businesses.",
    href: "/industries/hospitality",
  },
  {
    icon: ShoppingBagIcon,
    name: "Retail & E-Commerce",
    description: "Retail brands, online stores and consumer businesses.",
    href: "/industries/retail-ecommerce",
  },
  {
    icon: FactoryIcon,
    name: "Manufacturing",
    description: "Industrial companies, factories and supply chain businesses.",
    href: "/industries/manufacturing",
  },
  {
    icon: BookOpenIcon,
    name: "Education",
    description: "Universities, schools, academies and professional training.",
    href: "/industries/education",
  },
  {
    icon: BankIcon,
    name: "Finance",
    description: "Banks, fintech, investment firms and financial consulting.",
    href: "/industries/finance",
  },
  {
    icon: ShieldIcon,
    name: "Government",
    description: "Public sector, smart city initiatives and digital services.",
    href: "/industries/government",
  },
  {
    icon: TruckIcon,
    name: "Logistics",
    description: "Transportation, shipping and supply chain management.",
    href: "/industries/logistics",
  },
  {
    icon: CpuIcon,
    name: "Technology",
    description: "Software companies, SaaS platforms, AI startups and IT firms.",
    href: "/industries/technology",
  },
  {
    icon: OfficeTowerIcon,
    name: "Corporate Enterprises",
    description: "Large organizations seeking digital transformation and business growth.",
    href: "/industries/corporate-enterprises",
  },
];

export function Industries({
  eyebrow = "Industries We Serve",
  heading = "Solutions Built For Every Industry",
  description = "From startups to global enterprises, KREBIG International Group delivers strategy, technology, marketing and AI solutions across diverse industries.",
  industries = defaultIndustries,
}: IndustriesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="industries"
      aria-label="Industries We Serve"
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
        {industries.map((industry) => {
          const Icon = industry.icon;
          const patternId = `industry-grid-${industry.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
          return (
            <m.div
              key={industry.name}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <Card className="group hover:border-primary/30 hover:shadow-dropdown duration-base ease-standard relative flex h-full flex-col overflow-hidden transition-[border-color,box-shadow]">
                <Link
                  href={industry.href}
                  className="focus-visible:ring-ring rounded-card absolute inset-0 z-10 focus-visible:ring-2 focus-visible:outline-none"
                  aria-label={`Learn more about how KREBIG serves the ${industry.name} industry`}
                />
                <div className="from-primary/10 via-accent/60 to-background relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-gradient-to-br">
                  <svg
                    className="text-border absolute inset-0 h-full w-full opacity-30"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern id={patternId} width="18" height="18" patternUnits="userSpaceOnUse">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#${patternId})`} />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      aria-hidden="true"
                      className="text-primary duration-slow ease-standard size-10 transition-transform group-hover:scale-110"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-base">{industry.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
