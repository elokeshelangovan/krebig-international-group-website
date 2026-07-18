import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/navigation";

export function jsonLdScriptProps(data: object) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  } as const;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    ...(socialLinks.length > 0 ? { sameAs: socialLinks.map((social) => social.href) } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface WebPageSchemaOptions {
  name: string;
  description: string;
  url: string;
}

export function webPageSchema({ name, description, url }: WebPageSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export interface JobPostingItem {
  title: string;
  description: string;
  url: string;
  datePosted: string;
  employmentType: string;
  department: string;
  location: string;
  locationType: "on-site" | "hybrid" | "remote";
}

/**
 * Ready for when Current Opportunities are backed by a real ATS with a
 * working application flow. Not rendered on the live page yet: Google's
 * JobPosting guidelines expect postings to link to a functioning
 * application process, and today "Apply Now" links to a "Coming Soon"
 * placeholder rather than a real application.
 */
export function jobPostingSchema(job: JobPostingItem) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    url: job.url,
    datePosted: job.datePosted,
    employmentType: job.employmentType.toUpperCase().replace(/-/g, "_"),
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    ...(job.locationType === "remote"
      ? {
          jobLocationType: "TELECOMMUTE",
          applicantLocationRequirements: {
            "@type": "Country",
            name: "Worldwide",
          },
        }
      : {
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: job.location,
            },
          },
        }),
  };
}

export interface ContactPageSchemaOptions {
  name: string;
  description: string;
  url: string;
}

export function contactPageSchema({ name, description, url }: ContactPageSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name,
    description,
    url,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@krebig.com",
        areaServed: "Worldwide",
        availableLanguage: "English",
      },
    },
  };
}

export interface BlogPostingItem {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
}

export function blogSchema(posts: BlogPostingItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Insights`,
    url: new URL("/insights", siteConfig.url).toString(),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: post.url,
      datePublished: post.datePublished,
      author: {
        "@type": "Organization",
        name: post.author,
      },
    })),
  };
}
