'use client'
import './globals.css'
import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [showJonathan, setShowJonathan] = useState(false)
  const brandBlue = '#1104da'

  // 1. Scroll Fluide (Lenis)
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  // 2. Intervalle pour l'alternance du nom (toutes les 4 secondes)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowJonathan((prev) => !prev)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const getLinkStyle = (isActive: boolean) => ({
    color: isActive ? brandBlue : '',
  })

  return (
    <html lang="fr">
      <body className="antialiased bg-white text-black">
        <header className="max-w-5xl mx-auto p-8 md:p-12 flex justify-between items-center bg-white">
          
          {/* ZONE DU LOGO ANIME */}
          <Link href="/" className="h-6 flex items-center uppercase font-bold tracking-tight text-base whitespace-nowrap">
  {"Guillaume & Jonathan".split("").map((char, index) => (
    <motion.span
      key={index}
      animate={{ 
        color: ["#000000", "#1104da", "#000000"] 
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 3, // Temps d'attente avant que la chenille ne recommence
        delay: index * 0.05, // Décale l'allumage de chaque lettre
        ease: "linear"
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</Link>

          {/* NAVIGATION */}
          <nav className="flex gap-8 text-[11px] font-medium uppercase">
            <Link 
              href="/" 
              style={getLinkStyle(pathname === '/' || pathname.startsWith('/project'))}
              className="transition-colors duration-300 hover:text-[#1104da]"
            >
              Work
            </Link>
            <Link 
              href="/trophies" 
              style={getLinkStyle(pathname === '/trophies')}
              className="transition-colors duration-300 hover:text-[#1104da]"
            >
              Trophies
            </Link>
            <Link 
              href="/about" 
              style={getLinkStyle(pathname === '/about')}
              className="transition-colors duration-300 hover:text-[#1104da]"
            >
              About
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  )
}