import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Vergleichcheck.com",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900 mb-8">
              Datenschutzerklärung
            </h1>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-3">1. Verantwortlicher</h2>
              <p className="text-base leading-relaxed text-slate-600">
                Verantwortlicher im Sinne der DSGVO:<br /><br />
                [PLATZHALTER: Ihr vollständiger Name]<br />
                [PLATZHALTER: Ihre Straße und Hausnummer]<br />
                [PLATZHALTER: Ihre PLZ und Stadt]<br />
                E-Mail: [PLATZHALTER: Ihre E-Mail-Adresse]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-3">2. Datenerhebung auf dieser Website</h2>
              <h3 className="font-semibold text-slate-800 mb-2">Cookies und Tracking</h3>
              <p className="text-base leading-relaxed text-slate-600 mb-4">
                Diese Website verwendet ausschließlich technisch notwendige Cookies. Es werden <strong>keine Tracking-Cookies</strong>, kein Google Analytics, kein Facebook Pixel und keine vergleichbaren Analyse-Werkzeuge eingesetzt.
              </p>
              <h3 className="font-semibold text-slate-800 mb-2">Server-Logs</h3>
              <p className="text-base leading-relaxed text-slate-600">
                Beim Aufruf dieser Website werden automatisch Informationen in Server-Log-Dateien gespeichert, die Ihr Browser übermittelt. Dies erfolgt durch unseren Hosting-Anbieter Vercel. Mehr dazu unter Abschnitt 3.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-3">3. Hosting (Vercel)</h2>
              <p className="text-base leading-relaxed text-slate-600 mb-4">
                Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA gehostet. Vercel verarbeitet im Rahmen des Hostings technisch notwendige Server-Log-Daten (IP-Adresse, Datum/Uhrzeit des Zugriffs, aufgerufene URL, übertragene Datenmenge, HTTP-Status-Code, Referrer).
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website). Weitere Informationen finden Sie in der{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Datenschutzerklärung von Vercel
                </a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-3">4. Schriftarten (next/font)</h2>
              <p className="text-base leading-relaxed text-slate-600">
                Diese Website verwendet Schriftarten über next/font. Die Schriftdateien werden beim Build-Prozess heruntergeladen und lokal auf unserem Server bereitgestellt. Es werden <strong>keine Anfragen an Google-Server</strong> aus Ihrem Browser heraus gesendet.
              </p>
            </section>

            <section id="affiliate" className="mb-8 scroll-mt-24">
              <h2 className="text-lg font-bold text-slate-900 mb-3">5. Affiliate-Links</h2>
              <p className="text-base leading-relaxed text-slate-600">
                Diese Website enthält Affiliate-Links zu Drittanbietern (z. B. lexoffice, sevDesk, ChatGPT). Wenn Sie auf solche Links klicken, verlassen Sie unsere Website. Die verlinkten Drittanbieter haben eigene Datenschutzrichtlinien, für die wir nicht verantwortlich sind. Wir erhalten bei einem Kauf über unsere Links eine Provision, ohne dass Ihnen dadurch Mehrkosten entstehen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-3">6. Ihre Rechte</h2>
              <p className="text-base leading-relaxed text-slate-600 mb-4">
                Sie haben gemäß DSGVO folgende Rechte:
              </p>
              <ul className="space-y-2 text-base text-slate-600 mb-4">
                <li className="flex gap-2"><span className="text-blue-600 shrink-0">→</span> Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li className="flex gap-2"><span className="text-blue-600 shrink-0">→</span> Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li className="flex gap-2"><span className="text-blue-600 shrink-0">→</span> Recht auf Löschung (Art. 17 DSGVO)</li>
                <li className="flex gap-2"><span className="text-blue-600 shrink-0">→</span> Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li className="flex gap-2"><span className="text-blue-600 shrink-0">→</span> Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li className="flex gap-2"><span className="text-blue-600 shrink-0">→</span> Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">7. Kontakt</h2>
              <p className="text-base leading-relaxed text-slate-600">
                Bei Fragen zum Datenschutz wenden Sie sich an:<br /><br />
                E-Mail: [PLATZHALTER: Ihre E-Mail-Adresse]<br />
                [PLATZHALTER: Ihre Anschrift]
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
