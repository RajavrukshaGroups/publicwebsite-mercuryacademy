import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universities",
  description:
    "Explore recognized online and distance education universities.",
};

export default function UniversitiesPage() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <h1 className="section-heading">
          Explore Universities
        </h1>

        <p className="section-description mt-5">
          Compare recognized universities, available online courses,
          accreditations, eligibility and fee structures.
        </p>
      </div>
    </section>
  );
}