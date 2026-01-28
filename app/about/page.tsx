'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-8 md:px-12 pt-10 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-16 items-start">
        
        {/* COLONNE GAUCHE (7/10) */}
        <div className="md:col-span-7 flex flex-col gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative aspect-[4/3] bg-gray-100 overflow-hidden"
          >
            <Image 
              src="/about.gif" 
              alt="About"
              fill
              className="object-cover"
              unoptimized 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-4">Notre Vision</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Ton texte descriptif qui s'affiche sous le GIF ici.
            </p>
          </motion.div>
        </div>

        {/* COLONNE DROITE (3/10) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-3 flex flex-col gap-8"
        >
          <h2 className="text-2xl font-bold tracking-tighter leading-none">
            Guillaume & Jonathan
          </h2>
          <div className="text-sm leading-relaxed text-gray-800">
            <p>Creative Studio / Paris</p>
          </div>
          <div className="mt-4 pt-8 border-t border-gray-100 flex flex-col gap-4">
            <span className="text-[10px] uppercase font-bold text-gray-400">Contact</span>
            <a href="mailto:hello@tondomaine.com" className="text-sm hover:text-[#1104da]">
              hello@tondomaine.com
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  )
}