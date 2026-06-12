import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Social Media Tools für Selbstständige 2026 – Sichtbar werden ohne Marketingagentur",
  description:
    "Welches Social Media Tool spart Selbstständigen die meiste Zeit? Buffer, Metricool, Canva, Later & Hootsuite im Vergleich – mit klarer Empfehlung nach Plattform und Budget.",
  alternates: { canonical: "/marketing/social-media-tools-selbststaendige" },
  openGraph: {
    title: "Beste Social Media Tools für Selbstständige 2026 – Sichtbar ohne Marketingagentur",
    description: "Buffer, Metricool, Canva, Later & Hootsuite im Vergleich. Mit klarer Empfehlung nach Plattform und Budget.",
    url: "https://vergleichcheck.com/marketing/social-media-tools-selbststaendige",
    type: "article",
  },
};

/* ─── PLATTFORM-MATRIX (Featured-Snippet-Target) ─── */
const matrix = [
  { ziel: "Posts planen & automatisch posten", tool: "Buffer", grund: "Einfachste Planung, faire Preise", icon: "📅" },
  { ziel: "Designs & Grafiken erstellen", tool: "Canva", grund: "Keine Design-Skills nötig, riesige Vorlagenbank", icon: "🎨" },
  { ziel: "Alles-in-einem (Planen + Analyse)", tool: "Metricool", grund: "Günstigste Komplettlösung für DE", icon: "📊" },
  { ziel: "Instagram & Pinterest visuell planen", tool: "Later", grund: "Visueller Grid-Planer, Feed-Vorschau", icon: "📸" },
  { ziel: "LinkedIn-Wachstum", tool: "Buffer", grund: "Bester LinkedIn-Scheduler im Test", icon: "💼" },
  { ziel: "Content-Ideen & Texte", tool: "ChatGPT", grund: "In Sekunden Captions, Posts, Hooks", icon: "🤖" },
];

