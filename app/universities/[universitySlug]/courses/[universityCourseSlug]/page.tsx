import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Download,
  GraduationCap,
  IndianRupee,
  Landmark,
  MapPin,
  Monitor,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ApiError } from "@/services/api/client";

import {
  getMediaUrl,
  getUniversityCourseBySlug,
  type SeoFields,
  type UniversityCourseCurriculum,
  type UniversityCourseFaq,
  type UniversityCourseSummary,
} from "@/services/api/universities";

type UniversityCoursePageProps = {
  params: Promise<{
    universitySlug: string;
    universityCourseSlug: string;
  }>;
};

async function loadCourse(
  universitySlug: string,
  universityCourseSlug: string,
) {
  const response = await getUniversityCourseBySlug(
    universitySlug,
    universityCourseSlug,
  );

  const { university, course } = response.data;

  /*
   * Support both response structures:
   *
   * New:
   * data.curriculum
   * data.faqs
   *
   * Legacy:
   * data.course.curriculum
   * data.course.faqs
   */
  const curriculum: UniversityCourseCurriculum[] =
    response.data.curriculum ?? course.curriculum ?? [];

  const faqs: UniversityCourseFaq[] = response.data.faqs ?? course.faqs ?? [];

  const calculatedSummary: UniversityCourseSummary = {
    totalSemesters: curriculum.length,

    totalSubjects: curriculum.reduce(
      (total, semester) =>
        total + (semester.totalSubjects ?? semester.subjects?.length ?? 0),
      0,
    ),

    totalCredits: curriculum.reduce(
      (total, semester) =>
        total +
        (semester.totalCredits ??
          semester.subjects?.reduce(
            (subjectTotal, subject) => subjectTotal + (subject.credits ?? 0),
            0,
          ) ??
          0),
      0,
    ),

    totalFaqs: faqs.length,
  };

  return {
    university,
    course,
    curriculum,
    faqs,
    summary: response.data.summary ?? calculatedSummary,
  };
}

function getMetadataImage(
  seo: SeoFields | undefined,
  fallback?: string | null,
) {
  return (
    getMediaUrl(seo?.ogImage) ||
    getMediaUrl(seo?.twitterImage) ||
    fallback ||
    undefined
  );
}

function getRobotsMetadata(robots?: string): Metadata["robots"] {
  if (!robots) return undefined;

  const normalizedRobots = robots.toLowerCase();

  return {
    index: !normalizedRobots.includes("noindex"),
    follow: !normalizedRobots.includes("nofollow"),
  };
}

function getCourseName(
  catalogName: string,
  catalogShortName: string | undefined,
  specializationName?: string,
) {
  const baseName = catalogShortName || catalogName;

  return specializationName ? `${baseName} in ${specializationName}` : baseName;
}

