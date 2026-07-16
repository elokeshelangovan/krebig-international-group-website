"use client";

import type { ComponentType } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { MapPinIcon } from "@/components/about/presence-icons";
import { GlobeIcon } from "@/components/sections/divisions-icons";
import type { IconProps } from "@/components/sections/services-icons";

export interface PresenceRegion {
  icon: ComponentType<IconProps>;
  name: string;
  capabilities: string[];
}

export interface GlobalPresenceProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  regions?: PresenceRegion[];
}

const defaultRegions: PresenceRegion[] = [
  {
    icon: MapPinIcon,
    name: "UAE",
    capabilities: ["Business Strategy", "Market Expansion", "Growth Consulting"],
  },
  {
    icon: MapPinIcon,
    name: "India",
    capabilities: ["Creative", "Technology", "Digital Execution"],
  },
  {
    icon: GlobeIcon,
    name: "Global",
    capabilities: ["Remote Collaboration", "AI Solutions", "Scalable Growth Systems"],
  },
];

export function GlobalPresence({
  eyebrow = "Global Presence",
  heading = "Built For Businesses Without Borders",
  description = "KREBIG is designed to support ambitious businesses across the UAE, India and international markets through an integrated business growth ecosystem.",
  regions = defaultRegions,
}: GlobalPresenceProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="global-presence"
      aria-label="Global Presence"
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
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-16 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {regions.map((region) => {
          const Icon = region.icon;
          return (
            <m.div
              key={region.name}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:shadow-dropdown duration-base ease-standard flex h-full flex-col transition-shadow">
                <CardHeader>
                  <span
                    aria-hidden="true"
                    className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard mb-2 flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                  >
                    <Icon className="size-6" />
                  </span>
                  <CardTitle>{region.name}</CardTitle>
                </CardHeader>
                <ul className="flex flex-col gap-2 px-6 pb-6">
                  {region.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="text-muted-foreground flex items-center gap-2 text-sm"
                    >
                      <span
                        aria-hidden="true"
                        className="bg-primary size-1.5 shrink-0 rounded-full"
                      />
                      {capability}
                    </li>
                  ))}
                </ul>
              </Card>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
