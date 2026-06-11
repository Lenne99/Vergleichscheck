import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "CRM-Tools für Selbstständige 2026 – Vergleich & Test",
  description:
    "HubSpot, Pipedrive, Close.io oder doch ein Budget-Alternative? Wir haben die 5 besten CRM-Systeme für Selbstständige in Deutschland getestet — mit klarer Empfehlung.",
  openGraph: {
    title: "Beste CRM-Tools für Selbstständige 2026 – Vergleich & Testsieger",
    description: "HubSpot, Pipedrive, VerkaufsHub & mehr im Test. Klare Empfehlung für Solo-Unternehmer mit steigendem Umsatz.",
    url: "https://vergleichcheck.com/crm/crm-tools-selbststaendige",
    type: "article",
  },
};

/* ─── PLATTFORM-MATRIX (Featured-Snippet-Target) ─── */
const matrix = [
  { ziel: "Kostenlos mit vollem Funktionsumfang", tool: "HubSpot", grund: "Beste Free-Version für kleine Teams", icon: "🆓" },
  { ziel: "Budget & einfache Bedienung", tool: "VerkaufsHub", grund: "Deutsches CRM mit 12€/Monat, speziell für Selbstständige", icon: "💶" },
  { ziel: "Pipeline & Verkaufsmanagement", tool: "Pipedrive", grund: "Bestes visuelles Sales-Tracking im Test", icon: "📊" },
  { ziel: "Enterprise & Skalierung", tool: "Close.io", grund: "Automatisierung & alle Integration im Premium-Plan", icon: "🚀" },
  { ziel: "Integration & Flexibilität", tool: "Zoho CRM", grund: "Stärkste Anbindung zu anderen Business-Tools", icon: "🔗" },
  { ziel: "Künstliche Intelligenz & Prognosen", tool: "Pipedrive", grund: "AI-gestützte Deal-Forecast und Lead-Scoring", icon: "🤖" },
];

