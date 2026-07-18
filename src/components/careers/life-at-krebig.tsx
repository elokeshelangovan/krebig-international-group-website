"use client";

import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import { Users, GraduationCap, Palette, Laptop, Award, TrendingUp } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface CultureMoment {
  icon: ComponentType<LucideProps>;
  label: string;
}

export interface LifeAtKrebigProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  moments?: CultureMoment[];
}

const defaultMoments: CultureMoment[] = [
  { icon: Users, label: "Collaboration" },
  { icon: GraduationCap, label: "Learning" },
  { icon: Palette, label: "Creativity" },
  { icon: Laptop, label: "Technology" },
  { icon: Award, label: "Leadership" },
  { icon: TrendingUp, label: "Growth" },
];

export function LifeAtKrebig({
  eyebrow = "Our Culture",
  heading = "Life at KREBIG",
  description = "A look at the people, disciplines, and moments that shape how we work together every day.",
  moments = defaultMoments,
}: LifeAtKrebigProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="life-at-krebig"
      aria-label="Life at KREBIG"
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
        className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-3 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {moments.map((moment, index) => {
          const Icon = moment.icon;
          return (
            <m.div
              key={moment.label}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={index === 0 ? "col-span-2 lg:col-span-1" : undefined}
            >
              <div
                className={`from-primary to-accent-foreground group hover:shadow-modal duration-base ease-standard relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br transition-shadow ${
                  index % 2 === 1 ? "to-primary from-accent-foreground" : ""
                }`}
              >
                <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-20">
                  <defs>
                    <pattern
                      id={`life-at-krebig-grid-${moment.label}`}
                      width="22"
                      height="22"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="1.25" cy="1.25" r="1.25" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill={`url(#life-at-krebig-grid-${moment.label})`}
                  />
                </svg>
                <Icon
                  aria-hidden="true"
                  className="text-primary-foreground/90 relative size-12 transition-transform duration-300 group-hover:scale-110 sm:size-14"
                  strokeWidth={1.25}
                />
                <span className="bg-popover text-popover-foreground shadow-dropdown absolute bottom-4 left-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                  {moment.label}
                </span>
              </div>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
