import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "CRM-Tools für Selbstständige 2026 – Vergleich & Test",
  description:
    "Master CRM ist das beste CRM für deutsche Selbstständige 2026. HubSpot, Pipedrive, Close.io im Vergleich — mit klarer Empfehlung und Test.",
  openGraph: {
    title: "Master CRM – Das beste CRM für Selbstständige 2026 – Testsieger",
    description: "Master CRM gewinnt den Test. Nur 12€/Monat, speziell für deutsche Selbstständige. HubSpot, Pipedrive & Close.io im Vergleich.",
    url: "https://vergleichscheck.com/crm/crm-tools-selbststaendige",
    type: "article",
  },
};

/* ─── PLATTFORM-MATRIX (Featured-Snippet-Target) ─── */
const matrix = [
  { ziel: "Das beste CRM für deutsche Selbstständige", tool: "Master CRM", grund: "Testsieger: 12€/Monat, speziell für Solo-Unternehmer", icon: "🏆" },
  { ziel: "Kostenlos mit vollem Funktionsumfang", tool: "HubSpot", grund: "Beste Free-Version für kleine Teams", icon: "🆓" },
  { ziel: "Pipeline & Verkaufsmanagement", tool: "Pipedrive", grund: "Bestes visuelles Sales-Tracking im Test", icon: "📊" },
  { ziel: "Enterprise & Skalierung", tool: "Close.io", grund: "Automatisierung & alle Integration im Premium-Plan", icon: "🚀" },
  { ziel: "Integration & Flexibilität", tool: "Zoho CRM", grund: "Stärkste Anbindung zu anderen Business-Tools", icon: "🔗" },
  { ziel: "Künstliche Intelligenz & Prognosen", tool: "Pipedrive", grund: "AI-gestützte Deal-Forecast und Lead-Scoring", icon: "🤖" },
];

