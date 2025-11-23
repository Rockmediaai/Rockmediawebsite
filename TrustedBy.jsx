import React from 'react'

export default function TrustedBy() {
  const categories = [
    "Tech Startups",
    "E-Commerce Brands", 
    "Local Businesses",
    "Influencers",
    "Service Providers",
    "B2B Companies"
  ]

  return (
    <section className="section bg-dark-900">
      <div className="container-section">
        <div className="text-center mb-12">
          <p className="text-dark-300 text-sm uppercase tracking-wider mb-8">
            TRUSTED BY GROWING BUSINESSES WORLDWIDE
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-dark-400">
            {categories.map((category, index) => (
              <div key={index} className="text-lg font-medium">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}