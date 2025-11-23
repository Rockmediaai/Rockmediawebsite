import React from 'react'

export default function MainHeading() {
  return (
    <section className="section bg-dark-900">
      <div className="container-section">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Everything You Need to{' '}
            <span className="text-golden-500">Dominate Social Media</span>
          </h1>
          <p className="text-xl lg:text-2xl text-dark-200 leading-relaxed">
            From content creation to analytics, we handle it all so you can focus on
            running your business.
          </p>
        </div>
      </div>
    </section>
  )
}