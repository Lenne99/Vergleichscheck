import Link from "next/link";

const cols = [
  {
    heading: "Kategorien",
    links: [
      { label: "Buchhaltungssoftware", href: "/buchhaltung/beste-buchhaltungssoftware-selbststaendige" },
      { label: "KI-Assistenten", href: "#" },
      { label: "Marketing-Tools", href: "#" },
      { label: "Produktivität", href: "#" },
      { label: "Website-Builder", href: "#" },
    ],
  },
  {
    heading: "Beliebt",
    links: [
      { label: "lexoffice Test", href: "#" },
      { label: "sevDesk vs. lexoffice", href: "#" },
      { label: "Rechnungssoftware Vergleich", href: "#" },
      { label: "Buchhaltung ohne Steuerberater", href: "#" },
    ],
  },
  {
    heading: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Affiliate-Hinweis", href: "#" },
      { label: "Über uns", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-8">

        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                <svg viewBox="0 0 32 32" fill="none" width="20" height="20">
                  <rect x="3" y="14" width="7" height="13" rx="1.5" fill="white" opacity="0.7"/>
                  <rect x="13" y="8" width="7" height="19" rx="1.5" fill="white"/>
                  <path d="M23 16l3 3 5-6" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                vergleichs<span className="text-blue-300">check</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Unabhängige Vergleiche für digitale Business-Tools — speziell für Selbstständige in Deutschland.
            </p>
            <div className="flex flex-col gap-1.5 text-xs">
              <span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Keine bezahlten Platzierungen</span>
              <span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Echte Tests, echte Konten</span>
              <span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Regelmäßig aktualisiert</span>
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
        <div className="border-t border-slate-800 pt-6 mb-4">
          <p className="text-xs text-slate-500 text-center">
            Diese Website verwendet keine Tracking-Cookies. Mehr in unserer{" "}
            <Link href="/datenschutz" className="text-slate-400 hover:text-white transition-colors underline">
              Datenschutzerklärung
            </Link>.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2026 Vergleichscheck.com · Alle Rechte vorbehalten</p>
          <div className="flex items-center gap-4 text-slate-500">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
          <p className="text-slate-500 text-center sm:text-right max-w-sm">
            * Einige Links sind Affiliate-Links. Wir erhalten eine Provision bei Kauf — ohne Mehrkosten für dich.
          </p>
        </div>
      </div>
    </footer>
  );
}
