import { apiRequest } from "@/services/api/client";

export type MediaAsset =
  | string
  | {
    _id: string;
    url: string;
    originalName?: string;
    width?: number | null;
    height?: number | null;
  };

export type NamedReference = {
  _id: string;
  name: string;
  shortName?: string;
  code?: string;
};

export type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  canonical?: string;
  robots?: string;

  ogTitle?: string;
  ogDescription?: string;
  ogImage?: MediaAsset | null;

  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: MediaAsset | null;

  schemaMarkup?: string;
};

export type CourseCategory = {
  _id: string;
  name: string;
  slug: string;
  code?: string;
  description?: string;
};

export type CourseCatalog = {
  _id: string;
  name: string;
  shortName?: string;
  code: string;
  slug: string;

  category?: CourseCategory | null;
  level?: string;
  degreeType?: string;

  duration?: number;
  durationUnit?: string;

  overview?: string;
  icon?: MediaAsset | null;
};

export type Specialization = {
  _id: string;
  name: string;
  code?: string;
  slug: string;
  description?: string;
  icon?: MediaAsset | null;
  featured?: boolean;
  displayOrder?: number;
};

export type UniversityCourseSubject = {
  _id: string;
  name: string;
  code?: string;
  credits?: number;
  description?: string;
  displayOrder?: number;
};

export type UniversityCourseCurriculum = {
  _id: string;
  semesterNumber: number;
  title?: string;
  description?: string;
  subjects: UniversityCourseSubject[];
  totalSubjects?: number;
  totalCredits?: number;
};

export type UniversityCourseFaq = {
  _id: string;
  question: string;
  answer: string;
  category?: string;
  featured?: boolean;
  displayOrder?: number;
};

export type UniversityCourseSummary = {
  totalSemesters?: number;
  totalSubjects?: number;
  totalCredits?: number;
  totalFaqs?: number;
};

export type UniversityCourse = {
  _id: string;

  university?: string | University;

  courseCatalog: CourseCatalog;
  specialization?: Specialization | null;

  slug: string;

  duration: number;
  durationUnit: string;

  eligibility?: string;
  admissionProcess?: string;
  admissionMode?: string;
  overview?: string;

  applicationFee?: number;
  semesterFee?: number;
  annualFee?: number;
  totalFee?: number;
  currency?: string;

  studyMode?: string;
  degreeAwarded?: string;

  brochure?: MediaAsset | null;
  thumbnail?: MediaAsset | null;
  banner?: MediaAsset | null;

  applicationUrl?: string;

  featured?: boolean;
  displayOrder?: number;

  seo?: SeoFields;

  /*
   * These optional fields support an older API response where the
   * curriculum and FAQs were included inside the course object.
   */
  curriculum?: UniversityCourseCurriculum[];
  faqs?: UniversityCourseFaq[];

  createdAt?: string;
  updatedAt?: string;
};

export type University = {
  _id: string;

  name: string;
  shortName?: string;
  code: string;
  slug: string;

  establishedYear?: number;
  universityType?: string;

  websiteUrl?: string;
  email?: string;
  phone?: string;

  country?: NamedReference;
  state?: NamedReference;
  city?: NamedReference;

  address?: string;

  logo?: MediaAsset | null;
  banner?: MediaAsset | null;
  thumbnail?: MediaAsset | null;

  overview?: string;
  vision?: string;
  mission?: string;

  approvals?: NamedReference[];

  featured?: boolean;
  displayOrder?: number;

  courses?: UniversityCourse[];
  totalCourses?: number;

  seo?: SeoFields;
};

export type UniversityListResponse = {
  success: boolean;
  statusCode?: number;
  message?: string;

  data: University[];

  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export type UniversityDetailsResponse = {
  success: boolean;
  statusCode?: number;
  message?: string;
  data: University;
};

export type UniversityCourseDetailsResponse = {
  success: boolean;
  statusCode?: number;
  message?: string;

  data: {
    university: University;
    course: UniversityCourse;

    /*
     * The new public endpoint returns these fields at the top level.
     * They remain optional so an older backend does not break the page.
     */
    curriculum?: UniversityCourseCurriculum[];
    faqs?: UniversityCourseFaq[];
    summary?: UniversityCourseSummary;
  };
};

export function getMediaUrl(media?: MediaAsset | null): string | null {
  if (!media) return null;

  return typeof media === "string" ? media : media.url;
}

export function getUniversities() {
  return apiRequest<UniversityListResponse>(
    "/universities?limit=100&sortBy=displayOrder&sortOrder=asc",
    {
      revalidate: 900,
      tags: ["universities"],
    },
  );
}

export function getUniversityBySlug(universitySlug: string) {
  return apiRequest<UniversityDetailsResponse>(
    `/public/universities/${encodeURIComponent(universitySlug)}`,
    {
      revalidate: 900,
      tags: [
        "universities",
        `university-${universitySlug}`,
      ],
    },
  );
}

export function getUniversityCourseBySlug(
  universitySlug: string,
  universityCourseSlug: string,
) {
  return apiRequest<UniversityCourseDetailsResponse>(
    `/public/universities/${encodeURIComponent(
      universitySlug,
    )}/courses/${encodeURIComponent(universityCourseSlug)}`,
    {
      revalidate: 900,
      tags: [
        "universities",
        `university-${universitySlug}`,
        `university-course-${universitySlug}-${universityCourseSlug}`,
      ],
    },
  );
}