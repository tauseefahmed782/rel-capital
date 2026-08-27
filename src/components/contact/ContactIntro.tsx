import Image from "next/image";
import Link from "next/link";
import contactHero from "@/assets/about-hero.png";

export function ContactIntro() {
  return (
    <section className="relative isolate overflow-hidden px-[20px] py-[56px] text-white md:py-[70px] lg:h-[539px] lg:py-[100px]">
      <Image
        src={contactHero}
        alt="Bridge and city skyline at sunset"
        fill
        priority
        className="-z-20 object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="mx-auto flex h-full w-full max-w-[1120px] items-center">
        <div className="w-full min-w-0 max-w-[660px] overflow-hidden">
          <p className="text-[30px] font-semibold leading-normal sm:text-[42px] lg:text-[50px]">
            REL CAPITAL
          </p>
          <h1 className="mt-4 max-w-[330px] break-words text-[20px] font-medium leading-normal text-white sm:mt-6 sm:max-w-[620px] sm:text-[30px] lg:max-w-[660px] lg:text-[36px]">
           Let’s connect.
          </h1>
          <p className="mt-4 max-w-[330px] break-words text-[15px] leading-6 text-white/90 sm:mt-6 sm:max-w-[560px] sm:text-[17px] sm:leading-7 lg:max-w-[600px] lg:text-[18px]">
           Whether you’re bringing a project, capital, or a guarantee, tell us where you fit and we’ll route you to the right team.
          </p>

          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:gap-4 sm:pt-2">
            <Link
              href="/contact"
              className="w-full rounded-full bg-[#e8611a] px-4 py-4 text-center text-[14px] font-medium sm:w-auto sm:px-6 sm:text-[15px] lg:px-[30px] lg:text-[16px]"
            >
              Start a Conversation
            </Link>
            <Link
              href="/how-we-work"
              className="w-full rounded-full border-[1.5px] border-white px-4 py-4 text-center text-[14px] font-medium sm:w-auto sm:px-6 sm:text-[15px] lg:px-7 lg:text-[16px]"
            >
              See How We Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
