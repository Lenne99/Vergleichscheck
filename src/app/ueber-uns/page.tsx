import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Über uns – Vergleichcheck.com",
  description: "Wer steckt hinter Vergleichcheck.com? Unser Ansatz für unabhängige Software-Vergleiche speziell für Selbstständige in Deutschland.",
};

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              👋 Hinter den Kulissen
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900 mb-6">
              Über Vergleichcheck.com
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Vergleichcheck.com ist eine unabhängige Vergleichsplattform speziell für Solo-Selbstständige, Freelancer und kleine Unternehmen in Deutschland.
            </p>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Warum Vergleichcheck?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Wer als Selbstständiger die richtige Software sucht, findet meistens: generische Top-10-Listen, die für Konzerne geschrieben wurden — oder Affiliate-Seiten, bei denen das teuerste Tool immer gewinnt.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Vergleichcheck macht es anders. Jede Empfehlung basiert auf echten Tests mit echten Accounts, speziell aus der Perspektive von Solo-Selbstständigen ohne IT-Abteilung, ohne Buchhalter und ohne Marketingteam.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Unser Ansatz</h2>
              <div className="space-y-4">
                {[
                  { icon: "🔬", title: "Selbst getestet", text: "Wir richten echte Accounts ein, importieren echte Daten und nutzen die Tools so wie ein Selbstständiger sie nutzen würde — nicht wie ein Tech-Journalist beim Schnelltest." },
                  { icon: "🚫", title: "Keine bezahlten Platzierungen", text: "Welches Tool auf Platz 1 steht, entscheidet unser Test — nicht das Affiliate-Budget. Wir erhalten Provisionen bei Kauf über unsere Links, aber das beeinflusst nie das Testergebnis." },
                  { icon: "🎯", title: "Klare Empfehlungen", text: "Wir sagen dir direkt welches Tool für deinen Anwendungsfall das beste ist. Kein 'kommt drauf an' ohne Erklärung." },
                  { icon: "🔄", title: "Regelmäßig aktualisiert", text: "Software ändert sich. Preise ändern sich. Wir überprüfen unsere Vergleiche regelmäßig und aktualisieren sie wenn nötig." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">{item.title}</div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Affiliate-Hinweis</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-slate-700 text-sm leading-relaxed">
                  Einige Links auf dieser Website sind Affiliate-Links. Das bedeutet: wenn du über unseren Link ein Produkt kaufst oder testest, erhalten wir eine kleine Provision vom Anbieter — <strong>ohne dass dir dadurch Mehrkosten entstehen</strong>. Diese Provisionen helfen uns, die Website kostenlos und werbefrei zu betreiben. Sie beeinflussen unsere Empfehlungen nicht: das beste Tool für dich gewinnt, unabhängig vom Affiliate-Satz.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Kontakt</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fragen, Feedback oder Hinweise auf veraltete Informationen? Schreib uns — wir antworten.
              </p>
              <p className="text-slate-600 text-sm mt-2">
                E-Mail: <a href="mailto:hallo@vergleichcheck.com" className="text-blue-600 hover:underline">hallo@vergleichcheck.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
