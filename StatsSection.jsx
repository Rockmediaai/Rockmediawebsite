import React from 'react'

export default function StatsSection() {
  const stats = [
    {
      icon: (
        <svg className="w-8 h-8 text-golden-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      value: "10x",
      label: "Engagement Increase"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-golden-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      value: "5x",
      label: "Follower Growth"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-golden-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      value: "Zero",
      label: "Stress Guaranteed"
    }
  ]

  return (
    <section className="section bg-dark-900">
      <div className="container-section">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="stats-card hover:border-golden-500/30 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-golden-500 mb-2">
                {stat.value}
              </div>
              <div className="text-dark-200 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}