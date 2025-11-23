import React, { useState } from 'react'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    currentFollowers: '',
    socialPlatforms: '',
    currentChallenges: ''
  })
  const [contactMethod, setContactMethod] = useState('email')
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
        email: contactMethod === 'email' ? formData.email : '',
        phone: contactMethod === 'phone' ? formData.phone : '',
        contactMethod: contactMethod,
        companyName: formData.companyName || 'Not provided',
        currentFollowers: formData.currentFollowers || 'Not provided',
        socialPlatforms: formData.socialPlatforms || 'Not provided',
        currentChallenges: formData.currentChallenges || 'Not provided',
        submissionDate: new Date().toLocaleString(),
        subject: `New Strategy Call Request from ${formData.firstName} ${formData.lastName}`
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

  return (
    <section id="contact" className="section bg-dark-900 py-20">
      <div className="container-section">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-golden-500/20 text-golden-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Free Strategy Call
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to <span className="text-golden-500">10x Your Results?</span>
            </h2>
            <p className="text-dark-200 text-lg">
              Get your personalized social media growth strategy. No commitments, just actionable insights to transform your business.
            </p>
          </div>

          {/* Form */}
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600">
            <form onSubmit={handleSubmit} className="space-y-6">
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

              {/* Contact Method Selection */}
              <div>
                <label className="block text-white font-medium mb-3">
                  How would you prefer we contact you? *
                </label>
                <div className="flex gap-4 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value="email"
                      checked={contactMethod === 'email'}
                      onChange={(e) => setContactMethod(e.target.value)}
                      className="text-golden-500 focus:ring-golden-500"
                    />
                    <span className="text-white">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value="phone"
                      checked={contactMethod === 'phone'}
                      onChange={(e) => setContactMethod(e.target.value)}
                      className="text-golden-500 focus:ring-golden-500"
                    />
                    <span className="text-white">Phone</span>
                  </label>
                </div>
              </div>

              {/* Contact Field */}
              {contactMethod === 'email' ? (
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
                    required={contactMethod === 'email'}
                    className="w-full input-dark"
                    placeholder="your@email.com"
                  />
                </div>
              ) : (
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required={contactMethod === 'phone'}
                    className="w-full input-dark"
                    placeholder="(555) 123-4567"
                  />
                </div>
              )}

              {/* Optional Fields */}
              <div className="border-t border-dark-600 pt-6 mt-6">
                <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                  Tell us more (optional)
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="companyName" className="block text-dark-200 font-medium mb-2">
                      Company/Brand Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full input-dark"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="currentFollowers" className="block text-dark-200 font-medium mb-2">
                      Current Followers
                    </label>
                    <select
                      id="currentFollowers"
                      name="currentFollowers"
                      value={formData.currentFollowers}
                      onChange={handleInputChange}
                      className="w-full input-dark"
                    >
                      <option value="">Select range</option>
                      <option value="0-1k">0 - 1,000</option>
                      <option value="1k-10k">1,000 - 10,000</option>
                      <option value="10k-50k">10,000 - 50,000</option>
                      <option value="50k-100k">50,000 - 100,000</option>
                      <option value="100k+">100,000+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="socialPlatforms" className="block text-dark-200 font-medium mb-2">
                    Primary Social Platforms
                  </label>
                  <input
                    type="text"
                    id="socialPlatforms"
                    name="socialPlatforms"
                    value={formData.socialPlatforms}
                    onChange={handleInputChange}
                    className="w-full input-dark"
                    placeholder="e.g., Instagram, TikTok, LinkedIn, YouTube"
                  />
                </div>

                <div>
                  <label htmlFor="currentChallenges" className="block text-dark-200 font-medium mb-2">
                    Your Biggest Social Media Challenge
                  </label>
                  <textarea
                    id="currentChallenges"
                    name="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full input-dark resize-none"
                    placeholder="Tell us what you're struggling with most..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary py-4 text-lg font-semibold ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Get My Free Strategy Call →'
                )}
              </button>

              {/* Trust Indicators */}
              <div className="text-center pt-4">
                <div className="flex justify-center items-center gap-6 text-dark-300 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-golden-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    30-min call
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-golden-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No commitment
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-golden-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Actionable insights
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}