import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/config/site";

export function SolutionSection() {
  return (
    <Section tone="muted" id="solution">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="What we offer"
              title="Company Brain Starter: a done-for-you internal Q&A system built from how you work."
              description="We capture one important workflow, turn it into clear answers, and set up a Company Brain your team can ask every day. Not a giant AI project. Not a generic chatbot."
            />
            <ul className="mt-8 space-y-3 text-sm text-[var(--ink)] sm:text-base">
              {[
                "Built from your process, not generic internet answers",
                "Made for owners and teams with little or no AI experience",
                "Starts with a Pilot so you can prove value before expanding",
                "Gives you a base you can grow later if it works",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-bold text-[var(--accent)]">
                    ✓
                  </span>
                  <span className="text-[var(--ink-muted)]">
                    <span className="font-medium text-[var(--ink)]">{item}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={siteConfig.calendarUrl} size="lg">
                {siteConfig.primaryCta}
              </Button>
            </div>
          </div>

          <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] sm:p-8">
            <p className="eyebrow">What changes</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-[var(--radius-md)] bg-[var(--surface-raised)] p-4">
                <p className="font-[family-name:var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                  Before
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                  &ldquo;Ask the owner or office manager.&rdquo; Work slows when that person is
                  busy.
                </p>
              </div>
              <div className="rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--accent-soft)] p-4">
                <p className="font-[family-name:var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                  After
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]">
                  &ldquo;Ask the Company Brain.&rdquo; Your team gets clear answers in plain
                  language, based on how your business actually runs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
