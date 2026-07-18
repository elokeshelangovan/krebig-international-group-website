"use client";

import type { ComponentType } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { duration, easing } from "@/lib/motion/tokens";
import {
  BroadcastIcon,
  FilmIcon,
  CodeIcon,
  GraduationCapIcon,
} from "@/components/sections/divisions-icons";
import type { IconProps } from "@/components/sections/services-icons";

export interface CollaborationNode {
  icon: ComponentType<IconProps>;
  name: string;
  contribution: string;
}

export interface DivisionsCollaborationProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  hubLabel?: string;
  nodes?: CollaborationNode[];
}

const defaultNodes: CollaborationNode[] = [
  {
    icon: BroadcastIcon,
    name: "Digital Media",
    contribution: "Drives visibility, leads, and growth.",
  },
  {
    icon: FilmIcon,
    name: "Studio",
    contribution: "Creates compelling visual experiences and brand storytelling.",
  },
  {
    icon: CodeIcon,
    name: "Technology",
    contribution: "Builds scalable digital platforms, automation, and AI systems.",
  },
  {
    icon: GraduationCapIcon,
    name: "Academy",
    contribution: "Develops people, skills, and organizational capability.",
  },
];

// Percentage anchors on a square canvas: top, right, bottom, left — matched
// between the SVG connector lines and the absolutely-positioned node cards.
const ANCHORS = [
  { x: 50, y: 6 },
  { x: 94, y: 50 },
  { x: 50, y: 94 },
  { x: 6, y: 50 },
];

const NODE_POSITION_CLASSES = [
  "top-0 left-1/2 -translate-x-1/2",
  "top-1/2 right-0 -translate-y-1/2",
  "bottom-0 left-1/2 -translate-x-1/2",
  "top-1/2 left-0 -translate-y-1/2",
];

function HubBadge({ label }: { label: string }) {
  return (
    <span
      className="bg-primary text-primary-foreground shadow-modal ring-background flex size-28 flex-col items-center justify-center gap-0.5 rounded-full text-center ring-8"
      aria-hidden="true"
    >
      <span className="text-lg font-bold tracking-tight">{label}</span>
      <span className="text-[10px] font-medium tracking-wide uppercase opacity-80">One Vision</span>
    </span>
  );
}

function NodeCard({ node }: { node: CollaborationNode }) {
  const Icon = node.icon;
  return (
    <div className="border-border bg-card shadow-dropdown flex w-40 flex-col items-center gap-1.5 rounded-2xl border p-4 text-center sm:w-48">
      <span
        aria-hidden="true"
        className="bg-accent text-accent-foreground mb-1 flex size-9 items-center justify-center rounded-lg"
      >
        <Icon className="size-5" />
      </span>
      <Text as="span" variant="small" className="font-semibold">
        {node.name}
      </Text>
      <Text variant="caption" className="text-muted-foreground text-pretty">
        {node.contribution}
      </Text>
    </div>
  );
}

export function DivisionsCollaboration({
  eyebrow = "How Our Divisions Collaborate",
  heading = "One Vision. Four Specialized Divisions.",
  description = "Every KREBIG division has its own expertise, but the greatest value comes from how they work together. By combining strategy, creativity, technology, and learning, we deliver integrated solutions that create measurable business growth.",
  hubLabel = "KREBIG",
  nodes = defaultNodes,
}: DivisionsCollaborationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="divisions-collaboration"
      aria-label="How Our Divisions Collaborate"
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

      {/* Desktop: radial hub-and-spoke diagram */}
      <div className="mt-16 hidden justify-center lg:flex">
        <m.div
          className="relative aspect-square w-full max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient
                id="collab-spoke-gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="100"
                y2="100"
              >
                <stop offset="0%" stopColor="var(--color-primary)" />
                <stop offset="100%" stopColor="var(--color-accent-foreground)" />
              </linearGradient>
            </defs>
            {ANCHORS.map((anchor, index) => (
              <m.line
                key={`spoke-${anchor.x}-${anchor.y}`}
                x1={50}
                y1={50}
                x2={anchor.x}
                y2={anchor.y}
                stroke="url(#collab-spoke-gradient)"
                strokeWidth="0.6"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{
                  duration: duration.slow,
                  delay: 0.2 + index * 0.1,
                  ease: easing.out,
                }}
              />
            ))}
          </svg>

          <m.div
            variants={fadeInUp}
            className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <HubBadge label={hubLabel} />
          </m.div>

          {nodes.map((node, index) => (
            <m.div
              key={node.name}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={`absolute z-10 ${NODE_POSITION_CLASSES[index]}`}
            >
              <NodeCard node={node} />
            </m.div>
          ))}
        </m.div>
      </div>

      {/* Mobile / tablet: hub above a responsive grid of division nodes */}
      <m.div
        className="mt-12 flex flex-col items-center gap-8 lg:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <m.div variants={fadeInUp}>
          <HubBadge label={hubLabel} />
        </m.div>
        <div aria-hidden="true" className="border-border -mt-8 h-8 border-l border-dashed" />
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
          {nodes.map((node) => (
            <m.div key={node.name} variants={fadeInUp} className="flex justify-center">
              <NodeCard node={node} />
            </m.div>
          ))}
        </div>
      </m.div>
    </Section>
  );
}
