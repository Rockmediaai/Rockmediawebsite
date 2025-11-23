import React, { useState, useEffect } from 'react'

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    linkedIn: '',
    instagram: '',
    tiktok: '',
    twitter: '',
    youtube: '',
    portfolio: '',
    experience: '',
    whyRockMedia: '',
    availability: '',
    salary: '',
    resumeFile: null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Get position from URL params
    const urlParams = new URLSearchParams(window.location.search)
    const position = urlParams.get('position')
    if (position) {
      setFormData(prev => ({ ...prev, position: decodeURIComponent(position) }))
    }
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resumeFile: e.target.files[0]
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
        position: formData.position,
        linkedIn: formData.linkedIn || 'Not provided',
        instagram: formData.instagram || 'Not provided',
        tiktok: formData.tiktok || 'Not provided',
        twitter: formData.twitter || 'Not provided',
        youtube: formData.youtube || 'Not provided',
        portfolio: formData.portfolio || 'Not provided',
        experience: formData.experience,
        whyRockMedia: formData.whyRockMedia,
        availability: formData.availability,
        salary: formData.salary,
        resumeAttached: formData.resumeFile ? 'Yes - ' + formData.resumeFile.name : 'No',
        submissionDate: new Date().toLocaleString(),
        subject: `Job Application: ${formData.position} - ${formData.firstName} ${formData.lastName}`
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
        // Success - redirect to application thank you page
        window.location.href = '/application-thank-you'
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('There was an error submitting your application. Please try again or email us directly at rockmediaai@gmail.com')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Header */}
      <section className="section bg-gradient-to-b from-dark-900 to-dark-800 pt-24 pb-12">
        <div className="container-section">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-golden-500/20 text-golden-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Job Application
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Join the <span className="text-golden-500">RockMedia AI</span> Team
            </h1>
            {formData.position && (
              <div className="bg-dark-800 rounded-lg px-6 py-3 inline-block mb-4">
                <span className="text-golden-500 font-semibold">Applying for: </span>
                <span className="text-white">{formData.position}</span>
              </div>
            )}
            <p className="text-xl text-dark-200">
              Ready to build the future of social media? Submit your application below.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section pb-16">
        <div className="container-section">
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-2xl font-bold text-golden-500 mb-6">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
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
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full input-dark"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Position */}
                <div>
                  <label htmlFor="position" className="block text-white font-medium mb-2">
                    Position Applying For *
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full input-dark"
                    placeholder="e.g., Social Media Manager, Content Creator"
                  />
                </div>

                {/* Social Media Handles */}
                <div>
                  <h3 className="text-2xl font-bold text-golden-500 mb-6">Social Media Profiles</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="linkedIn" className="block text-white font-medium mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        id="linkedIn"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleInputChange}
                        className="w-full input-dark"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    <div>
                      <label htmlFor="instagram" className="block text-white font-medium mb-2">
                        Instagram Handle
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        className="w-full input-dark"
                        placeholder="@yourusername"
                      />
                    </div>
                    <div>
                      <label htmlFor="tiktok" className="block text-white font-medium mb-2">
                        TikTok Handle
                      </label>
                      <input
                        type="text"
                        id="tiktok"
                        name="tiktok"
                        value={formData.tiktok}
                        onChange={handleInputChange}
                        className="w-full input-dark"
                        placeholder="@yourusername"
                      />
                    </div>
                    <div>
                      <label htmlFor="twitter" className="block text-white font-medium mb-2">
                        Twitter/X Handle
                      </label>
                      <input
                        type="text"
                        id="twitter"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleInputChange}
                        className="w-full input-dark"
                        placeholder="@yourusername"
                      />
                    </div>
                    <div>
                      <label htmlFor="youtube" className="block text-white font-medium mb-2">
                        YouTube Channel
                      </label>
                      <input
                        type="text"
                        id="youtube"
                        name="youtube"
                        value={formData.youtube}
                        onChange={handleInputChange}
                        className="w-full input-dark"
                        placeholder="@yourchannel or channel URL"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="portfolio" className="block text-white font-medium mb-2">
                      Portfolio/Website
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full input-dark"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <h3 className="text-2xl font-bold text-golden-500 mb-6">Resume & Documents</h3>
                  <div>
                    <label htmlFor="resumeFile" className="block text-white font-medium mb-2">
                      Upload Your Resume *
                    </label>
                    <div className="border-2 border-dashed border-dark-600 rounded-lg p-6 text-center hover:border-golden-500/50 transition-colors">
                      <input
                        type="file"
                        id="resumeFile"
                        name="resumeFile"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="hidden"
                      />
                      <label htmlFor="resumeFile" className="cursor-pointer">
                        <svg className="w-12 h-12 text-dark-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-dark-300 mb-2">
                          {formData.resumeFile ? formData.resumeFile.name : 'Click to upload your resume'}
                        </p>
                        <p className="text-xs text-dark-400">PDF, DOC, or DOCX (Max 10MB)</p>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Experience & Questions */}
                <div>
                  <h3 className="text-2xl font-bold text-golden-500 mb-6">Tell Us About Yourself</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="experience" className="block text-white font-medium mb-2">
                        Relevant Experience *
                      </label>
                      <textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full input-dark resize-none"
                        placeholder="Tell us about your relevant work experience, projects, and achievements..."
                      />
                    </div>

                    <div>
                      <label htmlFor="whyRockMedia" className="block text-white font-medium mb-2">
                        Why do you want to work at RockMedia AI? *
                      </label>
                      <textarea
                        id="whyRockMedia"
                        name="whyRockMedia"
                        value={formData.whyRockMedia}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full input-dark resize-none"
                        placeholder="What excites you about joining our team and contributing to our mission..."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="availability" className="block text-white font-medium mb-2">
                          When can you start? *
                        </label>
                        <input
                          type="text"
                          id="availability"
                          name="availability"
                          value={formData.availability}
                          onChange={handleInputChange}
                          required
                          className="w-full input-dark"
                          placeholder="e.g., Immediately, 2 weeks notice, etc."
                        />
                      </div>
                      <div>
                        <label htmlFor="salary" className="block text-white font-medium mb-2">
                          Salary Expectations
                        </label>
                        <input
                          type="text"
                          id="salary"
                          name="salary"
                          value={formData.salary}
                          onChange={handleInputChange}
                          className="w-full input-dark"
                          placeholder="e.g., $60K-80K, Open to discussion"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary px-12 py-4 text-lg font-semibold ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Submitting Application...
                      </span>
                    ) : (
                      'Submit Application →'
                    )}
                  </button>
                  
                  <p className="text-dark-400 text-sm mt-4">
                    We'll review your application and get back to you within 2-3 business days.
                  </p>
                </div>
              </form>
            </div>

            {/* What Happens Next */}
            <div className="mt-12 bg-dark-800 rounded-2xl p-8 border border-dark-600">
              <h3 className="text-2xl font-bold text-golden-500 mb-6 text-center">What Happens Next?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-golden-500">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Application Review</h4>
                  <p className="text-dark-300 text-sm">Our team reviews your application and portfolio within 2-3 business days.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-golden-500">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Initial Interview</h4>
                  <p className="text-dark-300 text-sm">If selected, we'll schedule a 30-minute video call to get to know you better.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-golden-500">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Welcome to the Team</h4>
                  <p className="text-dark-300 text-sm">Final interviews, offer discussion, and onboarding to start your RockMedia AI journey.</p>
                </div>
              </div>
            </div>

            {/* Back to Careers */}
            <div className="text-center mt-8">
              <a
                href="/careers"
                className="inline-flex items-center gap-2 text-golden-500 hover:text-golden-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Careers
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}