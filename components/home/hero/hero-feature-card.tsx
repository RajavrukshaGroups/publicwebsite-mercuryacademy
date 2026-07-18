import type { LucideIcon } from "lucide-react";

interface HeroFeatureCardProps {
  icon: LucideIcon;
  title: string;
}

export function HeroFeatureCard({ icon: Icon, title }: HeroFeatureCardProps) {
  return (
    <div className="flex min-h-[68px] items-center gap-3 rounded-xl border border-[#e0e3e8] bg-white/95 px-4 py-3 shadow-[0_8px_20px_rgba(3,27,73,0.14)] backdrop-blur">
      <span className="flex size-10 shrink-0 items-center justify-center text-brand-navy">
        <Icon className="size-7" strokeWidth={1.9} aria-hidden="true" />
      </span>

      <span className="text-sm font-semibold leading-5 text-brand-navy">
        {title}
      </span>
    </div>
  );
}
