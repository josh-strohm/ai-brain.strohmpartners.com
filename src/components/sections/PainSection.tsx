import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/config/site";

const painPoints = [
  {
    title: "You are the walking manual",
    body: "The real process lives in your head. When you are busy, offline, or on vacation, the team guesses.",
  },
  {
    title: "The same questions keep coming back",
    body: "Texts, Slack pings, and 'quick questions' eat your day. Most of them are things you already answered last week.",
  },
  {
    title: "New hires learn by interrupting people",
    body: "Training depends on who has time. Quality slips while people learn by chasing the most experienced person.",
  },
  {
    title: "One person holds too much knowledge",
    body: "If that person leaves, or even takes a week off, the answers leave with them. That costs you time and money.",
  },
];

export function PainSection() {
  return (
    <Section id="problem" tone="muted">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="Your business runs on ‘ask the owner.’ That is expensive."
          description="Most service teams do not need more software. They need a clear place to get the right process answer without hunting people down."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {painPoints.map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]"
            >
              <h3 className="text-xl font-bold text-[var(--ink)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[var(--radius-xl)] border border-[var(--border-strong)] bg-[var(--surface-raised)] p-6 sm:p-8">
          <p className="text-lg font-semibold text-[var(--ink)] sm:text-xl">
            More folders will not fix this.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
            A shared drive full of half-updated docs still leaves people hunting for
            the real answer, or texting you again. You need answers based on how your
            business actually runs.
          </p>
          <div className="mt-6">
            <Button href={siteConfig.calendarUrl} size="lg">
              Book a Fit Call
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
