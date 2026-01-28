'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

export default function TrophiesPage() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    client.fetch(`*[_type == "trophy"][0]`).then((res) => {
      setData(res)
    })
  }, [])

  return (
    <motion.main 
      // Le fondu global identique à la Home et aux Projets
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-5xl mx-auto px-8 md:px-12 pt-10 pb-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-10 gap-16">
        
        {/* TITRE À GAUCHE (3/10) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
          className="md:col-span-3"
        >
          <h1 className="text-2xl font-bold tracking-tighter leading-tight uppercase">
            Trophies
          </h1>
        </motion.div>

        {/* CONTENU À DROITE (7/10) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
          className="md:col-span-7"
        >
          <div className="text-sm leading-relaxed text-gray-800">
            {data?.content ? (
              <div className="portable-text">
                <PortableText value={data.content} />
              </div>
            ) : (
              <div className="h-4 w-48 bg-gray-100 animate-pulse rounded" />
            )}
          </div>
        </motion.div>

      </div>
    </motion.main>
  )
}