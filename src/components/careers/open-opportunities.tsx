"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { MegaphoneIcon, PenToolIcon, type IconProps } from "@/components/sections/services-icons";
import { CodeIcon, FilmIcon, BriefcaseIcon } from "@/components/sections/divisions-icons";
import { CpuIcon } from "@/components/sections/industries-icons";

/**
 * `slug`, `departmentSlug`, and `locationType` are future-ready for an ATS
 * integration and department/location filtering; `href` currently points
 * to the general contact section until an online application flow exists.
 */
export interface OpenPosition {
  slug: string;
  icon: ComponentType<IconProps>;
  title: string;
  employmentType: string;
  location: string;
  locationType: "on-site" | "hybrid" | "remote";
  department: string;
  departmentSlug: string;
  summary: string;
  href: string;
}

export interface OpenOpportunitiesProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  positions?: OpenPosition[];
}

const defaultPositions: OpenPosition[] = [
  {
    slug: "digital-marketing-specialist",
    icon: MegaphoneIcon,
    title: "Digital Marketing Specialist",
    employmentType: "Full-Time",
    location: "Dubai, UAE",
    locationType: "on-site",
    department: "Digital Media",
    departmentSlug: "digital-media",
    summary:
      "Plan and execute performance-driven campaigns across paid, organic, and social channels for KREBIG clients.",
    href: "/#contact",
  },
  {
    slug: "ui-ux-designer",
    icon: PenToolIcon,
    title: "UI/UX Designer",
    employmentType: "Full-Time",
    location: "Hybrid",
    locationType: "hybrid",
    department: "Creative Studio",
    departmentSlug: "studio",
    summary:
      "Design intuitive, on-brand digital experiences across web, product, and marketing surfaces.",
    href: "/#contact",
  },
  {
    slug: "full-stack-developer",
    icon: CodeIcon,
    title: "Full Stack Developer",
    employmentType: "Full-Time",
    location: "Hybrid",
    locationType: "hybrid",
    department: "Technology",
    departmentSlug: "technology",
    summary:
      "Build and ship scalable web applications and business systems using modern frameworks.",
    href: "/#contact",
  },
  {
    slug: "ai-automation-engineer",
    icon: CpuIcon,
    title: "AI Automation Engineer",
    employmentType: "Full-Time",
    location: "Remote",
    locationType: "remote",
    department: "Technology",
    departmentSlug: "technology",
    summary:
      "Design and deploy AI-driven automation that streamlines business operations for clients.",
    href: "/#contact",
  },
  {
    slug: "video-editor-motion-designer",
    icon: FilmIcon,
    title: "Video Editor & Motion Designer",
    employmentType: "Full-Time",
    location: "Dubai, UAE",
    locationType: "on-site",
    department: "Creative Studio",
    departmentSlug: "studio",
    summary: "Create polished video content and motion graphics for brand and campaign work.",
    href: "/#contact",
  },
  {
    slug: "business-development-executive",
    icon: BriefcaseIcon,
    title: "Business Development Executive",
    employmentType: "Full-Time",
    location: "Dubai, UAE",
    locationType: "on-site",
    department: "Business Strategy",
    departmentSlug: "business-strategy",
    summary: "Identify new business opportunities and build lasting client relationships.",
    href: "/#contact",
  },
];

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
                    <Link href={position.href}>Apply Now</Link>
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