export async function generateMetadata({
  params,
}: UniversityCoursePageProps): Promise<Metadata> {
  const { universitySlug, universityCourseSlug } = await params;

  const result = await loadCourse(universitySlug, universityCourseSlug).catch(
    () => null,
  );

  if (!result) {
    return {
      title: "Course Not Found",
      description: "The requested university course could not be found.",
    };
  }

  const { university, course } = result;

  const courseName = getCourseName(
    course.courseCatalog.name,
    course.courseCatalog.shortName,
    course.specialization?.name,
  );

  const description =
    course.seo?.metaDescription ||
    course.overview ||
    course.courseCatalog.overview ||
    `Explore ${courseName} at ${university.name}, including fees, eligibility, curriculum and admission details.`;

  const fallbackImage =
    getMediaUrl(course.banner) ||
    getMediaUrl(course.thumbnail) ||
    getMediaUrl(university.banner);

  const image = getMetadataImage(course.seo, fallbackImage);

  const twitterImage = getMediaUrl(course.seo?.twitterImage) || image;

  return {
    title: course.seo?.metaTitle || `${courseName} | ${university.name}`,

    description,

    keywords: course.seo?.keywords,

    alternates: course.seo?.canonical
      ? {
          canonical: course.seo.canonical,
        }
      : undefined,

    robots: getRobotsMetadata(course.seo?.robots),

    openGraph: {
      title: course.seo?.ogTitle || course.seo?.metaTitle || courseName,

      description: course.seo?.ogDescription || description,

      type: "website",

      images: image
        ? [
            {
              url: image,
              alt: `${courseName} at ${university.name}`,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",

      title: course.seo?.twitterTitle || course.seo?.ogTitle || courseName,

      description: course.seo?.twitterDescription || description,

      images: twitterImage ? [twitterImage] : undefined,
    },
  };
}

function formatMoney(value?: number, currency = "INR") {
  if (value === undefined || value === null) {
    return "Contact for details";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export default async function UniversityCoursePage({
  params,
}: UniversityCoursePageProps) {
  const { universitySlug, universityCourseSlug } = await params;

  let result;

  try {
    result = await loadCourse(universitySlug, universityCourseSlug);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }

    throw error;
  }

  const { university, course, curriculum, faqs, summary } = result;

  const courseName = getCourseName(
    course.courseCatalog.name,
    course.courseCatalog.shortName,
    course.specialization?.name,
  );

  const fullCourseName = course.specialization?.name
    ? `${course.courseCatalog.name} in ${course.specialization.name}`
    : course.courseCatalog.name;

  const bannerUrl =
    getMediaUrl(course.banner) ||
    getMediaUrl(course.thumbnail) ||
    getMediaUrl(university.banner);

  const logoUrl = getMediaUrl(university.logo);
  const brochureUrl = getMediaUrl(course.brochure);

  const location = [university.city?.name, university.state?.name]
    .filter(Boolean)
    .join(", ");

  let schemaMarkup: Record<string, unknown> | null = null;

  if (course.seo?.schemaMarkup) {
    try {
      schemaMarkup = JSON.parse(course.seo.schemaMarkup) as Record<
        string,
        unknown
      >;
    } catch {
      schemaMarkup = null;
    }
  }

  const feeItems = [
    {
      label: "Application Fee",
      value: course.applicationFee,
    },
    {
      label: "Semester Fee",
      value: course.semesterFee,
    },
    {
      label: "Annual Fee",
      value: course.annualFee,
    },
    {
      label: "Total Program Fee",
      value: course.totalFee,
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fffdf8_0%,#f8f4eb_100%)]">
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />
      )}

      <section className="relative isolate min-h-[620px] overflow-hidden bg-brand-navy text-white sm:min-h-[680px] lg:min-h-[720px]">
        {bannerUrl && (
          <div className="absolute inset-0 lg:left-[45%]">
            <Image
              src={bannerUrl}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        )}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,22,48,0.98)_0%,rgba(6,22,48,0.94)_42%,rgba(6,22,48,0.62)_68%,rgba(6,22,48,0.20)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(6,22,48,0.62)_0%,rgba(6,22,48,0.94)_48%,rgba(6,22,48,1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(214,170,79,0.18),transparent_30%)]" />
        <div className="absolute -bottom-24 -left-24 size-72 rounded-full border border-white/10" />
        <div className="absolute -bottom-12 -left-12 size-44 rounded-full border border-brand-gold-light/20" />

        <div className="container-custom relative flex min-h-[620px] flex-col justify-end py-10 sm:min-h-[680px] sm:py-14 lg:min-h-[720px] lg:justify-center lg:py-20">
          <Link
            href={`/universities/${university.slug}`}
            className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:border-brand-gold-light/50 hover:bg-white/15 sm:mb-9"
          >
            <ArrowLeft className="size-4" />
            Back to {university.shortName || university.name}
          </Link>

          <div className="max-w-3xl lg:max-w-[660px]">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-brand-gold-light/35 bg-brand-gold-light/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-gold-light backdrop-blur-sm">
                {course.studyMode || "Online"} Program
              </span>

              {course.courseCatalog.level && (
                <span className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
                  {course.courseCatalog.level}
                </span>
              )}
            </div>

            <h1 className="mt-5 max-w-3xl font-serif text-[2.5rem] font-bold leading-[1.08] tracking-[-0.025em] text-white sm:mt-6 sm:text-5xl lg:text-[4rem]">
              {courseName}
            </h1>

            <p className="mt-4 text-base font-semibold leading-7 text-brand-gold-light sm:text-lg">
              Offered by {university.name}
            </p>

            <div className="mt-7 grid gap-3 text-sm text-white/85 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              <span className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-white/10">
                  <Clock3 className="size-4 text-brand-gold-light" />
                </span>
                {course.duration} {course.durationUnit}
              </span>

              <span className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-white/10">
                  <Monitor className="size-4 text-brand-gold-light" />
                </span>
                {course.studyMode || "Online"} learning
              </span>

              {location && (
                <span className="flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-full bg-white/10">
                    <MapPin className="size-4 text-brand-gold-light" />
                  </span>
                  {location}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-custom grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_350px] xl:gap-10">
          <div className="order-2 min-w-0 space-y-6 sm:space-y-8 lg:order-1">
            <article className="group rounded-[1.75rem] border border-brand-border/80 bg-white p-5 shadow-[0_18px_55px_rgba(10,31,68,0.07)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_65px_rgba(10,31,68,0.11)] sm:p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-gold">
                Program overview
              </p>

              <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
                About This Course
              </h2>

              <p className="mt-5 whitespace-pre-line text-[15px] leading-7 text-muted-foreground sm:text-base sm:leading-8">
                {course.overview ||
                  course.courseCatalog.overview ||
                  `Learn more about ${fullCourseName} offered by ${university.name}.`}
              </p>
            </article>

            <div className="grid gap-5 md:grid-cols-2 sm:gap-6">
              <article className="rounded-[1.75rem] border border-brand-border/80 bg-white p-5 shadow-[0_18px_55px_rgba(10,31,68,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,31,68,0.11)] sm:p-8">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-brand-gold/15 bg-brand-gold-soft text-brand-gold shadow-sm">
                  <GraduationCap className="size-6" />
                </div>

                <h2 className="mt-5 font-serif text-2xl font-bold text-brand-navy">
                  Eligibility
                </h2>

                <p className="mt-3 whitespace-pre-line leading-7 text-muted-foreground">
                  {course.eligibility ||
                    "Contact our counsellors for complete eligibility details."}
                </p>
              </article>

              <article className="rounded-[1.75rem] border border-brand-border/80 bg-white p-5 shadow-[0_18px_55px_rgba(10,31,68,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,31,68,0.11)] sm:p-8">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-brand-gold/15 bg-brand-gold-soft text-brand-gold shadow-sm">
                  <CalendarCheck className="size-6" />
                </div>

                <h2 className="mt-5 font-serif text-2xl font-bold text-brand-navy">
                  Admission Process
                </h2>

                <p className="mt-3 whitespace-pre-line leading-7 text-muted-foreground">
                  {course.admissionProcess ||
                    "Apply online, submit the required documents and complete the university verification process."}
                </p>
              </article>
            </div>

            <article className="rounded-[1.75rem] border border-brand-border/80 bg-white p-5 shadow-[0_18px_55px_rgba(10,31,68,0.07)] sm:p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-gold">
                Fee details
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy">
                Program Fee Structure
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {feeItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-brand-gold/15 bg-[linear-gradient(145deg,#fffaf0_0%,#f7f1e5_100%)] p-4 transition hover:border-brand-gold/35 sm:p-5"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>

                    <p className="mt-2 text-xl font-bold text-brand-navy">
                      {formatMoney(item.value, course.currency)}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            {curriculum.length > 0 && (
              <article className="rounded-[1.75rem] border border-brand-border/80 bg-white p-5 shadow-[0_18px_55px_rgba(10,31,68,0.07)] sm:p-8 lg:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-gold">
                  Course curriculum
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy">
                  Semester-wise Subjects
                </h2>

                <p className="mt-3 leading-7 text-muted-foreground">
                  Explore the subjects and credits covered throughout the
                  programme.
                </p>

                <Accordion
                  defaultValue={curriculum[0]?._id ? [curriculum[0]._id] : []}
                  className="mt-7 overflow-hidden rounded-2xl border border-brand-border bg-white"
                >
                  {curriculum.map((semester) => {
                    const semesterCredits =
                      semester.totalCredits ??
                      semester.subjects.reduce(
                        (total, subject) => total + (subject.credits ?? 0),
                        0,
                      );

                    return (
                      <AccordionItem
                        key={semester._id}
                        value={semester._id}
                        className="border-brand-border/80 bg-white px-4 sm:px-6"
                      >
                        <AccordionTrigger className="py-5 hover:no-underline">
                          <span className="flex flex-1 flex-col items-start justify-between gap-2 pr-3 sm:flex-row sm:items-center sm:gap-4 sm:pr-4">
                            <span className="text-left text-base font-bold text-brand-navy">
                              {semester.title ||
                                `Semester ${semester.semesterNumber}`}
                            </span>

                            <span className="shrink-0 rounded-full border border-brand-gold/15 bg-brand-gold-soft px-3 py-1 text-xs font-bold text-brand-gold">
                              {semesterCredits} Credits
                            </span>
                          </span>
                        </AccordionTrigger>

                        <AccordionContent className="pb-6">
                          {semester.description && (
                            <p className="mb-5 leading-7 text-muted-foreground">
                              {semester.description}
                            </p>
                          )}

                          {semester.subjects.length > 0 ? (
                            <div className="overflow-hidden rounded-xl border border-brand-border">
                              {semester.subjects.map((subject, index) => (
                                <div
                                  key={subject._id}
                                  className="grid gap-3 border-b border-brand-border/70 p-4 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center"
                                >
                                  <div>
                                    <p className="font-semibold text-brand-navy">
                                      {index + 1}. {subject.name}
                                    </p>

                                    {subject.code && (
                                      <p className="mt-1 text-xs font-medium text-muted-foreground">
                                        Subject Code: {subject.code}
                                      </p>
                                    )}

                                    {subject.description && (
                                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                        {subject.description}
                                      </p>
                                    )}
                                  </div>

                                  <span className="w-fit rounded-lg bg-brand-cream px-3 py-1.5 text-xs font-bold text-brand-navy">
                                    {subject.credits ?? 0} Credits
                                  </span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-sm text-muted-foreground">
                              Subjects will be updated soon.
                            </p>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </article>
            )}

            {(summary.totalSemesters ||
              summary.totalSubjects ||
              summary.totalCredits) && (
              <article className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,#071d3e_0%,#0b2e5b_100%)] p-5 text-white shadow-[0_22px_65px_rgba(7,29,62,0.22)] sm:p-8 lg:p-10">
                <div className="absolute -right-16 -top-16 size-52 rounded-full border border-white/10" />
                <div className="absolute -right-8 -top-8 size-32 rounded-full border border-brand-gold-light/20" />
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-gold-light">
                  Course summary
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-white">
                  Program at a Glance
                </h2>

                <div className="relative mt-7 grid gap-3 sm:grid-cols-3 sm:gap-4">
                  <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm">
                    <p className="text-3xl font-bold text-brand-gold-light">
                      {summary.totalSemesters ?? curriculum.length}
                    </p>
                    <p className="mt-2 text-sm text-white/70">Semesters</p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm">
                    <p className="text-3xl font-bold text-brand-gold-light">
                      {summary.totalSubjects ?? 0}
                    </p>
                    <p className="mt-2 text-sm text-white/70">Subjects</p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm">
                    <p className="text-3xl font-bold text-brand-gold-light">
                      {summary.totalCredits ?? 0}
                    </p>
                    <p className="mt-2 text-sm text-white/70">Total Credits</p>
                  </div>
                </div>
              </article>
            )}

            {faqs.length > 0 && (
              <article className="rounded-[1.75rem] border border-brand-border/80 bg-white p-5 shadow-[0_18px_55px_rgba(10,31,68,0.07)] sm:p-8 lg:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-gold">
                  Common questions
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy">
                  Frequently Asked Questions
                </h2>

                <Accordion className="mt-7 gap-3">
                  {faqs.map((faq) => (
                    <AccordionItem
                      key={faq._id}
                      value={faq._id}
                      className="rounded-2xl border border-brand-border/80 bg-[#fffdf9] px-4 sm:px-5"
                    >
                      <AccordionTrigger className="py-4 text-left text-sm font-bold leading-6 text-brand-navy hover:no-underline sm:text-base">
                        {faq.question}
                      </AccordionTrigger>

                      <AccordionContent className="pb-5 leading-7 text-muted-foreground">
                        <p className="whitespace-pre-line">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </article>
            )}
          </div>

          <aside className="relative order-1 h-fit overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,#071d3e_0%,#0b2e5b_100%)] p-5 text-white shadow-[0_24px_70px_rgba(7,29,62,0.24)] sm:p-7 lg:sticky lg:top-28 lg:order-2">
            <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute right-5 top-5 size-16 rounded-full bg-brand-gold-light/10 blur-xl" />
            <div className="flex items-center gap-4">
              <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white p-2 shadow-lg">
                {logoUrl ? (
                  <Image
                    src={logoUrl}
                    alt={`${university.name} logo`}
                    width={58}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <Landmark className="size-7 text-brand-navy" />
                )}
              </div>

              <div className="relative min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gold-light">
                  Degree awarded
                </p>

                <p className="mt-1 break-words font-bold leading-snug text-white">
                  {course.degreeAwarded || fullCourseName}
                </p>
              </div>
            </div>

            <div className="relative mt-7 space-y-1 border-y border-white/15 py-4 text-sm">
              <div className="flex items-center justify-between gap-4 rounded-xl px-2 py-2.5 transition hover:bg-white/5">
                <span className="flex items-center gap-2 text-white/65">
                  <Clock3 className="size-4 text-brand-gold-light" />
                  Duration
                </span>

                <strong className="text-right">
                  {course.duration} {course.durationUnit}
                </strong>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-xl px-2 py-2.5 transition hover:bg-white/5">
                <span className="flex items-center gap-2 text-white/65">
                  <BookOpen className="size-4 text-brand-gold-light" />
                  Study mode
                </span>

                <strong className="text-right">
                  {course.studyMode || "Online"}
                </strong>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-xl px-2 py-2.5 transition hover:bg-white/5">
                <span className="flex items-center gap-2 text-white/65">
                  <CheckCircle2 className="size-4 text-brand-gold-light" />
                  Admission
                </span>

                <strong className="text-right">
                  {course.admissionMode || "Direct"}
                </strong>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-xl px-2 py-2.5 transition hover:bg-white/5">
                <span className="flex items-center gap-2 text-white/65">
                  <IndianRupee className="size-4 text-brand-gold-light" />
                  Total fee
                </span>

                <strong className="text-right">
                  {formatMoney(course.totalFee, course.currency)}
                </strong>
              </div>
            </div>

            {course.applicationUrl ? (
              <a
                href={course.applicationUrl}
                target="_blank"
                rel="noreferrer"
                className="relative mt-6 flex min-h-[52px] items-center justify-center rounded-xl bg-brand-gold-light px-5 text-sm font-bold text-brand-navy-dark shadow-[0_12px_30px_rgba(214,170,79,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-gold"
              >
                Apply Now
              </a>
            ) : (
              <Link
                href="/contact"
                className="relative mt-6 flex min-h-[52px] items-center justify-center rounded-xl bg-brand-gold-light px-5 text-sm font-bold text-brand-navy-dark shadow-[0_12px_30px_rgba(214,170,79,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-gold"
              >
                Get Free Counselling
              </Link>
            )}

            {brochureUrl && (
              <a
                href={brochureUrl}
                target="_blank"
                rel="noreferrer"
                className="relative mt-3 flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.04] px-5 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                <Download className="size-4" />
                Download Brochure
              </a>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
