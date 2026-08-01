import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CourseClientView from "./CourseClientView";

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
    <>
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />
      )}
      <CourseClientView 
        university={university}
        course={course}
        curriculum={curriculum}
        faqs={faqs}
        summary={summary}
        courseName={courseName}
        fullCourseName={fullCourseName}
        bannerUrl={bannerUrl}
        logoUrl={logoUrl}
        brochureUrl={brochureUrl}
        location={location}
        feeItems={feeItems}
      />
    </>
  );
}
