type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-label mb-5 font-medium uppercase text-[var(--muted)]">
      {children}
    </p>
  );
}
