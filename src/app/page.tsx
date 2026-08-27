import { Header } from "@/components/Header";
import { HomeHero } from "@/components/home/HomeIntro";
import { HomeClients } from "@/components/home/HomeClients";
import AboutSection from "@/components/home/AboutRel";
import { HomeMatrix } from "@/components/home/HomeMatrix";
import WhyRelSection from "@/components/home/Whyrel";
import OurRole from "@/components/home/OurRole";
import FocusArea from "@/components/home/Focus";
import HowEcaWorks from "@/components/home/HowEcaWorks";
import ProvenDelivery from "@/components/home/ProvenDelivery";
import HomeGroup from "@/components/home/HomeGroup";
import HomeFaq from "@/components/home/HomeFaq";

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
      <HowEcaWorks/>
      <ProvenDelivery/>
      <HomeGroup/>
      <HomeFaq/>
    </main>
  );
}
