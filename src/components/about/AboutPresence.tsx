import Image from "next/image";
import indiaImage from "@/assets/about-hero.png";
import dubaiImage from "@/assets/about-approach.png";
import netherlandsImage from "@/assets/about-netherlands.png";

const locations = [
  { name: "India", description: "Project origination and on-the-ground delivery.", image: indiaImage, alt: "Indian city and bridge at sunset" },
  { name: "Dubai", description: "Capital and GCC partnerships.", image: dubaiImage, alt: "Dubai coastline and skyline" },
  { name: "Netherlands", description: "European ECA and banking relationships.", image: netherlandsImage, alt: "Amsterdam canal and historic buildings" },
] as const;

export function AboutPresence() {
  return (
    <section className="bg-[#f7f6f4] px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-medium text-[#f56619]"><span aria-hidden="true">☷</span> Our Presence</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-[#112a4b] sm:text-5xl">Three hubs. One corridor.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-7 text-neutral-600">Our footprint mirrors the flow of ECA-backed capital: sourced in Europe and the Gulf, structured in Dubai, and delivered on the ground in India.</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {locations.map((location) => (
            <article key={location.name}>
              <Image src={location.image} alt={location.alt} className="h-[340px] w-full rounded-2xl object-cover" />
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#112a4b]">{location.name}</h3>
              <p className="mt-1 text-base leading-6 text-neutral-600">{location.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
