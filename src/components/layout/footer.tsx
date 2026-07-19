"use client";

import * as React from "react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils/cn";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import {
  footerNav,
  legalNav,
  socialLinks,
  type FooterColumn,
  type SocialLink,
  type NavItem,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";

export interface FooterProps {
  logo?: React.ReactNode;
  description?: string;
  columns?: FooterColumn[];
  socials?: SocialLink[];
  legalLinks?: NavItem[];
  ctaHeading?: string;
  ctaDescription?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  className?: string;
}

export function Footer({
  logo = siteConfig.name,
  description = "KREBIG International Group is an AI-powered business growth partner helping companies launch, grow, scale and transform globally.",
  columns = footerNav,
  socials = socialLinks,
  legalLinks = legalNav,
  ctaHeading = "Ready To Build Something Bigger?",
  ctaDescription = "Partner with KREBIG International Group and transform your business through strategy, creativity, technology and AI.",
  ctaPrimaryLabel = "Book Strategy Call",
  ctaPrimaryHref = "/contact",
  ctaSecondaryLabel = "Contact Our Team",
  ctaSecondaryHref = "/contact",
  className,
}: FooterProps) {
  const shouldReduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className={cn("bg-neutral-950 text-neutral-300", className)}>
      {/* Top CTA strip */}
      <div className="border-b border-white/10 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-950">
        <Container size="lg">
          <m.div
            className="flex flex-col items-center gap-6 py-16 text-center lg:py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <m.div variants={fadeInUp}>
              <Heading level={2} className="text-white">
                {ctaHeading}
              </Heading>
            </m.div>
            <m.div variants={fadeInUp}>
              <Text variant="lead" className="max-w-2xl text-pretty text-indigo-100">
                {ctaDescription}
              </Text>
            </m.div>
            <m.div variants={fadeInUp} className="flex flex-col items-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
                <Link href={ctaPrimaryHref}>{ctaPrimaryLabel}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={ctaSecondaryHref}>{ctaSecondaryLabel}</Link>
              </Button>
            </m.div>
          </m.div>
        </Container>
      </div>

      {/* Main footer */}
      <Container size="lg">
        <m.div
          className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:grid-cols-3 lg:grid-cols-6 lg:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <m.div
            variants={fadeInUp}
            className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-2"
          >
            <span className="text-lg font-semibold tracking-tight text-white">{logo}</span>
            <Text variant="small" className="max-w-xs text-pretty text-neutral-400">
              {description}
            </Text>
            {socials.length > 0 ? (
              <ul className="mt-2 flex items-center gap-3">
                {socials.map((social) => {
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
                        className="border-input/20 duration-fast ease-standard flex size-11 items-center justify-center rounded-full border text-neutral-400 transition-colors hover:border-white/30 hover:bg-white/5 hover:text-white"
                      >
                        <Icon className="size-4" />
                      </m.a>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </m.div>

          {columns.map((column) => (
            <m.nav
              key={column.title}
              aria-label={column.title}
              variants={fadeInUp}
              className="flex flex-col gap-4"
            >
              <Text
                variant="small"
                as="span"
                className="font-semibold tracking-wide text-white uppercase"
              >
                {column.title}
              </Text>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="duration-fast ease-standard text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </m.nav>
          ))}
        </m.div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container size="lg">
          <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            <Text variant="caption" className="text-neutral-400">
              &copy; {year} {siteConfig.name}. All Rights Reserved.
            </Text>
            {legalLinks.length > 0 ? (
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="duration-fast ease-standard text-xs text-neutral-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Container>
      </div>
    </footer>
  );
}
