import Link from "next/link";
import Image from "next/image";
import heritageIcon from "@/assets/icon-heritage.svg";

const groupCompanies = [
  ["REL Capital", "Dubai", true],
  ["Rural Enhancers Group LLP", "India", false],
  ["RE Project Management Services", "Dubai", false],
  ["Rural Enhancers Consulting", "Netherlands", false],
  ["Rural Enhancers Projects Pvt Ltd", "India", false],
  ["Rel Pay Trans", "Payments", false],
] as const;

export function AboutHeritage() {
  return (
    <section className="bg-[#f8f7f5] px-[20px] py-[56px] md:py-[70px] lg:py-[100px]">
      <div className="mx-auto grid max-w-[1120px] items-center gap-[26px] lg:grid-cols-[minmax(0,480px)_minmax(0,568px)] lg:gap-[72px]">
        <div className="order-2 rounded-lg border border-[#e4e8ef] bg-white px-[18px] py-[22px] sm:px-8 sm:py-[34px] lg:order-1 lg:min-h-[513px]">
          <p className="text-center text-[12px] font-semibold tracking-[.48px] text-[#98a4b6]">GROUP STRUCTURE</p>
          <div className="mx-auto mt-[18px] w-fit max-w-full rounded-[10px] bg-[#122745] px-[22px] py-[13px] text-center text-[14px] font-semibold text-white lg:text-[15px]">Rural Enhancers Group</div>
          <div className="mx-auto my-[18px] h-px w-full bg-[#c9d2df] lg:h-5 lg:w-px" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-3">
            {groupCompanies.map(([name, location, active]) => (
              <div key={name} className={`min-h-[60px] rounded-[9px] border px-[15px] py-3 lg:min-h-[95px] lg:p-[12px_14px] ${active ? "border-[1.5px] border-[#e8611a] bg-white" : "border-[#dfe4ec] bg-[#f8f7f5]"}`}>
                <p className="text-[13px] font-semibold leading-4 text-[#122745]">{name}</p>
                <p className={`mt-[3px] text-[11.5px] leading-[14px] ${active ? "text-[#e8611a]" : "text-[#636363]"}`}>{location}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="flex items-center gap-2 text-[14px] text-[#e8611a] sm:text-[15.5px]"><Image src={heritageIcon} alt="" className="" width={20} height={20} /> Our Heritage</p>
          <h2 className="mt-4 w-full break-words text-[30px] font-medium leading-9 text-[#122745] sm:mt-6 sm:text-[44px] sm:leading-[1.15] lg:text-[54px] lg:leading-[64px]">Backed by a Group with a proven track record.</h2>
          <p className="mt-4 border-l-[3px] border-[#e8611a] pl-[14px] text-[15px] font-medium leading-[1.5] text-[#122745] sm:mt-6 sm:text-[18px] sm:leading-[27px]">“Driven By Purpose” is not a tagline we inherited. It is the mandate we finance against.</p>
          <p className="mt-4 text-[14px] leading-[1.74] text-[#636363] sm:mt-6 sm:text-[16px]">Rural Enhancers is a holistic, purpose-driven investment group operating across India, Dubai, and the Netherlands, with a focus on healthcare and infrastructure delivered through ECA-based financing and public-private partnerships. The Group has facilitated landmark projects including India&apos;s first ECA-backed hospital. REL Capital is the Group&apos;s dedicated financial arm — the specialist team that designs and executes the capital structures behind these projects.</p>
          <Link href="/track-record" className="mt-4 inline-block rounded-full bg-[#e8611a] p-4 text-[14px] font-medium text-white sm:mt-6 sm:px-[30px] sm:text-[16px]">See our track record</Link>
        </div>
      </div>
    </section>
  );
}
