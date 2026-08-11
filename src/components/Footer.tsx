import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/LOGO.png";

const footerGroups = [
  { title: "Company", links: [["About", "/about"], ["How We Work", "/how-we-work"], ["Sectors", "/sectors"], ["Solutions", "/solutions"]] },
  { title: "Engage", links: [["Track Record", "/track-record"], ["Partners", "/partners"], ["Contact", "/contact"], ["Insights", "/insights"]] },
  { title: "Audiences", links: [["For Borrowers", "/borrowers"], ["For Guarantors", "/guarantors"], ["For Investors", "/investors"], ["Group: Rural Enhancers", "/group"]] },
] as const;

export function Footer() {
  return (
    <footer className="bg-white text-[#112a4b]">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-6 py-20 lg:grid-cols-[1.35fr_1fr] lg:px-12 lg:py-28">
        <div>
          <Link href="/" aria-label="Rural Enhancers home" className="inline-block">
            <Image src={logo} alt="Rural Enhancers" className="h-16 w-52 object-contain" />
          </Link>

          <div className="relative mt-12 h-52 max-w-2xl overflow-hidden bg-[radial-gradient(#aeb9bf_1px,transparent_1px)] bg-[length:5px_5px] opacity-80 sm:h-64">
            <div className="absolute left-[8%] top-[24%] h-20 w-36 rounded-[48%_52%_55%_45%] bg-white" />
            <div className="absolute left-[35%] top-[7%] h-24 w-24 rounded-[60%_40%_55%_45%] bg-white" />
            <div className="absolute left-[55%] top-[22%] h-28 w-52 rounded-[45%_55%_40%_60%] bg-white" />
            <div className="absolute bottom-[-10%] left-[34%] h-28 w-20 rounded-[50%_45%_60%_40%] bg-white" />
            <span className="absolute left-[58%] top-[47%] size-4 rounded-full bg-[#112a4b] ring-8 ring-white" />
            <span className="absolute left-[75%] top-[54%] size-4 rounded-full bg-[#112a4b] ring-8 ring-white" />
          </div>

          <div className="mt-7 flex gap-7 text-2xl font-bold text-[#1e252d]" aria-label="Social media">
            <a href="#linkedin" aria-label="LinkedIn">in</a>
            <a href="#behance" aria-label="Behance">Bē</a>
            <a href="#instagram" aria-label="Instagram">◎</a>
            <a href="#facebook" aria-label="Facebook">f</a>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-base font-semibold text-[#1e252d]">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span aria-hidden="true">|</span>
            <Link href="/isms-policy">ISMS Policy</Link>
          </div>
          <p className="mt-8 max-w-xs text-lg leading-7 text-slate-500">© 2026 REL Capital, A Rural Enhancers Group Company</p>
        </div>

        <div>
          <h2 className="max-w-xl text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl">Let&apos;s structure your next project.</h2>
          <p className="mt-7 max-w-xl text-lg leading-7 text-neutral-600">
            Whether you&apos;re a government, a developer, a guarantor, or an investor — the conversation starts here.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded-full bg-[#f56619] px-6 py-3.5 text-lg font-medium text-white transition-colors hover:bg-[#d9510d]">
            Start a Conversation
          </Link>

          <div className="mt-10 grid gap-9 sm:grid-cols-3">
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
