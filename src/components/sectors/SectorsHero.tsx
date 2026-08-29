import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/about-hero.png";

export function SectorsHero() {
  return (
    <section className="relative isolate min-h-[497px] overflow-hidden px-[20px] text-white md:min-h-0 md:py-[70px] lg:h-[539px] lg:py-[100px]">
      <Image
        src={heroImage}
        alt="Bridge and city skyline at sunset"
        fill
        priority
        className="-z-20 object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-black/45" />

      <div className="mx-auto flex h-full w-full max-w-[1120px] items-start pb-[66px] pt-[90px] md:items-center md:py-0">
        <div className="w-full min-w-0 max-w-[690px] overflow-hidden">
          <p className="h-[36px] text-[30px] font-semibold leading-none tracking-normal sm:h-auto sm:text-[42px] sm:leading-none lg:text-[50px]">
            REL CAPITAL
          </p>
          <h1 className="mt-[16px] max-w-[360px] break-words text-[20px] font-medium leading-[1.2] text-white sm:mt-6 sm:max-w-[690px] sm:text-[38px] lg:text-[36px]">
            Five sectors. One standard: high impact, built to last.
          </h1>
          <p className="mt-4 max-w-[350px] break-words text-[15px] font-normal leading-[23px] text-white/90 sm:mt-6 sm:max-w-[610px] sm:text-[17px] sm:leading-7 lg:text-[18px]">
            REL Capital concentrates its expertise where ECA-backed capital
            creates the most enduring social and economic value.
          </p>

          <div className="mt-[26px] flex flex-col items-start gap-4 sm:mt-6 sm:flex-row sm:gap-4 sm:pt-2">
            <Link
              href="/contact"
              className="w-full rounded-[40px] bg-[#e8611a] p-4 text-center text-[14px] font-medium leading-none text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-6 sm:text-[15px] lg:px-[30px] lg:text-[16px]"
            >
              Start a Conversation
            </Link>
            <Link
              href="/how-we-work"
              className="w-full rounded-[40px] border-[1.5px] border-white p-4 text-center text-[14px] font-medium leading-none text-white transition-colors hover:bg-white hover:text-[#122745] sm:w-auto sm:px-6 sm:text-[15px] lg:px-7 lg:text-[16px]"
            >
              See How We Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
