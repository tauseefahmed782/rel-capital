import Image from "next/image";
import Link from "next/link";
import aboutHero from "@/assets/hero-home.png";

export function HomeHero() {
  const marqueeItems = [
    "ECA-Backed",
    "Global Network",
    "Structured Finance",
    "Purpose-Driven Capital",
  ];

  return (
    <section className="relative isolate overflow-hidden px-[20px] pb-[20px] pt-[56px] text-white md:pb-[70px] md:pt-[70px] lg:pb-[100px] lg:pt-[100px]">
      <Image src={aboutHero} alt="Bridge and city skyline at sunset" fill priority className="-z-20 object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <div className="mx-auto flex w-full max-w-[1120px] items-center">
        <div className="w-full min-w-0 max-w-[660px] overflow-hidden">
          <p className="text-[30px] font-semibold leading-normal sm:text-[42px] lg:text-[50px]">REL CAPITAL</p>
          <h1 className="mt-4  break-words text-[20px] font-medium leading-normal text-white sm:mt-6  sm:text-[30px] lg:max-w-[660px] lg:text-[36px]">Structured Finance That Builds Nations.</h1>
          <p className="mt-4 break-words text-[15px] leading-6 text-white/90 sm:mt-6 sm:max-w-[560px] sm:text-[17px] sm:leading-7 lg:max-w-[600px] lg:text-[18px]">We connect high-impact infrastructure and healthcare projects to trusted Export Credit Agencies, guarantors, and global banks — turning ambitious public projects into bankable, deliverable reality.</p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:gap-4 sm:pt-2">
            <Link href="/contact" className="home-cta w-full sm:w-auto">Start a Conversation</Link>
            <Link href="/how-we-work" className="home-cta home-cta--outline w-full sm:w-auto">See How We Work</Link>
          </div>
        </div>
      </div>

      <div
        className="hero-marquee mt-[96px]"
        aria-label={marqueeItems.join(", ")}
      >
        <div className="hero-marquee__track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="hero-marquee__group"
              aria-hidden={copy === 1}
            >
              {marqueeItems.map((item) => (
                <div className="hero-marquee__item" key={item}>
                  <span>{item}</span>
                  <span className="hero-marquee__dot" aria-hidden="true" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
