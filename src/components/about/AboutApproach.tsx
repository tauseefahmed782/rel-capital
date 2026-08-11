import Image from "next/image";
import approachImage from "@/assets/about-approach.png";

const principles = [
  ["01", "ECA-Backed Solutions", "ECAs are government-backed institutions that guarantee or insure loans to support cross-border trade and investment. We build our structures around them, unlocking capital that is longer in tenor and lower in cost than commercial markets alone can offer."],
  ["02", "Structured Financial Models", "Every project is different, so every structure is bespoke. We optimize funding sources, repayment profiles, and risk allocation for both borrowers and guarantors."],
  ["03", "Sector-Focused Expertise", "We concentrate on five sectors where ECA-backed capital creates the most enduring value, and we know the delivery realities of each."],
  ["04", "Global Partnerships", "Our value is our network: ECAs, international banks, development finance institutions, and governments, coordinated end to end."],
  ["05", "Sustainable Growth", "We finance for the long operating life of an asset and the long-term development goals it serves, not for short-term returns."],
] as const;

export function AboutApproach() {
  return (
    <section className="bg-[#f7f6f4] px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <p className="flex items-center gap-2 text-sm font-medium text-[#f56619]"><span aria-hidden="true">♙</span> Our Approach</p>
        <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-[#112a4b] sm:text-5xl">What sets us apart.</h2>
        <p className="mt-5 text-lg leading-7 text-neutral-600">Five principles shape every structure we build.</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Image src={approachImage} alt="Aerial view of Dubai coastline" className="h-[500px] w-full rounded-2xl object-cover lg:h-[610px]" />
          <div className="divide-y divide-slate-200">
            {principles.map(([number, title, description]) => (
              <article key={number} className="grid grid-cols-[auto_1fr] gap-x-5 py-6 first:pt-0 last:pb-0">
                <p className="pt-0.5 text-lg font-bold text-[#f56619]">{number}</p>
                <div>
                  <h3 className="text-xl font-semibold text-[#112a4b]">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-neutral-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
