import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = [
  {
    icon: "📊",
    title: "Buchhaltung & Rechnungen",
    description: "Finde die beste Buchhaltungssoftware für dein Business",
    href: "/buchhaltung/beste-buchhaltungssoftware-selbststaendige",
    count: "5 Tools verglichen",
  },
  {
    icon: "🤖",
    title: "KI-Assistenten",
    description: "Die besten KI-Tools für Selbstständige und Freelancer",
    href: "#",
    count: "Demnächst",
  },
  {
    icon: "📣",
    title: "Marketing & Kundengewinnung",
    description: "Tools für Newsletter, Social Media und Leadgenerierung",
    href: "#",
    count: "Demnächst",
  },
  {
    icon: "✅",
    title: "Produktivität & Organisation",
    description: "Projektmanagement und Zeiterfassung für Freelancer",
    href: "#",
    count: "Demnächst",
  },
  {
    icon: "🌐",
    title: "Website & Online-Präsenz",
    description: "Website-Builder, Hosting und Terminbuchungssysteme",
    href: "#",
    count: "Demnächst",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-16 text-center">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Unabhängige Vergleiche für Deutschland
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Finde die beste Software<br />für dein Business
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vergleichscheck hilft Selbstständigen, Freelancern und kleinen Unternehmen, die richtigen digitalen Tools zu finden – ohne Werbeblabla, mit klaren Empfehlungen.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Vergleichskategorien</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{cat.description}</p>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {cat.count}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Unabhängige Redaktion</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600 mt-1">Tools pro Kategorie verglichen</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">DE</div>
                <div className="text-sm text-gray-600 mt-1">Fokus auf den deutschen Markt</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
