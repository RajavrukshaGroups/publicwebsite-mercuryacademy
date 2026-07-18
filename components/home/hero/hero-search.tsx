"use client";

import { FormEvent, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSearch() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = search.trim();

    if (!query) {
      router.push("/courses");
      return;
    }

    router.push(`/courses?search=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border bg-background p-2 shadow-lg"
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search MBA, MCA, BBA, BCA..."
            className="h-12 w-full rounded-xl border-0 bg-muted/60 pl-12 pr-4 text-sm outline-none transition focus:bg-muted focus:ring-2 focus:ring-primary/20"
            aria-label="Search courses"
          />
        </div>

        <button
          type="submit"
          className={cn(
            buttonVariants({
              size: "lg",
            }),
            "h-12 w-full rounded-xl px-6 sm:w-auto",
          )}
        >
          Search Courses
        </button>
      </div>
    </form>
  );
}