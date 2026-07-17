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
  BroadcastIcon,
  FilmIcon,
  CodeIcon,
  GraduationCapIcon,
} from "@/components/sections/divisions-icons";
import type { IconProps } from "@/components/sections/services-icons";

export interface DivisionDetail {
  icon: ComponentType<IconProps>;
  name: string;
  description: string;
  capabilities: string[];
  ctaLabel: string;
  href: string;
}

export interface DivisionsShowcaseProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  divisions?: DivisionDetail[];
}

const defaultDivisions: DivisionDetail[] = [
  {
    icon: BroadcastIcon,
    name: "KREBIG Digital Media",
    description:
      "Helping businesses grow through strategic digital marketing, branding, SEO, performance campaigns, content marketing, and lead generation.",
    capabilities: [
      "Digital Marketing",
      "SEO",
      "Social Media Marketing",
      "Paid Advertising",
      "Branding",
      "Lead Generation",
    ],
    ctaLabel: "Explore Digital Media",
    href: "/divisions/digital-media",
  },
  {
    icon: FilmIcon,
    name: "KREBIG Studio",
    description:
      "Producing premium visual experiences through photography, videography, creative storytelling, post-production, and AI-powered content creation.",
    capabilities: [
      "Video Production",
      "Photography",
      "Post Production",
      "Motion Graphics",
      "AI Content Creation",
      "Creative Direction",
    ],
    ctaLabel: "Explore Studio",
    href: "/divisions/studio",
  },
  {
    icon: CodeIcon,
    name: "KREBIG Technology",
    description:
      "Building scalable digital products, intelligent automation, AI solutions, websites, and business technology that enable long-term growth.",
    capabilities: [
      "Website Development",
      "AI Automation",
      "Business Systems",
      "Custom Software",
      "Cloud Solutions",
      "Digital Transformation",
    ],
    ctaLabel: "Explore Technology",
    href: "/divisions/technology",
  },
  {
    icon: GraduationCapIcon,
    name: "KREBIG Academy",
    description:
      "Empowering professionals and businesses through practical learning, AI education, digital skills, leadership development, and business training.",
    capabilities: [
      "Professional Training",
      "AI Education",
      "Digital Skills",
      "Business Workshops",
      "Leadership Development",
      "Corporate Learning",
    ],
    ctaLabel: "Explore Academy",
    href: "/divisions/academy",
  },
];

export function DivisionsShowcase({
  eyebrow = "Our Ecosystem",
  heading = "Our Divisions",
  description = "Each KREBIG division specializes in a core business discipline while working together as one integrated ecosystem to deliver complete business growth solutions.",
  divisions = defaultDivisions,
}: DivisionsShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="divisions-showcase"
      aria-label="Our Divisions"
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
        {divisions.map((division) => {
          const Icon = division.icon;
          return (
            <m.div
              key={division.name}
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
                  <CardTitle>{division.name}</CardTitle>
                  <Text variant="small" className="text-muted-foreground text-pretty">
                    {division.description}
                  </Text>

                  <div className="mt-4">
                    <Text
                      variant="caption"
                      className="text-muted-foreground font-semibold tracking-wide uppercase"
                    >
                      Key Capabilities
                    </Text>
                    <ul className="mt-1.5 flex flex-col gap-1.5">
                      {division.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="text-foreground flex items-start gap-2 text-sm"
                        >
                          <Check
                            aria-hidden="true"
                            className="text-primary mt-0.5 size-4 shrink-0"
                            strokeWidth={2}
                          />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={division.href}>{division.ctaLabel}</Link>
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
