import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vergleichcheck.com – Unabhängige Software-Vergleiche für Selbstständige",
  description: "Finde die beste Software für dein Business. Unabhängige Tests & Vergleiche für Buchhaltung, KI-Tools, Marketing, Produktivität und Website-Builder – speziell für Selbstständige in Deutschland.",
  openGraph: {
    title: "Vergleichcheck.com – Die besten Tools für dein Solo-Business",
    description: "Unabhängige Software-Vergleiche für Selbstständige, Freelancer und kleine Unternehmen in Deutschland. Ehrliche Tests, klare Empfehlungen.",
    url: "https://vergleichcheck.com",
    type: "website",
  },
};

const categories = [
  {
    icon: "📊",
    label: "Buchhaltung",
    title: "Buchhaltungssoftware",
    desc: "Die beste Buchhaltungs- und Rechnungssoftware für Selbstständige in Deutschland.",
    href: "/buchhaltung/beste-buchhaltungssoftware-selbststaendige",
    count: "5 Tools · 2 Vergleiche",
    live: true,
    color: "blue",
  },
  {
    icon: "🤖",
    label: "KI-Tools",
    title: "KI-Assistenten",
    desc: "ChatGPT, Claude & Co.: Welches KI-Tool macht was am besten für Selbstständige?",
    href: "/ki-tools/ki-assistent-content-marketing-selbststaendige",
    count: "5 Tools · 1 Vergleich",
    live: true,
    color: "violet",
  },
  {
    icon: "📣",
    label: "Marketing",
    title: "Social Media Tools",
    desc: "Buffer, Metricool, Canva & Co. – sichtbar werden ohne Marketingagentur.",
    href: "/marketing/social-media-tools-selbststaendige",
    count: "5 Tools · 1 Vergleich",
    live: true,
    color: "rose",
  },
  {
    icon: "✅",
    label: "Produktivität",
    title: "Produktivität & Zeitmanagement",
    desc: "Notion, Todoist, Toggl Track & Co. – Struktur im Solo-Business ohne Overkill.",
    href: "/produktivitaet/produktivitaet-tools-selbststaendige",
    count: "5 Tools · 1 Vergleich",
    live: true,
    color: "emerald",
  },
  {
    icon: "🌐",
    label: "Website",
    title: "Website Builder",
    desc: "Squarespace, Framer, Jimdo & Co. – in 1 Tag online ohne Programmierkenntnisse.",
    href: "/website/website-builder-selbststaendige",
    count: "5 Tools · 1 Vergleich",
    live: true,
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  blue:    "bg-blue-50 text-blue-700 group-hover:bg-blue-600 group-hover:text-white",
  violet:  "bg-violet-50 text-violet-700 group-hover:bg-violet-600 group-hover:text-white",
  rose:    "bg-rose-50 text-rose-700 group-hover:bg-rose-600 group-hover:text-white",
  emerald: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
  amber:   "bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white",
};

const featured = {
  title: "Beste Buchhaltungssoftware für Selbstständige 2026",
  winner: "lexoffice",
  desc: "Wir haben 5 Programme getestet. lexoffice gewinnt dank bester Bedienbarkeit, DATEV-Export und GoBD-Konformität.",
  href: "/buchhaltung/beste-buchhaltungssoftware-selbststaendige",
  meta: "5 Tools · Zuletzt aktualisiert: Juni 2026",
};

const recentArticles = [
  {
    tag: "Buchhaltung",
    tagColor: "bg-blue-50 text-blue-700",
    title: "Beste Buchhaltungssoftware für Selbstständige 2026",
    desc: "lexoffice, sevDesk, FastBill & Co. im direkten Vergleich mit Scoring – unser Testsieger überrascht.",
    href: "/buchhaltung/beste-buchhaltungssoftware-selbststaendige",
    meta: "8 min Lesezeit · Juni 2026",
  },
  {
    tag: "KI-Tools",
    tagColor: "bg-violet-50 text-violet-700",
    title: "KI für Content & Marketing: Welches Tool macht was am besten?",
    desc: "ChatGPT, Claude, Perplexity & Co. – nach konkreten Aufgaben bewertet, mit Prompt-Vorlagen.",
    href: "/ki-tools/ki-assistent-content-marketing-selbststaendige",
    meta: "6 min Lesezeit · Juni 2026",
  },
  {
    tag: "Social Media",
    tagColor: "bg-rose-50 text-rose-700",
    title: "Beste Social Media Tools für Selbstständige 2026",
    desc: "Buffer, Metricool, Canva, Later & Hootsuite – sichtbar werden ohne Marketingagentur.",
    href: "/marketing/social-media-tools-selbststaendige",
    meta: "7 min Lesezeit · Juni 2026",
  },
  {
    tag: "Produktivität",
    tagColor: "bg-emerald-50 text-emerald-700",
    title: "Beste Produktivitäts-Tools für Selbstständige 2026",
    desc: "Notion, Todoist, Toggl Track & Co. – kein Overkill, einfach nutzbar für Solo-Business.",
    href: "/produktivitaet/produktivitaet-tools-selbststaendige",
    meta: "6 min Lesezeit · Juni 2026",
  },
  {
    tag: "Website",
    tagColor: "bg-amber-50 text-amber-700",
    title: "Beste Website Builder für Selbstständige 2026",
    desc: "Squarespace, Framer, Jimdo & Co. – in 1 Tag online ohne Programmierkenntnisse.",
    href: "/website/website-builder-selbststaendige",
    meta: "7 min Lesezeit · Juni 2026",
  },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vergleichcheck.com",
  "url": "https://vergleichcheck.com",
  "description": "Unabhängige Software-Vergleiche für Selbstständige, Freelancer und kleine Unternehmen in Deutschland.",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Header />
      <main className="flex-1">

        {/* ─── HERO ─── */}
        <section className="bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                Unabhängige Vergleiche · Kein Werbeblabla
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                Die beste Software<br />
                <span className="text-blue-400">für dein Business</span><br />
                finden.
              </h1>
              <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
                Vergleichcheck hilft Selbstständigen, Freelancern und kleinen Unternehmen in Deutschland, die richtigen digitalen Tools zu wählen — mit echten Tests und klaren Empfehlungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#kategorien"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-green-600/20"
                >
                  Alle Vergleiche entdecken
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 8h6M8 5l3 3-3 3"/></svg>
                </Link>
                <Link
                  href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-sm border border-white/10"
                >
                  Testsieger: lexoffice →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TRUST BAR ─── */}
        <section className="bg-slate-800 border-b border-slate-700">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-wrap justify-center md:justify-between gap-4 text-sm text-slate-400">
              {[
                { icon: "🔬", text: "Alle Tools selbst getestet" },
                { icon: "🚫", text: "Keine bezahlten Platzierungen" },
                { icon: "🇩🇪", text: "Fokus auf den deutschen Markt" },
                { icon: "🔄", text: "Regelmäßig aktualisiert" },
              ].map((item) => (
                <span key={item.text} className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED VERGLEICH ─── */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">Aktueller Vergleich</span>
          </div>
          <Link href={featured.href} className="group block bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Visual block */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 md:w-72 flex flex-col justify-between shrink-0">
                <div>
                  <div className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-3">Testsieger</div>
                  <div className="text-white text-4xl font-bold mb-1">lexoffice</div>
                  <div className="flex items-center gap-1 text-amber-400 text-lg">★★★★★</div>
                  <div className="text-blue-200 text-sm mt-1">4,8 von 5</div>
                </div>
                <div className="mt-8">
                  <div className="text-blue-100 text-xs">Ab</div>
                  <div className="text-white text-2xl font-bold">7,90 €<span className="text-blue-200 text-sm font-normal">/Monat</span></div>
                </div>
              </div>
              {/* Content block */}
              <div className="p-8 flex flex-col justify-center">
                <div className="text-slate-500 text-sm mb-2">{featured.meta}</div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{featured.desc}</p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  Zum vollständigen Vergleich
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform"><path d="M5 8h6M8 5l3 3-3 3"/></svg>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* ─── KATEGORIEN ─── */}
        <section id="kategorien" className="max-w-6xl mx-auto px-4 pb-14">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Alle Vergleichskategorien</h2>
            <p className="text-slate-500 text-sm">Wähle eine Kategorie — wir zeigen dir die besten Tools für deinen Anwendungsfall.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className={`group bg-white rounded-xl border border-slate-200 p-6 transition-all duration-200 ${cat.live ? "hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5" : "opacity-60 cursor-default"}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 transition-all duration-200 ${colorMap[cat.color]}`}>
                  {cat.icon}
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{cat.label}</div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">{cat.title}</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">{cat.desc}</p>
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${cat.live ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                  {cat.live ? "✓ " : ""}{cat.count}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── RECENT ARTICLES ─── */}
        <section className="max-w-6xl mx-auto px-4 pb-14">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Aktuelle Vergleiche & Ratgeber</h2>
            <p className="text-slate-500 text-sm">Die meistgelesenen Inhalte auf Vergleichcheck.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recentArticles.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all hover:-translate-y-0.5"
              >
                <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${a.tagColor}`}>{a.tag}</span>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">{a.title}</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">{a.desc}</p>
                <span className="text-xs text-slate-400">{a.meta}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">So funktioniert Vergleichcheck</h2>
              <p className="text-slate-500 text-sm max-w-lg mx-auto">Wir nehmen uns die Zeit, damit du sie nicht brauchst.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", icon: "🔬", title: "Wir testen selbst", desc: "Jedes Tool wird mit einem echten Account getestet — kein Kopieren von Pressemitteilungen." },
                { step: "02", icon: "⚖️", title: "Wir vergleichen fair", desc: "Keine bezahlten Platzierungen. Die beste Lösung gewinnt, nicht die mit dem höchsten Affiliate-Satz." },
                { step: "03", icon: "🎯", title: "Du entscheidest", desc: "Klare Empfehlungen für deinen Anwendungsfall — nicht \"kommt drauf an\" als Antwort." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl text-2xl mb-5">
                    {item.icon}
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA BANNER ─── */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Noch unsicher welches Tool zu dir passt?</h2>
            <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">Alle Vergleiche sind kostenlos, unabhängig und speziell für Solo-Selbstständige in Deutschland gemacht.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="#kategorien"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm shadow-lg"
              >
                Alle Kategorien ansehen
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 8h6M8 5l3 3-3 3"/></svg>
              </Link>
              <Link
                href="/buchhaltung/beste-buchhaltungssoftware-selbststaendige"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-sm border border-white/20"
              >
                Buchhaltung-Vergleich →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
