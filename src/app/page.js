import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-black text-white">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">🚀 Im Chinmaya – Full Stack Developer</h1>
      <p className="text-gray-300 mb-4">I build scalable SaaS platforms, admin dashboards, and microfrontends.</p>

      <div className="space-y-2">
        <Link href="/portfolio/about" className="text-cyan-400 underline block">About Me</Link>
        <Link href="/portfolio/services" className="text-cyan-400 underline block">My Services</Link>
        <Link href="/portfolio/contact" className="text-cyan-400 underline block">Contact</Link>
      </div>
    </main>
  )
}
