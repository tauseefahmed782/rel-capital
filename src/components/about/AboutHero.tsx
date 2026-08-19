import Image from "next/image";
import Link from "next/link";
import aboutHero from "@/assets/about-hero.png";

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-14 text-white sm:h-[539px] sm:px-0 sm:py-0">
      <Image src={aboutHero} alt="Bridge and city skyline at sunset" fill priority className="-z-20 object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <div className="mx-auto flex h-full max-w-[1120px] items-center">
        <div className="w-full sm:w-[660px]">
          <p className="text-[30px] font-semibold leading-normal sm:text-[50px]">REL CAPITAL</p>
          <h1 className="mt-4 max-w-[350px] text-[20px] font-medium leading-normal text-white sm:mt-6 sm:max-w-[660px] sm:text-[36px]">The financial engine of purpose-driven infrastructure.</h1>
          <p className="mt-4 max-w-[350px] text-[15px] leading-6 text-white/90 sm:mt-6 sm:max-w-[600px] sm:text-[18px] sm:leading-7">REL Capital exists to solve the hardest problem in public infrastructure: how to fund it credibly, affordably, and at scale.</p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:gap-4 sm:pt-2">
            <Link href="/contact" className="rounded-full bg-[#e8611a] p-4 text-[14px] font-medium sm:px-[30px] sm:py-4 sm:text-[16px]">Start a Conversation</Link>
            <Link href="/how-we-work" className="rounded-full border-[1.5px] border-white p-4 text-[14px] font-medium sm:px-7 sm:py-4 sm:text-[16px]">See How We Work</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
