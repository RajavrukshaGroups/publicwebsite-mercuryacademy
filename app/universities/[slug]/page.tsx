type UniversityPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function UniversityPage({
  params,
}: UniversityPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-white px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-brand-navy">
          University Details
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Selected university: {slug}
        </p>
      </div>
    </main>
  );
}