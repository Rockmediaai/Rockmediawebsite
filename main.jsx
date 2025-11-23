import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import ThankYou from './ThankYou'
import CaseStudiesPage from './components/CaseStudiesPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import CareersPage from './components/CareersPage'
import SuccessStoriesPage from './components/SuccessStoriesPage'
import ApplyPage from './components/ApplyPage'
import ApplicationThankYou from './components/ApplicationThankYou'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/application-thank-you" element={<ApplicationThankYou />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
