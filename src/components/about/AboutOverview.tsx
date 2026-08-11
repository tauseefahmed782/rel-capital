import Image from "next/image";
import Link from "next/link";
import shippingImage from "@/assets/about-shipping.png";

export function AboutOverview() {
  return (
    <section className="bg-white px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
       <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="max-w-2xl text-base leading-7 text-neutral-600">
             <p className="flex items-center gap-2 text-sm font-medium text-[#f56619]"><span aria-hidden="true">◌</span> About REL Capital</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-[#112a4b] sm:text-5xl">Specialized by design, global by network.</h2>
        
            <p className="mt-10">REL Capital is the specialized financial wing of the Rural Enhancers Group, dedicated to enabling structured financing solutions backed by trusted Export Credit Agencies. We connect borrowers with third-party guarantors and global financial partners to fund high-impact infrastructure and healthcare projects across the India–GCC–Europe corridor.</p>
            <p className="mt-5">Where conventional lenders see risk, we engineer structure. By blending local project insight with a global network of export credit agencies, guarantors, and leading banks, we make ambitious public projects bankable — and we do it with the transparency, discipline, and regulatory rigor institutional partners demand.</p>
            <p className="mt-5">Our frameworks reduce risk, ensure regulatory compliance, and accelerate project delivery. That is not a slogan; it is the record we have built.</p>
            <Link href="/track-record" className="mt-7 inline-block rounded-full bg-[#f56619] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d9510d]">See our track record</Link>
          </div>
          <Image src={shippingImage} alt="Container ships travelling across open water" className="h-[420px] w-full rounded-2xl object-cover shadow-sm lg:h-[520px]" />
        </div>
      </div>
    </section>
  );
}
