import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";

const metrics = [
  {
    title: "Fewer repeated questions",
    body: "How often the owner or manager still gets the same process pings.",
  },
  {
    title: "Faster answers",
    body: "How quickly the team can get a usable process answer without hunting people down.",
  },
  {
    title: "Cleaner new-hire ramp",
    body: "Whether training for one role gets simpler and less dependent on one person.",
  },
  {
    title: "Weekly Brain usage",
    body: "Whether people actually ask the Brain. Usage is part of success.",
  },
  {
    title: "Owner hours recovered",
    body: "A simple before-and-after on interruptions and walkthrough time.",
  },
  {
    title: "More consistent work",
    body: "Fewer 'I thought we did it the other way' moments on the scoped process.",
  },
];

export function OutcomesSection() {
  return (
    <Section tone="muted" id="outcomes">
      <Container>
        <SectionHeading
          eyebrow="How we measure success"
          title="Proof comes from usefulness, not hype screenshots."
          description="We do not invent fake case studies. On every Pilot, we define simple success markers up front and track whether the Brain is helping the team."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--ink)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
          Over time, early projects also create real proof: short testimonials,
          before-and-after stories, and simple metric snapshots once those results exist.
        </p>
      </Container>
    </Section>
  );
}
