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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(244,189,22,0.045),transparent_32rem)]" />

      <Container className="relative z-10 max-w-[1440px] px-0">
        <div className="grid lg:min-h-[800px] lg:grid-cols-2">
          <div className="relative z-20 flex items-start px-5 py-11 sm:px-8 sm:py-14 lg:px-12 lg:pb-28 lg:pt-11">
            <div className="w-full max-w-[650px]">
              <div className="inline-flex items-center gap-2 rounded-lg border border-brand-navy px-4 py-3 text-xs font-bold uppercase tracking-[0.035em] text-brand-navy sm:text-base">
                <ShieldCheck className="size-5" aria-hidden="true" />
                UGC & DEB Approved Programs
              </div>

              <h1 className="mt-6 font-sans text-[2.65rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-brand-navy-dark sm:text-[3.6rem] lg:text-[3.55rem] xl:text-[4rem]">
                Your Dream Job
                <br />
                Doesn&apos;t Wait.
                <br />
                <span className="text-brand-gold-light">
                  Neither Should Your Degree.
                </span>
              </h1>

              <div className="mt-2 h-[3px] w-[82%] rounded-full bg-gradient-to-r from-brand-gold-light via-brand-gold-light to-transparent" />

              <p className="mt-5 max-w-[570px] text-base leading-7 text-[#17223a] sm:text-[17px] sm:leading-[1.55]">
                Earn a recognised online or distance degree from India&apos;s
                leading universities—without quitting your job, pausing your
                family life, or putting your ambitions on hold.
              </p>

              <p className="mt-6 text-base font-bold text-brand-navy sm:text-[17px]">
                For working professionals, freshers and career restarters.
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-lg bg-brand-gold-light px-6 text-base font-bold text-brand-navy-dark shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-brand-gold hover:shadow-brand-md sm:w-auto"
                >
                  Get Free Career Counselling

                  <span className="flex size-7 items-center justify-center rounded-full bg-brand-navy text-white">
                    <ChevronRight className="size-4" />
                  </span>
                </Link>

                <Link
                  href="/universities"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-8 rounded-lg border border-brand-navy bg-white px-6 text-base font-bold text-brand-navy transition hover:bg-brand-navy hover:text-white sm:w-auto"
                >
                  Explore Universities
                  <ArrowRight className="size-5" />
                </Link>
              </div>

              <div className="mt-5 flex items-start gap-3 text-sm text-brand-navy sm:items-center sm:text-[15px]">
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

              <div className="mt-8 hidden sm:block">
                <p className="text-sm text-[#6b7486]">
                  Admission guidance for leading universities across India
                </p>

                <div className="scrollbar-hidden mt-4 flex gap-4 overflow-x-auto pb-2">
                  {partnerUniversities.map((university) => (
                    <div
                      key={university}
                      className="flex shrink-0 items-center gap-2 border-r border-[#cfd3da] pr-4 font-display text-[10px] font-medium uppercase text-[#576071]"
                    >
                      <GraduationCap className="size-5" />
                      {university}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[620px] overflow-hidden lg:min-h-full">
            <div className="absolute inset-0 hidden translate-x-[-7px] bg-brand-navy lg:block [clip-path:ellipse(90%_78%_at_91%_44%)]" />

            <div className="absolute inset-0 overflow-hidden lg:[clip-path:ellipse(90%_78%_at_92%_44%)]">
              <Image
                src="/images/hero2.png"
                alt="Working professional studying online"
                fill
                priority
                className="object-cover object-[56%_center] lg:object-[57%_center]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/20 via-transparent to-transparent" />

            <div className="absolute right-4 top-12 hidden w-[190px] space-y-4 sm:block lg:right-5 lg:top-16">
              <HeroFeatureCard
                icon={MonitorPlay}
                title="Flexible Online Learning"
              />

              <HeroFeatureCard
                icon={CalendarDays}
                title="Weekend Live Classes"
              />

              <HeroFeatureCard
                icon={BadgeIndianRupee}
                title="Zero-Cost EMI"
              />

              <HeroFeatureCard
                icon={Users}
                title="Career & Placement Support"
              />
            </div>

            <div className="absolute bottom-[155px] right-5 hidden rounded-xl bg-brand-navy px-5 py-4 text-white shadow-brand-lg sm:block lg:right-16">
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

            <div className="absolute bottom-5 left-1/2 w-[calc(100%-2rem)] max-w-[372px] -translate-x-1/2 rounded-xl border border-[#d9dde5] bg-white/95 p-5 shadow-brand-md backdrop-blur lg:bottom-[80px] lg:left-14 lg:translate-x-0">
              <p className="font-bold text-brand-navy">
                Popular Programs
              </p>

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
        className="absolute bottom-0 left-0 right-0 -z-0 h-24 bg-gradient-to-b from-transparent to-blue-50/70"
        aria-hidden="true"
      />
    </section>
  );
}