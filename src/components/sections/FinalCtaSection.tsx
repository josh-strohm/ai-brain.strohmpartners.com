import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { siteConfig } from "@/config/site";

export function FinalCtaSection() {
  return (
    <Section id="apply" tone="dark" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,169,98,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.1),transparent_35%)]" />
      <Container className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow">Ready to start?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Get a Company Brain your team can use every day.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
            If your team keeps asking the same process questions, and generic AI still
            does not know how your business works, a Company Brain Pilot is the practical
            first step.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-[var(--ink-soft)] sm:text-base">
            {[
              "Start with one high-friction workflow",
              "Done-for-you capture, structure, and launch",
              "Built for service teams, not tech companies",
              "Expand only after the starter proves useful",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] sm:p-8">
          <p className="eyebrow">Book a Fit Call</p>
          <h3 className="mt-2 text-2xl font-bold text-[var(--ink)]">
            Pick a time that works
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
            Use the calendar to book a short Fit Call. We will map the repeated questions
            and decide whether a Pilot is the right first step.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={siteConfig.calendarUrl} size="lg">
              {siteConfig.primaryCta}
            </Button>
            <Button href={`mailto:${siteConfig.email}`} variant="secondary" size="lg">
              Email instead
            </Button>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[var(--ink-muted)]">
            No hard pitch. Just a clear conversation about fit.
          </p>
        </div>
      </Container>
    </Section>
  );
}
