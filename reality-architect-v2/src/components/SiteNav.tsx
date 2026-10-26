"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Menu, X } from "lucide-react";
import clsx from "clsx";
import { navLinks, site } from "@/data/site";

export default function SiteNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-[150] border-b border-line/80 bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-line-strong bg-surface">
            <span className="h-2.5 w-2.5 rounded-sm bg-holo shadow-[0_0_12px_rgba(94,234,212,0.7)]" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold tracking-tight text-ink">{site.name}</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">{site.role}</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={clsx(
                "rounded-md px-3 py-2 text-sm transition-colors",
                isActive(link.href) ? "text-ink bg-surface-2" : "text-muted hover:text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
          >
            <FileText size={15} /> Resume
          </a>
        </nav>

        <button
          className="-mr-2 p-2 text-muted transition-colors hover:text-ink md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav aria-label="Mobile" className="border-t border-line px-4 pb-6 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={clsx(
                "block rounded-md px-3 py-3 text-base",
                isActive(link.href) ? "bg-surface-2 text-ink" : "text-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-4 py-3 text-sm font-medium text-accent"
          >
            <FileText size={15} /> Resume
          </a>
        </nav>
      )}
    </header>
  );
}
