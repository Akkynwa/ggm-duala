// components/shared/PageHeader.tsx
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/shared/Container";

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
    <section className={cn("relative overflow-hidden bg-background", className)}>
      {/* Top border accent */}
      <div className="h-1 bg-accent" />

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          
          {/* Left: Subtitle + decorative element */}
          <div className="flex flex-col justify-center">
            {subtitle && (
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">
                {subtitle}
              </p>
            )}
            {/* Decorative line */}
            <div className="mt-4 h-1 w-12 bg-accent lg:w-16" />
          </div>

          {/* Right: Title + Description */}
          <div>
            <h1 className="font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {description && (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}

            {children && (
              <div className="mt-8">
                {children}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Bottom border */}
      <div className="h-px bg-border" />
    </section>
  );
}