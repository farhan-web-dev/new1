import { Award, Heart, Users, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Your health journey is unique. We create personalized treatment plans tailored to your specific needs and goals.'
    },
    {
      icon: Award,
      title: 'Evidence-Based Approach',
      description: 'We combine time-tested chiropractic techniques with the latest research to deliver effective, safe treatments.'
    },
    {
      icon: Users,
      title: 'Family Wellness Focus',
      description: 'From newborns to seniors, we provide specialized care for every stage of life, supporting your entire family\'s health.'
    },
    {
      icon: Clock,
      title: 'Convenient & Accessible',
      description: 'Flexible scheduling, same-day appointments available, and a welcoming environment that feels like home.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Revival Family Chiropractic?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that personalized, compassionate chiropractic care can make in your life and your family's well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-green-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
