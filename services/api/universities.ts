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
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonical?: string;
    robots?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: MediaAsset | null;
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

export function getMediaUrl(media?: MediaAsset | null) {
  return typeof media === "object" && media?.url ? media.url : null;
}

export function getUniversities() {
  return apiRequest<UniversityListResponse>(
    "/universities?limit=100&sortBy=displayOrder&sortOrder=asc",
    { revalidate: 900, tags: ["universities"] },
  );
}

export function getUniversityBySlug(slug: string) {
  return apiRequest<UniversityDetailsResponse>(
    `/universities/slug/${encodeURIComponent(slug)}`,
    { revalidate: 900, tags: ["universities", `university-${slug}`] },
  );
}