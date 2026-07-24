export default function Loading() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#c99a2e]" />

        <p className="text-sm font-medium text-slate-600">Loading...</p>
      </div>
    </main>
  );
}
