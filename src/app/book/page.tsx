import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Book a Fit Call | ${siteConfig.brand}`,
  description:
    "Book a Company Brain Fit Call. Pick a time that works and we will talk through whether a Pilot is the right first step.",
};

export default function BookPage() {
  return (
    <>
      <div className="ambient" aria-hidden>
        <div className="ambient-grid" />
        <div className="ambient-glow ambient-glow--gold" />
        <div className="ambient-glow ambient-glow--cyan" />
      </div>
      <div className="page-shell">
        <Navbar />
        <main>
          <section className="border-b border-[var(--border)] py-12 sm:py-16">
            <Container className="max-w-4xl">
              <p className="eyebrow">Company Brain Fit Call</p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
                Book a Fit Call
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
                Pick a time below. On the call, we will map the repeated questions,
                talk through fit, and decide whether a Pilot is the right first step.
              </p>
            </Container>
          </section>

          <section className="py-10 sm:py-14">
            <Container className="max-w-4xl">
              <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-white shadow-[var(--shadow-card)]">
                <iframe
                  src={siteConfig.calendarEmbedUrl}
                  title="Book a Company Brain Fit Call"
                  className="block w-full border-0 bg-white"
                  style={{ minHeight: 700, backgroundColor: "#ffffff" }}
                  height={700}
                />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[var(--ink-muted)]">
                Prefer email first? Reach us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[var(--accent-hover)] underline-offset-3 hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
