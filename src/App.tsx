import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ContactPage } from './pages/Contact';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
      if (!window.location.hash.includes('-')) {
        window.scrollTo(0, 0);
      } else {
        // Handle scroll to subsection
        setTimeout(() => {
          const id = window.location.hash.substring(1);
          const el = document.getElementById(id);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100; // Offset for navbar
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
      <Navbar currentPath={currentPath} />
      <div key={currentPath} className="animate-fade-in">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
