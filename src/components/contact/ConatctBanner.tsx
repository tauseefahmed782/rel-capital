import Image from "next/image";
import Link from "next/link";
import contactHero from "@/assets/about-hero.png";

export function ContactBnner() {
  return (
    <section className="relative  px-[20px] py-[56px] bg-[#122745] text-white">
      <div>
        <p className="text-[20px] text-white font-medium text-center">
            REL Capital — a Rural Enhancers Group company. <span className="text-[#E8611A]">Driven By Purpose.</span>
        </p>
      </div>
    </section>
  );
}
