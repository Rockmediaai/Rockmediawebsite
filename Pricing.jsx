import React from 'react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    features: [
      'Up to 3 projects',
      'Experiment templates',
      'Basic dashboards',
      'Community support'
    ]
  },
  {
    name: 'Growth',
    price: '$29',
    period: 'per month',
    highlighted: true,
    features: [
      'Unlimited projects',
      'Advanced segments',
      'AI suggestions',
      'Priority support'
    ]
  },
  {
    name: 'Scale',
    price: '$99',
    period: 'per month',
    features: [
      'Everything in Growth',
      'SAML SSO',
      'Custom roles',
      'Dedicated success manager'
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container-section">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Simple pricing</h2>
          <p className="text-gray-600 mt-3">Start free. Upgrade when you need more power for your team.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`card flex flex-col ${t.highlighted ? 'border-primary-200 ring-1 ring-primary-100' : ''}`}>
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-extrabold text-ink">{t.price} <span className="text-base text-gray-500 font-medium">{t.period}</span></div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#" className={`btn w-full ${t.highlighted ? 'btn-primary' : 'btn-outline'}`}>Choose {t.name}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
