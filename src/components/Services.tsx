import { Brain, Leaf, Zap, Car } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Personal Injury & Accident Care',
    description: 'Comprehensive chiropractic treatment for car accidents, work injuries, and personal injury cases.',
    features: [
      'Auto Accident Injury Treatment',
      'Work-Related Injury Care',
      'Whiplash & Soft Tissue Recovery',
      'Legal Documentation Support',
      'Insurance Coordination'
    ],
    color: 'from-red-600 to-rose-600',
    iconBg: 'bg-red-100 text-red-700'
  },
  {
    icon: Brain,
    title: 'Holistic Chiropractic Treatment',
    description: 'Natural, evidence-based care for neck pain, back pain, sciatica, and migraines.',
    features: [
      'Chronic Neck & Back Pain Relief',
      'Sciatica Treatment',
      'Migraine & Headache Support',
      'Spinal Alignment Therapy',
      'Neurological Chiropractic'
    ],
    color: 'from-blue-600 to-indigo-600',
    iconBg: 'bg-blue-100 text-blue-700'
  },
  {
    icon: Leaf,
    title: 'Holistic Wellness & Nutrition',
    description: 'Functional approaches to gut health, hormones, and whole-body vitality.',
    features: [
      'Gut Health Restoration',
      'Brain-Body Connection',
      'Energy & Hormone Balance',
      'Immune System Support',
      'Personalized Nutrition Plans'
    ],
    color: 'from-green-600 to-emerald-600',
    iconBg: 'bg-green-100 text-green-700'
  },
  {
    icon: Zap,
    title: 'Specialized Techniques',
    description: 'Cutting-edge methods for lasting transformation and relief.',
    features: [
      'Nasal Release Therapy',
      'Functional Neurological Scans',
      'Individualized Care Plans',
      'Progress Tracking & Re-Exams',
      'Wellness Education'
    ],
    color: 'from-amber-600 to-orange-600',
    iconBg: 'bg-amber-100 text-amber-700'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-green-700 font-medium text-sm tracking-wide uppercase">
            How We Help
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Holistic Chiropractic Services in Charlotte, NC
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From personal injury recovery to chronic pain relief, we provide comprehensive holistic chiropractic care that addresses root causes, not just symptoms.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="p-8">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-8 w-full bg-gray-900 text-white py-3 rounded-full hover:bg-green-700 transition-colors font-medium"
                >
                  Book an Evaluation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
