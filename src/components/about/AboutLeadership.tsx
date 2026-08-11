import Image from "next/image";
import leadershipPortrait from "@/assets/leadership-placeholder.png";

export function AboutLeadership() {
  return (
    <section className="bg-[#fff] px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <p className="flex items-center gap-2 text-sm font-medium text-[#f56619]"><span aria-hidden="true">↗</span> Leadership</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-[#112a4b] sm:text-5xl">Experienced hands on complex capital.</h2>
        <p className="mt-5 max-w-4xl text-lg leading-7 text-neutral-600">REL Capital is led by a team combining decades of experience in project finance, government partnerships, export-credit structuring, and healthcare and infrastructure delivery.</p>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[334px_1fr] lg:gap-12">
          <Image src={leadershipPortrait} alt="Leadership team member placeholder" className="h-[430px] w-full rounded-2xl object-cover lg:h-[500px]" />
          <div className="pt-1">
            <h3 className="text-3xl font-semibold tracking-tight text-[#112a4b]">Ambar Ayade</h3>
            <p className="mt-3 font-semibold text-[#f56619]">Managing Director &amp; CEO, Rural Enhancers Group</p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">Facilitator of India&apos;s first ECA-backed hospital; an integral part of the Maharashtra Chief Minister&apos;s “Country Desk” foreign-investment initiative since 2021, focused on bringing ECA-based investment to the state.</p>
            <div className="mt-5 rounded-lg border border-slate-200 bg-[#f7f6f4] px-6 py-5 text-neutral-600">
              <p className="font-semibold text-[#112a4b]">Team expanding</p>
              <p className="mt-1 text-sm leading-6">Full leadership bios — finance leadership and partner-institution representatives — are being finalized and will be published here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
