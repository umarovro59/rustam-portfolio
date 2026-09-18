"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { Locale, translations } from "@/lib/translations";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    if (window.location.hash) {
      return () => {
        window.history.scrollRestoration = previousScrollRestoration;
      };
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    scrollToTop();
    const frame = window.requestAnimationFrame(scrollToTop);

    return () => {
      window.cancelAnimationFrame(frame);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("rustam-locale");
    const restoreLocale = window.setTimeout(() => {
      if (savedLocale === "en" || savedLocale === "ru") setLocale(savedLocale);
    }, 0);
    return () => window.clearTimeout(restoreLocale);
  }, []);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    document.documentElement.lang = locale;
    window.localStorage.setItem("rustam-locale", locale);
  }, [locale]);

  const copy = translations[locale];

  return (
    <div id="top" className="site-shell">
      <main>
        <div className="hero-shell">
          <Header locale={locale} onLocaleChange={setLocale} copy={copy} />
          <Hero copy={copy.hero} />
        </div>
        <SelectedWork copy={copy.work} projects={copy.projects} />
        <About copy={copy.about} />
        <Services copy={copy.services} />
        <Products copy={copy.products} />
        <Contact copy={copy.contact} />
      </main>
      <Footer copy={copy.footer} />
      <BackToTop />
    </div>
  );
}
