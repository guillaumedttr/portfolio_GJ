import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

async function getTrophies() {
  // On va chercher le premier document de type trophy
  return await client.fetch(`*[_type == "trophy"][0]`)
}

export default async function TrophiesPage() {
  const data = await getTrophies()

  return (
    <main className="max-w-5xl mx-auto px-8 md:px-12 pt-10 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-16">
        
        {/* Titre à gauche pour rester raccord avec ton style */}
        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold tracking-tighter">Awards</h1>
        </div>

        {/* Ton paragraphe éditable à droite */}
        <div className="md:col-span-7">
          <div className="text-sm leading-relaxed text-gray-800">
            {data?.content ? (
              <PortableText value={data.content} />
            ) : (
              <p className="text-gray-400">No trophies published yet.</p>
            )}
          </div>
        </div>

      </div>
    </main>
  )
}