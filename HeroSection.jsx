import React from 'react'

export default function HeroSection() {
  return (
    <section className="section bg-dark-900 pt-24 pb-16">
      <div className="container-section">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <img src="/rm-logo.svg" alt="RockMedia AI" className="w-24 h-24" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-golden-500">10x Engagement.</span>
            <br />
            <span className="text-golden-500">5x Growth.</span>
            <br />
            <span className="text-white">Zero Stress.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-dark-200 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
            We help businesses, influencers, and new ventures expand and 
            grow with proven social media strategies that deliver real results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="btn-primary px-8 py-4 text-lg font-semibold inline-block text-center"
            >
              Get Your Free Strategy Call →
            </a>
            <a href="/case-studies" className="border-2 border-golden-500 text-golden-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-golden-500 hover:text-dark-900 transition-all duration-300 inline-block">
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}