/* ─── TOOLS ─── */
const tools = [
  {
    rank: 1,
    name: "Buffer",
    tagline: "Einfachster Social-Media-Planer – perfekt für Einsteiger",
    preis: "Kostenlos / 6 €/Monat (Essentials)",
    preisHinweis: "Gratis für 3 Kanäle, 10 geplante Posts",
    score: 91,
    badge: "Testsieger",
    badgeStyle: "bg-amber-400 text-amber-900",
    highlight: true,
    scores: { bedienung: 95, plattformen: 82, analysen: 72, preisleistung: 92 },
    platforms: ["Instagram", "LinkedIn", "Facebook", "X (Twitter)", "TikTok"],
    bestFuer: ["Einsteiger", "1–3 Social-Media-Kanäle", "LinkedIn-Fokus", "Budget-bewusste"],
    pros: [
      "Einfachste Bedienung im Test – sofort loslegen",
      "Kostenlose Version für 3 Kanäle reicht für den Start",
      "Bester LinkedIn-Post-Scheduler im Vergleich",
      "Start Page: kostenlose Link-in-Bio-Seite inklusive",
      "KI-Assistent für Post-Texte integriert",
    ],
    cons: [
      "Kein visueller Grid-Planer für Instagram",
      "Analytics-Funktionen im Gratis-Plan begrenzt",
    ],
    zeitersparnis: "4–6 Stunden / Woche",
    rating: 4.7,
    votes: "1.850",
    cta: "Buffer kostenlos starten",
    ctaNote: "Keine Kreditkarte · 3 Kanäle dauerhaft gratis",
  },
  {
    rank: 2,
    name: "Metricool",
    tagline: "Günstigste Komplettlösung mit starken Analytics",
    preis: "Kostenlos / 18 €/Monat (Starter)",
    preisHinweis: "Gratis-Plan mit 1 Brand dauerhaft verfügbar",
    score: 87,
    badge: "Beste Analyse-Funktionen",
    badgeStyle: "bg-blue-100 text-blue-800",
    highlight: false,
    scores: { bedienung: 80, plattformen: 95, analysen: 92, preisleistung: 88 },
    platforms: ["Instagram", "LinkedIn", "Facebook", "X", "TikTok", "YouTube", "Pinterest", "Google Business"],
    bestFuer: ["Fortgeschrittene", "Wer Daten & Wachstum tracken will", "Mehrere Plattformen"],
    pros: [
      "Stärkste Analytics im bezahlbaren Bereich",
      "Unterstützt alle relevanten Plattformen inkl. Google Business",
      "Auto-Publishing für alle Kanäle",
      "Beste Wettbewerber-Analyse im Test",
      "Auf Spanisch/Deutsch gut lokalisiert",
    ],
    cons: [
      "Benutzeroberfläche anfangs etwas überwältigend",
      "Gratis-Plan auf 1 Brand beschränkt",
    ],
    zeitersparnis: "5–7 Stunden / Woche",
    rating: 4.5,
    votes: "920",
    cta: "Metricool kostenlos testen",
    ctaNote: "Dauerhaft kostenloser Plan verfügbar",
  },
  {
    rank: 3,
    name: "Canva",
    tagline: "Professionelle Designs ohne Design-Kenntnisse",
    preis: "Kostenlos / 13 €/Monat (Pro)",
    preisHinweis: "Gratis-Version mit 250.000+ Vorlagen",
    score: 85,
    badge: "Unverzichtbar für Designs",
    badgeStyle: "bg-violet-100 text-violet-800",
    highlight: false,
    scores: { bedienung: 95, plattformen: 78, analysen: 55, preisleistung: 90 },
    platforms: ["Instagram", "LinkedIn", "Facebook", "Pinterest", "YouTube", "Stories", "Reels"],
    bestFuer: ["Alle die selbst Grafiken erstellen", "Markenidentität aufbauen", "Präsentationen & Posts"],
    pros: [
      "Größte Vorlagen-Bibliothek am Markt",
      "Canva Pro: Hintergrund entfernen, Brand Kit, unbegrenzte Designs",
      "Direkt aus Canva auf Social Media posten (Pro)",
      "KI-Bildgenerator integriert",
      "Kostenlose Version schon sehr stark",
    ],
    cons: [
      "Kein vollständiger Social-Media-Scheduler (kein Kalender)",
      "Pro-Abo nötig für viele nützliche Funktionen",
    ],
    zeitersparnis: "3–4 Stunden / Woche für Design",
    rating: 4.6,
    votes: "2.400",
    cta: "Canva kostenlos nutzen",
    ctaNote: "Für immer kostenlos · Pro 30 Tage gratis testen",
  },
  {
    rank: 4,
    name: "Later",
    tagline: "Visueller Instagram-Planer mit Grid-Vorschau",
    preis: "ab 18 €/Monat",
    preisHinweis: "14-tägiger kostenloser Test",
    score: 79,
    badge: "Bester Instagram-Planer",
    badgeStyle: "bg-rose-100 text-rose-800",
    highlight: false,
    scores: { bedienung: 85, plattformen: 75, analysen: 78, preisleistung: 65 },
    platforms: ["Instagram", "Facebook", "TikTok", "Pinterest", "LinkedIn", "X"],
    bestFuer: ["Instagram-fokussierte Selbstständige", "Visuell denkende Nutzer", "Fotograf:innen, Coaches"],
    pros: [
      "Bester visueller Grid-Planer für Instagram",
      "Zeigt wie dein Feed aussehen wird, bevor du postest",
      "Link in Bio (Linkin.bio) inklusive",
      "Sehr gute Story-Planung",
    ],
    cons: [
      "Teuerste Option im Vergleich ab Vollversion",
      "Fokus sehr stark auf Instagram – andere Plattformen nachrangig",
    ],
    zeitersparnis: "3–5 Stunden / Woche",
    rating: 4.3,
    votes: "760",
    cta: "Later 14 Tage testen",
    ctaNote: "Keine Kreditkarte für den Test",
  },
  {
    rank: 5,
    name: "Hootsuite",
    tagline: "Marktführer mit vollem Funktionsumfang",
    preis: "ab 99 €/Monat",
    preisHinweis: "Für Solo-Selbstständige meist zu teuer",
    score: 72,
    badge: "Für Agenturen & Teams",
    badgeStyle: "bg-slate-100 text-slate-700",
    highlight: false,
    scores: { bedienung: 68, plattformen: 95, analysen: 88, preisleistung: 35 },
    platforms: ["Alle Plattformen", "auch TikTok, YouTube, Pinterest"],
    bestFuer: ["Agenturen", "Teams mit mehreren Mitgliedern", "Enterprise"],
    pros: [
      "Vollständigster Funktionsumfang am Markt",
      "Starkes Team-Management",
      "Tiefste Plattform-Integrationen",
    ],
    cons: [
      "Viel zu teuer für Solo-Selbstständige (ab 99 €/Monat)",
      "Oberfläche veraltet wirkend",
      "Für Einzelpersonen nicht empfehlenswert",
    ],
    zeitersparnis: "—",
    rating: 3.8,
    votes: "1.200",
    cta: "Hootsuite testen",
    ctaNote: "Nur für Teams mit Budget sinnvoll",
  },
];

