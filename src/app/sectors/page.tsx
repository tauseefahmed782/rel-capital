import { Header } from "@/components/Header";
import { SectorsCta } from "@/components/sectors/SectorsCta";
import { SectorsHero } from "@/components/sectors/SectorsHero";
import { SectorsList } from "@/components/sectors/SectorsList";

export default function SectorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SectorsHero />
      <SectorsList />
      <SectorsCta />
    </main>
  );
}
