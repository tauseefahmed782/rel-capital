import { Header } from "@/components/Header";
import { ContactIntro } from "@/components/contact/ContactIntro";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ContactIntro />
    </main>
  );
}
