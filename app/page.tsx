import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import OpportunityGap from "../components/OpportunityGap";
import HowItWorks from "../components/HowItWorks";
import WhatWeBuild from "../components/WhatWeBuild";
import WhoItsFor from "../components/WhoItsFor";
import FAQ from "../components/FAQ";
import ClosingSection from "../components/ClosingSection";
import Dialogs from "../components/Dialogs";
export default function Home() {
  return (
    <div id="top">
      <Navigation />
      <main>
        <Hero />
        <OpportunityGap />
        <HowItWorks />
        <WhatWeBuild />
        <WhoItsFor />
        <FAQ />
        <ClosingSection />
      </main>
      <Dialogs />
    </div>
  );
}
