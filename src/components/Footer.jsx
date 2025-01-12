import { Mail } from "lucide-react";
import PropTypes from "prop-types";

const Footer = ({darkMode}) => {
  const footerColumns = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integration", "Documentation"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "GDPR"],
    },
  ];

  return (
    <footer className={`${darkMode 
      ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400' 
      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600'} 
    bg-clip-text text-transparent py-12`} >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Mail className="h-6 w-6 text-blue-400" />
            <span className="ml-2 text-lg font-semibold">MailFlow</span>
          </div>
          <p className="text-gray-400">
            Automating email marketing for modern businesses
          </p>
        </div>

        {footerColumns.map((column, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-4">{column.title}</h4>
            <ul className="space-y-2">
              {column.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className={`${darkMode ? 'text-white' : 'text-gray-600'} hover:text-blue-500`}>                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Footer;
