import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum – Vergleichscheck.com",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG für Vergleichscheck.com",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Impressum</h1>
          <p className="text-slate-500 text-sm mb-10">Angaben gemäß § 5 TMG</p>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-0">

            <Section title="Anbieter">
              <p><strong>[PLATZHALTER: Vor- und Nachname]</strong></p>
              <p>[PLATZHALTER: Straße und Hausnummer]</p>
              <p>[PLATZHALTER: PLZ und Ort]</p>
              <p>Deutschland</p>
            </Section>

            <Section title="Kontakt">
              <p>E-Mail: <a href="mailto:[PLATZHALTER]" className="text-blue-600 hover:underline">[PLATZHALTER: E-Mail-Adresse]</a></p>
            </Section>

            <Section title="Umsatzsteuer-ID">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
              <p>[PLATZHALTER: USt-IdNr. oder „nicht vorhanden"]</p>
            </Section>

            <Section title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
              <p>[PLATZHALTER: Vor- und Nachname]</p>
              <p>[PLATZHALTER: Adresse wie oben]</p>
            </Section>

            <Section title="Haftung für Inhalte">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                diese Inhalte umgehend entfernen.
              </p>
            </Section>

            <Section title="Haftung für Links">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </Section>

            <Section title="Urheberrecht">
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </Section>

            <Section title="Affiliate-Hinweis">
              <p>
                Diese Website enthält Affiliate-Links. Wenn du über einen solchen Link einen Kauf abschließt, erhalten
                wir eine Provision — ohne zusätzliche Kosten für dich. Dies beeinflusst unsere redaktionellen
                Empfehlungen nicht. Alle verlinkten Anbieter werden unabhängig bewertet.
              </p>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
