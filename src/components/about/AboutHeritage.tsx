import Link from "next/link";

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
    <section className="bg-[#f7f6f4] px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="rounded-[22px] border border-slate-200 bg-white px-8 py-9 shadow-sm sm:px-10">
          <p className="text-center text-sm font-bold uppercase tracking-wide text-slate-400">Group Structure</p>
          <div className="mx-auto mt-6 w-fit rounded-xl bg-[#112a4b] px-6 py-3 text-center text-base font-semibold text-white">Rural Enhancers Group</div>
          <div className="mx-auto h-6 w-px bg-slate-300" />
          <div className="grid grid-cols-2 gap-3">
            {groupCompanies.map(([name, location, active]) => (
              <div key={name} className={`min-h-24 rounded-xl border p-4 ${active ? "border-[#f56619] bg-white" : "border-slate-200 bg-[#f7f7f6]"}`}>
                <p className="text-sm font-bold leading-4 text-[#112a4b]">{name}</p>
                <p className={`mt-1 text-sm ${active ? "text-[#f56619]" : "text-neutral-500"}`}>{location}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="flex items-center gap-2 text-sm font-medium text-[#f56619]"><span aria-hidden="true">♙</span> Our Heritage</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-[#112a4b] sm:text-5xl">Backed by a Group with a proven track record.</h2>
          <p className="mt-8 border-l-[3px] border-[#f56619] pl-4 text-xl font-medium leading-7 text-[#112a4b]">“Driven By Purpose” is not a tagline we inherited. It is the mandate we finance against.</p>
          <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600">Rural Enhancers is a holistic, purpose-driven investment group operating across India, Dubai, and the Netherlands, with a focus on healthcare and infrastructure delivered through ECA-based financing and public-private partnerships. The Group has facilitated landmark projects including India&apos;s first ECA-backed hospital. REL Capital is the Group&apos;s dedicated financial arm — the specialist team that designs and executes the capital structures behind these projects.</p>
          <Link href="/track-record" className="mt-7 inline-block rounded-full bg-[#f56619] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#d9510d]">See our track record</Link>
        </div>
      </div>
    </section>
  );
}
