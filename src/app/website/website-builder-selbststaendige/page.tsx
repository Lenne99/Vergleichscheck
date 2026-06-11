import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Website-Builder für Selbstständige 2026 – Ehrlicher Vergleich ohne Code",
  description: "Squarespace, Wix, Framer, Jimdo oder Super.so? Welcher Website-Builder für Solo-Selbstständige wirklich funktioniert – ohne technische Kenntnisse.",
  openGraph: {
    title: "Website-Builder für Selbstständige 2026 – Ohne Technikstress",
    description: "Squarespace gewinnt den Test. Wix, Framer, Jimdo & Super.so im Vergleich – mit DSGVO und echtem Kundensupport.",
    url: "https://vergleichcheck.com/website/website-builder-selbststaendige",
    type: "article",
  },
};

const tools = [
  {
    rank: 1,
    name: "Squarespace",
    tagline: "Schönste Designs & beste Gesamtlösung für Selbstständige",
    price: "ab 15 €/Monat",
    rating: 4.7,
    score: 93,
    badge: "Testsieger",
    highlight: true,
    scores: { design: 98, bedienung: 92, dsgvo: 88, preisleistung: 85 },
    pros: [
      "Schönste vorgefertigte Design-Templates im Test",
      "Alles inklusive: Hosting, SSL, Domain",
      "Deutsche Rechtssicherheit (DSGVO-konform)",
      "Zuverlässiger deutschsprachiger Support",
      "SEO-Funktionen für Google-Rankings integriert",
    ],
    cons: [
      "Relativ teuer für Anfänger",
      "Begrenzte E-Commerce-Funktionen ohne Upsell",
    ],
    bestFor: ["Coaches & Berater", "Kreative (Fotografen, Künstler)", "Portfolio-Seiten", "DSGVO-Sicherheit wichtig"],
  },
  {
    rank: 2,
    name: "Framer",
    tagline: "Interaktive Websites mit animierten Design-Elementen",
    price: "Kostenlos / ab 5 €/Monat",
    rating: 4.5,
    score: 87,
    badge: "Bestes Design für moderne Websites",
    highlight: false,
    scores: { design: 96, bedienung: 78, dsgvo: 82, preisleistung: 90 },
    pros: [
      "Visuell beeindruckendste Websites",
      "Kostenloser Plan mit eigenem Design",
      "Integrierte Animationen ohne Code",
      "Ideal für Portfolio & Kreativseiten",
    ],
    cons: [
      "Steile Lernkurve für volle Ausnutzung",
      "DSGVO-Datenschutz weniger ausführlich",
    ],
    bestFor: ["Designer & Kreative", "Portfolio-Seiten", "Modern Design-fokussiert"],
  },
  {
    rank: 3,
    name: "Wix",
    tagline: "Vielfältigste Funktionen für wachsende Websites",
    price: "Kostenlos / ab 15 €/Monat",
    rating: 4.3,
    score: 82,
    badge: "Beste E-Commerce Grundlagen",
    highlight: false,
    scores: { design: 85, bedienung: 80, dsgvo: 75, preisleistung: 78 },
    pros: [
      "Breites App-Ökosystem für Zusatzfunktionen",
      "Guter E-Commerce für einfache Shops",
      "Kostenlos als Einstieg möglich",
      "Deutsche Version vorhanden",
    ],
    cons: [
      "Kostenlos mit großem Wix-Branding",
      "DSGVO-Konformität weniger transparent",
    ],
    bestFor: ["Online-Shops (einfach)", "Wachsende Websites", "Budget-Einstieg"],
  },
  {
    rank: 4,
    name: "Jimdo",
    tagline: "Deutsche Wurzeln & einfache Bedienung für Anfänger",
    price: "Kostenlos / ab 8 €/Monat",
    rating: 4.1,
    score: 78,
    badge: "Einfachste Bedienung",
    highlight: false,
    scores: { design: 72, bedienung: 95, dsgvo: 92, preisleistung: 88 },
    pros: [
      "Deutsches Unternehmen – direkter Support",
      "Einfachste Bedienung im Test",
      "Sehr gute DSGVO-Konformität",
      "Günstiger als Konkurrenten",
    ],
    cons: [
      "Design-Vorlagen weniger modern",
      "Weniger Funktionen für Wachstum",
    ],
    bestFor: ["Anfänger ohne Webdesign-Erfahrung", "Lokale Dienstleister", "DSGVO-Fokus"],
  },
  {
    rank: 5,
    name: "Super.so",
    tagline: "Kostenlos Website aus Notion-Daten bauen",
    price: "Kostenlos / ab 9 €/Monat",
    rating: 4.0,
    score: 75,
    badge: "Beste Kosten-Nutzen für Notion-Nutzer",
    highlight: false,
    scores: { design: 70, bedienung: 88, dsgvo: 85, preisleistung: 98 },
    pros: [
      "Kostenlos wenn du Notion nutzt",
      "Keine doppelte Datenverwaltung nötig",
      "Super schnelle Deployment",
      "Flexibel wenn Notion-Struktur da",
    ],
    cons: [
      "Nur sinnvoll wenn Notion bereits Datenzentral ist",
      "Design-Anpassungen limitiert",
    ],
    bestFor: ["Notion-Power-User", "Minimal-Websites", "Blogs aus Notion"],
  },
];

