import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "KI-Assistent für Content & Marketing 2026 – Welches Tool macht was am besten?",
  description:
    "ChatGPT, Claude, Gemini oder Perplexity? Für Selbstständige in Deutschland: Welches KI-Tool für Social Media, Blogartikel, E-Mails und Angebote am besten funktioniert – mit echten Beispielen.",
  openGraph: {
    title: "KI-Assistent für Content & Marketing 2026 – Welches Tool macht was am besten?",
    description: "ChatGPT, Claude, Perplexity & Co. nach konkreten Aufgaben bewertet. Mit fertigen Prompt-Vorlagen zum Kopieren.",
    url: "https://vergleichscheck.com/ki-tools/ki-assistent-content-marketing-selbststaendige",
    type: "article",
  },
};

/* ─── TASK MATRIX ─── */
const taskMatrix = [
  { task: "Social-Media-Posts", tool: "ChatGPT", grund: "Schnell, variabel, viele Vorlagen", icon: "📱" },
  { task: "Blogartikel schreiben", tool: "Claude", grund: "Längste & strukturierteste Texte", icon: "✍️" },
  { task: "E-Mails formulieren", tool: "ChatGPT", grund: "Flexibel in Ton und Länge", icon: "📧" },
  { task: "Angebote & Texte", tool: "Claude", grund: "Präzise, überzeugend, professionell", icon: "💼" },
  { task: "Recherche & Fakten", tool: "Perplexity", grund: "Aktuelle Infos mit Quellenangaben", icon: "🔍" },
  { task: "SEO-Texte", tool: "Jasper", grund: "SEO-Integration & Marketing-Vorlagen", icon: "📈" },
];

