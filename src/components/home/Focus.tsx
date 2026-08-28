import Image from "next/image";
import focusIcon from "@/assets/icon-focus.svg";
import healthcare from "@/assets/healthcare.png";
import Link from "next/link";
import healthicon from "@/assets/icon-heart.svg"
import eductaion from "@/assets/education.jpg";
import educationicon from "@/assets/icon-education.svg"
import sanitationIcon  from "@/assets/icon-water.svg"
import sanitation from "@/assets/water.jpg";
import shippingIcon from "@/assets/icon-shipping.svg"
import shipping from "@/assets/shipping.jpg";
import energyIcon from "@/assets/icon-enrgy.svg"
import energy from "@/assets/renewable.jpg";
import infrastructureIcon from "@/assets/Infrastructure.jpg"
import infrastructure from "@/assets/icon-infrastructure.svg";


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
    image: eductaion,
    icon:educationicon,
  },
  {
    id: "sector",
    title: "Water & Sanitation",
    description:
      "Desalination, water treatment, and sanitation — the infrastructure everything else depends on.",
    icon:sanitationIcon,
    image:sanitation,
  },
  {
    id: "global",
    title: "Shipping & Ports",
    description:
      "Ports, terminals, shipbuilding, and maritime infrastructure that build the blue economy.",
    icon:shippingIcon,
    image:shipping,
  },
  {
    id: "energy",
    title: "Renewable Energy",
    description:
      "Solar and clean-energy projects — the fastest-growing category of ECA support worldwide.",
    icon: energyIcon,
    image:energy,
  },
  {
    id: "Infrastructure",
    title: "Infrastructure",
    description:
      "Allied infrastructure — housing, urban and social development — where ECA-backed models apply.",
    icon:infrastructure ,
    image: infrastructureIcon,
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
          py-[56px]
          px-[20px]
          md:py-[70px]
          lg:py-[100px]
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
                                <p className="flex items-center gap-2 text-[14px] text-[#e8611a] sm:text-[15.5px]"><Image src={focusIcon} alt="" className="" width={20} height={20} /> Focus Areas</p>

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
                       <Link href="/track-record" className="home-cta mt-2">Explore our sectors</Link>

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
            <article
              key={item.id}
              className="flex min-w-0 flex-col"
            >
              <div className="relative aspect-[36/25] w-full overflow-hidden rounded-[8px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(50vw - 30px), 360px"
                  className="object-cover"
                />
              </div>

              {/* Figma SVG Icon */}
              <div className=" flex-1 bg-[#F8F7F5]
                px-[20px]
                py-[20px]
                mt-2
                  rounded-[8px]
                ">

                     <div className="mb-[17px]">
                <Image
                  src={item.icon}
                 
                  alt=""
                   width={20}
          height={20}
               
                />
              </div>

              {/* Title */}
              <h3
                className="
                  mb-[10px]
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
             
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusArea;
