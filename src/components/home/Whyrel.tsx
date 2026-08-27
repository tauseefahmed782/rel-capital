import Image from "next/image";
import aboutIcon from "@/assets/icon-heritage.svg";
import ecaIcon from "@/assets/eca.svg";
import structuredIcon from "@/assets/finaincial.svg";
import sectorIcon from "@/assets/sector-focused.svg";
import globalIcon from "@/assets/partnership.svg";
import sustainableIcon from "@/assets/growth.svg";
import Link from "next/link";

const whyRelItems = [
  {
    id: "eca",
    title: "ECA-Backed Solutions",
    description:
      "Access to low-risk, cost-effective financing through the world's most trusted export credit agencies.",
    icon: ecaIcon,
  },
  {
    id: "structured",
    title: "Structured Financial Models",
    description:
      "Tailored financing engineered around the needs of both borrowers and guarantors.",
    icon: structuredIcon,
  },
  {
    id: "sector",
    title: "Sector-Focused Expertise",
    description:
      "Dedicated specialists across healthcare, education, water & sanitation, shipping, and renewable energy.",
    icon:sectorIcon,
  },
  {
    id: "global",
    title: "Global Partnerships",
    description:
      "Collaborations with top-tier ECAs and international banks across three continents.",
    icon:globalIcon,
  },
  {
    id: "sustainable",
    title: "Sustainable Growth",
    description:
      "Financing models aligned with long-term development goals, not short-term returns.",
    icon: sustainableIcon,
  },
];

const WhyRelSection = () => {
  return (
    <section className="bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1120px]
          py-[60px]
          px-[20px]
          sm:py-[70px]
       
          md:py-[75px]
          lg:py-[80px]
        "
      >
        {/* ================= INTRO ================= */}
        <div
          className="
            

            md:grid
            md:grid-cols-[1.35fr_0.85fr]
            md:items-start
            md:gap-[50px]

            lg:grid-cols-[1.45fr_0.85fr]
            lg:gap-[60px]

            xl:gap-[70px]
          "
        >
          {/* LEFT */}
          <div>
            {/* Label */}
            <div className="mb-[10px] ">
                                <p className="flex items-center gap-2 text-[14px] text-[#e8611a] sm:text-[15.5px]"><Image src={aboutIcon} alt="" className="" width={20} height={20} /> Why REL Capital</p>

            </div>

            {/* Heading */}
            <h2  className=" mb-[12px]  font-medium leading-[1.15] tracking-[-1.5px] text-[#122745]  text-[30px] font-medium leading-normal sm:text-[42px] lg:text-[53px] md:leading-[1.12]">
              Where global capital meets local delivery.
            </h2>
          </div>

          {/* RIGHT */}
          <div
            className="
              mt-[22px]

              md:mt-[20px]

              lg:mt-[22px]
            "
          >
            <p
              className="
                max-w-[310px]
                text-[14px]
                lg:text-[15px]
                font-normal
                leading-[1.45]
                text-[#636363]
              "
            >
              We combine ECA-backed structuring, disciplined execution, and
              deep sector expertise to make ambitious public projects
              bankable.
            </p>

            {/* CTA */}
                       <Link href="/track-record" className="mt-2 inline-block rounded-full bg-[#e8611a] py-3 text-[14px] font-medium text-white sm:px-[30px] sm:py-3 sm:text-[16px]">Start a conversation</Link>

          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div
          className="
            mx-auto
            mt-[30px]
            grid
            w-full
           
            grid-cols-1
            gap-[20px]

            sm:grid-cols-2

            md:mt-[34px]

            lg:grid-cols-3

            xl:mt-[36px]
          "
        >
          {whyRelItems.map((item) => (
            <div
              key={item.id}
              className={`
                min-h-[118px]
                rounded-[8px]
                bg-[#F8F7F5]
                px-[20px]
                py-[20px]
              `}
            >
              {/* Figma SVG Icon */}
              <div className="mb-[10px]">
                <Image
                  src={item.icon}
                 
                  alt=""
                   width={24}
          height={24}
                  className="h-[32px] w-[32px]"
                />
              </div>

              {/* Title */}
              <h3
                className="
                  mb-[6px]
                  text-[15px]
                  lg:text-[18px]
                  font-medium
                  leading-[18px]
                  text-[#122745]
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  max-w-[290px]
                  lg:text-[15px]
                  text-[14px]
                  font-normal
                  leading-[1.45]
                  text-[#636363]
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRelSection;