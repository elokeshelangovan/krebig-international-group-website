"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { Bot, User, Calendar, Clock, ArrowRight, Award, Newspaper } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";
import { MegaphoneIcon, CompassIcon, PenToolIcon } from "@/components/sections/services-icons";
import { CodeIcon } from "@/components/sections/divisions-icons";
import { LightbulbIcon } from "@/components/about/values-icons";
import type { IconProps } from "@/components/sections/services-icons";

/**
 * Article shape is deliberately future-ready: `categorySlug`/`tags` support
 * category filtering and tag pages, `publishedAt` (ISO) supports sorting
 * and pagination, and `featured` lets a future CMS flag articles for
 * promotion — none of that is implemented yet, only structured for it.
 */
export interface Article {
  slug: string;
  icon: ComponentType<IconProps>;
  category: string;
  categorySlug: string;
  tags: string[];
  title: string;
  summary: string;
  author: string;
  publishedDate: string;
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
  href: string;
}

export interface LatestArticlesProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  articles?: Article[];
}

const defaultArticles: Article[] = [
  {
    slug: "ai-automation-customer-experience",
    icon: Bot,
    category: "AI & Automation",
    categorySlug: "ai-automation",
    tags: ["AI", "Automation", "Customer Experience"],
    title: "5 Ways AI Automation Is Transforming Customer Experience",
    summary:
      "From intelligent chatbots to predictive support, AI is redefining what customers expect from every interaction.",
    author: "KREBIG Editorial Team",
    publishedDate: "June 2026",
    publishedAt: "2026-06-01",
    readingTime: "5 min read",
    href: "/insights/ai-automation-customer-experience",
  },
  {
    slug: "digital-marketing-strategy-that-converts",
    icon: MegaphoneIcon,
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    tags: ["Marketing", "Strategy", "Conversion"],
    title: "Building a Digital Marketing Strategy That Actually Converts",
    summary:
      "Visibility means little without conversion. Here's how to build campaigns that turn attention into revenue.",
    author: "KREBIG Editorial Team",
    publishedDate: "May 2026",
    publishedAt: "2026-05-15",
    readingTime: "7 min read",
    href: "/insights/digital-marketing-strategy-that-converts",
  },
  {
    slug: "practical-framework-for-scaling",
    icon: CompassIcon,
    category: "Business Strategy",
    categorySlug: "business-strategy",
    tags: ["Strategy", "Growth", "Scaling"],
    title: "A Practical Framework for Scaling Your Business in 2026",
    summary:
      "Growth without structure breaks. This framework helps leaders scale operations without losing control.",
    author: "KREBIG Editorial Team",
    publishedDate: "May 2026",
    publishedAt: "2026-05-02",
    readingTime: "6 min read",
    href: "/insights/practical-framework-for-scaling",
  },
  {
    slug: "choosing-the-right-technology-stack",
    icon: CodeIcon,
    category: "Technology",
    categorySlug: "technology",
    tags: ["Technology", "Platforms", "Architecture"],
    title: "Choosing the Right Technology Stack for Long-Term Growth",
    summary:
      "The platforms you choose today shape what's possible tomorrow. Here's how to decide with confidence.",
    author: "KREBIG Editorial Team",
    publishedDate: "April 2026",
    publishedAt: "2026-04-18",
    readingTime: "8 min read",
    href: "/insights/choosing-the-right-technology-stack",
  },
  {
    slug: "why-consistent-branding-drives-trust",
    icon: PenToolIcon,
    category: "Branding",
    categorySlug: "branding",
    tags: ["Branding", "Trust", "Design"],
    title: "Why Consistent Branding Drives Customer Trust",
    summary:
      "Consistency isn't decoration — it's the foundation customers rely on to recognize and trust your business.",
    author: "KREBIG Editorial Team",
    publishedDate: "April 2026",
    publishedAt: "2026-04-05",
    readingTime: "4 min read",
    href: "/insights/why-consistent-branding-drives-trust",
  },
  {
    slug: "leading-teams-through-digital-transformation",
    icon: Award,
    category: "Leadership",
    categorySlug: "leadership",
    tags: ["Leadership", "Change Management", "Teams"],
    title: "Leading Teams Through Digital Transformation",
    summary:
      "Technology changes fast; people adapt slower. Here's how leaders can close that gap successfully.",
    author: "KREBIG Editorial Team",
    publishedDate: "March 2026",
    publishedAt: "2026-03-20",
    readingTime: "6 min read",
    href: "/insights/leading-teams-through-digital-transformation",
  },
  {
    slug: "whats-changing-across-industries",
    icon: Newspaper,
    category: "Industry Insights",
    categorySlug: "industry-insights",
    tags: ["Industry Trends", "Market Analysis"],
    title: "What's Changing Across Real Estate, Healthcare, and Retail",
    summary:
      "Three very different sectors, one shared story: digital expectations are rewriting how businesses compete.",
    author: "KREBIG Editorial Team",
    publishedDate: "March 2026",
    publishedAt: "2026-03-08",
    readingTime: "7 min read",
    href: "/insights/whats-changing-across-industries",
  },
  {
    slug: "turning-innovation-into-results",
    icon: LightbulbIcon,
    category: "Innovation",
    categorySlug: "innovation",
    tags: ["Innovation", "Business Results"],
    title: "Turning Innovation Into Measurable Business Results",
    summary:
      "Fresh ideas are easy. Converting them into measurable outcomes is where most innovation efforts fail.",
    author: "KREBIG Editorial Team",
    publishedDate: "February 2026",
    publishedAt: "2026-02-22",
    readingTime: "5 min read",
    href: "/insights/turning-innovation-into-results",
  },
  {
    slug: "future-of-marketing-automation",
    icon: Bot,
    category: "AI & Automation",
    categorySlug: "ai-automation",
    tags: ["AI", "Marketing Automation", "Campaigns"],
    title: "The Future of Marketing Automation and AI-Driven Campaigns",
    summary:
      "AI-driven campaigns are moving from experimental to essential. Here's what's coming next for marketers.",
    author: "KREBIG Editorial Team",
    publishedDate: "February 2026",
    publishedAt: "2026-02-10",
    readingTime: "6 min read",
    href: "/insights/future-of-marketing-automation",
  },
];