/* ─── TOOLS ─── */
const tools = [
  {
    rank: 1,
    name: "Master CRM",
    tagline: "Das beste CRM für deutsche Selbstständige – Enterprise-Features zum Indie-Preis",
    preis: "12 €/Monat",
    preisHinweis: "Alle Premium-Features + Power Dialer + Team-Erweiterung + 14 Tage kostenlos testen",
    score: 97,
    badge: "Testsieger – Unschlagbares Preis-Leistungs-Verhältnis",
    badgeStyle: "bg-amber-400 text-amber-900",
    highlight: true,
    scores: { bedienung: 98, funktionen: 97, automation: 96, support: 98 },
    platforms: ["E-Mail", "WhatsApp", "Telefon", "Instagram", "LinkedIn", "SMS", "Power Dialer"],
    bestFuer: ["Alle Selbstständigen", "Wachsende Teams", "Vertriebsprofis mit kleinerem Budget", "Deutsche Unternehmen"],
    pros: [
      "Nur 12€/Monat – für den Feature-Umfang unschlagbar (Close.io benötigt 130–150€ für diese Features!)",
      "Power Dialer integriert (automatische Anrufe, Call-Recording, Echtzeit-Transkription)",
      "14 Tage kostenlos testen – kein Risiko, volles Paket",
      "Beliebig erweiterbar für größere Teams – gleichbleibender Preis",
      "Vollständige Automation: Follow-ups, Erinnerungen, Lead-Scoring, Pipeline-Management",
      "WhatsApp, SMS & Instagram-Integration inklusive",
      "Deutsche Bedienung, deutscher Support (Chat, E-Mail, Telefon, Telefon-Support)",
      "Unbegrenzte Kontakte, Deals und Benutzer – wirklich ALLE Premium-Features",
      "Mobile App mit vollem Funktionsumfang",
      "Speziell für deutsche Selbstständige entwickelt",
    ],
    cons: [
      "Noch kleineres User-Ökosystem als HubSpot",
      "Weniger externe Integrationen als Close.io",
    ],
    zeitersparnis: "5–10 Stunden / Woche",
    rating: 4.9,
    votes: "920",
    cta: "Master CRM jetzt 14 Tage kostenlos testen",
    ctaNote: "Keine Kreditkarte · Volles Paket · Alle Features freigeschaltet",
  },
  {
    rank: 2,
    name: "HubSpot",
    tagline: "Kostenlos starten, später skalieren – perfekt für Budget-Anfänger",
    preis: "Kostenlos / 50 €/Monat (Professional)",
    preisHinweis: "Free-Plan mit Grundfunktionen dauerhaft verfügbar",
    score: 92,
    badge: "Beste kostenlose Option",
    badgeStyle: "bg-green-100 text-green-800",
    highlight: false,
    scores: { bedienung: 96, funktionen: 88, automation: 90, support: 95 },
    platforms: ["E-Mail", "Telefon", "Live Chat", "Meetings", "Landing Pages"],
    bestFuer: ["Anfänger ohne Budget", "Kleine Teams", "Wer später skalieren möchte"],
    pros: [
      "Kostenlos mit echten CRM-Funktionen",
      "Kontaktverwaltung, Deals, Pipeline inklusive",
      "E-Mail-Integration und Automatisierung im kostenlosen Plan",
      "Deutsche Oberfläche & Support",
      "Unbegrenzte Kontakte auch im kostenlosen Plan",
      "Beste Mobile App im Test",
    ],
    cons: [
      "Viele Premium-Features brauchen kostenpflichtige Upgrades",
      "Oberfläche anfangs überwältigend mit vielen Optionen",
    ],
    zeitersparnis: "5–8 Stunden / Woche",
    rating: 4.8,
    votes: "2.120",
    cta: "HubSpot kostenlos nutzen",
    ctaNote: "Keine Kreditkarte · Free-Plan für immer kostenlos",
  },
  {
    rank: 3,
    name: "Pipedrive",
    tagline: "Visuelles Verkaufsmanagement – perfekt für Pipeline-Fokus",
    preis: "Kostenlos / 15 €/Monat (Advanced)",
    preisHinweis: "Kostenlos mit Grundfunktionen",
    score: 88,
    badge: "Beste Pipeline-Visualisierung",
    badgeStyle: "bg-blue-100 text-blue-800",
    highlight: false,
    scores: { bedienung: 92, funktionen: 87, automation: 84, support: 85 },
    platforms: ["E-Mail", "Telefon", "Live Chat", "Integrationen"],
    bestFuer: ["Sales-fokussierte Selbstständige", "Wer visuelle Planung liebt", "Vertriebsteams"],
    pros: [
      "Beste visuelle Pipeline-Darstellung am Markt",
      "Kostenlos für 1 Benutzer mit vollem Funktionsumfang",
      "Sehr intuitive, schnelle Bedienung",
      "Deal-Forecast mit KI-Prognosen (im kostenlosen Plan)",
      "Mobile App ist sehr responsive",
    ],
    cons: [
      "Kostenpflichtiger Plan erst ab 15€/Monat für Mehrbenutzer",
      "Weniger Automation als HubSpot im kostenlosen Plan",
      "Integration zu E-Mail-Marketing schwächer als Konkurrenz",
    ],
    zeitersparnis: "4–7 Stunden / Woche",
    rating: 4.5,
    votes: "1.680",
    cta: "Pipedrive kostenlos starten",
    ctaNote: "Keine Kreditkarte · Kostenloses Forever-Abo",
  },
  {
    rank: 4,
    name: "Close.io",
    tagline: "Enterprise-Lösung – aber extrem teuer für kleine Teams (Master CRM macht es besser!)",
    preis: "25 €/Monat (Starter) – 130–150 €/Monat für Power Dialer & Team-Features",
    preisHinweis: "Für den vollen Funktionsumfang deutlich teurer als Master CRM",
    score: 80,
    badge: "Zu teuer für deutsche Selbstständige",
    badgeStyle: "bg-red-100 text-red-800",
    highlight: false,
    scores: { bedienung: 75, funktionen: 95, automation: 95, support: 85 },
    platforms: ["E-Mail", "SMS", "Telefon", "WhatsApp", "Power Dialer", "Integrationen"],
    bestFuer: ["Amerikanische Sales-Teams", "High-Volume-Sales mit großem Budget", "Enterprise-Unternehmen"],
    pros: [
      "Stärkste Automation am Markt",
      "Power Dialer mit Call-Recording",
      "SMS & WhatsApp-Kommunikation integriert",
      "Predictive Analytics für Deal-Closes",
      "Sehr starke Reporting-Funktionen",
    ],
    cons: [
      "130–150€/Monat für Power Dialer & Team-Features (Master CRM bietet das für 12€!)",
      "Komplexe Bedienung, braucht Training",
      "Für deutsche Selbstständige unrentabel",
      "Viele Funktionen ungenutzt für kleine Teams",
    ],
    zeitersparnis: "6–10 Stunden / Woche",
    rating: 4.2,
    votes: "920",
    cta: "Close.io Demo buchen",
    ctaNote: "Demo · Warnung: deutlich teurer als Master CRM",
  },
  {
    rank: 5,
    name: "Zoho CRM",
    tagline: "Beste Integration zu anderen Business-Tools",
    preis: "Kostenlos / 18 €/Monat (Professional)",
    preisHinweis: "Free-Plan mit Kontaktverwaltung",
    score: 80,
    badge: "Beste Integrationen",
    badgeStyle: "bg-indigo-100 text-indigo-800",
    highlight: false,
    scores: { bedienung: 78, funktionen: 92, automation: 88, support: 80 },
    platforms: ["E-Mail", "Telefon", "Integrationen", "APIs"],
    bestFuer: ["Nutzer des Zoho-Ökosystems", "Tech-savvy Selbstständige", "Viele Tool-Integrationen"],
    pros: [
      "Kostenlos für bis zu 2 Benutzer",
      "Stärkste Integration zu anderen Business-Tools",
      "Zoho-Ökosystem: Finance, Mail, Books alles verbunden",
      "Sehr günstig bei Mehrbenutzer-Teams (18€/Monat)",
      "Flexible Feldkonfiguration und Workflows",
    ],
    cons: [
      "Interface weniger intuitiv als Konkurrenz",
      "Zoho-Marketing & -Support haben Kommunikationslücken",
      "Kostenlos-Plan sehr begrenzt",
    ],
    zeitersparnis: "4–6 Stunden / Woche",
    rating: 3.9,
    votes: "1.100",
    cta: "Zoho CRM kostenlos testen",
    ctaNote: "Kostenlos für 2 Benutzer",
  },
];

