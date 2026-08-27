import Image from "next/image";
import linevector from "@/assets/linevector.png";
import aboutrel from "@/assets/hero-about-img.png";
import aboutIcon from "@/assets/icon-about.svg";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Top-right decorative vector */}
      <div className="pointer-events-none absolute right-0 top-0 hidden md:block">
        <Image
          src={linevector}
          alt=""
          width={170}
          height={110}
          className="
            h-auto
            w-[115px]
            lg:w-[120px]
            xl:w-[150px]
            2xl:w-[170px]
          "
        />
      </div>

      {/* Bottom-left hand + graph image */}
      <div className="pointer-events-none absolute bottom-0 left-0 hidden md:block">
        <Image
          src={aboutrel}
          alt=""
          width={205}
          height={205}
          className="
            h-auto
            w-[150px]
            lg:w-[200px]
            xl:w-[200px]
            2xl:w-[275px]
          "
        />
      </div>

      {/* Main Content */}
      <div
        className="
          relative z-10
          mx-auto flex

          items-center
          justify-center
          px-6
          py-16
          md:px-10
        "
      >
        <div className="w-full  text-center">
          {/* Small top label */}
          <div className="mb-[14px] flex items-center justify-center gap-[5px]">
                   <p className="flex items-center gap-2 text-[14px] text-[#e8611a] sm:text-[15.5px]"><Image src={aboutIcon} alt="" className="" width={20} height={20} /> About REL Capital</p>

          </div>

          {/* Heading */}
          <h2
            className=" mb-[12px]  font-medium leading-[1.15] tracking-[-1.5px] text-[#122745]  text-[30px] font-medium leading-normal sm:text-[42px] lg:text-[53px] md:leading-[1.12] "
          >
            We make complex projects bankable.
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              max-w-[760px]
              text-[14px]
              font-normal
              leading-[1.5]
              text-[#636363]
              lg:text-[15px]
              md:leading-[1.48]
            "
          >
            REL Capital is the specialized financial wing of the Rural
            Enhancers Group, dedicated to enabling structured financing
            solutions backed by trusted Export Credit Agencies (ECAs). We
            connect borrowers with third-party guarantors and global financial
            partners to fund high-impact infrastructure and healthcare
            projects. Through customized financial frameworks, we reduce risk,
            ensure regulatory compliance, and accelerate project delivery —
            leveraging a global network and deep sector expertise.
          </p>

          {/* CTA */}
          <a
            href="#"
            className="
              mt-[9px]
              inline-flex
              items-center
              text-[14px]
              font-medium
              leading-[22px]
              lg:text-[15px]
              text-[#E8611A]
              transition-opacity
              hover:opacity-70
            "
          >
            More about our heritage
            <span className="ml-[5px] text-[18px]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;