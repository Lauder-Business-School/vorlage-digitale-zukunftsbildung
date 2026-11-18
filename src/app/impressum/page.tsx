import type { Metadata } from 'next'
import Link from 'next/link'
import { VEREIN } from '@/lib/verein-data'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Impressum | Verein zur Entwicklung der digitalen Zukunftsbildung',
  description: 'Impressum und Datenschutzerklärung des Vereins zur Entwicklung der digitalen Zukunftsbildung.',
  alternates: { canonical: 'https://www.example.invalid/impressum' },
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-b border-gray-100 pb-8 last:border-0">
    <h2 className="font-heading font-700 text-lg mb-3" style={{ color: '#1a1040' }}>{title}</h2>
    <div className="font-body text-base text-text-muted leading-relaxed space-y-1">{children}</div>
  </div>
)

const Sub = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="font-heading font-700 text-base mb-1.5" style={{ color: '#1a1040' }}>{title}</h3>
    <div className="font-body text-sm text-text-muted leading-relaxed">{children}</div>
  </div>
)

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 px-6"
        style={{ background: 'linear-gradient(135deg, #2d1b69 0%, #4a2d8a 60%, #1a5c4e 100%)' }}>
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full animate-float-orb pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,126,212,0.25) 0%, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-white/50 text-xs font-body font-700 uppercase tracking-widest mb-3">Rechtliches</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Impressum</h1>
          <p className="text-white/60 font-body text-base">
            Verein zur Entwicklung der digitalen Zukunftsbildung · Wien, Österreich
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#datenschutz"
              className="text-white/70 hover:text-white text-sm font-body font-600 flex items-center gap-1.5 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
              Zur Datenschutzerklärung
            </a>
          </div>
        </div>
        <div className="relative z-10 mt-10">
          <svg viewBox="0 0 1440 40" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
            <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Impressum */}
        <div className="space-y-8 mb-16">
          <div>
            <p className="text-xs font-body font-700 uppercase tracking-widest mb-6" style={{ color: '#4a2d8a' }}>
              Angaben gemäß § 5 E-Commerce-Gesetz (ECG), § 25 Mediengesetz und § 14 UGB
            </p>
          </div>

          <Section title="Medieninhaber & Herausgeber">
            <p><strong className="text-text-primary">Verein zur Entwicklung der digitalen Zukunftsbildung</strong></p>
            <p>Organisationsform: gemeinnütziger Verein</p>
          </Section>

          <Section title="Anschrift">
            <p>{VEREIN.adresse.strasse}</p>
            <p>{VEREIN.adresse.plz} {VEREIN.adresse.ort}, {VEREIN.adresse.land}</p>
            <p>
              Im{' '}
              <a href={VEREIN.standort.url} target="_blank" rel="noopener noreferrer"
                className="hover:underline" style={{ color: '#4a2d8a' }}>
                {VEREIN.standort.name}
              </a>
            </p>
          </Section>

          <Section title="Kontakt">
            <p>
              Telefon: <span>Kontakt nicht verbunden</span>
            </p>
            <p>
              E-Mail:{' '}
              <a href="mailto:marina@example.invalid" className="hover:underline" style={{ color: '#4a2d8a' }}>
                marina@example.invalid
              </a>
            </p>
            <p>
              Web:{' '}
              <a href="https://www.example.invalid" target="_blank" rel="noopener noreferrer"
                className="hover:underline" style={{ color: '#4a2d8a' }}>
                www.example.invalid
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a href="https://linkedin.com/company/verein-zur-entwicklung-der-digitalen-zukunftsbildung"
                target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#4a2d8a' }}>
                linkedin.com/company/verein-zur-entwicklung-der-digitalen-zukunftsbildung
              </a>
            </p>
          </Section>

          <Section title="Vertretungsberechtigte Personen (Vorstand)">
            <p>{VEREIN.vorstand.obfrau}, Obfrau (Vorsitzende) &amp; Projektleiterin</p>
            <p>{VEREIN.vorstand.stellvertretung}, Obfrau-Stellvertreter</p>
            <p>Funktionsperiode: {VEREIN.vorstand.funktionsperiode}</p>
            <p>
              Die Obfrau und ihr Stellvertreter vertreten den Verein gemeinsam nach außen (Gesamtvertretung).
              Schriftliche Ausfertigungen des Vereins sind gültig, wenn beide unterschrieben haben.
            </p>
          </Section>

          <Section title="Vereinsregister">
            <p>ZVR-Zahl (Zentrales Vereinsregister): <strong className="text-text-primary">{VEREIN.zvr}</strong></p>
            <p>Sitz: {VEREIN.sitz}</p>
            <p>Entstehungsdatum: {VEREIN.entstehung}</p>
            <p>Zuständige Vereinsbehörde: {VEREIN.behoerde}</p>
          </Section>

          <Section title="Haftungsausschluss">
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
              externer Links. Für den Inhalt verlinkter Seiten ist ausschließlich verantwortlich,
              wer sie betreibt. Alle Angaben auf dieser Website erfolgen ohne Gewähr; eine Haftung für
              Schäden, die sich aus der Nutzung der veröffentlichten Inhalte ergeben, ist ausgeschlossen.
            </p>
          </Section>

          <Section title="Urheberrecht">
            <p>
              Texte, Grafiken und sonstige Inhalte dieser Website unterliegen dem österreichischen
              Urheberrecht. Jede Verwertung außerhalb der engen Grenzen des Urheberrechts bedarf der
              vorherigen schriftlichen Zustimmung des Vereins zur Entwicklung der digitalen Zukunftsbildung.
            </p>
          </Section>
        </div>

        {/* Datenschutz */}
        <div id="datenschutz" className="scroll-mt-24">
          <div className="rounded-2xl p-8 mb-10"
            style={{ background: 'linear-gradient(135deg, #ede9f8, #e6f4f1)' }}>
            <h2 className="font-heading text-2xl font-bold mb-2" style={{ color: '#1a1040' }}>
              Datenschutzerklärung
            </h2>
            <p className="font-body text-sm" style={{ color: '#4a2d8a' }}>
              Gemäß DSGVO (EU) 2016/679 und österreichischem Datenschutzgesetz (DSG)
            </p>
          </div>

          <div className="space-y-8">
            <Sub title="Verantwortlicher">
              <p>
                Verein zur Entwicklung der digitalen Zukunftsbildung<br />
                {VEREIN.adresse.zeile}, {VEREIN.adresse.land}<br />
                ZVR-Zahl: {VEREIN.zvr}<br />
                E-Mail: marina@example.invalid
              </p>
            </Sub>

            <Sub title="Hinweis zur Kursvorlage">
              <p>
                Diese Website ist ein <strong>Kurs-Prototyp (Vorlage)</strong>. Es bestehen keine produktiven
                Verbindungen zu externen Diensten wie <strong>Resend</strong> (E-Mail-Versand),{' '}
                <strong>Bunny Stream</strong> (Video-CDN) oder <strong>Vercel Analytics</strong> (Reichweitenmessung).
                Formulare auf dieser Seite versenden keine E-Mails und speichern keine Daten auf einem Server.
              </p>
            </Sub>

            <Sub title="Welche Daten wir verarbeiten">
              <p>
                In dieser Kursvorlage werden über Formulare eingegebene Daten ausschließlich lokal im Browser
                verarbeitet und nicht an ein Backend oder einen E-Mail-Dienstleister übermittelt.
              </p>
            </Sub>

            <Sub title="E-Mail-Versand (Resend – nicht verbunden)">
              <p>
                In dieser Kursvorlage ist kein produktiver E-Mail-Versand über Resend eingerichtet.
                Anfragen aus Formularen werden nicht versendet.
              </p>
            </Sub>

            <Sub title="Hosting (Vercel)">
              <p>
                Diese Website kann als Vorlage lokal oder über einen eigenen Hosting-Anbieter betrieben werden.
                Eine produktive Anbindung ist in dieser Kursvorlage nicht vorkonfiguriert.
              </p>
            </Sub>

            <Sub title="Reichweitenmessung (Vercel Analytics – nicht verbunden)">
              <p>
                In dieser Kursvorlage sind Vercel Web Analytics und Vercel Speed Insights nicht verbunden.
                Es findet keine Reichweitenmessung oder Telemetrie-Übertragung statt.
              </p>
            </Sub>

            <Sub title="YouTube-Videos">
              <p>
                Auf dieser Website werden Videos von{' '}
                <strong>YouTube</strong> (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA)
                eingebunden. Videos werden erst nach deiner ausdrücklichen Zustimmung geladen
                (Zwei-Klick-Lösung). Beim Abspielen überträgt dein Browser Daten (u.a. IP-Adresse,
                Geräteinformationen) an Google. Wir verwenden den datenschutzfreundlichen Modus
                (youtube-nocookie.com). Die Übermittlung in die USA erfolgt auf Grundlage der
                EU-Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.
                Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                  className="hover:underline" style={{ color: '#4a2d8a' }}>Datenschutzerklärung Google</a>
              </p>
            </Sub>

            <Sub title="Videos (bunny.net – nicht verbunden)">
              <p>
                In dieser Kursvorlage ist kein produktives Bunny-Stream-CDN verbunden. Statt externer
                Video-Streams werden Offline-Platzhalter angezeigt.
              </p>
            </Sub>

            <Sub title="Cookies">
              <p>
                Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch
                notwendige Cookies gesetzt, die für den Betrieb der Website erforderlich sind.
                Auch die Reichweitenmessung (siehe oben) kommt ohne Cookies aus.
              </p>
            </Sub>

            <Sub title="Deine Rechte">
              <p>
                Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
                Verarbeitung deiner personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit.
                Anfragen bitte per E-Mail an:{' '}
                <a href="mailto:marina@example.invalid" className="hover:underline"
                  style={{ color: '#4a2d8a' }}>marina@example.invalid</a>
              </p>
              <p className="mt-2">
                Beschwerden kannst du an die österreichische Datenschutzbehörde richten:{' '}
                <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer"
                  className="hover:underline" style={{ color: '#4a2d8a' }}>www.dsb.gv.at</a>
              </p>
            </Sub>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link href="/" className="inline-flex items-center gap-2 font-body font-600 text-sm transition-colors"
            style={{ color: '#4a2d8a' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
