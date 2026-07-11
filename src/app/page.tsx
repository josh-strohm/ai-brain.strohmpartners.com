import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { DeliverablesSection } from "@/components/sections/DeliverablesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { PainSection } from "@/components/sections/PainSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SolutionSection } from "@/components/sections/SolutionSection";

export default function HomePage() {
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
          <HeroSection />
          <PainSection />
          <ProblemSection />
          <SolutionSection />
          <HowItWorksSection />
          <DeliverablesSection />
          <AudienceSection />
          <OutcomesSection />
          <PackagesSection />
          <FaqSection />
          <ProcessSection />
          <FinalCtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
