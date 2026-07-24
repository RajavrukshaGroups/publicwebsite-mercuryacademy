import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getMediaUrl,
  getUniversityBySlug,
} from "@/services/api/universities";

type UniversityPageProps = {
  params: Promise<{
    universitySlug: string;
  }>;
};

export default async function UniversityPage({
  params,
}: UniversityPageProps) {
  const { universitySlug } = await params;

  let response;

  try {
    response = await getUniversityBySlug(universitySlug);
  } catch {
    notFound();
  }

  const university = response.data;
  const logoUrl = getMediaUrl(university.logo);
  const bannerUrl = getMediaUrl(university.banner);

  return (
    <main className="min-h-screen bg-[#f8f6f1]">
      <section
        className="bg-brand-navy px-5 py-16 text-white"
        style={
          bannerUrl
            ? {
                backgroundImage: `linear-gradient(rgba(7, 24, 48, 0.86), rgba(7, 24, 48, 0.92)), url(${bannerUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }
            : undefined
        }
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center">
          {logoUrl && (
            <img
              src={logoUrl}
              alt={`${university.name} logo`}
              className="h-28 w-28 rounded-xl bg-white object-contain p-3"
            />
          )}

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#d5ad55]">
              University
            </p>

            <h1 className="font-serif text-4xl font-bold md:text-5xl">
              {university.name}
            </h1>

            <p className="mt-4 text-white/80">
              {[university.city?.name, university.state?.name]
                .filter(Boolean)
                .join(", ")}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-14">
        <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
          <h2 className="font-serif text-3xl font-bold text-brand-navy">
            About {university.shortName || university.name}
          </h2>

          <p className="mt-5 whitespace-pre-line leading-8 text-gray-600">
            {university.overview || "University overview will be updated soon."}
          </p>
        </section>

        <section className="mt-14">
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#b58b35]">
              Explore programs
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy">
              Courses Offered
            </h2>
          </div>

          {university.courses?.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {university.courses.map((course) => (
                <article
                  key={course._id}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold text-[#b58b35]">
                    {course.studyMode || "Online"} Program
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-brand-navy">
                    {course.courseCatalog.shortName ||
                      course.courseCatalog.name}
                  </h3>

                  {course.specialization?.name && (
                    <p className="mt-2 text-gray-600">
                      {course.specialization.name}
                    </p>
                  )}

                  <p className="mt-4 text-sm text-gray-500">
                    Duration: {course.duration} {course.durationUnit}
                  </p>

                  <Link
                    href={`/universities/${university.slug}/courses/${course.slug}`}
                    className="mt-6 inline-flex rounded-lg bg-brand-navy px-5 py-3 font-semibold text-white transition hover:bg-[#c39a45]"
                  >
                    View Course
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-gray-600">
              No published courses are currently available.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}