"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { LifeBuoy } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { BriefcaseIcon, GraduationCapIcon } from "@/components/sections/divisions-icons";
import { TrendingUpIcon, type IconProps } from "@/components/sections/services-icons";

/**
 * `href` uses `mailto:` placeholders for channels without a dedicated page
 * yet; Careers already has a real route, so it links there directly.
 */
export interface ContactMethod {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

export interface ContactMethodsProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  methods?: ContactMethod[];
}

const defaultMethods: ContactMethod[] = [
  {
    icon: BriefcaseIcon,
    title: "Business Enquiries",
    description: "For partnerships, projects, and general business discussions.",
    ctaLabel: "Email Business Team",
    href: "mailto:business@krebig.com",
  },
  {
    icon: TrendingUpIcon,
    title: "Sales",
    description: "For service-related enquiries and business growth consultations.",
    ctaLabel: "Email Sales Team",
    href: "mailto:sales@krebig.com",
  },
  {
    icon: GraduationCapIcon,
    title: "Careers",
    description: "For job applications and recruitment-related questions.",
    ctaLabel: "View Careers",
    href: "/careers",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description: "For existing client assistance and technical support.",
    ctaLabel: "Email Support Team",
    href: "mailto:support@krebig.com",
  },
];

export function ContactMethods({
  eyebrow = "Contact Methods",
  heading = "How Can We Help?",
  description = "Reach the right team directly, or send a general enquiry and we'll route it for you.",
  methods = defaultMethods,
}: ContactMethodsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="contact-methods"
      aria-label="How Can We Help?"
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
        {methods.map((method) => {
          const Icon = method.icon;
          return (
            <m.div
              key={method.title}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:border-primary/30 hover:shadow-dropdown duration-base ease-standard flex h-full flex-col justify-between transition-[border-color,box-shadow]">
                <CardHeader className="flex-1 gap-2">
                  <span
                    aria-hidden="true"
                    className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard mb-2 flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                  >
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <Text variant="small" className="text-muted-foreground text-pretty">
                    {method.description}
                  </Text>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={method.href}>{method.ctaLabel}</Link>
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
