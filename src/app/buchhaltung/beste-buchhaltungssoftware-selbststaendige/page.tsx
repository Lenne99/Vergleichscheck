import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Beste Buchhaltungssoftware für Selbstständige 2025 – Vergleich & Empfehlung",
  description:
    "Welche Buchhaltungssoftware ist die beste für Selbstständige in Deutschland? Wir vergleichen lexoffice, sevDesk, FastBill, Buchhaltungsbutler und WISO Mein Büro – mit klarer Empfehlung.",
};

const tools = [
  {
    name: "lexoffice",
    price: "ab 7,90 €/Monat",
    usability: 5,
    invoices: true,
    accounting: true,
    datev: true,
    recommended: "Einsteiger & Fortgeschrittene",
    badge: "Empfehlung",
    badgeColor: "bg-green-500",
    highlight: true,
  },
  {
    name: "sevDesk",
    price: "ab 8,90 €/Monat",
    usability: 4,
    invoices: true,
    accounting: true,
    datev: true,
    recommended: "Wachsende Unternehmen",
    badge: null,
    badgeColor: "",
    highlight: false,
  },
  {
    name: "FastBill",
    price: "ab 9,00 €/Monat",
    usability: 5,
    invoices: true,
    accounting: false,
    datev: false,
    recommended: "Reine Rechnungssteller",
    badge: "Einfachster Einstieg",
    badgeColor: "bg-blue-500",
    highlight: false,
  },
  {
    name: "Buchhaltungsbutler",
    price: "ab 15,00 €/Monat",
    usability: 3,
    invoices: true,
    accounting: true,
    datev: true,
    recommended: "Automatisierungs-Fans",
    badge: "KI-gestützt",
    badgeColor: "bg-purple-500",
    highlight: false,
  },
  {
    name: "WISO Mein Büro",
    price: "ab 6,00 €/Monat",
    usability: 3,
    invoices: true,
    accounting: true,
    datev: true,
    recommended: "Budget-bewusste Nutzer",
    badge: "Günstigster",
    badgeColor: "bg-orange-500",
    highlight: false,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} className={i <= count ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ))}
  </div>
);

const Check = () => <span className="text-green-500 font-bold text-lg">✓</span>;
const Cross = () => <span className="text-gray-300 font-bold text-lg">✗</span>;

export default function BuchhaltungssoftwarePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500">
            <a href="/" className="hover:text-blue-600">Startseite</a>
            <span className="mx-2">›</span>
            <span>Buchhaltung</span>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Beste Buchhaltungssoftware für Selbstständige</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-10">

          {/* ===== 1. KURZFAZIT ===== */}
          <section className="mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Vergleich · Buchhaltung & Rechnungen
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Beste Buchhaltungssoftware für Selbstständige 2025
            </h1>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <h2 className="font-bold text-blue-900 text-lg mb-3">⚡ Kurzfazit</h2>
              <p className="text-blue-900 mb-4">
                <strong>lexoffice</strong> ist für die meisten Selbstständigen in Deutschland die beste Wahl: intuitiv bedienbar, vollständig GoBD-konform, mit DATEV-Export und starker Automatisierung.
                Wer ein reines Rechnungstool sucht, ist mit <strong>FastBill</strong> gut beraten. Wer das günstigste Paket mit vollem Funktionsumfang will, schaut sich <strong>WISO Mein Büro</strong> an.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <div className="text-xs text-gray-500 mb-1">Beste Gesamtlösung</div>
                  <div className="font-bold text-gray-900">lexoffice</div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <div className="text-xs text-gray-500 mb-1">Günstigste Option</div>
                  <div className="font-bold text-gray-900">WISO Mein Büro</div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <div className="text-xs text-gray-500 mb-1">Einfachster Einstieg</div>
                  <div className="font-bold text-gray-900">FastBill</div>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              Letzte Aktualisierung: Juni 2025 · Alle Preise inkl. MwSt. · Unabhängige Redaktion
            </p>
          </section>

          {/* ===== 2. VERGLEICHSTABELLE ===== */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Vergleichstabelle im Überblick</h2>

            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Tool</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Preis/Monat</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Bedienung</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Rechnungen</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Buchhaltung</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">DATEV</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Für wen</th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map((tool, i) => (
                    <tr
                      key={tool.name}
                      className={`border-b border-gray-100 last:border-0 ${
                        tool.highlight ? "bg-green-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">{tool.name}</span>
                          {tool.badge && (
                            <span className={`${tool.badgeColor} text-white text-xs px-2 py-0.5 rounded-full`}>
                              {tool.badge}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-gray-700">{tool.price}</td>
                      <td className="px-4 py-4 text-center">
                        <Stars count={tool.usability} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        {tool.invoices ? <Check /> : <Cross />}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {tool.accounting ? <Check /> : <Cross />}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {tool.datev ? <Check /> : <Cross />}
                      </td>
                      <td className="px-4 py-4 text-gray-600 text-xs">{tool.recommended}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ===== 3. DETAILLIERTER VERGLEICH ===== */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Detaillierter Vergleich</h2>

            {/* lexoffice */}
            <div className="bg-white rounded-xl border-2 border-green-200 p-6 mb-6 relative">
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Empfehlung
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">lexoffice</h3>
              <p className="text-gray-500 text-sm mb-4">ab 7,90 €/Monat · Haufe Group</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✓ Stärken</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Sehr intuitive Benutzeroberfläche, kein Buchhaltungswissen nötig</li>
                    <li>• Vollständig GoBD-konform und DATEV-kompatibel</li>
                    <li>• Automatischer Bankabgleich mit fast allen deutschen Banken</li>
                    <li>• Sehr gute mobile App</li>
                    <li>• Steuerberater-Zugang inklusive</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">✗ Schwächen</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Günstigstes Paket hat eingeschränkte Funktionen</li>
                    <li>• Keine Lagerverwaltung im Basispaket</li>
                    <li>• Preis steigt bei mehr Features spürbar</li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm text-green-800 mb-4">
                <strong>Für wen geeignet:</strong> Alle Selbstständigen und Freelancer, die eine vollständige, benutzerfreundliche Buchhaltungslösung suchen – besonders für Einsteiger ohne Buchhaltungskenntnisse.
              </div>
              <a href="#" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                lexoffice 30 Tage kostenlos testen →
              </a>
            </div>

            {/* sevDesk */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">sevDesk</h3>
              <p className="text-gray-500 text-sm mb-4">ab 8,90 €/Monat</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✓ Stärken</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Sehr gute Kombination aus Rechnungen und Buchhaltung</li>
                    <li>• Starke App und mobiles Belegmanagement</li>
                    <li>• DATEV-Export vorhanden</li>
                    <li>• Viele Integrationen (Shopify, WooCommerce etc.)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">✗ Schwächen</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Interface etwas komplexer als lexoffice</li>
                    <li>• Volle Funktionen erst in teureren Paketen</li>
                    <li>• Gelegentliche Performance-Probleme gemeldet</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm text-blue-800 mb-4">
                <strong>Für wen geeignet:</strong> Selbstständige mit wachsendem Unternehmen, Online-Shop-Betreiber oder alle, die viele Integrationen brauchen.
              </div>
              <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                sevDesk kostenlos testen →
              </a>
            </div>

            {/* FastBill */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">FastBill</h3>
              <p className="text-gray-500 text-sm mb-4">ab 9,00 €/Monat</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✓ Stärken</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Absolut einfachste Bedienung im Vergleich</li>
                    <li>• Rechnungen in unter 2 Minuten erstellen</li>
                    <li>• Saubers Design, keine Überfüllung</li>
                    <li>• Gut für reine Rechnungssteller</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">✗ Schwächen</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Kein vollständiger DATEV-Export im Basispaket</li>
                    <li>• Buchhaltungsfunktionen begrenzt</li>
                    <li>• Für komplexere Buchhaltung nicht ideal</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm text-blue-800 mb-4">
                <strong>Für wen geeignet:</strong> Freelancer und Dienstleister, die hauptsächlich Rechnungen stellen und einen Steuerberater für die Buchhaltung haben.
              </div>
              <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                FastBill kostenlos testen →
              </a>
            </div>

            {/* Buchhaltungsbutler */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Buchhaltungsbutler</h3>
              <p className="text-gray-500 text-sm mb-4">ab 15,00 €/Monat</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✓ Stärken</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• KI-gestützte Belezerkennung und -verarbeitung</li>
                    <li>• Sehr hoher Automatisierungsgrad</li>
                    <li>• DATEV-Export und Steuerberater-Integration</li>
                    <li>• Spart enorm Zeit bei vielen Belegen</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">✗ Schwächen</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Teuerste Option im Vergleich</li>
                    <li>• Lernkurve höher als bei anderen Tools</li>
                    <li>• Overkill für kleine Freelancer</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm text-purple-800 mb-4">
                <strong>Für wen geeignet:</strong> Selbstständige mit vielen Belegen pro Monat (E-Commerce, viele Reisekosten), die maximale Automatisierung wollen.
              </div>
              <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                Buchhaltungsbutler testen →
              </a>
            </div>

            {/* WISO Mein Büro */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">WISO Mein Büro</h3>
              <p className="text-gray-500 text-sm mb-4">ab 6,00 €/Monat</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✓ Stärken</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Günstigster Einstiegspreis mit vollem Funktionsumfang</li>
                    <li>• Sowohl Online als auch Desktop-Version verfügbar</li>
                    <li>• DATEV-Export enthalten</li>
                    <li>• Bewährtes deutsches Produkt (Buhl Data)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">✗ Schwächen</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Benutzeroberfläche wirkt etwas altmodisch</li>
                    <li>• Mobile App deutlich schwächer als Konkurrenz</li>
                    <li>• Weniger modern als lexoffice oder sevDesk</li>
                  </ul>
                </div>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm text-orange-800 mb-4">
                <strong>Für wen geeignet:</strong> Selbstständige, die den günstigsten vollständigen Funktionsumfang suchen und auf ein modernes UI verzichten können.
              </div>
              <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                WISO Mein Büro testen →
              </a>
            </div>
          </section>

          {/* ===== 4. WELCHES TOOL PASST ZU DIR ===== */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Welches Tool passt zu dir?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">🌱</div>
                <h3 className="font-bold text-gray-900 mb-2">Einsteiger ohne Buchhaltungswissen</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Du willst einfach Rechnungen schreiben und deine Belege digitalisieren – ohne Buchhaltungs-Vorkenntnisse.
                </p>
                <div className="bg-green-50 rounded-lg px-3 py-2 text-sm font-semibold text-green-800">
                  → lexoffice
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="font-bold text-gray-900 mb-2">Budget-bewusste Freelancer</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Der Preis ist entscheidend, du brauchst aber trotzdem Buchhaltung + DATEV-Export.
                </p>
                <div className="bg-orange-50 rounded-lg px-3 py-2 text-sm font-semibold text-orange-800">
                  → WISO Mein Büro oder FastBill
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">📈</div>
                <h3 className="font-bold text-gray-900 mb-2">Wachsendes Unternehmen</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Dein Business wächst, du hast mehr Kunden, brauchst Integrationen und eine starke App.
                </p>
                <div className="bg-blue-50 rounded-lg px-3 py-2 text-sm font-semibold text-blue-800">
                  → sevDesk
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">🤖</div>
                <h3 className="font-bold text-gray-900 mb-2">Automatisierung im Fokus</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Du hast viele Belege pro Monat und willst maximale Automatisierung durch KI.
                </p>
                <div className="bg-purple-50 rounded-lg px-3 py-2 text-sm font-semibold text-purple-800">
                  → Buchhaltungsbutler
                </div>
              </div>
            </div>
          </section>

          {/* ===== 5. HÄUFIGE FEHLER ===== */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufige Fehler bei der Auswahl</h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-red-100 p-5 flex gap-4">
                <div className="text-red-400 text-xl shrink-0">⚠️</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Zu viele Funktionen kaufen, die man nie nutzt</h3>
                  <p className="text-sm text-gray-600">
                    Viele Selbstständige wählen das teuerste Paket „für alle Fälle". Starte mit dem günstigsten Paket und upgrade erst, wenn du wirklich an Grenzen stößt.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-red-100 p-5 flex gap-4">
                <div className="text-red-400 text-xl shrink-0">⚠️</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">DATEV-Export ignorieren</h3>
                  <p className="text-sm text-gray-600">
                    Wenn du einen Steuerberater hast, ist DATEV-Export essenziell. Ohne ihn muss dein Steuerberater Daten manuell übertragen – das kostet dich zusätzliche Honorarkosten.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-red-100 p-5 flex gap-4">
                <div className="text-red-400 text-xl shrink-0">⚠️</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Kein Testzeitraum nutzen</h3>
                  <p className="text-sm text-gray-600">
                    Alle genannten Tools bieten kostenlose Testphasen. Wer diese nicht nutzt und direkt kauft, bereut oft die Wahl. Teste mindestens zwei Optionen vor dem Kauf.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-red-100 p-5 flex gap-4">
                <div className="text-red-400 text-xl shrink-0">⚠️</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">GoBD-Konformität unterschätzen</h3>
                  <p className="text-sm text-gray-600">
                    In Deutschland müssen digitale Buchführungsunterlagen GoBD-konform archiviert werden. Nicht jede Software erfüllt diese Pflicht – prüfe das vor dem Kauf.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ===== 6. FINALE EMPFEHLUNG ===== */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Finale Empfehlung</h2>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Für die meisten Selbstständigen: <span className="text-green-600">lexoffice</span>
              </h3>
              <p className="text-gray-700 mb-4">
                lexoffice vereint das Beste aus Benutzerfreundlichkeit, Funktionsumfang und Deutschland-Kompatibilität.
                Die Software ist so gestaltet, dass auch ohne Buchhaltungskenntnisse ein GoBD-konformer Jahresabschluss möglich ist.
                Der Bankabgleich, DATEV-Export und die mobile App machen die tägliche Buchführung zum Nebenjob.
              </p>
              <p className="text-gray-700 mb-6">
                Wer dagegen hauptsächlich Rechnungen stellt und einen Steuerberater für alles andere hat, fährt mit <strong>FastBill</strong> günstiger.
                Für maximale Kosteneffizienz bei vollem Funktionsumfang lohnt sich ein Blick auf <strong>WISO Mein Büro</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors text-center"
                >
                  lexoffice 30 Tage kostenlos testen →
                </a>
                <a
                  href="#"
                  className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-lg text-sm border border-gray-300 transition-colors text-center"
                >
                  Alle Tools vergleichen ↑
                </a>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                * Affiliate-Hinweis: Dieser Link ist ein Affiliate-Link. Wir erhalten eine kleine Provision, wenn du über unseren Link bestellst – ohne Mehrkosten für dich. Das beeinflusst unsere Empfehlung nicht.
              </p>
            </div>
          </section>

        </article>
      </main>
      <Footer />
    </>
  );
}
