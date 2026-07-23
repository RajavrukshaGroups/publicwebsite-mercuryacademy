"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { siteConfig } from "@/config/site.config";
import { mainNavigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

type UniversityMenuItem = {
  _id: string;
  name: string;
  slug: string;
  shortName?: string;
  logoUrl?: string;
};

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [universitiesOpen, setUniversitiesOpen] = useState(false);
  const [mobileUniversitiesOpen, setMobileUniversitiesOpen] = useState(false);
  const [universities, setUniversities] = useState<UniversityMenuItem[]>([]);
  const [universitiesLoading, setUniversitiesLoading] = useState(false);

  // const universities = [
  //   {
  //     name: "Manipal University Jaipur",
  //     slug: "manipal-university-jaipur",
  //   },
  //   {
  //     name: "Jain University",
  //     slug: "jain-university",
  //   },
  //   {
  //     name: "Lovely Professional University",
  //     slug: "lovely-professional-university",
  //   },
  //   {
  //     name: "Amity University Online",
  //     slug: "amity-university-online",
  //   },
  //   {
  //     name: "Chandigarh University",
  //     slug: "chandigarh-university",
  //   },
  //   {
  //     name: "Sikkim Manipal University",
  //     slug: "sikkim-manipal-university",
  //   },
  // ];

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
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

useEffect(() => {
  const controller = new AbortController();

  async function fetchUniversities() {
    try {
      setUniversitiesLoading(true);

      const apiUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "");

      if (!apiUrl) {
        throw new Error(
          "NEXT_PUBLIC_API_BASE_URL is not configured.",
        );
      }

      const response = await fetch(
        `${apiUrl}/universities?status=PUBLISHED&limit=50`,
        {
          signal: controller.signal,
          headers: {
            Accept: "application/json",
          },
          cache: "no-store",
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message ||
            `Request failed with status ${response.status}`,
        );
      }

      setUniversities(
        Array.isArray(result?.data) ? result.data : [],
      );
    } catch (error) {
      if (
        error instanceof Error &&
        error.name !== "AbortError"
      ) {
        console.error("University menu error:", error.message);
        setUniversities([]);
      }
    } finally {
      if (!controller.signal.aborted) {
        setUniversitiesLoading(false);
      }
    }
  }

  fetchUniversities();

  return () => controller.abort();
}, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#e7e9ee] bg-white/95 backdrop-blur-xl">
        <Container className="flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[106px] lg:px-12">
          <Logo
            priority
            size="lg"
            className="max-w-[220px] sm:max-w-[260px] lg:max-w-[360px]"
            imageClassName="lg:h-[70px]"
          />

          <nav
            className="hidden items-center gap-2 xl:flex"
            aria-label="Main navigation"
          >
            {mainNavigation.map((item) => {
              const active = isActiveRoute(item.href);
              const isUniversities = item.href === "/universities";

              if (isUniversities) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setUniversitiesOpen(true)}
                    onMouseLeave={() => setUniversitiesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setUniversitiesOpen((current) => !current)}
                      className={cn(
                        "flex items-center gap-1.5 rounded-lg px-3 py-2 text-[14px] font-semibold transition-colors 2xl:text-[15px]",
                        active
                          ? "text-brand-gold"
                          : "text-brand-navy hover:bg-brand-gold-soft hover:text-brand-gold",
                      )}
                      aria-expanded={universitiesOpen}
                      aria-haspopup="menu"
                    >
                      {item.label}

                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          universitiesOpen && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {universitiesOpen && (
                      <div className="absolute left-0 top-full z-50 pt-3">
                        <div className="w-[330px] overflow-hidden rounded-2xl border border-brand-border bg-white p-2 shadow-2xl">
                          <div className="border-b border-brand-border px-4 py-3">
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gold">
                              Explore Universities
                            </p>
                          </div>

                          <div className="max-h-[360px] overflow-y-auto py-2">
                            {universitiesLoading ? (
                              <p className="px-4 py-5 text-center text-sm text-muted-foreground">
                                Loading universities...
                              </p>
                            ) : universities.length > 0 ? (
                              universities.map((university) => (
                                <Link
                                  key={university._id}
                                  href={`/universities/${university.slug}`}
                                  onClick={() => setUniversitiesOpen(false)}
                                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold-soft hover:text-brand-gold"
                                >
                                  <span>{university.name}</span>

                                  <span
                                    className="transition-transform group-hover:translate-x-1"
                                    aria-hidden="true"
                                  >
                                    ›
                                  </span>
                                </Link>
                              ))
                            ) : (
                              <p className="px-4 py-5 text-center text-sm text-muted-foreground">
                                No universities available.
                              </p>
                            )}
                          </div>

                          <div className="border-t border-brand-border p-2">
                            <Link
                              href="/universities"
                              onClick={() => setUniversitiesOpen(false)}
                              className="flex min-h-11 items-center justify-center rounded-xl bg-brand-navy px-4 text-sm font-bold text-white transition-colors hover:bg-brand-navy-dark"
                            >
                              View All Universities
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-[14px] font-semibold transition-colors 2xl:text-[15px]",
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

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={phoneHref}
              className="flex items-center gap-3 text-brand-navy transition-colors hover:text-brand-gold"
            >
              <Phone className="size-5 fill-brand-navy" aria-hidden="true" />

              <span className="hidden xl:block">
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
              className="inline-flex min-h-[50px] items-center justify-center rounded-md bg-brand-gold-light px-5 text-sm font-bold text-brand-navy-dark shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-brand-gold hover:shadow-brand-md"
            >
              Free Counselling
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
                const isUniversities = item.href === "/universities";

                if (isUniversities) {
                  return (
                    <div key={item.href}>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileUniversitiesOpen((current) => !current)
                        }
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors",
                          active
                            ? "bg-brand-navy text-white"
                            : "text-brand-navy hover:bg-brand-gold-soft",
                        )}
                        aria-expanded={mobileUniversitiesOpen}
                      >
                        {item.label}

                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform duration-200",
                            mobileUniversitiesOpen && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>

                      {mobileUniversitiesOpen && (
                        <div className="ml-3 mt-1 space-y-1 border-l-2 border-brand-gold/40 pl-3">
                          {universities.map((university) => (
                            <Link
                              key={university.slug}
                              href={`/universities/${university.slug}`}
                              onClick={closeMobileMenu}
                              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-gold-soft hover:text-brand-gold"
                            >
                              {university.name}
                              <span aria-hidden="true">›</span>
                            </Link>
                          ))}

                          <Link
                            href="/universities"
                            onClick={closeMobileMenu}
                            className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-brand-gold"
                          >
                            View All Universities
                            <span aria-hidden="true">›</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

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
                    <span aria-hidden="true">›</span>
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
                <span aria-hidden="true">›</span>
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
