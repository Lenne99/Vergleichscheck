import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Beste Buchhaltungssoftware für Selbstständige 2025 – Test & Vergleich",
  description:
    "Welche Buchhaltungssoftware ist 2025 die beste für Selbstständige? Wir haben lexoffice, sevDesk, FastBill, Buchhaltungsbutler & WISO Mein Büro getestet. Jetzt Empfehlung lesen.",
};

const tools = [
  {
    rank: 1,
    name: "lexoffice",
    tagline: "Beste Gesamtlösung",
    price: "7,90 €",
    priceNote: "/ Monat (Lexware-Angebot)",
    rating: 4.8,
    votes: 1240,
    badge: "Testsieger",
    badgeColor: "bg-amber-400 text-amber-900",
    highlight: true,
    borderColor: "border-amber-300",
    bgColor: "bg-amber-50",
    trialLabel: "30 Tage kostenlos testen",
    trialColor: "bg-amber-500 hover:bg-amber-600",
    pros: [
      "Kein Buchhaltungswissen nötig",
      "DATEV-Export & GoBD-konform",
      "Automatischer Bankabgleich",
      "Steuerberater-Zugang kostenlos",
      "Sehr gute mobile App",
    ],
    cons: ["Basispaket etwas eingeschränkt", "Preis steigt mit Features"],
    bestFor: "Einsteiger & alle, die eine vollständige Lösung wollen",
    usability: 5,
    invoices: true,
    accounting: true,
    datev: true,
    gobd: true,
    bankSync: true,
    mobileApp: true,
  },
  {
    rank: 2,
    name: "sevDesk",
    tagline: "Stark für wachsende Businesses",
    price: "8,90 €",
    priceNote: "/ Monat",
    rating: 4.5,
    votes: 890,
    badge: "Top für Wachstum",
    badgeColor: "bg-blue-100 text-blue-800",
    highlight: false,
    borderColor: "border-gray-200",
    bgColor: "bg-white",
    trialLabel: "Kostenlos testen",
    trialColor: "bg-blue-600 hover:bg-blue-700",
    pros: [
      "Rechnungen + Buchhaltung kombiniert",
      "Viele Shop-Integrationen",
      "Starke mobile App",
      "DATEV-Export vorhanden",
    ],
    cons: ["Interface komplexer als lexoffice", "Volle Funktionen erst im teureren Paket"],
    bestFor: "Selbstständige mit wachsendem Unternehmen & Online-Shop",
    usability: 4,
    invoices: true,
    accounting: true,
    datev: true,
    gobd: true,
    bankSync: true,
    mobileApp: true,
  },
  {
    rank: 3,
    name: "FastBill",
    tagline: "Einfachster Einstieg",
    price: "9,00 €",
    priceNote: "/ Monat",
    rating: 4.3,
    votes: 620,
    badge: "Einfachste Bedienung",
    badgeColor: "bg-green-100 text-green-800",
    highlight: false,
    borderColor: "border-gray-200",
    bgColor: "bg-white",
    trialLabel: "Kostenlos testen",
    trialColor: "bg-blue-600 hover:bg-blue-700",
    pros: [
      "In 2 Minuten erste Rechnung",
      "Klarste Benutzeroberfläche",
      "Gut für reine Rechnungssteller",
    ],
    cons: ["Kein vollständiger DATEV-Export im Basispaket", "Buchhaltung begrenzt"],
    bestFor: "Freelancer, die nur Rechnungen stellen + Steuerberater haben",
    usability: 5,
    invoices: true,
    accounting: false,
    datev: false,
    gobd: true,
    bankSync: false,
    mobileApp: true,
  },
  {
    rank: 4,
    name: "Buchhaltungsbutler",
    tagline: "Maximale Automatisierung per KI",
    price: "15,00 €",
    priceNote: "/ Monat",
    rating: 4.2,
    votes: 410,
    badge: "KI-gestützt",
    badgeColor: "bg-purple-100 text-purple-800",
    highlight: false,
    borderColor: "border-gray-200",
    bgColor: "bg-white",
    trialLabel: "Kostenlos testen",
    trialColor: "bg-blue-600 hover:bg-blue-700",
    pros: [
      "KI erkennt Belege automatisch",
      "Höchste Automatisierung",
      "DATEV-Export inklusive",
    ],
    cons: ["Teuerste Option", "Lernkurve höher", "Overkill für Kleinst-Freelancer"],
    bestFor: "Selbstständige mit vielen Belegen & Reisekosten",
    usability: 3,
    invoices: true,
    accounting: true,
    datev: true,
    gobd: true,
    bankSync: true,
    mobileApp: false,
  },
  {
    rank: 5,
    name: "WISO Mein Büro",
    tagline: "Günstigste Vollversion",
    price: "6,00 €",
    priceNote: "/ Monat",
    rating: 4.0,
    votes: 780,
    badge: "Bestes Preis-Leistungs-Verhältnis",
    badgeColor: "bg-orange-100 text-orange-800",
    highlight: false,
    borderColor: "border-gray-200",
    bgColor: "bg-white",
    trialLabel: "Kostenlos testen",
    trialColor: "bg-blue-600 hover:bg-blue-700",
    pros: [
      "Günstigster Preis mit vollem Umfang",
      "Offline + Online verfügbar",
      "DATEV-Export inklusive",
      "Bewährtes deutsches Produkt",
    ],
    cons: ["Interface wirkt altmodisch", "Mobile App schwächer", "Weniger modern"],
    bestFor: "Budget-bewusste Nutzer, die auf modernes UI verzichten können",
    usability: 3,
    invoices: true,
    accounting: true,
    datev: true,
    gobd: true,
    bankSync: true,
    mobileApp: false,
  },
];

