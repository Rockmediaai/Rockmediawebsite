import React from 'react'

export default function ThankYouPage() {
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
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Thank You! You Just Took the First Step Toward{' '}
          <span className="text-golden-500">Dominating Social Media</span>
        </h1>

        <div className="text-xl lg:text-2xl text-dark-100 space-y-6 leading-relaxed mb-12">
          <p className="font-semibold text-golden-400">
            We've got your info, and we're already fired up!
          </p>

          <p>
            Now we see exactly where your brand is today — and the <strong className="text-white">massive growth</strong> that's waiting for you tomorrow.
          </p>

          <p>
            You're no longer guessing. You're no longer stressed.
          </p>

          <p>
            You just put your social media success in the hands of <strong className="text-golden-500">RockMedia AI</strong> — the team that delivers{' '}
            <span className="text-golden-500 font-bold">10× engagement, 5× growth, and zero headaches.</span>
          </p>

          <p className="text-2xl lg:text-3xl font-bold text-golden-500">
            Consider this the moment everything changes.
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">What Happens Next?</h2>
          <p className="text-lg text-dark-200 mb-6">
            One of our senior strategists is <strong className="text-white">personally reviewing your submission right now.</strong> You'll hear from us within the next{' '}
            <span className="text-golden-500 font-semibold">24 hours</span> (probably sooner) to lock in your free strategy session and start building the unstoppable presence your brand deserves.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-golden-500 font-semibold text-lg">
            <span>Welcome to the family.</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Closing Message */}
        <div className="text-xl lg:text-2xl text-white space-y-4">
          <p>
            You're in the <strong className="text-golden-500">best hands</strong> — and the best is yet to come.
          </p>
          <p className="font-bold text-golden-500 text-2xl lg:text-3xl">
            Let's go make your competitors nervous.
          </p>
          <div className="flex items-center justify-center gap-3 text-lg font-medium">
            <span>— The RockMedia AI Team</span>
            <span className="text-2xl">🚀</span>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-dark-800 text-golden-500 px-6 py-3 rounded-lg font-semibold hover:bg-dark-700 transition-all duration-200 border border-dark-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}