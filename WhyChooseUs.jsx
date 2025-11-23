import React from 'react'

export default function WhyChooseUs() {
  const features = [
    "Results-driven approach with measurable KPIs",
    "Dedicated account manager for personalized support",
    "AI-powered content optimization", 
    "Transparent monthly reporting",
    "Flexible packages for all business sizes",
    "30-day money-back guarantee"
  ]

  const stats = [
    { value: "500+", label: "Successful Campaigns" },
    { value: "250M+", label: "Impressions Generated" },
    { value: "98%", label: "Client Satisfaction" }
  ]

  return (
    <section className="section bg-dark-900">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Businesses Choose{' '}
              <span className="text-golden-500">RockMedia AI</span>
            </h2>
            
            <p className="text-xl text-dark-200 mb-8 leading-relaxed">
              We're not just another social media agency. We're your growth 
              partner, committed to delivering tangible results that move the needle 
              for your business.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-golden-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-dark-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Stats */}
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600">
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
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
        </div>
      </div>
    </section>
  )
}