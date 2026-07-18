import type { ComponentType } from "react";
import { Bot, Award, Newspaper } from "lucide-react";
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

export const defaultArticles: Article[] = [
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
  {
    slug: "how-ai-is-reshaping-business-growth",
    icon: Bot,
    category: "AI & Automation",
    categorySlug: "ai-automation",
    tags: ["AI", "Business Growth", "Automation"],
    title: "How AI Is Reshaping Business Growth",
    summary:
      "From predictive analytics to intelligent automation, artificial intelligence is transforming how businesses operate, market, and scale.",
    author: "KREBIG Editorial Team",
    publishedDate: "July 2026",
    publishedAt: "2026-07-01",
    readingTime: "6 min read",
    featured: true,
    href: "/insights/how-ai-is-reshaping-business-growth",
  },
];

export const defaultCategories: InsightCategory[] = [
  {
    slug: "ai-automation",
    icon: Bot,
    name: "AI & Automation",
    description: "Practical ways AI and automation accelerate business performance.",
    articleCount: 3,
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