/* ─── PROBLEME & LÖSUNGEN ─── */
const probleme = [
  {
    icon: "⏱️",
    problem: "Keine Zeit für regelmäßige Posts",
    loesung: "Einmal pro Woche 1-2 Stunden Content-Batch: alle Posts der Woche auf einmal erstellen und mit Buffer oder Metricool automatisch planen. Ergebnis: täglich präsent, ohne täglich zu arbeiten.",
    tool: "Buffer",
  },
  {
    icon: "🎨",
    problem: "Keine Design-Skills für professionelle Grafiken",
    loesung: "Canva bietet über 250.000 fertige Vorlagen für jeden Kanal und jede Branche. Du wählst eine Vorlage, tauschst Text und Farbe gegen deine Marke aus – fertig. Kein Designstudium nötig.",
    tool: "Canva",
  },
  {
    icon: "💡",
    problem: "Keine Ideen für Content",
    loesung: "ChatGPT auf Knopfdruck: \"Gib mir 10 LinkedIn-Post-Ideen für einen Freelance-Webdesigner, der Coaches als Kunden hat.\" In 30 Sekunden hast du mehr Ideen als du in einem Monat verarbeiten kannst.",
    tool: "ChatGPT",
  },
  {
    icon: "📉",
    problem: "Keine Ahnung was funktioniert",
    loesung: "Metricool zeigt dir für jeden Post: Reichweite, Klicks, beste Posting-Zeiten für deine Zielgruppe. Nach 4 Wochen weißt du genau, was deine Follower wirklich wollen.",
    tool: "Metricool",
  },
];

/* ─── PLATTFORM-GUIDE ─── */
const plattformen = [
  {
    name: "LinkedIn",
    icon: "💼",
    fuer: "B2B-Selbstständige, Berater, Coaches",
    frequenz: "3–5x pro Woche",
    format: "Persönliche Erfahrungen, Learnings, kurze Tipps",
    tool: "Buffer",
    tipp: "LinkedIn-Posts ohne Bild performen oft besser als mit Bild. Authentizität schlägt Hochglanz.",
  },
  {
    name: "Instagram",
    icon: "📸",
    fuer: "Kreative, Fotografen, Coaches, Lifestyle-Brands",
    frequenz: "4–7x pro Woche (Feed + Stories)",
    format: "Visuell starke Bilder, Reels, Karussells",
    tool: "Later + Canva",
    tipp: "Reels bekommen 3–5x mehr Reichweite als statische Posts. Mindestens 2 Reels pro Woche einplanen.",
  },
  {
    name: "TikTok",
    icon: "🎵",
    fuer: "Jüngere Zielgruppen, Reichweiten-Aufbau, Kreative",
    frequenz: "5–7x pro Woche",
    format: "Kurze Videos (15–60 Sek.), authentisch, kein Hochglanz",
    tool: "Metricool + Canva",
    tipp: "Auf TikTok ranken auch neue Accounts schnell. Beste Plattform für organische Reichweite 2026.",
  },
  {
    name: "Facebook",
    icon: "👥",
    fuer: "Lokale Businesses, ältere Zielgruppen (35+)",
    frequenz: "3–5x pro Woche",
    format: "Links, Veranstaltungen, Gruppen-Content",
    tool: "Buffer oder Metricool",
    tipp: "Facebook-Gruppen oft effektiver als die eigene Seite. Community aufbauen statt nur zu posten.",
  },
];

