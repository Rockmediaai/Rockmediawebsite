import React from 'react'
import HeroSection from './components/HeroSection'
import ContactFormSection from './components/ContactFormSection'
import StatsSection from './components/StatsSection'
import TrustedBy from './components/TrustedBy'
import MainHeading from './components/MainHeading'
import ServicesGrid from './components/ServicesGrid'
import WhyChooseUs from './components/WhyChooseUs'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans bg-dark-900 text-white min-h-screen">
      <HeroSection />
      <ContactFormSection />
      <StatsSection />
      <TrustedBy />
      <MainHeading />
      <ServicesGrid />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </div>
  )
}
