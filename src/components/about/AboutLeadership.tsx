import Image from "next/image";
import leadershipPortrait from "@/assets/leadership-placeholder.png";
import leadershipIcon from "@/assets/icon-leadership.svg";

export function AboutLeadership() {
  return (
    <section className="bg-white px-[20px] py-[56px] md:py-[70px] lg:py-[100px]">
      <div className="mx-auto max-w-[1120px]">
        <p className="flex items-center gap-2 text-sm font-medium text-[#e8611a]"><Image src={leadershipIcon} alt="" className="" width={20} height={20} /> Leadership</p>
        <h2 className="mt-3 w-full max-w-[760px] break-words text-[30px] font-medium leading-9 text-[#122745] sm:mt-5 sm:text-[44px] sm:leading-[1.15] lg:text-[54px] lg:leading-[64px]">Experienced hands on complex capital.</h2>
        <p className="mt-5 max-w-[760px] text-[15px] leading-[1.62] text-[#636363] sm:text-[17px]">REL Capital is led by a team combining decades of experience in project finance, government partnerships, export-credit structuring, and healthcare and infrastructure delivery.</p>

        <div className="mt-[26px] grid items-start gap-5 sm:mt-[52px] lg:grid-cols-[minmax(320px,400px)_minmax(0,664px)] lg:gap-14">
          <Image src={leadershipPortrait} alt="Ambar Ayade" className="h-[300px] w-full rounded-lg object-cover sm:h-[420px] lg:h-[480px]" />
          <div className="pt-2">
            <h3 className="text-[22px] font-semibold text-[#122745] sm:text-[30px]">Ambar Ayade</h3>
            <p className="mt-[14px] text-[14px] font-medium text-[#e8611a] sm:text-[16px]">Managing Director &amp; CEO, Rural Enhancers Group</p>
            <p className="mt-[14px] text-[14px] leading-[1.76] text-[#636363] sm:text-[16.5px]">Facilitator of India&apos;s first ECA-backed hospital; an integral part of the Maharashtra Chief Minister&apos;s “Country Desk” foreign-investment initiative since 2021, focused on bringing ECA-based investment to the state.</p>
            <div className="mt-[14px]  rounded-lg border border-[#e4e8ef] bg-[#f8f7f5] px-4 py-5 text-[#636363] sm:px-6">
              <div aria-hidden className="shrink-0  text-[18px] font-semibold leading-5 text-[#e8611a]">◷</div>
              <div>
                <p className="text-[14px] font-semibold text-[#122745] sm:text-[16px] mt-2">Team expanding</p>
                <p className="mt-1 text-[14px] leading-[1.58] sm:text-[15px]">Full leadership bios — finance leadership and partner-institution representatives — are being finalized and will be published here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
