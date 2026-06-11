import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Beste Produktivitäts-Tools für Selbstständige 2026 – Kein Overkill, einfach nutzbar",
  description:
    "Notion, Todoist, Toggl Track & Co. im Vergleich – welches Tool passt zu Solo-Selbstständigen ohne IT-Kenntnisse? Mit klarer Empfehlung nach Anwendungsfall.",
  openGraph: {
    title: "Beste Produktivitäts-Tools für Selbstständige 2026 – Kein Overkill",
    description: "Notion, Todoist, Toggl Track & Co. im Vergleich. 3 fertige System-Setups für Solo-Selbstständige – direkt umsetzbar.",
    url: "https://vergleichcheck.com/produktivitaet/produktivitaet-tools-selbststaendige",
    type: "article",
  },
};

/* ─── AUFGABEN-MATRIX (Featured-Snippet-Target) ─── */
const matrix = [
  { ziel: "Aufgaben & To-Dos verwalten", tool: "Todoist", grund: "Einfachstes Task-Management, sofort nutzbar", icon: "✅" },
  { ziel: "Alles-in-einem (Notizen, Tasks, Projekte)", tool: "Notion", grund: "Flexibelste All-in-one-Lösung", icon: "🗂️" },
  { ziel: "Arbeitszeit erfassen & abrechnen", tool: "Toggl Track", grund: "Schnellstes Timetracking, 1-Klick-Start", icon: "⏱️" },
  { ziel: "Zeiterfassung kostenlos", tool: "Clockify", grund: "Vollständig kostenlos, unbegrenzte Projekte", icon: "🆓" },
  { ziel: "Projekte visuell planen (Kanban)", tool: "Trello", grund: "Einfachstes Board-System, kein Overkill", icon: "📋" },
  { ziel: "Fokus & tiefes Arbeiten", tool: "Todoist + Pomodoro", grund: "Task + Zeitblöcke kombinieren", icon: "🎯" },
];

