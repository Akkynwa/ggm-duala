// components/shared/Container.tsx
import { cn } from "@/lib/utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
  size?: "default" | "small" | "large" | "full";
}

const sizeClasses = {
  default: "max-w-7xl",
  small: "max-w-5xl",
  large: "max-w-[1440px]",
  full: "max-w-full",
};

export function Container({
  children,
  className,
  as: Component = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}