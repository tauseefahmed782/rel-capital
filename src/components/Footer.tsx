import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/LOGO.png";
import FooterImg from "@/assets/Footer.png";

const footerGroups = [
  { title: "Company", links: [["About", "/about"], ["How We Work", "/how-we-work"], ["Sectors", "/sectors"], ["Solutions", "/solutions"]] },
  { title: "Engage", links: [["Track Record", "/track-record"], ["Partners", "/partners"], ["Contact", "/contact"], ["Insights", "/insights"]] },
  { title: "Audiences", links: [["For Borrowers", "/borrowers"], ["For Guarantors", "/guarantors"], ["For Investors", "/investors"], ["Group: Rural Enhancers", "/group"]] },
] as const;

export function Footer() {
  return (
    <footer className="bg-white text-[#112a4b]">
      <div className="px-5 py-14 sm:hidden">
        <Image src={logo} alt="Rural Enhancers" className="h-[51px] w-[249px] object-contain" />
        <h2 className="mt-7 text-[30px] font-medium leading-[35px] tracking-[-2px]">Let&apos;s structure your next project.</h2>
        <p className="mt-[18px] text-[14px] leading-[21px] text-[#636363]">Whether you&apos;re a government, a developer, a guarantor, or an investor — the conversation starts here.</p>
        <Link href="/contact" className="mt-[18px] inline-block rounded-full bg-[#e8611a] px-4 py-[10px] text-[14px] leading-5 text-white">Start a Conversation</Link>
        <div className="mt-[18px] grid grid-cols-2 gap-x-6 gap-y-[30px]">
          {footerGroups.map((group) => (
            <div key={group.title} className="w-[163px]">
              <h3 className="text-[12px] font-semibold uppercase tracking-[.6px] text-[#636363]">{group.title}</h3>
              <ul className="mt-[14px] space-y-[14px]">
                {group.links.map(([label, href]) => <li key={href}><Link href={href} className="text-[13px] text-[#0d1b3e]">{label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="relative mt-7 h-[172px] overflow-hidden bg-[radial-gradient(#aeb9bf_1px,transparent_1px)] bg-[length:5px_5px] opacity-80">
          <div className="absolute left-[8%] top-[24%] h-20 w-36 rounded-[48%_52%_55%_45%] bg-white" />
          <div className="absolute left-[55%] top-[22%] h-28 w-52 rounded-[45%_55%_40%_60%] bg-white" />
          <span className="absolute left-[58%] top-[47%] size-3 rounded-full bg-[#122745] ring-4 ring-white" />
          <span className="absolute left-[75%] top-[54%] size-3 rounded-full bg-[#122745] ring-4 ring-white" />
        </div>
        <div className="mt-0 text-center text-[13px] leading-5 text-[#191b1f]"><b className="uppercase text-[#122745]">India</b><p className="mt-4">Ph : (+1) 631-366-7600<br />info@ruralenhancers.com</p></div>
        <div className="mt-8 text-center text-[13px] leading-5"><p className="font-bold text-[#191b1f]">Privacy Policy&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;ISMS Policy</p><p className="mt-[14px] text-[#696e71]">© 2026 REL Capital, a Rural Enhancers Group company</p></div>
      </div>
      <div className="mx-auto hidden max-w-[1120px] gap-7 px-5 py-14 sm:grid sm:grid-cols-[583px_448px] sm:gap-[89px] sm:px-0 sm:py-[100px]">
        <div>
          <Link href="/" aria-label="Rural Enhancers home" className="inline-block">
            <Image src={logo} alt="Rural Enhancers" className="h-[51px] w-[249px] object-contain" />
          </Link>
            <div>
            <Image src={FooterImg} alt="Map" className="h-[281px] w-[572px] object-contain" />
            </div>
          {/* <div className="relative mt-7 h-[172px] max-w-[350px] overflow-hidden bg-[radial-gradient(#aeb9bf_1px,transparent_1px)] bg-[length:5px_5px] opacity-80 sm:mt-10 sm:h-[281px] sm:max-w-[572px]">
            <div className="absolute left-[8%] top-[24%] h-20 w-36 rounded-[48%_52%_55%_45%] bg-white" />
            <div className="absolute left-[35%] top-[7%] h-24 w-24 rounded-[60%_40%_55%_45%] bg-white" />
            <div className="absolute left-[55%] top-[22%] h-28 w-52 rounded-[45%_55%_40%_60%] bg-white" />
            <div className="absolute bottom-[-10%] left-[34%] h-28 w-20 rounded-[50%_45%_60%_40%] bg-white" />
            <span className="absolute left-[58%] top-[47%] size-4 rounded-full bg-[#112a4b] ring-8 ring-white" />
            <span className="absolute left-[75%] top-[54%] size-4 rounded-full bg-[#112a4b] ring-8 ring-white" />
          </div> */}

          {/* <div className="mt-5 flex gap-7 text-xl font-bold text-[#1e252d]" aria-label="Social media">
            <a href="#linkedin" aria-label="LinkedIn">in</a>
            <a href="#behance" aria-label="Behance">Bē</a>
            <a href="#instagram" aria-label="Instagram">◎</a>
            <a href="#facebook" aria-label="Facebook">f</a>
          </div> */}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-base font-semibold text-[#1e252d]">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span aria-hidden="true">|</span>
            <Link href="/isms-policy">ISMS Policy</Link>
          </div>
          <p className="mt-8 max-w-xs text-lg leading-7 text-slate-500">© 2026 REL Capital, A Rural Enhancers Group Company</p>
        </div>

        <div>
          <h2 className="max-w-[448px] text-[32px] font-medium leading-[1.1] tracking-tight sm:text-[54.9px] sm:leading-[64.4px]">Let&apos;s structure your next project.</h2>
          <p className="mt-7 max-w-xl text-lg leading-7 text-neutral-600">
            Whether you&apos;re a government, a developer, a guarantor, or an investor — the conversation starts here.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded-full bg-[#f56619] px-6 py-3.5 text-lg font-medium text-white transition-colors hover:bg-[#d9510d]">
            Start a Conversation
          </Link>

          <div className="mt-10 grid grid-cols-2 gap-7 sm:grid-cols-3 sm:gap-[50px]">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-500">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={href}><Link href={href} className="text-lg transition-colors hover:text-[#f56619]">{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
