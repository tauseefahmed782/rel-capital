import Image from "next/image";
import purposeIcon from "@/assets/icon-purpose.svg";

const commitments = [
  {
    number: "01",
    title: "Our Vision",
    description: "To be the most trusted bridge between global capital and high-impact infrastructure — a financing partner that turns national development priorities into delivered, operating reality.",
  },
  {
    number: "02",
    title: "Our Mission",
    description: "To structure and facilitate ECA-backed financing that funds hospitals, schools, clean energy systems, ports, and clean mobility — reducing risk for every stakeholder while advancing long-term, sustainable development.",
  },
] as const;

export function AboutVisionMission() {
  return (
    <section className="bg-white px-5 py-14 sm:px-0 sm:py-[100px]">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-medium text-[#e8611a]"><Image src={purposeIcon} alt="" className="" width={20}  height={20} /> Our Purpose</p>
          <h2 className="mt-3 text-[30px] font-medium leading-9 text-[#122745] sm:mt-5 sm:text-[54px] sm:leading-[64px]">Vision &amp; Mission</h2>
          <p className="mt-5 text-lg leading-7 text-neutral-600">Two commitments anchor everything we structure.</p>
        </div>

        <div className="mt-[26px] grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-7">
          {commitments.map((commitment) => (
            <article key={commitment.number} className="rounded-lg bg-[#f8f7f5] p-[30px_18px] sm:h-[278px] sm:p-11">
              <p className="text-sm font-bold text-[#f56619]">{commitment.number}</p>
              <h3 className="mt-4 text-[22px] font-medium text-[#122745] sm:mt-5 sm:text-3xl">{commitment.title}</h3>
              <p className="mt-4 text-[15px] leading-6 text-[#636363] sm:mt-5 sm:text-lg sm:leading-8">{commitment.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
