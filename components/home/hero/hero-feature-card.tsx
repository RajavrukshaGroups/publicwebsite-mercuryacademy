import type { LucideIcon } from "lucide-react";

interface HeroFeatureCardProps {
  icon: LucideIcon;
  title: string;
}

export function HeroFeatureCard({ icon: Icon, title }: HeroFeatureCardProps) {
  return (
    <div className="flex min-h-[68px] items-center gap-3 rounded-2xl border border-brand-border bg-white/95 px-4 py-3 shadow-brand-md backdrop-blur">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl text-brand-navy">
        <Icon className="size-6" aria-hidden="true" />
      </span>

      <span className="text-sm font-semibold leading-5 text-brand-navy">
        {title}
      </span>
    </div>
  );
}