/* ─── TOOLS ─── */
const tools = [
  {
    name: "ChatGPT",
    anbieter: "OpenAI",
    preis: "Kostenlos / 20 €/Monat (Plus)",
    preisHinweis: "GPT-4o im Gratis-Plan verfügbar",
    score: 92,
    badge: "Vielseitigste Wahl",
    badgeStyle: "bg-emerald-100 text-emerald-800",
    highlight: true,
    bestFuer: ["Social-Media-Posts", "E-Mails", "Kurztexte", "Brainstorming", "Übersetzungen"],
    nichtFuer: ["Sehr lange Artikel (Kontextlimit)", "Aktuelle Nachrichten (Wissensdatum)"],
    staerken: [
      "Kostenloser Einstieg mit GPT-4o",
      "Größte Community & meiste Prompting-Tutorials",
      "DALL-E-Bildgenerierung integriert",
      "Plugins & GPT-Store für spezifische Aufgaben",
      "Am vielseitigsten für den Alltag",
    ],
    schwaechen: [
      "Kontextfenster für sehr lange Texte begrenzt",
      "Kein Internetzugang in der Gratis-Version",
      "Manchmal oberflächliche Antworten ohne gezieltes Prompting",
    ],
    prompt: {
      aufgabe: "Social-Media-Post für Instagram",
      beispiel: `Schreibe 3 Instagram-Post-Varianten für einen Freelance-Webdesigner. Thema: Warum eine gute Website mehr Kunden bringt. Ton: professionell, aber persönlich. Mit passendem Emoji und 5 Hashtags.`,
    },
    rating: 4.7,
    votes: "2.100",
    cta: "ChatGPT kostenlos starten",
    ctaStyle: "bg-emerald-600 hover:bg-emerald-700 text-white",
  },
  {
    name: "Claude",
    anbieter: "Anthropic",
    preis: "Kostenlos / 18 €/Monat (Pro)",
    preisHinweis: "Kostenlose Version täglich nutzbar",
    score: 90,
    badge: "Beste Texte & längste Inhalte",
    badgeStyle: "bg-violet-100 text-violet-800",
    highlight: false,
    bestFuer: ["Blogartikel", "Angebote", "Langtexte", "Präzise Formulierungen", "Strukturierte Dokumente"],
    nichtFuer: ["Bildgenerierung", "Aktuelle Nachrichten ohne Websuche"],
    staerken: [
      "Stärkstes Kontextfenster – für sehr lange Texte ideal",
      "Schreibt am natürlichsten und nuanciertesten auf Deutsch",
      "Exzellent für professionelle Angebote und Briefe",
      "Arbeitet präzise Anweisungen am besten um",
      "Deutlich weniger 'KI-klingende' Texte als Alternativen",
    ],
    schwaechen: [
      "Weniger Plugins und Erweiterungen als ChatGPT",
      "Kein integrierter Bildgenerator",
      "Community und Tutorials noch kleiner",
    ],
    prompt: {
      aufgabe: "Blogartikel-Einleitung",
      beispiel: `Schreibe eine Einleitung (150 Wörter) für einen Blogartikel mit dem Titel: "5 Fehler, die Freelancer bei der Preiskalkulation machen". Zielgruppe: deutschsprachige Freelancer. Stil: direkt, empathisch, mit einer provokanten Eröffnungsfrage.`,
    },
    rating: 4.6,
    votes: "980",
    cta: "Claude kostenlos testen",
    ctaStyle: "bg-violet-600 hover:bg-violet-700 text-white",
  },
  {
    name: "Perplexity",
    anbieter: "Perplexity AI",
    preis: "Kostenlos / 17 €/Monat (Pro)",
    preisHinweis: "Gratis-Version mit täglichem Pro-Kontingent",
    score: 82,
    badge: "Beste Recherche & aktuelle Infos",
    badgeStyle: "bg-blue-100 text-blue-800",
    highlight: false,
    bestFuer: ["Marktrecherche", "Aktuelle Trends", "Wettbewerberanalyse", "Faktencheck", "Keyword-Recherche"],
    nichtFuer: ["Kreativtexte", "Social-Media-Posts", "Bildgenerierung"],
    staerken: [
      "Greift in Echtzeit auf aktuelle Webinhalte zu",
      "Alle Antworten mit Quellenangaben belegt",
      "Ideal für Marktrecherche und Trendanalyse",
      "Spart Stunden manueller Recherche",
    ],
    schwaechen: [
      "Weniger kreativ bei reinen Schreibaufgaben",
      "Kein Bildgenerator",
      "Begrenzt für lange Content-Erstellung",
    ],
    prompt: {
      aufgabe: "Marktrecherche für Content-Planung",
      beispiel: `Was sind die aktuellen Top-5-Probleme, die Solo-Selbstständige in Deutschland 2026 mit ihrer Buchhaltung haben? Mit konkreten Daten und Quellen.`,
    },
    rating: 4.4,
    votes: "670",
    cta: "Perplexity kostenlos nutzen",
    ctaStyle: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    name: "Gemini",
    anbieter: "Google",
    preis: "Kostenlos / 19 €/Monat (Advanced)",
    preisHinweis: "Gratis-Version mit Gemini 1.5 Flash",
    score: 78,
    badge: "Google-Ökosystem-Integration",
    badgeStyle: "bg-amber-100 text-amber-800",
    highlight: false,
    bestFuer: ["Google Workspace Nutzer", "Docs & Gmail Integration", "Schnelle Textentwürfe"],
    nichtFuer: ["Spezialisierte Marketing-Tasks", "Sehr lange strukturierte Texte"],
    staerken: [
      "Direkte Integration in Gmail, Docs, Sheets",
      "Kostenlos mit Google-Konto nutzbar",
      "Gut für Google-Workspace-Nutzer",
      "Starke Mehrsprachigkeit",
    ],
    schwaechen: [
      "Textqualität auf Deutsch unter ChatGPT und Claude",
      "Weniger nützlich ohne Google Workspace",
      "Advanced-Abo relativ teuer für den Mehrwert",
    ],
    prompt: {
      aufgabe: "E-Mail-Vorlage",
      beispiel: `Schreibe eine Follow-up-E-Mail an einen potenziellen Kunden, der sich vor 2 Wochen nach meinen Webdesign-Leistungen erkundigt hat, aber nicht geantwortet hat. Ton: freundlich, nicht aufdringlich. Max. 80 Wörter.`,
    },
    rating: 4.1,
    votes: "890",
    cta: "Gemini kostenlos testen",
    ctaStyle: "bg-green-600 hover:bg-green-700 text-white",
  },
  {
    name: "Jasper",
    anbieter: "Jasper AI",
    preis: "ab 39 €/Monat",
    preisHinweis: "7-tägiger kostenloser Test",
    score: 76,
    badge: "Spezialist für Marketing-Texte",
    badgeStyle: "bg-rose-100 text-rose-800",
    highlight: false,
    bestFuer: ["SEO-Blogartikel", "Landingpages", "Werbetexte", "Content-Kampagnen", "Brand Voice"],
    nichtFuer: ["Gelegenheitsnutzer (zu teuer)", "Einfache Alltags-Tasks"],
    staerken: [
      "Speziell für Marketing und SEO gebaut",
      "Brand Voice: lernt deinen Schreibstil",
      "Viele fertige Marketing-Vorlagen",
      "Surfer SEO Integration für SEO-Texte",
    ],
    schwaechen: [
      "Teuerste Option im Vergleich (39 €+/Monat)",
      "Overkill für einfache Texte",
      "Lernkurve für volle Nutzung",
    ],
    prompt: {
      aufgabe: "SEO-optimierter Blogartikel",
      beispiel: `Keyword: "Freelancer Steuern sparen". Schreibe eine SEO-Gliederung mit H2/H3-Struktur für einen 1.500-Wörter-Artikel. Zielgruppe: deutschsprachige Freelancer, die ihre erste Steuererklärung machen.`,
    },
    rating: 4.0,
    votes: "520",
    cta: "Jasper 7 Tage testen",
    ctaStyle: "bg-rose-600 hover:bg-rose-700 text-white",
  },
];

