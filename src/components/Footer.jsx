import { Mail } from "lucide-react";
const Footer = () => {
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
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
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
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    {link}
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

export default Footer;
