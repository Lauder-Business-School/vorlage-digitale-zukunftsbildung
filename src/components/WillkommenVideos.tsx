'use client'

import BunnyVideoSektion, { type BunnyVideo } from '@/components/BunnyVideoSektion'

type Anrede = 'sie' | 'du'

// Startseite siezt, die Schultyp-Seiten duzen durchgehend: beide Fassungen
// nutzen dasselbe Bauteil, also muss die Anrede mitwandern.
const anredeTexte = (a: Anrede) =>
  a === 'du'
    ? {
        lead: 'eines für dich als Lehrkraft, eines für deine Klasse',
        badgeKlasse: 'Für deine Klasse',
        fuerKlasse: 'für deine Klasse',
        hoeren: 'Das hört deine Klasse zum Start',
      }
    : {
        lead: 'eines für Sie als Lehrkraft, eines für Ihre Klasse',
        badgeKlasse: 'Für Ihre Klasse',
        fuerKlasse: 'für Ihre Klasse',
        hoeren: 'Das hört Ihre Klasse zum Start',
      }

// Offline-Platzhalter für die Kursvorlage (kein produktives Video-CDN verbunden).
const videoListe = (a: Anrede): BunnyVideo[] => {
  const t = anredeTexte(a)
  const basis: BunnyVideo[] = [
    {
      guid: 'placeholder-lehrkraft',
      badge: 'Für Lehrkräfte',
      titel: 'Willkommen bei Skills-UP!',
      beschreibung: `15 Module, fix und fertig, flexibel über das ganze Jahr. Dazu didaktische Materialien und Simulationen ${t.fuerKlasse}.`,
      sekunden: 23,
      akzent: '#4a2d8a',
      poster: '/willkommen/lehrkraft.jpg',
    },
    {
      guid: 'placeholder-klasse',
      badge: t.badgeKlasse,
      titel: 'Finanzbildung ist ein Life-Skill',
      beschreibung: `${t.hoeren}: warum uns beiden in der Schule niemand Geld erklärt hat, und was in den Modulen wirklich vorkommt.`,
      sekunden: 54,
      akzent: '#1a5c4e',
      poster: '/willkommen/schueler.jpg',
    },
  ]
  if (a === 'sie') {
    basis.push({
      guid: 'placeholder-hintergrund',
      badge: 'Hintergrund',
      titel: 'Skills-UP! vorgestellt',
      beschreibung: 'Jede dritte Person in der Schuldnerberatung ist unter 30 und im Schnitt mit 30.000 Euro verschuldet. Das ist der Anlass, und das ist die Antwort.',
      sekunden: 63,
      akzent: '#2a8a76',
      poster: '/willkommen/vertrieb.jpg',
    })
  }
  return basis
}

export default function WillkommenVideos({ anrede = 'sie' }: { anrede?: Anrede }) {
  return (
    <BunnyVideoSektion
      eyebrow="Persönlich vorgestellt"
      headline="Marina und Stefan sagen kurz Hallo."
      lead={`Zwei Begrüßungsvideos aus der Plattform: ${anredeTexte(anrede).lead}. Zusammen keine 80 Sekunden.`}
      videos={videoListe(anrede)}
    />
  )
}
