import { Heart, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-4" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/Revival-Family-Chiropractic-Logo-Field-Green-Rgb.svg"
              alt="Revival Family Chiropractic"
              className="h-16 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Charlotte's holistic family wellness center, dedicated to helping families thrive through natural healing and neurological care.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:admin@chirobryan.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                  About Dr. Bryan
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-green-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/conditions" className="text-gray-400 hover:text-green-400 transition-colors">
                  Conditions We Help
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-green-400 transition-colors">
                  Health Blog
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-gray-400 hover:text-green-400 transition-colors">
                  Patient Stories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Pediatric Chiropractic</li>
              <li>Prenatal Care</li>
              <li>Family Wellness</li>
              <li>Neurological Care</li>
              <li>Functional Nutrition</li>
              <li>TMJ Treatment</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>5527 Monroe Rd<br />Charlotte, NC</li>
              <li>
                <a href="tel:704-568-2447" className="hover:text-green-400 transition-colors">
                  (704) 568-2447
                </a>
              </li>
              <li>
                <a href="mailto:admin@chirobryan.com" className="hover:text-green-400 transition-colors">
                  admin@chirobryan.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors font-medium"
              >
                Schedule Visit
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Revival Family Chiropractic. All rights reserved. |{' '}
              <a href="/privacy-policy" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              {' | '}
              <a href="/terms-of-service" className="hover:text-green-400 transition-colors">
                Terms of Service
              </a>
              {' | '}
              <a href="/sitemap" className="hover:text-green-400 transition-colors">
                Sitemap
              </a>
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="text-green-400 fill-green-400" size={16} />
              <span>in Charlotte, NC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
