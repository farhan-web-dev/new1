import { Link } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import { Home, Info, Stethoscope, Activity, ClipboardList, MessageSquare, Mail } from 'lucide-react';

export default function SitemapPage() {
  useSEO({
    title: 'Sitemap | Revival Family Chiropractic Charlotte NC',
    description: 'Complete sitemap of Revival Family Chiropractic website. Navigate to all pages including services, conditions, testimonials, and contact information.',
    canonical: 'https://revivalfamilychiropractic.com/sitemap',
  });

  const pages = [
    {
      name: 'Home',
      url: '/',
      icon: Home,
      description: 'Welcome to Revival Family Chiropractic',
    },
    {
      name: 'About Dr. Bryan',
      url: '/about',
      icon: Info,
      description: 'Learn about our holistic approach and meet Dr. Bryan',
    },
    {
      name: 'Services',
      url: '/services',
      icon: Stethoscope,
      description: 'Comprehensive chiropractic services for the whole family',
    },
    {
      name: 'Conditions We Treat',
      url: '/conditions',
      icon: Activity,
      description: 'Personal injury, pain relief, and wellness conditions',
    },
    {
      name: 'What to Expect',
      url: '/process',
      icon: ClipboardList,
      description: 'Your first visit and our patient care process',
    },
    {
      name: 'Patient Stories',
      url: '/testimonials',
      icon: MessageSquare,
      description: 'Real testimonials from Charlotte families',
    },
    {
      name: 'Contact & Schedule',
      url: '/contact',
      icon: Mail,
      description: 'Get in touch and book your appointment',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Site Navigation
          </h1>
          <p className="text-xl text-gray-600">
            Explore all pages on our website
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <nav aria-label="Site map navigation">
            <ul className="space-y-6">
              {pages.map((page) => {
                const Icon = page.icon;
                return (
                  <li key={page.url} className="border-b border-gray-100 pb-6 last:border-0">
                    <Link
                      to={page.url}
                      className="flex items-start gap-4 group hover:bg-green-50 p-4 rounded-lg transition-colors"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                        <Icon className="text-green-700" size={24} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-1">
                          {page.name}
                        </h2>
                        <p className="text-gray-600">{page.description}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="tel:(704)568-2447"
                className="text-green-700 hover:text-green-800 font-medium"
              >
                Call: (704) 568-2447
              </a>
              <a
                href="mailto:admin@chirobryan.com"
                className="text-green-700 hover:text-green-800 font-medium"
              >
                Email: admin@chirobryan.com
              </a>
              <p className="text-gray-600">5527 Monroe Rd, Charlotte, NC</p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-800 font-medium"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-800 font-medium"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