/* ─── USE CASES ─── */
const useCases = [
  {
    icon: "📱",
    title: "Social-Media-Posts schreiben",
    desc: "Du brauchst regelmäßig Content für Instagram, LinkedIn oder Facebook — aber keine Zeit oder Inspiration.",
    winner: "ChatGPT",
    winnerGrund: "ChatGPT generiert in Sekunden mehrere Post-Varianten, schlägt Hashtags vor und passt den Ton auf Knopfdruck an.",
    tipp: "Prompt-Tipp: Gib immer Zielgruppe + Plattform + gewünschten Ton an. Beispiel: \"LinkedIn-Post für einen Steuerberater, professionell aber nahbar, kein Fachjargon.\"",
    alternativen: ["Claude für tiefgründigere LinkedIn-Artikel", "Gemini für Gmail/Workspace-Nutzer"],
    zeitersparnis: "3–4 Stunden / Woche",
  },
  {
    icon: "✍️",
    title: "Blogartikel & längere Texte erstellen",
    desc: "Für SEO und Autorität brauchst du regelmäßige Artikel — aber Schreiben kostet Zeit, die du nicht hast.",
    winner: "Claude",
    winnerGrund: "Claude schreibt die natürlichsten, am wenigsten \"KI-klingenden\" Texte auf Deutsch — ideal für Blogartikel, die auch wirklich gelesen werden.",
    tipp: "Prompt-Tipp: Gib Claude eine vollständige Gliederung mit und bitte um jeden Abschnitt separat — dann werden auch 2.000-Wörter-Artikel kohärent.",
    alternativen: ["Jasper für SEO-optimierte Artikel mit Keyword-Integration", "ChatGPT für kürzere Artikel unter 800 Wörtern"],
    zeitersparnis: "5–6 Stunden / Artikel",
  },
  {
    icon: "📧",
    title: "E-Mails & Kundenkommunikation",
    desc: "Angebote, Follow-ups, Absagen, Rechnungshinweise — E-Mails kosten Selbstständige erstaunlich viel Zeit.",
    winner: "ChatGPT",
    winnerGrund: "ChatGPT ist der beste E-Mail-Schreiber im Test: passt Ton und Länge flexibel an, generiert in Sekunden professionelle Entwürfe.",
    tipp: "Prompt-Tipp: Beschreibe die Situation kurz: \"Ich bin Webdesigner, schreibe eine freundliche Follow-up-Mail an einen Kunden, der seit 2 Wochen nicht auf mein Angebot geantwortet hat.\"",
    alternativen: ["Claude für sehr nuancierte oder heikle Kommunikation", "Gemini für Gmail-Nutzer (direkte Integration)"],
    zeitersparnis: "2–3 Stunden / Woche",
  },
  {
    icon: "💼",
    title: "Angebote & Verkaufstexte formulieren",
    desc: "Ein überzeugendes Angebot zu formulieren ist schwer — besonders wenn du nicht von Natur aus ein Texter bist.",
    winner: "Claude",
    winnerGrund: "Claude liefert die überzeugendsten, professionellsten Formulierungen im Test — ideal für Angebote, die tatsächlich akzeptiert werden.",
    tipp: "Prompt-Tipp: Gib Kontext über den Kunden: \"Mein Kunde ist ein Zahnarzt, der eine neue Website möchte. Er legt Wert auf Professionalität und Patienten-Vertrauen. Formuliere eine Angebotseinleitung.\"",
    alternativen: ["Jasper mit Marketing-Vorlagen für Verkaufspages und Landingpages", "ChatGPT für kürzere Angebots-Snippets"],
    zeitersparnis: "1–2 Stunden / Angebot",
  },
  {
    icon: "🔍",
    title: "Marktrecherche & Contentplanung",
    desc: "Was interessiert deine Zielgruppe? Welche Keywords lohnen sich? Was machen Mitbewerber? Recherche kostet Zeit.",
    winner: "Perplexity",
    winnerGrund: "Perplexity ist das einzige Tool, das aktuelle Webinhalte durchsucht und Quellen angibt — unverzichtbar für seriöse Recherche.",
    tipp: "Prompt-Tipp: Frage konkret: \"Was sind die 5 häufigsten Content-Themen, über die Freelance-Webdesigner in Deutschland 2026 schreiben sollten? Mit Begründung.\"",
    alternativen: ["ChatGPT für Brainstorming ohne Aktualitätsanforderung", "Claude für Analyse bereits gesammelter Informationen"],
    zeitersparnis: "4–5 Stunden / Monat",
  },
];

