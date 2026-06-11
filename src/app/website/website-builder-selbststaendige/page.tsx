import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Beste Website Builder für Selbstständige 2026 – In 1 Tag online ohne Programmierkenntnisse",
  description:
    "Squarespace, Framer, Jimdo, Wix & Co. im Vergleich – welcher Website Builder passt zu Solo-Selbstständigen? Mit klarer Empfehlung nach Branche und Budget.",
  openGraph: {
    title: "Beste Website Builder für Selbstständige 2026 – In 1 Tag online",
    description: "Squarespace, Framer, Jimdo, Wix & Super.so im Vergleich. Mit Branchenempfehlung und 5-Schritte-Fahrplan.",
    url: "https://vergleichscheck.com/website/website-builder-selbststaendige",
    type: "article",
  },
};

/* ─── AUFGABEN-MATRIX ─── */
const matrix = [
  { ziel: "Professionelle Website in 1 Tag", tool: "Squarespace", grund: "Bestes Design out-of-the-box, sofort fertig", icon: "🌐" },
  { ziel: "Moderne Website mit KI bauen", tool: "Framer", grund: "KI-Assistent erstellt erste Version in Minuten", icon: "✨" },
  { ziel: "DSGVO-konform & made in Germany", tool: "Jimdo", grund: "Automatische DSGVO-Konformität, DE-Server", icon: "🇩🇪" },
  { ziel: "Maximale Gestaltungsfreiheit", tool: "Wix", grund: "Größte Template- und App-Auswahl am Markt", icon: "🎨" },
  { ziel: "Website für Notion-Nutzer", tool: "Super.so + Notion", grund: "Notion-Seite in 5 Minuten zur echten Website", icon: "⚡" },
  { ziel: "Online-Terminbuchung integrieren", tool: "Squarespace + Calendly", grund: "Direkt in jede Website einbettbar", icon: "📅" },
];

