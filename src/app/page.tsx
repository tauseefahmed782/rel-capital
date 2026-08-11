import { Header } from "@/components/Header";
import { HomeIntro } from "@/components/home/HomeIntro";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HomeIntro />
    </main>
  );
}
