"use client";

interface AnimatedSectionProps {
  children: React.ReactNode;
}

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  return (
    <div className="transition-all duration-700 opacity-100 translate-y-0">
      {children}
    </div>
  );
}
