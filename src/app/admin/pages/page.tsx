'use client';

const PAGES = [
  { title: 'Startseite', url: '/', category: 'Hauptseiten', description: 'Startseite mit Tool-Kategorien' },
  { title: 'Social-Media-Tools', url: '/marketing/social-media-tools-selbststaendige', category: 'Marketing', description: 'Vergleich Social-Media-Tools für Selbstständige' },
  { title: 'Buchhaltungssoftware (Top)', url: '/buchhaltung/beste-buchhaltungssoftware-selbststaendige', category: 'Buchhaltung', description: 'Beste Buchhaltungssoftware für Selbstständige' },
  { title: 'Buchhaltung ohne Vorkenntnisse', url: '/buchhaltung/buchhaltungssoftware-ohne-vorkenntnisse', category: 'Buchhaltung', description: 'Buchhaltung ohne Vorkenntnisse' },
  { title: 'CRM-Tools', url: '/crm/crm-tools-selbststaendige', category: 'CRM', description: 'Vergleich CRM-Tools inkl. Master CRM' },
  { title: 'KI-Assistent für Content', url: '/ki-tools/ki-assistent-content-marketing-selbststaendige', category: 'KI-Tools', description: 'KI-Tools für Content-Marketing' },
  { title: 'Produktivitäts-Tools', url: '/produktivitaet/produktivitaet-tools-selbststaendige', category: 'Produktivität', description: 'Produktivität steigern für Selbstständige' },
  { title: 'Website-Builder', url: '/website/website-builder-selbststaendige', category: 'Website', description: 'Website-Builder im Vergleich' },
  { title: 'Über uns', url: '/ueber-uns', category: 'Info', description: 'Über vergleichcheck.com' },
  { title: 'Impressum', url: '/impressum', category: 'Rechtliches', description: 'Impressum' },
  { title: 'Datenschutz', url: '/datenschutz', category: 'Rechtliches', description: 'Datenschutzerklärung' },
];

const CATEGORY_COLORS: Record<string, string> = {
  'Hauptseiten': 'bg-blue-100 text-blue-700',
  'Marketing': 'bg-purple-100 text-purple-700',
  'Buchhaltung': 'bg-green-100 text-green-700',
  'CRM': 'bg-orange-100 text-orange-700',
  'KI-Tools': 'bg-pink-100 text-pink-700',
  'Produktivität': 'bg-yellow-100 text-yellow-700',
  'Website': 'bg-cyan-100 text-cyan-700',
  'Info': 'bg-slate-100 text-slate-600',
  'Rechtliches': 'bg-gray-100 text-gray-600',
};

export default function PagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Seiten</h1>
          <p className="text-slate-500 text-sm mt-1">{PAGES.length} Seiten auf der Website</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50">
              <th className="text-left px-5 py-3 text-slate-500 font-medium">Titel</th>
              <th className="text-left px-5 py-3 text-slate-500 font-medium hidden md:table-cell">Kategorie</th>
              <th className="text-left px-5 py-3 text-slate-500 font-medium hidden lg:table-cell">Beschreibung</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {PAGES.map((p) => (
              <tr key={p.url} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3">
                  <p className="font-medium text-slate-800">{p.title}</p>
                  <p className="text-xs text-slate-400 font-mono">{p.url}</p>
                </td>
                <td className="px-5 py-3 hidden md:table-cell">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${CATEGORY_COLORS[p.category] ?? 'bg-slate-100 text-slate-600'}`}>
                    {p.category}
                  </span>
                </td>
                <td className="px-5 py-3 text-slate-500 hidden lg:table-cell text-xs">{p.description}</td>
                <td className="px-5 py-3 text-right">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 text-xs font-medium transition-colors"
                  >
                    Ansehen →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
