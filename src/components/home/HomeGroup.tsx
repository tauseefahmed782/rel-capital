import Image from "next/image";
import Link from "next/link";
import groupIcon from "@/assets/icon-heritage.svg";

const locations = [
  {
    name: "India",
    description: "Project origination, structuring, and on-the-ground delivery.",
  },
  {
    name: "Dubai",
    description: "Capital, GCC partnerships, and project management.",
  },
  {
    name: "Netherlands",
    description: "European export-credit and banking relationships.",
  },
] as const;

export default function HomeGroup() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1120px] px-[20px] py-[56px] md:py-[70px] lg:py-[100px]">
        <div className="lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          <div>
            <p className="flex items-center gap-2 text-[14px] text-[#e8611a] sm:text-[15.5px]">
              <Image
                src={groupIcon}
                alt=""
                width={20}
                height={20}
                className=""
              />
              The Rural Enhancers Group
            </p>

            <h2 className="mt-[10px] text-[30px] font-medium leading-normal tracking-[-1.5px] text-[#122745] sm:text-[42px] md:leading-[1.12] lg:text-[53px]">
              Part of something larger.
            </h2>
          </div>

          <Link
            href="/group"
            className="home-cta hidden lg:inline-flex"
          >
            Meet the Group
          </Link>
        </div>

        <p className="mt-[12px] max-w-[900px] text-[14px] font-normal leading-[1.45] text-[#636363] lg:text-[15px]">
          REL Capital operates within the Rural Enhancers Group — a
          purpose-driven investment ecosystem spanning India, Dubai, and the
          Netherlands. The Group’s companies work across project management,
          consulting, and financial services, including Rel Pay Trans,
          currently in submission for a pan-India payment aggregator banking
          licence.
        </p>

        <div className="mt-[30px] grid grid-cols-1 md:mt-[48px] md:grid-cols-3">
          {locations.map((location, index) => (
            <article
              key={location.name}
              className={`
                py-[20px] first:pt-0 last:pb-0
                md:min-h-[82px] md:px-[36px] md:py-0 md:first:pl-0 md:last:pr-0
                ${index > 0 ? "border-t border-[#12274526] md:border-l md:border-t-0" : ""}
              `}
            >
              <h3 className="text-[20px] font-semibold leading-[1.2] text-[#122745] md:text-[22px] lg:text-[26px]">
                {location.name}
              </h3>
              <p className="mt-[10px] max-w-[310px] text-[13px] font-normal leading-[1.45] text-[#636363] lg:text-[15px]">
                {location.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-[24px] border-l-[4px] border-[#e8611a] pl-[15px] md:mt-[34px] ">
          <h3 className="shrink-0 text-[14px] font-semibold leading-[1.45] text-[#122745] lg:text-[16px]">
            Rel Pay Trans
          </h3>
          <p className="mt-[3px]  text-[13px] font-normal leading-[1.45] text-[#636363] md:mt-0 lg:text-[15px]">
            A group company, currently in submission for a pan-India
            payment-aggregator banking licence — offline, online, merchant, and
            banking.
          </p>
        </div>

       
      </div>
    </section>
  );
}
