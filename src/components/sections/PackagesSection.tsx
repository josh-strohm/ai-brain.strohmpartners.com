import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Company Brain Pilot",
    badge: "Best first step",
    price: "$1,000-$2,500",
    timeline: "About 2-3 weeks",
    description:
      "One high-friction workflow or role. The right place to start if you want a small, clear first win.",
    features: [
      "Process interview and knowledge capture",
      "Top repeated questions turned into answers",
      "Focused Company Brain Q&A launch",
      "Team walkthrough and simple training",
      "14 days of post-launch support",
    ],
    featured: true,
  },
  {
    name: "Company Brain Starter Build",
    badge: "Broader first system",
    price: "$2,500-$4,500",
    timeline: "About 3-5 weeks",
    description:
      "One department or core operating area. More coverage when you are ready for a wider first build.",
    features: [
      "Everything in the Pilot",
      "Broader playbook capture",
      "Daily-use Company Brain setup",
      "Lightweight SOP guidance in the Brain",
      "30 days of support",
    ],
    featured: false,
  },
  {
    name: "Brain Care Lite",
    badge: "After it works",
    price: "$200-$600 / mo",
    timeline: "Monthly",
    description:
      "Keep the Brain current once it is live and useful. Updates, improvements, and light ongoing support.",
    features: [
      "Knowledge updates as processes change",
      "Answer quality improvements",
      "Light usage check-ins",
      "Small expansions over time",
      "Optional monthly summary",
    ],
    featured: false,
  },
];

export function PackagesSection() {
  return (
    <Section id="packages">
      <Container>
        <SectionHeading
          eyebrow="Packages"
          title="Start with a Pilot. Expand only after it is useful."
          description="These ranges are guidance, not a quote. Final scope depends on the workflow, team size, and how messy the starting knowledge is."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={cn(
                "flex h-full flex-col rounded-[var(--radius-xl)] border p-6 sm:p-7",
                pkg.featured
                  ? "border-[var(--border-strong)] bg-[var(--surface-raised)] shadow-[var(--shadow-card)]"
                  : "border-[var(--border)] bg-[var(--surface)]",
              )}
            >
              <p
                className={cn(
                  "font-[family-name:var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.14em]",
                  pkg.featured ? "text-[var(--accent)]" : "text-[var(--ink-muted)]",
                )}
              >
                {pkg.badge}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--ink)]">
                {pkg.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                {pkg.description}
              </p>
              <p className="mt-6 text-2xl font-bold text-[var(--accent-hover)]">
                {pkg.price}
              </p>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">
                {pkg.timeline}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-relaxed text-[var(--ink-muted)]"
                  >
                    <span
                      className={cn(
                        "mt-1 h-2 w-2 shrink-0 rounded-full",
                        pkg.featured ? "bg-[var(--accent)]" : "bg-[var(--cyan)]",
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href={siteConfig.calendarUrl}
                  size="lg"
                  className="w-full"
                  variant={pkg.featured ? "primary" : "secondary"}
                >
                  {pkg.featured ? "Apply for a Pilot" : "Talk through fit"}
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[var(--ink-muted)]">
          Once a starter works, it can grow into a fuller Company Brain across more
          workflows. We lead with a useful first win, not a giant enterprise package.
        </p>
      </Container>
    </Section>
  );
}