/* ─── TOOLS ─── */
const tools = [
  {
    rank: 1,
    name: "Squarespace",
    tagline: "Bestes Design out-of-the-box – perfekt für Coaches, Freelancer & Kreative",
    preis: "ab 13 €/Monat",
    preisHinweis: "14-tägiger kostenloser Test, keine Kreditkarte",
    score: 93,
    badge: "Testsieger",
    badgeStyle: "bg-amber-400 text-amber-900",
    highlight: true,
    scores: { design: 98, bedienung: 90, dsgvo: 78, preisleistung: 80 },
    useCases: ["Portfolio", "Business-Website", "Online-Shop", "Terminbuchung"],
    bestFuer: ["Coaches & Berater", "Kreative & Fotografen", "Freelancer mit Stil-Anspruch", "Wer sofort professionell wirken will"],
    pros: [
      "Schönste Templates im Test – sofort professionell wirkend",
      "All-in-one: Domain, Hosting, SSL, E-Mail in einem",
      "Acuity Scheduling: Terminbuchung direkt integriert",
      "E-Commerce inklusive (auch digitale Produkte)",
      "Hervorragender 24/7-Support",
    ],
    cons: [
      "Weniger Gestaltungsfreiheit als Wix oder Framer",
      "Kein dauerhaft kostenloser Plan",
    ],
    aufwand: "2–4 Stunden bis fertig",
    rating: 4.7,
    votes: "2.900",
    cta: "Squarespace 14 Tage testen",
    ctaNote: "Kein Kreditkarte · Danach ab 13 €/Monat",
    href: "https://squarespace.com",
  },
  {
    rank: 2,
    name: "Framer",
    tagline: "Modernster Website Builder mit KI – für zukunftsorientierte Selbstständige",
    preis: "Kostenlos / ab 15 €/Monat (Mini)",
    preisHinweis: "Kostenlos mit Framer-Subdomain, eigene Domain ab Mini",
    score: 88,
    badge: "Beste KI-Features",
    badgeStyle: "bg-violet-100 text-violet-800",
    highlight: false,
    scores: { design: 98, bedienung: 78, dsgvo: 72, preisleistung: 82 },
    useCases: ["Moderne Portfolio-Website", "Landingpage", "Startup-Website", "KI-generierte Designs"],
    bestFuer: ["Technik-affine Selbstständige", "Wer moderne Ästhetik will", "Landingpage-fokussierte Businesses"],
    pros: [
      "KI-Assistent erstellt erste Website-Version aus Textbeschreibung",
      "Modernste Design-Qualität – wirkt nie nach Template",
      "Kostenloser Plan mit eigenem Subdomain zum Testen",
      "Sehr schnelle Ladezeiten (top Core Web Vitals)",
      "Wächst rasant – aktive Community mit Templates",
    ],
    cons: [
      "Steiler als Squarespace für absolute Einsteiger",
      "Kein integrierter Online-Shop",
    ],
    aufwand: "3–6 Stunden bis fertig",
    rating: 4.6,
    votes: "1.100",
    cta: "Framer kostenlos ausprobieren",
    ctaNote: "Kostenloser Plan verfügbar",
    href: "https://framer.com",
  },
  {
    rank: 3,
    name: "Jimdo",
    tagline: "Made in Germany – automatische DSGVO-Konformität für den deutschen Markt",
    preis: "ab 9 €/Monat (Start)",
    preisHinweis: "Kostenloser Plan dauerhaft verfügbar",
    score: 82,
    badge: "Bestes für Deutschland",
    badgeStyle: "bg-blue-100 text-blue-800",
    highlight: false,
    scores: { design: 72, bedienung: 92, dsgvo: 98, preisleistung: 92 },
    useCases: ["Lokales Business", "Handwerker & Dienstleister", "DSGVO-sichere Website", "Kleines Budget"],
    bestFuer: ["Wer DSGVO-Konformität ohne Aufwand will", "Lokale Dienstleister in DE", "Kleinstes Budget"],
    pros: [
      "Automatische DSGVO-Konformität – keine Cookie-Konfiguration nötig",
      "Server in Deutschland (EU-DSGVO-konform)",
      "Günstigster Einstiegspreis im Test",
      "Jimdo Dolphin: KI baut Website aus 5 Fragen",
      "Dauerhaft kostenloser Plan verfügbar",
    ],
    cons: [
      "Design-Qualität unter Squarespace-Niveau",
      "Weniger Templates als Wix",
    ],
    aufwand: "1–2 Stunden bis fertig",
    rating: 4.2,
    votes: "870",
    cta: "Jimdo kostenlos starten",
    ctaNote: "Dauerhaft kostenloser Plan · Server in DE",
    href: "https://jimdo.com",
  },
  {
    rank: 4,
    name: "Wix",
    tagline: "Größte Auswahl, maximale Freiheit – für Selbstständige mit Zeit zum Tüfteln",
    preis: "ab 13 €/Monat (Light)",
    preisHinweis: "Kostenloser Plan mit Wix-Subdomain verfügbar",
    score: 79,
    badge: "Meiste Templates",
    badgeStyle: "bg-rose-100 text-rose-800",
    highlight: false,
    scores: { design: 82, bedienung: 80, dsgvo: 72, preisleistung: 78 },
    useCases: ["Jeder Use Case", "Buchungssystem", "Blog", "Online-Shop"],
    bestFuer: ["Wer maximale Freiheit will", "Fortgeschrittene ohne Programmier-Skills", "Großer App-Marktplatz gefragt"],
    pros: [
      "900+ Templates für jede Branche",
      "Wix App Market: 300+ Zusatz-Apps",
      "Wix AI: Website-Text automatisch generieren",
      "Umfangreichstes Buchungssystem integriert",
    ],
    cons: [
      "Template nach Veröffentlichung nicht mehr wechselbar",
      "Kann schnell überwältigend werden – zu viele Optionen",
      "Ladezeiten schlechter als Framer oder Squarespace",
    ],
    aufwand: "4–8 Stunden bis fertig",
    rating: 4.3,
    votes: "3.400",
    cta: "Wix kostenlos testen",
    ctaNote: "Kostenloser Plan verfügbar",
    href: "https://wix.com",
  },
  {
    rank: 5,
    name: "Super.so + Notion",
    tagline: "Für Notion-Nutzer: Website in 5 Minuten aus einer Notion-Seite",
    preis: "ab 12 $/Monat",
    preisHinweis: "Notion-Abo (kostenlos) + Super.so ab 12 $",
    score: 71,
    badge: "Schnellster Start",
    badgeStyle: "bg-slate-100 text-slate-700",
    highlight: false,
    useCases: ["Einfache Business-Website", "Portfolio", "Wissens-Hub", "Notion-Power-User"],
    bestFuer: ["Wer bereits Notion nutzt", "Minimalistische Website gefragt", "Schnellster möglicher Start"],
    pros: [
      "5 Minuten von Notion-Seite zur echten Website",
      "Keine neue Software lernen wenn Notion bekannt",
      "Perfekt für einfache Landingpages",
    ],
    cons: [
      "Design-Freiheit sehr begrenzt",
      "Nicht für komplexe Websites geeignet",
      "Nur sinnvoll wenn Notion eh genutzt wird",
    ],
    aufwand: "30 Min bis fertig (wenn Notion-Seite exists)",
    rating: 4.0,
    votes: "340",
    cta: "Super.so ausprobieren",
    ctaNote: "Kostenloser Test verfügbar",
    href: "https://super.so",
  },
];

