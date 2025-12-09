import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `transition-colors ${isActive(path) ? 'text-green-700 font-medium' : 'text-gray-700 hover:text-green-700'}`;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/Revival-Family-Chiropractic-Logo-Field-Green-Rgb.svg"
                alt="Revival Family Chiropractic"
                className="h-12"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className={navLinkClass('/about')}>
              About
            </Link>
            <Link to="/services" className={navLinkClass('/services')}>
              Services
            </Link>
            <Link to="/conditions" className={navLinkClass('/conditions')}>
              Conditions
            </Link>
            <Link to="/blog" className={navLinkClass('/blog')}>
              Blog
            </Link>
            <Link to="/testimonials" className={navLinkClass('/testimonials')}>
              Stories
            </Link>
            <Link
              to="/contact"
              className="bg-green-700 text-white px-6 py-2.5 rounded-full hover:bg-green-800 transition-colors font-medium"
            >
              Schedule Visit
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-700 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors ${isActive('/about') ? 'text-green-700 font-medium bg-green-50' : 'text-gray-700'}`}
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors ${isActive('/services') ? 'text-green-700 font-medium bg-green-50' : 'text-gray-700'}`}
            >
              Services
            </Link>
            <Link
              to="/conditions"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors ${isActive('/conditions') ? 'text-green-700 font-medium bg-green-50' : 'text-gray-700'}`}
            >
              Conditions
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors ${isActive('/blog') ? 'text-green-700 font-medium bg-green-50' : 'text-gray-700'}`}
            >
              Blog
            </Link>
            <Link
              to="/testimonials"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors ${isActive('/testimonials') ? 'text-green-700 font-medium bg-green-50' : 'text-gray-700'}`}
            >
              Stories
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-medium mt-2"
            >
              Schedule Visit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
