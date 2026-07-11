import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/config/site";

const forItems = [
  "Owner-operated service businesses with about 3-25 people",
  "Founders and managers who answer the same process questions every week",
  "Teams where quality depends on one person's knowledge",
  "Businesses with little or no AI experience that want a practical first win",
  "Local and regional operators who want done-for-you help, not a science project",
];

const notForItems = [
  "Solopreneurs with no team handoffs",
  "Buyers looking only for the cheapest chatbot plugin",
  "Companies unwilling to do a short process interview",
  "Anyone who wants an all-company AI platform before proving one area works",
  "Projects that need heavy enterprise procurement before a simple pilot",
];

export function AudienceSection() {
  return (
    <Section id="who">
      <Container>
        <SectionHeading
          eyebrow="Who this is for"
          title="Built for practical operators, not AI hobby projects."
          description="The Pilot works best when repeated questions, slow training, or key-person risk are already costing you time."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[var(--ink)]">This is a fit if…</h3>
            <ul className="mt-5 space-y-3">
              {forItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--cyan-soft)] text-xs font-bold text-[var(--cyan)]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-raised)] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[var(--ink)]">This is not a fit if…</h3>
            <ul className="mt-5 space-y-3">
              {notForItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-400">
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-10 text-center">
          <Button href={siteConfig.calendarUrl} size="lg">
            See if a Pilot is a fit
          </Button>
        </div>
      </Container>
    </Section>
  );
}