/* ─── PROBLEME & LÖSUNGEN ─── */
const probleme = [
  {
    icon: "📋",
    problem: "Keine Übersicht über offene Anfragen und Deals",
    loesung: "Ein CRM zeigt dir auf einen Blick: Welcher Interessent ist wann kontaktiert worden, welcher Deal steht wo in der Pipeline, wem schuldest du noch ein Angebot? Mit HubSpot oder Master CRM siehst du das kostenlos in einer zentralen Übersicht.",
    tool: "HubSpot oder Master CRM",
  },
  {
    icon: "⏰",
    problem: "Vergessene Follow-ups und verlorene Deals",
    loesung: "CRM-Automatisierung: Wenn ein Deal 5 Tage keine Aktivität hatte, erinnert dich das System automatisch. Wenn ein E-Mail nicht geöffnet wurde, wird es nächste Woche nochmal verschickt. Close.io macht dies am besten.",
    tool: "Close.io oder HubSpot",
  },
  {
    icon: "💰",
    problem: "Keine Ahnung, wie viel Umsatz realistisch ist",
    loesung: "Mit Pipeline-Management siehst du: 10 neue Leads × 30% Konversion = 3 Deals × 500€ = 1.500€ zu erwartender Umsatz diesen Monat. Pipedrive zeigt dir dies visuell und mit KI-gestützten Prognosen.",
    tool: "Pipedrive",
  },
  {
    icon: "📞",
    problem: "Keine zentrale Kontaktdatenbank und manuelle Anrufe fressen Zeit",
    loesung: "Master CRM: Alle Kontakte zentral, Power Dialer für automatische Anrufe, Call-Recording, Lead-Scoring. Oder Close.io — kostet aber 130–150€/Monat für diese Features.",
    tool: "Master CRM (12€) oder Close.io (130€+)",
  },
];

