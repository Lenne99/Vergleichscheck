"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem("cookie_accepted");
      if (!accepted) setVisible(true);
    } catch {
      // localStorage not available (SSR or privacy mode)
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem("cookie_accepted", "true");
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center gap-3 text-sm">
        <p className="text-slate-300 flex-1 text-center sm:text-left">
          Diese Website verwendet ausschließlich technisch notwendige Cookies. Kein Tracking, kein Google Analytics.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/datenschutz"
            className="text-slate-400 hover:text-white transition-colors text-xs underline whitespace-nowrap"
          >
            Datenschutz
          </Link>
          <button
            onClick={accept}
            className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
}
