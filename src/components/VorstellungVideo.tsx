'use client'

import BunnyVideoSektion, { type BunnyVideo } from '@/components/BunnyVideoSektion'

// Offline-Platzhalter für die Kursvorlage (kein produktives Video-CDN verbunden).
const video: BunnyVideo[] = [
  {
    guid: 'placeholder-hintergrund',
    badge: 'Für Lehrkräfte',
    titel: 'Skills-UP! vorgestellt',
    beschreibung:
      'Jede dritte Person in der Schuldnerberatung ist unter 30 und im Schnitt mit 30.000 Euro verschuldet. Das ist der Anlass. 15 fertige Module, didaktische Materialien und Simulationen sind die Antwort.',
    sekunden: 63,
    akzent: '#4a2d8a',
    poster: '/willkommen/vertrieb.jpg',
  },
]

export default function VorstellungVideo() {
  return (
    <BunnyVideoSektion
      variante="dunkel"
      eyebrow="Eine Minute Hintergrund"
      headline="Warum es Skills-UP! überhaupt gibt."
      lead="Marina und Stefan erzählen, was Finanzbildung mit Chancengerechtigkeit zu tun hat, und was du bekommst, wenn du Skills-UP! an deine Schule holst."
      videos={video}
      fussnote="Im Video wird der Marktplatz Lernapps als Bestellweg genannt. Über das Formular oben geht es genauso: Marina antwortet persönlich."
    />
  )
}