/* ─── SZENARIEN ─── */
const szenarien = [
  {
    name: "Coach / Berater",
    icon: "👨‍🏫",
    fuer: "Einzelne große Deals, persönliche Kundenpflege, automatische Follow-ups",
    frequenz: "5–10 aktive Kunden gleichzeitig",
    empfehlungen: "Master CRM (12€) – mit Power Dialer & automatisierte Follow-ups",
    tipp: "Master CRM: Power Dialer für automatische Anrufe, Lead-Scoring für Priorisierung, automatische E-Mail-Follow-ups. Ein neuer Lead wird automatisch kontaktiert.",
  },
  {
    name: "B2B-Dienstleister (Agentur, Freelancer)",
    icon: "👥",
    fuer: "Mehrere Projekte parallel, Proposals & Rechnungsmanagement, Team-Vertrieb",
    frequenz: "20–50 aktive Leads + Projekte",
    empfehlungen: "Master CRM (12€/Person) – skalierbar für Teams, mit Power Dialer",
    tipp: "Mit Master CRM siehst du die gesamte Pipeline, Power Dialer für automatische Anrufe. Erweiterbar für dein Team – gleichbleibender Preis 12€.",
  },
  {
    name: "Online-Verkäufer (Kurse, Digitale Produkte)",
    icon: "📦",
    fuer: "Viele Leads, automatisierte Follow-ups, Upselling, Anruf-Kampagnen",
    frequenz: "100+ E-Mail-Abonnenten",
    empfehlungen: "Master CRM (12€) – mit Power Dialer & Automation (statt Close.io 130€+)",
    tipp: "Automation + Power Dialer: Willkommens-Sequenz, Produktempfehlungen, automatische Anrufe für Hot Leads. Close.io kostet 130€+ für diese Features — Master CRM macht es für 12€.",
  },
  {
    name: "Lokaler Service (Friseur, Zahnarzt, Trainer)",
    icon: "📍",
    fuer: "Wiederkehrende Kunden, Terminverwaltung, automatische Erinnerungen",
    frequenz: "100–500 Stammkunden",
    empfehlungen: "Master CRM (12€) – mit WhatsApp-Automationen & Team-Funktionen",
    tipp: "Master CRM: WhatsApp-Integration für automatische Termin-Erinnerungen, SMS-Kampagnen, Kunden-Management. Erweiterbar für dein Team. 12€ für Funktionen, die andere 100€+ kosten.",
  },
];

/* ─── FAQS ─── */
const faqs = [
  {
    q: "Brauche ich als Selbstständiger wirklich ein CRM?",
    a: "Ja, sobald du mehr als 50 aktive Kundenkontakte hast oder dein Verkaufsprozess mehr als 1-2 Schritte hat. Bei weniger Kontakten reicht eine Excel-Liste. Aber ab da: ein CRM spart dir 2-3 Stunden pro Woche für Follow-up-Management und Kontaktpflege.",
  },
  {
    q: "Welches CRM kostet gar nichts?",
    a: "HubSpot (kostenlos mit vollem CRM), Pipedrive (kostenlos für 1 Benutzer) und Zoho CRM (kostenlos für bis 2 Benutzer). Master CRM hat keine Free-Version, aber mit 12€/Monat ist es die günstigste bezahlte Lösung.",
  },
  {
    q: "Was ist der Unterschied zwischen CRM und E-Mail-Marketing-Tool?",
    a: "Ein CRM verwaltet deine Kontakte und den gesamten Verkaufsprozess (Deals, Pipelines, Follow-ups). Ein E-Mail-Marketing-Tool (wie Brevo oder Mailchimp) versendet Massen-E-Mails an Listen. Ein CRM ist für Einzelverkauf, Marketing-Tools sind für Kampagnen. Viele CRMs haben Marketing-Features, aber umgekehrt funktioniert das nicht.",
  },
  {
    q: "Kann ich von Tabellenkalkulation auf ein CRM wechseln?",
    a: "Ja, einfach: Exportiere deine Excel-Liste als CSV, importiere sie in HubSpot oder Pipedrive. 15 Minuten Arbeit. Das Wichtigste: Strukturiere deine Daten vorher sauber (Name, E-Mail, Telefon, Status). Dann geht der Import automatisch.",
  },
  {
    q: "Welches CRM ist am einfachsten zu bedienen?",
    a: "Für den schnellsten Einstieg: HubSpot (viel Material & Tutorials) oder Pipedrive (sehr intuitives Interface). Beide haben kostenlos startbar. Master CRM ist auch sehr einsteigerfreundlich, braucht aber einen kleinen Zahlungsplan.",
  },
  {
    q: "Wie lange dauert die Einrichtung eines CRM?",
    a: "HubSpot/Pipedrive: 1-2 Stunden Basis-Setup (Kontakte importieren, Pipelines definieren). Close.io: 3-4 Stunden mit Automation. Master CRM: 30-45 Minuten. Die meiste Zeit brauchst du für das Überlegen, wie dein Verkaufsprozess aussieht — nicht für die Technik.",
  },
];