export function LatestArticles({
  eyebrow = "Latest From KREBIG",
  heading = "Latest Articles",
  description = "Explore practical insights, expert opinions, business strategies, AI innovations, digital transformation ideas, and industry knowledge from the KREBIG team.",
  articles = defaultArticles,
}: LatestArticlesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="latest-articles"
      aria-label="Latest Articles"
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
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {articles.map((article) => {
          const Icon = article.icon;
          return (
            <m.div
              key={article.slug}
              variants={fadeInUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <Card className="hover:border-primary/30 hover:shadow-dropdown duration-base ease-standard flex h-full flex-col overflow-hidden transition-[border-color,box-shadow]">
                <div className="from-primary to-accent-foreground relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br">
                  <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-20">
                    <defs>
                      <pattern
                        id={`article-grid-${article.slug}`}
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="1.25" cy="1.25" r="1.25" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#article-grid-${article.slug})`} />
                  </svg>
                  <Icon
                    aria-hidden="true"
                    className="text-primary-foreground/90 relative size-14"
                    strokeWidth={1.25}
                  />
                  <span className="bg-popover text-popover-foreground shadow-dropdown absolute top-4 left-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                    {article.category}
                  </span>
                </div>

                <CardHeader className="flex-1 gap-2">
                  <CardTitle className="text-lg leading-snug">{article.title}</CardTitle>
                  <Text variant="small" className="text-muted-foreground line-clamp-2 text-pretty">
                    {article.summary}
                  </Text>
                  <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
                    <span className="inline-flex items-center gap-1.5">
                      <User aria-hidden="true" className="size-3.5" />
                      {article.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar aria-hidden="true" className="size-3.5" />
                      {article.publishedDate}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock aria-hidden="true" className="size-3.5" />
                      {article.readingTime}
                    </span>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={article.href}
                    className="group/link text-primary duration-fast ease-standard hover:text-primary/80 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  >
                    Read Article
                    <ArrowRight
                      aria-hidden="true"
                      className="duration-base ease-standard size-4 transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </CardFooter>
              </Card>
            </m.div>
          );
        })}
      </m.div>
    </Section>
  );
}