/* ─── PROFILES ─── */
const profiles = [
  {
    icon: "🌱",
    label: "KI-Einsteiger",
    desc: "Noch nie KI genutzt, will einfach anfangen",
    winner: "ChatGPT (Gratis)",
    farbe: "emerald",
  },
  {
    icon: "✍️",
    label: "Content Creator",
    desc: "Viel schreiben, Blogartikel, Newsletter, Social Media",
    winner: "Claude Pro",
    farbe: "violet",
  },
  {
    icon: "💰",
    label: "Budget-bewusst",
    desc: "Maximale Leistung zum niedrigsten Preis",
    winner: "ChatGPT Gratis + Perplexity Gratis",
    farbe: "blue",
  },
  {
    icon: "📈",
    label: "SEO-Fokus",
    desc: "Texte primär für Google und organischen Traffic",
    winner: "Jasper + Perplexity",
    farbe: "rose",
  },
  {
    icon: "🗂️",
    label: "Google-Workspace-Nutzer",
    desc: "Arbeitet hauptsächlich in Gmail, Docs, Sheets",
    winner: "Gemini Advanced",
    farbe: "amber",
  },
];

const kosten = [
  { tool: "ChatGPT", gratis: true, preis: "20 €/Monat", was: "GPT-4o, Bildgenerierung, Plugins" },
  { tool: "Claude", gratis: true, preis: "18 €/Monat", was: "Claude 3.5 Sonnet, größeres Kontextfenster" },
  { tool: "Perplexity", gratis: true, preis: "17 €/Monat", was: "Unbegrenzte Suchen, schnellere Antworten" },
  { tool: "Gemini", gratis: true, preis: "19 €/Monat", was: "Gemini Ultra, Workspace-Integration" },
  { tool: "Jasper", gratis: false, preis: "39 €/Monat", was: "Unbegrenzt Texte, Brand Voice, SEO" },
];

