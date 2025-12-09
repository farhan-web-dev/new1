import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-green-700 font-medium text-sm tracking-wide uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Schedule Your First Visit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey to wellness? Reach out today and take the first step toward feeling your best.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-green-700" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Location</p>
                    <p className="text-gray-600">5527 Monroe Rd<br />Charlotte, NC</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-700" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <a href="tel:704-568-2447" className="text-gray-600 hover:text-green-700 transition-colors">
                      (704) 568-2447
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-amber-700" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:admin@chirobryan.com" className="text-gray-600 hover:text-green-700 transition-colors">
                      admin@chirobryan.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-pink-700" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Office Hours</p>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Thursday: 9:00 AM - 6:00 PM</p>
                      <p>Friday: 9:00 AM - 12:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-700 to-emerald-700 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">What to Expect After Booking</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>You'll receive a confirmation email with arrival instructions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complete simple intake paperwork before your visit</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Plan for 45-60 minutes for your Discovery Visit</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Meet Dr. Bryan and experience your first gentle adjustment</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-700 focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-700 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-700 focus:outline-none transition-colors"
                    placeholder="(704) 568-2447"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    How Can We Help? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-700 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about what brings you to Revival..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-4 rounded-xl hover:bg-green-800 transition-all transform hover:scale-105 font-medium text-lg shadow-lg"
                >
                  Schedule Your Visit
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We'll respond within 24 hours to confirm your appointment
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
