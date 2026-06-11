"use client";
import { useState } from "react";
import Link from "next/link";

const nav = [
  { label: "Buchhaltung", href: "/buchhaltung/beste-buchhaltungssoftware-selbststaendige" },
  { label: "KI-Tools", href: "#" },
  { label: "Marketing", href: "#" },
  { label: "Produktivität", href: "#" },
  { label: "Website", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h4v8H2V4zm5-2h4v10H7V2zm5 4h2v6h-2V6z" fill="white"/>
              </svg>
            </div>
            <span className="font-bold text-slate-900 text-lg tracking-tight">
              vergleichs<span className="text-blue-600">check</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige"
              className="hidden sm:inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Vergleich starten
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Menü"
            >
              {open ? (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l8 8M14 6l-8 8"/></svg>
              ) : (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h14M3 10h14M3 14h14"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-slate-100 py-3 space-y-1 pb-4">
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
          </div>
        )}
      </div>
    </header>
  );
}
