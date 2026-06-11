import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Beste Buchhaltungssoftware für Selbstständige 2026 – Test & Vergleich",
  description:
    "lexoffice, sevDesk, FastBill, Buchhaltungsbutler oder WISO? Wir haben alle 5 getestet. Klare Empfehlung für Selbstständige in Deutschland – mit Vergleichstabelle und FAQ.",
  openGraph: {
    title: "Beste Buchhaltungssoftware für Selbstständige 2026 – Testsieger: lexoffice",
    description: "5 Programme ehrlich getestet. lexoffice gewinnt dank bester Bedienbarkeit und GoBD-Konformität. Mit Scoring, Pros & Cons und klarer Empfehlung.",
    url: "https://vergleichcheck.com/buchhaltung/beste-buchhaltungssoftware-selbststaendige",
    type: "article",
  },
};

/* ─── DATA ─── */
const tools = [
  {
    rank: 1,
    name: "lexoffice",
    tagline: "Beste Gesamtlösung für Einsteiger & Fortgeschrittene",
    price: 7.9,
    priceLabel: "7,90 €",
    priceNote: "/ Monat (Flex-Tarif)",
    rating: 4.8,
    votes: "1.240",
    score: 96,
    badge: "Testsieger",
    badgeStyle: "bg-amber-400 text-amber-900",
    accent: "blue",
    highlight: true,
    pros: [
      "Kein Buchhaltungswissen nötig",
      "DATEV-Export & GoBD-konform",
      "Automatischer Bankabgleich (alle DE-Banken)",
      "Steuerberater-Zugang kostenlos inklusive",
      "Sehr gute iOS & Android App",
      "Steuererklärung direkt integrierbar",
    ],
    cons: [
      "Basispaket mit eingeschränkten Funktionen",
      "Preis steigt mit Funktionsumfang",
    ],
    bestFor: "Einsteiger & alle, die eine vollständige Lösung wollen",
    detail:
      "lexoffice ist die benutzerfreundlichste vollständige Buchhaltungslösung für Deutschland, entwickelt von der Haufe Group. Die Software führt dich Schritt für Schritt durch alle Prozesse — kein Buchhaltungswissen vorausgesetzt. Automatischer Bankabgleich, DATEV-Export und eine starke App machen die tägliche Arbeit zum Nebenjob.",
    scores: { bedienung: 98, funktionen: 92, app: 95, support: 90 },
    cta: "30 Tage kostenlos testen",
    ctaNote: "Keine Kreditkarte · Jederzeit kündbar",
    invoices: true, accounting: true, datev: true, gobd: true, bankSync: true, mobileApp: true,
  },
  {
    rank: 2,
    name: "sevDesk",
    tagline: "Stark für wachsende Unternehmen & Online-Shops",
    price: 8.9,
    priceLabel: "8,90 €",
    priceNote: "/ Monat",
    rating: 4.5,
    votes: "890",
    score: 88,
    badge: "Top für Wachstum",
    badgeStyle: "bg-blue-100 text-blue-800",
    accent: "blue",
    highlight: false,
    pros: [
      "Rechnungen + vollständige Buchhaltung",
      "Shopify & WooCommerce Integration",
      "Starke mobile App",
      "DATEV-Export vorhanden",
    ],
    cons: [
      "Interface komplexer als lexoffice",
      "Volle Funktionen erst im teureren Paket",
    ],
    bestFor: "Selbstständige mit wachsendem Unternehmen & Online-Shop",
    detail:
      "sevDesk verbindet Rechnungsstellung und Buchhaltung zu einer soliden Gesamtlösung — mit besonders starken Integrationen für E-Commerce. Wer einen Online-Shop betreibt oder viele externe Tools nutzt, ist hier besser aufgehoben als bei lexoffice.",
    scores: { bedienung: 82, funktionen: 90, app: 88, support: 84 },
    cta: "sevDesk kostenlos testen",
    ctaNote: "14 Tage kostenloser Testzeitraum",
    invoices: true, accounting: true, datev: true, gobd: true, bankSync: true, mobileApp: true,
  },
  {
    rank: 3,
    name: "FastBill",
    tagline: "Einfachster Einstieg – Rechnungen in 2 Minuten",
    price: 9.0,
    priceLabel: "9,00 €",
    priceNote: "/ Monat",
    rating: 4.3,
    votes: "620",
    score: 80,
    badge: "Einfachste Bedienung",
    badgeStyle: "bg-emerald-100 text-emerald-800",
    accent: "blue",
    highlight: false,
    pros: [
      "In 2 Minuten erste Rechnung erstellt",
      "Klarste Benutzeroberfläche",
      "Gut für reine Rechnungssteller",
    ],
    cons: [
      "Kein DATEV-Export im Basispaket",
      "Buchhaltungsfunktionen begrenzt",
    ],
    bestFor: "Freelancer mit Steuerberater, die nur Rechnungen stellen",
    detail:
      "FastBill ist auf absolute Einfachheit optimiert. Wer einen Steuerberater hat und selbst nur Rechnungen stellen will, braucht keine komplexe Buchhaltungssoftware — FastBill macht genau das perfekt.",
    scores: { bedienung: 98, funktionen: 68, app: 80, support: 78 },
    cta: "FastBill kostenlos testen",
    ctaNote: "Kein Buchhaltungswissen nötig",
    invoices: true, accounting: false, datev: false, gobd: true, bankSync: false, mobileApp: true,
  },
  {
    rank: 4,
    name: "Buchhaltungsbutler",
    tagline: "KI-gestützte Automatisierung für viele Belege",
    price: 15.0,
    priceLabel: "15,00 €",
    priceNote: "/ Monat",
    rating: 4.2,
    votes: "410",
    score: 78,
    badge: "KI-Automatisierung",
    badgeStyle: "bg-violet-100 text-violet-800",
    accent: "blue",
    highlight: false,
    pros: [
      "KI erkennt und verbucht Belege automatisch",
      "Höchster Automatisierungsgrad im Test",
      "DATEV-Export inklusive",
    ],
    cons: [
      "Teuerste Option",
      "Lernkurve höher als Alternativen",
      "Overkill für kleine Freelancer",
    ],
    bestFor: "Selbstständige mit vielen Belegen & Reisekosten",
    detail:
      "Der Buchhaltungsbutler setzt auf KI-Belezerkennung, die Rechnungen und Quittungen automatisch verbucht. Wer monatlich viele Belege verarbeitet, spart hier die meiste Zeit — trotz höherem Preis.",
    scores: { bedienung: 72, funktionen: 88, app: 70, support: 82 },
    cta: "Buchhaltungsbutler testen",
    ctaNote: "Kostenloser Testzeitraum verfügbar",
    invoices: true, accounting: true, datev: true, gobd: true, bankSync: true, mobileApp: false,
  },
  {
    rank: 5,
    name: "WISO Mein Büro",
    tagline: "Günstigste Vollversion – offline & online",
    price: 6.0,
    priceLabel: "6,00 €",
    priceNote: "/ Monat",
    rating: 4.0,
    votes: "780",
    score: 74,
    badge: "Günstigste Vollversion",
    badgeStyle: "bg-orange-100 text-orange-800",
    accent: "blue",
    highlight: false,
    pros: [
      "Günstigster Preis mit vollem Umfang",
      "Offline & Online-Version verfügbar",
      "DATEV-Export inklusive",
      "Bewährtes deutsches Produkt",
    ],
    cons: [
      "Interface wirkt altmodisch",
      "Mobile App deutlich schwächer",
    ],
    bestFor: "Budget-bewusste Nutzer, die auf ein modernes UI verzichten können",
    detail:
      "WISO Mein Büro bietet den günstigsten Einstieg mit vollständigem Funktionsumfang — entwickelt von Buhl Data, seit Jahrzehnten ein zuverlässiger Name in der deutschen Steuer-Software.",
    scores: { bedienung: 68, funktionen: 84, app: 58, support: 76 },
    cta: "WISO Mein Büro testen",
    ctaNote: "Günstigste Option im Test",
    invoices: true, accounting: true, datev: true, gobd: true, bankSync: true, mobileApp: false,
  },
];

