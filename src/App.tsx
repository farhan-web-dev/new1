import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LeadMagnetPopup from './components/LeadMagnetPopup';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ConditionsPage from './pages/ConditionsPage';
import ProcessPage from './pages/ProcessPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import SitemapPage from './pages/SitemapPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 30000);

    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/conditions" element={<ConditionsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
        <Footer />
        <LeadMagnetPopup show={showPopup} onClose={() => setShowPopup(false)} />

        {showStickyButton && (
          <a
            href="/contact"
            className="fixed bottom-8 right-8 bg-green-700 text-white px-6 py-4 rounded-full hover:bg-green-800 transition-all transform hover:scale-105 font-medium shadow-2xl z-40"
          >
            Schedule Visit
          </a>
        )}
      </div>
    </Router>
  );
}

export default App;
