"use client";

import type { FormEvent } from "react";
import type { LucideIcon } from "lucide-react";
import { MapPin, Mail, Phone, Clock, Download } from "lucide-react";
import Link from "next/link";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  lines: string[];
  href?: string;
}

export interface BusinessGoalOption {
  value: string;
  label: string;
}

export interface ContactProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  infoItems?: ContactInfoItem[];
  formHeading?: string;
  businessGoalOptions?: BusinessGoalOption[];
  primaryFormCtaLabel?: string;
  secondaryFormCtaLabel?: string;
  bandHeading?: string;
  bandDescription?: string;
  bandPrimaryCtaLabel?: string;
  bandPrimaryCtaHref?: string;
  bandSecondaryCtaLabel?: string;
  bandSecondaryCtaHref?: string;
}

const defaultInfoItems: ContactInfoItem[] = [
  {
    icon: MapPin,
    label: "Our Offices",
    lines: ["Dubai, UAE", "Chennai, India", "Global Remote Support"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["hello@krebig.com"],
    href: "mailto:hello@krebig.com",
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+971 XX XXX XXXX"],
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Monday – Friday", "9:00 AM – 6:00 PM"],
  },
];

const defaultBusinessGoalOptions: BusinessGoalOption[] = [
  { value: "launch", label: "Launch" },
  { value: "grow", label: "Grow" },
  { value: "scale", label: "Scale" },
  { value: "enterprise", label: "Enterprise" },
  { value: "other", label: "Other" },
];

const inputClasses =
  "border-input bg-background text-foreground placeholder:text-muted-foreground rounded-input duration-fast ease-standard w-full border px-4 py-2.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function FormField({
  id,
  label,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-foreground text-sm font-medium">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className={inputClasses}
      />
    </div>
  );
}

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

export function Contact({
  eyebrow = "Contact",
  heading = "Let's Build Your Next Growth Story",
  description = "Whether you're launching a new business, accelerating growth, or transforming an enterprise, our team is ready to help.",
  infoItems = defaultInfoItems,
  formHeading = "Start the Conversation",
  businessGoalOptions = defaultBusinessGoalOptions,
  primaryFormCtaLabel = "Book a Strategy Call",
  secondaryFormCtaLabel = "Schedule a Consultation",
  bandHeading = "Ready to Engineer Your Business Growth?",
  bandDescription = "Partner with KREBIG to combine strategy, creativity, technology, and AI into one powerful growth engine.",
  bandPrimaryCtaLabel = "Book Your Strategy Call",
  bandPrimaryCtaHref = "/#contact",
  bandSecondaryCtaLabel = "Download Company Profile",
  bandSecondaryCtaHref = "/company-profile.pdf",
}: ContactProps) {
  return (
    <Section id="contact" aria-label="Contact" tone="muted" spacing="xl" containerSize="lg">
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
        {/* Contact information */}
        <m.div variants={fadeInUp} className="lg:col-span-2">
          <Card className="flex h-full flex-col gap-8 p-8">
            {infoItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex flex-col gap-1">
                  {item.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              );
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="bg-accent text-accent-foreground flex size-12 shrink-0 items-center justify-center rounded-xl"
                  >
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <Text variant="small" className="text-foreground font-semibold">
                      {item.label}
                    </Text>
                    <Text variant="small" className="text-muted-foreground" as="div">
                      {item.href ? (
                        <a
                          href={item.href}
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
          </Card>
        </m.div>

        {/* Contact form */}
        <m.div variants={fadeInUp} className="lg:col-span-3">
          <Card className="p-8">
            <Heading level={3} className="text-xl">
              {formHeading}
            </Heading>
            <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField id="fullName" label="Full Name" autoComplete="name" required />
                <FormField id="company" label="Company" autoComplete="organization" />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  id="email"
                  label="Email Address"
                  type="email"
                  autoComplete="email"
                  required
                />
                <FormField id="phone" label="Phone Number" type="tel" autoComplete="tel" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="businessGoal" className="text-foreground text-sm font-medium">
                  Business Goal
                </label>
                <select
                  id="businessGoal"
                  name="businessGoal"
                  className={inputClasses}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {businessGoalOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-foreground text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <div className="mt-2 flex flex-col gap-4 sm:flex-row">
                <Button type="submit" size="lg" className="sm:flex-1">
                  {primaryFormCtaLabel}
                </Button>
                <Button type="submit" size="lg" variant="outline" className="sm:flex-1">
                  {secondaryFormCtaLabel}
                </Button>
              </div>
            </form>
          </Card>
        </m.div>
      </m.div>

      {/* Bottom CTA band */}
      <m.div
        className="from-primary to-accent-foreground text-primary-foreground rounded-card mt-16 flex flex-col items-center gap-6 bg-gradient-to-br p-8 text-center lg:mt-20 lg:p-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
      >
        <Heading level={3} className="text-primary-foreground">
          {bandHeading}
        </Heading>
        <Text variant="lead" className="text-primary-foreground/85 max-w-2xl text-pretty">
          {bandDescription}
        </Text>
        <m.div variants={fadeInUp} className="flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
            <Link href={bandPrimaryCtaHref}>{bandPrimaryCtaLabel}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
          >
            <Link href={bandSecondaryCtaHref}>
              <Download aria-hidden="true" className="size-4" />
              {bandSecondaryCtaLabel}
            </Link>
          </Button>
        </m.div>
      </m.div>
    </Section>
  );
}
