import Link from "next/link";
import Image from "next/image";
import mechanismIcon from "@/assets/icon-heritage.svg";
import arrowIcon from "@/assets/icon-arrow.svg";

const mechanismSteps = [
  {
    eyebrow: "01",
    title: "Project & Sponsor",
    description:
      "A government body or developer defines a high-impact project.",
  },
  {
    eyebrow: "02",
    title: "Structuring",
    description:
      "REL Capital designs the financial framework and identifies the ECA, lending banks, or other FDI funding sources.",
  },
  {
    eyebrow: "03",
    title: "ECA / FDI Cover",
    description:
      "An export credit agency or other qualifying funding partner guarantees or insures the loan, absorbing political and commercial risk.",
  },
  {
    eyebrow: "04",
    title: "Disbursement",
    description:
      "International banks and funding partners lend against that cover, with long tenors and grace periods during construction.",
  },
  {
    eyebrow: "05",
    title: "Delivery & Repayment",
    description:
      "The project is built and operated; the borrower repays over an extended, affordable schedule.",
  },
  {
    eyebrow: "arrow",
    title: "The result",
    description:
      "Capital that commercial markets alone rarely provide - longer, cheaper, and de-risked.",
  },
];

const Mechanism = () => {
  return (
    <section className="bg-white px-[20px]">
      <div className="mx-auto w-full max-w-[1120px] py-[56px] md:py-[72px] lg:py-[100px]">
        <div className="grid gap-0 md:grid-cols-[1.2fr_0.8fr] md:gap-[40px] lg:grid-cols-[1.35fr_0.65fr] lg:gap-[120px]">
          <div>
            <p className="flex items-center gap-2 text-[14px] font-normal leading-none text-[#e8611a] sm:text-[15.5px]">
              <Image
                src={mechanismIcon}
                alt=""
                width={20}
                height={20}
                className=""
              />
              The Mechanism
            </p>

            <h2 className="mt-[8px] max-w-[650px] text-[30px] font-medium leading-[1.12] tracking-[-1px] text-[#122745] sm:mt-[10px] sm:text-[44px] sm:leading-[1.08] sm:tracking-[-1.5px] lg:text-[54px]">
              The mechanism, step by step.
            </h2>
          </div>

          <div className="md:pt-[4px]">
            <p className="mt-[20px] max-w-[360px] text-[14px] font-normal leading-[1.5] text-[#636363] sm:text-[16px] sm:leading-[1.55] md:mt-0 md:max-w-[280px] lg:max-w-none">
              The five stages that take a project from sponsor to bankable,
              delivered reality.
            </p>

            <Link
              href="/track-record"
              className="home-cta mt-[16px] !rounded-[30px] !px-[16px] !py-[10px] !text-[14px] !font-medium !leading-none sm:mt-[20px] sm:!px-[30px] sm:!py-[12px] sm:!text-[16px]"
            >
              Understand our solutions
              <Image src={arrowIcon} alt="" width={12} height={10} className="ml-2 brightness-0 invert" />
            </Link>
          </div>
        </div>

        <div className="mt-[26px] grid grid-cols-1 gap-[16px] sm:mt-[52px] sm:grid-cols-2 sm:gap-[20px] lg:grid-cols-3">
          {mechanismSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-[8px] bg-[#F8F7F5] px-[20px] py-[22px] sm:min-h-[190px] md:min-h-[174px] lg:px-[20px] lg:py-[24px]"
            >
              <p className="text-[16.5px] font-semibold leading-none text-[#e8611a] sm:text-[22px]">
                {step.eyebrow === "arrow" ? (
                  <Image src={arrowIcon} alt="" width={12} height={10} />
                ) : (
                  step.eyebrow
                )}
              </p>
              <h3 className="mt-[10px] text-[15px] font-medium leading-none text-[#122745] sm:mt-[12px] sm:text-[18px] sm:leading-[1.25]">
                {step.title}
              </h3>
              <p className="mt-[10px] max-w-[315px] text-[14px] font-normal leading-[1.5] text-[#636363] sm:text-[15px] sm:leading-[1.55]">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <aside className="mt-[26px] rounded-[16px] border border-[#DED9D1] bg-[#F8F7F5]/45 px-[20px] py-[22px] sm:mt-[48px] sm:px-[36px] sm:py-[28px] lg:px-[36px]">
          <h3 className="text-[12.5px] font-semibold uppercase leading-none tracking-[1.5px] text-[#e8611a] sm:text-[12px] sm:tracking-[2.2px]">
            What is an ECA?
          </h3>
          <p className="mt-[10px] text-[14px] font-normal leading-[1.6] text-[#3f4956] sm:mt-[16px] sm:text-[16px] sm:leading-[1.65]">
            An Export Credit Agency is a government-backed institution that
            guarantees or insures loans to support cross-border trade and
            investment. Because a sovereign-grade institution (or, where
            applicable, another qualifying FDI funding partner) absorbs the
            risk, banks lend on longer tenors and finer terms than commercial
            markets alone would offer - often the difference between a project
            that stalls and one that gets built.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Mechanism;
