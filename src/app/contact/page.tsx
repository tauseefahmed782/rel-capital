import { Header } from "@/components/Header";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { ContactEnquiry } from "@/components/contact/ContactEnquiry";
import { ContactFaq } from "@/components/contact/ContactFaq";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ContactIntro />
      <ContactEnquiry />
      <ContactFaq />
    </main>
  );
}
