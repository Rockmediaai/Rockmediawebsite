import React from 'react'
import ContactFormSection from './ContactFormSection'

export default function AboutPage() {
  const whyChooseUsFeatures = [
    {
      title: "Content Creation & Strategy",
      description: "Scroll-stopping posts, Reels, carousels, and stories designed to convert",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        </svg>
      )
    },
    {
      title: "High-Converting Copywriting",
      description: "Captions and scripts that speak directly to your ideal customer",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      title: "Profit-Driven Ad Campaigns",
      description: "Facebook, Instagram, TikTok, LinkedIn, YouTube — we manage it all",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      title: "Real-Time Performance Tracking & Analytics",
      description: "Transparent dashboards so you always know what's working",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Audience Engagement & Community Building",
      description: "We reply, nurture, and turn followers into loyal fans",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: "Deal-Closing Support",
      description: "DM strategies and client communication systems that close sales on autopilot",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ]

  const stats = [
    { number: "75%", label: "of consumer searches now happen on social media" },
    { number: "71%", label: "of small-to-medium businesses already rely on social media marketing" },
    { number: "80%", label: "of companies are projected to spend half their marketing budget on social platforms by 2027" },
    { number: "600,000", label: "new businesses will launch in the U.S. in 2025 alone — every single one needing visibility to survive" }
  ]

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-dark-900 to-dark-800 pt-24">
        <div className="container-section">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Logo Section */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="w-32 h-32 lg:w-40 lg:h-40">
                <img src="/rm-logo.svg" alt="RockMedia AI" className="w-full h-full" />
              </div>
            </div>
            
            {/* Content Section */}
            <div className="lg:col-span-9 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-golden-500/20 text-golden-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                About RockMediaAI
              </div>
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                <span className="text-golden-500">Human creativity.</span> AI precision. <span className="text-golden-500">Real results.</span>
              </h1>
              <p className="text-lg lg:text-xl xl:text-2xl text-dark-200 leading-relaxed">
                We're not just another agency — we're the best social media agency out there and growing to be the best in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="section">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
                We're a team of seasoned social media experts who combine genuine <span className="text-golden-500">human touch</span> with the most powerful AI tools available today.
              </h2>
              <div className="space-y-6 text-lg text-dark-200 leading-relaxed">
                <p>
                  At RockMedia AI, we have a team that works hard on your business because <strong className="text-white">you are a representation of us</strong>. The result? Faster growth, higher engagement, and measurable revenue — without you ever having to lift a finger.
                </p>
                <p>
                  We've spent years mastering every major platform, testing thousands of campaigns, and turning complex data into simple, profitable strategies. Now we've paired that experience with cutting-edge AI so you get the perfect blend: the creativity and empathy only humans can bring, and the speed, scale, and precision only AI can deliver.
                </p>
              </div>
            </div>
            
            <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-golden-500 mb-2">10x</div>
                  <div className="text-dark-200">Engagement Increase</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-golden-500 mb-2">5x</div>
                  <div className="text-dark-200">Growth Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-golden-500 mb-2">500+</div>
                  <div className="text-dark-200">Successful Campaigns</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-golden-500 mb-2">98%</div>
                  <div className="text-dark-200">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="section bg-dark-800">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why businesses <span className="text-golden-500">choose us</span>
            </h2>
            <p className="text-xl text-dark-200">
              Complete social media domination with measurable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
              <div key={index} className="bg-dark-900 rounded-2xl p-6 border border-dark-600 hover:border-golden-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-golden-500/20 rounded-lg flex items-center justify-center mb-4 text-golden-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-dark-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Numbers Don't Lie */}
      <section className="section">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              The numbers <span className="text-golden-500">don't lie</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-golden-500 mb-3">{stat.number}</div>
                <p className="text-lg text-dark-200">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl lg:text-3xl font-bold text-white">
              In a world this noisy, standing out isn't optional. <span className="text-golden-500">It's survival.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section bg-dark-800">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Our mission is <span className="text-golden-500">simple</span>
            </h2>
            
            <div className="space-y-6 text-xl text-dark-200 leading-relaxed mb-12">
              <p>
                We started RockMediaAI because we saw too many passionate founders drowning in content calendars, ad managers, and endless revisions — while their competitors pulled ahead.
              </p>
              <p>
                We decided to take that burden off your shoulders and turn it into your biggest advantage.
              </p>
              <p className="text-white font-semibold text-2xl">
                You focus on running your business.
              </p>
              <p className="text-golden-500 font-semibold text-2xl">
                We'll handle the rest — and deliver the growth you deserve.
              </p>
            </div>

            <div className="bg-dark-900 rounded-2xl p-8 border border-dark-600 mb-12">
              <h3 className="text-2xl font-bold text-golden-500 mb-4">Ready to finally get the results your business needs without the stress?</h3>
              <p className="text-lg text-dark-200 mb-6">
                Click "Get Started" and let's turn your social media into a revenue machine — together.
              </p>
              <a href="#contact" className="btn-primary px-8 py-4 text-lg font-semibold">
                Get Started Free →
              </a>
            </div>

            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-white">
                <span className="text-golden-500">RockMediaAI</span> — Where human heart meets AI horsepower.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />
    </div>
  )
}