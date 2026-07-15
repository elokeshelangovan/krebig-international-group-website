"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { collapse } from "@/lib/motion/variants";
import { easing } from "@/lib/motion/tokens";
import { primaryNav, primaryNavCta, type NavItem } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export interface NavbarProps {
  logo?: React.ReactNode;
  items?: NavItem[];
  cta?: NavItem | null;
  className?: string;
}

function isItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  item,
  isActive,
  onClick,
  className,
}: {
  item: NavItem;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "duration-fast ease-standard text-sm font-medium transition-colors",
        isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground",
        className,
      )}
    >
      {item.label}
    </Link>
  );
}

function Logo({ label }: { label: React.ReactNode }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="bg-primary text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-md text-sm font-bold"
      >
        {siteConfig.shortName.charAt(0)}
      </span>
      <span className="xs:inline hidden text-base font-semibold tracking-tight">{label}</span>
    </Link>
  );
}

function AnimatedHamburger({ open }: { open: boolean }) {
  const barClass = "block h-0.5 w-5 origin-center rounded-full bg-current";
  return (
    <span aria-hidden="true" className="flex w-5 flex-col items-center justify-center gap-1.5">
      <m.span
        className={barClass}
        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2, ease: easing.standard }}
      />
      <m.span
        className={barClass}
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15, ease: easing.standard }}
      />
      <m.span
        className={barClass}
        animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2, ease: easing.standard }}
      />
    </span>
  );
}

export function Navbar({
  logo = siteConfig.name,
  items = primaryNav,
  cta = primaryNavCta,
  className,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredHref, setHoveredHref] = React.useState<string | null>(null);
  const menuId = React.useId();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const highlightTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 420, damping: 34 };

  return (
    <header
      className={cn(
        "duration-base ease-standard sticky top-0 z-50 w-full transition-[background-color,backdrop-filter,box-shadow,border-color]",
        isScrolled
          ? "bg-background/75 border-border shadow-dropdown border-b backdrop-blur-xl"
          : "border-b border-transparent bg-transparent shadow-none",
        className,
      )}
    >
      <Container size="lg">
        <div className="flex h-16 items-center justify-between">
          <Logo label={logo} />

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            <ul
              onMouseLeave={() => setHoveredHref(null)}
              className="flex items-center gap-6 xl:gap-8"
            >
              {items.map((item) => {
                const isActive = isItemActive(pathname, item.href);
                const isHighlighted = hoveredHref ? hoveredHref === item.href : isActive;
                return (
                  <li
                    key={item.href}
                    className="relative py-2"
                    onMouseEnter={() => setHoveredHref(item.href)}
                  >
                    <NavLink item={item} isActive={isActive} />
                    {isHighlighted ? (
                      <m.span
                        layoutId="nav-highlight"
                        className="bg-primary absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full"
                        transition={highlightTransition}
                      />
                    ) : null}
                  </li>
                );
              })}
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
            className="lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <AnimatedHamburger open={isMenuOpen} />
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
            className="border-border bg-background/95 overflow-hidden border-t backdrop-blur-xl lg:hidden"
          >
            <Container size="lg">
              <nav aria-label="Mobile" className="flex flex-col gap-4 py-6">
                <ul className="flex flex-col gap-1">
                  {items.map((item) => {
                    const isActive = isItemActive(pathname, item.href);
                    return (
                      <li key={item.href}>
                        <NavLink
                          item={item}
                          isActive={isActive}
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            "block rounded-md px-2 py-2.5",
                            isActive && "bg-accent text-accent-foreground",
                          )}
                        />
                      </li>
                    );
                  })}
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
