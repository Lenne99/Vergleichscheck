import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Vergleichscheck.com",
  description: "Datenschutzerklärung von Vergleichscheck.com: Kein Tracking, keine Analyse-Cookies, DSGVO-konform.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 py-14">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10 space-y-8">

            <h1 className="text-4xl font-bold tracking-tight leading-tight text-slate-900">
              Datenschutzerklärung
            </h1>

            <p className="text-base leading-relaxed text-slate-600">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Erklärung informiert Sie darüber, welche Daten
              wir erheben, wie wir sie verwenden und welche Rechte Sie haben.
            </p>

            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">1. Verantwortlicher</h2>
              <div className="text-base leading-relaxed text-slate-600 space-y-1">
                <p><strong className="text-slate-800">[PLATZHALTER: Ihr vollständiger Name]</strong></p>
                <p>[PLATZHALTER: Straße und Hausnummer]</p>
                <p>[PLATZHALTER: PLZ und Ort]</p>
                <p>E-Mail: <strong className="text-slate-800">[PLATZHALTER: Ihre E-Mail-Adresse]</strong></p>
              </div>
            </section>

            {/* 2. Datenerhebung */}
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">2. Welche Daten wir erheben</h2>
              <div className="text-base leading-relaxed text-slate-600 space-y-3">
                <p>
                  <strong className="text-slate-800">Keine Tracking-Cookies, kein Google Analytics.</strong> Diese
                  Website verwendet ausschließlich technisch notwendige Cookies (z. B. zur Speicherung Ihrer
                  Cookie-Präferenz). Es werden keine Analyse-, Werbe- oder Tracking-Cookies eingesetzt.
                </p>
                <p>
                  Wenn Sie unsere Website besuchen, erhebt Ihr Browser automatisch Informationen, die für die
                  Übertragung technisch notwendig sind (IP-Adresse, Browsertyp, Betriebssystem, aufgerufene Seite,
                  Uhrzeit). Diese Daten werden nicht gespeichert oder ausgewertet, sofern dies nicht durch den
                  Hosting-Anbieter im Rahmen seiner Serverprotokolle erfolgt (siehe Abschnitt 3).
                </p>
              </div>
            </section>

            {/* 3. Hosting */}
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">3. Hosting (Vercel)</h2>
              <div className="text-base leading-relaxed text-slate-600 space-y-3">
                <p>
                  Diese Website wird bei <strong className="text-slate-800">Vercel Inc.</strong> (340 Pine Street,
                  Suite 701, San Francisco, CA 94104, USA) gehostet. Vercel verarbeitet beim Aufruf unserer Website
                  technische Verbindungsdaten (IP-Adresse, Zeitstempel, aufgerufene Ressource) im Rahmen seiner
                  Serverprotokolle.
                </p>
                <p>
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und stabilen
                  Betrieb der Website). Weitere Informationen finden Sie in der{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Datenschutzerklärung von Vercel
                  </a>.
                </p>
                <p>
                  Wir haben mit Vercel einen Auftragsverarbeitungsvertrag (DPA) geschlossen. Die Datenübertragung in
                  die USA erfolgt auf Basis der EU-Standardvertragsklauseln.
                </p>
              </div>
            </section>

            {/* 4. Schriftarten */}
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">4. Schriftarten (next/font)</h2>
              <div className="text-base leading-relaxed text-slate-600">
                <p>
                  Diese Website verwendet die Schriftart <em>Inter</em> über das Next.js-Paket{" "}
                  <code className="bg-slate-100 px-1 rounded text-sm">next/font</code>. Die Schriftdatei wird dabei
                  beim Build-Prozess heruntergeladen und zusammen mit der Website ausgeliefert. Beim Besuch unserer
                  Website werden <strong className="text-slate-800">keine Anfragen an Google-Server</strong> gesendet.
                  Ihre IP-Adresse wird Google gegenüber nicht übermittelt.
                </p>
              </div>
            </section>

            {/* 5. Affiliate-Links */}
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">5. Affiliate-Links</h2>
              <div className="text-base leading-relaxed text-slate-600 space-y-3">
                <p>
                  Diese Website enthält Affiliate-Links zu Drittanbietern. Wenn Sie auf einen solchen Link klicken,
                  werden Sie zur Website des jeweiligen Anbieters weitergeleitet. Diese Drittanbieter haben eigene
                  Datenschutzrichtlinien, auf die wir keinen Einfluss haben.
                </p>
                <p>
                  Beim Klick auf einen Affiliate-Link können Tracking-Technologien des jeweiligen Anbieters
                  aktiviert werden, die Ihre Transaktion dem Vermittler zuordnen. Bitte lesen Sie die
                  Datenschutzerklärung des jeweiligen Anbieters, bevor Sie einen Kauf abschließen.
                </p>
              </div>
            </section>

            {/* 6. Ihre Rechte */}
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">6. Ihre Rechte</h2>
              <div className="text-base leading-relaxed text-slate-600 space-y-3">
                <p>Nach der DSGVO haben Sie folgende Rechte:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
                  <li>Beschwerderecht bei einer Datenschutzbehörde (Art. 77 DSGVO)</li>
                </ul>
                <p>
                  Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
                  <strong className="text-slate-800">[PLATZHALTER: Ihre E-Mail-Adresse]</strong>
                </p>
              </div>
            </section>

            {/* 7. Kontakt */}
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">7. Kontakt für Datenschutzanfragen</h2>
              <div className="text-base leading-relaxed text-slate-600 space-y-1">
                <p>Bei Fragen zum Datenschutz erreichen Sie uns unter:</p>
                <p>E-Mail: <strong className="text-slate-800">[PLATZHALTER: Ihre E-Mail-Adresse]</strong></p>
                <p>[PLATZHALTER: Straße, PLZ, Ort]</p>
              </div>
            </section>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-400">
              <p>
                Zum{" "}
                <Link href="/impressum" className="hover:text-blue-600 transition-colors underline">
                  Impressum
                </Link>
              </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
