import Link from "next/link";

const cols = [
  {
    heading: "Kategorien",
    links: [
      { label: "Buchhaltungssoftware", href: "/buchhaltung/beste-buchhaltungssoftware-selbststaendige" },
      { label: "Buchhaltung für Einsteiger", href: "/buchhaltung/buchhaltungssoftware-ohne-vorkenntnisse" },
      { label: "KI-Tools für Content", href: "/ki-tools/ki-assistent-content-marketing-selbststaendige" },
      { label: "Marketing-Tools", href: "#" },
      { label: "Website-Builder", href: "#" },
    ],
  },
  {
    heading: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Affiliate-Hinweis", href: "/datenschutz#affiliate" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                  <rect x="3" y="14" width="7" height="13" rx="1.5" fill="white" opacity="0.65"/>
                  <rect x="13" y="8" width="7" height="19" rx="1.5" fill="white"/>
                  <path d="M23 17l2.5 2.5L30 13" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-white text-[1.1rem] tracking-tight">
                vergleichs<span className="text-blue-400">check</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Unabhängige Vergleiche für digitale Business-Tools — speziell für Selbstständige, Freelancer und kleine Unternehmen in Deutschland.
            </p>
            <div className="space-y-1.5 text-xs">
              <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Keine bezahlten Platzierungen</span>
              <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Selbst getestete Tools mit echten Konten</span>
              <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Kein Tracking, keine Weitergabe von Daten</span>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white font-semibold text-sm mb-4">{col.heading}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* DSGVO notice */}
        <div className="border border-slate-700 rounded-xl px-5 py-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span className="text-green-400 text-lg shrink-0">🔒</span>
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Datenschutz:</strong> Diese Website verwendet ausschließlich technisch notwendige Cookies — kein Google Analytics, kein Facebook Pixel, kein Tracking.
            Schriftarten werden DSGVO-konform serverseitig eingebunden (kein externer Aufruf bei deinem Browser).{" "}
            <Link href="/datenschutz" className="text-blue-400 hover:text-blue-300 underline">Datenschutzerklärung lesen →</Link>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2026 Vergleichscheck.com · Alle Rechte vorbehalten</p>
          <p className="text-slate-500 text-center sm:text-right max-w-sm">
            * Einige Links sind Affiliate-Links. Wir erhalten eine Provision bei Kauf — ohne Mehrkosten für dich.
          </p>
        </div>
      </div>
    </footer>
  );
}
