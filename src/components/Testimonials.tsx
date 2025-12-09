import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Mom of 2',
    text: 'Our son struggled with focus and sleep for years. After just a few months at Revival, he\'s a different kid — sleeping through the night, excelling in school, and so much happier. Dr. Bryan truly cares about getting to the root cause.',
    rating: 5
  },
  {
    name: 'Jennifer L.',
    role: 'Expectant Mother',
    text: 'I was dealing with terrible back pain during my pregnancy. Dr. Bryan\'s prenatal care made such a difference — I felt supported, comfortable, and confident going into delivery. I can\'t recommend Revival enough for moms-to-be.',
    rating: 5
  },
  {
    name: 'Marcus T.',
    role: 'Former Chronic Pain Patient',
    text: 'I lived with migraines and neck pain for over a decade. I tried everything. Revival\'s neurological approach finally gave me answers and real relief. I wish I had found them years ago.',
    rating: 5
  },
  {
    name: 'The Anderson Family',
    role: 'Family of 5',
    text: 'We started coming as a family for our daughter\'s sensory issues, but we all benefited. Now we see Dr. Bryan regularly for wellness care. It\'s become an essential part of how we stay healthy and connected.',
    rating: 5
  },
  {
    name: 'David K.',
    role: 'Business Owner',
    text: 'I was exhausted, stressed, and barely functioning. The holistic approach at Revival — chiropractic care plus nutrition support — completely transformed my energy and mental clarity. I feel 10 years younger.',
    rating: 5
  },
  {
    name: 'Rachel W.',
    role: 'Mom & TMJ Patient',
    text: 'My jaw pain was unbearable. I couldn\'t eat without discomfort. Dr. Bryan\'s specialized TMJ care gave me my life back. The entire team is compassionate, knowledgeable, and truly invested in your healing.',
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-green-700 font-medium text-sm tracking-wide uppercase">
            Real Stories, Real Results
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Stories of Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the families who have found hope, healing, and renewed vitality at Revival Family Chiropractic.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 shadow-xl">
            <Quote className="text-green-700 opacity-20 mb-6" size={64} />

            <div className="mb-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={24} />
                ))}
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-green-700 hover:text-white transition-colors shadow-lg"
                >
                  ←
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-green-700 hover:text-white transition-colors shadow-lg"
                >
                  →
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-green-700' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900 text-white p-12 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4">See How Real Families Have Found Hope & Healing</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of Charlotte families who have discovered natural, lasting wellness at Revival.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 font-medium shadow-lg"
              >
                Start Your Transformation
              </button>
              <button
                onClick={() => window.open('https://www.google.com/maps', '_blank')}
                className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-medium shadow-lg"
              >
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
