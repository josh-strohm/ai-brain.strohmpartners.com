import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";

const deliverables = [
  {
    title: "Focused Company Brain",
    body: "An internal Q&A system built around one high-friction workflow, role, or department.",
  },
  {
    title: "Clear process answers",
    body: "Steps, exceptions, and how-we-do-it-here guidance your team can rely on.",
  },
  {
    title: "Process interview and knowledge capture",
    body: "We pull the real process out of people's heads and existing notes. Messy is fine.",
  },
  {
    title: "Team walkthrough and simple training",
    body: "Your people learn how to use the Brain without needing a tech department.",
  },
  {
    title: "Adoption setup",
    body: "We help place the Brain where work already happens so it does not die in a bookmark folder.",
  },
  {
    title: "Support window",
    body: "Pilot includes 14 days of post-launch support. Starter Build includes 30 days.",
  },
];

export function DeliverablesSection() {
  return (
    <Section tone="muted" id="deliverables">
      <Container>
        <SectionHeading
          eyebrow="What you get"
          title="Clear deliverables. No vague AI promises."
          description="Every Pilot and Starter Build leaves you with a live system your team can use, not a slide deck and a login."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => (
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
      </Container>
    </Section>
  );
}
