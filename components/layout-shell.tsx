import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;
type SectionProps = ComponentPropsWithoutRef<"section">;

function mergeClassName(base: string, className?: string) {
  return className ? `${base} ${className}` : base;
}

export function Container({ className, ...props }: ContainerProps) {
  return <div className={mergeClassName("site-container", className)} {...props} />;
}

export function Section({ className, ...props }: SectionProps) {
  return <section className={mergeClassName("site-section", className)} {...props} />;
}
