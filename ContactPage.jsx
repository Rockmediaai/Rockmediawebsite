import React, { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    message: '',
    inquiryType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Prepare form data for submission
      const submissionData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        website: formData.website,
        message: formData.message,
        inquiryType: formData.inquiryType,
        submissionDate: new Date().toLocaleString(),
        subject: `Contact Form: ${formData.inquiryType} inquiry from ${formData.firstName} ${formData.lastName}`
      }

      // Send to Formspree
      const response = await fetch('https://formspree.io/f/xeodbwqq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })

      if (response.ok) {
        // Success - redirect to thank you page
        window.location.href = '/thank-you'
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your form. Please try again or contact us directly at rockmediaai@gmail.com')
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      contact: "rockmediaai@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Schedule a Call",
      description: "Book a free strategy session",
      contact: "Available 9 AM - 6 PM EST",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Live Chat",
      description: "Quick questions? Chat with our team",
      contact: "Available during business hours",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'social-media', label: 'Social Media Services' },
    { value: 'content-creation', label: 'Content Creation' },
    { value: 'paid-advertising', label: 'Paid Advertising' },
    { value: 'analytics', label: 'Analytics & Reporting' },
    { value: 'partnership', label: 'Partnership Opportunity' }
  ]

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-dark-900 to-dark-800 pt-24">
        <div className="container-section">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-golden-500/20 text-golden-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get In Touch
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Ready to <span className="text-golden-500">Dominate</span> Your Market?
            </h1>
            <p className="text-xl lg:text-2xl text-dark-200 leading-relaxed">
              Let's discuss how RockMedia AI can transform your social media presence and drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section">
        <div className="container-section">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="feature-card text-center">
                <div className="w-16 h-16 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-golden-500">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-dark-200 mb-4">{method.description}</p>
                <p className="text-golden-500 font-semibold">{method.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section bg-dark-800">
        <div className="container-section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Send Us a <span className="text-golden-500">Message</span>
              </h2>
              <p className="text-xl text-dark-200">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="bg-dark-900 rounded-2xl p-8 border border-dark-600">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-white font-medium mb-2">
                    What can we help you with? *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full input-dark"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full input-dark"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full input-dark"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full input-dark"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full input-dark"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Business Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full input-dark"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-white font-medium mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full input-dark"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full input-dark resize-none"
                    placeholder="Describe your social media goals, current challenges, or any specific questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary px-8 py-4 text-lg font-semibold ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message →'
                    )}
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="text-center pt-4">
                  <div className="flex justify-center items-center gap-6 text-dark-300 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-golden-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      24-hour response
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-golden-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Free consultation
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-golden-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      No spam, ever
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Frequently Asked <span className="text-golden-500">Questions</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-dark-800 rounded-lg p-6 border border-dark-600">
                <h3 className="text-xl font-semibold mb-3 text-golden-500">How quickly can you start working on my account?</h3>
                <p className="text-dark-200">We can typically start within 48-72 hours after our initial strategy call and onboarding process.</p>
              </div>
              
              <div className="bg-dark-800 rounded-lg p-6 border border-dark-600">
                <h3 className="text-xl font-semibold mb-3 text-golden-500">What platforms do you work with?</h3>
                <p className="text-dark-200">We manage all major social platforms: Instagram, Facebook, TikTok, LinkedIn, YouTube, Twitter, and Pinterest.</p>
              </div>
              
              <div className="bg-dark-800 rounded-lg p-6 border border-dark-600">
                <h3 className="text-xl font-semibold mb-3 text-golden-500">Do you work with businesses in my industry?</h3>
                <p className="text-dark-200">We work with businesses across all industries - from local service providers to e-commerce brands to B2B companies.</p>
              </div>
              
              <div className="bg-dark-800 rounded-lg p-6 border border-dark-600">
                <h3 className="text-xl font-semibold mb-3 text-golden-500">What makes RockMedia AI different?</h3>
                <p className="text-dark-200">We combine human creativity with AI precision to deliver 10x engagement and 5x growth while eliminating the stress of managing social media yourself.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-dark-800">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get <span className="text-golden-500">Started?</span>
            </h2>
            <p className="text-xl text-dark-200 mb-8">
              Don't wait. Your competitors are already growing. Let's make sure you're ahead of them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="btn-primary px-8 py-4 text-lg font-semibold">
                Get Your Free Strategy Call →
              </a>
              <a href="/success-stories" className="border-2 border-dark-600 text-dark-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-golden-500 hover:text-golden-500 transition-all duration-300">
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}