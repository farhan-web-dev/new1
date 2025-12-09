import { Search, ClipboardList, Activity, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'The Discovery Visit',
    subtitle: 'Understanding Your Story',
    description: 'We start with a thorough consultation, advanced insight scans, and your first gentle adjustment. This is where we listen, learn, and begin to map your path to wellness.',
    features: ['Comprehensive consultation', 'Neurological scans', 'Initial adjustment']
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'The Game Plan',
    subtitle: 'Your Personalized Blueprint',
    description: 'We present your complete Report of Findings, explain what we discovered, and create a customized care plan designed specifically for your family\'s unique needs.',
    features: ['Detailed report review', 'Custom care plan', 'Education & goals']
  },
  {
    icon: Activity,
    number: '03',
    title: 'The Transformation',
    subtitle: 'Active Healing Phase',
    description: 'This is where the magic happens. Through consistent care, functional support, and regular progress tracking, we guide your body back to its natural state of health.',
    features: ['Regular adjustments', 'Progress tracking', 'Ongoing support']
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'The Revival',
    subtitle: 'Living Your Best Life',
    description: 'Once you\'ve achieved your health goals, we transition you into wellness care — maintaining vitality, preventing future issues, and celebrating your transformation.',
    features: ['Wellness maintenance', 'Re-exam milestones', 'Continued thriving']
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-green-400 font-medium text-sm tracking-wide uppercase">
            Your Journey to Wellness
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-6">
            What to Expect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every transformation follows a path. Here's how we guide your family from struggle to thriving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border-2 border-gray-800 hover:border-green-700 transition-all group"
            >
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-2xl font-bold">{step.number}</span>
              </div>

              <div className="mt-4">
                <div className="w-14 h-14 bg-green-700/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="text-green-400" size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-green-400 text-sm font-medium mb-4">
                  {step.subtitle}
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-700 to-emerald-700 p-12 rounded-3xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Revival?</h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Your transformation starts with a single step. Schedule your Discovery Visit and experience the Revival difference.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-green-700 px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-medium text-lg shadow-xl"
            >
              Schedule Your Discovery Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
