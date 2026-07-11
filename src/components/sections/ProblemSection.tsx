import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";

const comparisons = [
  {
    name: "Folders and old SOPs",
    points: [
      "Hard to search when work is moving",
      "Go out of date quickly",
      "Nobody knows which version is current",
      "Still need someone to explain the real process",
    ],
  },
  {
    name: "Generic ChatGPT",
    points: [
      "Does not know your exceptions",
      "Gives generic advice",
      "Misses how you do it here",
      "Can sound sure and still be wrong for your team",
    ],
  },
  {
    name: "Company Brain",
    highlight: true,
    points: [
      "Built from your real process",
      "Answers in plain language",
      "Meant for daily team use",
      "Starts with one high-friction workflow",
    ],
  },
];

export function ProblemSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Why the usual fixes fail"
          title="Folders store files. ChatGPT guesses. Neither knows your business."
          description="Teams try the obvious tools first. The real gap is usable company knowledge: answers your people can trust under pressure."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {comparisons.map((col) => (
            <article
              key={col.name}
              className={
                col.highlight
                  ? "rounded-[var(--radius-xl)] border border-[var(--border-strong)] bg-[var(--surface-raised)] p-6 shadow-[var(--shadow-card)]"
                  : "rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6"
              }
            >
              <h3
                className={
                  col.highlight
                    ? "text-xl font-bold text-[var(--accent-hover)]"
                    : "text-xl font-bold text-[var(--ink)]"
                }
              >
                {col.name}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.points.map((point) => (
                  <li
                    key={point}
                    className={
                      col.highlight
                        ? "flex gap-3 text-sm leading-relaxed text-[var(--ink-soft)]"
                        : "flex gap-3 text-sm leading-relaxed text-[var(--ink-muted)]"
                    }
                  >
                    <span
                      className={
                        col.highlight
                          ? "mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]"
                          : "mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--ink-muted)]"
                      }
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
