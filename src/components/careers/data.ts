import type { ComponentType } from "react";
import { MegaphoneIcon, PenToolIcon, type IconProps } from "@/components/sections/services-icons";
import { CodeIcon, FilmIcon, BriefcaseIcon } from "@/components/sections/divisions-icons";
import { CpuIcon } from "@/components/sections/industries-icons";

/**
 * `slug`, `departmentSlug`, and `locationType` are future-ready for an ATS
 * integration and department/location filtering; `href` points to a
 * placeholder application route until a real online application flow
 * exists.
 */
export interface OpenPosition {
  slug: string;
  icon: ComponentType<IconProps>;
  title: string;
  employmentType: string;
  location: string;
  locationType: "on-site" | "hybrid" | "remote";
  department: string;
  departmentSlug: string;
  summary: string;
  href: string;
}

export const defaultPositions: OpenPosition[] = [
  {
    slug: "digital-marketing-specialist",
    icon: MegaphoneIcon,
    title: "Digital Marketing Specialist",
    employmentType: "Full-Time",
    location: "Dubai, UAE",
    locationType: "on-site",
    department: "Digital Media",
    departmentSlug: "digital-media",
    summary:
      "Plan and execute performance-driven campaigns across paid, organic, and social channels for KREBIG clients.",
    href: "/careers/apply/digital-marketing-specialist",
  },
  {
    slug: "ui-ux-designer",
    icon: PenToolIcon,
    title: "UI/UX Designer",
    employmentType: "Full-Time",
    location: "Hybrid",
    locationType: "hybrid",
    department: "Creative Studio",
    departmentSlug: "studio",
    summary:
      "Design intuitive, on-brand digital experiences across web, product, and marketing surfaces.",
    href: "/careers/apply/ui-ux-designer",
  },
  {
    slug: "full-stack-developer",
    icon: CodeIcon,
    title: "Full Stack Developer",
    employmentType: "Full-Time",
    location: "Hybrid",
    locationType: "hybrid",
    department: "Technology",
    departmentSlug: "technology",
    summary:
      "Build and ship scalable web applications and business systems using modern frameworks.",
    href: "/careers/apply/full-stack-developer",
  },
  {
    slug: "ai-automation-engineer",
    icon: CpuIcon,
    title: "AI Automation Engineer",
    employmentType: "Full-Time",
    location: "Remote",
    locationType: "remote",
    department: "Technology",
    departmentSlug: "technology",
    summary:
      "Design and deploy AI-driven automation that streamlines business operations for clients.",
    href: "/careers/apply/ai-automation-engineer",
  },
  {
    slug: "video-editor-motion-designer",
    icon: FilmIcon,
    title: "Video Editor & Motion Designer",
    employmentType: "Full-Time",
    location: "Dubai, UAE",
    locationType: "on-site",
    department: "Creative Studio",
    departmentSlug: "studio",
    summary: "Create polished video content and motion graphics for brand and campaign work.",
    href: "/careers/apply/video-editor-motion-designer",
  },
  {
    slug: "business-development-executive",
    icon: BriefcaseIcon,
    title: "Business Development Executive",
    employmentType: "Full-Time",
    location: "Dubai, UAE",
    locationType: "on-site",
    department: "Business Strategy",
    departmentSlug: "business-strategy",
    summary: "Identify new business opportunities and build lasting client relationships.",
    href: "/careers/apply/business-development-executive",
  },
];
