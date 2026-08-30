import { Header } from "@/components/Header";
import CtaBand from "@/components/howwework/CtaBand";
import { WorkIntro } from "@/components/howwework/HeroSection";
import BorrowersRole from "@/components/howwework/BorrowersRole";
import GuarantorsRole from "@/components/howwework/GuarantorsRole";
import InvestorsRole from "@/components/howwework/InvestorsRole";
import Mechanism from "@/components/howwework/Mechanism";
import WhyItWorks from "@/components/howwework/WhyItWorks";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <WorkIntro />
      <Mechanism />
      <WhyItWorks />
      <BorrowersRole />
      <GuarantorsRole />
      <InvestorsRole />
      <CtaBand />
    </main>
  );
}
