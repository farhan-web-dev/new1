import { useNavigate } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-green-700 to-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl text-green-50 mb-10 max-w-3xl mx-auto">
            Take the first step toward a pain-free, healthier life. Schedule your consultation today and discover how chiropractic care can transform your well-being.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-green-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all transform hover:scale-105 font-semibold text-lg shadow-xl flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Your Visit
            </button>
            <a
              href="tel:555-123-4567"
              className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-500 transition-all transform hover:scale-105 font-semibold text-lg shadow-xl flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (555) 123-4567
            </a>
          </div>

          <p className="text-green-100 mt-8 text-sm">
            New patients welcome • Same-day appointments available • Most insurance accepted
          </p>
        </div>
      </div>
    </section>
  );
}
