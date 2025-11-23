import React, { useState } from 'react'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Prepare form data for submission
      const submissionData = {
        email: email,
        type: 'Newsletter Signup',
        source: 'Homepage CTA',
        submissionDate: new Date().toLocaleString(),
        subject: `New Newsletter Signup: ${email}`
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
        // Success
        alert('Thank you! We\'ll be in touch with exclusive social media growth tips and strategies.')
        setEmail('')
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting email:', error)
      alert('There was an error. Please try again or contact us directly at rockmediaai@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section bg-dark-900">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-golden-500">Transform</span> Your Social Media?
          </h2>
          
          <p className="text-xl text-dark-200 mb-12 leading-relaxed">
            Get a free strategy session and discover how we can 10x your engagement and 5x your 
            growth.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-dark flex-1"
              required
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary whitespace-nowrap ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Get Started Free →'
              )}
            </button>
          </form>

          <p className="text-dark-400 text-sm">
            No credit card required • 30-day money-back guarantee • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}