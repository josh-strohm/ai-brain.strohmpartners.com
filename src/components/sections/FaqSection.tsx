import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Section, SectionHeading } from "@/components/Section";

export function FaqSection() {
  return (
    <Section tone="muted" id="faq">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Straight answers for practical buyers."
            description="If you are new to AI, start here. Most of these questions are normal, and most of them are why the Pilot exists."
          />
          <FaqAccordion />
        </div>
      </Container>
    </Section>
  );
}
