"use client";

import type { LucideIcon } from "lucide-react";
import { MapPin, Clock, Mail, Phone, Map as MapIcon } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { socialLinks } from "@/config/navigation";

export interface OfficeDetail {
  icon: LucideIcon;
  label: string;
  lines: string[];
  href?: string;
}

export interface OfficeInformationProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  details?: OfficeDetail[];
}

const defaultDetails: OfficeDetail[] = [
  {
    icon: MapPin,
    label: "Headquarters",
    lines: ["Business Bay", "Dubai, United Arab Emirates"],
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Monday – Friday", "9:00 AM – 6:00 PM (GST)"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@krebiginternationalgroup.com"],
    href: "mailto:info@krebiginternationalgroup.com",
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+971 56 783 6566"],
    href: "tel:+971567836566",
  },
];

export function OfficeInformation({
  eyebrow = "Our Office",
  heading = "Our Office",
  description = "Here's where to find us and the fastest ways to get in touch.",
  details = defaultDetails,
}: OfficeInformationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="office-information"
      aria-label="Our Office"
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
        className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-5 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {/* Office details */}
        <m.div variants={fadeInUp} className="lg:col-span-2">
          <Card className="flex h-full flex-col gap-8 p-8">
            {details.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <div className="flex flex-col gap-1">
                  {detail.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              );
              return (
                <div key={detail.label} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="bg-accent text-accent-foreground flex size-12 shrink-0 items-center justify-center rounded-xl"
                  >
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <Text variant="small" className="text-foreground font-semibold">
                      {detail.label}
                    </Text>
                    <Text variant="small" className="text-muted-foreground" as="div">
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="hover:text-primary duration-fast ease-standard transition-colors"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </Text>
                  </div>
                </div>
              );
            })}

            {/* Social media links */}
            <div className="border-border flex flex-col gap-3 border-t pt-6">
              <Text variant="small" className="text-foreground font-semibold">
                Follow Us
              </Text>
              <ul className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.label}>
                      <m.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                        transition={{ type: "spring", stiffness: 300, damping: 24 }}
                        className="border-border text-muted-foreground hover:border-primary/30 hover:bg-accent hover:text-primary duration-fast ease-standard flex size-11 items-center justify-center rounded-full border transition-colors"
                      >
                        <Icon className="size-4" />
                      </m.a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Card>
        </m.div>

        {/* Map placeholder */}
        <m.div variants={fadeInUp} className="lg:col-span-3">
          <div className="border-border bg-muted rounded-card relative flex h-full min-h-80 items-center justify-center overflow-hidden border">
            <svg
              aria-hidden="true"
              className="text-border absolute inset-0 h-full w-full opacity-60"
            >
              <defs>
                <pattern id="office-map-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                  <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#office-map-grid)" />
            </svg>
            <div className="relative flex flex-col items-center gap-3 text-center">
              <span
                aria-hidden="true"
                className="bg-primary text-primary-foreground shadow-dropdown flex size-14 items-center justify-center rounded-full"
              >
                <MapIcon className="size-6" strokeWidth={1.75} />
              </span>
              <Text variant="small" className="text-muted-foreground max-w-xs text-pretty">
                Interactive map coming soon. In the meantime, reach us using the details alongside.
              </Text>
            </div>
          </div>
        </m.div>
      </m.div>
    </Section>
  );
}
