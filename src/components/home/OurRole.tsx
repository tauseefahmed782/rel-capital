import Image from "next/image";

// Figma images
import borrowerImg from "@/assets/borrowers.png";
import guarantorImg from "@/assets/guarantors.png";
import investorImg from "@/assets/investors.png";

// Figma icons
import presenceIcon from "@/assets/icon-presence.svg";
import borrowerIcon from "@/assets/icon-borrowers.svg";
import guarantorIcon from "@/assets/icon-guarantor.svg";
import investorIcon from "@/assets/icon-investor.svg";


const roleItems = [
  {
    id: "borrowers",
    title: "For Borrowers",
    image: borrowerImg,
    icon: borrowerIcon,
    description:
      "We facilitate ECA and other backed FDI borrowings with optimized repayment structures — giving governments and developers long-tenor, competitively priced capital from a broad base of international funding sources.",
  },
  {
    id: "guarantors",
    title: "For Guarantors",
    image: guarantorImg,
    icon: guarantorIcon,
    description:
      "We structure secure, high-return participation in projects with genuine social impact — engineering risk allocation so exposure is defined, collateralized, and aligned with sovereign-grade ECA cover.",
  },
  {
    id: "investors",
    title: "For Investors",
    image: investorImg,
    icon: investorIcon,
    description:
      "We create opportunities to fund large-scale infrastructure with minimized risk — placing capital behind assets with long operating lives, predictable cash flows, and layered protection.",
  },
];

const OurRole = () => {
  return (
    <section className="bg-[#F7F6F3]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1120px]
          px-[20px]
          py-[56px]
          md:py-[70px]
          lg:py-[100px]
        "
      >
        {/* ================= HEADER ================= */}
        <div className="w-full">
          {/* Label */}
          <div
            className="
              mb-[10px]
              flex
              items-center
              gap-[6px]
            "
          >
                     <p className="flex items-center justify-center gap-2 text-sm font-medium text-[#e8611a]"><Image src={presenceIcon} alt="" className="" width={20} height={20} /> Our Presence</p>

          </div>

          {/* Heading */}
          <h2
            className="
              max-w-[1100px]
              text-[30px]
              font-medium
              leading-normal
              tracking-[-1.5px]
              text-[#122745]

              sm:text-[42px]

              md:leading-[1.12]

              lg:text-[53px]
            "
          >
            One platform. Three ways to participate.
          </h2>

          {/* Description */}
          <p
            className="
              mt-[12px]
              max-w-[1180px]
              text-[14px]
              font-normal
              leading-[1.45]
              text-[#636363]

              lg:text-[15px]
            "
          >
            Whether you bring a project, a guarantee, or capital, REL Capital
            structures the role that fits — with long-tenor, de-risked,
            ECA-backed finance.
          </p>

          {/* CTA */}
          <a
            href="#"
            className="home-cta mt-[18px]"
          >
            See how we work
          </a>
        </div>

        {/* ================= CARDS ================= */}
        <div
          className="
            mt-[64px]
            grid
            grid-cols-1
            gap-[20px]

            sm:gap-[22px]

            md:grid-cols-2

            lg:grid-cols-3
            lg:gap-[25px]
          "
        >
          {roleItems.map((item) => (
            <div
              key={item.id}
              className="
                overflow-hidden
                rounded-[8px]
                bg-white
              "
            >
              {/* ================= IMAGE ================= */}
              <div
                className="
                  mx-[20px]
                  mt-[20px]
                  overflow-hidden
                  rounded-[8px]
                  sm:mx-[20px]
                  sm:mt-[20px]
                  lg:mx-[22px]
                  lg:mt-[22px]
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                 
                  className="object-cover"
                 
                />
              </div>

              {/* ================= CARD CONTENT ================= */}
              <div
                className="
                  px-[20px]
                  pb-[22px]
                  pt-[24px]

                  lg:px-[22px]
                  lg:pb-[24px]
                  lg:pt-[25px]
                "
              >
                {/* Icon */}
                <div className="mb-[15px]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                    className=""
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mb-[8px]
                    text-[15px]
                    font-medium
                    leading-[18px]
                    text-[#122745]

                    lg:text-[18px]
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-[15px]
                    font-normal
                    leading-[1.45]
                    text-[#636363]

                    lg:text-[15px]
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurRole;
