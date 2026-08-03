// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowRight,
//   Award,
//   Building2,
//   CalendarDays,
//   MapPin,
// } from "lucide-react";

// import {
//   getMediaUrl,
//   getUniversities,
//   type University,
// } from "@/services/api/universities";

// export const metadata: Metadata = {
//   title: "Universities",
//   description:
//     "Explore recognized online and distance education universities.",
// };

// function UniversityCard({ university }: { university: University }) {
//  const logoUrl = getMediaUrl(university.logo);
//   const location = [university.city?.name, university.state?.name]
//     .filter(Boolean)
//     .join(", ");
//   const approvalNames = university.approvals
//     ?.slice(0, 3)
//     .map((approval) => approval.shortName || approval.name);

//   return (
//     <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-white shadow-brand-sm transition duration-300 hover:-translate-y-1 hover:shadow-brand-lg">
//       <div className="relative flex min-h-44 items-center justify-center border-b border-brand-border bg-[linear-gradient(135deg,#fffdf8_0%,#f7f2e6_100%)] p-8">
//         {university.featured && (
//           <span className="absolute left-5 top-5 rounded-full bg-brand-gold-soft px-3 py-1 text-xs font-bold text-brand-navy">
//             Featured
//           </span>
//         )}

//         {logoUrl ? (
//           <img
//             src={logoUrl}
//             alt={`${university.name} logo`}
//             width={220}
//             height={100}
//             className="h-24 w-full object-contain transition duration-300 group-hover:scale-105"
//           />
//         ) : (
//           <div className="flex size-24 items-center justify-center rounded-2xl bg-brand-navy text-2xl font-bold text-brand-gold shadow-brand-md">
//             {university.shortName || university.code || university.name.charAt(0)}
//           </div>
//         )}
//       </div>

//       <div className="flex flex-1 flex-col p-6">
//         <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-gold">
//           {university.shortName || university.code}
//         </p>
//         <h2 className="text-2xl leading-tight text-brand-navy-dark">
//           {university.name}
//         </h2>

//         <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
//           <span className="flex items-center gap-2">
//             <Building2 className="size-4 shrink-0 text-brand-gold" />
//             {university.universityType || "University"}
//           </span>
//           <span className="flex items-center gap-2">
//             <CalendarDays className="size-4 shrink-0 text-brand-gold" />
//             {university.establishedYear
//               ? `Est. ${university.establishedYear}`
//               : "Established university"}
//           </span>
//           <span className="col-span-2 flex items-center gap-2">
//             <MapPin className="size-4 shrink-0 text-brand-gold" />
//             {location || university.country?.name || "India"}
//           </span>
//         </div>

//         {approvalNames && approvalNames.length > 0 && (
//           <div className="mt-5 flex flex-wrap gap-2">
//             {approvalNames.map((approval) => (
//               <span
//                 key={approval}
//                 className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-cream px-3 py-1 text-xs font-semibold text-brand-navy"
//               >
//                 <Award className="size-3.5 text-brand-gold" />
//                 {approval}
//               </span>
//             ))}
//           </div>
//         )}

//         <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
//           {university.overview ||
//             `Explore programs, eligibility, fees and admission information for ${university.name}.`}
//         </p>

//         <Link
//           href={`/universities/${university.slug}`}
//           className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-navy px-5 text-sm font-bold text-white transition hover:bg-brand-navy-dark"
//         >
//           View University
//           <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
//         </Link>
//       </div>
//     </article>
//   );
// }

// export default async function UniversitiesPage() {
//   let universities: University[] = [];
//   let loadFailed = false;

//   try {
//     const response = await getUniversities();
//     universities = Array.isArray(response.data) ? response.data : [];
//   } catch (error) {
//     loadFailed = true;
//     console.error("Universities page error:", error);
//   }

//   return (
//     <main className="bg-brand-cream">
//       <section className="relative overflow-hidden bg-brand-navy py-16 text-white sm:py-20">
//         <div className="absolute -right-24 -top-24 size-80 rounded-full bg-brand-gold/10 blur-3xl" />
//         <div className="container-custom relative">
//           <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-gold-light">
//             Trusted institutions
//           </p>
//           <h1 className="max-w-4xl text-4xl text-white sm:text-5xl lg:text-6xl">
//             Explore Our Partner Universities
//           </h1>
//           <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
//             Compare recognized universities, approvals, locations and key
//             information before choosing the right institution for your career.
//           </p>
//         </div>
//       </section>

//       <section className="section-spacing">
//         <div className="container-custom">
//           <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
//             <div>
//               <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-gold">
//                 University directory
//               </p>
//               <h2 className="mt-2 text-3xl sm:text-4xl">
//                 All Universities
//               </h2>
//             </div>
//             {!loadFailed && (
//               <p className="text-sm font-semibold text-muted-foreground">
//                 {universities.length} {universities.length === 1 ? "university" : "universities"}
//               </p>
//             )}
//           </div>

