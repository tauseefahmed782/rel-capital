import Image from "next/image";
import Link from "next/link";
import aboutHero from "@/assets/about-hero.png";

export function AboutHero() {
  return (
    <section className="relative isolate min-h-[690px] overflow-hidden text-white lg:min-h-[790px]">
      <Image src={aboutHero} alt="Bridge and city skyline at sunset" fill priority className="-z-20 object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,15,25,0.78)_0%,rgba(6,15,25,0.62)_38%,rgba(29,16,8,0.22)_100%)]" />
      <div className="mx-auto flex min-h-[690px] max-w-[1460px] items-center px-6 py-20 lg:min-h-[790px] lg:px-12">
        <div className="max-w-4xl">
          <p className="text-xl font-bold tracking-wide sm:text-2xl">REL CAPITAL</p>
          <h1 className="mt-6 max-w-3xl text-[54px] font-medium leading-[1.1] tracking-tight text-[#fff]">The financial engine of purpose-driven infrastructure.</h1>
          <p className="mt-6 max-w-3xl text-[16px] font-normal leading-8 text-[#FFFFFFE5]">REL Capital exists to solve the hardest problem in public infrastructure: how to fund it credibly, affordably, and at scale.</p>
          <div className="mt-6 flex flex-wrap gap-5">
            <Link href="/contact" className="rounded-full bg-[#f56619] px-8 py-4 text-md font-medium transition-colors hover:bg-[#d9510d]">Start a Conversation</Link>
            <Link href="/how-we-work" className="rounded-full border-2 border-white px-8 py-3.5 text-md font-medium transition-colors hover:bg-white hover:text-[#112a4b]">See How We Work</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
