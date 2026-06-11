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
      { label: "Impressum", href: "#" },
      { label: "Datenschutz", href: "#" },
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
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h4v8H2V4zm5-2h4v10H7V2zm5 4h2v6h-2V6z" fill="white"/>
                </svg>
              </div>
              <span className="font-bold text-white text-lg">
                vergleichs<span className="text-blue-400">check</span>
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

        {/* Bottom */}
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
