import Image from "next/image";
import aboutIcon from "@/assets/icon-heritage.svg";
import healthcare from "@/assets/healthcare.png";
import ecaIcon from "@/assets/eca.svg";
import structuredIcon from "@/assets/finaincial.svg";
import sectorIcon from "@/assets/sector-focused.svg";
import globalIcon from "@/assets/partnership.svg";
import sustainableIcon from "@/assets/growth.svg";
import Link from "next/link";
import healthicon from "@/assets/icon-heart.svg"
const whyRelItems = [
  {
    id: "eca",
    image:healthcare,
    title: "Healthcare",
    description:
      "Multi-specialty hospitals and medical infrastructure — the sector where our Group heritage runs deepest.",
    icon: healthicon,
  },
  {
    id: "structured",
    title: "Education",
    description:
      "Educational and digital-learning infrastructure that expands access and modernizes delivery.",
    icon: structuredIcon,
  },
  {
    id: "sector",
    title: "Water & Sanitation",
    description:
      "Desalination, water treatment, and sanitation — the infrastructure everything else depends on.",
    icon:sectorIcon,
  },
  {
    id: "global",
    title: "Shipping & Ports",
    description:
      "Ports, terminals, shipbuilding, and maritime infrastructure that build the blue economy.",
    icon:globalIcon,
  },
  {
    id: "sustainable",
    title: "Renewable Energy",
    description:
      "Solar and clean-energy projects — the fastest-growing category of ECA support worldwide.",
    icon: sustainableIcon,
  },
  {
    id: "sustainable",
    title: "Infrastructure",
    description:
      "Allied infrastructure — housing, urban and social development — where ECA-backed models apply.",
    icon: sustainableIcon,
  },
];

const FocusArea = () => {
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
                                <p className="flex items-center gap-2 text-[14px] text-[#e8611a] sm:text-[15.5px]"><Image src={aboutIcon} alt="" className="" width={20} height={20} /> Focus Areas</p>

            </div>

            {/* Heading */}
            <h2  className=" mb-[12px]  font-medium leading-[1.15] tracking-[-1.5px] text-[#122745]  text-[30px] font-medium leading-normal sm:text-[42px] lg:text-[53px] md:leading-[1.12]">
            Capital directed where
it changes lives.
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
             REL Capital concentrates its expertise where ECA-backed capital creates the most enduring social and economic value — across five core sectors.
            </p>

            {/* CTA */}
                       <Link href="/track-record" className="mt-2 inline-block rounded-full bg-[#e8611a] py-3 text-[14px] font-medium text-white sm:px-[30px] sm:py-3 sm:text-[16px]">Explore our sectors</Link>

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
             
            >
                            <Image src={item.image} className="rounded-[8px]"  width={360} height={250}/>

              {/* Figma SVG Icon */}
              <div className=" bg-[#F8F7F5]
                px-[20px]
                py-[20px]
                mt-2
                  rounded-[8px]
                ">

                     <div className="mb-[10px]">
                <Image
                  src={item.icon}
                 
                  alt=""
                   width={24}
          height={24}
                  className="h-[24px] w-[24px]"
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
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusArea;