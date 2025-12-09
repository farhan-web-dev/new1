import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedTestimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      condition: 'Chronic Back Pain',
      text: 'After years of back pain, I finally found relief at Revival. Dr. Johnson\'s approach is thorough and genuinely caring. I can play with my kids again without pain!',
      rating: 5
    },
    {
      name: 'Michael T.',
      condition: 'Sports Injury',
      text: 'As an athlete, I need to stay in peak condition. The team at Revival keeps me performing at my best and recovers me quickly when injuries happen.',
      rating: 5
    },
    {
      name: 'Jennifer L.',
      condition: 'Pregnancy Care',
      text: 'The prenatal care I received made such a difference in my pregnancy. I had less discomfort and a smoother delivery than my first pregnancy.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Stories, Real Results
          </h2>
          <p className="text-xl text-gray-600">
            Hear from families who have transformed their health with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.condition}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/testimonials"
            className="inline-block text-green-700 font-medium hover:text-green-800 transition-colors"
          >
            Read More Success Stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
