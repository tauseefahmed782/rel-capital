import Image from "next/image";
import Link from "next/link";
import roleIcon from "@/assets/icon-heritage.svg";

const investorBenefits = [
  "Access to a vetted pipeline of bankable projects",
  "Risk minimized through ECA cover and guarantor layers",
  "Exposure to healthcare, ports, water, and clean energy",
  "Returns aligned with long-term development",
];

const InvestorsRole = () => {
  return (
    <section className="bg-white px-[20px]">
      <div className="mx-auto grid w-full max-w-[1120px] gap-[28px] py-[56px] md:grid-cols-[1.06fr_0.94fr] md:items-center md:gap-[40px] md:py-[72px] lg:gap-[92px] lg:py-[100px]">
        <div>
          <p className="flex items-center gap-2 text-[14px] font-normal text-[#e8611a] sm:text-[15.5px]">
            <Image
              src={roleIcon}
              alt=""
              width={20}
              height={20}
              className="h-[16px] w-[16px] opacity-65"
            />
            Our Role &mdash; For Investors
          </p>

          <h2 className="mt-[20px] max-w-[560px] text-[24px] font-medium leading-[1.18] tracking-[-0.7px] text-[#122745] sm:text-[34px] sm:leading-[1.12] sm:tracking-[-1.5px] lg:text-[38px]">
            Large-scale infrastructure, minimized risk.
          </h2>

          <p className="mt-[18px] max-w-[570px] text-[14px] font-normal leading-[1.55] text-[#636363] sm:mt-[20px] sm:text-[16px] sm:leading-[1.62]">
            For investors, REL Capital creates opportunities to fund
            large-scale infrastructure with minimized risk. Our ECA-backed
            structures place your capital behind assets with long operating
            lives, predictable cash flows, and layered risk protection &mdash;
            the profile institutional capital seeks but rarely finds in
            emerging-market infrastructure.
          </p>

          <Link
            href="/contact"
            className="mt-[20px] inline-flex items-center text-[14px] font-medium leading-none text-[#e8611a] transition-opacity hover:opacity-80 sm:text-[16px]"
          >
            Request the investor brief&nbsp;&rarr;
          </Link>
        </div>

        <aside className="rounded-[8px] bg-[#122745] px-[18px] py-[22px] text-white sm:px-[36px] sm:py-[32px] lg:px-[32px]">
          <h3 className="text-[12px] font-semibold uppercase leading-none tracking-[2.6px] text-white/85">
            What you get
          </h3>

          <ul className="mt-[18px] space-y-[16px] sm:mt-[16px]">
            {investorBenefits.map((benefit) => (
              <li
                key={benefit}
                className="grid grid-cols-[8px_1fr] gap-[13px] text-[13px] sm:text-[14px] font-normal leading-[1.45] text-white/92"
              >
                <span
                  aria-hidden="true"
                  className="mt-[8px] h-[5px] w-[5px] rounded-full bg-[#e8611a]"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default InvestorsRole;