const faqs = [
  {
    q: "Welches KI-Tool ist am besten für Selbstständige ohne Erfahrung?",
    a: "ChatGPT ist der beste Einstieg: kostenlos verfügbar, größte Community, die meisten Tutorials auf Deutsch. Du kannst heute noch anfangen — einfach anmelden und loslegen. Für die ersten 30 Tage reicht die Gratis-Version vollkommen aus.",
  },
  {
    q: "Kann ich KI-generierte Texte 1:1 verwenden?",
    a: "Nicht empfehlenswert. KI-Texte sind ein Entwurf, kein Endprodukt. Du solltest jeden Text lesen, auf Fakten prüfen, persönliche Beispiele ergänzen und deinen eigenen Ton reinbringen. Richtig genutzt spart KI 70–80 % der Schreibzeit — den Rest gibst du für die menschliche Note aus.",
  },
  {
    q: "Sind KI-Texte für Google problematisch?",
    a: "Google bewertet Inhalte nach Qualität, nicht nach Entstehungsweise. KI-generierte Texte, die nützlich, korrekt und gut strukturiert sind, ranken genauso gut wie menschlich geschriebene. Reine KI-Spam-Texte ohne Mehrwert werden abgestraft — aber das waren auch reine Mensch-Spam-Texte.",
  },
  {
    q: "Wie viel Zeit spare ich wirklich mit KI?",
    a: "In unseren Tests: Social-Media-Post von 45 Minuten auf 5 Minuten. Blogartikel (1.500 Wörter) von 4–5 Stunden auf 45–60 Minuten. E-Mail-Entwürfe von 20 Minuten auf 2 Minuten. Über einen Monat summiert das sich schnell auf 15–20 Stunden eingesparter Zeit.",
  },
  {
    q: "Sind meine Daten bei KI-Tools sicher?",
    a: "ChatGPT, Claude und Gemini nutzen deine Eingaben standardmäßig für Training — du kannst das in den Einstellungen deaktivieren. Für sensible Kundendaten (Verträge, persönliche Infos) solltest du entweder die Enterprise-Variante nutzen oder keine echten Daten eingeben. Für Marketing-Texte und Content ist das kein Problem.",
  },
  {
    q: "Lohnt sich ein bezahltes Abo?",
    a: "ChatGPT Plus (20 €/Monat) lohnt sich ab ca. 2 Stunden eingesparter Arbeitszeit pro Monat — bei 100 €/Stunde Stundensatz entspricht das einem ROI von 10:1. Für Gelegenheitsnutzer reicht die Gratis-Version. Für tägliche Nutzung ist ein Abo die beste Investition in deine Produktivität.",
  },
];

/* ─── HELPERS ─── */
function RatingStars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
    <span className="text-amber-400">
      {"★".repeat(full)}{hasHalf ? "⯨" : ""}{"☆".repeat(5 - full - (hasHalf ? 1 : 0))}
    </span>
  );
}

