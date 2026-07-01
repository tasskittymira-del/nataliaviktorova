export function Pill({
  children,
  accent = false,
  onDark = false,
  className = "",
}: {
  children: React.ReactNode;
  accent?: boolean;
  onDark?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.8125rem] font-medium backdrop-blur-md";
  const tone = onDark
    ? "border-border-on-dark bg-white/5 text-fg-muted-on-dark"
    : "border-border bg-white/40 text-fg-muted";

  return (
    <span
      className={`${base} ${accent ? "pill-accent" : tone} ${className}`}
    >
      {children}
    </span>
  );
}