//           {loadFailed ? (
//             <div className="rounded-3xl border border-brand-border bg-white px-6 py-16 text-center shadow-brand-sm">
//               <h2 className="text-2xl">Unable to load universities</h2>
//               <p className="mt-3 text-muted-foreground">
//                 Please check that the backend server is running and try again.
//               </p>
//             </div>
//           ) : universities.length > 0 ? (
//             <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
//               {universities.map((university) => (
//                 <UniversityCard key={university._id} university={university} />
//               ))}
//             </div>
//           ) : (
//             <div className="rounded-3xl border border-brand-border bg-white px-6 py-16 text-center shadow-brand-sm">
//               <h2 className="text-2xl">No universities available yet</h2>
//               <p className="mt-3 text-muted-foreground">
//                 Published universities will appear here automatically.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";

import {
  getMediaUrl,
  getUniversities,
  type University,
} from "@/services/api/universities";

export const metadata: Metadata = {
  title: "Universities",
  description:
    "Explore recognized online and distance education universities.",
};

function UniversityCard({ university }: { university: University }) {
  // Get logo URL with fallback
  const logoUrl = university.logo ? getMediaUrl(university.logo) : null;
  
  const location = [university.city?.name, university.state?.name]
    .filter(Boolean)
    .join(", ");
  const approvalNames = university.approvals
    ?.slice(0, 3)
    .map((approval) => approval.shortName || approval.name);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-white shadow-brand-sm transition duration-300 hover:-translate-y-1 hover:shadow-brand-lg px-6 py-3">
      <div className="relative flex min-h-44 items-center justify-center border-b border-brand-border bg-[linear-gradient(135deg,#fffdf8_0%,#f7f2e6_100%)] p-8 px-12">
        {university.featured && (
          <span className="absolute left-5 top-5 rounded-full bg-brand-gold-soft px-3 py-1 text-xs font-bold text-brand-navy">
            Featured
          </span>
        )}

        {logoUrl ? (
          <div className="relative h-24 w-full">
            <Image
              src={logoUrl}
              alt={`${university.name} logo`}
              fill
              className="object-contain transition duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              unoptimized={logoUrl.startsWith('http') && !logoUrl.startsWith(process.env.NEXT_PUBLIC_API_URL || '')}
            />
          </div>
        ) : (
          <div className="flex size-24 items-center justify-center rounded-2xl bg-brand-navy text-2xl font-bold text-brand-gold shadow-brand-md">
            {university.shortName || university.code || university.name.charAt(0)}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-gold">
          {university.shortName || university.code}
        </p>
        <h2 className="text-2xl leading-tight text-brand-navy-dark">
          {university.name}
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Building2 className="size-4 shrink-0 text-brand-gold" />
            {university.universityType || "University"}
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-brand-gold" />
            {university.establishedYear
              ? `Est. ${university.establishedYear}`
              : "Established university"}
          </span>
          <span className="col-span-2 flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-brand-gold" />
            {location || university.country?.name || "India"}
          </span>
        </div>

        {approvalNames && approvalNames.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {approvalNames.map((approval) => (
              <span
                key={approval}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-cream px-3 py-1 text-xs font-semibold text-brand-navy"
              >
                <Award className="size-3.5 text-brand-gold" />
                {approval}
              </span>
            ))}
          </div>
        )}

        <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground mb-3">
          {university.overview ||
            `Explore programs, eligibility, fees and admission information for ${university.name}.`}
        </p>

        <Link
          href={`/universities/${university.slug}`}
          className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-navy px-5 text-sm font-bold text-white transition hover:bg-brand-navy-dark"
        >
          View University
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export default async function UniversitiesPage() {
  let universities: University[] = [];
  let loadFailed = false;

  try {
    const response = await getUniversities();
    universities = Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    loadFailed = true;
    console.error("Universities page error:", error);
  }

  return (
    <main className="bg-brand-cream">
      <section className="relative overflow-hidden bg-brand-navy py-16 text-white sm:py-20 px-12">
        <div className="absolute -right-24 -top-24 size-80 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="container-custom relative">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-gold-light">
            Trusted institutions
          </p>
          <h1 className="max-w-4xl text-4xl text-white sm:text-5xl lg:text-6xl">
            Explore Our Partner Universities
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Compare recognized universities, approvals, locations and key
            information before choosing the right institution for your career.
          </p>
        </div>
      </section>

      <section className="section-spacing px-12 py-8">
        <div className="container-custom">
          <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-gold">
                University directory
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl">
                All Universities
              </h2>
            </div>
            {!loadFailed && (
              <p className="text-sm font-semibold text-muted-foreground">
                {universities.length} {universities.length === 1 ? "university" : "universities"}
              </p>
            )}
          </div>

          {loadFailed ? (
            <div className="rounded-3xl border border-brand-border bg-white px-6 py-16 text-center shadow-brand-sm">
              <h2 className="text-2xl">Unable to load universities</h2>
              <p className="mt-3 text-muted-foreground">
                Please check that the backend server is running and try again.
              </p>
            </div>
          ) : universities.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {universities.map((university) => (
                <UniversityCard key={university._id} university={university} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-brand-border bg-white px-6 py-16 text-center shadow-brand-sm">
              <h2 className="text-2xl">No universities available yet</h2>
              <p className="mt-3 text-muted-foreground">
                Published universities will appear here automatically.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}