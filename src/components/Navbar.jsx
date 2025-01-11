import { Mail } from 'lucide-react';

const Navbar = () => (
  <div className='fixed w-full z-50 flex justify-center transition-all duration-500'>
    <nav className="fixed w-full bg-white/70 backdrop-blur-xl z-50 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <a href="/" className="flex items-center space-x-2">
                    <Mail className="h-8 w-8 text-blue-600" />
                    <span className="ml-2 text-xl font-semibold">MailFlow</span>
                </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-900">Pricing</a>
              <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
  </div>
);



export default Navbar;
