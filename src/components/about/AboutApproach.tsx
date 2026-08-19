import Image from "next/image";
import approachImage from "@/assets/approach.png";
import approachIcon from "@/assets/icon-approach.svg";

const principles = [
  ["01", "ECA-Backed Solutions", "ECAs are government-backed institutions that guarantee or insure loans to support cross-border trade and investment. We build our structures around them, unlocking capital that is longer in tenor and lower in cost than commercial markets alone can offer."],
  ["02", "Structured Financial Models", "Every project is different, so every structure is bespoke. We optimize funding sources, repayment profiles, and risk allocation for both borrowers and guarantors."],
  ["03", "Sector-Focused Expertise", "We concentrate on five sectors where ECA-backed capital creates the most enduring value, and we know the delivery realities of each."],
  ["04", "Global Partnerships", "Our value is our network: ECAs, international banks, development finance institutions, and governments, coordinated end to end."],
  ["05", "Sustainable Growth", "We finance for the long operating life of an asset and the long-term development goals it serves, not for short-term returns."],
] as const;

export function AboutApproach() {
  return (
    <section className="bg-[#f8f7f5] px-5 py-14 sm:px-0 sm:py-[100px]">
      <div className="mx-auto max-w-[1120px]">
        <p className="flex items-center gap-2 text-sm font-medium text-[#e8611a]"><Image src={approachIcon} alt="" className="" width={20} height={20}/> Our Approach</p>
        <h2 className="mt-3 text-[30px] font-medium leading-9 text-[#122745] sm:mt-5 sm:text-[54px] sm:leading-[64px]">What sets us apart.</h2>
        <p className="mt-[14px] text-[14px] leading-[18px] text-[#636363] sm:mt-5 sm:text-lg sm:leading-7">Five principles shape every structure we build.</p>

        <div className="mt-[26px] grid gap-[26px] sm:mt-12 sm:grid-cols-[452px_596px] sm:gap-[72px]">
          <Image src={approachImage} alt="Aerial view of Dubai coastline" className="h-[300px] w-full rounded-lg object-cover sm:h-[736px]" />
          <div className="divide-y divide-slate-200">
            {principles.map(([number, title, description]) => (
              <article key={number} className="grid gap-y-4 py-[26px] first:pt-0 last:pb-0 sm:grid-cols-[auto_1fr] sm:gap-x-6 sm:gap-y-0">
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
