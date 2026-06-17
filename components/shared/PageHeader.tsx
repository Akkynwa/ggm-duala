// components/shared/PageHeader.tsx
import { cn } from "@/lib/utils/cn";
import { Container } from "./Container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative bg-primary py-16 sm:py-20 lg:py-24",
        className
      )}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, white 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {subtitle}
            </p>
          )}
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="text-base text-white/70 sm:text-lg">
              {description}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}