const profiles = [
  {
    icon: "🎨",
    label: "Designer/Portfolio",
    desc: "Meine Arbeiten visuell beeindruckend zeigen",
    winner: "Framer oder Squarespace",
    color: "violet",
  },
  {
    icon: "👔",
    label: "Berater/Coach",
    desc: "Vertrauen aufbauen, rechtssicher, einfach",
    winner: "Squarespace",
    color: "blue",
  },
  {
    icon: "🛒",
    label: "Shop-Betreiber",
    desc: "Produkte verkaufen, mit Zahlungsintegration",
    winner: "Wix oder Squarespace",
    color: "emerald",
  },
  {
    icon: "🌱",
    label: "Anfänger",
    desc: "Keine Vorkenntnisse, einfach starten",
    winner: "Jimdo oder Wix Gratis",
    color: "amber",
  },
  {
    icon: "📊",
    label: "Notion-Nutzer",
    desc: "Nutze Notion schon als Datenspeicher",
    winner: "Super.so (kostenlos)",
    color: "slate",
  },
];

const matrix = [
  { ziel: "Schönste Website schnell online", tool: "Squarespace", grund: "Template + Publishing in Minuten", icon: "✨" },
  { ziel: "Kostenlos starten & wachsen", tool: "Wix Gratis oder Jimdo Gratis", grund: "Einstieg ohne Kosten", icon: "🆓" },
  { ziel: "Moderne, animierte Website", tool: "Framer", grund: "Visuell beeindruckend", icon: "🎬" },
  { ziel: "Rechtssicher in Deutschland", tool: "Jimdo oder Squarespace", grund: "DSGVO & deutsches Support", icon: "⚖️" },
  { ziel: "Shop für Produkte/Kurse", tool: "Wix oder Squarespace", grund: "E-Commerce & Zahlungen", icon: "🛍️" },
  { ziel: "Aus Notion eine Website", tool: "Super.so", grund: "Daten automatisch aktualisiert", icon: "🔗" },
];

