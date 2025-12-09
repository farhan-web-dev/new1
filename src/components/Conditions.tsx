const conditions = [
  {
    name: 'ADHD & Focus Issues',
    description: 'Help your child regain focus and calm through neurological balance and natural support.',
    category: 'Pediatric'
  },
  {
    name: 'Sensory Processing',
    description: 'Support sensory integration challenges with gentle, brain-focused care.',
    category: 'Pediatric'
  },
  {
    name: 'Autism Spectrum Support',
    description: 'Complementary care that supports communication, behavior, and overall development.',
    category: 'Pediatric'
  },
  {
    name: 'Anxiety & Overwhelm',
    description: 'Calm your nervous system and find relief from stress and emotional fatigue.',
    category: 'Mental Health'
  },
  {
    name: 'Concussion Recovery',
    description: 'Specialized protocols to support brain healing and reduce post-concussion symptoms.',
    category: 'Neurological'
  },
  {
    name: 'Memory & Brain Function',
    description: 'Support cognitive health, memory, and mental clarity through neurological optimization.',
    category: 'Neurological'
  },
  {
    name: 'Brain Support & Mental Resilience',
    description: 'Enhance brain performance, focus, and mental resilience with targeted neurological care.',
    category: 'Neurological'
  },
  {
    name: 'Autoimmune Conditions',
    description: 'Natural support for autoimmune disorders through holistic healing and functional nutrition.',
    category: 'Holistic Nutrition'
  },
  {
    name: 'Hormone Imbalances',
    description: 'Balance hormones naturally with comprehensive functional care and nutritional support.',
    category: 'Holistic Nutrition'
  },
  {
    name: 'Sleep Challenges',
    description: 'Restore natural sleep patterns for better rest and recovery, for all ages.',
    category: 'Holistic Nutrition'
  },
  {
    name: 'Low Energy & Fatigue',
    description: 'Uncover the root causes and restore vitality through holistic, functional care.',
    category: 'Holistic Nutrition'
  },
  {
    name: 'Immune Challenges',
    description: 'Strengthen your body\'s natural defenses and reduce frequent illness.',
    category: 'Holistic Nutrition'
  },
  {
    name: 'TMJ & Jaw Pain',
    description: 'Relief from jaw pain, clicking, and tension through specialized chiropractic techniques.',
    category: 'Pain'
  },
  {
    name: 'Hand & Wrist Pain',
    description: 'Treatment for carpal tunnel, repetitive strain injuries, and hand dysfunction.',
    category: 'Pain'
  },
  {
    name: 'Foot & Ankle Conditions',
    description: 'Comprehensive care for plantar fasciitis, foot pain, and ankle injuries.',
    category: 'Pain'
  },
  {
    name: 'Personal Injury & Car Accidents',
    description: 'Specialized chiropractic treatment for personal injury and auto accident recovery in Charlotte.',
    category: 'Injury Recovery'
  },
  {
    name: 'Work Injuries',
    description: 'Expert care for workplace injuries with documentation support and rehabilitation.',
    category: 'Injury Recovery'
  },
  {
    name: 'Neck Pain',
    description: 'Holistic treatment for chronic and acute neck pain, whiplash, and cervical spine issues.',
    category: 'Pain'
  },
  {
    name: 'Back Pain & Sciatica',
    description: 'Comprehensive care for lower back pain, sciatica, and lumbar spine conditions.',
    category: 'Pain'
  },
  {
    name: 'Migraines & Chronic Headaches',
    description: 'Natural migraine relief and headache treatment addressing root neurological causes.',
    category: 'Pain'
  },
  {
    name: 'Digestive Issues',
    description: 'Support gut health through the brain-gut connection and functional nutrition.',
    category: 'Holistic Nutrition'
  },
  {
    name: 'Chronic Inflammation',
    description: 'Address systemic inflammation through holistic healing and targeted nutrition.',
    category: 'Holistic Nutrition'
  }
];

const categories = ['All', 'Injury Recovery', 'Pain', 'Pediatric', 'Holistic Nutrition', 'Neurological', 'Mental Health'];

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Conditions() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConditions = conditions.filter(condition => {
    const matchesCategory = selectedCategory === 'All' || condition.category === selectedCategory;
    const matchesSearch = condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          condition.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="conditions" className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-green-700 font-medium text-sm tracking-wide uppercase">
            How We Can Help
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Neurological, Pain, and Family Wellness Conditions We Support in Charlotte
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            At Revival Family Chiropractic, we help children and adults restore balance, reduce pain, and improve overall function by focusing on the health of the nervous system. Whether you're dealing with chronic neck or back pain, sciatica, headaches, migraines, TMJ issues, stress-related symptoms, or emotional and sensory challenges, our care is designed to address the root cause — not just the surface problem.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
            We specialize in conditions connected to nervous system dysregulation, including focus and behavioral challenges in kids, anxiety and burnout in adults, sleep issues, inflammation, and gut-brain imbalance. Our approach blends gentle chiropractic adjustments with functional nutrition to support healing, energy, and whole-family vitality.
          </p>
          <p className="text-lg text-gray-800 max-w-4xl mx-auto font-medium">
            If you're looking for natural, long-lasting solutions for pain, stress, or neurological issues, we're here to help you move forward with clarity and confidence.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search conditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-full focus:border-green-700 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-green-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((condition, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-green-700 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  {condition.name}
                </h3>
                <span className="text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                  {condition.category}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {condition.description}
              </p>
            </div>
          ))}
        </div>

        {filteredConditions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No conditions found matching your search.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Don't see your condition listed?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition-all transform hover:scale-105 font-medium shadow-lg"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
