import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../public/images/Logo.png"

import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg";
type LogoVariant = "default" | "light";

interface LogoProps {
  href?: string;
  size?: LogoSize;
  variant?: LogoVariant;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  onClick?: () => void;
}

const logoSizes: Record<
  LogoSize,
  {
    width: number;
    height: number;
    className: string;
  }
> = {
  sm: {
    width: 190,
    height: 62,
    className: "h-11 w-auto",
  },
  md: {
    width: 240,
    height: 78,
    className: "h-14 w-auto",
  },
  lg: {
    width: 290,
    height: 94,
    className: "h-16 w-auto sm:h-18",
  },
};

const logoUrl = LogoImg;

export function Logo({
  href = "/",
  size = "md",
  variant = "default",
  className,
  imageClassName,
  priority = false,
  onClick,
}: LogoProps) {
  const styles = logoSizes[size];

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 items-center",
        className,
      )}
      aria-label="Mercury Academy home"
    >
      <Image
        src={LogoImg}
        alt="Mercury Academy"
        width={styles.width}
        height={styles.height}
        priority={priority}
        className={cn(
          "object-contain",
          styles.className,
          variant === "light" && "brightness-0 invert",
          imageClassName,
        )}
      />
    </Link>
  );
}