import { Award, Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl shadow-2xl overflow-hidden relative">
              <img
                src="/headshots.png"
                alt="Dr. Bryan Pries - Founder & Lead Chiropractor at Revival Family Chiropractic"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-8">
                <p className="text-2xl font-bold text-white">Dr. Bryan Pries</p>
                <p className="text-lg text-green-400 mt-1">Founder & Lead Chiropractor</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-700 rounded-full opacity-20 blur-3xl"></div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-green-700 font-medium text-sm tracking-wide uppercase">
                Meet Dr. Bryan
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
                A New Chapter in Holistic Family Care
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              With over 10 years of experience in chiropractic care, Dr. Bryan Pries has dedicated his career to helping families discover true wellness. When he took over Thomas Chiropractic, he saw an opportunity to transform it into something more — a place where holistic healing, advanced neurological care, and functional nutrition come together.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              At Revival Family Chiropractic, we believe your body was designed to heal itself. Our mission is to remove the interference, restore balance, and help you thrive — naturally, without drugs or guesswork.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-green-700" size={24} />
                </div>
                <p className="font-bold text-gray-900 text-lg">10+ Years</p>
                <p className="text-sm text-gray-600">Practice Excellence</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-blue-700" size={24} />
                </div>
                <p className="font-bold text-gray-900 text-lg">Family First</p>
                <p className="text-sm text-gray-600">Care Approach</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-amber-700" size={24} />
                </div>
                <p className="font-bold text-gray-900 text-lg">Whole Body</p>
                <p className="text-sm text-gray-600">Wellness Focus</p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition-all transform hover:scale-105 font-medium shadow-lg"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
