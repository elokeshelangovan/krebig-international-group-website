"use client";

import Link from "next/link";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { defaultPositions, type OpenPosition } from "./data";

export type { OpenPosition };
export { defaultPositions };

export interface OpenOpportunitiesProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  positions?: OpenPosition[];
}

export function OpenOpportunities({
  eyebrow = "Open Opportunities",
  heading = "Current Opportunities",
  description = "We're always looking for talented professionals who are passionate about innovation, creativity, technology, and business growth.",
  positions = defaultPositions,
}: OpenOpportunitiesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="open-opportunities"
      aria-label="Current Opportunities"
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
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {positions.map((position) => {
          const Icon = position.icon;
          return (
            <m.div
              key={position.slug}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:border-primary/30 hover:shadow-dropdown duration-base ease-standard flex h-full flex-col justify-between transition-[border-color,box-shadow]">
                <CardHeader className="flex-1 gap-3">
                  <span
                    aria-hidden="true"
                    className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                  >
                    <Icon className="size-6" />
                  </span>
                  <CardTitle className="text-lg leading-snug">{position.title}</CardTitle>
                  <dl className="text-muted-foreground flex flex-col gap-1.5 text-sm">
                    <div className="flex items-center gap-2">
                      <Briefcase aria-hidden="true" className="size-4 shrink-0" />
                      <dt className="sr-only">Department</dt>
                      <dd>{position.department}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin aria-hidden="true" className="size-4 shrink-0" />
                      <dt className="sr-only">Location</dt>
                      <dd>{position.location}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock aria-hidden="true" className="size-4 shrink-0" />
                      <dt className="sr-only">Employment type</dt>
                      <dd>{position.employmentType}</dd>
                    </div>
                  </dl>
                  <Text variant="small" className="text-muted-foreground text-pretty">
                    {position.summary}
                  </Text>
                </CardHeader>
                <CardFooter>
                  <Button asChild size="sm">
                    <Link href={position.href} aria-label={`Apply now for ${position.title}`}>
                      Apply Now
                    </Link>
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
