import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/config/site";

const steps = [
  {
    title: "Book the Fit Call",
    body: "Pick a time on the calendar page. We will review whether a Pilot is a good match.",
  },
  {
    title: "15-20 minute conversation",
    body: "We map the repeated questions, team size, urgency, and the best first workflow.",
  },
  {
    title: "Recommend Pilot or Starter",
    body: "Most buyers start with a Pilot. Broader Starter Builds only when scope and budget fit.",
  },
  {
    title: "Build, launch, train",
    body: "We capture the process, structure answers, launch the Brain, and train your team.",
  },
  {
    title: "Measure and decide next",
    body: "If it is useful, we can maintain it with Brain Care Lite or expand into more workflows.",
  },
];

export function ProcessSection() {
  return (
    <Section id="process">
      <Container>
        <SectionHeading
          eyebrow="What happens next"
          title="Clear process. No mystery project."
          description="The Fit Call is not a hard pitch. It is a short conversation about whether one high-friction workflow is worth solving first."
        />

        <ol className="mt-12 space-y-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-4 rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-5 sm:grid-cols-[auto_1fr] sm:items-start sm:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface-raised)] font-[family-name:var(--font-mono)] text-sm font-bold text-[var(--accent)]">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--ink)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <Button href={siteConfig.calendarUrl} size="lg">
            Book a Fit Call
          </Button>
        </div>
      </Container>
    </Section>
  );
}
