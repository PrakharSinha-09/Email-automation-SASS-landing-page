import { Zap, Clock, BarChart } from 'lucide-react';
import PropTypes from 'prop-types';
const FeaturesSection = ({ darkMode }) => (
  <section id="features" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
  <div className="max-w-7xl mx-auto">
    <h2 className={`text-3xl font-bold text-center mb-12
      ${darkMode 
        ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
        : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'}`}>
      Everything you need to succeed
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: <Zap className={`w-6 h-6 ${darkMode ? 'text-blue-500' : 'text-blue-600'}`} />,
          title: "Powerful Automation",
          description: "Set up complex email sequences with our intuitive drag-and-drop builder"
        },
        {
          icon: <Clock className={`w-6 h-6 ${darkMode ? 'text-purple-500' : 'text-purple-600'}`} />,
          title: "Perfect Timing",
          description: "Send emails at the optimal time based on user behavior and timezone"
        },
        {
          icon: <BarChart className={`w-6 h-6 ${darkMode ? 'text-blue-500' : 'text-blue-600'}`} />,
          title: "Advanced Analytics",
          description: "Get detailed insights into your campaign performance and user engagement"
        }
      ].map((feature, index) => (
        <div 
          key={index} 
          className={`group p-6 rounded-xl border ${darkMode ? 'border-gray-700' : 'border-gray-100'} 
            ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} hover:shadow-2xl transition-all duration-300 
            hover:-translate-y-1 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300
            ${darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-100 to-purple-100'}`}>
            {feature.icon}
          </div>
          <h3 className={`text-xl font-semibold mb-2
            ${darkMode 
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'}`}>
            {feature.title}
          </h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
);

FeaturesSection.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default FeaturesSection;
  