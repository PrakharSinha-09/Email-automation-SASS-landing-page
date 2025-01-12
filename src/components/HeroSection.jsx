import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';

export default function HeroSection({ darkMode, email, setEmail, handleSubmit }) {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className={`absolute top-1/4 -left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
          ${darkMode ? 'bg-blue-500/10' : 'bg-blue-400/20'}`}></div>
        <div className={`absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
          ${darkMode ? 'bg-purple-500/10' : 'bg-purple-400/20'}`} 
          style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative">
        <div className="animate-fade-in-up">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 
            ${darkMode 
              ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400' 
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600'} 
            bg-clip-text text-transparent`}>
            Automate Your Email Marketing
            <span className="block text-4xl md:text-5xl mt-2">Without The Complexity</span>
          </h1>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Powerful email automation that helps you connect with your customers at the right time, every time.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2 hover:scale-105 transition-transform duration-300">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur-sm"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Start Free <ArrowRight className="w-4 h-4 animate-bounce-x" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};