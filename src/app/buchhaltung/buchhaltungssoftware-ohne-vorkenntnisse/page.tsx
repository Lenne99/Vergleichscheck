import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Buchhaltungssoftware für Anfänger 2026 – Ohne Vorkenntnisse einfach starten",
  description: "smartsteuer, Steuergehe, Zusammenfassung Steuer-Tools für Anfänger ohne Buchhaltungs-Wissen – ideal für Freelancer und Solo-Selbstständige.",
  openGraph: {
    title: "Buchhaltungssoftware für Anfänger 2026 – Keine Vorkenntnisse nötig",
    description: "Die besten Buchhaltungs-Programme für Anfänger ohne jegliches Buchhaltungs-Wissen getestet.",
    url: "https://vergleichcheck.com/buchhaltung/buchhaltungssoftware-ohne-vorkenntnisse",
    type: "article",
  },
};

const tools = [
  {
    rank: 1,
    name: "smartsteuer",
    tagline: "Einfachste Steuererklärung und digitale Belegrechnerei",
    price: "ab 0 € / 19.99 €",
    rating: 4.8,
    score: 95,
    badge: "Testsieger für Anfänger",
    highlight: true,
    scores: { bedienung: 98, funktionen: 85, automatisierung: 88, support: 92 },
    pros: [
      "Einfachste Bedienung im Test – kein Fachjargon nötig",
      "Steuererklärung automatisch vorbefüllt",
      "KI erkennt Belege automatisch",
      "Deutsche Steuerberater-Community unterstützt",
      "Kosten senken durch intelligente Tipps",
    ],
    cons: [
      "Nur für Steuererklärung, nicht für tägliche Rechnungen",
      "Relativ hoch im Preis für einzelne Steuererklärung",
    ],
    bestFor: ["Steuererklärung vereinfachen", "Erste Schritte ohne Steuerberater", "Maximal unkompliziert", "Anfänger"],
  },
  {
    rank: 2,
    name: "Steuergo",
    tagline: "Die günstigste Steuererklärung — für echte Anfänger",
    price: "Kostenlos / 12.99 €",
    rating: 4.6,
    score: 90,
    badge: "Günstigste Lösung",
    highlight: false,
    scores: { bedienung: 95, funktionen: 78, automatisierung: 80, support: 85 },
    pros: [
      "Kostenlose Version für einfache Steuerfälle",
      "Intuitivste Bedienung – führt dich an der Hand",
      "Gut für reine Freelancer ohne Personal",
      "Günstiger als smartsteuer",
    ],
    cons: [
      "Weniger Features als smartsteuer",
      "Support nur begrenzt kostenlos",
    ],
    bestFor: ["Absolut kostenbewusst", "Einfache Steuerfälle", "Erste Steuererklärung", "Freelancer"],
  },
  {
    rank: 3,
    name: "Taxman",
    tagline: "Desktop-Software mit langer Tradition",
    price: "29.95 € (einmalig)",
    rating: 4.3,
    score: 82,
    badge: "Beste Offline-Lösung",
    highlight: false,
    scores: { bedienung: 82, funktionen: 88, automatisierung: 70, support: 80 },
    pros: [
      "Lange etabliert – bewährte Qualität",
      "Kaufen, nicht abonnieren – keine Abo-Kosten",
      "Offline nutzbar (Datenschutz)",
      "Guter Überblick über Steuersparquellen",
    ],
    cons: [
      "Bedienung älter wirkend",
      "Weniger KI-gestützter Support",
    ],
    bestFor: ["Wer kein Abo will", "Offline-Arbeiter", "Langfristige Lösung", "Analog-Denker"],
  },
  {
    rank: 4,
    name: "wiso-steuer",
    tagline: "Allrounder zwischen Desktop und Cloud",
    price: "ab 34.99 €",
    rating: 4.2,
    score: 80,
    badge: "Breit aufgestellt",
    highlight: false,
    scores: { bedienung: 80, funktionen: 90, automatisierung: 75, support: 78 },
    pros: [
      "Breitester Funktionsumfang für Selbstständige",
      "Sowohl Desktop als auch Online-Version",
      "Gutes Preis-Leistungs-Verhältnis",
    ],
    cons: [
      "Komplexer für absolute Anfänger",
      "Interface überladen mit Optionen",
    ],
    bestFor: ["Etwas Erfahrung mitbringen", "Maximale Funktionen", "Windows-Nutzer"],
  },
  {
    rank: 5,
    name: "Pauschalor",
    tagline: "Für sehr simple Steuerfälle – auch nichts verstehen OK",
    price: "9.99 € / 14.99 €",
    rating: 4.0,
    score: 76,
    badge: "Einfach, aber limitiert",
    highlight: false,
    scores: { bedienung: 98, funktionen: 62, automatisierung: 65, support: 72 },
    pros: [
      "Allerdings die einfachste Bedienung aller Tools",
      "Sehr günstig",
      "Für minimale Steuerfälle völlig ausreichend",
    ],
    cons: [
      "Zu limitiert für komplexe Selbstständigen-Fälle",
      "Weniger Features bedeutet auch weniger Steuertipps",
    ],
    bestFor: ["Absolut minimalistische Anfänger", "Maximal günstiger Einstieg", "Sehr einfache Steuerfälle"],
  },
];

