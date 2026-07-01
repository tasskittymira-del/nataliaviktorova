export function CapsLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`label-caps ${className}`}>{children}</span>;
}
