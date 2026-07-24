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

export type UniversityCourse = {
  _id: string;

  // It can be an ID in some responses or populated university data.
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

  seo?: University["seo"];

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

  seo?: {
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
};

type UniversityListResponse = {
  success: boolean;
  data: University[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

type UniversityDetailsResponse = {
  success: boolean;
  data: University;
};

type UniversityCourseDetailsResponse = {
  success: boolean;
  statusCode?: number;
  message?: string;
  data: {
    university: University;
    course: UniversityCourse;
  };
};

export function getMediaUrl(media?: MediaAsset | null) {
  if (!media) return null;

  return typeof media === "string" ? media : media.url;
}

export function getUniversities() {
  return apiRequest<UniversityListResponse>(
    "/universities?limit=100&sortBy=displayOrder&sortOrder=asc",
    { revalidate: 900, tags: ["universities"] },
  );
}

export function getUniversityBySlug(slug: string) {
  return apiRequest<UniversityDetailsResponse>(
    `/public/universities/${encodeURIComponent(slug)}`,
    { revalidate: 900 },
  );
}

export function getUniversityCourseBySlug(
  universitySlug: string,
  courseSlug: string,
) {
  return apiRequest<UniversityCourseDetailsResponse>(
    `/public/universities/${encodeURIComponent(
      universitySlug,
    )}/courses/${encodeURIComponent(courseSlug)}`,
    {
      revalidate: 900,
      tags: [
        "universities",
        `university-${universitySlug}`,
        `university-course-${universitySlug}-${courseSlug}`,
      ],
    },
  );
}