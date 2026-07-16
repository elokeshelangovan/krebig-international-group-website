"use client";

import type { LucideIcon } from "lucide-react";
import { Lightbulb, GraduationCap, Globe, Users, Briefcase, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface CareerFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface OpenRole {
  title: string;
  department: string;
  location: string;
  employmentType: string;
  href: string;
}

export interface CareersProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  features?: CareerFeature[];
  rolesHeading?: string;
  roles?: OpenRole[];
  ctaHeading?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

const defaultFeatures: CareerFeature[] = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Work with cutting-edge AI, automation, digital marketing, and technology projects.",
  },
  {
    icon: GraduationCap,
    title: "Growth",
    description: "Continuous learning, mentorship, certifications, and career development.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Collaborate with clients across the UAE, India, and international markets.",
  },
  {
    icon: Users,
    title: "Culture",
    description:
      "A high-performance, collaborative environment focused on ownership, creativity, and continuous improvement.",
  },
];

const defaultRoles: OpenRole[] = [
  {
    title: "Digital Marketing Specialist",
    department: "Digital Media",
    location: "Dubai, UAE",
    employmentType: "Full-time",
    href: "/careers/digital-marketing-specialist",
  },
  {
    title: "AI Automation Engineer",
    department: "Technology",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    href: "/careers/ai-automation-engineer",
  },
  {
    title: "Creative Designer",
    department: "Creative Studio",
    location: "Remote",
    employmentType: "Full-time",
    href: "/careers/creative-designer",
  },
];

export function Careers({
  eyebrow = "Careers",
  heading = "Build the Future With KREBIG",
  description = "Join a team that's shaping the future of business growth through strategy, creativity, technology, and AI. We're always looking for ambitious people who love solving meaningful challenges.",
  features = defaultFeatures,
  rolesHeading = "Open Roles",
  roles = defaultRoles,
  ctaHeading = "Ready to Build Something Extraordinary?",
  primaryCtaLabel = "View Open Positions",
  primaryCtaHref = "/careers",
  secondaryCtaLabel = "Join Our Talent Network",
  secondaryCtaHref = "/careers/talent-network",
}: CareersProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="careers" aria-label="Careers" tone="default" spacing="xl" containerSize="lg">
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

      {/* Feature highlights */}
      <m.div
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <m.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:shadow-dropdown duration-base ease-standard flex h-full flex-col items-center gap-2 p-6 text-center transition-shadow">
                <span
                  aria-hidden="true"
                  className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                >
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <Heading level={3} className="text-base">
                  {feature.title}
                </Heading>
                <Text variant="small" className="text-muted-foreground text-pretty">
                  {feature.description}
                </Text>
              </Card>
            </m.div>
          );
        })}
      </m.div>

      {/* Open roles preview */}
      <m.div
        className="mt-16 lg:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <m.div variants={fadeInUp}>
          <Heading level={3} className="text-center">
            {rolesHeading}
          </Heading>
        </m.div>

        <m.div
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {roles.map((role) => (
            <m.div
              key={role.title}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <Card className="hover:shadow-dropdown duration-base ease-standard flex h-full flex-col justify-between transition-shadow">
                <CardHeader>
                  <CardTitle>{role.title}</CardTitle>
                  <dl className="mt-2 flex flex-col gap-1.5 text-sm">
                    <div className="text-muted-foreground flex items-center gap-2">
                      <Briefcase aria-hidden="true" className="size-4 shrink-0" />
                      <dt className="sr-only">Department</dt>
                      <dd>{role.department}</dd>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-2">
                      <MapPin aria-hidden="true" className="size-4 shrink-0" />
                      <dt className="sr-only">Location</dt>
                      <dd>{role.location}</dd>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-2">
                      <Clock aria-hidden="true" className="size-4 shrink-0" />
                      <dt className="sr-only">Employment type</dt>
                      <dd>{role.employmentType}</dd>
                    </div>
                  </dl>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={role.href}>View Position</Link>
                  </Button>
                </CardFooter>
              </Card>
            </m.div>
          ))}
        </m.div>
      </m.div>

      {/* Bottom CTA */}
      <m.div
        className="mt-16 flex flex-col items-center gap-6 text-center lg:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <m.div variants={fadeInUp}>
          <Heading level={3}>{ctaHeading}</Heading>
        </m.div>
        <m.div variants={fadeInUp} className="flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
          </Button>
        </m.div>
      </m.div>
    </Section>
  );
}
