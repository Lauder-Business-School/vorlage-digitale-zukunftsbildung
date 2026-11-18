export type BunnyVideo = {
  guid: string
  badge: string
  titel: string
  beschreibung: string
  sekunden: number
  akzent: string
  poster: string
}

type Props = {
  eyebrow: string
  headline: string
  lead: string
  videos: BunnyVideo[]
  variante?: 'hell' | 'dunkel'
  fussnote?: string
}

export default function BunnyVideoSektion({ eyebrow, headline, lead, videos }: Props) {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p>{eyebrow}</p>
        <h2 className="font-heading text-3xl font-bold">{headline}</h2>
        <p className="mt-4">{lead}</p>
        <p className="mt-4">Videos sind in dieser Vorlage nicht verbunden. Ergänze eigene freigegebene Medien.</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {videos.map((video) => (
            <li key={video.guid} className="rounded-xl bg-white p-5">
              <h3 className="font-bold">{video.titel}</h3>
              <p>{video.beschreibung}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
