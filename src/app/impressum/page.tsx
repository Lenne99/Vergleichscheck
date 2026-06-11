import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum – Vergleichscheck.com",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG für Vergleichscheck.com",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 py-14">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10 space-y-8">

            <h1 className="text-4xl font-bold tracking-tight leading-tight text-slate-900">
              Impressum
            </h1>

            {/* § 5 TMG */}
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Angaben gemäß § 5 TMG</h2>
              <div className="text-base leading-relaxed text-slate-600 space-y-1">
                <p><strong className="text-slate-800">[PLATZHALTER: Ihr vollständiger Name]</strong></p>
                <p>[PLATZHALTER: Straße und Hausnummer]</p>
                <p>[PLATZHALTER: PLZ und Ort]</p>
                <p>Deutschland</p>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Kontakt</h2>
              <div className="text-base leading-relaxed text-slate-600 space-y-1">
                <p>E-Mail: <strong className="text-slate-800">[PLATZHALTER: Ihre E-Mail-Adresse]</strong></p>
              </div>
            </section>

            {/* Verantwortlich */}
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <div className="text-base leading-relaxed text-slate-600 space-y-1">
                <p><strong className="text-slate-800">[PLATZHALTER: Ihr vollständiger Name]</strong></p>
                <p>[PLATZHALTER: Straße und Hausnummer]</p>
                <p>[PLATZHALTER: PLZ und Ort]</p>
              </div>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Haftungsausschluss</h2>

              <div className="space-y-4 text-base leading-relaxed text-slate-600">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Haftung für Inhalte</h3>
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
                    Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                    übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
                    eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className="mt-2">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                    bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                    konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                    Inhalte umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                    Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                    wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                    Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                  <p className="mt-2">
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                    Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                    umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Hinweis zu Affiliate-Links</h3>
                  <p>
                    Diese Website enthält Affiliate-Links. Wenn Sie über einen solchen Link ein Produkt kaufen, erhalten wir
                    eine Provision vom Anbieter — für Sie entstehen dabei keine zusätzlichen Kosten. Die Vergütung beeinflusst
                    unsere redaktionellen Empfehlungen nicht.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
