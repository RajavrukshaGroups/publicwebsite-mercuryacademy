import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
          Error 404
        </p>

        <h1 className="mt-4 text-4xl font-bold text-slate-900">
          Page not found
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          The page you are looking for may have been moved, deleted, or the URL
          may be incorrect.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-[#0b1f3a] px-6 py-3 font-semibold text-white transition hover:bg-[#132f54]"
          >
            Go to Home
          </Link>

          <Link
            href="/universities"
            className="rounded-lg border border-[#c99a2e] px-6 py-3 font-semibold text-[#0b1f3a] transition hover:bg-[#c99a2e] hover:text-white"
          >
            View Universities
          </Link>
        </div>
      </div>
    </main>
  );
}