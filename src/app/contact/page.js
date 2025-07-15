'use client'
import { useRouter } from 'next/navigation'

export default function AboutPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen p-6 bg-gray-900 text-white">
      <button
        onClick={() => router.push('/portfolio')}
        className="mb-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg"
      >
        ← Back to Home
      </button>

      <h1 className="text-3xl font-bold text-cyan-400 mb-4">👨‍💻 About Me</h1>
      <p className="text-gray-300 leading-relaxed max-w-2xl">
        I&apos;m a passionate full stack developer who&apos;s focused on scalable SaaS architecture. I specialize in microfrontend architecture, event-driven systems, and production-grade Next.js applications.
      </p>
    </main>
  )
}
