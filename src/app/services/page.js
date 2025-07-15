'use client'
import { useRouter } from 'next/navigation'

export default function ServicesPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen p-6 bg-gray-900 text-white">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg"
      >
        ← Back to Home
      </button>

      <h1 className="text-3xl font-bold text-cyan-400 mb-4">🛠️ My Services</h1>
      <ul className="space-y-3 text-gray-300">
        <li>✅ Custom SaaS Development (WhatsApp Automation, CRMs)</li>
        <li>✅ Full Stack Dashboard Development (Next.js 14 + Tailwind + Redux)</li>
        <li>✅ Microfrontend Architecture with Vercel</li>
        <li>✅ Performance Optimization, Lighthouse 90+</li>
        <li>✅ CI/CD Setup (GitHub Actions, ArgoCD)</li>
      </ul>
    </main>
  )
}
