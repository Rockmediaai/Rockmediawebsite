import React from 'react'
import ContactFormSection from './ContactFormSection'

export default function CareersPage() {
  const openPositions = [
    {
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Lead social media strategy and execution for our growing client base. Experience with AI tools preferred.",
      requirements: [
        "3+ years social media management experience",
        "Proven track record of growing social media accounts",
        "Experience with social media analytics and reporting",
        "Knowledge of AI tools and automation",
        "Excellent written communication skills"
      ]
    },
    {
      title: "Content Creator",
      department: "Creative",
      location: "Remote",
      type: "Full-time", 
      description: "Create engaging visual and video content for multiple social platforms using cutting-edge AI tools.",
      requirements: [
        "Portfolio of social media content creation",
        "Proficiency in design tools (Adobe Creative Suite, Canva)",
        "Video editing skills (Premiere Pro, After Effects)",
        "Understanding of platform-specific content requirements",
        "Creative mindset with attention to trends"
      ]
    },
    {
      title: "Growth Strategist",
      department: "Strategy",
      location: "Remote",
      type: "Full-time",
      description: "Develop and implement data-driven growth strategies for clients across various industries.",
      requirements: [
        "5+ years in digital marketing or growth roles",
        "Strong analytical and data interpretation skills",
        "Experience with social media advertising platforms",
        "Knowledge of marketing automation tools",
        "Proven results in scaling social media accounts"
      ]
    }
  ]

  const benefits = [
    {
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with flexible hours",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9a9 9 0 009-9m-9 9c0 5-4 9-9 9s-9-4-9-9m9 0c0-5 4-9 9-9s9 4 9 9" />
        </svg>
      )
    },
    {
      title: "Competitive Compensation",
      description: "Above-market salaries plus performance bonuses",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive wellness stipend for your health and fitness",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Professional Development",
      description: "Annual learning budget for courses and conferences",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Cutting-Edge Tools",
      description: "Access to the latest AI and social media tools",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Equity Options",
      description: "Ownership stake in a rapidly growing company",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
              Join Our Team
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Build the Future of <span className="text-golden-500">Social Media</span>
            </h1>
            <p className="text-xl lg:text-2xl text-dark-200 leading-relaxed">
              Join RockMedia AI and help businesses around the world dominate their markets with cutting-edge AI technology and human creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Work With <span className="text-golden-500">RockMedia AI</span>
            </h2>
            <p className="text-xl text-dark-200 max-w-3xl mx-auto">
              We're building the best social media agency in the world. Join us and be part of something revolutionary.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="feature-card text-center">
                <div className="w-12 h-12 bg-golden-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-golden-500">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-dark-200">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section bg-dark-800">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Open <span className="text-golden-500">Positions</span>
            </h2>
            <p className="text-xl text-dark-200">
              Ready to make an impact? Check out our current openings.
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-dark-900 rounded-2xl p-8 border border-dark-600">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-golden-500/20 text-golden-500 px-3 py-1 rounded-full text-sm">
                        {position.department}
                      </span>
                      <span className="bg-dark-700 text-dark-300 px-3 py-1 rounded-full text-sm">
                        {position.location}
                      </span>
                      <span className="bg-dark-700 text-dark-300 px-3 py-1 rounded-full text-sm">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`/apply?position=${encodeURIComponent(position.title)}`}
                    className="mt-4 lg:mt-0 btn-primary px-6 py-3 text-center"
                  >
                    Apply Now →
                  </a>
                </div>
                
                <p className="text-dark-200 mb-6">{position.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-3 text-white">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-golden-500 rounded-full mt-2"></div>
                        <span className="text-dark-200">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-dark-200 mb-4">Don't see a perfect fit?</p>
            <a href="/apply?position=General Application" className="btn btn-outline text-golden-500 border-golden-500 hover:bg-golden-500 hover:text-dark-900 px-6 py-3 rounded-lg">
              Send Us Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Our <span className="text-golden-500">Culture</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-golden-500">Innovation First</h3>
                <p className="text-dark-200">We're always pushing the boundaries of what's possible with AI and social media.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-golden-500">Results Driven</h3>
                <p className="text-dark-200">Every decision we make is focused on delivering measurable results for our clients.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-golden-500">Team Success</h3>
                <p className="text-dark-200">We win together. Your success is our success, and we invest in your growth.</p>
              </div>
            </div>

            <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600">
              <h3 className="text-2xl font-bold mb-4 text-golden-500">Ready to Join Us?</h3>
              <p className="text-lg text-dark-200 mb-6">
                Be part of the team that's revolutionizing social media marketing. Apply today and let's build something incredible together.
              </p>
              <a href="/apply" className="btn-primary px-8 py-4 text-lg font-semibold">
                Start Your Application →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form for Applications */}
      <div id="contact">
        <ContactFormSection />
      </div>
    </div>
  )
}