/* ─── TOOLS ─── */
const tools = [
  {
    rank: 1,
    name: "Notion",
    tagline: "Das digitale Gehirn für dein Solo-Business",
    preis: "Kostenlos / 10 €/Monat (Plus)",
    preisHinweis: "Kostenlos für Einzelpersonen dauerhaft",
    score: 92,
    badge: "Testsieger",
    badgeStyle: "bg-amber-400 text-amber-900",
    highlight: true,
    scores: { bedienung: 82, features: 98, mobileApp: 85, preisleistung: 95 },
    useCases: ["Aufgaben & Projekte", "Notizen & Wissen", "Kundenverwaltung", "Content-Planung"],
    bestFuer: ["Selbstständige die alles an einem Ort wollen", "Kreative & Coaches", "Wer kein extra CRM braucht"],
    pros: [
      "Alles-in-einem: Tasks, Notizen, Datenbanken, Kalender",
      "Kostenlose Version für Einzelpersonen sehr umfangreich",
      "1.000+ fertige Templates für Solo-Business",
      "KI-Assistent für Texte und Zusammenfassungen integriert",
      "Funktioniert als leichtes CRM für Kundenverwaltung",
    ],
    cons: [
      "Einstieg dauert 1–2 Stunden für optimales Setup",
      "Kann bei falscher Nutzung selbst zum Produktivitätskiller werden",
    ],
    zeitersparnis: "3–5 Stunden / Woche",
    rating: 4.7,
    votes: "3.200",
    cta: "Notion kostenlos starten",
    ctaNote: "Für Einzelpersonen dauerhaft kostenlos",
    href: "https://notion.so",
  },
  {
    rank: 2,
    name: "Todoist",
    tagline: "Bestes reines Task-Management – schnell und ablenkungsfrei",
    preis: "Kostenlos / 5 €/Monat (Pro)",
    preisHinweis: "Gratis-Plan mit 5 Projekten dauerhaft",
    score: 88,
    badge: "Bestes Task-Management",
    badgeStyle: "bg-blue-100 text-blue-800",
    highlight: false,
    scores: { bedienung: 95, features: 82, mobileApp: 95, preisleistung: 92 },
    useCases: ["Tägliche To-Do-Liste", "Wiederkehrende Aufgaben", "Prioritäten setzen", "Projekte strukturieren"],
    bestFuer: ["Wer nur einen zuverlässigen Task-Manager sucht", "People who inbox-zero ihre Tasks", "Klare Struktur ohne Schnickschnack"],
    pros: [
      "Schnellste Aufgabeneingabe im Test (natürliche Sprache: 'Mo 9 Uhr Angebot schreiben')",
      "Karma-System motiviert zu regelmäßiger Nutzung",
      "Hervorragende mobile App – immer dabei",
      "Wiederkehrende Aufgaben perfekt umgesetzt",
      "Integriert sich mit Kalender, Gmail, Slack",
    ],
    cons: [
      "Kein Timetracking integriert",
      "Keine Notiz-Funktion (nur Aufgaben)",
    ],
    zeitersparnis: "2–3 Stunden / Woche",
    rating: 4.6,
    votes: "2.100",
    cta: "Todoist gratis testen",
    ctaNote: "Gratis-Plan mit 5 Projekten · Kein Ablaufdatum",
    href: "https://todoist.com",
  },
  {
    rank: 3,
    name: "Toggl Track",
    tagline: "Schnellstes Timetracking – ideal für Stundenabrechnung",
    preis: "Kostenlos / 9 €/Monat (Starter)",
    preisHinweis: "Kostenlos bis 5 Nutzer, unbegrenzte Projekte",
    score: 85,
    badge: "Bestes Timetracking",
    badgeStyle: "bg-rose-100 text-rose-800",
    highlight: false,
    scores: { bedienung: 92, features: 78, mobileApp: 88, preisleistung: 85 },
    useCases: ["Stundenabrechnung mit Kunden", "Eigene Produktivität analysieren", "Projektzeiten tracken", "Rechnungen vorbereiten"],
    bestFuer: ["Freelancer die nach Stunden abrechnen", "Wer wissen will wo die Zeit bleibt", "Projektbasiertes Arbeiten"],
    pros: [
      "1-Klick-Start: Timer läuft sofort los",
      "Browser-Extension: direkt aus Jira, Asana, Gmail tracken",
      "Detaillierte Berichte nach Projekt und Kunde",
      "Automatische Zeiterfassung (optional)",
      "Exportfunktion für Rechnungsstellung",
    ],
    cons: [
      "Kostenloser Plan ohne Rechnungs-Templates",
      "Keine Task-Management-Funktion",
    ],
    zeitersparnis: "1–2 Stunden / Woche Abrechnungsaufwand",
    rating: 4.5,
    votes: "1.450",
    cta: "Toggl Track kostenlos nutzen",
    ctaNote: "Für Einzelpersonen dauerhaft kostenlos",
    href: "https://toggl.com/track",
  },
  {
    rank: 4,
    name: "Clockify",
    tagline: "100% kostenlose Zeiterfassung ohne Einschränkungen",
    preis: "Kostenlos (Basis) / 4,99 €/Monat (Standard)",
    preisHinweis: "Basisversion dauerhaft kostenlos, unbegrenzte Nutzer",
    score: 80,
    badge: "Bestes Preis-Leistung",
    badgeStyle: "bg-emerald-100 text-emerald-800",
    highlight: false,
    scores: { bedienung: 80, features: 75, mobileApp: 78, preisleistung: 98 },
    useCases: ["Stundenabrechnung", "Projekte mit Budget verwalten", "Team-Timetracking", "Kostenlose Toggl-Alternative"],
    bestFuer: ["Wer Toggl zu teuer ist", "Mehrere Projekte gleichzeitig", "Kostenbewusste Selbstständige"],
    pros: [
      "Vollständig kostenlos – keine versteckten Limits",
      "Unbegrenzte Projekte und Kunden im Gratis-Plan",
      "Rechnungen direkt aus Clockify erstellen",
      "Sehr guter Kalender-Überblick",
    ],
    cons: [
      "Benutzeroberfläche weniger poliert als Toggl",
      "Mobile App nicht ganz so smooth",
    ],
    zeitersparnis: "1–2 Stunden / Woche",
    rating: 4.4,
    votes: "870",
    cta: "Clockify kostenlos starten",
    ctaNote: "Dauerhaft kostenlos · Keine Kreditkarte",
    href: "https://clockify.me",
  },
  {
    rank: 5,
    name: "Trello",
    tagline: "Einfachstes Kanban-Board – perfekt für Projekte ohne Overkill",
    preis: "Kostenlos / 5 €/Monat (Standard)",
    preisHinweis: "Gratis-Plan mit 10 Boards dauerhaft",
    score: 76,
    badge: "Einfachstes Projektboard",
    badgeStyle: "bg-slate-100 text-slate-700",
    highlight: false,
    scores: { bedienung: 92, features: 68, mobileApp: 82, preisleistung: 88 },
    useCases: ["Projekte visualisieren", "Kundenprojekte tracken", "Content-Redaktionsplan", "Einfaches Kanban"],
    bestFuer: ["Wer Aufgaben visuell sehen will", "Ein-Personen-Projekte", "Einstieg in Projektmanagement"],
    pros: [
      "Sofort verständlich – kein Tutorial nötig",
      "Gratis-Plan für Selbstständige oft ausreichend",
      "Power-Ups für Kalender, Zeiterfassung etc.",
    ],
    cons: [
      "Keine nativen Sub-Tasks (ohne Power-Up)",
      "Bei vielen Projekten unübersichtlich",
      "Weniger Features als Notion für denselben Preis",
    ],
    zeitersparnis: "1–2 Stunden / Woche",
    rating: 4.2,
    votes: "1.650",
    cta: "Trello kostenlos nutzen",
    ctaNote: "10 Boards dauerhaft kostenlos",
    href: "https://trello.com",
  },
];

