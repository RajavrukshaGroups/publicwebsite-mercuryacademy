import { notFound } from "next/navigation";

import {
  getMediaUrl,
  getUniversityBySlug,
} from "@/services/api/universities";
import UniversityClientView from "./UniversityClientView";

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
    <UniversityClientView 
      university={university}
      logoUrl={logoUrl}
      bannerUrl={bannerUrl}
    />
  );
}