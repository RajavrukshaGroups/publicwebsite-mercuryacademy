import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeadingAlign = "left" | "center" | "right";
type HeadingSize = "sm" | "md" | "lg" | "xl";
type HeadingTag = "h1" | "h2" | "h3";

interface HeadingProps {
  title: ReactNode;
  highlightedText?: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: ReactNode;
  align?: HeadingAlign;
  size?: HeadingSize;
  as?: HeadingTag;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  eyebrowClassName?: string;
}

const headingAlignment: Record<HeadingAlign, string> = {
  left: "text-left",
  center: "mx-auto text-center",
  right: "ml-auto text-right",
};

const headingSizes: Record<HeadingSize, string> = {
  sm: "text-3xl leading-tight sm:text-4xl",
  md: "text-4xl leading-[1.08] sm:text-5xl",
  lg: "text-5xl leading-[1.04] sm:text-6xl",
  xl: "text-5xl leading-[1.02] sm:text-6xl lg:text-7xl",
};

export function Heading({
  title,
  highlightedText,
  subtitle,
  eyebrow,
  align = "left",
  size = "md",
  as: Tag = "h2",
  className,
  titleClassName,
  subtitleClassName,
  eyebrowClassName,
}: HeadingProps) {
  return (
    <div className={cn("max-w-4xl", headingAlignment[align], className)}>
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3",
            align === "center" && "justify-center",
            align === "right" && "justify-end",
            eyebrowClassName,
          )}
        >
          <span className="h-px w-8 bg-brand-gold" />

          <p className="brand-eyebrow">{eyebrow}</p>

          <span className="h-px w-8 bg-brand-gold" />
        </div>
      )}

      <Tag className={cn("brand-display", headingSizes[size], titleClassName)}>
        {title}

        {highlightedText && (
          <>
            {" "}
            <span className="brand-highlight">{highlightedText}</span>
          </>
        )}
      </Tag>

      {subtitle && (
        <p
          className={cn(
            "mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