const faqs = [
  {
    q: "Welcher Website-Builder ist der beste für Selbstständige?",
    a: "Squarespace bietet die beste Gesamtlösung: wunderschöne Designs, DSGVO-Konformität, guter Support. Für Budget: Jimdo oder Wix kostenlos.",
  },
  {
    q: "Kann ich später zu einem anderen Builder wechseln?",
    a: "Das ist schwer. Daten rauszunehmen ist kompliziert. Deshalb: Nimm dir Zeit beim Aussuchen. Starte mit Jimdo/Wix kostenlos — wenn du wächst, migrierst du zu Squarespace.",
  },
  {
    q: "Brauche ich noch einen Webdesigner?",
    a: "Nein. Diese Builder haben so gute Templates, dass professionelle Websites ohne Design-Kenntnisse möglich sind.",
  },
  {
    q: "Ist die SEO (Google-Rankings) automatisch dabei?",
    a: "Alle modernen Builder haben SEO-Grundlagen. Aber: Du musst Keywords recherchieren, gute Inhalte schreiben und Backlinks aufbauen.",
  },
  {
    q: "DSGVO – was bedeutet das für meine Website?",
    a: "Datenschutzerklärung, Cookies-Banner, korrekte Formular-Verarbeitung. Squarespace und Jimdo erfüllen das am besten.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Welcher Website-Builder ist der beste für Selbstständige?", "acceptedAnswer": { "@type": "Answer", "text": "Squarespace bietet die beste Gesamtlösung: wunderschöne Designs, DSGVO-Konformität und guter Support ab 15 €/Monat." } },
  ]
};

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

export default function WebsitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="flex-1 bg-slate-50">
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 pt-8 pb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4 text-center">
              Website-Builder für Selbstständige
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-7 max-w-2xl mx-auto text-center">
              Squarespace, Wix, Framer, Jimdo oder Super.so — wir zeigen welcher Builder für Solo-Selbstständige passt.
            </p>

            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-800">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">⚡ Schnellübersicht</span>
              </div>
              <div className="divide-y divide-slate-800">
                {matrix.map((row) => (
                  <div key={row.ziel} className="px-5 py-3 flex items-center gap-4">
                    <span className="text-xl shrink-0">{row.icon}</span>
                    <span className="text-slate-300 text-sm flex-1">{row.ziel}</span>
                    <span className="font-bold text-white text-sm shrink-0">{row.tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-6 text-center">Alle 5 Builder im Vergleich</h2>
            <div className="space-y-6">
              {tools.map((t) => (
                <div key={t.name} className={`bg-white rounded-2xl border-2 overflow-hidden shadow-sm ${t.highlight ? "border-orange-300" : "border-slate-200"}`}>
                  {t.highlight && (
                    <div className="bg-orange-400 px-6 py-2 flex items-center justify-between">
                      <span className="text-orange-900 font-bold text-sm">🏆 Testsieger</span>
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{t.name}</h3>
                        <p className="text-slate-500 text-sm mb-2">{t.tagline}</p>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <div className="font-bold text-slate-900 text-xl">{t.score}/100</div>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-5 mb-6 grid grid-cols-2 gap-4">
                      <ScoreBar label="Design" value={t.scores.design} />
                      <ScoreBar label="Bedienung" value={t.scores.bedienung} />
                      <ScoreBar label="DSGVO" value={t.scores.dsgvo} />
                      <ScoreBar label="Preis-Leistung" value={t.scores.preisleistung} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                      <div className="bg-green-50 rounded-xl p-4">
                        <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3">Vorteile</div>
                        <ul className="space-y-2">
                          {t.pros.map((p) => (
                            <li key={p} className="text-sm text-slate-700 flex gap-2.5">
                              <span className="text-green-500 shrink-0 font-bold">✓</span>{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-xl p-4">
                        <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">Nachteile</div>
                        <ul className="space-y-2">
                          {t.cons.map((c) => (
                            <li key={c} className="text-sm text-slate-700 flex gap-2.5">
                              <span className="text-red-400 shrink-0 font-bold">✗</span>{c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase">Preis</span>
                        <div className="font-semibold text-slate-900">{t.price}</div>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Perfekt für</span>
                        <div className="flex flex-wrap gap-1">
                          {t.bestFor.map((b) => (
                            <span key={b} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{b}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Häufige Fragen</h2>
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <FaqAccordion key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
