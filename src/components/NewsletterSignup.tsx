"use client";

import { useState } from "react";
import Link from "next/link";

type Variant = "homepage" | "article" | "footer";

export default function NewsletterSignup({ variant = "article" }: { variant?: Variant }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.status === 201) setStatus("success");
      else if (res.status === 200) setStatus("duplicate");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (variant === "footer") {
    return (
      <div className="border-t border-slate-800 pt-10 mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-sm mb-1">📬 Neue Vergleiche per E-Mail</p>
            <p className="text-slate-400 text-xs">Kein Spam · Jederzeit abmeldbar · DSGVO-konform</p>
          </div>
          {status === "success" ? (
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <span className="w-5 h-5 bg-emerald-400/20 rounded-full flex items-center justify-center text-xs">✓</span>
              Erfolgreich angemeldet!
            </div>
          ) : status === "duplicate" ? (
            <p className="text-slate-400 text-sm">Diese E-Mail ist bereits registriert.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                className="flex-1 md:w-56 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-60"
              >
                {status === "loading" ? "..." : "Anmelden"}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  if (variant === "homepage") {
    return (
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-4xl mb-4">📬</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Neue Vergleiche direkt ins Postfach
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Einmal pro Woche: neue Tool-Vergleiche, Preisänderungen und 1 praktischer Tipp für dein Solo-Business.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-300 mb-8">
              <span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Neue Vergleiche als Erster</span>
              <span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Sofort informiert bei Preisänderungen</span>
              <span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> 1 Tool-Tipp pro Woche</span>
            </div>

            {status === "success" ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl px-8 py-6">
                <div className="text-3xl mb-2">🎉</div>
                <p className="text-emerald-400 font-semibold text-lg">Erfolgreich angemeldet!</p>
                <p className="text-slate-400 text-sm mt-1">Du erhältst ab jetzt neue Vergleiche direkt per E-Mail.</p>
              </div>
            ) : status === "duplicate" ? (
              <div className="bg-slate-800 rounded-2xl px-8 py-6">
                <p className="text-slate-300 font-semibold">Diese E-Mail ist bereits angemeldet.</p>
                <p className="text-slate-500 text-sm mt-1">Du bekommst bereits alle Updates von uns.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.de"
                  className="flex-1 px-5 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="shrink-0 px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all text-sm shadow-lg shadow-green-600/20 disabled:opacity-60"
                >
                  {status === "loading" ? "Wird angemeldet…" : "Kostenlos anmelden →"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-3">Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>
            )}
            <p className="text-slate-600 text-xs mt-4">
              Kein Spam · Jederzeit abmeldbar ·{" "}
              <Link href="/datenschutz" className="underline hover:text-slate-400 transition-colors">
                Datenschutzerklärung
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
  }

  // article variant (default)
  return (
    <section>
      <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 rounded-2xl p-8 md:p-10">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-3xl mb-3">📬</div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Dieser Vergleich war hilfreich?
          </h2>
          <p className="text-slate-500 text-sm mb-5 leading-relaxed">
            Neue Vergleiche, Preisänderungen & 1 Tool-Tipp pro Woche — direkt in dein Postfach.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-xs text-slate-500 mb-6">
            <span className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✓</span> Neue Vergleiche als Erster</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✓</span> Preisänderungen sofort erfahren</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✓</span> 1 praktischer Tipp pro Woche</span>
          </div>

          {status === "success" ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-6 py-4">
              <p className="text-emerald-700 font-semibold">✓ Erfolgreich angemeldet!</p>
              <p className="text-emerald-600 text-sm mt-1">Du bekommst neue Vergleiche direkt per E-Mail.</p>
            </div>
          ) : status === "duplicate" ? (
            <div className="bg-slate-100 rounded-xl px-6 py-4">
              <p className="text-slate-600 font-semibold">Diese E-Mail ist bereits angemeldet.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-green-600/15 disabled:opacity-60"
              >
                {status === "loading" ? "…" : "Anmelden →"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="text-red-500 text-xs mt-2">Fehler beim Anmelden. Bitte versuche es erneut.</p>
          )}
          <p className="text-slate-400 text-xs mt-3">
            Kein Spam · Jederzeit abmeldbar ·{" "}
            <Link href="/datenschutz" className="underline hover:text-slate-500 transition-colors">
              Datenschutz
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
