import { AboutHero } from "@/components/about/AboutHero";
import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutHeritage } from "@/components/about/AboutHeritage";
import { AboutLeadership } from "@/components/about/AboutLeadership";
import { AboutMetrics } from "@/components/about/AboutMetrics";
import { AboutOverview } from "@/components/about/AboutOverview";
import { AboutPresence } from "@/components/about/AboutPresence";
import { AboutVisionMission } from "@/components/about/AboutVisionMission";
import { Header } from "@/components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutMetrics />
      <AboutOverview />
      <AboutHeritage />
      <AboutVisionMission />
      <AboutApproach />
      <AboutLeadership />
      <AboutPresence />
    </main>
  );
}
