import Image from "next/image";
import whyItWorksIcon from "@/assets/icon-heritage.svg";

const advantages = [
  {
    title: "Longer tenors",
    description:
      "Repayment periods extended well beyond commercial norms. Under the OECD Arrangement modernisation (agreed March 2023, in force July 2023), maximum repayment terms rose to 22 years for climate/green projects and 15 years for most other projects.",
  },
  {
    title: "Lower cost of capital",
    description:
      "Sovereign-grade cover reduces lender risk, and therefore price.",
  },
  {
    title: "De-risked delivery",
    description:
      "Political and commercial risk absorbed by the ECA, guarantors, or other backing FDI partners.",
  },
  {
    title: "Grace during construction",
    description:
      "Repayment typically begins after the asset is built and operating, not before.",
  },
];

const WhyItWorks = () => {
  return (
    <section className="bg-[#F8F7F5] px-[20px]">
      <div className="mx-auto w-full max-w-[1120px] py-[56px] md:py-[72px] lg:py-[100px]">
        <p className="flex items-center gap-2 text-[14px] font-normal leading-none text-[#e8611a] sm:text-[15.5px]">
          <Image
            src={whyItWorksIcon}
            alt=""
            width={20}
            height={20}
            className="h-[16px] w-[16px] opacity-65"
          />
          Why It Works
        </p>

        <h2 className="mt-[20px] max-w-[820px] text-[30px] font-medium leading-[1.12] tracking-[-1px] text-[#122745] sm:text-[42px] sm:leading-[1.08] sm:tracking-[-1.5px]  lg:text-[54px]">
          Why ECA-backed financing.
        </h2>

        <p className="mt-[16px] max-w-[720px] text-[14px] font-normal leading-[1.62] text-[#636363] sm:mt-[20px] sm:text-[17px] sm:leading-[1.55]">
          Four structural advantages commercial markets alone rarely provide.
        </p>

        <div className="mt-[28px] grid grid-cols-1 gap-[16px] sm:mt-[54px] sm:grid-cols-2 sm:gap-[20px] lg:grid-cols-4">
          {advantages.map((advantage) => (
            <article
              key={advantage.title}
              className="rounded-[8px] border border-[#E6E2DC] bg-white px-[16px] py-[22px] sm:min-h-[290px] sm:px-[28px] sm:py-[28px] lg:min-h-[312px]"
            >
              <h3 className="text-[15px] font-semibold leading-[1.25] text-[#122745] sm:text-[18px] sm:leading-[1.28]">
                {advantage.title}
              </h3>
              <p className="mt-[10px] text-[13px] font-normal leading-[1.5] text-[#636363] sm:mt-[12px] sm:text-[15px] sm:leading-[1.48]">
                {advantage.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
