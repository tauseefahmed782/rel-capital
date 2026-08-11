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
    <section className="bg-white px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-medium text-[#f56619]"><span aria-hidden="true">♙</span> Our Purpose</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-[#112a4b] sm:text-5xl">Vision &amp; Mission</h2>
          <p className="mt-5 text-lg leading-7 text-neutral-600">Two commitments anchor everything we structure.</p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {commitments.map((commitment) => (
            <article key={commitment.number} className="rounded-xl bg-[#f7f6f4] p-8 sm:p-11">
              <p className="text-sm font-bold text-[#f56619]">{commitment.number}</p>
              <h3 className="mt-5 text-3xl font-medium tracking-tight text-[#112a4b]">{commitment.title}</h3>
              <p className="mt-5 text-lg leading-8 text-neutral-600">{commitment.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