/* ─── PROBLEME & LÖSUNGEN ─── */
const probleme = [
  {
    icon: "😰",
    problem: "Angst vor Technik und Programmierung",
    loesung: "Kein einziger der 5 getesteten Builder braucht eine Zeile Code. Squarespace oder Jimdo: du klickst, ziehst, tippst — fertig. Der Jimdo-KI-Assistent baut aus 5 Fragen eine komplette Website.",
    tool: "Jimdo / Squarespace",
  },
  {
    icon: "⏰",
    problem: "Keine Zeit für wochenlange Website-Projekte",
    loesung: "Mit einem modernen Builder ist eine professionelle Basis-Website in 2–4 Stunden fertig. Template wählen, Texte anpassen, Domain verbinden. Am selben Tag online — kein Witz.",
    tool: "Squarespace",
  },
  {
    icon: "💸",
    problem: "Webdesigner zu teuer (2.000–8.000 € Angebot erhalten)",
    loesung: "Ein professioneller Website Builder kostet 9–15 €/Monat — das sind 108–180 € pro Jahr. Selbst nach 5 Jahren günstiger als der günstigste Freelancer. Und du hast die volle Kontrolle.",
    tool: "Jimdo / Squarespace",
  },
  {
    icon: "🔒",
    problem: "Unsicherheit bei DSGVO und Datenschutz",
    loesung: "Jimdo (Server in Deutschland) übernimmt DSGVO-Konformität automatisch. Squarespace und Wix haben EU-Serveroption. Wichtig: Cookie-Banner und Datenschutzerklärung trotzdem selbst anpassen.",
    tool: "Jimdo",
  },
];

/* ─── BRANCHENEMPFEHLUNGEN ─── */
const branchen = [
  { branche: "Coach & Berater", empfehlung: "Squarespace", grund: "Beste Terminbuchung + professionelles Design", icon: "🧑‍💼" },
  { branche: "Fotograf / Kreative", empfehlung: "Squarespace", grund: "Portfolio-Templates ungeschlagen schön", icon: "📸" },
  { branche: "Handwerker / Lokales", empfehlung: "Jimdo", grund: "DSGVO-sicher, günstig, DE-Server", icon: "🔧" },
  { branche: "Freelancer / IT", empfehlung: "Framer", grund: "Moderne Ästhetik, schnelle Performance", icon: "💻" },
  { branche: "Online-Shop", empfehlung: "Squarespace", grund: "E-Commerce + Design-Qualität kombiniert", icon: "🛒" },
  { branche: "Notion-Power-User", empfehlung: "Super.so", grund: "Schnellster Start, kein neues Tool lernen", icon: "⚡" },
];

