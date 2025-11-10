import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

export function SectionTitle({
  children,
  className,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2
        className={cn(
          'text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rb-navy via-rb-yellow to-rb-red bg-clip-text text-transparent',
          className
        )}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
