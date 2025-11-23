import React from 'react'
import ContactFormSection from './ContactFormSection'

export default function CaseStudiesPage() {
  const businessSizes = [
    {
      title: "Small Businesses",
      subtitle: "Local Heroes, Global Reach",
      description: "Transform neighborhood brands into community powerhouses with authentic engagement and targeted local growth.",
      metrics: ["Average 400% follower growth", "85% increase in foot traffic", "200% boost in local engagement"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Mid-Scale Companies",
      subtitle: "Scaling Smart, Growing Fast",
      description: "Accelerate growth with data-driven strategies that turn followers into customers and customers into advocates.",
      metrics: ["600% increase in qualified leads", "150% revenue growth from social", "50% reduction in customer acquisition cost"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Enterprise & Large Brands",
      subtitle: "Industry Leaders, Market Dominators",
      description: "Command your market with sophisticated campaigns that build authority, drive conversions, and dominate competitive landscapes.",
      metrics: ["2M+ monthly reach increase", "300% improvement in brand sentiment", "40% growth in market share"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ]

  const caseStudies = [
    {
      client: "Local Coffee Roastery",
      industry: "Food & Beverage",
      size: "Small Business",
      challenge: "Zero online presence, struggling against chain competitors",
      solution: "Hyper-local content strategy + AI-optimized posting schedule",
      results: [
        "450% increase in followers in 6 months",
        "Daily foot traffic up 60%",
        "$50K additional monthly revenue",
        "Became #1 rated coffee shop in city"
      ],
      bgColor: "from-orange-500/20 to-yellow-500/20",
      accentColor: "text-orange-400"
    },
    {
      client: "B2B SaaS Startup",
      industry: "Technology",
      size: "Mid-Scale",
      challenge: "High customer acquisition costs, low brand awareness",
      solution: "LinkedIn thought leadership + AI content personalization",
      results: [
        "800% increase in qualified leads",
        "65% reduction in cost per acquisition",
        "$2M in pipeline generated",
        "Industry thought leader status achieved"
      ],
      bgColor: "from-blue-500/20 to-purple-500/20",
      accentColor: "text-blue-400"
    },
    {
      client: "Fashion Retail Chain",
      industry: "Retail & E-commerce",
      size: "Enterprise",
      challenge: "Declining sales, losing to online competitors",
      solution: "Omnichannel social commerce + AI trend prediction",
      results: [
        "300% increase in social commerce sales",
        "2.5M monthly reach across platforms",
        "150% growth in customer lifetime value",
        "Market leadership in key demographics"
      ],
      bgColor: "from-pink-500/20 to-rose-500/20",
      accentColor: "text-pink-400"
    }
  ]

  const solutions = [
    {
      title: "AI-Powered Content Creation",
      description: "Our proprietary AI analyzes your audience, competitors, and trending topics to create content that stops the scroll and drives engagement.",
      features: ["Trend prediction algorithms", "Audience behavior analysis", "Automated A/B testing", "Performance optimization"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Human Strategy & Oversight",
      description: "Senior strategists combine AI insights with human creativity and intuition to craft campaigns that resonate emotionally with your audience.",
      features: ["Expert strategy development", "Creative campaign concepts", "Brand voice development", "Crisis management"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      title: "Real-Time Performance Optimization",
      description: "Continuous monitoring and optimization ensure your campaigns always perform at peak efficiency, adapting to audience behavior in real-time.",
      features: ["24/7 performance monitoring", "Dynamic budget allocation", "Instant optimization alerts", "Predictive scaling"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-dark-900 to-dark-800 pt-24">
        <div className="container-section">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-golden-500/20 text-golden-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Proven Results
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Real Clients. Real Growth. <span className="text-golden-500">Real Results.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-dark-200 leading-relaxed mb-8">
              See how RockMedia AI transforms businesses of every size with the perfect blend of cutting-edge AI technology and human expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="btn-primary px-8 py-4 text-lg font-semibold">
                Start Your Success Story →
              </a>
              <a href="/" className="border-2 border-golden-500 text-golden-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-golden-500 hover:text-dark-900 transition-all duration-300">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Size Sections */}
      <section className="section">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Every Business Size. <span className="text-golden-500">Every Growth Stage.</span>
            </h2>
            <p className="text-xl text-dark-200">
              Tailored strategies that scale with your business, from startup to enterprise.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {businessSizes.map((size, index) => (
              <div key={index} className="feature-card text-center">
                <div className="w-16 h-16 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-golden-500">
                  {size.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{size.title}</h3>
                <p className="text-golden-400 font-semibold mb-4">{size.subtitle}</p>
                <p className="text-dark-200 mb-6">{size.description}</p>
                <ul className="space-y-2">
                  {size.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-golden-500 rounded-full"></div>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-dark-800">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Success Stories That <span className="text-golden-500">Speak Volumes</span>
            </h2>
            <p className="text-xl text-dark-200">
              Real transformations from real businesses across industries.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className={`bg-gradient-to-br ${study.bgColor} rounded-2xl p-8 border border-dark-600`}>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                  <div className="flex gap-2 text-sm">
                    <span className="bg-dark-700 px-2 py-1 rounded text-dark-300">{study.industry}</span>
                    <span className="bg-dark-700 px-2 py-1 rounded text-dark-300">{study.size}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-dark-100">Challenge:</h4>
                  <p className="text-dark-200 text-sm mb-4">{study.challenge}</p>
                  
                  <h4 className="font-semibold mb-2 text-dark-100">Solution:</h4>
                  <p className="text-dark-200 text-sm mb-4">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-golden-500">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-golden-500 rounded-full mt-2"></div>
                        <span className="text-white">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI + Human Approach */}
      <section className="section">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              The <span className="text-golden-500">Perfect Balance</span>
            </h2>
            <p className="text-xl text-dark-200 max-w-3xl mx-auto">
              Where cutting-edge AI technology meets human creativity and strategic thinking. 
              The result? Campaigns that are both data-driven and emotionally resonant.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="feature-card">
                <div className="w-12 h-12 bg-golden-500/20 rounded-lg flex items-center justify-center mb-6 text-golden-500">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                <p className="text-dark-200 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-golden-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-dark-800">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Write Your <span className="text-golden-500">Success Story?</span>
            </h2>
            <p className="text-xl text-dark-200 mb-12">
              Join the businesses that chose to dominate their markets with RockMedia AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary px-8 py-4 text-lg font-semibold">
                Get Your Free Strategy Call →
              </a>
              <a href="/" className="border-2 border-dark-600 text-dark-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-golden-500 hover:text-golden-500 transition-all duration-300">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />
    </div>
  )
}