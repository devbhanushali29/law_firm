import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import DisclaimerPopup from './components/DisclaimerPopup';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import ContactPage from './pages/ContactPage';
import DisclaimerPage from './pages/DisclaimerPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const disclaimerAgreed = localStorage.getItem('disclaimerAgreed');
    if (!disclaimerAgreed) {
      setShowDisclaimer(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleDisclaimerAgree = () => {
    setShowDisclaimer(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'practice':
        return <PracticeAreasPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'disclaimer':
        return <DisclaimerPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {showDisclaimer && <DisclaimerPopup onAgree={handleDisclaimerAgree} />}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <WhatsAppButton />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
