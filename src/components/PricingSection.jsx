import { Check } from "lucide-react";
const PricingSection = ( ) => (
    <section id="pricing" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-blue-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                className="group p-8 rounded-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition shadow-lg hover:shadow-xl">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
  
  export default PricingSection;
  