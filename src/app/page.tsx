import { Header } from "@/components/Header";
import { HomeHero } from "@/components/home/HomeIntro";
import { HomeClients } from "@/components/home/HomeClients";
import AboutSection from "@/components/home/AboutRel";
import { HomeMatrix } from "@/components/home/HomeMatrix";
import WhyRelSection from "@/components/home/Whyrel";
import OurRole from "@/components/home/OurRole";
import FocusArea from "@/components/home/Focus";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HomeHero />
      <HomeClients />
      <AboutSection/>
      <HomeMatrix/>
      <WhyRelSection/>
      <OurRole/>
      <FocusArea/>
    </main>
  );
}
