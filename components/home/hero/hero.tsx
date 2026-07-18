import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeIndianRupee,
  CalendarDays,
  ChevronRight,
  GraduationCap,
  MonitorPlay,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

import { Container } from "@/components/ui/container";

import { HeroFeatureCard } from "./hero-feature-card";
import { HeroStats } from "./hero-stats";

const programs = ["MBA", "MCA", "BBA", "BCA", "B.Com"];

const partnerUniversities = [
  "Amity University",
  "Manipal University",
  "Jain University",
  "Alliance University",
  "Sharda University",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(244,189,22,0.08),transparent_30rem)]" />

      <Container className="relative z-10 px-0 lg:px-8">
        <div className="grid lg:min-h-[780px] lg:grid-cols-[0.97fr_1.03fr]">
          <div className="flex items-center px-4 py-12 sm:px-6 sm:py-16 lg:px-0 lg:pb-28 lg:pt-16">
            <div className="w-full max-w-[680px]">
              <div className="inline-flex items-center gap-3 rounded-xl border border-brand-navy px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-brand-navy sm:text-sm">
                <ShieldCheck className="size-5" aria-hidden="true" />
                UGC & DEB Approved Programs
              </div>

              <h1 className="mt-7 font-display text-[2.8rem] font-bold leading-[1.02] tracking-[-0.045em] text-brand-navy-dark sm:text-[3.75rem] lg:text-[4.45rem]">
                Your Dream Career Deserves the Right{" "}
                <span className="text-brand-gold">Qualification.</span>
              </h1>

              <div className="mt-5 h-[3px] w-36 rounded-full bg-gradient-to-r from-brand-navy via-brand-navy to-brand-gold" />

              <p className="mt-6 max-w-[590px] text-base leading-7 text-[#28334d] sm:text-lg sm:leading-8">
                Earn a recognised online or distance degree from India&apos;s
                leading universities—without quitting your job, pausing your
                family life, or putting your ambitions on hold.
              </p>

              <p className="mt-5 text-base font-bold text-brand-navy">
                For working professionals, freshers and career restarters.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-brand-gold-light px-6 text-base font-bold text-brand-navy-dark shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-brand-gold hover:shadow-brand-md sm:w-auto"
                >
                  Get Free Career Counselling
                  <span className="flex size-7 items-center justify-center rounded-full bg-brand-navy text-white">
                    <ChevronRight className="size-4" />
                  </span>
                </Link>

                <Link
                  href="/universities"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-brand-navy bg-white px-6 text-base font-bold text-brand-navy transition hover:bg-brand-navy hover:text-white sm:w-auto"
                >
                  Explore Universities
                  <ArrowRight className="size-5" />
                </Link>
              </div>

              <div className="mt-5 flex items-start gap-3 text-sm text-brand-navy sm:items-center">
                <ShieldCheck
                  className="mt-0.5 size-5 shrink-0 sm:mt-0"
                  aria-hidden="true"
                />

                <p className="leading-6">
                  Personalised guidance
                  <span className="mx-2">•</span>
                  No pressure
                  <span className="mx-2">•</span>
                  100% admission support
                </p>
              </div>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground">
                  Admission guidance for leading universities across India
                </p>

                <div className="scrollbar-hidden mt-4 flex gap-5 overflow-x-auto pb-2">
                  {partnerUniversities.map((university) => (
                    <div
                      key={university}
                      className="flex shrink-0 items-center gap-2 border-r border-brand-border pr-5 text-xs font-medium text-brand-navy"
                    >
                      <GraduationCap className="size-5" />
                      {university}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[600px] overflow-hidden bg-brand-surface lg:min-h-full">
            <div className="absolute -left-20 top-0 z-20 hidden h-full w-40 rounded-r-[100%] bg-brand-navy lg:block" />

            <Image
              src="/images/hero2.png"
              alt="Working professional studying online"
              fill
              priority
              className="object-cover object-center lg:object-[48%_center]"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/20 via-transparent to-transparent" />

            <div className="absolute right-4 top-8 hidden w-[205px] space-y-3 sm:block lg:right-7 lg:top-16">
              <HeroFeatureCard
                icon={MonitorPlay}
                title="Flexible Online Learning"
              />

              <HeroFeatureCard
                icon={CalendarDays}
                title="Weekend Live Classes"
              />

              <HeroFeatureCard icon={BadgeIndianRupee} title="Zero-Cost EMI" />

              <HeroFeatureCard
                icon={Users}
                title="Career & Placement Support"
              />
            </div>

            <div className="absolute bottom-28 right-5 hidden rounded-2xl bg-brand-navy px-5 py-4 text-white shadow-brand-lg sm:block lg:right-10">
              <div className="flex items-center gap-5">
                <div>
                  <p className="text-sm font-medium text-white/80">
                    Next Goal:
                  </p>

                  <p className="text-lg font-bold">Promotion</p>
                </div>

                <TrendingUp className="size-10 text-brand-gold-light" />
              </div>
            </div>

            <div className="absolute bottom-5 left-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-brand-border bg-white/95 p-5 shadow-brand-lg backdrop-blur lg:bottom-8">
              <p className="font-bold text-brand-navy">Popular Programs</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {programs.map((program) => (
                  <Link
                    key={program}
                    href={`/courses?search=${encodeURIComponent(program)}`}
                    className="rounded-lg border border-brand-navy/30 bg-white px-3 py-2 text-xs font-semibold text-brand-navy transition hover:border-brand-gold hover:bg-brand-gold-soft"
                  >
                    {program}
                  </Link>
                ))}
              </div>

              <Link
                href="/courses"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-navy transition hover:text-brand-gold"
              >
                View all 50+ programs
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <HeroStats />

      <div
        className="absolute bottom-0 left-0 right-0 -z-0 h-20 bg-gradient-to-b from-transparent to-blue-50/70"
        aria-hidden="true"
      />
    </section>
  );
}
