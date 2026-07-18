"use client";

import type { ComponentType } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import {
  HomeIcon,
  PulseIcon,
  ShoppingBagIcon,
  BellIcon,
  WrenchIcon,
  BookOpenIcon,
  FactoryIcon,
} from "@/components/sections/industries-icons";
import { BriefcaseIcon } from "@/components/sections/divisions-icons";
import type { IconProps } from "@/components/sections/services-icons";

export interface IndustryDetail {
  icon: ComponentType<IconProps>;
  name: string;
  description: string;
  focusAreas: string[];
  ctaLabel: string;
  href: string;
}

export interface IndustrySolutionsShowcaseProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  industries?: IndustryDetail[];
}

const defaultIndustries: IndustryDetail[] = [
  {
    icon: HomeIcon,
    name: "Real Estate",
    description:
      "Helping developers, brokers, and property companies attract buyers, generate qualified leads, and strengthen their brand presence.",
    focusAreas: [
      "Digital Marketing",
      "Property Branding",
      "Lead Generation",
      "Video Production",
      "Website Development",
      "AI Automation",
    ],
    ctaLabel: "Explore Real Estate",
    href: "/industries/real-estate",
  },
  {
    icon: PulseIcon,
    name: "Healthcare",
    description:
      "Supporting clinics, hospitals, and healthcare providers with patient-focused digital experiences and sustainable growth strategies.",
    focusAreas: [
      "Healthcare Marketing",
      "Website Solutions",
      "SEO",
      "Patient Acquisition",
      "Brand Strategy",
      "Automation",
    ],
    ctaLabel: "Explore Healthcare",
    href: "/industries/healthcare",
  },
  {
    icon: ShoppingBagIcon,
    name: "Retail & E-Commerce",
    description:
      "Helping retailers increase online visibility, improve customer engagement, and grow revenue through digital transformation.",
    focusAreas: [
      "E-Commerce",
      "Performance Marketing",
      "SEO",
      "Social Media",
      "Automation",
      "Analytics",
    ],
    ctaLabel: "Explore Retail",
    href: "/industries/retail-ecommerce",
  },
  {
    icon: BellIcon,
    name: "Hospitality & Restaurants",
    description:
      "Creating memorable customer experiences through branding, digital marketing, content creation, and reputation management.",
    focusAreas: [
      "Branding",
      "Photography",
      "Video",
      "Social Media",
      "Local SEO",
      "Customer Engagement",
    ],
    ctaLabel: "Explore Hospitality",
    href: "/industries/hospitality",
  },
  {
    icon: WrenchIcon,
    name: "Construction & Engineering",
    description:
      "Supporting construction, engineering, and contracting businesses with professional branding, digital presence, and business systems.",
    focusAreas: [
      "Corporate Branding",
      "Website",
      "Documentation",
      "Marketing",
      "Automation",
      "AI Solutions",
    ],
    ctaLabel: "Explore Construction",
    href: "/industries/construction",
  },
  {
    icon: BookOpenIcon,
    name: "Education & Training",
    description:
      "Helping educational institutions and training providers attract learners through modern digital experiences.",
    focusAreas: [
      "Learning Platforms",
      "Branding",
      "Digital Marketing",
      "AI Education",
      "Content Strategy",
      "Automation",
    ],
    ctaLabel: "Explore Education",
    href: "/industries/education",
  },
  {
    icon: BriefcaseIcon,
    name: "Professional Services",
    description:
      "Helping consulting firms, legal practices, financial companies, and business advisors build authority and generate qualified leads.",
    focusAreas: [
      "Personal Branding",
      "Lead Generation",
      "SEO",
      "Website",
      "Marketing Automation",
      "Analytics",
    ],
    ctaLabel: "Explore Professional Services",
    href: "/industries/professional-services",
  },
  {
    icon: FactoryIcon,
    name: "Manufacturing & Industrial",
    description:
      "Helping industrial companies modernize their digital presence, improve operational visibility, and support long-term business growth.",
    focusAreas: [
      "Digital Transformation",
      "AI Automation",
      "Corporate Website",
      "Branding",
      "Marketing",
      "Business Systems",
    ],
    ctaLabel: "Explore Manufacturing",
    href: "/industries/manufacturing",
  },
];

export function IndustrySolutionsShowcase({
  eyebrow = "Our Expertise",
  heading = "Industries We Serve",
  description = "Our integrated expertise enables us to develop tailored growth strategies for businesses across diverse industries. Every solution is adapted to the specific goals, challenges, and opportunities of each sector.",
  industries = defaultIndustries,
}: IndustrySolutionsShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="industry-showcase"
      aria-label="Industries We Serve"
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
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <m.div
              key={industry.name}
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
                    <Icon className="size-6" />
                  </span>
                  <CardTitle>{industry.name}</CardTitle>
                  <Text variant="small" className="text-muted-foreground text-pretty">
                    {industry.description}
                  </Text>

                  <div className="mt-4">
                    <Text
                      variant="caption"
                      className="text-muted-foreground font-semibold tracking-wide uppercase"
                    >
                      Key Focus
                    </Text>
                    <ul className="mt-1.5 flex flex-col gap-1.5">
                      {industry.focusAreas.map((focusArea) => (
                        <li
                          key={focusArea}
                          className="text-foreground flex items-start gap-2 text-sm"
                        >
                          <Check
                            aria-hidden="true"
                            className="text-primary mt-0.5 size-4 shrink-0"
                            strokeWidth={2}
                          />
                          <span>{focusArea}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={industry.href}>{industry.ctaLabel}</Link>
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
