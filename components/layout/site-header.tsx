"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { siteConfig } from "@/config/site.config";
import { mainNavigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${siteConfig.contact.email}`;

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur-xl">
        <Container className="flex h-[78px] items-center justify-between gap-4 lg:h-[92px]">
          <Logo priority size="md" className="max-w-[210px] sm:max-w-[245px]" />

          <nav
            className="hidden items-center gap-1 xl:flex"
            aria-label="Main navigation"
          >
            {mainNavigation.map((item) => {
              const active = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors",
                    active
                      ? "text-brand-gold"
                      : "text-brand-navy hover:bg-brand-gold-soft hover:text-brand-gold",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={phoneHref}
              className="flex items-center gap-3 text-brand-navy transition-colors hover:text-brand-gold"
            >
              <Phone className="size-5" aria-hidden="true" />

              <span className="hidden 2xl:block">
                <span className="block text-sm font-bold">
                  {siteConfig.contact.phone}
                </span>
              </span>
            </a>

            <span className="h-8 w-px bg-brand-border" />

            <Link
              href="/login"
              className="text-sm font-semibold text-brand-navy transition-colors hover:text-brand-gold"
            >
              Sign In
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-gold-light px-5 text-sm font-bold text-brand-navy-dark shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-brand-gold hover:shadow-brand-md"
            >
              Free Counselling
              <ChevronRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-brand-border text-brand-navy transition hover:bg-brand-gold-soft lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </Container>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            onClick={closeMobileMenu}
            className="absolute inset-0 bg-brand-navy-dark/70 backdrop-blur-sm"
            aria-label="Close navigation overlay"
          />

          <aside className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-brand-cream shadow-2xl">
            <div className="flex items-center justify-between border-b border-brand-border p-5">
              <Logo
                size="sm"
                onClick={closeMobileMenu}
                className="max-w-[190px]"
              />

              <button
                type="button"
                onClick={closeMobileMenu}
                className="inline-flex size-10 items-center justify-center rounded-xl border border-brand-border text-brand-navy"
                aria-label="Close navigation menu"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav
              className="flex flex-1 flex-col gap-1 overflow-y-auto p-4"
              aria-label="Mobile navigation"
            >
              {mainNavigation.map((item) => {
                const active = isActiveRoute(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors",
                      active
                        ? "bg-brand-navy text-white"
                        : "text-brand-navy hover:bg-brand-gold-soft",
                    )}
                  >
                    {item.label}
                    <ChevronRight className="size-4" aria-hidden="true" />
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-brand-border p-5">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-gold-light px-5 font-bold text-brand-navy-dark"
              >
                Get Free Counselling
                <ChevronRight className="size-4" />
              </Link>

              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="mt-3 flex min-h-12 w-full items-center justify-center rounded-xl border border-brand-navy font-bold text-brand-navy"
              >
                Sign In
              </Link>

              <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                <a href={phoneHref} className="flex items-center gap-3">
                  <Phone className="size-4 text-brand-gold" />
                  {siteConfig.contact.phone}
                </a>

                <a href={emailHref} className="flex items-center gap-3">
                  <Mail className="size-4 text-brand-gold" />
                  <span className="break-all">{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
