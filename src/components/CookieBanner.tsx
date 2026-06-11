"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("vc_cookie_ok")) setVisible(true);
    } catch {
      // localStorage not available (SSR or private mode)
    }
  }, []);

  function accept() {
    try { localStorage.setItem("vc_cookie_ok", "1"); } catch { /* ignore */ }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <span className="text-green-400 text-lg shrink-0 mt-0.5">🔒</span>
          <p className="text-sm text-slate-300 leading-relaxed">
            Diese Website verwendet <strong className="text-white">ausschließlich technisch notwendige Cookies</strong> — kein Tracking, kein Google Analytics.{" "}
            <Link href="/datenschutz" className="text-blue-400 hover:text-blue-300 underline">
              Datenschutzerklärung
            </Link>
          </p>
        </div>
        <button
          onClick={accept}
          className="shrink-0 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors whitespace-nowrap"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
