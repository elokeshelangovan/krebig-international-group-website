"use client";

import type { ComponentType, ReactNode } from "react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
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

export interface Division {
  icon: ComponentType<IconProps>;
  name: string;
  description: string;
  href: string;
}

export interface DivisionsProps {
  eyebrow?: string;
  heading?: ReactNode;
  description?: string;
  divisions?: Division[];
}

const defaultDivisions: Division[] = [
  {
    icon: BroadcastIcon,
    name: "KREBIG Digital Media",
    description:
      "Performance marketing, SEO, paid advertising, branding and growth marketing solutions.",
    href: "/divisions/digital-media",
  },
  {
    icon: FilmIcon,
    name: "KREBIG Studio",
    description:
      "Commercial production, AI filmmaking, photography, video editing and creative storytelling.",
    href: "/divisions/studio",
  },
  {
    icon: CodeIcon,
    name: "KREBIG Technology",
    description:
      "AI automation, software development, websites, SaaS platforms and digital transformation.",
    href: "/divisions/technology",
  },
  {
    icon: GraduationCapIcon,
    name: "KREBIG Academy",
    description: "Professional education, AI training, marketing courses and executive learning.",
    href: "/divisions/academy",
  },
];

export function Divisions({
  eyebrow = "Our Divisions",
  heading = (
    <>
      One Group.
      <br />
      Multiple Specialized Companies.
    </>
  ),
  description = "KREBIG International Group combines specialized companies under one strategic ecosystem—delivering marketing, creative, technology and education solutions as a single accountable growth partner.",
  divisions = defaultDivisions,
}: DivisionsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="divisions" aria-label="Our Divisions" tone="muted" spacing="xl" containerSize="lg">
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
        {divisions.map((division, index) => {
          const Icon = division.icon;
          return (
            <m.div
              key={division.name}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:border-primary/30 hover:shadow-dropdown duration-base ease-standard relative flex h-full flex-col justify-between overflow-hidden transition-[border-color,box-shadow]">
                <span
                  aria-hidden="true"
                  className="text-muted-foreground/30 absolute top-6 right-6 font-mono text-xs"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <CardHeader>
                  <span
                    aria-hidden="true"
                    className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard mb-2 flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                  >
                    <Icon className="size-6" />
                  </span>
                  <CardTitle className="pr-8">{division.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {division.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={division.href}>Learn More</Link>
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
