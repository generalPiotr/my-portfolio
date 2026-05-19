import { FooterSocialIcon } from "@/components/FooterSocialIcon";
import { FOOTER_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/60 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-gutter px-margin-mobile py-12 md:flex-row md:px-margin-desktop">
        <span className="text-center font-mono text-label-sm font-bold text-on-surface md:text-left">
          © 2026 DESIGNED WITH PRECISION. ALL RIGHTS RESERVED.
        </span>
        <div className="flex flex-wrap justify-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 font-mono text-label-sm text-on-surface-variant opacity-80 transition-all duration-200 hover:text-primary-fixed-dim hover:opacity-100"
              aria-label={link.label}
            >
              <FooterSocialIcon id={link.icon} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