/* ─── IN 1 TAG ONLINE ─── */
const schritte = [
  {
    step: "1",
    titel: "Builder wählen & registrieren",
    desc: "Squarespace für den besten Start. 14 Tage kostenlos, keine Kreditkarte nötig.",
    dauer: "5 Min",
  },
  {
    step: "2",
    titel: "Template wählen & anpassen",
    desc: "Template für deine Branche wählen, Farben und Schriften auf deine Marke anpassen.",
    dauer: "30 Min",
  },
  {
    step: "3",
    titel: "Texte und Bilder einpflegen",
    desc: "Über-mich-Seite, Leistungen, Kontakt. KI-Assistent hilft bei Texten falls nötig.",
    dauer: "60–90 Min",
  },
  {
    step: "4",
    titel: "Domain verbinden",
    desc: "Eigene Domain kaufen (ca. 12 €/Jahr) oder beim Builder direkt dazubuchen.",
    dauer: "15 Min",
  },
  {
    step: "5",
    titel: "DSGVO & Impressum einrichten",
    desc: "Datenschutzerklärung-Generator nutzen (z.B. e-recht24.de), Impressum einfügen.",
    dauer: "30 Min",
  },
];

/* ─── FAQ ─── */
const faqs = [
  {
    frage: "Welcher Website Builder ist der beste für Selbstständige ohne Vorkenntnisse?",
    antwort: "Squarespace ist für die meisten Selbstständigen die beste Wahl: professionelles Design ohne Designkenntnisse, einfache Bedienung und alles inklusive (Domain, Hosting, SSL, E-Mail). Wer besonderen Wert auf DSGVO-Konformität und günstige Preise legt, ist mit Jimdo besser bedient.",
  },
  {
    frage: "Wie teuer ist eine eigene Website als Selbstständiger?",
    antwort: "Mit einem Website Builder zahlst du 9–15 €/Monat (108–180 €/Jahr) inklusive Hosting und SSL. Eine eigene Domain kostet zusätzlich ca. 12 €/Jahr. Das ergibt Gesamtkosten von ca. 120–200 € pro Jahr – deutlich günstiger als ein Webdesigner (2.000–8.000 €).",
  },
  {
    frage: "Kann ich wirklich in einem Tag eine professionelle Website erstellen?",
    antwort: "Ja, realistisch in 2–4 Stunden. Du wählst ein Template, passt Farben und Schriften an, füllst Über-mich-Seite, Leistungen und Kontakt aus, verbindest eine Domain und richtest Datenschutz ein. Das war's. Squarespace und Jimdo sind besonders schnell.",
  },
  {
    frage: "Ist Wix oder Squarespace besser für Selbstständige?",
    antwort: "Squarespace für Selbstständige die sofort professionell wirken wollen ohne viel Zeit zu investieren. Wix wenn du maximale Kontrolle und die größte Template-Auswahl willst und bereit bist mehr Zeit einzuplanen. Achtung bei Wix: das Template lässt sich nach dem Start nicht mehr wechseln.",
  },
  {
    frage: "Brauche ich für eine Website als Selbstständiger ein Impressum?",
    antwort: "Ja, in Deutschland ist ein Impressum gesetzlich vorgeschrieben (§ 5 TMG) — auch für Einzelunternehmer und Freelancer. Ebenso eine Datenschutzerklärung (DSGVO). Nutze einen kostenlosen Generator wie e-recht24.de. Jimdo hat beides teilweise automatisch integriert.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Welcher Website Builder ist der beste für Selbstständige?", "acceptedAnswer": { "@type": "Answer", "text": "Squarespace ist für die meisten Selbstständigen die beste Wahl: professionelles Design, All-in-one (Domain, Hosting, SSL), einfache Bedienung, ab 13 €/Monat." } },
    { "@type": "Question", "name": "Kann ich als Selbstständiger eine Website ohne Vorkenntnisse erstellen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Mit Squarespace, Jimdo oder Wix ist eine professionelle Website in 2–4 Stunden fertig – ohne Programmierkenntnisse. Jimdo baut sogar per KI-Assistent aus 5 Fragen eine erste Website." } }
  ]
};


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


