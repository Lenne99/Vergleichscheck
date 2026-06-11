"use client";
import { useState } from "react";
import Link from "next/link";

const nav = [
  { label: "Buchhaltung", href: "/buchhaltung/beste-buchhaltungssoftware-selbststaendige" },
  { label: "KI-Tools", href: "/ki-tools/ki-assistent-content-marketing-selbststaendige" },
  { label: "Marketing", href: "#" },
  { label: "Produktivität", href: "#" },
  { label: "Website", href: "#" },
];

function Logo({ dark = false }: { dark?: boolean }) {
  const text1 = dark ? "text-slate-100" : "text-slate-900";
  const text2 = dark ? "text-blue-400" : "text-blue-600";
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
      {/* Icon */}
      <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
          <rect x="3" y="14" width="7" height="13" rx="1.5" fill="white" opacity="0.65"/>
          <rect x="13" y="8" width="7" height="19" rx="1.5" fill="white"/>
          <path d="M23 17l2.5 2.5L30 13" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {/* Wordmark */}
      <span className={`font-bold text-[1.1rem] tracking-tight leading-none ${text1}`}>
        vergleichs<span className={text2}>check</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige"
              className="hidden sm:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Vergleich starten
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 7h6M7 4l3 3-3 3"/></svg>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Menü öffnen"
            >
              {open
                ? <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l8 8M14 6l-8 8"/></svg>
                : <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h14M3 10h14M3 14h14"/></svg>
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-slate-100 py-3 space-y-0.5 pb-4">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 px-3">
              <Link
                href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Vergleich starten
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export { Logo };
