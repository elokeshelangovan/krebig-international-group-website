import * as React from "react";
import { Navbar, type NavbarProps } from "@/components/layout/navbar";
import { Footer, type FooterProps } from "@/components/layout/footer";

export interface SiteShellProps {
  children: React.ReactNode;
  navbarProps?: NavbarProps;
  footerProps?: FooterProps;
  mainId?: string;
}

export function SiteShell({
  children,
  navbarProps,
  footerProps,
  mainId = "main-content",
}: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href={`#${mainId}`} className="sr-only-focusable">
        Skip to content
      </a>
      <Navbar {...navbarProps} />
      <main id={mainId} className="flex flex-1 flex-col">
        {children}
      </main>
      <Footer {...footerProps} />
    </div>
  );
}
