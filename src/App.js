import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './config/i18n'; // Initialize i18n
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import IndustriesScale from './components/IndustriesScale';
import ServicesOverview from './components/ServicesOverview';
import OurStory from './components/OurStory';
import ReviewsSection from './components/ReviewsSection';
import FAQ from './components/FAQ';
import AuditForm from './components/AuditForm';
import ConfirmationPage from './components/ConfirmationPage';
import InsightsPage from './components/InsightsPage';
import MethodPage from './components/MethodPage';
import ContactPage from './components/ContactPage';
import ChatBot from './components/ChatBot';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function Layout({ children }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      <Header />
      <div>{children}</div>
      <footer className="bg-soft-stone text-charcoal py-12 px-6 border-t border-blue border-opacity-20">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-charcoal">
            {t('footer.company')} - {t('footer.tagline')}
          </p>
          <p className="text-gray-dark text-sm opacity-70">
            {t('footer.copyright')}
          </p>
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
      <Dashboard />
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
        <Route path="/insights" element={<Layout><InsightsPage /></Layout>} />
        <Route path="/method" element={<Layout><MethodPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
