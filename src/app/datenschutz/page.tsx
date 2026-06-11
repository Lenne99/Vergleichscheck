import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Vergleichscheck.com",
  description: "Datenschutzerklärung gemäß DSGVO für Vergleichscheck.com",
};

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mb-8 scroll-mt-20">
      <h2 className="text-lg font-bold text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Datenschutzerklärung</h1>
          <p className="text-slate-500 text-sm mb-10">Stand: Juni 2026 · Gemäß DSGVO und BDSG</p>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">

            <Section title="1. Verantwortlicher">
              <p>
                Verantwortlicher im Sinne der DSGVO (Art. 4 Nr. 7) ist:
              </p>
              <p>
                <strong>[PLATZHALTER: Vor- und Nachname]</strong><br />
                [PLATZHALTER: Straße und Hausnummer]<br />
                [PLATZHALTER: PLZ und Ort]<br />
                E-Mail: <a href="mailto:[PLATZHALTER]" className="text-blue-600 hover:underline">[PLATZHALTER: E-Mail]</a>
              </p>
            </Section>

            <Section title="2. Grundsätze der Datenverarbeitung">
              <p>
                Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie
                unserer Inhalte und Leistungen erforderlich ist. Eine Verarbeitung personenbezogener Daten erfolgt nur,
                wenn eine gesetzliche Erlaubnis besteht oder du als betroffene Person eingewilligt hast.
              </p>
              <p>
                <strong>Kein Tracking:</strong> Diese Website verwendet kein Google Analytics, kein Facebook Pixel und keine
                vergleichbaren Tracking-Dienste. Es werden keine Nutzerprofile erstellt.
              </p>
            </Section>

            <Section title="3. Hosting (Vercel)">
              <p>
                Diese Website wird gehostet von Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.
                Beim Aufruf unserer Website werden automatisch Informationen in sogenannten Server-Log-Dateien gespeichert,
                die dein Browser übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>IP-Adresse (anonymisiert)</li>
                <li>Datum und Uhrzeit des Abrufs</li>
                <li>Aufgerufene URL</li>
                <li>Browser und Betriebssystem</li>
              </ul>
              <p>
                Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an einem sicheren Betrieb der Website). Vercel verarbeitet diese Daten gemäß
                seiner{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Datenschutzrichtlinie
                </a>.
              </p>
            </Section>

            <Section title="4. Schriftarten (next/font)">
              <p>
                Diese Website verwendet die Schriftart „Inter" über das Next.js-Paket <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">next/font/google</code>.
                Die Schriftart wird beim Build-Prozess auf unseren Server geladen und dann lokal ausgeliefert.
                <strong> Es findet kein Aufruf von Google-Servern durch deinen Browser statt.</strong> Deine IP-Adresse
                wird dabei nicht an Google übermittelt. Dies entspricht den Anforderungen der DSGVO.
              </p>
            </Section>

            <Section id="affiliate" title="5. Affiliate-Links">
              <p>
                Diese Website enthält Affiliate-Links zu Drittanbietern (z. B. lexoffice, sevDesk, ChatGPT). Wenn du auf
                einen solchen Link klickst und einen Kauf abschließt, erhalten wir eine Provision des Anbieters.
                Für dich entstehen dabei keine zusätzlichen Kosten.
              </p>
              <p>
                Mit dem Klick auf einen Affiliate-Link verlässt du unsere Website. Die Drittanbieter haben eigene
                Datenschutzbestimmungen, für die wir nicht verantwortlich sind. Alle externen Links sind mit
                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs ml-1">rel=&quot;noopener noreferrer&quot;</code> gekennzeichnet.
              </p>
            </Section>

            <Section title="6. Cookies">
              <p>
                Diese Website setzt ausschließlich ein technisch notwendiges Cookie, das speichert, ob du den
                Cookie-Hinweis bestätigt hast (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">vc_cookie_ok</code>).
                Dieses Cookie enthält keine personenbezogenen Daten, wird nicht an Dritte weitergegeben und wird
                lokal in deinem Browser gespeichert (localStorage). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p>
                Es werden <strong>keine</strong> Tracking-Cookies, Werbe-Cookies oder Analyse-Cookies gesetzt.
              </p>
            </Section>

            <Section title="7. Deine Rechte (Art. 15–22 DSGVO)">
              <p>Du hast folgende Rechte gegenüber uns:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO) – Welche Daten wir von dir haben</li>
                <li><strong>Berichtigungsrecht</strong> (Art. 16 DSGVO) – Korrektur falscher Daten</li>
                <li><strong>Löschungsrecht</strong> (Art. 17 DSGVO) – „Recht auf Vergessenwerden"</li>
                <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
              </ul>
              <p>
                Zur Ausübung deiner Rechte wende dich an:{" "}
                <a href="mailto:[PLATZHALTER]" className="text-blue-600 hover:underline">[PLATZHALTER: E-Mail]</a>
              </p>
              <p>
                Du hast außerdem das Recht, dich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren.
              </p>
            </Section>

            <Section title="8. Änderungen dieser Datenschutzerklärung">
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte
                Rechtslagen oder bei Änderungen des Dienstes anzupassen. Die aktuelle Version ist stets unter
                vergleichscheck.com/datenschutz abrufbar.
              </p>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
