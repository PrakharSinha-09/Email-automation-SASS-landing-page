import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TrustedCompanies from './components/TrustedCompanies';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

export default function App() {
  const [email, setEmail] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 
      ${darkMode
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white'
        : 'bg-gradient-to-b from-blue-50 via-white to-purple-50 text-gray-900'
      }`}>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} scrolled={scrolled} scrollToSection={scrollToSection} />
      <HeroSection darkMode={darkMode} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      <FeaturesSection darkMode={darkMode} />
      <TrustedCompanies darkMode={darkMode} />
      <PricingSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />

      <style jsx global>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .transition-colors {
          transition-property: background-color, border-color, color, fill, stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
        
        @keyframes alternate-scroll {
          0% {
            transform: translateX(-10%);
          }
          50% {
            transform: translateX(50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-alternate-scroll {
          animation: alternate-scroll 20s linear infinite;
        }

      `}</style>
    </div>

  );
}