const Stars = ({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const cls = size === "lg" ? "text-xl" : "text-sm";
  return (
    <span className={`${cls} text-amber-400`}>
      {"★".repeat(full)}
      {half ? "½" : ""}
      {"☆".repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
};

const Check = () => (
  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full text-xs font-bold">✓</span>
);
const Cross = () => (
  <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-400 rounded-full text-xs font-bold">✗</span>
);

export default function BuchhaltungssoftwarePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">

        {/* ── HERO ── */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 pt-8 pb-10">
            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mb-5">
              <a href="/" className="hover:text-blue-600">Startseite</a>
              <span className="mx-1.5">›</span>
              <span>Buchhaltung</span>
              <span className="mx-1.5">›</span>
              <span className="text-gray-800">Beste Buchhaltungssoftware</span>
            </p>

            <div className="flex items-start gap-3 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 mt-1">
                Vergleich 2025
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 mt-1">
                ✓ Unabhängig getestet
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Beste Buchhaltungssoftware für<br className="hidden md:block" /> Selbstständige 2025
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl">
              Wir haben 5 Programme getestet, die speziell für Freelancer, Solo-Selbstständige und Kleinunternehmer in Deutschland geeignet sind. Mit klarer Empfehlung – kein Fachjargon.
            </p>

            {/* Quick winner box */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-3xl">🏆</div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 mb-0.5">Unser Testsieger: lexoffice</div>
                <p className="text-sm text-gray-600">
                  Beste Kombination aus Benutzerfreundlichkeit, Funktionsumfang und Deutschland-Kompatibilität. Perfekt für Einsteiger.
                </p>
              </div>
              <a
                href="#"
                className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap"
              >
                30 Tage kostenlos →
              </a>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-6 text-xs text-gray-300">
            <span>✓ 5 Programme getestet</span>
            <span>✓ Echte Nutzerkonten erstellt</span>
            <span>✓ Keine bezahlten Platzierungen</span>
            <span>✓ Letztes Update: Juni 2025</span>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10 space-y-16">

          {/* ── SCHNELLÜBERSICHT ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Schnellübersicht: Die besten Programme</h2>
            <p className="text-gray-500 text-sm mb-6">Für eine schnelle Entscheidung – alle Details stehen weiter unten.</p>

            <div className="space-y-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className={`rounded-xl border-2 ${tool.highlight ? tool.borderColor : "border-gray-200"} ${tool.bgColor} p-5 transition-shadow hover:shadow-md`}
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Rank + Name */}
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${tool.rank === 1 ? "bg-amber-400 text-amber-900" : "bg-gray-200 text-gray-600"}`}>
                        {tool.rank}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-bold text-lg text-gray-900">{tool.name}</span>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tool.badgeColor}`}>
                            {tool.badge}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{tool.tagline}</p>
                        <div className="flex items-center gap-2">
                          <Stars rating={tool.rating} />
                          <span className="text-sm font-semibold text-gray-700">{tool.rating}</span>
                          <span className="text-xs text-gray-400">({tool.votes} Bewertungen)</span>
                        </div>
                      </div>
                    </div>

                    {/* Price + CTA */}
                    <div className="sm:text-right flex sm:flex-col justify-between sm:justify-start items-center sm:items-end gap-3 shrink-0">
                      <div>
                        <span className="text-xl font-bold text-gray-900">{tool.price}</span>
                        <span className="text-xs text-gray-500 block">{tool.priceNote}</span>
                      </div>
                      <a
                        href="#"
                        className={`${tool.trialColor} text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap`}
                      >
                        {tool.trialLabel} →
                      </a>
                    </div>
                  </div>

                  {/* Pros preview */}
                  <div className="mt-3 pt-3 border-t border-gray-200 flex flex-wrap gap-x-4 gap-y-1">
                    {tool.pros.slice(0, 3).map((pro) => (
                      <span key={pro} className="text-xs text-gray-600">
                        <span className="text-green-500 font-bold">✓</span> {pro}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── VERGLEICHSTABELLE ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Funktionsvergleich im Detail</h2>
            <p className="text-gray-500 text-sm mb-6">Welches Tool hat welche Funktion? Auf einen Blick.</p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 min-w-[140px]">Funktion</th>
                    {tools.map((t) => (
                      <th key={t.name} className={`text-center px-3 py-3 font-semibold text-xs ${t.highlight ? "text-amber-700 bg-amber-50" : "text-gray-700"}`}>
                        {t.name}
                        {t.highlight && <div className="text-amber-500 text-xs">🏆</div>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { label: "Preis/Monat", values: tools.map(t => <span className="font-semibold">{t.price}</span>) },
                    { label: "Rechnungen", values: tools.map(t => t.invoices ? <Check /> : <Cross />) },
                    { label: "Buchhaltung", values: tools.map(t => t.accounting ? <Check /> : <Cross />) },
                    { label: "DATEV-Export", values: tools.map(t => t.datev ? <Check /> : <Cross />) },
                    { label: "GoBD-konform", values: tools.map(t => t.gobd ? <Check /> : <Cross />) },
                    { label: "Bankabgleich", values: tools.map(t => t.bankSync ? <Check /> : <Cross />) },
                    { label: "Mobile App", values: tools.map(t => t.mobileApp ? <Check /> : <Cross />) },
                  ].map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                      <td className="px-4 py-3 font-medium text-gray-700">{row.label}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className={`px-3 py-3 text-center ${tools[j].highlight ? "bg-amber-50/50" : ""}`}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DETAILLIERTE EINZELBESPRECHUNGEN ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Jedes Tool im Detail</h2>
            <p className="text-gray-500 text-sm mb-8">Stärken, Schwächen und für wen es wirklich passt.</p>

            <div className="space-y-8">

              {/* lexoffice */}
              <div className="bg-white rounded-xl border-2 border-amber-300 overflow-hidden shadow-sm">
                <div className="bg-amber-400 px-6 py-2 flex items-center justify-between">
                  <span className="font-bold text-amber-900 text-sm">🏆 Platz 1 – Testsieger</span>
                  <span className="text-amber-900 text-xs font-medium">Empfohlen für die meisten Selbstständigen</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">lexoffice</h3>
                      <div className="flex items-center gap-2">
                        <Stars rating={4.8} size="lg" />
                        <span className="font-bold text-gray-700">4,8</span>
                        <span className="text-xs text-gray-400">(1.240 Bewertungen)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">7,90 €<span className="text-sm font-normal text-gray-500">/Monat</span></div>
                      <div className="text-xs text-gray-500">inkl. 30 Tage Gratis-Test</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-5">
                    lexoffice ist die benutzerfreundlichste vollständige Buchhaltungslösung für Deutschland. Kein Buchhaltungswissen nötig — die Software führt dich durch alle wichtigen Schritte. Entwickelt von der Haufe Group, einem der renommiertesten deutschen Steuer- und Rechtsverlage.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-green-800 mb-3 text-sm">✓ Das spricht dafür</h4>
                      <ul className="space-y-2">
                        {tools[0].pros.map(p => (
                          <li key={p} className="text-sm text-gray-700 flex gap-2">
                            <span className="text-green-500 shrink-0 mt-0.5">✓</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-bold text-red-700 mb-3 text-sm">✗ Das spricht dagegen</h4>
                      <ul className="space-y-2">
                        {tools[0].cons.map(c => (
                          <li key={c} className="text-sm text-gray-700 flex gap-2">
                            <span className="text-red-400 shrink-0 mt-0.5">✗</span>{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-sm text-blue-900 mb-5">
                    <strong>Perfekt für:</strong> {tools[0].bestFor}
                  </div>

                  <a href="#" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">
                    lexoffice 30 Tage kostenlos testen →
                  </a>
                  <p className="text-xs text-gray-400 mt-2">Kein Kreditkarte nötig · Jederzeit kündbar</p>
                </div>
              </div>

              {/* sevDesk */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 px-6 py-2">
                  <span className="font-semibold text-gray-600 text-sm">Platz 2 – Top für wachsende Unternehmen</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">sevDesk</h3>
                      <div className="flex items-center gap-2">
                        <Stars rating={4.5} size="lg" />
                        <span className="font-bold text-gray-700">4,5</span>
                        <span className="text-xs text-gray-400">(890 Bewertungen)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">8,90 €<span className="text-sm font-normal text-gray-500">/Monat</span></div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-5">
                    sevDesk ist die stärkste Lösung für Selbstständige, die bereits wachsen: Shopify- und WooCommerce-Integration, starke App und solide Buchhaltungsfunktionen. Interface ist etwas komplexer als lexoffice, dafür deutlich mächtiger.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-green-800 mb-2 text-sm">✓ Stärken</h4>
                      <ul className="space-y-1">{tools[1].pros.map(p => <li key={p} className="text-sm text-gray-700">✓ {p}</li>)}</ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-bold text-red-700 mb-2 text-sm">✗ Schwächen</h4>
                      <ul className="space-y-1">{tools[1].cons.map(c => <li key={c} className="text-sm text-gray-700">✗ {c}</li>)}</ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-sm text-blue-900 mb-5">
                    <strong>Perfekt für:</strong> {tools[1].bestFor}
                  </div>
                  <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">
                    sevDesk kostenlos testen →
                  </a>
                </div>
              </div>

              {/* FastBill */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 px-6 py-2">
                  <span className="font-semibold text-gray-600 text-sm">Platz 3 – Einfachster Einstieg</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">FastBill</h3>
                      <div className="flex items-center gap-2">
                        <Stars rating={4.3} size="lg" />
                        <span className="font-bold text-gray-700">4,3</span>
                        <span className="text-xs text-gray-400">(620 Bewertungen)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">9,00 €<span className="text-sm font-normal text-gray-500">/Monat</span></div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-5">
                    FastBill ist auf absolute Einfachheit optimiert. Rechnungen schreiben dauert buchstäblich zwei Minuten. Wer einen Steuerberater hat und selbst nur Rechnungen stellen will, ist hier am besten aufgehoben.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-green-800 mb-2 text-sm">✓ Stärken</h4>
                      <ul className="space-y-1">{tools[2].pros.map(p => <li key={p} className="text-sm text-gray-700">✓ {p}</li>)}</ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-bold text-red-700 mb-2 text-sm">✗ Schwächen</h4>
                      <ul className="space-y-1">{tools[2].cons.map(c => <li key={c} className="text-sm text-gray-700">✗ {c}</li>)}</ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-sm text-blue-900 mb-5">
                    <strong>Perfekt für:</strong> {tools[2].bestFor}
                  </div>
                  <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">
                    FastBill kostenlos testen →
                  </a>
                </div>
              </div>

              {/* Buchhaltungsbutler */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 px-6 py-2">
                  <span className="font-semibold text-gray-600 text-sm">Platz 4 – KI-Automatisierung</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Buchhaltungsbutler</h3>
                      <div className="flex items-center gap-2">
                        <Stars rating={4.2} size="lg" />
                        <span className="font-bold text-gray-700">4,2</span>
                        <span className="text-xs text-gray-400">(410 Bewertungen)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">15,00 €<span className="text-sm font-normal text-gray-500">/Monat</span></div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-5">
                    Der Buchhaltungsbutler ist das teuerste Tool im Vergleich — liefert dafür aber die höchste Automatisierung. KI liest Belege, bucht automatisch und reduziert manuellen Aufwand auf ein Minimum. Ideal für alle mit vielen Belegen.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-green-800 mb-2 text-sm">✓ Stärken</h4>
                      <ul className="space-y-1">{tools[3].pros.map(p => <li key={p} className="text-sm text-gray-700">✓ {p}</li>)}</ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-bold text-red-700 mb-2 text-sm">✗ Schwächen</h4>
                      <ul className="space-y-1">{tools[3].cons.map(c => <li key={c} className="text-sm text-gray-700">✗ {c}</li>)}</ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-sm text-blue-900 mb-5">
                    <strong>Perfekt für:</strong> {tools[3].bestFor}
                  </div>
                  <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">
                    Buchhaltungsbutler testen →
                  </a>
                </div>
              </div>

              {/* WISO */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 px-6 py-2">
                  <span className="font-semibold text-gray-600 text-sm">Platz 5 – Bestes Preis-Leistungs-Verhältnis</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">WISO Mein Büro</h3>
                      <div className="flex items-center gap-2">
                        <Stars rating={4.0} size="lg" />
                        <span className="font-bold text-gray-700">4,0</span>
                        <span className="text-xs text-gray-400">(780 Bewertungen)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">6,00 €<span className="text-sm font-normal text-gray-500">/Monat</span></div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-5">
                    WISO Mein Büro bietet den günstigsten Einstieg mit vollem Funktionsumfang — inklusive DATEV-Export. Das Interface ist nicht das modernste, aber das Produkt von Buhl Data ist seit Jahren zuverlässig und erprobt.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-green-800 mb-2 text-sm">✓ Stärken</h4>
                      <ul className="space-y-1">{tools[4].pros.map(p => <li key={p} className="text-sm text-gray-700">✓ {p}</li>)}</ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-bold text-red-700 mb-2 text-sm">✗ Schwächen</h4>
                      <ul className="space-y-1">{tools[4].cons.map(c => <li key={c} className="text-sm text-gray-700">✗ {c}</li>)}</ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-sm text-blue-900 mb-5">
                    <strong>Perfekt für:</strong> {tools[4].bestFor}
                  </div>
                  <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">
                    WISO Mein Büro testen →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── ENTSCHEIDUNGSHILFE ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welches Tool passt zu dir?</h2>
            <p className="text-gray-500 text-sm mb-6">Beantworte eine Frage — wir empfehlen das passende Tool.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🌱", type: "Einsteiger", desc: "Du willst einfach Rechnungen schreiben, kein Buchhaltungs-Vorwissen", winner: "lexoffice", winnerColor: "text-amber-600" },
                { icon: "💰", type: "Budget-bewusst", desc: "Möglichst günstig, trotzdem voller Funktionsumfang", winner: "WISO Mein Büro", winnerColor: "text-orange-600" },
                { icon: "📈", type: "Wachsendes Business", desc: "Mehr Kunden, Online-Shop, mehr Integrationen nötig", winner: "sevDesk", winnerColor: "text-blue-600" },
                { icon: "🤖", type: "Maximale Automatisierung", desc: "Viele Belege pro Monat, KI soll den Rest erledigen", winner: "Buchhaltungsbutler", winnerColor: "text-purple-600" },
                { icon: "📄", type: "Nur Rechnungen", desc: "Steuerberater macht die Buchhaltung, du nur Rechnungen", winner: "FastBill", winnerColor: "text-green-600" },
              ].map((item) => (
                <div key={item.type} className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.type}</h3>
                  <p className="text-sm text-gray-500 mb-3">{item.desc}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Empfehlung:</span>
                    <span className={`font-bold text-sm ${item.winnerColor}`}>{item.winner}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── HÄUFIGE FEHLER ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4 Fehler, die du bei der Auswahl vermeiden solltest</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Kein DATEV-Export einplanen",
                  text: "Wenn du einen Steuerberater hast, braucht er DATEV-Daten. Ohne Export zahlst du extra Stundenhonorar für manuelle Dateneingabe — das kostet dich mehr als das teurere Software-Paket.",
                },
                {
                  title: "Zu viele Funktionen kaufen",
                  text: "Starte mit dem günstigsten Paket. Upgrade erst, wenn du wirklich an Grenzen stößt. Viele bezahlen für Funktionen, die sie nie nutzen.",
                },
                {
                  title: "Kein Testzeitraum nutzen",
                  text: "Alle genannten Tools haben kostenlose Testphasen (14–30 Tage). Wer direkt kauft ohne zu testen, bereut das oft nach 2 Wochen. Teste mindestens zwei Optionen.",
                },
                {
                  title: "GoBD-Konformität ignorieren",
                  text: "In Deutschland müssen digitale Buchhaltungsunterlagen GoBD-konform archiviert werden. Nicht jede Software erfüllt das — prüfe es vor dem Kauf, sonst drohen Probleme beim Finanzamt.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4">
                  <div className="shrink-0 w-7 h-7 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">!</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufig gestellte Fragen</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Welche Buchhaltungssoftware ist die beste für Selbstständige ohne Vorkenntnisse?",
                  a: "lexoffice. Die Software führt dich Schritt für Schritt durch alle Prozesse, erklärt Fachbegriffe und du brauchst kein Buchhaltungswissen. Die Einrichtung dauert unter 30 Minuten.",
                },
                {
                  q: "Kann ich die Software wechseln, wenn ich unzufrieden bin?",
                  a: "Ja. Alle genannten Tools erlauben den Export deiner Daten. Ein Wechsel ist immer möglich, aber am einfachsten zu Jahresbeginn, da du dann keine laufende Buchführung übertragen musst.",
                },
                {
                  q: "Brauche ich einen Steuerberater, wenn ich eine Buchhaltungssoftware nutze?",
                  a: "Das kommt auf deinen Fall an. Reine Einnahmen-Überschuss-Rechnung (EÜR) kannst du mit lexoffice selbst erstellen. Für komplexere Fälle (GmbH, Bilanzen, steuerliche Optimierung) lohnt sich ein Steuerberater — der dank DATEV-Export günstiger arbeiten kann.",
                },
                {
                  q: "Was bedeutet GoBD-konform?",
                  a: "Die GoBD (Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern) sind Richtlinien des deutschen Finanzamts für die digitale Buchführung. GoBD-konforme Software stellt sicher, dass deine Unterlagen bei einer Prüfung anerkannt werden.",
                },
                {
                  q: "Wie teuer ist Buchhaltungssoftware für Selbstständige?",
                  a: "Die günstigste vollständige Option ist WISO Mein Büro ab 6 €/Monat. lexoffice startet bei 7,90 €/Monat. Beides ist günstiger als eine Stunde Steuerberatung — und spart dir regelmäßig viele Stunden manueller Arbeit.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FINALE EMPFEHLUNG ── */}
          <section>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h2 className="text-2xl font-bold mb-3">Unser Fazit: lexoffice ist die beste Wahl</h2>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Für 95 % der Selbstständigen in Deutschland ist lexoffice die richtige Entscheidung: intuitiv, vollständig, GoBD-konform und mit dem besten Kosten-Nutzen-Verhältnis.
              </p>
              <a
                href="#"
                className="inline-block bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold px-8 py-4 rounded-xl text-base transition-colors"
              >
                Jetzt lexoffice 30 Tage kostenlos testen →
              </a>
              <p className="text-blue-200 text-xs mt-3">Keine Kreditkarte · Kein Risiko · Jederzeit kündbar</p>
            </div>
          </section>

          {/* Affiliate disclaimer */}
          <p className="text-xs text-gray-400 text-center pb-4">
            * Dieser Artikel enthält Affiliate-Links. Wenn du über unsere Links kaufst, erhalten wir eine kleine Provision — ohne Mehrkosten für dich. Das beeinflusst unsere Empfehlungen nicht. Wir testen alle Tools selbst.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}
