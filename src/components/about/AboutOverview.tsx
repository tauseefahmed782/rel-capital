import Image from "next/image";
import Link from "next/link";
import shippingImage from "@/assets/about-img.png";
import aboutIcon from "@/assets/icon-about.svg";

export function AboutOverview() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-[100px] lg:px-0">
      <div className="mx-auto max-w-[1120px]">
        <p className="flex items-center gap-2 text-[14px] text-[#e8611a] sm:text-[15.5px]"><Image src={aboutIcon} alt="" className="" width={20} height={20} /> About REL Capital</p>
        <h2 className="mt-3 w-full max-w-[840px] break-words text-[30px] font-medium leading-[1.2] text-[#122745] sm:mt-5 sm:text-[44px] sm:leading-[1.15] lg:text-[54px] lg:leading-[64px]">Specialized by design, global by network.</h2>
        <div className="mt-[26px] grid items-start gap-[26px] sm:mt-12 lg:grid-cols-[minmax(0,604px)_minmax(320px,444px)] lg:gap-[72px]">
          <div className="order-2 text-[14px] leading-[1.74] text-[#636363] sm:text-[16px] lg:order-1">
            <p>REL Capital is the specialized financial wing of the Rural Enhancers Group, dedicated to enabling structured financing solutions backed by trusted Export Credit Agencies. We connect borrowers with third-party guarantors and global financial partners to fund high-impact infrastructure and healthcare projects across the India–GCC–Europe corridor.</p>
            <p className="mt-[18px]">Where conventional lenders see risk, we engineer structure. By blending local project insight with a global network of export credit agencies, guarantors, and leading banks, we make ambitious public projects bankable — and we do it with the transparency, discipline, and regulatory rigor institutional partners demand.</p>
            <p className="mt-[18px]">Our frameworks reduce risk, ensure regulatory compliance, and accelerate project delivery. That is not a slogan; it is the record we have built.</p>
            <Link href="/track-record" className="mt-7 inline-block rounded-full bg-[#e8611a] px-2 py-2 text-[14px] font-medium text-white sm:px-[30px] sm:py-4 sm:text-[16px]">See our track record</Link>
          </div>
          <Image src={shippingImage} alt="Container ships travelling across open water" className="order-1 h-[300px] w-full rounded-lg object-cover sm:h-[420px] lg:order-2 lg:h-[540px]" />
        </div>
      </div>
    </section>
  );
}
