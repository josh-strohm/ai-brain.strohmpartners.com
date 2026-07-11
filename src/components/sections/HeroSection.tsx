import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(34,211,238,0.2)] bg-[var(--cyan-soft)] px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--cyan)]">
            <span className="status-dot" aria-hidden />
            Done-for-you Company Brain
          </div>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
            Stop being the company manual.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
            Strohm Partners builds a Company Brain for your business: an internal
            Q&amp;A tool trained on your real process, so your team can get the right
            answer without texting you every time.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--ink-muted)]">
            We interview your team, structure the knowledge, and hand you a live
            system. Most clients start with a 2-3 week Pilot on one painful workflow.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={siteConfig.calendarUrl} size="lg">
              {siteConfig.primaryCta}
            </Button>
            <Button href="#packages" variant="secondary" size="lg">
              {siteConfig.secondaryCta}
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--border)] pt-6 text-sm text-[var(--ink-muted)]">
            <span>We build it for you</span>
            <span className="text-[var(--accent)]">•</span>
            <span>Based on your process</span>
            <span className="text-[var(--accent)]">•</span>
            <span>For service teams, not tech companies</span>
          </div>
        </div>

        <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-glass)] p-6 shadow-[var(--shadow-card)] backdrop-blur-xl sm:p-8">
          <p className="eyebrow">What you are buying</p>
          <ul className="mt-5 space-y-4">
            {[
              "A focused internal Q&A brain for one workflow or role",
              "Answers built from how your team actually works",
              "Setup, launch, and team walkthrough included",
              "A small Pilot first, not a company-wide AI project",
            ].map((item) => (
              <li
                key={item}
                className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-3 text-sm font-medium text-[var(--ink-soft)]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-[var(--ink-muted)]">
            If people keep asking you the same process questions, this is the
            system that answers them instead.
          </p>
        </div>
      </Container>
    </section>
  );
}
