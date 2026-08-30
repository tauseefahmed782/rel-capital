import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import sectorIcon from "@/assets/icon-heritage.svg";
import healthcareIcon from "@/assets/HealthcareIcon.svg";
import educationIcon from "@/assets/EducationIcon.svg";
import waterIcon from "@/assets/Water-&-SanitationIcon.svg";
import shippingIcon from "@/assets/Shipping-&-Ports.svg";
import energyIcon from "@/assets/Renewable-EnergyIcon.svg";
import healthcareImage from "@/assets/Healthcare-Service-Image.png";
import educationImage from "@/assets/educationImg.png";
import waterImage from "@/assets/Water-&-SanitationImg.png";
import shippingImage from "@/assets/shippingImage.png";
import renewableImage from "@/assets/renewableImage.png";

type Sector = {
  title: string;
  subtitle: string;
  description: string;
  icon: StaticImageData;
  image: StaticImageData;
};

const sectorDescription =
  "We build high-quality residential spaces that combine comfort, durability, and refined design. Every home is crafted with precision, trusted materials, and careful attention to detail to ensure lasting strength and long-term value.";

const sectors: Sector[] = [
  {
    title: "Healthcare",
    subtitle: "Villa & Luxury Living Spaces",
    description: sectorDescription,
    icon: healthcareIcon,
    image: healthcareImage,
  },
  {
    title: "Education",
    subtitle: "Villa & Luxury Living Spaces",
    description: sectorDescription,
    icon: educationIcon,
    image: educationImage,
  },
  {
    title: "Water & Sanitation",
    subtitle: "Villa & Luxury Living Spaces",
    description: sectorDescription,
    icon: waterIcon,
    image: waterImage,
  },
  {
    title: "Shipping & Ports",
    subtitle: "Villa & Luxury Living Spaces",
    description: sectorDescription,
    icon: shippingIcon,
    image: shippingImage,
  },
  {
    title: "Renewable Energy",
    subtitle: "Villa & Luxury Living Spaces",
    description: sectorDescription,
    icon: energyIcon,
    image: renewableImage,
  },
];

export function SectorsList() {
  return (
    <section className="bg-white px-[20px]">
      <div className="mx-auto w-full max-w-[1120px] py-[56px] md:py-[72px] lg:py-[100px]">
        <p className="flex items-center gap-2 text-[14px] font-normal leading-none text-[#e8611a] sm:text-[15.5px]">
          <Image
            src={sectorIcon}
            alt=""
            width={20}
            height={20}
           
          />
          Sectors
        </p>

        <h2 className="mt-[14px] max-w-[760px] text-[30px] font-medium leading-[1.12] tracking-[-1px] text-[#122745] sm:mt-[18px] sm:text-[50px] sm:leading-[1.08] sm:tracking-[-1.5px] lg:text-[54px]">
          Explore our sectors.
        </h2>
        <p className="mt-[12px] max-w-[720px] text-[14px] font-normal leading-[1.55] text-[#636363] sm:text-[16px] sm:leading-[1.55]">
          A card variation {"\u2014"} hover any card to flip it and reveal how
          we finance that sector. Images to be added.
        </p>

        <div className="mt-[32px] space-y-[32px] sm:mt-[40px] lg:space-y-[38px]">
          {sectors.map((sector) => (
            <article
              key={sector.title}
              className="grid overflow-hidden rounded-[12px] border border-[#E6E2DC] bg-white p-[22px] sm:grid-cols-[230px_1fr] sm:gap-[28px] sm:p-[28px] lg:min-h-[291px] lg:grid-cols-[260px_384px_1fr] lg:gap-[28px] lg:p-[32px]"
            >
              <div className="flex min-h-[132px] flex-col justify-between sm:min-h-[154px] lg:min-h-[227px]">
                <Image
                  src={sector.icon}
                  alt=""
                  width={44}
                  height={44}
                  className="h-[44px] w-[44px] object-contain"
                />
                <div>
                  <h3 className="text-[20px] font-medium leading-[1.4] text-[#252b33] sm:text-[24px]">
                    {sector.title}
                  </h3>
                  <p className="mt-[8px] text-[13px] sm:text-[16px] font-normal leading-[1.5] text-[#636363]">
                    {sector.subtitle}
                  </p>
                </div>
              </div>

              <div className="relative mt-[24px] aspect-[384/282] overflow-hidden rounded-[8px] sm:mt-0 sm:aspect-auto sm:h-[210px] lg:h-[282px]">
                <Image
                  src={sector.image}
                  alt=""
                  
                  className=""
                width={384} height={384}
                />
              </div>

              <div className="mt-[22px] flex flex-col justify-between sm:col-span-2 lg:col-span-1 lg:mt-0 lg:min-h-[210px]">
                <p className="text-[14px] font-normal leading-[1.48] text-[#636363] sm:text-[16px] sm:leading-[1.5]">
                  {sector.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-[28px] inline-flex items-center gap-[8px] text-[13px] font-medium leading-none text-[#e8611a] transition-opacity hover:opacity-80 sm:text-[14px]"
                >
                  <span>Learn More</span>
                  <span aria-hidden="true" className="text-[14px] leading-none">
                    {"\u2197"}
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