/* ─── PROBLEME & LÖSUNGEN ─── */
const probleme = [
  {
    icon: "📋",
    problem: "Zu viele Aufgaben, kein Überblick",
    loesung: "Ein zentrales System wie Todoist oder Notion bringt alle Aufgaben an einen Ort. Der Trick: alles sofort rein – dann leer im Kopf. Danach täglich 5 Minuten priorisieren.",
    tool: "Todoist",
  },
  {
    icon: "🕐",
    problem: "Keine Ahnung wo die Zeit bleibt",
    loesung: "Toggl Track oder Clockify laufen im Hintergrund. Nach einer Woche siehst du schwarz auf weiß: 30% der Zeit geht für E-Mails drauf. Dann kannst du gezielt optimieren.",
    tool: "Toggl Track",
  },
  {
    icon: "🌀",
    problem: "Kein System, immer neu anfangen",
    loesung: "Notion mit einem fertigen Template (z.B. 'Solo Business OS') gibt deinem Alltag Struktur. Einmal einrichten, dauerhaft nutzen – keine wöchentliche Neuerfindung mehr.",
    tool: "Notion",
  },
  {
    icon: "😵",
    problem: "Tools ausprobiert, aber nie durchgehalten",
    loesung: "Das Geheimnis: Ein Tool wählen und 30 Tage dabei bleiben. Für die meisten Solo-Selbstständigen reicht Todoist (Tasks) + Toggl Track (Zeit). Mehr braucht es nicht.",
    tool: "Todoist + Toggl",
  },
];

/* ─── SYSTEM-VORSCHLÄGE ─── */
const systeme = [
  {
    profil: "Minimal-System (0 €)",
    beschreibung: "Nichts Kompliziertes, sofort starten",
    tools: ["Todoist (kostenlos)", "Clockify (kostenlos)"],
    fuer: "Einsteiger & Skeptiker",
    highlight: false,
  },
  {
    profil: "Solo-Business-System (ab 0 €)",
    beschreibung: "Alles an einem Ort, skalierbar",
    tools: ["Notion (kostenlos)", "Toggl Track (kostenlos)"],
    fuer: "Selbstständige die Struktur wollen",
    highlight: true,
  },
  {
    profil: "Profi-System (ab 14 €/Monat)",
    beschreibung: "Maximale Effizienz für etablierte Freelancer",
    tools: ["Notion Pro (10 €)", "Toggl Track Starter (9 €)"],
    fuer: "Wer auf Zeit basierend abrechnet",
    highlight: false,
  },
];

