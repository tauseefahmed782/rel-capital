import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/assets/footer-logo.png";
import footerMap from "@/assets/Footer.png";
import footerMobileMap from "@/assets/footer-mob-img.jpg";

const footerGroups = [
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["How We Work", "/how-we-work"],
      ["Sectors", "/sectors"],
      ["Solutions", "/solutions"],
    ],
  },
  {
    title: "Engage",
    links: [
      ["Track Record", "/track-record"],
      ["Partners", "/partners"],
      ["Contact", "/contact"],
      ["Insights", "/insights"],
    ],
  },
  {
    title: "Audiences",
    links: [
      ["For Borrowers", "/borrowers"],
      ["For Guarantors", "/guarantors"],
      ["For Investors", "/investors"],
      ["Group: Rural Enhancers", "/group"],
    ],
  },
] as const;

function FooterLinks() {
  return (
    <>
      {footerGroups.map((group) => (
        <div key={group.title} className="w-[163px]">
          <h3 className="text-[12px] font-semibold uppercase tracking-[.6px] text-[#636363]">{group.title}</h3>
          <ul className="mt-[14px] space-y-[14px]">
            {group.links.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-[13px] text-[#0d1b3e] transition-colors hover:text-[#e8611a] lg:whitespace-nowrap lg:text-[14.5px]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export function Footer() {
  return (
    <footer id="site-footer" className="bg-white text-[#112a4b]">
      <div className="w-full px-5 py-14 md:hidden">
        <Link href="/" aria-label="Rural Enhancers home" className="inline-block">
          <Image src={footerLogo} alt="Rural Enhancers" className="h-[51px] w-[249px] object-contain" />
        </Link>

        <h2 className="mt-7 flex flex-col text-[30px] font-medium leading-[35px] tracking-[-2px]">
          <span>Let&apos;s structure your</span>
          <span>next project.</span>
        </h2>
        <p className="mt-[18px] max-w-[350px] text-[14px] leading-[21px] text-[#636363]">
          Whether you&apos;re a government, a developer, a guarantor, or an investor - the conversation starts here.
        </p>
        <Link href="/contact" className="mt-[18px] inline-block rounded-full bg-[#e8611a] px-4 py-[10px] text-[14px] leading-5 text-white transition-colors hover:bg-[#d9510d]">
          Start a Conversation
        </Link>

        <div className="mt-[18px] grid grid-cols-2 gap-x-6 gap-y-[30px]">
          <FooterLinks />
        </div>

        <div className="mt-7  lg:w-full sm:w-full w-full">
          <Image src={footerMobileMap} alt="Global presence map" className="h-full w-full object-contain object-center" />
        </div>

        <div className="text-center text-[13px] leading-5 text-[#191b1f]">
          <p className="font-bold uppercase text-[#122745]">India</p>
          <p className="mt-4">
            Ph : (+1) 631-366-7600
            <br />
            info@ruralenhancers.com
          </p>
        </div>

        <div className="mt-8 text-center text-[13px] leading-5">
          <p className="font-bold text-[#191b1f]">Privacy Policy&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;ISMS Policy</p>
          <p className="mt-[14px] w-full text-[11px] text-[#696e71]">© 2026 REL Capital, A Rural Enhancers Group Company</p>
        </div>
      </div>

      <div className="mx-auto hidden w-full max-w-[1160px] grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-[30px] px-5 py-[72px] md:grid lg:grid-cols-[583px_448px] lg:gap-[89px] lg:py-[100px]">
        <div className="flex w-full flex-col gap-10 lg:w-[583px]">
          <Link href="/" aria-label="Rural Enhancers home" className="inline-block">
            <Image src={footerLogo} alt="Rural Enhancers" className="h-[51px] w-[249px] object-contain" />
          </Link>

          <div>
            <div className="aspect-[572/281] w-full overflow-hidden lg:w-[572px]">
              <Image src={footerMap} alt="Global presence map" className="h-full w-full object-cover object-center " />
            </div>

            <div className="grid w-full grid-cols-2 items-start gap-4">
              <div className="w-full text-[12px] leading-[19px] lg:w-[271px] lg:text-[14px] lg:leading-[21px]">
                <div className="flex items-center gap-2 font-bold text-[#191b1f] lg:gap-5">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <span aria-hidden="true">|</span>
                  <Link href="/isms-policy">ISMS Policy</Link>
                </div>
                <p className="mt-[23px] capitalize text-[#696e71]">© 2026 REL Capital, A Rural Enhancers Group Company</p>
              </div>

              <div className="w-full text-[12px] leading-[19px] text-[#191b1f] lg:w-[236.75px] lg:text-[14px] lg:leading-[21px]">
                <p className="font-bold uppercase text-[#122745]">India</p>
                <p className="mt-[23px]">
                  Ph : (+1) 631-366-7600
                  <br />
                  info@ruralenhancers.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[448px]">
          <h2 className="flex flex-col text-[36px] font-medium leading-[43px] tracking-[-2px] lg:text-[54.9px] lg:leading-[64.4px]">
            <span>Let&apos;s structure your</span>
            <span>next project.</span>
          </h2>
          <p className="mt-7 w-full text-[14px] leading-[21px] text-[#636363] lg:w-[469px] lg:text-[15.1px] lg:leading-[22.4px]">
            Whether you&apos;re a government, a developer, a guarantor, or an investor - the conversation starts here.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded-full bg-[#e8611a] px-4 py-[10px] text-[15.3px] leading-[22.4px] text-white transition-colors hover:bg-[#d9510d]">
            Start a Conversation
          </Link>

          <div className="mt-10 grid grid-cols-3 gap-3 [&>div]:w-auto lg:flex lg:gap-[50px] lg:[&>div]:w-[163px]">
            <FooterLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
