import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getMediaUrl,
  getUniversityCourseBySlug,
} from "@/services/api/universities";

type UniversityCoursePageProps = {
  params: Promise<{
    universitySlug: string;
    universityCourseSlug: string;
  }>;
};

function formatCurrency(amount?: number, currency = "INR") {
  if (amount === undefined || amount === null) return "Contact us";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default async function UniversityCoursePage({
  params,
}: UniversityCoursePageProps) {
  const { universitySlug, universityCourseSlug } = await params;

  let response;

  try {
    response = await getUniversityCourseBySlug(
      universitySlug,
      universityCourseSlug,
    );
  } catch {
    notFound();
  }

  const { university, course } = response.data;

  const courseName = course.specialization?.name
    ? `${course.courseCatalog.shortName || course.courseCatalog.name} in ${
        course.specialization.name
      }`
    : course.courseCatalog.name;

  const bannerUrl =
    getMediaUrl(course.banner) ||
    getMediaUrl(course.thumbnail) ||
    getMediaUrl(university.banner);

  const brochureUrl = getMediaUrl(course.brochure);

  return (
    <main className="min-h-screen bg-[#f8f6f1]">
      <section
        className="bg-brand-navy px-5 py-16 text-white"
        style={
          bannerUrl
            ? {
                backgroundImage: `linear-gradient(rgba(7, 24, 48, 0.88), rgba(7, 24, 48, 0.94)), url(${bannerUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }
            : undefined
        }
      >
        <div className="mx-auto max-w-7xl">
          <Link
            href={`/universities/${university.slug}`}
            className="text-sm font-semibold text-[#e0bb67] hover:text-white"
          >
            ← {university.name}
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#e0bb67]">
            {course.studyMode || "Online"} Program
          </p>

          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold md:text-5xl">
            {courseName}
          </h1>

          <p className="mt-5 text-lg text-white/80">
            Offered by {university.name}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-brand-navy">
              Course Overview
            </h2>

            <p className="mt-5 whitespace-pre-line leading-8 text-gray-600">
              {course.overview ||
                course.courseCatalog.overview ||
                "Course overview will be updated soon."}
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-brand-navy">
              Eligibility
            </h2>

            <p className="mt-5 whitespace-pre-line leading-8 text-gray-600">
              {course.eligibility ||
                "Please contact our counsellors for eligibility details."}
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-brand-navy">
              Admission Process
            </h2>

            <p className="mt-5 whitespace-pre-line leading-8 text-gray-600">
              {course.admissionProcess ||
                "Admission process information will be updated soon."}
            </p>
          </section>
        </div>

        <aside>
          <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-brand-navy">
              Course Information
            </h2>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm text-gray-500">Duration</dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  {course.duration} {course.durationUnit}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-gray-500">Study mode</dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  {course.studyMode || "Not specified"}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-gray-500">Degree awarded</dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  {course.degreeAwarded || course.courseCatalog.name}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-gray-500">Total fee</dt>
                <dd className="mt-1 text-xl font-bold text-brand-navy">
                  {formatCurrency(course.totalFee, course.currency)}
                </dd>
              </div>
            </dl>

            {course.applicationUrl && (
              <a
                href={course.applicationUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 flex justify-center rounded-lg bg-brand-navy px-5 py-3 font-semibold text-white"
              >
                Apply Now
              </a>
            )}

            {brochureUrl && (
              <a
                href={brochureUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex justify-center rounded-lg border border-brand-navy px-5 py-3 font-semibold text-brand-navy"
              >
                Download Brochure
              </a>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
