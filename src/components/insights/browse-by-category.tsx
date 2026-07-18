"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { Bot, Award, Newspaper } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { MegaphoneIcon, CompassIcon, PenToolIcon } from "@/components/sections/services-icons";
import { CodeIcon } from "@/components/sections/divisions-icons";
import { LightbulbIcon } from "@/components/about/values-icons";
import type { IconProps } from "@/components/sections/services-icons";

/**
 * `slug` and `articleCount` are future-ready for category filtering and a
 * real article count once a CMS is wired up; `articleCount` is a
 * placeholder value only.
 */
export interface InsightCategory {
  slug: string;
  icon: ComponentType<IconProps>;
  name: string;
  description: string;
  articleCount: number;
  href: string;
}

export interface BrowseByCategoryProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  categories?: InsightCategory[];
}

const defaultCategories: InsightCategory[] = [
  {
    slug: "ai-automation",
    icon: Bot,
    name: "AI & Automation",
    description: "Practical ways AI and automation accelerate business performance.",
    articleCount: 2,
    href: "/insights/category/ai-automation",
  },
  {
    slug: "digital-marketing",
    icon: MegaphoneIcon,
    name: "Digital Marketing",
    description: "Strategies for visibility, engagement, and measurable growth.",
    articleCount: 1,
    href: "/insights/category/digital-marketing",
  },
  {
    slug: "branding",
    icon: PenToolIcon,
    name: "Branding",
    description: "Building brands that earn trust and stand apart.",
    articleCount: 1,
    href: "/insights/category/branding",
  },
  {
    slug: "business-strategy",
    icon: CompassIcon,
    name: "Business Strategy",
    description: "Frameworks and thinking for confident, informed decisions.",
    articleCount: 1,
    href: "/insights/category/business-strategy",
  },
  {
    slug: "technology",
    icon: CodeIcon,
    name: "Technology",
    description: "Platforms and systems that power scalable businesses.",
    articleCount: 1,
    href: "/insights/category/technology",
  },
  {
    slug: "leadership",
    icon: Award,
    name: "Leadership",
    description: "Perspectives on leading teams through change and growth.",
    articleCount: 1,
    href: "/insights/category/leadership",
  },
  {
    slug: "industry-insights",
    icon: Newspaper,
    name: "Industry Insights",
    description: "Trends and shifts shaping businesses across sectors.",
    articleCount: 1,
    href: "/insights/category/industry-insights",
  },
  {
    slug: "innovation",
    icon: LightbulbIcon,
    name: "Innovation",
    description: "Fresh thinking on what's next for modern business.",
    articleCount: 1,
    href: "/insights/category/innovation",
  },
];

export function BrowseByCategory({
  eyebrow = "Find What You Need",
  heading = "Browse by Category",
  description = "Jump straight to the topics most relevant to your business.",
  categories = defaultCategories,
}: BrowseByCategoryProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="browse-by-category"
      aria-label="Browse by Category"
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
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <m.div
              key={category.slug}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:border-primary/30 hover:shadow-dropdown duration-base ease-standard flex h-full flex-col justify-between transition-[border-color,box-shadow]">
                <CardHeader>
                  <span
                    aria-hidden="true"
                    className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground duration-base ease-standard mb-2 flex size-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110 group-hover:-rotate-3"
                  >
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <CardTitle>{category.name}</CardTitle>
                  <Text variant="small" className="text-muted-foreground text-pretty">
                    {category.description}
                  </Text>
                  <Text variant="caption" className="text-muted-foreground mt-1">
                    {category.articleCount} {category.articleCount === 1 ? "Article" : "Articles"}
                  </Text>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={category.href}>Explore {category.name}</Link>
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
