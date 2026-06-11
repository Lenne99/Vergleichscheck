export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-blue-600 text-white font-bold text-sm px-2 py-1 rounded">VC</div>
              <span className="font-bold text-white">
                Vergleichs<span className="text-blue-400">check</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Unabhängige Vergleiche für digitale Business-Tools. Wir helfen Selbstständigen, die richtige Software zu finden.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Kategorien</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Buchhaltungssoftware</a></li>
              <li><a href="#" className="hover:text-white transition-colors">KI-Assistenten</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketing-Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Produktivität</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Website-Builder</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate-Hinweis</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-sm text-center">
          <p>© 2025 Vergleichscheck.com · Unabhängige Vergleiche für Selbstständige</p>
          <p className="mt-1 text-xs">
            * Einige Links sind Affiliate-Links. Wir erhalten eine Provision, wenn du über unsere Links kaufst – ohne Mehrkosten für dich.
          </p>
        </div>
      </div>
    </footer>
  );
}
