import Image from "next/image";
import Link from "next/link";
import roleIcon from "@/assets/icon-heritage.svg";
import arrowIcon from "@/assets/icon-arrow.svg";

const borrowerBenefits = [
  "ECA and other backed FDI borrowing facilitation",
  "Optimized, long-tenor repayment schedules",
  "End-to-end structuring and compliance",
  "Access to a wider base of international funding sources",
  "Faster route to financial close and project delivery",
];

const BorrowersRole = () => {
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
            
            />
            Our Role &mdash; For Borrowers
          </p>

          <h2 className="mt-[20px] max-w-[560px] text-[24px] font-medium leading-[1.18] tracking-[-0.7px] text-[#122745] sm:text-[34px] sm:leading-[1.12] sm:tracking-[-1.5px] lg:text-[38px]">
            Capital that fits the project, not the other way around.
          </h2>

          <p className="mt-[18px] max-w-[570px] text-[14px] font-normal leading-[1.55] text-[#636363] sm:mt-[20px] sm:text-[16px] sm:leading-[1.62]">
            For governments, municipal bodies, and developers, REL Capital
            facilitates ECA and other backed FDI borrowings with optimized
            repayment structures. We identify the right export credit agency,
            lending banks, or other qualifying international funding partner,
            structure the guarantees, manage regulatory compliance, and
            shepherd the transaction to financial close &mdash; so you access
            long-tenor, competitively priced capital drawn from a broader base
            of global funding sources, without the in-house complexity of
            assembling it yourself.
          </p>

          <Link
            href="/contact"
            className="mt-[20px] inline-flex items-center text-[14px] font-medium leading-none text-[#e8611a] transition-opacity hover:opacity-80 sm:text-[16px]"
          >
            Discuss a borrower mandate
            <Image src={arrowIcon} alt="" width={12} height={10} className="ml-2" />
          </Link>
        </div>

        <aside className="rounded-[8px] bg-[#122745] px-[18px] py-[22px] text-white sm:px-[36px] sm:py-[32px] lg:px-[32px]">
          <h3 className="text-[12px] font-semibold uppercase leading-none tracking-[2.6px] text-white/85">
            What you get
          </h3>

          <ul className="mt-[18px] space-y-[16px] sm:mt-[16px]">
            {borrowerBenefits.map((benefit) => (
              <li
                key={benefit}
                className="grid grid-cols-[8px_1fr] gap-[13px] text-[13px] font-normal leading-[1.45] text-white/92 sm:text-[14px]"
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

export default BorrowersRole;
