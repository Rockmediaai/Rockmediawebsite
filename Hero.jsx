import React from 'react'

export default function Hero() {
  return (
    <header className="section bg-gradient-to-b from-primary-50 to-white">
      <div className="container-section">
        <div className="flex flex-col items-center text-center gap-8">
          <span className="badge"><span className="w-2 h-2 rounded-full bg-primary-500" /> New: AI playbooks for growth</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-ink max-w-3xl">
            Accelerate your product growth with clarity and calm
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
            A focused toolkit to validate, iterate, and scale with confidence. Crafted for startups and product teams.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#pricing" className="btn btn-primary">Start free</a>
            <a href="#features" className="btn btn-outline">See how it works</a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
            {['Acme', 'Nova', 'Lumina', 'Aperture'].map((brand) => (
              <div key={brand} className="text-gray-500 text-sm">{brand}</div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