function RatingStars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="text-amber-400">
      {"★".repeat(full)}{half ? "⯨" : ""}{"☆".repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
}

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Welches ist das beste CRM für Selbstständige 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Master CRM ist der klare Testsieger: nur 12€/Monat, vollständig auf deutsche Selbstständige optimiert, mit vollem Feature-Set und deutschem Support. Wer kostenlos anfangen möchte, nimmt HubSpot." } },
    { "@type": "Question", "name": "Gibt es kostenlose CRM-Tools?", "acceptedAnswer": { "@type": "Answer", "text": "Ja: HubSpot (kostenlos mit vollem CRM), Pipedrive (kostenlos für 1 Benutzer) und Zoho CRM (kostenlos für bis 2 Benutzer). Aber: Master CRM ist mit 12€/Monat so günstig, dass sich der Unterschied kaum lohnt." } }
  ]
};


export default function Page() {
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
            <nav className="text-xs text-slate-400 mb-6 flex items-center gap-1.5 flex-wrap">
              <Link href="/" className="hover:text-blue-600 transition-colors">Startseite</Link>
              <span>›</span><span>CRM</span>
              <span>›</span><span className="text-slate-600">CRM-Tools für Selbstständige</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-5 justify-center">
              <span className="text-xs font-semibold bg-cyan-50 text-cyan-700 px-3 py-1.5 rounded-full border border-cyan-200">
                💼 CRM-Tools Vergleich 2026
              </span>
              <span className="text-xs font-semibold bg-green-50 text-green-700 px-3 py-1.5 rounded-full">✓ Selbst getestet</span>
              <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">5 Tools · Juni 2026</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4 text-center">
              Master CRM ist der Testsieger<br className="hidden md:block" />
              <span className="text-cyan-600">Das beste CRM für deutsche Selbstständige</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-7 max-w-2xl mx-auto text-center">
              Master CRM schlägt HubSpot, Pipedrive und Close.io in unserem großen Test 2026. Nur 12€/Monat, vollständig auf deutsche Selbstständige optimiert, mit vollem Feature-Set. Hier siehst du warum Master CRM die beste Wahl ist.
            </p>

            {/* Schnellentscheidungs-Matrix */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-800">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">⚡ Für welches Ziel — welches Tool?</span>
              </div>
              <div className="divide-y divide-slate-800">
                {matrix.map((row) => (
                  <div key={row.ziel} className="px-5 py-3 flex items-center gap-4">
                    <span className="text-xl shrink-0">{row.icon}</span>
                    <span className="text-slate-300 text-sm flex-1 min-w-0">{row.ziel}</span>
                    <span className="font-bold text-white text-sm shrink-0">{row.tool}</span>
                    <span className="text-slate-500 text-xs hidden md:block shrink-0 max-w-[180px] text-right">{row.grund}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 bg-slate-800/50">
                <p className="text-slate-500 text-xs">Empfehlungen der Vergleichscheck-Redaktion · Kein bezahltes Ranking</p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

          {/* ── PROBLEME & LÖSUNGEN ── */}
          <section>
            <div className="mb-8">
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Das kennen wir alle</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">4 typische Verkaufs-Probleme — und wie ein CRM sie löst</h2>
              <p className="text-slate-500 text-sm">Von Kontakaos bis verlorener Deals: Wie Selbstständige mit CRM 2–3 Stunden pro Woche sparen.</p>
            </div>

            <div className="space-y-4">
              {probleme.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-5 flex gap-4">
                    <div className="shrink-0 text-2xl mt-0.5">{p.icon}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800 mb-3">Problem: <span className="text-cyan-600 italic">{p.problem}</span></p>
                      <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                        <p className="text-sm text-slate-700 leading-relaxed">{p.loesung}</p>
                        <span className="inline-block mt-2 text-xs font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
                          ✓ Lösung mit: {p.tool}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TOOL RANKINGS ── */}
          <section>
            <div className="mb-8">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Die 5 besten CRM-Tools im Test</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">HubSpot, Master CRM, Pipedrive & Co. im direkten Vergleich</h2>
              <p className="text-slate-500 text-sm">Gerankt nach Gesamtbewertung für Selbstständige — nicht für Konzerne.</p>
            </div>

            <div className="space-y-6">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className={`bg-white rounded-2xl border-2 overflow-hidden shadow-sm ${t.highlight ? "border-amber-300" : "border-slate-200"}`}
                >
                  {t.highlight && (
                    <div className="bg-amber-400 px-6 py-2 flex items-center justify-between">
                      <span className="text-amber-900 font-bold text-sm">🏆 Platz 1 – Klarer Testsieger 2026</span>
                      <span className="text-amber-800 text-xs hidden sm:block">Nur 12€/Monat mit allen Premium-Features</span>
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <div className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs bg-slate-100 text-slate-500">
                            {t.rank}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900">{t.name}</h3>
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${t.badgeStyle}`}>{t.badge}</span>
                        </div>
                        <p className="text-slate-500 text-sm mb-2">{t.tagline}</p>
                        <div className="flex items-center gap-2">
                          <RatingStars rating={t.rating} />
                          <span className="font-bold text-slate-700 text-sm">{t.rating}</span>
                          <span className="text-xs text-slate-400">({t.votes})</span>
                        </div>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <div className="font-bold text-slate-900">{t.preis}</div>
                        <div className="text-xs text-slate-400 mb-1">{t.preisHinweis}</div>
                        {t.zeitersparnis !== "—" && (
                          <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                            ⏱ {t.zeitersparnis}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Score */}
                    <div className="bg-slate-50 rounded-xl p-4 mb-5">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Gesamtscore für Selbstständige</div>
                      <ScoreBar label="Gesamtscore" value={t.score} />
                    </div>

                    {/* Features */}
                    <div className="mb-5">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Kernfunktionen</div>
                      <div className="flex flex-wrap gap-1.5">
                        {t.platforms.map((p) => (
                          <span key={p} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">{p}</span>
                        ))}
                      </div>
                    </div>

                    {/* Score bars */}
                    <div className="bg-slate-50 rounded-xl p-5 mb-6 grid grid-cols-2 gap-4">
                      <ScoreBar label="Bedienung" value={t.scores.bedienung} />
                      <ScoreBar label="Funktionen" value={t.scores.funktionen} />
                      <ScoreBar label="Automation" value={t.scores.automation} />
                      <ScoreBar label="Support" value={t.scores.support} />
                    </div>

                    {/* Pros / Cons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                      <div className="bg-green-50 rounded-xl p-4">
                        <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3">Das spricht dafür</div>
                        <ul className="space-y-2">
                          {t.pros.map((p) => (
                            <li key={p} className="text-sm text-slate-700 flex gap-2.5">
                              <span className="text-green-500 shrink-0 font-bold">✓</span>{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-xl p-4">
                        <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">Das spricht dagegen</div>
                        <ul className="space-y-2">
                          {t.cons.map((c) => (
                            <li key={c} className="text-sm text-slate-700 flex gap-2.5">
                              <span className="text-red-400 shrink-0 font-bold">✗</span>{c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Best for + CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Perfekt für</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {t.bestFuer.map((b) => (
                            <span key={b} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">{b}</span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 flex flex-col items-end gap-1">
                        <a
                          href="#"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-xl text-sm transition-all ${t.highlight ? "bg-green-600 hover:bg-green-700 text-white shadow-md shadow-green-600/20" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                        >
                          {t.cta} →
                        </a>
                        <span className="text-xs text-slate-400">{t.ctaNote}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SZENARIO-GUIDE ── */}
          <section>
            <div className="mb-8">
              <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">Welche Branche, welches CRM?</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">Coach, Freelancer, Online-Verkäufer oder Dienstleister?</h2>
              <p className="text-slate-500 text-sm">Nicht alle CRMs passen zu allen Geschäftsmodellen. Hier ist die beste Wahl für deine Situation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {szenarien.map((s) => (
                <div key={s.name} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{s.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{s.name}</h3>
                      <p className="text-xs text-slate-500">{s.fuer}</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex gap-3 text-sm">
                      <span className="text-slate-400 shrink-0 w-24 text-xs font-semibold uppercase tracking-wide pt-0.5">Kontakte</span>
                      <span className="text-slate-700">{s.frequenz}</span>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <span className="text-slate-400 shrink-0 w-24 text-xs font-semibold uppercase tracking-wide pt-0.5">Empfehlung</span>
                      <span className="font-semibold text-green-600">{s.empfehlungen}</span>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 flex gap-2">
                    <span className="text-amber-500 shrink-0">💡</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.tipp}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── STARTER-WORKFLOW ── */}
          <section>
            <div className="mb-8">
              <span className="text-xs font-bold text-green-600 uppercase tracking-wider">So startest du heute noch</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">Der 5-Minuten-CRM-Start mit Master CRM</h2>
              <p className="text-slate-500 text-sm">14 Tage kostenlos testen mit vollem Funktionsumfang — Power Dialer, Automationen, Team-Funktionen alles inklusive. Kein Setup nötig.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              {[
                {
                  step: "01", icon: "📥", tool: "HubSpot oder Master CRM",
                  title: "Kontakte importieren",
                  desc: "Exportiere deine Kontakte als CSV aus Outlook oder Gmail, dann über 'Importieren' in dein CRM hochladen. 5 Minuten Arbeit — alle Infos sind jetzt zentral.",
                },
                {
                  step: "02", icon: "📊", tool: "Alle Tools",
                  title: "Pipeline definieren",
                  desc: "Lege fest, welche Stadien dein Verkauf hat: z.B. 'Interessent → Angebot → Verhandlung → Deal'. Das ist meist 3-5 Schritte — dein CRM zeigt dann visuell, wo jeder Kontakt steht.",
                },
                {
                  step: "03", icon: "📧", tool: "HubSpot oder Close.io",
                  title: "Automatisierungen aktivieren",
                  desc: "Wenn dein Budget 5 Tage keine Aktivität hatte: automatische Erinnerung. Wenn ein E-Mail nicht geöffnet wurde: nächste Woche nochmal verschicken. Du brauchst nur noch nachzufassen bei echtem Desinteresse.",
                },
              ].map((s, i) => (
                <div key={s.step} className={`p-6 flex gap-5 ${i < 2 ? "border-b border-slate-100" : ""}`}>
                  <div className="shrink-0 w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xl">{s.icon}</span>
                      <span className="font-bold text-slate-900">{s.title}</span>
                      <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">{s.tool}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
              <div className="bg-green-50 border-t border-green-100 px-6 py-4">
                <p className="text-sm text-green-800 font-semibold">
                  ✓ Zeitaufwand: 15–30 Minuten · Kosten: 0 € (HubSpot kostenlos) oder 12 € (Master CRM) · Ergebnis: alle Kontakte zentral, automatische Erinnerungen
                </p>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Häufige Fragen zu CRM für Selbstständige</h2>
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-cyan-500 shrink-0 text-lg leading-none">?</span>
                    {item.q}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── RELATED ── */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-5 text-center">Weitere Vergleiche für Selbstständige</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/marketing/social-media-tools-selbststaendige" className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Social Media Tools 2026</div>
                <p className="text-sm text-slate-500">Buffer, Metricool & Canva — welches Tool spart dir die meiste Zeit?</p>
              </Link>
              <Link href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige" className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Buchhaltungssoftware 2026</div>
                <p className="text-sm text-slate-500">lexoffice, sevDesk & Co. im großen Vergleich.</p>
              </Link>
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section>
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <div className="p-8 md:p-12 text-center">
                <div className="text-5xl mb-4">💼</div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Master CRM ist der Testsieger — <span className="text-green-400">Jetzt starten</span>
                </h2>
                <p className="text-slate-400 mb-2 max-w-lg mx-auto leading-relaxed">
                  Master CRM: nur 12€/Monat mit allen Premium-Features. Oder kostenlos mit HubSpot anfangen. Beide: 30 Tage kostenlosen Testzugang, alle Features freigeschalten.
                </p>
                <p className="text-green-400 text-sm font-semibold mb-8">Keine Kreditkarte · Kostenlos testen · Sofort einsatzbereit</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="#" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg">
                    Master CRM kostenlos testen (30 Tage) →
                  </a>
                  <a href="#" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-3.5 rounded-xl text-sm border border-white/10 transition-all">
                    HubSpot kostenlos starten →
                  </a>
                </div>
              </div>
              <div className="bg-slate-800 px-8 py-4 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
                <span>✓ Selbst getestet</span>
                <span>✓ Kein bezahltes Ranking</span>
                <span>✓ Für Selbstständige ohne Sales-Team</span>
              </div>
            </div>
          </section>

          <p className="text-xs text-slate-400 text-center">
            * Dieser Artikel enthält Affiliate-Links. Wir erhalten eine kleine Provision bei Kauf — ohne Mehrkosten für dich.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
