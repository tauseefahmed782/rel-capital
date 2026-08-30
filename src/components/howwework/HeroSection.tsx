import Image from "next/image";
import Link from "next/link";
import contactHero from "@/assets/about-hero.png";

export function WorkIntro() {
  return (
    <section className="relative isolate min-h-[497px] overflow-hidden px-[20px] text-white md:min-h-[430px] lg:h-[539px] lg:py-[100px]">
      <Image
        src={contactHero}
        alt="Bridge and city skyline at sunset"
        fill
        priority
        className="-z-20 object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="mx-auto flex min-h-[497px] w-full max-w-[1120px] items-start pb-[66px] pt-[90px] md:min-h-[430px] md:items-center md:py-[70px] lg:h-full lg:min-h-0 lg:py-0">
        <div className="w-full min-w-0 max-w-[660px] overflow-hidden">
          <p className="h-[36px] text-[30px] font-semibold leading-none tracking-normal sm:h-auto sm:text-[42px] sm:leading-normal lg:text-[50px]">
            REL CAPITAL
          </p>
          <h1 className="mt-[16px] max-w-[350px] break-words text-[20px] font-medium leading-none text-white sm:mt-6 sm:max-w-[620px] sm:text-[30px] lg:max-w-[660px] lg:text-[36px]">
            How we turn projects into bankable structures.
          </h1>
          <p className="mt-4 max-w-[350px] break-words text-[15px] font-normal leading-[23px] text-white/90 sm:mt-6 sm:max-w-[560px] sm:text-[17px] sm:leading-7 lg:max-w-[600px] lg:text-[18px]">
            ECA-backed financing is one of the most powerful tools in global
            infrastructure — and one of the least understood. Here's how REL
            Capital puts it to work for you.
          </p>

          <div className="mt-[26px] flex flex-col items-start gap-4 sm:mt-6 sm:flex-row sm:gap-4 sm:pt-2">
            <Link
              href="/contact"
              className="w-full rounded-[40px] bg-[#e8611a] p-4 text-center text-[14px] font-medium leading-none sm:w-auto sm:px-6 sm:text-[15px] lg:px-[30px] lg:text-[16px]"
            >
              Start a Conversation
            </Link>
            <Link
              href="/how-we-work"
              className="w-full rounded-[40px] border-[1.5px] border-white p-4 text-center text-[14px] font-medium leading-none sm:w-auto sm:px-6 sm:text-[15px] lg:px-7 lg:text-[16px]"
            >
              See How We Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
