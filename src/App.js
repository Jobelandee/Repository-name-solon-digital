import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './config/i18n'; // Initialize i18n
import Header from './components/Header';
import Hero from './components/Hero';
import KeyBenefits from './components/KeyBenefits';
import IndustriesScale from './components/IndustriesScale';
import ServicesOverview from './components/ServicesOverview';
import ServicesPage from './components/ServicesPage';
import OurStory from './components/OurStory';
import ReviewsSection from './components/ReviewsSection';
import FAQ from './components/FAQ';
import AuditForm from './components/AuditForm';
import ConfirmationPage from './components/ConfirmationPage';
import InsightsPage from './components/InsightsPage';
import MethodPage from './components/MethodPage';
import ContactPage from './components/ContactPage';
import SuccessStoriesPage from './components/SuccessStoriesPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import ChatBot from './components/ChatBot';
import WhatsAppButton from './components/WhatsAppButton';
import AdminBookings from './pages/AdminBookings';
import './App.css';

function Layout({ children }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      <Header />
      <div>{children}</div>
      <footer className="bg-soft-stone text-charcoal py-12 px-6 border-t border-blue border-opacity-20">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-4">
            <p className="text-charcoal">
              {t('footer.company')} - {t('footer.tagline')}
            </p>
            <p className="text-gray-dark text-sm opacity-70">
              {t('footer.copyright')}
            </p>
          </div>
          <div className="flex justify-center gap-6 text-sm">
            <Link to="/privacy" className="text-blue hover:text-blue-dark">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-blue hover:text-blue-dark">
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <Hero />
      <KeyBenefits />
      <IndustriesScale />
      <ServicesOverview />
      <OurStory />
      <ReviewsSection />
      <FAQ />
      <div id="audit">
        <AuditForm />
      </div>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/insights" element={<Layout><InsightsPage /></Layout>} />
        <Route path="/method" element={<Layout><MethodPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/success-stories" element={<Layout><SuccessStoriesPage /></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/cookies" element={<Layout><CookiePolicy /></Layout>} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
      </Routes>
    </Router>
  );
}

export default App;
