import * as React from "react";
import { AnnouncementBar, type AnnouncementBarProps } from "@/components/layout/announcement-bar";
import { Navbar, type NavbarProps } from "@/components/layout/navbar";
import { Footer, type FooterProps } from "@/components/layout/footer";

export interface SiteShellProps {
  children: React.ReactNode;
  announcementBarProps?: AnnouncementBarProps | false;
  navbarProps?: NavbarProps;
  footerProps?: FooterProps;
  mainId?: string;
}

export function SiteShell({
  children,
  announcementBarProps,
  navbarProps,
  footerProps,
  mainId = "main-content",
}: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href={`#${mainId}`}
        className="sr-only-focusable bg-primary text-primary-foreground shadow-dropdown focus-visible:ring-ring rounded-button px-4 py-2.5 text-sm font-semibold focus-visible:ring-2 focus-visible:outline-none"
      >
        Skip to content
      </a>
      {announcementBarProps === false ? null : <AnnouncementBar {...announcementBarProps} />}
      <Navbar {...navbarProps} />
      <main id={mainId} tabIndex={-1} className="flex flex-1 flex-col focus:outline-none">
        {children}
      </main>
      <Footer {...footerProps} />
    </div>
  );
}
