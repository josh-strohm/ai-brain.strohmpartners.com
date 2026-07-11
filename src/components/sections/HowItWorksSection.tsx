import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";

const steps = [
  {
    step: "01",
    title: "Capture",
    body: "We interview the people who know the real process, gather existing notes and docs, and pull out the answers your team needs day to day.",
  },
  {
    step: "02",
    title: "Structure",
    body: "We turn that knowledge into clear steps, exceptions, and answers your team can trust. Not another pile of buried files.",
  },
  {
    step: "03",
    title: "Activate",
    body: "We launch an internal Company Brain your team can ask in plain language for daily process questions.",
  },
  {
    step: "04",
    title: "Support",
    body: "We train key users, help the team start using it, and can keep the Brain updated with Brain Care Lite.",
  },
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Capture, structure, launch, support"
          description="Four clear steps. The goal is a system your team will actually use, not a complicated AI project."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item) => (
            <article
              key={item.step}
              className="relative rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="font-[family-name:var(--font-mono)] text-sm font-bold tracking-[0.16em] text-[var(--accent)]">
                {item.step}
              </p>
              <h3 className="mt-3 text-xl font-bold text-[var(--ink)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
