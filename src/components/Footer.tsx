import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/assets/footer-logo.png";
import footerMap from "@/assets/Footer.png";

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
      <div className="w-full px-5 py-14 lg:hidden">
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

        <div className="mt-[18px] flex flex-wrap gap-x-6 gap-y-[30px]">
          <FooterLinks />
        </div>

        <div className="mt-7 h-[172px] w-full max-w-[350px] overflow-hidden">
          <Image src={footerMap} alt="Global presence map" className="h-full w-full object-cover object-center opacity-40" />
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

      <div className="mx-auto hidden max-w-[1120px] gap-[89px] py-[100px] lg:grid lg:grid-cols-[583px_448px]">
        <div className="flex w-[583px] flex-col gap-10">
          <Link href="/" aria-label="Rural Enhancers home" className="inline-block">
            <Image src={footerLogo} alt="Rural Enhancers" className="h-[51px] w-[249px] object-contain" />
          </Link>

          <div>
            <div className="h-[281px] w-[572px] overflow-hidden">
              <Image src={footerMap} alt="Global presence map" className="h-full w-full object-cover object-center " />
            </div>

            <div className="flex w-full items-start justify-between">
              <div className="w-[271px] text-[14px] leading-[21px]">
                <div className="flex items-center gap-5 font-bold text-[#191b1f]">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <span aria-hidden="true">|</span>
                  <Link href="/isms-policy">ISMS Policy</Link>
                </div>
                <p className="mt-[23px] capitalize text-[#696e71]">© 2026 REL Capital, A Rural Enhancers Group Company</p>
              </div>

              <div className="w-[236.75px] text-[14px] leading-[21px] text-[#191b1f]">
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

        <div className="w-[448px]">
          <h2 className="flex flex-col text-[54.9px] font-medium leading-[64.4px] tracking-[-2px]">
            <span>Let&apos;s structure your</span>
            <span>next project.</span>
          </h2>
          <p className="mt-7 w-[469px] text-[15.1px] leading-[22.4px] text-[#636363]">
            Whether you&apos;re a government, a developer, a guarantor, or an investor - the conversation starts here.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded-full bg-[#e8611a] px-4 py-[10px] text-[15.3px] leading-[22.4px] text-white transition-colors hover:bg-[#d9510d]">
            Start a Conversation
          </Link>

          <div className="mt-10 flex gap-[50px]">
            <FooterLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
