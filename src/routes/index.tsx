import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Pain } from "@/components/landing/Pain";
import { Phases } from "@/components/landing/Phases";
import { Transformation } from "@/components/landing/Transformation";
import { WhoFor } from "@/components/landing/WhoFor";
import { MarketDemand } from "@/components/landing/MarketDemand";
import { Bonuses } from "@/components/landing/Bonuses";
import { Pricing } from "@/components/landing/Pricing";
import { Guarantee } from "@/components/landing/Guarantee";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import ResultsProof from "@/components/landing/ResultsProof";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main id="program">
        <Hero />
        <Pain />
        <Phases />
        <Transformation />
        <WhoFor />
        <MarketDemand />
        <Bonuses />
        <Pricing />
        <Transformation />
<ResultsProof />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
