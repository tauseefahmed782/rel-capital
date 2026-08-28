import Image from "next/image";
import Link from "next/link";
import mechanismIcon from "@/assets/icon-heritage.svg";

const steps = [
  {
    title: "Project & Sponsor",
    description:
      "A government body or developer defines a high-impact project.",
  },
  {
    title: "Structuring",
    description:
      "REL Capital designs the financial framework and identifies the ECA, lending banks, or other FDI funding sources.",
  },
  {
    title: "ECA / FDI Cover",
    description:
      "An export credit agency or other qualifying funding partner guarantees or insures the loan, absorbing political and commercial risk.",
  },
  {
    title: "Disbursement",
    description:
      "International banks and funding partners lend against that cover, with long tenors and grace periods during construction.",
  },
  {
    title: "Delivery & Repayment",
    description:
      "The project is built and operated; the borrower repays over an extended, affordable schedule.",
  },
] as const;

export default function HowEcaWorks() {
  return (
    <section className="bg-white px-[20px]">
      <div className="mx-auto w-full max-w-[1120px] py-[56px] md:py-[70px] lg:py-[100px]">
        <div className="md:grid md:grid-cols-[1.45fr_.85fr] md:items-start md:gap-[60px]">
          <div>
            
            <p className="flex items-center gap-2 text-[14px] text-[#e8611a] sm:text-[15.5px]">
              <Image
                src={mechanismIcon}
                alt=""
                width={20}
                height={20}
                className=""
              />
              The Mechanism
            </p>

            <h2 className="mt-[10px] max-w-[720px] text-[30px] font-medium leading-normal tracking-[-1.5px] text-[#122745] sm:text-[42px] md:leading-[1.12] lg:text-[53px]">
              How ECA-backed financing works.
            </h2>
          </div>

          <div className="mt-[22px] md:mt-[28px]">
            <p className="max-w-[340px] text-[14px] font-normal leading-[1.45] text-[#636363] lg:text-[15px]">
              Sovereign-grade cover turns stalled public projects into bankable
              ones — here is the five-step path from concept to repayment.
            </p>

            <Link
              href="/solutions"
              className="home-cta mt-5"
            >
              Understand our solutions
            </Link>
          </div>
        </div>

        <div className="relative mt-[50px] grid grid-cols-1 gap-[38px] md:grid-cols-2 md:gap-x-[48px] md:gap-y-[42px] lg:mt-[64px] lg:grid-cols-5 lg:gap-0">
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-[23px] hidden h-[2px] bg-[#e8611a] lg:block"
          />

          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative grid grid-cols-[50px_1fr] items-start gap-[14px] lg:block lg:px-[10px] lg:text-center"
            >
              <span className="relative z-10 grid h-[50px] w-[50px] place-items-center rounded-full bg-[#122745] text-[18px] font-medium text-white lg:mx-auto">
                {index + 1}
              </span>

              <div>
                <h3 className="text-[14px] font-semibold leading-[18px] text-[#122745] lg:mt-[16px] lg:text-[16px]">
                  {step.title}
                </h3>
                <p className="mt-[8px] max-w-[300px] text-[13px] font-normal leading-[1.45] text-[#636363] lg:mx-auto lg:mt-[14px] lg:text-[13px]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-[48px] max-w-[940px] text-[14px] font-normal leading-[1.4] text-[#122745] md:mt-[58px] md:text-[20px] lg:text-[16px]">
          The result: capital that commercial markets alone rarely provide —
          longer, cheaper, and de-risked.
        </p>
      </div>
    </section>
  );
}