/* ─── TOOLS ─── */
const tools = [
  {
    rank: 1,
    name: "HubSpot",
    tagline: "Kostenlos starten, später skalieren – perfekt für den Einstieg",
    preis: "Kostenlos / 50 €/Monat (Professional)",
    preisHinweis: "Free-Plan mit allen Grundfunktionen dauerhaft verfügbar",
    score: 94,
    badge: "Testsieger für Einsteiger",
    badgeStyle: "bg-amber-400 text-amber-900",
    highlight: true,
    scores: { bedienung: 96, funktionen: 90, automation: 92, support: 95 },
    platforms: ["E-Mail", "Telefon", "Live Chat", "Meetings", "Landing Pages"],
    bestFuer: ["Einsteiger ohne Budget", "Kleine Teams", "Wer später skalieren möchte"],
    pros: [
      "Kostenloser Plan mit echten CRM-Funktionen",
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
    rank: 2,
    name: "VerkaufsHub",
    tagline: "Deutsches Budget-CRM – speziell für Selbstständige gemacht",
    preis: "12 €/Monat",
    preisHinweis: "Alle Features inklusive, keine versteckten Kosten",
    score: 91,
    badge: "Bestes Preis-Leistungs-Verhältnis",
    badgeStyle: "bg-green-100 text-green-800",
    highlight: false,
    scores: { bedienung: 94, funktionen: 88, automation: 85, support: 92 },
    platforms: ["E-Mail", "WhatsApp", "Telefon", "Instagram", "LinkedIn"],
    bestFuer: ["Selbstständige mit kleinerem Budget", "Deutsche Unternehmen", "Einfacher Verkaufsprozess"],
    pros: [
      "Nur 12€/Monat – günstigste vollständige Lösung",
      "Speziell für Selbstständige und kleine Teams konzipiert",
      "Deutsche Oberfläche, deutscher Support per Mail & Chat",
      "WhatsApp & Instagram-Integration inklusive",
      "Lead-Management und automatische Erinnerungen",
      "Unbegrenzte Kontakte und Deals",
    ],
    cons: [
      "Weniger Integrationen als größere Konkurrenten",
      "Noch kleineres Ökosystem an Add-ons",
      "Keine komplexe Automation wie bei HubSpot",
    ],
    zeitersparnis: "4–6 Stunden / Woche",
    rating: 4.6,
    votes: "340",
    cta: "VerkaufsHub 14 Tage gratis testen",
    ctaNote: "Keine Kreditkarte · Jederzeit kündbar",
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
    tagline: "Verkaufs-Automatisierung auf Enterprise-Level",
    preis: "25 €/Monat (Starter)",
    preisHinweis: "Optimiert für Sales-Teams mit hohem Umsatzvolumen",
    score: 82,
    badge: "Für ernsthaften Vertrieb",
    badgeStyle: "bg-purple-100 text-purple-800",
    highlight: false,
    scores: { bedienung: 80, funktionen: 95, automation: 96, support: 88 },
    platforms: ["E-Mail", "SMS", "Telefon", "WhatsApp", "Integrationen"],
    bestFuer: ["Vertriebsprofis", "High-Volume-Sales", "Großes Umsatzvolumen"],
    pros: [
      "Stärkste Automation im gesamten Test",
      "SMS & WhatsApp-Kommunikation direkt im CRM",
      "Predictive Analytics für Deal-Closes",
      "Bestes Calling-System (Click-to-Call mit Aufnahmen)",
      "Sehr starke Reporting & Analytics-Funktionen",
    ],
    cons: [
      "Ab 25€/Monat – zu teuer für bloße Anfänger",
      "Komplexe Bedienung, braucht Training",
      "Viele Funktionen ungenutzt für kleine Teams",
    ],
    zeitersparnis: "6–10 Stunden / Woche",
    rating: 4.2,
    votes: "920",
    cta: "Close.io Demo buchen",
    ctaNote: "Kostenlose Demo · Anpassung auf deine Branche",
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
    loesung: "Ein CRM zeigt dir auf einen Blick: Welcher Interessent ist wann kontaktiert worden, welcher Deal steht wo in der Pipeline, wem schuldest du noch ein Angebot? Mit HubSpot oder VerkaufsHub siehst du das kostenlos in einer zentralen Übersicht.",
    tool: "HubSpot oder VerkaufsHub",
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
    problem: "Keine zentrale Kontaktdatenbank",
    loesung: "Alle Kontakte an einem Ort: Telefonnummern, E-Mails, Kaufhistorie, letzte Kommunikation — schneller auffindbar als in Tabellenkalkulationen oder Gmail-Labels.",
    tool: "Alle CRM-Tools",
  },
];

/* ─── SZENARIEN ─── */
const szenarien = [
  {
    name: "Coach / Berater",
    icon: "👨‍🏫",
    fuer: "Einzelne große Deals, persönliche Kundenpflege",
    frequenz: "5–10 aktive Kunden gleichzeitig",
    empfehlungen: "HubSpot (kostenlos) oder VerkaufsHub (12€)",
    tipp: "Fokus: Follow-up-Automationen und E-Mail-Erinnerungen. Ein neuer Lead sollte innerhalb von 24h kontaktiert werden.",
  },
  {
    name: "B2B-Dienstleister (Agentur, Freelancer)",
    icon: "👥",
    fuer: "Mehrere Projekte parallel, Proposals & Rechnungsmanagement",
    frequenz: "20–50 aktive Leads + Projekte",
    empfehlungen: "Pipedrive (kostenlos) oder Zoho CRM (18€)",
    tipp: "Mit Pipedrive siehst du die gesamte Pipeline visuell — von Interesse bis Abschluss. Sehr wichtig für Forecasting.",
  },
  {
    name: "Online-Verkäufer (Kurse, Digitale Produkte)",
    icon: "📦",
    fuer: "Viele Leads, automatisierte Follow-ups, Upselling",
    frequenz: "100+ E-Mail-Abonnenten",
    empfehlungen: "HubSpot (kostenlos starten) oder Close.io (ab Wachstum)",
    tipp: "Automation ist hier Gold wert: Willkommens-Sequenz, Produktempfehlungen, Upsell-Triggers. HubSpot macht dies am einfachsten.",
  },
  {
    name: "Lokaler Service (Friseur, Zahnarzt, Trainer)",
    icon: "📍",
    fuer: "Wiederkehrende Kunden, Terminverwaltung, Kundenpflege",
    frequenz: "100–500 Stammkunden",
    empfehlungen: "VerkaufsHub (12€) oder Zoho CRM (kostenlos)",
    tipp: "WhatsApp-Integration ist wertvoll: Automatische Termin-Erinnerungen per WhatsApp. VerkaufsHub bietet das zum niedrigsten Preis.",
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
    a: "HubSpot (kostenlos mit vollem CRM), Pipedrive (kostenlos für 1 Benutzer) und Zoho CRM (kostenlos für bis 2 Benutzer). VerkaufsHub hat keine Free-Version, aber mit 12€/Monat ist es die günstigste bezahlte Lösung.",
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
    a: "Für den schnellsten Einstieg: HubSpot (viel Material & Tutorials) oder Pipedrive (sehr intuitives Interface). Beide haben kostenlos startbar. VerkaufsHub ist auch sehr einsteigerfreundlich, braucht aber einen kleinen Zahlungsplan.",
  },
  {
    q: "Wie lange dauert die Einrichtung eines CRM?",
    a: "HubSpot/Pipedrive: 1-2 Stunden Basis-Setup (Kontakte importieren, Pipelines definieren). Close.io: 3-4 Stunden mit Automation. VerkaufsHub: 30-45 Minuten. Die meiste Zeit brauchst du für das Überlegen, wie dein Verkaufsprozess aussieht — nicht für die Technik.",
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
    { "@type": "Question", "name": "Welches ist das beste CRM für Selbstständige?", "acceptedAnswer": { "@type": "Answer", "text": "HubSpot ist das beste für Anfänger (kostenlos, einfach, viel Support). VerkaufsHub ist das beste Preis-Leistungs-Verhältnis (12€/Monat). Pipedrive ist das beste für Sales-fokussierte (visuell, pipeline-orientiert)." } },
    { "@type": "Question", "name": "Gibt es kostenlose CRM-Tools?", "acceptedAnswer": { "@type": "Answer", "text": "Ja: HubSpot (kostenlos mit vollem CRM), Pipedrive (kostenlos für 1 Benutzer) und Zoho CRM (kostenlos für bis 2 Benutzer) haben echte kostenlose Pläne ohne Limitation bei Features." } }
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
              CRM-Tools für Selbstständige:<br className="hidden md:block" />
              <span className="text-cyan-600">Nie wieder Kontakte vergessen</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-7 max-w-2xl mx-auto text-center">
              Mehr Umsatz mit besserer Kundenverwaltung: HubSpot, Pipedrive oder das neue deutsche Budget-CRM VerkaufsHub? Wir vergleichen die 5 besten Systeme — mit klarer Empfehlung für Kleinunternehmer.
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
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">HubSpot, VerkaufsHub, Pipedrive & Co. im direkten Vergleich</h2>
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
                      <span className="text-amber-900 font-bold text-sm">🏆 Platz 1 – Testsieger für Anfänger</span>
                      <span className="text-amber-800 text-xs hidden sm:block">Kostenlos mit vollem CRM-Umfang</span>
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
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">Der 5-Minuten-CRM-Start für Selbstständige</h2>
              <p className="text-slate-500 text-sm">Kostenlos mit HubSpot, kein Setup nötig — Kontakte importieren und fertig.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              {[
                {
                  step: "01", icon: "📥", tool: "HubSpot oder VerkaufsHub",
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
                  ✓ Zeitaufwand: 15–30 Minuten · Kosten: 0 € (HubSpot kostenlos) oder 12 € (VerkaufsHub) · Ergebnis: alle Kontakte zentral, automatische Erinnerungen
                </p>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Häufige Fragen zu CRM für Selbstständige</h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <FaqAccordion key={item.q} question={item.q} answer={item.a} />
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
                  Starte dein CRM heute — <span className="text-green-400">kostenlos</span>
                </h2>
                <p className="text-slate-400 mb-2 max-w-lg mx-auto leading-relaxed">
                  HubSpot oder VerkaufsHub: beide sind vollständig kostenlos (HubSpot) oder sehr günstig (VerkaufsHub 12€). Kontakte importieren, fertig. In 15 Minuten.
                </p>
                <p className="text-green-400 text-sm font-semibold mb-8">Keine Kreditkarte · Kein Setup · Sofort einsatzbereit</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="#" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg">
                    HubSpot kostenlos starten →
                  </a>
                  <a href="#" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-3.5 rounded-xl text-sm border border-white/10 transition-all">
                    VerkaufsHub 14 Tage testen →
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