function ScoreBar({ label, value, color = "blue" }: { label: string; value: number; color?: string }) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-500", emerald: "bg-emerald-500", violet: "bg-violet-500",
    amber: "bg-amber-400", rose: "bg-rose-500",
  };
  return (
    <div>
      <div className="flex justify-between text-xs text-slate-500 mb-1.5">
        <span>{label}</span><span className="font-bold text-slate-700">{value}/100</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full ${colorMap[color] || "bg-blue-500"} rounded-full`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

/* ─── PAGE ─── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Welches KI-Tool ist das beste für Selbstständige?", "acceptedAnswer": { "@type": "Answer", "text": "ChatGPT (GPT-4o) ist das vielseitigste KI-Tool für Selbstständige. Für deutschsprachige Texte und Nuancen ist Claude oft überlegen. Perplexity empfiehlt sich für Recherche mit aktuellen Quellen." } },
    { "@type": "Question", "name": "Ist ChatGPT kostenlos nutzbar?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, ChatGPT hat einen dauerhaft kostenlosen Plan mit GPT-4o mini. Für GPT-4o (deutlich besser) kostet ChatGPT Plus 20 $/Monat. Für die meisten Selbstständigen lohnt sich Plus." } }
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
              <span>›</span><span>KI-Tools</span>
              <span>›</span><span className="text-slate-600">KI für Content & Marketing</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-xs font-semibold bg-violet-50 text-violet-700 px-3 py-1.5 rounded-full border border-violet-200">
                🤖 KI-Tools Vergleich 2026
              </span>
              <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full">✓ Echte Tests mit allen Tools</span>
              <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">5 Tools · Juni 2026</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
              KI-Assistent für Content & Marketing:<br className="hidden md:block" />
              <span className="text-violet-600">Welches Tool macht was am besten?</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 max-w-2xl">
              ChatGPT, Claude, Perplexity, Gemini oder Jasper? Für Selbstständige in Deutschland ohne Marketingteam lautet die richtige Frage nicht „welches ist das beste Tool" — sondern <strong>„welches Tool löst welches Problem am besten"</strong>.
            </p>

            {/* Schnellentscheidung */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-800">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">⚡ Schnellentscheidung — für wen ist was?</span>
              </div>
              <div className="divide-y divide-slate-800">
                {taskMatrix.map((row) => (
                  <div key={row.task} className="px-5 py-3 flex items-center gap-4">
                    <span className="text-xl shrink-0">{row.icon}</span>
                    <span className="text-slate-300 text-sm flex-1">{row.task}</span>
                    <span className="font-bold text-white text-sm shrink-0">{row.tool}</span>
                    <span className="text-slate-500 text-xs hidden md:block shrink-0 max-w-[200px] text-right">{row.grund}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 bg-slate-800/50">
                <p className="text-slate-500 text-xs">Alle Tools getestet von der Vergleichscheck-Redaktion · Keine bezahlten Platzierungen</p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

          {/* ── USE CASES ── */}
          <section>
            <div className="mb-8 text-center">
              <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">Der wichtigste Abschnitt</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">5 konkrete Aufgaben – und welches Tool sie am besten löst</h2>
              <p className="text-slate-500 text-sm">Inklusive einsatzbereiter Prompt-Vorlagen, die du direkt kopieren kannst.</p>
            </div>

            <div className="space-y-6">
              {useCases.map((uc, i) => (
                <div key={uc.title} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="flex items-center gap-4 px-6 pt-6 pb-4">
                    <div className="shrink-0 w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-2xl">
                      {uc.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-slate-900 text-lg">{uc.title}</h3>
                        <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                          ⏱ {uc.zeitersparnis} Zeitersparnis
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-0.5">{uc.desc}</p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 space-y-4">
                    {/* Winner */}
                    <div className="bg-violet-50 border border-violet-100 rounded-xl p-4 flex gap-3">
                      <span className="text-violet-500 shrink-0 font-bold text-lg">🏆</span>
                      <div>
                        <div className="font-bold text-violet-900 mb-1">
                          Empfehlung: <span className="text-violet-700">{uc.winner}</span>
                        </div>
                        <p className="text-sm text-slate-700">{uc.winnerGrund}</p>
                      </div>
                    </div>

                    {/* Prompt example */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Prompt-Vorlage zum Kopieren</span>
                        <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">Direkt einsetzbar</span>
                      </div>
                      <p className="text-sm text-slate-700 font-mono leading-relaxed bg-white border border-slate-200 rounded-lg p-3">
                        {tools[i]?.prompt?.beispiel ?? ""}
                      </p>
                    </div>

                    {/* Tipp */}
                    <div className="flex gap-3 text-sm text-slate-600">
                      <span className="text-amber-500 shrink-0">💡</span>
                      <p>{uc.tipp}</p>
                    </div>

                    {/* Alternativen */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-slate-400">Alternativen:</span>
                      {uc.alternativen.map((a) => (
                        <span key={a} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">{a}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TOOL PROFILES ── */}
          <section>
            <div className="mb-8 text-center">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Alle Tools im Detail</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">ChatGPT, Claude & Co. im direkten Vergleich</h2>
              <p className="text-slate-500 text-sm">Stärken, Schwächen, Kosten und für wen jedes Tool wirklich passt.</p>
            </div>

            <div className="space-y-6">
              {tools.map((t) => (
                <div key={t.name} className={`bg-white rounded-2xl border-2 overflow-hidden shadow-sm ${t.highlight ? "border-emerald-300" : "border-slate-200"}`}>
                  {t.highlight && (
                    <div className="bg-emerald-500 px-6 py-2 flex items-center justify-between">
                      <span className="text-white font-bold text-sm">🏆 Vielseitigste Gesamtempfehlung</span>
                      <span className="text-emerald-100 text-xs hidden sm:block">Beste Wahl für die meisten Selbstständigen</span>
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-2xl font-bold text-slate-900">{t.name}</h3>
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${t.badgeStyle}`}>{t.badge}</span>
                        </div>
                        <p className="text-slate-400 text-xs mb-2">von {t.anbieter}</p>
                        <div className="flex items-center gap-2">
                          <RatingStars rating={t.rating} />
                          <span className="font-bold text-slate-700 text-sm">{t.rating}</span>
                          <span className="text-xs text-slate-400">({t.votes} Bewertungen)</span>
                        </div>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <div className="font-bold text-slate-900">{t.preis}</div>
                        <div className="text-xs text-slate-400">{t.preisHinweis}</div>
                      </div>
                    </div>

                    {/* Score bar */}
                    <div className="bg-slate-50 rounded-xl p-4 mb-5">
                      <ScoreBar label="Gesamtbewertung" value={t.score} color={t.highlight ? "emerald" : "blue"} />
                    </div>

                    {/* Best for / not for */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                      <div className="bg-emerald-50 rounded-xl p-4">
                        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3">Am besten geeignet für</div>
                        <ul className="space-y-1.5">
                          {t.bestFuer.map((b) => (
                            <li key={b} className="text-sm text-slate-700 flex gap-2">
                              <span className="text-emerald-500 shrink-0">✓</span>{b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-xl p-4">
                        <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">Weniger geeignet für</div>
                        <ul className="space-y-1.5">
                          {t.nichtFuer.map((n) => (
                            <li key={n} className="text-sm text-slate-700 flex gap-2">
                              <span className="text-red-400 shrink-0">✗</span>{n}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Stärken */}
                    <div className="mb-5">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Stärken im Test</div>
                      <ul className="space-y-2">
                        {t.staerken.map((s) => (
                          <li key={s} className="text-sm text-slate-700 flex gap-2.5">
                            <span className="text-emerald-500 shrink-0 font-bold">✓</span>{s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
                      <div className="text-xs text-slate-400">
                        {t.schwaechen[0]}
                      </div>
                      <a href="#" className={`shrink-0 inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-xl text-sm transition-all ${t.ctaStyle}`}>
                        {t.cta} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── KOSTENÜBERSICHT ── */}
          <section>
            <div className="mb-6">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Für Budget-Bewusste</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">Was kostet KI wirklich? Alle Preise im Überblick</h2>
              <p className="text-slate-500 text-sm">Gute Nachricht: Die drei besten Tools für Einsteiger sind kostenlos nutzbar.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-5 py-4 font-semibold text-slate-600">Tool</th>
                    <th className="text-center px-4 py-4 font-semibold text-slate-600">Gratis-Version</th>
                    <th className="text-left px-4 py-4 font-semibold text-slate-600">Preis Vollversion</th>
                    <th className="text-left px-4 py-4 font-semibold text-slate-600 hidden md:table-cell">Was ist drin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {kosten.map((k, i) => (
                    <tr key={k.tool} className={i % 2 === 0 ? "" : "bg-slate-50/40"}>
                      <td className="px-5 py-4 font-bold text-slate-900">{k.tool}</td>
                      <td className="px-4 py-4 text-center">
                        {k.gratis
                          ? <span className="inline-flex items-center justify-center w-7 h-7 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold">✓</span>
                          : <span className="inline-flex items-center justify-center w-7 h-7 bg-slate-100 text-slate-400 rounded-full text-xs">–</span>
                        }
                      </td>
                      <td className="px-4 py-4 font-semibold text-slate-800">{k.preis}</td>
                      <td className="px-4 py-4 text-slate-500 text-xs hidden md:table-cell">{k.was}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-5 py-4 bg-amber-50 border-t border-amber-100">
                <p className="text-xs text-amber-800">
                  💡 <strong>Unser Tipp:</strong> Starte mit ChatGPT Gratis + Perplexity Gratis. Das deckt 80 % aller Anwendungsfälle ab — ohne einen Cent auszugeben.
                </p>
              </div>
            </div>
          </section>

          {/* ── PROFILE ── */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Welches KI-Tool passt zu dir?</h2>
              <p className="text-slate-500 text-sm">Finde dein Profil — und sieh sofort welche Kombination am besten passt.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {profiles.map((p) => (
                <div key={p.label} className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <div className="font-bold text-slate-900 mb-1">{p.label}</div>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">{p.desc}</p>
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-xs text-slate-400 block mb-1">Empfehlung</span>
                    <span className="text-sm font-bold text-violet-600">{p.winner}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Häufige Fragen zu KI-Tools für Selbstständige</h2>
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-violet-500 shrink-0 text-lg leading-none">?</span>
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
              <Link href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige" className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Beste Buchhaltungssoftware 2026</div>
                <p className="text-sm text-slate-500">lexoffice, sevDesk & Co. im großen Vergleich.</p>
              </Link>
              <Link href="/buchhaltung/buchhaltungssoftware-ohne-vorkenntnisse" className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-2xl mb-2">🌱</div>
                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Buchhaltung ohne Vorkenntnisse</div>
                <p className="text-sm text-slate-500">Für Selbstständige, die noch nie Buchhaltung gemacht haben.</p>
              </Link>
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section>
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <div className="p-8 md:p-12 text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Fang heute an — <span className="text-violet-400">kostenlos</span>
                </h2>
                <p className="text-slate-400 mb-2 max-w-lg mx-auto leading-relaxed">
                  ChatGPT und Perplexity sind beide kostenlos. In 10 Minuten weißt du, ob KI deine Content-Arbeit transformiert.
                </p>
                <p className="text-violet-400 text-sm font-semibold mb-8">Kein Abo · Keine Kreditkarte · Sofort nutzbar</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="#" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg">
                    ChatGPT kostenlos starten →
                  </a>
                  <a href="#" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-3.5 rounded-xl text-sm border border-white/10 transition-all">
                    Claude ausprobieren →
                  </a>
                </div>
              </div>
              <div className="bg-slate-800 px-8 py-4 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
                <span>✓ Selbst getestet</span>
                <span>✓ Echte Prompt-Beispiele</span>
                <span>✓ Keine bezahlten Empfehlungen</span>
              </div>
            </div>
          </section>

          <p className="text-xs text-slate-400 text-center">
            * Dieser Artikel enthält Affiliate-Links. Wir erhalten eine kleine Provision bei Kauf über unsere Links — ohne Mehrkosten für dich.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