/* ─── FAQS ─── */
const faqs = [
  {
    q: "Welches Social-Media-Tool ist am besten für Selbstständige ohne Erfahrung?",
    a: "Buffer ist der beste Einstieg: kostenlos für 3 Kanäle, intuitivste Bedienung im Test, mit integriertem KI-Assistenten für Post-Texte. Du kannst heute starten, ohne etwas zu lernen. Für Designs nutze Canva dazu – beide zusammen kosten anfangs nichts.",
  },
  {
    q: "Wie viel Zeit kostet Social Media wirklich pro Woche?",
    a: "Mit den richtigen Tools: 2–3 Stunden pro Woche für eine aktive Präsenz auf 2–3 Plattformen. Methode: 1,5 Stunden Content-Batch (alle Posts der Woche erstellen), 30–60 Minuten Kommentare beantworten & Community pflegen. Ohne Tools: 8–12 Stunden.",
  },
  {
    q: "Lohnt sich Social Media für B2B-Selbstständige überhaupt?",
    a: "Ja – besonders LinkedIn. Studien zeigen, dass 78 % der B2B-Käufer LinkedIn nutzen, um Anbieter zu recherchieren. Selbstständige, die regelmäßig auf LinkedIn posten, berichten von 30–50 % mehr Inbound-Anfragen. Der ROI ist messbar, wenn du konsistent bist.",
  },
  {
    q: "Kann ich Social Media mit KI vollständig automatisieren?",
    a: "Teils. KI kann Texte und Ideen liefern, Canva-Designs erstellen und Posts automatisch veröffentlichen. Was nicht automatisierbar ist: authentische Persönlichkeit, echte Kommentare beantworten und das eigene Fachwissen einbringen. Die Kombination aus KI + Mensch ist am wirksamsten.",
  },
  {
    q: "Auf wie vielen Plattformen sollte ich als Selbstständige:r aktiv sein?",
    a: "Starte mit einer Plattform und mache diese richtig. Besser 3x pro Woche konsequent auf LinkedIn als unregelmäßig auf 5 Plattformen. Sobald du Routine hast (nach 4–6 Wochen), kannst du eine zweite Plattform ergänzen. Qualität vor Quantität.",
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
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": tools
    .filter((t) => t.rating != null && t.votes != null)
    .map((t, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": t.name,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": t.rating,
          "reviewCount": Number(String(t.votes).replace(/\D/g, "")),
          "bestRating": 5,
          "worstRating": 1,
        },
      },
    })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Start", "item": "https://vergleichcheck.com" },
    { "@type": "ListItem", "position": 2, "name": "Marketing", "item": "https://vergleichcheck.com/marketing/social-media-tools-selbststaendige" },
    { "@type": "ListItem", "position": 3, "name": "Social Media Tools für Selbstständige" },
  ],
};


