import React from 'react'

const features = [
  {
    title: 'Insightful dashboards',
    desc: 'Bring key metrics into focus with clean, real-time views that drive action.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 6h16M4 12h10M4 18h6" strokeWidth="2" strokeLinecap="round"/></svg>
    )
  },
  {
    title: 'Experiment playbooks',
    desc: 'Run structured tests with proven templates and track learning loops.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 6v12M6 12h12" strokeWidth="2" strokeLinecap="round"/></svg>
    )
  },
  {
    title: 'Audience segmentation',
    desc: 'Target the right users at the right time with granular controls.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9" strokeWidth="2"/><path d="M12 3v6M12 12l4 8" strokeWidth="2"/></svg>
    )
  },
  {
    title: 'Guided AI suggestions',
    desc: 'Turn data into next steps with context-aware recommendations.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3l7 4v10l-7 4-7-4V7z" strokeWidth="2"/></svg>
    )
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="section">
      <div className="container-section">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Everything you need to grow</h2>
          <p className="text-gray-600 mt-3">Opinionated tools that favor action and simplicity—so your team stays in flow.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card">
              <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
