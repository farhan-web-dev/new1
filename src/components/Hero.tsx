import { Heart, Brain, Sprout } from 'lucide-react';

interface HeroProps {
  onScheduleClick: () => void;
}

export default function Hero({ onScheduleClick }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-green-700 font-medium text-sm tracking-wide uppercase">
                Charlotte's Premier Holistic Family Wellness Center
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Neurologically-Focused Chiropractic Care + <span className="text-green-700">Functional Nutrition</span> for Lasting Vitality
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Revival Family Chiropractic delivers a higher level of holistic care for families in Charlotte seeking clarity, energy, and long-term wellness. Our approach blends gentle, nervous-system–focused chiropractic adjustments with personalized functional nutrition to help you calm stress, restore balance, and feel your absolute best — naturally.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-green-700 pl-4">
              Discover a wellness experience designed for families who want results, not quick fixes. From kids with focus and sensory challenges to adults navigating stress, fatigue, and inflammation, we help your whole family thrive with care rooted in science, compassion, and real outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onScheduleClick}
                className="bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition-all transform hover:scale-105 font-medium text-lg shadow-lg"
              >
                Schedule Your First Visit
              </button>
              <button
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-green-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all border-2 border-green-700 font-medium text-lg"
              >
                Learn How It Works
              </button>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="text-green-700" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">10+ Years</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="text-blue-700" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">400+</p>
                  <p className="text-sm text-gray-600">Happy Families</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <Sprout className="text-green-700" size={48} />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">Body • Brain • Beyond</p>
                  <p className="text-gray-700">Natural healing for every generation</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-700 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-700 rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
