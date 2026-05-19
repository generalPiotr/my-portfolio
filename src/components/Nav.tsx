"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-outline-variant/60 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
        <a
          href="#"
          className="text-headline-md font-bold tracking-tighter text-on-surface"
        >
          PETERDABROWSKI.DEV
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-label-sm font-medium text-on-surface-variant transition-colors duration-200 hover:text-primary-fixed-dim"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="hidden rounded bg-primary-fixed-dim px-6 py-3 font-mono text-label-sm text-black transition-colors duration-200 hover:bg-primary md:block"
        >
          Resume
        </button>

        <button
          type="button"
          className="text-on-surface md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-outline-variant/60 bg-background/90 px-margin-mobile py-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-label-sm font-medium text-on-surface-variant transition-colors hover:text-primary-fixed-dim"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="mt-2 w-fit rounded bg-primary-fixed-dim px-6 py-3 font-mono text-label-sm text-black"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
