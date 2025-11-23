import React from 'react'

export default function CTA() {
  return (
    <section className="section">
      <div className="container-section">
        <div className="card flex flex-col items-center text-center gap-4 bg-gradient-to-br from-primary-50 to-white">
          <h3 className="text-2xl sm:text-3xl font-bold">Build momentum with calm</h3>
          <p className="text-gray-600 max-w-2xl">Use a lightweight, opinionated stack that helps you focus on what matters: learning faster and delivering value.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a className="btn btn-primary" href="#pricing">Get started</a>
            <a className="btn btn-outline" href="#features">Explore features</a>
          </div>
        </div>
      </div>
    </section>
  )
}