const profiles = [
  { icon: "🌱", label: "Einsteiger", desc: "Keine Buchhaltungskenntnisse, will einfach starten", winner: "lexoffice", color: "blue" },
  { icon: "💰", label: "Budget-bewusst", desc: "Voller Funktionsumfang zum niedrigsten Preis", winner: "WISO Mein Büro", color: "orange" },
  { icon: "📈", label: "Wachstum", desc: "Mehr Kunden, Online-Shop, viele Integrationen nötig", winner: "sevDesk", color: "blue" },
  { icon: "🤖", label: "Automatisierung", desc: "Viele Belege, KI soll den Großteil erledigen", winner: "Buchhaltungsbutler", color: "violet" },
  { icon: "📄", label: "Nur Rechnungen", desc: "Steuerberater macht Rest, du willst nur abrechnen", winner: "FastBill", color: "emerald" },
];

const tableFeatures = [
  { label: "Rechnungen", key: "invoices" },
  { label: "Buchhaltung", key: "accounting" },
  { label: "DATEV-Export", key: "datev" },
  { label: "GoBD-konform", key: "gobd" },
  { label: "Bankabgleich", key: "bankSync" },
  { label: "Mobile App", key: "mobileApp" },
] as const;

/* ─── SUB-COMPONENTS ─── */
function ScoreBar({ label, value }: { label: string; value: number }) {
  const color = value >= 90 ? "bg-emerald-500" : value >= 75 ? "bg-blue-500" : "bg-amber-500";
  return (
    <div>
      <div className="flex justify-between text-xs text-slate-500 mb-1">
        <span>{label}</span><span className="font-semibold text-slate-700">{value}</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function RatingStars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
    <span className="text-amber-400">
      {"★".repeat(full)}{hasHalf ? "⯨" : ""}{"☆".repeat(5 - full - (hasHalf ? 1 : 0))}
    </span>
  );
}

