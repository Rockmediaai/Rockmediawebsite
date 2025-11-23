import React from 'react'

const quotes = [
  {
    quote: 'We shipped faster and aligned the team around the right metrics.',
    author: 'Maya Thompson',
    role: 'VP Product, Lumina'
  },
  {
    quote: 'Finally a growth stack that is calm, intentional, and effective.',
    author: 'Jamie Lee',
    role: 'Founder, Aperture'
  },
  {
    quote: 'The playbooks turned our ideas into repeatable wins.',
    author: 'Carlos Ruiz',
    role: 'Head of Growth, Nova'
  }
]

export default function Testimonials() {
  return (
    <section className="section bg-gradient-to-b from-white to-primary-50/40">
      <div className="container-section">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Teams that found their flow</h2>
          <p className="text-gray-600 mt-3">A calmer, clearer way to prioritize, experiment, and learn.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.author} className="card">
              <blockquote className="text-ink text-lg">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-600">{q.author} · {q.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
