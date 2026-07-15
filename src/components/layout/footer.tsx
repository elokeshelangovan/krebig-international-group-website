import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Text } from "@/components/ui/typography";
import { footerNav, socialLinks, type FooterColumn, type SocialLink } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export interface FooterProps {
  logo?: React.ReactNode;
  columns?: FooterColumn[];
  socials?: SocialLink[];
  className?: string;
}

export function Footer({
  logo = siteConfig.name,
  columns = footerNav,
  socials = socialLinks,
  className,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={className}>
      <Container size="lg">
        <div className="border-border flex flex-col gap-10 border-t py-12 md:py-16">
          {columns.length > 0 || logo ? (
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
              <div className="col-span-2 sm:col-span-3 md:col-span-1">
                <span className="text-base font-semibold tracking-tight">{logo}</span>
              </div>
              {columns.map((column) => (
                <div key={column.title} className="flex flex-col gap-3">
                  <Text variant="small" as="span" className="text-foreground font-semibold">
                    {column.title}
                  </Text>
                  <ul className="flex flex-col gap-2">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground duration-fast ease-standard hover:text-foreground text-sm transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}

          <div className="border-border flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center">
            <Text variant="caption">
              &copy; {year} {siteConfig.name}. All rights reserved.
            </Text>
            {socials.length > 0 ? (
              <ul className="flex items-center gap-4">
                {socials.map((social) => (
                  <li key={social.href}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground duration-fast ease-standard hover:text-foreground text-sm transition-colors"
                    >
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </Container>
    </footer>
  );
}
