import Image from "next/image";
import Link from "next/link";
import mechanismIcon from "@/assets/icon-leadership.svg";
import hospitalImage from "@/assets/project-01.jpg";
import davosImage from "@/assets/project-02.jpg";
import portsImage from "@/assets/project-03.jpg";

const deliveryItems = [
  {
    title: "PMC Warje Hospital",
    description:
      "India’s first ECA-backed hospital — €43M, delivered on a DBFOT basis.",
    image: hospitalImage,
    imagePosition: "object-center",
  },
  {
    title: "Maharashtra Davos MoU",
    description:
      "A ₹10,000 crore (≈€1B) investment MoU / credit line signed at WEF Davos.",
    image: davosImage,
    imagePosition: "object-center",
  },
  {
    title: "Abu Dhabi Ports Framework",
    description:
      "A $2 billion maritime and port investment framework.",
    image: portsImage,
    imagePosition: "object-center",
  },
] as const;

export default function ProvenDelivery() {
  return (
    <section className="bg-[#F8F7F5] px-[20px]">
      <div className="mx-auto w-full max-w-[1120px] py-[56px] md:py-[70px] lg:py-[100px]">
        <div className="md:grid md:grid-cols-[1.45fr_.85fr] md:items-start md:gap-[60px]">
          <div>
            
            <p className="flex items-center gap-2 text-[14px] text-[#e8611a] sm:text-[15.5px]">
              <Image
                src={mechanismIcon}
                alt=""
                width={20}
                height={20}
                className=""
              />
            Proven Delivery
            </p>

            <h2 className="mt-[10px] max-w-[720px] text-[30px] font-medium leading-normal tracking-[-1.5px] text-[#122745] sm:text-[42px] md:leading-[1.12] lg:text-[53px]">
             We don’t theorize about ECA
finance. We’ve closed it.
            </h2>
          </div>

          <div className="mt-[22px] md:mt-[28px]">
            <p className="max-w-[340px] text-[14px] font-normal leading-[1.45] text-[#636363] lg:text-[15px]">
              From India’s first ECA-backed hospital to a $2bn maritime framework and a ₹10,000 crore Davos credit line — our structures are built, operating, and being replicated.
            </p>

            <Link
              href="/solutions"
              className="home-cta mt-5"
            >
              See our track record
            </Link>
          </div>
        </div>

        <div className="mt-[50px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:mt-[58px] lg:mt-[64px] lg:grid-cols-3">
          {deliveryItems.map((item) => (
            <article
              key={item.title}
              className="group relative isolate aspect-[360/260] min-h-[220px] w-full overflow-hidden rounded-[8px] bg-[#122745]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(50vw - 30px), 360px"
                className={`-z-20 object-cover transition-transform duration-500  ${item.imagePosition}`}
              />

              <div className="absolute inset-x-0 bottom-0 p-[20px] sm:p-[22px] lg:p-[24px]">
                <h3 className="text-[16.5px] lg:text-[20px] font-semibold leading-[1.2] text-white">
                  {item.title}
                </h3>
                <p className="mt-[8px] max-w-[310px] text-[14px] font-normal leading-[1.4] text-white/88">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
