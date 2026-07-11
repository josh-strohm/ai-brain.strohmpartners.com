import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "muted" | "dark";
}) {
  const tones = {
    default: "bg-transparent",
    muted: "bg-[var(--bg-muted)]/70",
    dark: "bg-[var(--surface)] text-[var(--ink-on-dark)]",
  };

  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", tones[tone], className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      {eyebrow ? (
        <p className={cn("eyebrow mb-3.5", light ? "text-[var(--accent)]" : "text-[var(--accent)]")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-[var(--ink)]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/75" : "text-[var(--ink-soft)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
