import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Vergleichcheck.com",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900 mb-8">
              Impressum
            </h1>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-3">Angaben gemäß § 5 TMG</h2>
              <p className="text-base leading-relaxed text-slate-600">
                [PLATZHALTER: Ihr vollständiger Name]<br />
                [PLATZHALTER: Ihre Straße und Hausnummer]<br />
                [PLATZHALTER: Ihre PLZ und Stadt]<br />
                Deutschland
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-3">Kontakt</h2>
              <p className="text-base leading-relaxed text-slate-600">
                E-Mail: [PLATZHALTER: Ihre E-Mail-Adresse]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-base leading-relaxed text-slate-600">
                [PLATZHALTER: Ihr vollständiger Name]<br />
                [PLATZHALTER: Ihre Anschrift]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-3">Haftungsausschluss</h2>
              <h3 className="font-semibold text-slate-800 mb-2">Haftung für Inhalte</h3>
              <p className="text-base leading-relaxed text-slate-600 mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-base leading-relaxed text-slate-600 mb-6">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
              <h3 className="font-semibold text-slate-800 mb-2">Haftung für Links</h3>
              <p className="text-base leading-relaxed text-slate-600 mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Urheberrecht</h2>
              <p className="text-base leading-relaxed text-slate-600">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
