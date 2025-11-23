import React from 'react'
import ContactFormSection from './ContactFormSection'

export default function SuccessStoriesPage() {
  const successStories = [
    {
      clientName: "Sarah Martinez",
      company: "Bella's Boutique",
      industry: "Local Retail",
      size: "Small Business",
      location: "Austin, TX",
      beforeImage: "📉",
      afterImage: "📈",
      struggle: "I was posting randomly, spending hours creating content that got zero engagement. My follower count was stuck at 200 for months. I was ready to give up on social media entirely.",
      transformation: "Within 3 months, RockMedia AI grew my Instagram to 15K followers. More importantly, I'm now making $8K extra monthly revenue directly from social media. The stress is completely gone!",
      results: [
        "15K new followers in 3 months",
        "$8K monthly revenue increase", 
        "95% less time spent on social media",
        "Became the #1 boutique in Austin"
      ],
      testimonial: "I couldn't believe the results. RockMedia AI is the only company I trust with my business now. They respond instantly, make everything easy, and actually deliver on their promises.",
      avatar: "👩‍💼"
    },
    {
      clientName: "Marcus Johnson",
      company: "TechFlow Solutions",
      industry: "B2B Software",
      size: "Mid-Scale Company",
      location: "Denver, CO",
      beforeImage: "😰",
      afterImage: "🚀",
      struggle: "We were burning $5K monthly on ads with terrible results. Our LinkedIn had 50 followers after 2 years. Our sales team couldn't get quality leads. I was stressed and losing hope.",
      transformation: "RockMedia AI turned everything around. Our LinkedIn exploded to 25K followers, we're generating 200+ qualified leads monthly, and our cost per lead dropped 80%.",
      results: [
        "25K LinkedIn followers gained",
        "200+ qualified leads monthly",
        "80% reduction in cost per lead",
        "$150K new business pipeline"
      ],
      testimonial: "The speed of results was unbelievable. Fast response times, personal attention, and stress-free process. They're the only team that gets B2B social media right.",
      avatar: "👨‍💼"
    },
    {
      clientName: "Jennifer Chen",
      company: "Glow Beauty Empire",
      industry: "E-commerce Beauty",
      size: "Large Brand",
      location: "Los Angeles, CA",
      beforeImage: "😔",
      afterImage: "👑",
      struggle: "Despite having a great product, our social media was flat. Competitors were crushing us online. Our previous agency overpromised and underdelivered. Trust was broken.",
      transformation: "RockMedia AI rebuilt our entire social presence. We went viral multiple times, gained 500K followers across platforms, and our online sales tripled. The ROI is incredible.",
      results: [
        "500K followers gained",
        "300% increase in online sales",
        "15 viral posts in 6 months",
        "Market leader in our category"
      ],
      testimonial: "After being burned by other agencies, I was skeptical. But RockMedia AI's personal approach, fast results, and genuine care won me over. They're partners, not just vendors.",
      avatar: "👩‍🎨"
    },
    {
      clientName: "David Rodriguez",
      company: "Fit Life Gym",
      industry: "Fitness & Wellness",
      size: "Small Business",
      location: "Miami, FL",
      beforeImage: "😓",
      afterImage: "💪",
      struggle: "Our gym was empty even though we had great equipment and trainers. I was posting workout videos that got 3 likes. We were competing against big chains and losing badly.",
      transformation: "RockMedia AI made us the most talked-about gym in Miami! Our membership doubled, we have a 6-month waiting list, and people drive 45 minutes just to train with us.",
      results: [
        "200% membership increase",
        "6-month waiting list created",
        "50K TikTok followers gained",
        "Featured in Miami health magazines"
      ],
      testimonial: "I was drowning in competition until RockMedia AI threw me a lifeline. Their response time is insane, they make everything so easy, and they actually care about my success.",
      avatar: "🏋️‍♂️"
    },
    {
      clientName: "Lisa Wang",
      company: "Quantum Analytics",
      industry: "Data Science",
      size: "Mid-Scale Company",
      location: "San Francisco, CA",
      beforeImage: "🤯",
      afterImage: "🧠",
      struggle: "Nobody understood our complex data solutions. We had brilliant technology but couldn't explain it simply. Our LinkedIn posts got ignored, and sales meetings were painful.",
      transformation: "RockMedia AI turned our complex tech into compelling stories. We're now seen as thought leaders, our LinkedIn engagement is through the roof, and clients are coming to us.",
      results: [
        "2000% LinkedIn engagement increase",
        "75 new enterprise clients",
        "Speaking at 12 industry conferences",
        "$500K in new contracts monthly"
      ],
      testimonial: "They made the impossible possible - explaining data science in ways people actually want to read. Fast, personal, stress-free. I trust them completely.",
      avatar: "👩‍💻"
    },
    {
      clientName: "Antonio Silva",
      company: "Silva's Authentic Italian",
      industry: "Restaurant",
      size: "Small Business", 
      location: "Boston, MA",
      beforeImage: "🥺",
      afterImage: "🍝",
      struggle: "Tourists never found us, locals didn't know we existed. I was posting blurry food photos that looked terrible. After 15 years, I thought about closing down.",
      transformation: "Now there's a line around the block! RockMedia AI showcased our authentic recipes and family story. We're booked solid and expanding to a second location.",
      results: [
        "300% increase in reservations",
        "Featured in Boston food blogs",
        "Opening second location",
        "Michelin Guide recognition"
      ],
      testimonial: "These people saved my family business. They work like family - quick responses, personal care, and they deliver exactly what they promise. Incredible!",
      avatar: "👨‍🍳"
    },
    {
      clientName: "Rachel Thompson",
      company: "Modern Minds Therapy",
      industry: "Mental Health",
      size: "Small Business",
      location: "Portland, OR",
      beforeImage: "😞",
      afterImage: "🌟",
      struggle: "People needed help but couldn't find me online. I felt like I was shouting into the void. Other therapists were getting all the clients while I struggled to fill my calendar.",
      transformation: "RockMedia AI helped me reach people who really need therapy. My practice is fully booked with a healthy waiting list, and I'm making a real difference in my community.",
      results: [
        "100% practice capacity reached",
        "3-month waiting list",
        "500% website traffic increase", 
        "Mental health advocacy partnerships"
      ],
      testimonial: "They understood the sensitive nature of my work immediately. Professional, caring, lightning-fast responses. I trust them with my practice's reputation completely.",
      avatar: "👩‍⚕️"
    },
    {
      clientName: "James Mitchell",
      company: "EcoTech Innovations",
      industry: "Clean Technology",
      size: "Mid-Scale Company",
      location: "Seattle, WA",
      beforeImage: "🌱",
      afterImage: "🌍",
      struggle: "We had revolutionary green tech but investors weren't paying attention. Our social media looked boring and corporate. We were losing funding opportunities to flashier startups.",
      transformation: "RockMedia AI positioned us as the leaders in sustainable innovation. We raised $15M in Series B funding and have partnerships with major corporations lined up.",
      results: [
        "$15M Series B funding raised",
        "500K LinkedIn followers",
        "10 major corporate partnerships",
        "TED Talk opportunities"
      ],
      testimonial: "They turned our complex technology into compelling stories that investors actually understood. Personal attention, fast execution, zero stress. Best decision we ever made.",
      avatar: "🌿"
    },
    {
      clientName: "Maria Gonzalez",
      company: "Luxe Wedding Planning",
      industry: "Event Planning",
      size: "Small Business",
      location: "Napa Valley, CA",
      beforeImage: "💔",
      afterImage: "💕",
      struggle: "Brides weren't finding me despite years of experience. My Instagram looked amateur compared to competitors. I was about to quit the wedding industry entirely.",
      transformation: "Now I'm the most sought-after wedding planner in Napa Valley! My Instagram is stunning, I'm booked 18 months out, and I've tripled my pricing.",
      results: [
        "18-month booking calendar", 
        "300% pricing increase",
        "100K Instagram followers",
        "Featured in Martha Stewart Weddings"
      ],
      testimonial: "They made my work look like art. Every interaction is personal and professional. They respond instantly and deliver miracles. I'm a client for life!",
      avatar: "👰‍♀️"
    },
    {
      clientName: "Kevin Park",
      company: "NextGen Legal",
      industry: "Legal Services", 
      size: "Mid-Scale Company",
      location: "Chicago, IL",
      beforeImage: "⚖️",
      afterImage: "🏛️",
      struggle: "Legal marketing felt slimy and we avoided it. Our firm was invisible online while competitors dominated search results. We were losing cases to inferior lawyers with better marketing.",
      transformation: "RockMedia AI helped us market with integrity and class. We're now the go-to firm for complex cases, our reputation is stellar, and referrals are pouring in.",
      results: [
        "400% case referral increase",
        "Top-rated legal firm online",
        "Featured in legal publications",
        "$2M additional revenue annually"
      ],
      testimonial: "They made legal marketing feel ethical and professional. Quick responses, personal touch, and they understand our industry perfectly. Complete trust earned.",
      avatar: "👨‍💼"
    },
    {
      clientName: "Sophie Laurent",
      company: "Artisan Skincare Co.",
      industry: "Beauty & Cosmetics",
      size: "Small Business",
      location: "Charleston, SC",
      beforeImage: "🧴",
      afterImage: "✨",
      struggle: "My handmade skincare products were amazing but nobody knew about them. Big brands were crushing me online. I was making products in my kitchen and selling almost nothing.",
      transformation: "RockMedia AI told my artisan story beautifully. I went from kitchen production to a full facility, 50K loyal customers, and Sephora wants to carry my products!",
      results: [
        "50K loyal customers gained",
        "Sephora partnership offer",
        "1000% revenue increase",
        "Expanded to full production facility"
      ],
      testimonial: "They saw my vision when I could barely explain it myself. Every message gets answered immediately, they make everything stress-free, and their results are unbelievable.",
      avatar: "🧴"
    },
    {
      clientName: "Robert Chen",
      company: "Summit Financial Advisory",
      industry: "Financial Services",
      size: "Mid-Scale Company", 
      location: "Dallas, TX",
      beforeImage: "📉",
      afterImage: "📈",
      struggle: "Younger clients didn't trust us because we looked outdated online. Our social media was corporate and boring. We were losing market share to fintech startups daily.",
      transformation: "RockMedia AI modernized our entire digital presence. We're attracting millennials and Gen Z, our AUM grew 250%, and we're seen as the innovative financial firm.",
      results: [
        "250% assets under management growth",
        "5000 new millennial clients",
        "Financial industry awards won",
        "Featured in Forbes and WSJ"
      ],
      testimonial: "They bridged the gap between traditional finance and modern marketing perfectly. Personal service, instant responses, and they deliver every single promise. Phenomenal!",
      avatar: "💼"
    },
    {
      clientName: "Isabella Rodriguez",
      company: "Green Thumb Gardens",
      industry: "Landscaping",
      size: "Small Business",
      location: "Phoenix, AZ",
      beforeImage: "🌵",
      afterImage: "🌺",
      struggle: "Homeowners didn't understand sustainable landscaping. I was competing on price alone and barely breaking even. My beautiful work wasn't being seen by the right people.",
      transformation: "RockMedia AI positioned me as the expert in sustainable desert landscaping. I'm now the premium choice, my pricing doubled, and I have a 6-month waiting list.",
      results: [
        "100% pricing increase achieved",
        "6-month project waiting list",
        "Featured in home design magazines",
        "Sustainable landscaping partnerships"
      ],
      testimonial: "They turned my passion into a premium brand. Every interaction feels personal and caring. They respond faster than anyone and always exceed expectations. Pure magic!",
      avatar: "🌱"
    },
    {
      clientName: "Ahmed Hassan",
      company: "CyberShield Security",
      industry: "Cybersecurity",
      size: "Large Company",
      location: "Austin, TX",
      beforeImage: "🛡️",
      afterImage: "🔒",
      struggle: "Companies knew they needed cybersecurity but didn't understand our solutions. We were great at technical stuff but terrible at explaining why we're different from competitors.",
      transformation: "RockMedia AI made cybersecurity understandable and urgent. We're now the trusted authority, landing Fortune 500 contracts, and growing 300% year over year.",
      results: [
        "15 Fortune 500 clients acquired",
        "300% year-over-year growth", 
        "Industry thought leader status",
        "$50M in annual contracts"
      ],
      testimonial: "They translated our complex security concepts into compelling business language. Lightning-fast communication, personal attention, and they deliver results beyond our wildest dreams.",
      avatar: "🔐"
    }
  ]

  const transformationStats = [
    {
      metric: "Average Growth",
      value: "900%",
      description: "follower increase in first 6 months",
      icon: "📈"
    },
    {
      metric: "Response Time",
      value: "< 2 Hours",
      description: "average response to client messages",
      icon: "⚡"
    },
    {
      metric: "Revenue Impact",
      value: "$2.3M+",
      description: "additional revenue generated for clients",
      icon: "💰"
    },
    {
      metric: "Client Satisfaction",
      value: "100%",
      description: "of clients would recommend us",
      icon: "❤️"
    }
  ]

  const clientJourney = [
    {
      stage: "Before RockMedia AI",
      title: "Struggling & Stressed",
      description: "Wasting time and money on social media with zero results. Frustrated with broken promises from other agencies.",
      emoji: "😩",
      color: "text-red-400"
    },
    {
      stage: "Choosing Us",
      title: "Skeptical but Hopeful",
      description: "Hesitant to trust another agency, but attracted to our personal approach and fast response times.",
      emoji: "🤔",
      color: "text-yellow-400"
    },
    {
      stage: "First 30 Days",
      title: "Early Results",
      description: "Quick wins and visible progress. Stress disappears as our team handles everything professionally.",
      emoji: "😊",
      color: "text-blue-400"
    },
    {
      stage: "3-6 Months",
      title: "Explosive Growth",
      description: "Dramatic follower growth, increased sales, and market dominance. Results exceed expectations.",
      emoji: "🚀",
      color: "text-green-400"
    },
    {
      stage: "Long-term",
      title: "Trusted Partner",
      description: "Complete trust established. RockMedia AI becomes an essential part of their business success.",
      emoji: "🏆",
      color: "text-golden-500"
    }
  ]

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-dark-900 to-dark-800 pt-24">
        <div className="container-section">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-golden-500/20 text-golden-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="text-lg">🏆</span>
              Success Stories
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              From <span className="text-red-400">Struggling</span> to <span className="text-golden-500">Success Stories</span>
            </h1>
            <p className="text-xl lg:text-2xl text-dark-200 leading-relaxed">
              Real clients. Real struggles. Real transformations. See how businesses went from stress and frustration to fast results and complete trust with RockMedia AI.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Stats */}
      <section className="section">
        <div className="container-section">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-golden-500 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.metric}</div>
                <div className="text-sm text-dark-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey */}
      <section className="section bg-dark-800">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              The <span className="text-golden-500">Transformation Journey</span>
            </h2>
            <p className="text-xl text-dark-200">
              Every client follows the same path from struggle to success
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {clientJourney.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{step.emoji}</div>
                <div className="text-xs uppercase tracking-wider text-dark-400 mb-2">{step.stage}</div>
                <h3 className={`text-lg font-bold mb-3 ${step.color}`}>{step.title}</h3>
                <p className="text-sm text-dark-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Real Stories from <span className="text-golden-500">Real Clients</span>
            </h2>
            <p className="text-xl text-dark-200">
              Small, medium, and large businesses that chose RockMedia AI and transformed their results
            </p>
          </div>
          
          <div className="space-y-16">
            {successStories.map((story, index) => (
              <div key={index} className="bg-dark-800 rounded-2xl p-8 border border-dark-600">
                {/* Client Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="flex items-center gap-4 mb-4 lg:mb-0">
                    <div className="text-4xl">{story.avatar}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{story.clientName}</h3>
                      <p className="text-golden-500 font-semibold">{story.company}</p>
                      <div className="flex gap-2 mt-1">
                        <span className="bg-dark-700 text-dark-300 px-2 py-1 rounded text-xs">{story.industry}</span>
                        <span className="bg-dark-700 text-dark-300 px-2 py-1 rounded text-xs">{story.size}</span>
                        <span className="bg-dark-700 text-dark-300 px-2 py-1 rounded text-xs">{story.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl mb-1">{story.beforeImage}</div>
                      <div className="text-xs text-dark-400">BEFORE</div>
                    </div>
                    <div className="text-golden-500 text-2xl">→</div>
                    <div className="text-center">
                      <div className="text-3xl mb-1">{story.afterImage}</div>
                      <div className="text-xs text-dark-400">AFTER</div>
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left: Struggle & Transformation */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                        😔 The Struggle
                      </h4>
                      <p className="text-dark-200 italic">"{story.struggle}"</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                        🚀 The Transformation
                      </h4>
                      <p className="text-dark-200 italic">"{story.transformation}"</p>
                    </div>
                  </div>

                  {/* Right: Results & Testimonial */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-golden-500 mb-3">Results Achieved:</h4>
                      <ul className="space-y-2">
                        {story.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-golden-500 rounded-full"></div>
                            <span className="text-white font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-dark-900 rounded-lg p-4 border-l-4 border-golden-500">
                      <p className="text-dark-100 italic mb-2">"{story.testimonial}"</p>
                      <p className="text-golden-500 font-semibold">— {story.clientName}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="section bg-dark-800">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Why They <span className="text-golden-500">Choose RockMedia AI</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-900 rounded-lg p-6 border border-dark-600">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-xl font-semibold mb-2 text-golden-500">Fast Response</h3>
                <p className="text-dark-200">Under 2-hour response time. Your questions never go unanswered.</p>
              </div>
              
              <div className="bg-dark-900 rounded-lg p-6 border border-dark-600">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-xl font-semibold mb-2 text-golden-500">Easy to Work With</h3>
                <p className="text-dark-200">No complicated processes. Simple, clear communication every step.</p>
              </div>
              
              <div className="bg-dark-900 rounded-lg p-6 border border-dark-600">
                <div className="text-3xl mb-3">💖</div>
                <h3 className="text-xl font-semibold mb-2 text-golden-500">Personal Touch</h3>
                <p className="text-dark-200">You're not a number. Dedicated account manager who knows your business.</p>
              </div>
              
              <div className="bg-dark-900 rounded-lg p-6 border border-dark-600">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold mb-2 text-golden-500">Deliver Promises</h3>
                <p className="text-dark-200">We say what we'll do and do what we say. No broken promises.</p>
              </div>
              
              <div className="bg-dark-900 rounded-lg p-6 border border-dark-600">
                <div className="text-3xl mb-3">😌</div>
                <h3 className="text-xl font-semibold mb-2 text-golden-500">Stress-Free</h3>
                <p className="text-dark-200">We handle everything so you can focus on running your business.</p>
              </div>
              
              <div className="bg-dark-900 rounded-lg p-6 border border-dark-600">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="text-xl font-semibold mb-2 text-golden-500">Fast Results</h3>
                <p className="text-dark-200">Visible growth within 30 days. Dramatic results within 90 days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Write Your <span className="text-golden-500">Success Story?</span>
            </h2>
            <p className="text-xl text-dark-200 mb-12">
              Stop struggling with social media. Join our success stories and experience the fast, stress-free results that build complete trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary px-8 py-4 text-lg font-semibold">
                Get Your Free Strategy Call →
              </a>
              <a href="/about" className="border-2 border-dark-600 text-dark-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-golden-500 hover:text-golden-500 transition-all duration-300">
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