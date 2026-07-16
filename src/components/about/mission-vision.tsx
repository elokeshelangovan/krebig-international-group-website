"use client";

import type { ComponentType } from "react";
import { m } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { FlagIcon, EyeIcon } from "@/components/sections/about-icons";
import type { IconProps } from "@/components/sections/services-icons";

export interface MissionVisionProps {
  eyebrow?: string;
  heading?: string;
  missionHeading?: string;
  missionContent?: string;
  visionHeading?: string;
  visionContent?: string;
}

function IconPanel({ icon: Icon }: { icon: ComponentType<IconProps> }) {
  return (
    <m.div
      variants={fadeInUp}
      className="bg-primary text-primary-foreground shadow-modal flex aspect-square w-full max-w-xs items-center justify-center rounded-3xl sm:max-w-sm"
    >
      <Icon className="size-16 sm:size-20" strokeWidth={1.25} />
    </m.div>
  );
}

export function MissionVision({
  eyebrow = "Mission & Vision",
  heading = "What We're Working Toward",
  missionHeading = "Our Mission",
  missionContent = "To become the trusted long-term growth partner for ambitious businesses by combining strategic thinking, creative execution, advanced technology and AI into measurable business outcomes.",
  visionHeading = "Our Vision",
  visionContent = "To build one of the world's most respected AI-powered business growth companies, helping organizations innovate, scale and compete globally.",
}: MissionVisionProps) {
  return (
    <Section
      id="mission-vision"
      aria-label="Mission and Vision"
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
      </m.div>

      <m.div
        className="mx-auto mt-12 grid max-w-4xl items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <div className="mx-auto">
          <IconPanel icon={FlagIcon} />
        </div>
        <div className="flex flex-col items-start gap-3 text-left">
          <m.div variants={fadeInUp}>
            <Heading level={3}>{missionHeading}</Heading>
          </m.div>
          <m.div variants={fadeInUp}>
            <Text variant="body" className="text-muted-foreground text-pretty">
              {missionContent}
            </Text>
          </m.div>
        </div>
      </m.div>

      <m.div
        className="mx-auto mt-12 grid max-w-4xl items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <div className="flex flex-col items-start gap-3 text-left">
          <m.div variants={fadeInUp}>
            <Heading level={3}>{visionHeading}</Heading>
          </m.div>
          <m.div variants={fadeInUp}>
            <Text variant="body" className="text-muted-foreground text-pretty">
              {visionContent}
            </Text>
          </m.div>
        </div>
        <div className="mx-auto">
          <IconPanel icon={EyeIcon} />
        </div>
      </m.div>
    </Section>
  );
}
