import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ContactPage } from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { LoadingScreen } from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentPath(hash);
      
      // Special handling for sub-sections or direct section IDs
      if (hash && hash !== '#home') {
        setTimeout(() => {
          const id = hash.substring(1);
          const el = document.getElementById(id);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80; // Offset for navbar
            window.scrollTo({ top: y, behavior: 'smooth' });
          } else if (!hash.includes('-')) {
            // If ID not found and no dash, scroll to top (it might be a primary page change)
            window.scrollTo(0, 0);
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Simulate initial load or wait for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    const basePath = currentPath.split('-')[0];
    switch (basePath) {
      case '#home':
        return <Home />;
      case '#about':
        return <AboutPage />;
      case '#services':
        return <ServicesPage />;
      case '#contact':
        return <ContactPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar currentPath={currentPath} />
          <div key={currentPath} className="animate-fade-in">
            {renderPage()}
          </div>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}

export default App;