/* ─── FAQ ─── */
const faqs = [
  {
    frage: "Welches Produktivitäts-Tool ist das beste für Selbstständige?",
    antwort: "Für die meisten Solo-Selbstständigen ist Notion die beste Wahl: Es vereint Aufgaben, Notizen, Kundenverwaltung und Planung in einem kostenlosen Tool. Wer nur einen einfachen Task-Manager sucht, ist mit Todoist besser bedient – weniger Ablenkung, schneller Einstieg.",
  },
  {
    frage: "Brauche ich wirklich ein Zeiterfassungs-Tool?",
    antwort: "Wenn du nach Stunden abrechnest: unbedingt ja. Toggl Track oder Clockify laufen im Hintergrund und sparen dir stundenlangen Abrechnungsaufwand. Selbst wenn du Pauschalen nimmst, zeigt Zeiterfassung ob deine Preise stimmen – die meisten Selbstständigen unterschätzen ihren Zeitaufwand massiv.",
  },
  {
    frage: "Ist Notion wirklich kostenlos?",
    antwort: "Ja, Notion ist für Einzelpersonen dauerhaft kostenlos – ohne versteckte Limits für Seiten oder Blöcke. Der bezahlte Plus-Plan (10 €/Monat) lohnt sich erst wenn du Gäste einladen oder unbegrenzte KI-Nutzung willst.",
  },
  {
    frage: "Todoist oder Notion – was soll ich nehmen?",
    antwort: "Todoist wenn du ausschließlich Aufgaben verwalten willst – schneller, fokussierter, weniger Ablenkung. Notion wenn du auch Notizen, Ideen, Kundendaten und Content-Planung an einem Ort haben möchtest. Viele Selbstständige nutzen beide: Notion als Wissenssystem, Todoist als tägliche To-Do-Liste.",
  },
  {
    frage: "Was ist der Unterschied zwischen Toggl Track und Clockify?",
    antwort: "Beide erfassen Zeit zuverlässig. Toggl Track hat die bessere UX und Browser-Extension, ist aber ab mehr Funktionen kostenpflichtig. Clockify ist vollständig kostenlos und bietet sogar Rechnungserstellung im Gratis-Plan. Für einfaches Timetracking tut Clockify alles was Toggl macht – für 0 Euro.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Welches Produktivitäts-Tool ist das beste für Selbstständige?", "acceptedAnswer": { "@type": "Answer", "text": "Notion ist das beste All-in-one-Produktivitäts-Tool für Selbstständige: Tasks, Notizen, Kundenverwaltung und Planung in einem – dauerhaft kostenlos für Einzelpersonen." } },
    { "@type": "Question", "name": "Ist Notion wirklich kostenlos?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Notion ist für Einzelpersonen dauerhaft kostenlos ohne versteckte Limits. Der Plus-Plan (10 €/Monat) lohnt sich erst wenn man Gäste einladen oder unbegrenzte KI nutzen möchte." } }
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