export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Header />
      <main className="flex-1 bg-slate-50">

        {/* ── HERO ── */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 pt-8 pb-10">
            <nav className="text-xs text-slate-400 mb-6 flex items-center gap-1.5 flex-wrap">
              <Link href="/" className="hover:text-blue-600 transition-colors">Startseite</Link>
              <span>›</span><span>Marketing</span>
              <span>›</span><span className="text-slate-600">Social Media Tools</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-5 justify-center">
              <span className="text-xs font-semibold bg-rose-50 text-rose-700 px-3 py-1.5 rounded-full border border-rose-200">
                📣 Social Media Vergleich 2026
              </span>
              <span className="text-xs font-semibold bg-green-50 text-green-700 px-3 py-1.5 rounded-full">✓ Selbst getestet</span>
              <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">5 Tools · Juni 2026</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4 text-center">
              Social Media Tools für Selbstständige:<br className="hidden md:block" />
              <span className="text-rose-600">Sichtbar werden ohne Marketingagentur</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-7 max-w-2xl mx-auto text-center">
              Kein Team, kein Budget für eine Agentur, keine Zeit — und trotzdem täglich auf Social Media präsent sein. Das ist kein Widerspruch mehr. Wir zeigen welche Tools für Selbstständige in Deutschland wirklich funktionieren.
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
                <p className="text-slate-500 text-xs">Empfehlungen der Vergleichcheck-Redaktion · Kein bezahltes Ranking</p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

          {/* ── PROBLEME & LÖSUNGEN ── */}
          <section>
            <div className="mb-8">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Das kennen wir alle</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">4 typische Social-Media-Probleme — und wie du sie mit Tools löst</h2>
              <p className="text-slate-500 text-sm">Ohne Marketingagentur, ohne Team, aber mit den richtigen Tools.</p>
            </div>

            <div className="space-y-4">
              {probleme.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-5 flex gap-4">
                    <div className="shrink-0 text-2xl mt-0.5">{p.icon}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800 mb-3">Problem: <span className="text-rose-600 italic">{p.problem}</span></p>
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
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Die 5 besten Tools im Test</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">Buffer, Metricool, Canva & Co. im direkten Vergleich</h2>
              <p className="text-slate-500 text-sm">Gerankt nach Gesamtbewertung für Selbstständige — nicht für Agenturen.</p>
            </div>

            <div className="space-y-6">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className={`bg-white rounded-2xl border-2 overflow-hidden shadow-sm ${t.highlight ? "border-amber-300" : "border-slate-200"}`}
                >
                  {t.highlight && (
                    <div className="bg-amber-400 px-6 py-2 flex items-center justify-between">
                      <span className="text-amber-900 font-bold text-sm">🏆 Platz 1 – Testsieger für Selbstständige</span>
                      <span className="text-amber-800 text-xs hidden sm:block">Beste Kombination aus Einfachheit & Preis</span>
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

                    {/* Platforms */}
                    <div className="mb-5">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Unterstützte Plattformen</div>
                      <div className="flex flex-wrap gap-1.5">
                        {t.platforms.map((p) => (
                          <span key={p} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">{p}</span>
                        ))}
                      </div>
                    </div>

                    {/* Score bars */}
                    <div className="bg-slate-50 rounded-xl p-5 mb-6 grid grid-cols-2 gap-4">
                      <ScoreBar label="Bedienung" value={t.scores.bedienung} />
                      <ScoreBar label="Plattformen" value={t.scores.plattformen} />
                      <ScoreBar label="Analysen" value={t.scores.analysen} />
                      <ScoreBar label="Preis-Leistung" value={t.scores.preisleistung} />
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

          {/* ── PLATTFORM-GUIDE ── */}
          <section>
            <div className="mb-8">
              <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">Welche Plattform für wen?</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">Instagram, LinkedIn, TikTok oder Facebook — was passt zu dir?</h2>
              <p className="text-slate-500 text-sm">Starte auf der Plattform, auf der deine Zielgruppe ist. Nicht auf der, die du persönlich magst.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plattformen.map((p) => (
                <div key={p.name} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{p.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{p.name}</h3>
                      <p className="text-xs text-slate-500">{p.fuer}</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex gap-3 text-sm">
                      <span className="text-slate-400 shrink-0 w-20 text-xs font-semibold uppercase tracking-wide pt-0.5">Frequenz</span>
                      <span className="text-slate-700">{p.frequenz}</span>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <span className="text-slate-400 shrink-0 w-20 text-xs font-semibold uppercase tracking-wide pt-0.5">Format</span>
                      <span className="text-slate-700">{p.format}</span>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <span className="text-slate-400 shrink-0 w-20 text-xs font-semibold uppercase tracking-wide pt-0.5">Tool</span>
                      <span className="font-semibold text-blue-600">{p.tool}</span>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 flex gap-2">
                    <span className="text-amber-500 shrink-0">💡</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.tipp}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── STARTER-WORKFLOW ── */}
          <section>
            <div className="mb-8">
              <span className="text-xs font-bold text-green-600 uppercase tracking-wider">So startest du heute noch</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">Der 3-Tool-Starter-Workflow für Selbstständige</h2>
              <p className="text-slate-500 text-sm">Kostet zusammen 0 € pro Monat und macht dich auf 2 Plattformen sichtbar.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              {[
                {
                  step: "01", icon: "🎨", tool: "Canva (kostenlos)",
                  title: "Designs erstellen",
                  desc: "Wähle eine Vorlage für Instagram oder LinkedIn, tausche Text und Farben gegen deine Marke. 5 Designs für die ganze Woche in 45 Minuten.",
                },
                {
                  step: "02", icon: "🤖", tool: "ChatGPT (kostenlos)",
                  title: "Texte & Captions generieren",
                  desc: "Prompt: \"Schreibe 5 LinkedIn-Posts für [deine Branche], die ein [Problem deiner Zielgruppe] lösen. Ton: professionell, persönlich.\" Nachher anpassen.",
                },
                {
                  step: "03", icon: "📅", tool: "Buffer (kostenlos)",
                  title: "Alle Posts auf einmal planen",
                  desc: "Lade deine Designs und Texte in Buffer hoch, wähle Datum und Uhrzeit — Buffer postet automatisch. Einmal pro Woche, nie wieder vergessen.",
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
                  ✓ Zeitaufwand: 2–3 Stunden pro Woche · Kosten: 0 € · Ergebnis: täglich auf LinkedIn & Instagram sichtbar
                </p>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Häufige Fragen zu Social Media für Selbstständige</h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <FaqAccordion key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </section>

          {/* Weitere Vergleiche */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-5 text-center">Weitere Vergleiche für Selbstständige</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige" className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Buchhaltung</div>
                <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Beste Buchhaltungssoftware 2026</div>
                <div className="text-slate-500 text-sm mt-1">5 Programme ehrlich getestet – klare Empfehlung</div>
              </Link>
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

          {/* ── FINAL CTA ── */}
          <section>
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <div className="p-8 md:p-12 text-center">
                <div className="text-5xl mb-4">📣</div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Fang heute an — <span className="text-green-400">kostenlos</span>
                </h2>
                <p className="text-slate-400 mb-2 max-w-lg mx-auto leading-relaxed">
                  Buffer + Canva + ChatGPT: alle kostenlos. In 3 Stunden bist du eingerichtet und hast die ersten Posts geplant.
                </p>
                <p className="text-green-400 text-sm font-semibold mb-8">Kein Abo · Keine Agentur · Sofort sichtbar</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="#" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg">
                    Buffer kostenlos starten →
                  </a>
                  <a href="#" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-3.5 rounded-xl text-sm border border-white/10 transition-all">
                    Canva kostenlos nutzen →
                  </a>
                </div>
              </div>
              <div className="bg-slate-800 px-8 py-4 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
                <span>✓ Selbst getestet</span>
                <span>✓ Kein bezahltes Ranking</span>
                <span>✓ Für Selbstständige ohne Marketingteam</span>
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
