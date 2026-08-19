"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/LOGO.png";

const navigation = [
  { label: "About", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Sectors", href: "/sectors" },
  { label: "Track Record", href: "/track-record" },
  { label: "Partners", href: "/partners" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[#122745] text-white">
      <div className="mx-auto flex h-[62px] max-w-[1120px] items-center justify-between gap-8 px-5 sm:h-[67px] sm:px-0">
        <Link href="/" aria-label="Rural Enhancers home" className="shrink-0">
          <Image src={logo} alt="Rural Enhancers" priority className="h-[26px] w-[126px] object-contain sm:h-[33px] sm:w-[161px]" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[16px] font-normal transition-colors hover:text-[#f56619] ${
                pathname === item.href ? "text-[#f56619] underline decoration-2 underline-offset-4" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden w-[133px] rounded-full bg-white px-4 py-[10px] text-center text-[15.3px] text-[#122745] lg:block"
        >
          Contact
        </Link>

        <div className="ml-auto flex items-center gap-[14px] lg:hidden">
        <Link href="/contact" className="rounded-full bg-white px-4 py-[10px] text-[14px] leading-[18px] text-[#122745]">Contact</Link>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="p-0 text-2xl"
        >
          <svg viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-[18px] w-6">
            <path d="M0 1h24M0 8h24M8 15h16" />
          </svg>
        </button>
        </div>
      </div>


      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-slate-950/50 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(85vw,380px)] flex-col bg-[#112a4b] px-7 py-7 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/15 pb-6">
          <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Rural Enhancers home">
            <Image src={logo} alt="Rural Enhancers" className="h-12 w-40 object-contain" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="rounded p-2 text-3xl leading-none transition-colors hover:bg-white/10"
          >
            ×
          </button>
        </div>
        <nav className="mt-8 flex flex-col gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-[16px] font-normal transition-colors hover:bg-white/10 ${
                pathname === item.href ? "bg-white/10 text-[#f56619]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="mt-8 rounded-full bg-white px-7 py-3 text-center text-[16px] font-normal text-[#112a4b]"
        >
          Contact
        </Link>
      </aside>
    </header>
  );
}
