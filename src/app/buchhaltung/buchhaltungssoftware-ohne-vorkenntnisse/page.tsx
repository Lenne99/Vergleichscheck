import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Buchhaltungssoftware für Selbstständige ohne Vorkenntnisse 2026 – Ehrlicher Test",
  description:
    "Keine Ahnung von Buchhaltung? Kein Problem. Wir zeigen welche Software auch ohne Steuerwissen funktioniert – mit EÜR, USt-Voranmeldung und DATEV-Export. Klare Empfehlung für Einsteiger.",
  alternates: { canonical: "/buchhaltung/buchhaltungssoftware-ohne-vorkenntnisse" },
  openGraph: {
    title: "Buchhaltungssoftware ohne Vorkenntnisse 2026 – Welche ist wirklich einfach?",
    description: "Die 5 größten Einsteiger-Ängste gelöst. Nur 3 Tools schaffen es wirklich für absolute Anfänger. Mit 5-Schritte-Startanleitung.",
    url: "https://vergleichcheck.com/buchhaltung/buchhaltungssoftware-ohne-vorkenntnisse",
    type: "article",
  },
};

/* ─── DATA ─── */
const fears = [
  {
    icon: "😨",
    fear: "Ich verstehe Buchhaltung nicht – was wenn ich Fehler mache?",
    solution:
      "Gute Software macht Buchhaltungswissen überflüssig. lexoffice etwa führt dich Schritt für Schritt durch jeden Prozess, erklärt Fachbegriffe direkt im Kontext und verhindert die häufigsten Fehler automatisch.",
    tag: "Gelöst durch: geführte Prozesse",
  },
  {
    icon: "📄",
    fear: "Was muss auf einer Rechnung in Deutschland stehen?",
    solution:
      "Pflichtangaben wie Steuernummer, Rechnungsnummer, Mehrwertsteuerausweis und Leistungsdatum werden von der Software automatisch eingefügt. Eine vergessene Angabe macht deine Rechnung rechtlich angreifbar – die Software erinnert dich daran.",
    tag: "Gelöst durch: automatische Pflichtfelder",
  },
  {
    icon: "📊",
    fear: "EÜR, USt-Voranmeldung – wie soll ich das hinkriegen?",
    solution:
      "Einnahmen-Überschuss-Rechnung und Umsatzsteuer-Voranmeldung erstellt die Software automatisch aus deinen bereits erfassten Daten. Du musst keine Formeln kennen. lexoffice übermittelt die Voranmeldung sogar direkt ans Finanzamt.",
    tag: "Gelöst durch: automatische Steuerberichte",
  },
  {
    icon: "🏦",
    fear: "Muss ich jeden Kontoauszug manuell eingeben?",
    solution:
      "Modernes Banking-Interface: Die Software verbindet sich mit deinem Geschäftskonto und importiert alle Transaktionen automatisch. Du ordnest sie nur noch einer Kategorie zu – das dauert Sekunden pro Buchung.",
    tag: "Gelöst durch: automatischer Bankabgleich",
  },
  {
    icon: "🧾",
    fear: "Wie archiviere ich Belege rechtssicher?",
    solution:
      "GoBD-konforme Archivierung bedeutet: einmal fotografieren, hochladen – fertig. Die Software archiviert revisionssicher und du erfüllst automatisch die gesetzlichen Aufbewahrungspflichten (10 Jahre).",
    tag: "Gelöst durch: digitale GoBD-Archivierung",
  },
];