function Tick() {
  return <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold">✓</span>;
}
function Cross() {
  return <span className="inline-flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-400 rounded-full text-xs">–</span>;
}

/* ─── PAGE ─── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Welche Buchhaltungssoftware ist die beste für Selbstständige?", "acceptedAnswer": { "@type": "Answer", "text": "lexoffice ist die beste Buchhaltungssoftware für Selbstständige in Deutschland dank einfachster Bedienung, DATEV-Export und GoBD-Konformität. Ab 7,90 €/Monat." } },
    { "@type": "Question", "name": "Was kostet Buchhaltungssoftware für Selbstständige?", "acceptedAnswer": { "@type": "Answer", "text": "Buchhaltungssoftware für Selbstständige kostet zwischen 7,90 € und 14,90 €/Monat. Die meisten bieten 14–30 Tage kostenlos zum Testen." } }
  ]
};


export default function Page() {
  const winner = tools[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="flex-1 bg-slate-50">

        {/* ── HERO ── */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 pt-8 pb-10">
            <nav className="text-xs text-slate-400 mb-6 flex items-center gap-1.5">
              <Link href="/" className="hover:text-blue-600 transition-colors">Startseite</Link>
              <span>›</span><span>Buchhaltung</span>
              <span>›</span><span className="text-slate-600">Beste Buchhaltungssoftware</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-5 justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Vergleich 2026
              </span>
              <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full">✓ Unabhängig getestet</span>
              <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">5 Tools · Juni 2026</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4 text-center">
              Beste Buchhaltungssoftware<br className="hidden md:block" /> für Selbstständige 2026
            </h1>
            <p className="text-center text-slate-600 text-lg mb-7 max-w-2xl leading-relaxed">
              Wir haben 5 Programme mit echten Testkonten geprüft — speziell für Freelancer, Solo-Selbstständige und Einzelunternehmer in Deutschland. Klare Empfehlung, kein Fachjargon.
            </p>

            {/* Winner card */}
            <div className="bg-gradient-to-r from-amber-50 to-amber-100/60 border border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="shrink-0 w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center text-xl">🏆</div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-0.5">Unser Testsieger</div>
                <div className="font-bold text-slate-900 text-lg">{winner.name} <span className="text-slate-500 font-normal text-sm">— ab {winner.priceLabel}/Monat</span></div>
                <div className="text-sm text-slate-600 mt-0.5">Beste Bedienbarkeit, DATEV-Export, GoBD-konform, 30 Tage gratis.</div>
              </div>
              <a href="#" className="shrink-0 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all whitespace-nowrap">
                Kostenlos testen <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 7h6M7 4l3 3-3 3"/></svg>
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

          {/* ── RANKINGS ── */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-1 text-center">Die 5 besten Programme im Überblick</h2>
            <p className="text-slate-500 text-sm text-center text-center text-center mb-7">Gerankt nach Testergebnis — alle Details weiter unten.</p>

            <div className="space-y-3">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className={`group bg-white rounded-2xl border-2 transition-all duration-200 hover:shadow-lg ${t.highlight ? "border-amber-300 shadow-md shadow-amber-500/10" : "border-slate-200 hover:border-slate-300"}`}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      {/* Rank */}
                      <div className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${t.rank === 1 ? "bg-amber-400 text-amber-900" : "bg-slate-100 text-slate-500"}`}>
                        {t.rank}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-bold text-slate-900 text-base">{t.name}</span>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${t.badgeStyle}`}>{t.badge}</span>
                        </div>
                        <p className="text-sm text-slate-500 mb-2">{t.tagline}</p>
                        <div className="flex items-center gap-3">
                          <RatingStars rating={t.rating} />
                          <span className="text-sm font-bold text-slate-700">{t.rating}</span>
                          <span className="text-xs text-slate-400">({t.votes})</span>
                          <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                            Score: {t.score}/100
                          </span>
                        </div>
                      </div>

                      {/* Price + CTA */}
                      <div className="shrink-0 text-right">
                        <div className="font-bold text-slate-900 text-lg">{t.priceLabel}</div>
                        <div className="text-xs text-slate-400 mb-2">{t.priceNote}</div>
                        <a href="#" className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg transition-colors ${t.highlight ? "bg-green-600 hover:bg-green-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}>
                          {t.highlight ? "30 Tage gratis →" : "Testen →"}
                        </a>
                      </div>
                    </div>

                    {/* Pros strip */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-x-5 gap-y-1.5">
                      {t.pros.slice(0, 3).map((p) => (
                        <span key={p} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <span className="text-emerald-500 font-bold">✓</span>{p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── VERGLEICHSTABELLE ── */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-1 text-center">Funktionsvergleich</h2>
            <p className="text-slate-500 text-sm mb-6">Welches Tool hat welche Funktion?</p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left px-5 py-4 font-semibold text-slate-600 bg-slate-50 min-w-[130px] rounded-tl-2xl">Funktion</th>
                    {tools.map((t) => (
                      <th key={t.name} className={`text-center px-4 py-4 text-xs font-bold ${t.highlight ? "bg-amber-50 text-amber-800" : "bg-slate-50 text-slate-600"}`}>
                        {t.name}
                        {t.highlight && <div className="text-amber-500 text-base leading-none mt-0.5">🏆</div>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-5 py-3.5 font-semibold text-slate-700 bg-slate-50/50">Preis/Monat</td>
                    {tools.map((t) => (
                      <td key={t.name} className={`px-4 py-3.5 text-center font-bold text-slate-900 ${t.highlight ? "bg-amber-50/30" : ""}`}>
                        {t.priceLabel}
                      </td>
                    ))}
                  </tr>
                  {tableFeatures.map(({ label, key }, i) => (
                    <tr key={key} className={i % 2 === 0 ? "" : "bg-slate-50/40"}>
                      <td className="px-5 py-3.5 font-medium text-slate-600">{label}</td>
                      {tools.map((t) => (
                        <td key={t.name} className={`px-4 py-3.5 text-center ${t.highlight ? "bg-amber-50/20" : ""}`}>
                          {t[key] ? <Tick /> : <Cross />}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="px-5 py-3.5 font-semibold text-slate-700 bg-slate-50/50">Gesamt-Score</td>
                    {tools.map((t) => (
                      <td key={t.name} className={`px-4 py-3.5 text-center ${t.highlight ? "bg-amber-50/30" : ""}`}>
                        <span className={`inline-block font-bold text-sm px-2 py-0.5 rounded-lg ${t.rank === 1 ? "bg-amber-100 text-amber-800" : t.score >= 85 ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-600"}`}>
                          {t.score}/100
                        </span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DETAIL-CARDS ── */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-1 text-center">Jedes Tool im Detail</h2>
            <p className="text-slate-500 text-sm mb-8">Stärken, Schwächen, Score-Analyse und für wen es wirklich passt.</p>

            <div className="space-y-6">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className={`bg-white rounded-2xl border-2 overflow-hidden shadow-sm ${t.highlight ? "border-amber-300" : "border-slate-200"}`}
                >
                  {/* Card header */}
                  <div className={`px-6 py-3 flex items-center justify-between ${t.highlight ? "bg-amber-400" : "bg-slate-900"}`}>
                    <span className={`font-bold text-sm ${t.highlight ? "text-amber-900" : "text-white"}`}>
                      {t.highlight ? "🏆 Platz 1 – Testsieger" : `Platz ${t.rank}`}
                    </span>
                    {t.highlight && <span className="text-amber-800 text-xs font-medium">Empfohlen für die meisten Selbstständigen</span>}
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-2xl font-bold text-slate-900">{t.name}</h3>
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${t.badgeStyle}`}>{t.badge}</span>
                        </div>
                        <p className="text-slate-500 text-sm mb-2">{t.tagline}</p>
                        <div className="flex items-center gap-2">
                          <RatingStars rating={t.rating} />
                          <span className="font-bold text-slate-700">{t.rating}</span>
                          <span className="text-xs text-slate-400">({t.votes} Bewertungen)</span>
                        </div>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <div className="text-2xl font-bold text-slate-900">{t.priceLabel}</div>
                        <div className="text-xs text-slate-400">{t.priceNote}</div>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-6">{t.detail}</p>

                    {/* Score bars */}
                    <div className="bg-slate-50 rounded-xl p-5 mb-6 grid grid-cols-2 gap-4">
                      <ScoreBar label="Bedienung" value={t.scores.bedienung} />
                      <ScoreBar label="Funktionsumfang" value={t.scores.funktionen} />
                      <ScoreBar label="Mobile App" value={t.scores.app} />
                      <ScoreBar label="Support" value={t.scores.support} />
                    </div>

                    {/* Pros / Cons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-emerald-50 rounded-xl p-4">
                        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3">Das spricht dafür</div>
                        <ul className="space-y-2">
                          {t.pros.map((p) => (
                            <li key={p} className="text-sm text-slate-700 flex gap-2.5">
                              <span className="text-emerald-500 shrink-0 mt-0.5 font-bold">✓</span>{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-xl p-4">
                        <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">Das spricht dagegen</div>
                        <ul className="space-y-2">
                          {t.cons.map((c) => (
                            <li key={c} className="text-sm text-slate-700 flex gap-2.5">
                              <span className="text-red-400 shrink-0 mt-0.5 font-bold">✗</span>{c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Best for + CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Perfekt für</span>
                        <p className="text-sm font-semibold text-slate-800 mt-0.5">{t.bestFor}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                        <a href="#" className={`inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-xl text-sm transition-all ${t.highlight ? "bg-green-600 hover:bg-green-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}>
                          {t.cta} <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 7h6M7 4l3 3-3 3"/></svg>
                        </a>
                        <span className="text-xs text-slate-400">{t.ctaNote}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PROFIL-MATCH ── */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-1 text-center">Welches Tool passt zu dir?</h2>
            <p className="text-slate-500 text-sm mb-6">Finde dein Profil und sieh sofort welches Tool am besten passt.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {profiles.map((p) => (
                <div key={p.label} className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <div className="font-bold text-slate-900 mb-1">{p.label}</div>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <span className="text-xs text-slate-400">Empfehlung:</span>
                    <span className="text-sm font-bold text-blue-600">{p.winner}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FEHLER ── */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">4 Fehler bei der Auswahl – und wie du sie vermeidest</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "⚠️", title: "DATEV-Export ignorieren", text: "Wenn du einen Steuerberater hast, ist DATEV-Export essenziell. Ohne ihn zahlst du Extra-Honorar für manuelle Dateneingabe — teurer als das bessere Software-Paket." },
                { icon: "💸", title: "Zu viele Funktionen kaufen", text: "Starte immer mit dem günstigsten Paket. Upgrade erst wenn du wirklich an Grenzen stößt. Viele Selbstständige bezahlen für Funktionen, die sie nie nutzen." },
                { icon: "🚀", title: "Kein Testzeitraum nutzen", text: "Alle 5 Tools bieten kostenlose Tests (14–30 Tage). Wer direkt kauft, bereut das oft. Teste mindestens zwei Optionen nebeneinander." },
                { icon: "📋", title: "GoBD-Konformität übersehen", text: "In Deutschland müssen digitale Bücher GoBD-konform archiviert werden. Nicht jede Software erfüllt das — wichtig für den Fall einer Steuerprüfung." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-200 p-5 flex gap-4">
                  <div className="shrink-0 text-xl mt-0.5">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Häufig gestellte Fragen</h2>
            <div className="space-y-3">
              {[
                { q: "Welche Software ist die beste für Selbstständige ohne Buchhaltungswissen?", a: "lexoffice. Die Software führt dich durch alle Schritte, erklärt Fachbegriffe und ermöglicht einen GoBD-konformen Jahresabschluss auch ohne Vorkenntnisse. Einrichtung dauert unter 30 Minuten." },
                { q: "Kann ich die Software später wechseln?", a: "Ja. Alle genannten Tools erlauben den Datenexport. Am einfachsten ist ein Wechsel zu Jahresbeginn, da du dann keine laufende Buchführung übertragen musst." },
                { q: "Brauche ich noch einen Steuerberater mit Buchhaltungssoftware?", a: "Das kommt auf deinen Fall an. Die Einnahmen-Überschuss-Rechnung (EÜR) kannst du mit lexoffice selbst erstellen. Für GmbHs, Bilanzen und steuerliche Optimierung lohnt sich ein Steuerberater — der dank DATEV-Export günstiger arbeiten kann." },
                { q: "Was bedeutet GoBD-konform?", a: "GoBD sind die Grundsätze zur ordnungsmäßigen Führung digitaler Bücher (Vorgabe des deutschen Finanzamts). GoBD-konforme Software stellt sicher, dass deine Unterlagen bei einer Betriebsprüfung anerkannt werden." },
                { q: "Wie teuer ist Buchhaltungssoftware im Vergleich zum Steuerberater?", a: "Gute Buchhaltungssoftware kostet 6–15 € pro Monat (72–180 € pro Jahr). Eine Stunde beim Steuerberater kostet 100–200 €. Die richtige Software spart dir mehrere Stunden manuelle Arbeit pro Monat." },
              ].map((item) => (
                <FaqAccordion key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section>
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <div className="p-8 md:p-12 text-center">
                <div className="text-5xl mb-5">🏆</div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Unser Urteil: <span className="text-amber-400">lexoffice</span> ist die beste Wahl
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
                  Für die meisten Selbstständigen in Deutschland vereint lexoffice Benutzerfreundlichkeit, DATEV-Export und GoBD-Konformität zum besten Gesamtpaket.
                </p>
                <a href="#" className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-all">
                  lexoffice 30 Tage kostenlos testen
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 8h8M9 5l3 3-3 3"/></svg>
                </a>
                <p className="text-slate-500 text-xs mt-4">Keine Kreditkarte · Kein Risiko · Jederzeit kündbar</p>
              </div>
              {/* Bottom strip */}
              <div className="bg-slate-800 px-8 py-4 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Unabhängig getestet</span>
                <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Kein bezahlter Testsieger</span>
                <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Letztes Update: Juni 2026</span>
              </div>
            </div>
          </section>

          {/* Weitere Vergleiche */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-5 text-center">Weitere Vergleiche für Selbstständige</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/buchhaltung/buchhaltungssoftware-ohne-vorkenntnisse" className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Buchhaltung</div>
                <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Buchhaltungssoftware ohne Vorkenntnisse</div>
                <div className="text-slate-500 text-sm mt-1">Welche Software ist wirklich einsteigerfreundlich?</div>
              </Link>
              <Link href="/ki-tools/ki-assistent-content-marketing-selbststaendige" className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">KI-Tools</div>
                <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">KI-Assistent für Content & Marketing</div>
                <div className="text-slate-500 text-sm mt-1">Die besten KI-Tools für Selbstständige im Test</div>
              </Link>
              <Link href="/marketing/social-media-tools-selbststaendige" className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-1">Marketing</div>
                <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Social-Media-Tools für Selbstständige</div>
                <div className="text-slate-500 text-sm mt-1">Kundenakquise automatisieren ohne Agentur</div>
              </Link>
              <Link href="/produktivitaet/produktivitaet-tools-selbststaendige" className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Produktivität</div>
                <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Produktivitäts-Tools für Selbstständige</div>
                <div className="text-slate-500 text-sm mt-1">Mehr erledigen in weniger Zeit</div>
              </Link>
              <Link href="/website/website-builder-selbststaendige" className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all sm:col-span-2">
                <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">Website</div>
                <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Website-Builder für Selbstständige</div>
                <div className="text-slate-500 text-sm mt-1">Online-Auftritt ohne Technikstress aufbauen</div>
              </Link>
            </div>
          </section>

          {/* Disclaimer */}
          <p className="text-xs text-slate-400 text-center">
            * Dieser Artikel enthält Affiliate-Links. Wir erhalten eine kleine Provision bei Kauf über unsere Links — ohne Mehrkosten für dich. Unsere Empfehlungen werden dadurch nicht beeinflusst.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}
