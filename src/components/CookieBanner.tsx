"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie_accepted");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie_accepted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 shadow-xl">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-300 text-center sm:text-left">
          Diese Website verwendet ausschließlich technisch notwendige Cookies. Kein Tracking, kein Google Analytics.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/datenschutz"
            className="text-sm text-slate-400 hover:text-white underline transition-colors whitespace-nowrap"
          >
            Datenschutz
          </Link>
          <button
            onClick={accept}
            className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
}