const tools = [
  {
    name: "lexoffice",
    score: 98,
    einsteigerScore: 98,
    preis: "7,90 €/Monat",
    freitest: "30 Tage kostenlos",
    highlight: true,
    badge: "Beste Wahl für Einsteiger",
    badgeStyle: "bg-amber-400 text-amber-900",
    warum: [
      "Schritt-für-Schritt-Assistent bei der Einrichtung",
      "Erklärt Fachbegriffe direkt im Tool (kein Googeln nötig)",
      "EÜR und USt-Voranmeldung auf Knopfdruck",
      "Finanzamt-Übermittlung direkt aus der App",
      "Automatischer Bankabgleich mit fast allen deutschen Banken",
      "Steuerberater-Zugang kostenlos inklusive (für spätere Fragen)",
    ],
    nachteil: "Basispaket hat eingeschränkte Funktionen – für die meisten Einsteiger aber ausreichend.",
    einsteiger: "★★★★★",
  },
  {
    name: "FastBill",
    score: 82,
    einsteigerScore: 88,
    preis: "9,00 €/Monat",
    freitest: "14 Tage kostenlos",
    highlight: false,
    badge: "Am einfachsten für reine Rechnungen",
    badgeStyle: "bg-emerald-100 text-emerald-800",
    warum: [
      "Einfachste Benutzeroberfläche im Test",
      "Erste Rechnung in unter 2 Minuten",
      "Ideal wenn du einen Steuerberater für die Buchhaltung hast",
      "Kein Buchhaltungs-Overhead",
    ],
    nachteil: "Kein DATEV-Export und keine EÜR im Basispaket – nicht für vollständige Buchhaltung geeignet.",
    einsteiger: "★★★★½",
  },
  {
    name: "sevDesk",
    score: 85,
    einsteigerScore: 74,
    preis: "8,90 €/Monat",
    freitest: "14 Tage kostenlos",
    highlight: false,
    badge: "Gut für späteres Wachstum",
    badgeStyle: "bg-blue-100 text-blue-800",
    warum: [
      "Vollständige Buchhaltung + Rechnungen",
      "Viele Integrationen wenn das Business wächst",
      "DATEV-Export vorhanden",
    ],
    nachteil: "Interface komplexer als lexoffice – für absolute Einsteiger etwas steiler in der Lernkurve.",
    einsteiger: "★★★½☆",
  },
];

const steps = [
  { step: "01", title: "Konto anlegen", desc: "Name, E-Mail, Steuernummer eingeben. Dauert 5 Minuten." },
  { step: "02", title: "Bank verbinden", desc: "Dein Geschäftskonto einbinden – Transaktionen werden automatisch importiert." },
  { step: "03", title: "Erste Rechnung", desc: "Kundenname, Leistung, Betrag eingeben – Rest erledigt die Software." },
  { step: "04", title: "Belege fotografieren", desc: "Quittungen und Rechnungen per App abfotografieren, automatisch archiviert." },
  { step: "05", title: "EÜR auf Knopfdruck", desc: "Am Jahresende: einen Klick – fertige Einnahmen-Überschuss-Rechnung für den Steuerberater." },
];

