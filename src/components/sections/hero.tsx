"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { HeroVisual } from "@/components/sections/hero-visual";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { easing } from "@/lib/motion/tokens";

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
}

const defaultPrimaryCta: HeroCta = { label: "Book a Strategy Call", href: "/contact" };
const defaultSecondaryCta: HeroCta = { label: "Explore Our Services", href: "/services" };

export function Hero({
  eyebrow = "AI-Powered Business Growth Partner",
  heading = "Engineer Enterprise Growth with Strategy, Creative & AI",
  description = "KREBIG International Group unifies strategy, marketing, creative, and technology under one AI-powered growth engine — helping ambitious enterprises launch faster, scale smarter, and outperform the market.",
  primaryCta = defaultPrimaryCta,
  secondaryCta = defaultSecondaryCta,
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const scrollToNext = () => {
    if (typeof window === "undefined") return;
    window.scrollBy({
      top: window.innerHeight,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      <Container size="lg">
        <m.div
          className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-0"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="flex flex-col items-start gap-6 text-left">
            <m.span
              variants={fadeInUp}
              className="border-border bg-accent text-accent-foreground inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase"
            >
              {eyebrow}
            </m.span>

            <m.div variants={fadeInUp}>
              <Heading level={1}>{heading}</Heading>
            </m.div>

            <m.div variants={fadeInUp}>
              <Text variant="lead" className="text-muted-foreground max-w-xl text-pretty">
                {description}
              </Text>
            </m.div>

            <m.div variants={fadeInUp} className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </m.div>
          </div>

          <m.div variants={fadeInUp}>
            <HeroVisual />
          </m.div>
        </m.div>
      </Container>

      <m.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2, ease: easing.out }}
      >
        {/* The hit target stays perfectly still; only the decorative icon moves,
            so the control remains a stable, easy-to-click target (and the loop
            settles after a few cycles rather than animating forever). */}
        <button
          type="button"
          onClick={scrollToNext}
          aria-label="Scroll down to continue"
          className="border-border text-muted-foreground hover:text-foreground focus-visible:ring-ring duration-fast flex flex-col items-center gap-2 rounded-full text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          <span>Scroll</span>
          <m.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="size-5"
            animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 1.8, repeat: 4, ease: easing.standard, delay: 1.6 }
            }
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </m.svg>
        </button>
      </m.div>
    </section>
  );
}
