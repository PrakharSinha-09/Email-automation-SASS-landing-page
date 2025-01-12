import PropTypes from "prop-types";

export default function TrustedCompanies({ darkMode }) {
    const companies = [
      { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png", alt: "Tesla" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", alt: "IBM" },
      
    ];
  
    return (
      <section className={`py-16 overflow-hidden ${darkMode ? 'bg-gray-800/30' : 'bg-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-center text-2xl font-semibold mb-12 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            Trusted by innovative companies worldwide
          </h2>
          
          <div className="relative">
            {/* Single row of logos */}
            <div className="flex space-x-16 animate-alternate-scroll">
              {companies.map((company, index) => (
                <img key={index} src={company.src} alt={company.alt} className="h-8 object-contain" />
              ))}
              {/* Duplicate for seamless loop */}
              {companies.map((company, index) => (
                <img key={`duplicate-${index}`} src={company.src} alt={company.alt} className="h-8 object-contain" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

TrustedCompanies.propTypes = {
    darkMode: PropTypes.bool.isRequired,
};
