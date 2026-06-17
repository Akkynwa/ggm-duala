// components/shared/SectionTitle.tsx
import { cn } from "@/lib/utils/cn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "text-center",
        className
      )}
    >
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {subtitle}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}