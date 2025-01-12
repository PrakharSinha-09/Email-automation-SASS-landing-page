import { Check } from "lucide-react";
import PropTypes from 'prop-types'

const PricingSection = ({ darkMode }) => (
  <section id="pricing" className="py-20 px-4 relative">
    <div className={`${darkMode ? 'bg-gradient-to-b from-blue-900 to-purple-900' : 'bg-gradient-to-b from-purple-50 to-blue-50'} absolute inset-0 opacity-50`}></div>
    <div className="max-w-7xl mx-auto relative">
      <h2 className={`text-3xl font-bold text-center mb-12
      ${darkMode
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'
          : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'}`}>
        Simple, transparent pricing
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Starter",
            price: "29",
            features: ["Up to 5,000 subscribers", "Basic automation", "Email support"]
          },
          {
            name: "Professional",
            price: "79",
            features: ["Up to 25,000 subscribers", "Advanced automation", "Priority support"]
          },
          {
            name: "Enterprise",
            price: "199",
            features: ["Unlimited subscribers", "Custom automation", "24/7 phone support"]
          }
        ].map((plan, index) => (
          <div
            key={index}
            className={`group p-8 rounded-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}
            ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm relative overflow-hidden
             hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
          >
            <div className={`${darkMode ? 'bg-gradient-to-r from-blue-800 to-purple-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'} absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500`}></div>

            <div className="relative">
              <h3 className={`text-xl font-semibold mb-4
              ${darkMode
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'}`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={`text-gray-600 ${darkMode ? 'text-white' : 'text-gray-600'}`}>/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
                    <span className={`${darkMode ? 'text-gray-300' : 'text-black'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full 
              ${darkMode
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600'} 
              text-white py-2 rounded-lg hover:opacity-90 transition shadow-lg hover:shadow-xl`}>
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

PricingSection.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default PricingSection;