const faqs = [
  {
    q: "Muss ich Buchhaltung lernen, um die Software zu nutzen?",
    a: "Nein. Das ist der Hauptvorteil moderner Buchhaltungssoftware für Selbstständige: Du musst keine Debits, Credits oder Kontenrahmen kennen. Du erfasst nur Einnahmen und Ausgaben – die Software erledigt die Buchführung im Hintergrund.",
  },
  {
    q: "Was ist der Unterschied zwischen Rechnungssoftware und Buchhaltungssoftware?",
    a: "Rechnungssoftware (z.B. FastBill im Basispaket) erstellt nur Rechnungen. Buchhaltungssoftware (z.B. lexoffice) macht zusätzlich die vollständige Buchführung – also EÜR, Umsatzsteuer-Voranmeldung und die Aufbereitung für den Steuerberater. Für die meisten Selbstständigen ist eine vollständige Lösung besser.",
  },
  {
    q: "Kann ich die Software auch nutzen, wenn ich noch einen Steuerberater habe?",
    a: "Ja – und genau dafür ist der DATEV-Export entscheidend. Du erfasst im Jahr alles selbst in der Software, exportierst am Jahresende DATEV-Daten an deinen Steuerberater. Das spart ihm (und dir) mehrere Stunden Arbeit – und senkt das Honorar deutlich.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "Bei lexoffice: 15–30 Minuten für die komplette Grundeinrichtung (Profil, Bank, Steuerdaten). Die erste Rechnung kannst du danach in unter 5 Minuten erstellen. Es gibt keinen Kurs, den du vorher belegen musst.",
  },
  {
    q: "Was passiert wenn ich Fehler mache?",
    a: "Moderne Buchhaltungssoftware verhindert die häufigsten Fehler durch Pflichtfelder und automatische Prüfungen. Falls doch etwas falsch ist, kannst du Buchungen nachträglich korrigieren. Die GoBD-konforme Archivierung stellt sicher, dass die Korrektur revisionssicher dokumentiert wird.",
  },
  {
    q: "Ist meine Buchhaltung mit der Software wirklich finanzamtskonform?",
    a: "Alle hier empfohlenen Tools sind GoBD-konform zertifiziert. Das bedeutet: die Art, wie Belege archiviert und Buchungen protokolliert werden, entspricht den Anforderungen des deutschen Finanzamts. Du machst nichts falsch, solange du alle Belege erfasst.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Start", "item": "https://vergleichcheck.com" },
    { "@type": "ListItem", "position": 2, "name": "Buchhaltung", "item": "https://vergleichcheck.com/buchhaltung/beste-buchhaltungssoftware-selbststaendige" },
    { "@type": "ListItem", "position": 3, "name": "Ohne Vorkenntnisse" },
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
      <Header />
      <main className="flex-1 bg-slate-50">

        {/* ── HERO ── */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 pt-8 pb-10">
            <nav className="text-xs text-slate-400 mb-6 flex items-center gap-1.5 flex-wrap">
              <Link href="/" className="hover:text-blue-600 transition-colors">Startseite</Link>
              <span>›</span>
              <Link href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige" className="hover:text-blue-600 transition-colors">Buchhaltung</Link>
              <span>›</span>
              <span className="text-slate-600">Buchhaltungssoftware ohne Vorkenntnisse</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-5 justify-center">
              <span className="text-xs font-semibold bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full border border-amber-200">
                👶 Einsteiger-Ratgeber 2026
              </span>
              <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full">✓ Kein Buchhaltungswissen nötig</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4 text-center">
              Buchhaltungssoftware für Selbstständige <span className="text-blue-600">ohne Vorkenntnisse</span> — welche ist die beste?
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-7 max-w-2xl mx-auto text-center">
              Keine Ahnung von EÜR, Voranmeldung oder GoBD? Das ist der Normalfall bei Selbstständigen in Deutschland. Wir zeigen dir, welche Software so einfach ist, dass du trotzdem nichts falsch machen kannst.
            </p>

            {/* Problem/Solution mini-bar */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="shrink-0">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Kurze Antwort</div>
                <div className="font-bold text-lg">lexoffice <span className="text-amber-400">ist die beste Wahl</span></div>
              </div>
              <div className="w-px h-10 bg-slate-700 hidden sm:block shrink-0"></div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Einrichtung in 15 Minuten. Keine Buchhaltungskenntnisse nötig. EÜR und Voranmeldung auf Knopfdruck. 30 Tage kostenlos testen.
              </p>
              <a href="#" className="shrink-0 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all whitespace-nowrap">
                Kostenlos starten →
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

          {/* ── ANGST-SEKTION ── */}
          <section>
            <div className="mb-8 text-center">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Das kennen wir alle</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2">Die 5 größten Ängste von Einsteigern — und wie Software sie löst</h2>
              <p className="text-slate-500 text-sm">Du bist nicht allein. Das sind die häufigsten Sorgen, die wir von Selbstständigen hören — und die klare Antwort darauf.</p>
            </div>

            <div className="space-y-4">
              {fears.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-5 flex gap-4">
                    <div className="shrink-0 text-2xl mt-0.5">{item.icon}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800 mb-3 italic text-sm md:text-base">
                        {item.fear}
                      </p>
                      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                        <p className="text-sm text-slate-700 leading-relaxed">{item.solution}</p>
                        <span className="inline-block mt-2 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                          ✓ {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TOOLS FÜR EINSTEIGER ── */}
          <section>
            <div className="mb-8 text-center">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Nur was für Einsteiger wirklich passt</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2">Die 3 besten Programme — bewertet nach Einsteigerfreundlichkeit</h2>
              <p className="text-slate-500 text-sm">
                Aus dem <Link href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige" className="text-blue-600 hover:underline">vollständigen Vergleich aller 5 Tools</Link> haben wir die drei herausgefiltert, die für Einsteiger wirklich funktionieren.
              </p>
            </div>

            <div className="space-y-5">
              {tools.map((t, i) => (
                <div
                  key={t.name}
                  className={`bg-white rounded-2xl border-2 overflow-hidden ${t.highlight ? "border-amber-300 shadow-lg shadow-amber-500/10" : "border-slate-200"}`}
                >
                  {t.highlight && (
                    <div className="bg-amber-400 px-6 py-2 flex items-center justify-between">
                      <span className="text-amber-900 font-bold text-sm">🏆 Beste Wahl für Einsteiger</span>
                      <span className="text-amber-800 text-xs hidden sm:block">Empfohlen von Vergleichcheck</span>
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-2xl font-bold text-slate-900">{t.name}</h3>
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${t.badgeStyle}`}>{t.badge}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-amber-400 text-lg">{t.einsteiger}</span>
                          <span className="text-xs font-bold text-slate-500">Einsteigerfreundlichkeit</span>
                        </div>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <div className="text-xl font-bold text-slate-900">{t.preis}</div>
                        <div className="text-xs text-slate-400">{t.freitest}</div>
                      </div>
                    </div>

                    {/* Einsteiger-Score-Bar */}
                    <div className="bg-slate-50 rounded-xl p-4 mb-5">
                      <div className="flex justify-between text-xs text-slate-500 mb-2">
                        <span className="font-semibold">Einsteigerfreundlichkeit</span>
                        <span className="font-bold text-slate-800">{t.einsteigerScore}/100</span>
                      </div>
                      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${t.einsteigerScore >= 90 ? "bg-amber-400" : t.einsteigerScore >= 80 ? "bg-blue-500" : "bg-slate-400"}`}
                          style={{ width: `${t.einsteigerScore}%` }}
                        />
                      </div>
                    </div>

                    {/* Warum geeignet */}
                    <div className="mb-5">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Warum für Einsteiger geeignet</div>
                      <ul className="space-y-2">
                        {t.warum.map((w) => (
                          <li key={w} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>{w}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Nachteil */}
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-5 flex gap-3">
                      <span className="text-amber-500 shrink-0">⚠️</span>
                      <p className="text-sm text-slate-700">{t.nachteil}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
                      <span className="text-xs text-slate-400">Keine Kreditkarte · Jederzeit kündbar</span>
                      <a href="#" className={`inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-xl text-sm transition-all ${t.highlight ? "bg-green-600 hover:bg-green-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}>
                        {t.freitest} testen →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 text-center">
              <Link
                href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige"
                className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
              >
                → Alle 5 Tools im vollständigen Vergleich ansehen
              </Link>
            </div>
          </section>

          {/* ── SO FÄNGT MAN AN ── */}
          <section>
            <div className="mb-8 text-center">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">So einfach geht es</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2">In 5 Schritten von null zur funktionierenden Buchhaltung</h2>
              <p className="text-slate-500 text-sm">Wie du mit lexoffice in unter einer Stunde alles einrichtest — auch ohne Vorkenntnisse.</p>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-10 bottom-10 w-0.5 bg-slate-200 hidden md:block"></div>

              <div className="space-y-4">
                {steps.map((s, i) => (
                  <div key={s.step} className="flex gap-5 items-start">
                    <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm z-10 ${i === 0 ? "bg-amber-400 text-amber-900" : "bg-slate-900 text-white"}`}>
                      {s.step}
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 p-5 flex-1">
                      <div className="font-bold text-slate-900 mb-1">{s.title}</div>
                      <p className="text-sm text-slate-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-100 rounded-2xl p-6 text-center">
              <p className="text-slate-700 font-semibold mb-4">Bereit? lexoffice 30 Tage kostenlos — kein Risiko.</p>
              <a href="#" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all">
                Jetzt kostenlos starten →
              </a>
              <p className="text-xs text-slate-400 mt-2">Keine Kreditkarte · Keine Kündigung nötig</p>
            </div>
          </section>

          {/* ── WAS KOMMT DANACH ── */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Was passiert, wenn dein Business wächst?</h2>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
              <p className="text-slate-600 leading-relaxed mb-5">
                Gute Nachricht: Du musst jetzt nicht die perfekte Lösung für alle Zeit finden. Starte mit lexoffice im günstigsten Paket. Wenn dein Umsatz wächst und du mehr Funktionen brauchst (mehr Nutzer, Lohnbuchhaltung, komplexere Integrationen), gibt es zwei Wege:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="font-bold text-blue-900 mb-2">↑ Upgrade innerhalb von lexoffice</div>
                  <p className="text-sm text-slate-600">Du behältst alle Daten und buchst einfach in ein höheres Paket um. Kein Datenverlust, keine Neueinrichtung.</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="font-bold text-slate-900 mb-2">→ Wechsel zu sevDesk</div>
                  <p className="text-sm text-slate-600">Wenn du Online-Shops, viele Integrationen oder ein wachsendes Team hast, bietet sevDesk mehr Flexibilität. DATEV-Export macht den Wechsel einfach.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Häufige Fragen von Buchhaltungs-Einsteigern</h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <FaqAccordion key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </section>

          {/* ── RELATED ── */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-5 text-center">Weitere hilfreiche Vergleiche</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige"
                className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-2">📊</div>
                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                  Alle 5 Buchhaltungstools im Vergleich
                </div>
                <p className="text-sm text-slate-500">Vollständige Rangliste aller getesteten Programme — mit Vergleichstabelle und Score-Analyse.</p>
              </Link>
              <div className="bg-slate-100 rounded-xl border border-slate-200 p-5 opacity-60">
                <div className="text-2xl mb-2">🧾</div>
                <div className="font-bold text-slate-700 mb-1">Rechnungssoftware für Freelancer</div>
                <p className="text-sm text-slate-400">Demnächst verfügbar</p>
              </div>
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section>
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <div className="p-8 md:p-12 text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Starte noch heute — auch ohne Buchhaltungswissen
                </h2>
                <p className="text-slate-400 mb-2 max-w-lg mx-auto leading-relaxed">
                  lexoffice ist so gebaut, dass du nach 30 Minuten weißt, was du tust. Versprochen.
                </p>
                <p className="text-amber-400 text-sm font-semibold mb-8">30 Tage kostenlos · Keine Kreditkarte · Jederzeit kündbar</p>
                <a href="#" className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-all">
                  lexoffice kostenlos testen
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 8h8M9 5l3 3-3 3"/></svg>
                </a>
              </div>
              <div className="bg-slate-800 px-8 py-4 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
                <span>✓ Unabhängig getestet</span>
                <span>✓ Kein bezahlter Testsieger</span>
                <span>✓ Speziell für Einsteiger in Deutschland</span>
              </div>
            </div>
          </section>

          {/* Weitere Vergleiche */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-5 text-center">Weitere Vergleiche für Selbstständige</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige" className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Buchhaltung</div>
                <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Beste Buchhaltungssoftware 2026</div>
                <div className="text-slate-500 text-sm mt-1">Der komplette Vergleich aller Top-Programme</div>
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
