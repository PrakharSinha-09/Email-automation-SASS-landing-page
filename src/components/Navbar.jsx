import { Mail, Sun, Moon } from 'lucide-react';
import PropTypes from 'prop-types';
export default function Navbar({ darkMode, setDarkMode, scrolled, scrollToSection }) {
  return (
    <div className={`fixed w-full z-50 flex justify-center transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
      <nav className={`
        ${scrolled 
          ? `mx-auto px-8 rounded-full backdrop-blur-lg border transform duration-500 ease-in-out
             ${darkMode ? 'bg-gray-800/40 border-gray-700/20' : 'bg-white/40 border-white/20'}` 
          : `w-full backdrop-blur-xl border-b
             ${darkMode ? 'bg-gray-800/70 border-gray-700/50' : 'bg-white/70 border-gray-100/50'}`
        }
        transition-all duration-500
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Mail className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className="ml-2 text-xl font-semibold">MailFlow</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors
                  ${darkMode 
                    ? 'hover:bg-gray-700 text-yellow-400' 
                    : 'hover:bg-gray-100 text-gray-600'
                  }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <NavLink sectionId="features" scrollToSection={scrollToSection} darkMode={darkMode} >Features</NavLink>
              <NavLink sectionId="pricing" scrollToSection={scrollToSection} darkMode={darkMode}>Pricing</NavLink>
              <button className={`px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg
                ${darkMode 
                  ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                  : 'bg-blue-600/90 hover:bg-blue-700 text-white'
                }`}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  scrolled: PropTypes.bool.isRequired,
};


const NavLink = ({ sectionId, children, scrollToSection, darkMode }) => (
  <button
    onClick={() => scrollToSection(sectionId)}
    className={`text-gray-600 ${darkMode ? 'text-white' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
  >
    {children}
  </button>
);

NavLink.propTypes = {
  sectionId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,

};