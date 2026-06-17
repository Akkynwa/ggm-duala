// components/shared/Loading.tsx
import { cn } from "@/lib/utils/cn";
import { Loader2 } from "lucide-react";

interface LoadingProps {
  className?: string;
  size?: "sm" | "default" | "lg";
  text?: string;
  fullPage?: boolean;
}

const sizeClasses = {
  sm: "h-4 w-4",
  default: "h-8 w-8",
  lg: "h-12 w-12",
};

export function Loading({
  className,
  size = "default",
  text,
  fullPage = false,
}: LoadingProps) {
  const content = (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      <Loader2
        className={cn("animate-spin text-primary", sizeClasses[size])}
      />
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
    </div>
  );

  if (fullPage) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
}