export default function WebsiteBuilderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="flex-1 bg-slate-50">

        {/* ─── HERO ─── */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                🌐 Unabhängiger Vergleich 2026
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                Beste Website Builder für Selbstständige 2026 —{" "}
                <span className="text-blue-600">in 1 Tag online ohne Programmierkenntnisse</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Squarespace, Framer, Jimdo, Wix & Co. im ehrlichen Vergleich. Wir zeigen welcher Builder wirklich zu Solo-Selbstständigen passt — und wie du heute noch online gehst.
              </p>
            </div>

            {/* MATRIX */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-700">
                <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Schnellübersicht — Welches Tool für welches Ziel?</p>
              </div>
              <div className="divide-y divide-slate-800">
                {matrix.map((row) => (
                  <div key={row.ziel} className="px-5 py-3 flex items-center gap-4">
                    <span className="text-xl shrink-0 w-8">{row.icon}</span>
                    <span className="text-slate-300 text-sm flex-1">{row.ziel}</span>
                    <span className="font-semibold text-white text-sm shrink-0 w-36">{row.tool}</span>
                    <span className="text-slate-400 text-xs hidden md:block flex-1">{row.grund}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10 space-y-16">

          {/* ─── PROBLEME ─── */}
          <section>
            <div className="mb-8 text-center">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Das kennen wir alle</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">4 Gründe warum Selbstständige keine Website haben — gelöst</h2>
              <p className="text-slate-500 text-sm">Die häufigsten Ausreden — und warum sie heute nicht mehr gelten.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {probleme.map((p) => (
                <div key={p.problem} className="bg-white rounded-2xl border border-slate-200 p-6">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{p.problem}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{p.loesung}</p>
                  <span className="inline-block text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">
                    Lösung: {p.tool}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ─── TOOLS ─── */}
          <section>
            <div className="mb-8 text-center">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Alle Builder auf einen Blick</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">Squarespace, Framer & Co. im direkten Vergleich</h2>
              <p className="text-slate-500 text-sm">5 Builder getestet — bewertet nach Einfachheit, Design, DSGVO und Preis-Leistung.</p>
            </div>
            <div className="space-y-6">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className={`bg-white rounded-2xl border p-6 md:p-8 ${tool.highlight ? "border-amber-300 shadow-lg shadow-amber-500/5" : "border-slate-200"}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-lg font-bold text-slate-600 shrink-0">
                        {tool.rank}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-xl font-bold text-slate-900">{tool.name}</h3>
                          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${tool.badgeStyle}`}>{tool.badge}</span>
                        </div>
                        <p className="text-slate-500 text-sm">{tool.tagline}</p>
                      </div>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <div className="text-2xl font-bold text-slate-900">{tool.score}<span className="text-slate-400 text-sm font-normal">/100</span></div>
                      <div className="text-xs text-slate-400">Gesamtscore</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {tool.useCases.map((uc) => (
                      <span key={uc} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{uc}</span>
                    ))}
                  </div>

                  {/* Score bars */}
                  <div className="bg-slate-50 rounded-xl p-5 mb-6 grid grid-cols-2 gap-4">
                    <ScoreBar label="Design" value={tool.scores?.design ?? 0} />
                    <ScoreBar label="Bedienung" value={tool.scores?.bedienung ?? 0} />
                    <ScoreBar label="DSGVO" value={tool.scores?.dsgvo ?? 0} />
                    <ScoreBar label="Preis-Leistung" value={tool.scores?.preisleistung ?? 0} />
                  </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Vorteile</div>
                      <ul className="space-y-1.5">
                        {tool.pros.map((pro) => (
                          <li key={pro} className="flex gap-2 text-sm text-slate-600">
                            <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>{pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-2">Nachteile</div>
                      <ul className="space-y-1.5">
                        {tool.cons.map((con) => (
                          <li key={con} className="flex gap-2 text-sm text-slate-600">
                            <span className="text-rose-400 shrink-0 mt-0.5">✗</span>{con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-slate-100">
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <span className="text-slate-400 text-xs">Preis</span>
                        <div className="font-semibold text-slate-900">{tool.preis}</div>
                      </div>
                      <div>
                        <span className="text-slate-400 text-xs">Aufwand bis fertig</span>
                        <div className="font-semibold text-slate-900">{tool.aufwand}</div>
                      </div>
                      <div>
                        <span className="text-slate-400 text-xs">Bewertung</span>
                        <div className="font-semibold text-slate-900">★ {tool.rating} <span className="text-slate-400 font-normal text-xs">({tool.votes} Nutzer)</span></div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <a
                        href={tool.href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${tool.highlight ? "bg-green-600 hover:bg-green-700 text-white shadow-sm" : "bg-slate-900 hover:bg-slate-800 text-white"}`}
                      >
                        {tool.cta}
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 7h5M7.5 4.5l2.5 2.5-2.5 2.5"/></svg>
                      </a>
                      <div className="text-xs text-slate-400 mt-1">{tool.ctaNote}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── BRANCHENEMPFEHLUNGEN ─── */}
          <section>
            <div className="mb-8 text-center">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Empfehlung nach Branche</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">Welcher Builder passt zu deiner Branche?</h2>
              <p className="text-slate-500 text-sm">Nicht jeder Builder passt zu jedem Business — hier die direkte Empfehlung.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {branchen.map((b) => (
                <div key={b.branche} className="bg-white rounded-2xl border border-slate-200 p-5">
                  <div className="text-2xl mb-2">{b.icon}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{b.branche}</div>
                  <div className="font-bold text-slate-900 text-lg mb-1">{b.empfehlung}</div>
                  <p className="text-slate-500 text-sm">{b.grund}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── IN 1 TAG ONLINE ─── */}
          <section>
            <div className="mb-8 text-center">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Schritt für Schritt</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">In 1 Tag online — der komplette Fahrplan</h2>
              <p className="text-slate-500 text-sm">Gesamtaufwand: ca. 2–4 Stunden. Heute starten, heute fertig.</p>
            </div>
            <div className="space-y-3">
              {schritte.map((s) => (
                <div key={s.step} className="bg-white rounded-2xl border border-slate-200 p-5 flex gap-5 items-start">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shrink-0">
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-slate-900">{s.titel}</h3>
                      <span className="text-xs font-semibold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full shrink-0">{s.dauer}</span>
                    </div>
                    <p className="text-slate-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── FAQ ─── */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Häufige Fragen zu Website Buildern</h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <FaqAccordion key={item.frage} question={item.frage} answer={item.antwort} />
              ))}
            </div>
          </section>

          {/* ─── RELATED ─── */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-5 text-center">Weitere Vergleiche für Selbstständige</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/marketing/social-media-tools-selbststaendige"
                className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">Marketing</div>
                <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Social Media Tools für Selbstständige</div>
                <div className="text-slate-500 text-sm mt-1">Buffer, Canva & Co. – sichtbar werden</div>
              </Link>
              <Link
                href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige"
                className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Buchhaltung</div>
                <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Beste Buchhaltungssoftware 2026</div>
                <div className="text-slate-500 text-sm mt-1">lexoffice, sevDesk & Co. im Test</div>
              </Link>
            </div>
          </section>

        </div>

        {/* ─── FINAL CTA ─── */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <div className="text-5xl mb-4">🌐</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Heute noch online gehen
              </h2>
              <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
                Squarespace für professionelles Design — 14 Tage kostenlos testen. Jimdo für DSGVO-Konformität und kleinstes Budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://squarespace.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm shadow-lg"
                >
                  Squarespace 14 Tage testen
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 8h6M8 5l3 3-3 3"/></svg>
                </a>
                <a
                  href="https://jimdo.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-sm border border-white/20"
                >
                  Jimdo kostenlos starten
                </a>
              </div>
              <p className="text-slate-500 text-xs mt-4">Kein Technik-Wissen nötig · In 2–4 Stunden fertig</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