const profiles = [
  {
    icon: "🌱",
    label: "Kompletter Anfänger",
    desc: "Erste Steuererklärung, keine Ahnung von Buchhaltung",
    winner: "smartsteuer oder Steuergo",
    color: "emerald",
  },
  {
    icon: "💰",
    label: "Sparen ist wichtig",
    desc: "Günstigste Lösung ohne Quality-Compromise",
    winner: "Steuergo Gratis oder Pauschalor",
    color: "amber",
  },
  {
    icon: "🖥️",
    label: "Desktop-Vorliebe",
    desc: "Offline arbeiten, Datenschutz wichtig",
    winner: "Taxman",
    color: "slate",
  },
  {
    icon: "📚",
    label: "Lernen wollen",
    desc: "Verstehen wie Steuererklärung funktioniert",
    winner: "smartsteuer (mit Erklärvideos)",
    color: "blue",
  },
  {
    icon: "⚡",
    label: "Maximal schnell",
    desc: "Nur ausfüllen, keine Erklärungen lesen",
    winner: "Pauschalor oder Steuergo",
    color: "rose",
  },
];

const matrix = [
  { task: "Steuererklärung mit KI-Belegerkennung", winner: "smartsteuer", grund: "Beste KI-Automatisierung", icon: "🤖" },
  { task: "Absolut kostenlos Steuern sparen", winner: "Steuergo Gratis", grund: "Kostenlos + einfach", icon: "🆓" },
  { task: "Offline arbeiten (kein Internet nötig)", winner: "Taxman", grund: "Desktop-Software ohne Cloud", icon: "📱" },
  { task: "Maximale Funktionen für Selbstständige", winner: "wiso-steuer", grund: "Breiteste Unterstützung", icon: "⚙️" },
  { task: "Günstigster Einstieg ever", winner: "Pauschalor", grund: "9.99 € einmalig", icon: "💸" },
  { task: "Für komplette Anfänger ohne Steuerberater", winner: "smartsteuer", grund: "Beste Benutzerführung", icon: "👶" },
];

const faqs = [
  {
    q: "Brauche ich wirklich Buchhaltungs-Vorkenntnisse für diese Tools?",
    a: "Nein, ganz sicher nicht. Diese Tools sind speziell für Anfänger gebaut. Du brauchst nur: Quittungen für Ausgaben, Rechnungen die du stellst, und Kontoauszüge. Alles andere übernimmt die Software.",
  },
  {
    q: "Reicht eine dieser Apps oder brauche ich auch noch einen Steuerberater?",
    a: "Für die erste Steuererklärung reicht eine der Apps völlig. Ab deinem zweiten Jahr hängst du und eine App zusammen gut. Ein Steuerberater wird ab ca. 3.000€ Jahresgewinn sinnvoll, spart dir dann aber mehr als er kostet.",
  },
  {
    q: "Kann ich Excel nicht einfach selber nutzen?",
    a: "Technisch ja — aber praktisch nein. Excel-Fehler sind teuer und führen zu Rückfragen vom Finanzamt. Diese Apps checken dich automatisch auf Fehler und füllen Werte intelligent vor. Der Unterschied: 2 Stunden vs 20 Minuten.",
  },
  {
    q: "Was ist der Unterschied zwischen Steuererklärung und Buchhaltung?",
    a: "Steuererklärung = einmal pro Jahr an Finanzamt (damit umgehen die Apps). Buchhaltung = tägliche Dokumentation (für größere Unternehmen oder Mehrwertsteuer-Pflicht nötig). Als Anfänger: Steuererklärung reicht am Anfang.",
  },
  {
    q: "Welche Belege brauche ich aufzubewahren?",
    a: "Alle Ausgabe-Belege (Quittung, Rechnung von Lieferanten), alle Einnahme-Rechnungen die du schreibst, Kontoauszüge. Aufbewahren für 6 Jahre. Diese Apps helfen dir die zu organisieren.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Welche Steuersoftware ist beste für absolute Anfänger?", "acceptedAnswer": { "@type": "Answer", "text": "smartsteuer ist die beste Wahl für Anfänger: einfachste Bedienung, KI-Belegerkennung, guter Support. Günstiger: Steuergo kostenlos." } },
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

export default function BuchhaltungAnfaengerPage() {
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
              Buchhaltungssoftware für absolute Anfänger
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-7 max-w-2xl mx-auto text-center">
              Keine Vorkenntnisse nötig. smartsteuer, Steuergo, Taxman & Co. — ideal für deine erste Steuererklärung.
            </p>

            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-800">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">⚡ Schnellentscheidung</span>
              </div>
              <div className="divide-y divide-slate-800">
                {matrix.map((row) => (
                  <div key={row.task} className="px-5 py-3 flex items-center gap-4">
                    <span className="text-xl shrink-0">{row.icon}</span>
                    <span className="text-slate-300 text-sm flex-1">{row.task}</span>
                    <span className="font-bold text-white text-sm shrink-0">{row.winner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-6 text-center">5 Programme für Anfänger im Vergleich</h2>
            <div className="space-y-6">
              {tools.map((t) => (
                <div key={t.name} className={`bg-white rounded-2xl border-2 overflow-hidden shadow-sm ${t.highlight ? "border-emerald-300" : "border-slate-200"}`}>
                  {t.highlight && (
                    <div className="bg-emerald-500 px-6 py-2">
                      <span className="text-white font-bold text-sm">🏆 Testsieger für Anfänger</span>
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
                      <ScoreBar label="Bedienung" value={t.scores.bedienung} />
                      <ScoreBar label="Funktionen" value={t.scores.funktionen} />
                      <ScoreBar label="Automatisierung" value={t.scores.automatisierung} />
                      <ScoreBar label="Support" value={t.scores.support} />
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
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Häufige Fragen für Anfänger</h2>
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
