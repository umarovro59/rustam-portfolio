"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Copy, Locale } from "@/lib/translations";

const linkKeys = [
  ["work", "#work"],
  ["store", "#store"],
  ["about", "#about"],
  ["contact", "#contact"],
] as const;

export function Header({
  locale,
  onLocaleChange,
  copy,
}: {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  copy: Copy;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  const links = linkKeys.map(([key, href]) => ({ label: copy.nav[key], href }));

  return (
    <header className="site-header" data-menu-open={menuOpen}>
      <a className="brand" href="#top" aria-label="RUSTAM home">
        <Image
          className="brand-logo"
          src="/logo/rustam-logo.svg"
          alt="RUSTAM home"
          width={50}
          height={50}
          priority
        />
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="header-tools">
        <div
          className="language-switcher"
          aria-label={copy.languageLabel}
          role="group"
        >
          {(["en", "ru"] as Locale[]).map((option, index) => (
            <span key={option} className="language-option">
              {index > 0 && <span aria-hidden="true">/</span>}
              <button
                type="button"
                aria-current={locale === option ? "page" : undefined}
                onClick={() => onLocaleChange(option)}
              >
                {option.toUpperCase()}
              </button>
            </span>
          ))}
        </div>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? copy.close : copy.menu}</span>
          <i aria-hidden="true" />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label={copy.mobileNavigation}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mobile-nav-footer">
          <span>{copy.languageLabel}</span>
          <div className="mobile-nav-languages">
            {(["en", "ru"] as Locale[]).map((option) => (
              <button
                key={option}
                type="button"
                aria-current={locale === option ? "page" : undefined}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => {
                  onLocaleChange(option);
                  closeMenu();
                }}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