export default function ProduktivitaetPage() {
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
                ⏱️ Unabhängiger Vergleich 2026
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                Beste Produktivitäts-Tools für Selbstständige 2026 —{" "}
                <span className="text-blue-600">kein Overkill, einfach nutzbar</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Notion, Todoist, Toggl Track & Co. im ehrlichen Vergleich. Wir zeigen welches Tool wirklich zu Solo-Selbstständigen passt — und welche Systeme du in 30 Minuten einrichten kannst.
              </p>
            </div>

            {/* MATRIX */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-700">
                <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Schnellübersicht — Welches Tool für welche Aufgabe?</p>
              </div>
              <div className="divide-y divide-slate-800">
                {matrix.map((row) => (
                  <div key={row.ziel} className="px-5 py-3 flex items-center gap-4">
                    <span className="text-xl shrink-0 w-8">{row.icon}</span>
                    <span className="text-slate-300 text-sm flex-1">{row.ziel}</span>
                    <span className="font-semibold text-white text-sm shrink-0 w-32">{row.tool}</span>
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
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">4 typische Produktivitätsprobleme — und wie Tools sie lösen</h2>
              <p className="text-slate-500 text-sm">Die häufigsten Klagen von Solo-Selbstständigen — und konkrete Lösungen.</p>
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
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Alle Tools auf einen Blick</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">Notion, Todoist & Co. im direkten Vergleich</h2>
              <p className="text-slate-500 text-sm">5 Tools getestet — bewertet nach Einfachheit, Funktionen und Preis-Leistung für Solo-Selbstständige.</p>
            </div>
            <div className="space-y-6">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className={`bg-white rounded-2xl border p-6 md:p-8 ${tool.highlight ? "border-amber-300 shadow-lg shadow-amber-500/5" : "border-slate-200"}`}
                >
                  {/* Header */}
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

                  {/* Use Cases */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {tool.useCases.map((uc) => (
                      <span key={uc} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{uc}</span>
                    ))}
                  </div>

                  {/* Pros / Cons */}
                  {/* Score bars */}
                  <div className="bg-slate-50 rounded-xl p-5 mb-6 grid grid-cols-2 gap-4">
                    <ScoreBar label="Bedienung" value={tool.scores?.bedienung ?? 0} />
                    <ScoreBar label="Features" value={tool.scores?.features ?? 0} />
                    <ScoreBar label="Mobile App" value={tool.scores?.mobileApp ?? 0} />
                    <ScoreBar label="Preis-Leistung" value={tool.scores?.preisleistung ?? 0} />
                  </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Vorteile</div>
                      <ul className="space-y-1.5">
                        {tool.pros.map((pro) => (
                          <li key={pro} className="flex gap-2 text-sm text-slate-600">
                            <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-2">Nachteile</div>
                      <ul className="space-y-1.5">
                        {tool.cons.map((con) => (
                          <li key={con} className="flex gap-2 text-sm text-slate-600">
                            <span className="text-rose-400 shrink-0 mt-0.5">✗</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-slate-100">
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <span className="text-slate-400 text-xs">Preis</span>
                        <div className="font-semibold text-slate-900">{tool.preis}</div>
                      </div>
                      <div>
                        <span className="text-slate-400 text-xs">Zeitersparnis</span>
                        <div className="font-semibold text-slate-900">{tool.zeitersparnis}</div>
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

          {/* ─── SYSTEM-VORSCHLÄGE ─── */}
          <section>
            <div className="mb-8 text-center">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Fertige Setups</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2 text-center">Dein System nach Profil — fertig kombiniert</h2>
              <p className="text-slate-500 text-sm">Statt endlos ausprobieren: hier sind drei bewährte Kombinationen für Solo-Selbstständige.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {systeme.map((s) => (
                <div
                  key={s.profil}
                  className={`rounded-2xl border p-6 ${s.highlight ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-slate-200"}`}
                >
                  <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${s.highlight ? "text-blue-200" : "text-slate-400"}`}>
                    {s.fuer}
                  </div>
                  <h3 className={`text-lg font-bold mb-1 ${s.highlight ? "text-white" : "text-slate-900"}`}>{s.profil}</h3>
                  <p className={`text-sm mb-4 ${s.highlight ? "text-blue-100" : "text-slate-500"}`}>{s.beschreibung}</p>
                  <ul className="space-y-1.5">
                    {s.tools.map((t) => (
                      <li key={t} className={`flex gap-2 text-sm ${s.highlight ? "text-blue-100" : "text-slate-600"}`}>
                        <span className={s.highlight ? "text-blue-300" : "text-emerald-500"}>✓</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ─── FAQ ─── */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Häufige Fragen zu Produktivitäts-Tools</h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <details key={item.frage} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-900 list-none hover:bg-slate-50 transition-colors">
                    {item.frage}
                    <svg className="w-4 h-4 text-slate-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 16 16">
                      <path d="M4 6l4 4 4-4"/>
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {item.antwort}
                  </div>
                </details>
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
              <Link href="/marketing/social-media-tools-selbststaendige" className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-1">Marketing</div>
                <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Social-Media-Tools für Selbstständige</div>
                <div className="text-slate-500 text-sm mt-1">Kundenakquise automatisieren ohne Agentur</div>
              </Link>
              <Link href="/website/website-builder-selbststaendige" className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all sm:col-span-2">
                <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">Website</div>
                <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Website-Builder für Selbstständige</div>
                <div className="text-slate-500 text-sm mt-1">Online-Auftritt ohne Technikstress aufbauen</div>
              </Link>
            </div>
          </section>

        </div>

        {/* ─── FINAL CTA ─── */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Starte heute mit dem richtigen System
              </h2>
              <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
                Notion für die Struktur, Todoist für tägliche Tasks. Beide kostenlos. Einmal einrichten — dauerhaft produktiver.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://notion.so"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm shadow-lg"
                >
                  Notion kostenlos starten
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 8h6M8 5l3 3-3 3"/></svg>
                </a>
                <a
                  href="https://todoist.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-sm border border-white/20"
                >
                  Todoist gratis testen
                </a>
              </div>
              <p className="text-slate-500 text-xs mt-4">Beide Tools dauerhaft kostenlos · Kein Risiko</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
