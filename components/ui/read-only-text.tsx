export function TextValue({ children }: { children?: React.ReactNode }) {
  return <div className="w-2/3 text-sm font-medium">{children || "—"}</div>;
}
