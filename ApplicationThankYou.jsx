import React from 'react'

export default function ApplicationThankYou() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-golden-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-dark-900" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          Thank you for applying to join <span className="text-golden-500">RockMediaAI</span> — the fastest-growing social media agency that's changing the game for businesses worldwide!
        </h1>

        <div className="text-lg lg:text-xl text-dark-100 space-y-6 leading-relaxed mb-12 max-w-3xl mx-auto">
          <p>
            We're genuinely excited to learn more about you. Our team truly values <strong className="text-golden-500">talent, creativity, and growth</strong> (both for our clients and our people), and we can't wait to review your resume and portfolio.
          </p>

          <p>
            If your skills and energy are the perfect match for our team, you'll hear back from us <strong className="text-white">very soon</strong> with the next steps. We're always on the lookout for passionate creators, strategists, and innovators who want to <span className="text-golden-500">build something big</span> with us.
          </p>

          <p className="text-golden-400 font-semibold">
            Thanks again for taking the time to apply — it means a lot.
          </p>

          <p className="text-xl lg:text-2xl font-bold text-golden-500">
            Welcome to the shortlist of people who could shape the future of RockMediaAI!
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">What's Next?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-golden-500">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Application Review</h3>
              <p className="text-dark-300 text-sm">Our hiring team will carefully review your application, resume, and portfolio.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-golden-500">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Quick Response</h3>
              <p className="text-dark-300 text-sm">If you're a good fit, expect to hear from us within 2-3 business days.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-golden-500">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Join the Team</h3>
              <p className="text-dark-300 text-sm">Interview process and welcome to the RockMediaAI family!</p>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="text-xl lg:text-2xl text-white space-y-4 mb-8">
          <p className="font-semibold">
            Talk soon,
          </p>
          <p className="text-golden-500 font-bold text-2xl lg:text-3xl">
            The RockMediaAI Team
          </p>
          <p className="text-lg font-medium text-dark-200">
            <span className="text-golden-500">Human heart.</span> AI horsepower. <span className="text-golden-500">Real results.</span>
          </p>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/careers"
            className="inline-flex items-center gap-2 bg-dark-800 text-golden-500 px-6 py-3 rounded-lg font-semibold hover:bg-dark-700 transition-all duration-200 border border-dark-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Careers
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-golden-500 text-dark-900 px-6 py-3 rounded-lg font-semibold hover:bg-golden-400 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Visit Our Homepage
          </a>
        </div>
      </div>
    </div>
  )
}