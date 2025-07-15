'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function PortfolioPage() {
  const heroRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 })
  }, [])

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <h1 ref={heroRef} className="text-4xl font-bold text-cyan-400 mb-4">
        Hi, I’m a Full Stack Developer
      </h1>
      <p className="text-gray-300 max-w-2xl mb-6">
        I build modern scalable SaaS, admin panels, task managers, etc.
      </p>
      <Link href="/todo" className="inline-block bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl">
        Go to Todo App →
      </Link>
    </main>
  )
}
