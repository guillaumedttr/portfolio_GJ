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
        </div>

        {/* COLONNE DROITE (3/10) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-3 flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tighter leading-tight">
              You don’t know us yet. <br />
              So here is a couple of photos.
            </h2>
          </div>

          <div className="text-sm leading-relaxed text-gray-800">
            <p>We are a creative team based in Paris. Currently working at Marcel.</p>
          </div>

          <div className="mt-4 pt-8 border-t border-gray-100 flex flex-col gap-2">
            <span className="text-[10px] font-medium text-gray-400">Contact us</span>
            <a 
              href="mailto:jonathanetguillaume@gmail.com" 
              className="text-[12px] lowercase hover:text-[#1104da] transition-colors break-all"
            >
              jonathanetguillaume@gmail.com
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  )
}