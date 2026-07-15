"use client";

import * as React from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { collapse } from "@/lib/motion/variants";
import { primaryNav, primaryNavCta, type NavItem } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export interface NavbarProps {
  logo?: React.ReactNode;
  items?: NavItem[];
  cta?: NavItem | null;
  className?: string;
}

function NavLink({
  item,
  onClick,
  className,
}: {
  item: NavItem;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className={cn(
        "text-foreground/80 duration-fast ease-standard hover:text-foreground text-sm font-medium transition-colors",
        className,
      )}
    >
      {item.label}
    </Link>
  );
}

export function Navbar({
  logo = siteConfig.name,
  items = primaryNav,
  cta = primaryNavCta,
  className,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuId = React.useId();

  return (
    <header
      className={cn(
        "border-border bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur",
        className,
      )}
    >
      <Container size="lg">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-base font-semibold tracking-tight">
            {logo}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-8">
              {items.map((item) => (
                <li key={item.href}>
                  <NavLink item={item} />
                </li>
              ))}
            </ul>
            {cta ? (
              <Button asChild size="sm">
                <Link
                  href={cta.href}
                  target={cta.external ? "_blank" : undefined}
                  rel={cta.external ? "noopener noreferrer" : undefined}
                >
                  {cta.label}
                </Link>
              </Button>
            ) : null}
          </nav>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <MenuIcon open={isMenuOpen} />
          </Button>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <m.div
            id={menuId}
            key="mobile-menu"
            variants={collapse}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="border-border overflow-hidden border-t md:hidden"
          >
            <Container size="lg">
              <nav aria-label="Mobile" className="flex flex-col gap-4 py-6">
                <ul className="flex flex-col gap-4">
                  {items.map((item) => (
                    <li key={item.href}>
                      <NavLink item={item} onClick={() => setIsMenuOpen(false)} />
                    </li>
                  ))}
                </ul>
                {cta ? (
                  <Button asChild size="sm" className="self-start">
                    <Link href={cta.href} onClick={() => setIsMenuOpen(false)}>
                      {cta.label}
                    </Link>
                  </Button>
                ) : null}
              </nav>
            </Container>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
    >
      {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
    </svg>
  );
}
