import { Header } from "@/components/Header";
import { WorkIntro } from "@/components/howwework/HeroSection";
import Mechanism from "@/components/howwework/Mechanism";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
    <WorkIntro/>
    <Mechanism/>
    </main>
  );
}
