import Image from "next/image";
import indiaImage from "@/assets/our-presence1.png";
import dubaiImage from "@/assets/our-presence-2.png";
import netherlandsImage from "@/assets/our-presenc3.png";
import presenceIcon from "@/assets/icon-presence.svg";

const locations = [
  { name: "India", description: "Project origination and on-the-ground delivery.", image: indiaImage, alt: "Indian city and bridge at sunset" },
  { name: "Dubai", description: "Capital and GCC partnerships.", image: dubaiImage, alt: "Dubai coastline and skyline" },
  { name: "Netherlands", description: "European ECA and banking relationships.", image: netherlandsImage, alt: "Amsterdam canal and historic buildings" },
] as const;

export function AboutPresence() {
  return (
    <section className="bg-[#f8f7f5] px-[20px] py-[56px] md:py-[70px] lg:py-[100px]">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-medium text-[#e8611a]"><Image src={presenceIcon} alt="" className="" width={20} height={20} /> Our Presence</p>
          <h2 className="mt-[18px] w-full break-words text-[30px] font-medium leading-9 text-[#122745] sm:mt-5 sm:text-[44px] sm:leading-[1.15] lg:text-[54px] lg:leading-[64px]">Three hubs. One corridor.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-6 text-neutral-600 sm:text-lg sm:leading-7">Our footprint mirrors the flow of ECA-backed capital: sourced in Europe and the Gulf, structured in Dubai, and delivered on the ground in India.</p>
        </div>

        <div className="mt-[26px] grid gap-7 sm:mt-[52px] md:grid-cols-3 md:gap-6 lg:gap-8">
          {locations.map((location) => (
            <article key={location.name}>
              <Image src={location.image} alt={location.alt} className="h-[300px] w-full rounded-lg object-cover sm:h-[360px] md:h-[320px] lg:h-[404px]" />
              <h3 className="mt-5 text-[19px] font-semibold leading-tight text-[#112a4b] sm:text-2xl">{location.name}</h3>
              <p className="mt-1 text-[14px] sm:text-[15.5px] text-neutral-600">{location.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
