"use client";

import type { ComponentType } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { StarIcon } from "@/components/sections/testimonials-icons";
import { SparklesIcon, CompassIcon, type IconProps } from "@/components/sections/services-icons";
import { GlobeIcon } from "@/components/sections/divisions-icons";
import { ShieldIcon } from "@/components/sections/industries-icons";

export interface Testimonial {
  name: string;
  company: string;
  industry: string;
  quote: string;
  rating?: number;
}

export interface TrustIndicator {
  icon: ComponentType<IconProps>;
  label: string;
}

export interface BusinessMetric {
  value: number;
  suffix?: string;
  label: string;
}

export interface TestimonialsProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  testimonials?: Testimonial[];
  trustIndicators?: TrustIndicator[];
  metrics?: BusinessMetric[];
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Ahmed Hassan",
    company: "Real Estate Group",
    industry: "Real Estate",
    quote:
      "KREBIG transformed our marketing strategy and significantly increased our qualified leads.",
  },
  {
    name: "Sarah Thomas",
    company: "Healthcare Solutions",
    industry: "Healthcare",
    quote:
      "Their AI automation and digital transformation services helped our team save valuable time.",
  },
  {
    name: "Rajesh Kumar",
    company: "Technology Ventures",
    industry: "Technology",
    quote: "Professional execution, excellent communication and measurable business results.",
  },
];

const defaultTrustIndicators: TrustIndicator[] = [
  { icon: SparklesIcon, label: "AI-Powered Solutions" },
  { icon: CompassIcon, label: "Enterprise Strategy" },
  { icon: GlobeIcon, label: "Global Business Support" },
  { icon: ShieldIcon, label: "Secure & Scalable Technology" },
];

const defaultMetrics: BusinessMetric[] = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export function Testimonials({
  eyebrow = "Client Success",
  heading = "Trusted By Growing Businesses",
  description = "Our clients choose KREBIG International Group because we combine strategy, creativity, technology and AI to deliver measurable business growth.",
  testimonials = defaultTestimonials,
  trustIndicators = defaultTrustIndicators,
  metrics = defaultMetrics,
}: TestimonialsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="testimonials"
      aria-label="Client Testimonials & Trust"
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

      {/* Testimonials */}
      <m.div
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {testimonials.map((testimonial) => {
          const rating = testimonial.rating ?? 5;
          return (
            <m.div
              key={testimonial.name}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <Card className="hover:shadow-dropdown duration-base ease-standard relative h-full transition-shadow">
                <figure className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      role="img"
                      aria-label={`Rated ${rating} out of 5 stars`}
                      className="text-primary flex items-center gap-0.5"
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarIcon
                          key={index}
                          aria-hidden="true"
                          className={index < rating ? "size-4" : "text-muted-foreground/30 size-4"}
                        />
                      ))}
                    </div>
                    <span className="border-border bg-accent text-accent-foreground inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-xs font-semibold">
                      {testimonial.industry}
                    </span>
                  </div>

                  <blockquote className="text-foreground text-sm leading-relaxed text-pretty">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-auto flex items-center gap-3 pt-2">
                    <span
                      aria-hidden="true"
                      className="bg-primary text-primary-foreground flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                    >
                      {getInitials(testimonial.name)}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-foreground text-sm font-semibold">
                        {testimonial.name}
                      </span>
                      <span className="text-muted-foreground text-xs">{testimonial.company}</span>
                    </div>
                  </figcaption>
                </figure>
              </Card>
            </m.div>
          );
        })}
      </m.div>

      {/* Trust indicators */}
      <m.div
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {trustIndicators.map((indicator) => {
          const Icon = indicator.icon;
          return (
            <m.div
              key={indicator.label}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:border-primary/30 hover:shadow-dropdown duration-base ease-standard flex h-full flex-col items-center gap-3 p-6 text-center transition-[border-color,box-shadow]">
                <span
                  aria-hidden="true"
                  className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                >
                  <Icon className="size-6" />
                </span>
                <Text variant="small" className="text-foreground font-semibold">
                  {indicator.label}
                </Text>
              </Card>
            </m.div>
          );
        })}
      </m.div>

      {/* Business metrics */}
      <m.div
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {metrics.map((metric) => (
          <m.div key={metric.label} variants={fadeInUp}>
            <Card className="flex h-full flex-col items-center gap-1.5 p-6 text-center">
              <span className="text-primary text-2xl font-bold tracking-tight sm:text-3xl">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </span>
              <Text variant="small" className="text-muted-foreground">
                {metric.label}
              </Text>
            </Card>
          </m.div>
        ))}
      </m.div>
    </Section>
  );
}
