import Hero from '../components/Hero';
import Process from '../components/Process';
import WhoWeServe from '../components/WhoWeServe';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedTestimonials from '../components/FeaturedTestimonials';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import { useNavigate } from 'react-router-dom';
import { useSEO, localBusinessSchema, websiteSchema, personSchema, breadcrumbSchema, faqSchema } from '../utils/seo';

export default function HomePage() {
  const navigate = useNavigate();

  const faqs = [
    {
      question: 'What conditions do you treat at Revival Family Chiropractic?',
      answer: 'We specialize in nervous system-focused care that helps with a wide range of conditions including chronic pain, migraines, sports injuries, car accident recovery, pregnancy discomfort, pediatric health issues, and stress-related conditions. Our holistic approach combines chiropractic adjustments with functional nutrition to address root causes.',
    },
    {
      question: 'Is chiropractic care safe for babies and children?',
      answer: 'Absolutely! Pediatric chiropractic care uses gentle, age-appropriate techniques specifically designed for infants and children. Our approaches are safe and can help with common childhood issues like colic, ear infections, developmental delays, and sleep problems. We have specialized training in pediatric care.',
    },
    {
      question: 'Do you accept insurance for chiropractic services?',
      answer: 'Yes, we accept most major insurance plans including personal injury and auto accident coverage. We also offer flexible payment options for those without insurance. Contact our office to verify your specific coverage and discuss payment options.',
    },
    {
      question: 'How is your approach different from traditional chiropractic care?',
      answer: 'We focus on nervous system-centered care combined with functional nutrition. Rather than just treating symptoms, we identify and address the root causes of health issues. Our holistic approach includes comprehensive assessments, personalized nutrition guidance, and gentle adjustments designed to restore your body\'s natural ability to heal.',
    },
    {
      question: 'What should I expect during my first visit?',
      answer: 'Your first visit includes a comprehensive consultation, health history review, and examination to understand your unique needs. We\'ll discuss your health goals and create a personalized care plan. Many patients receive their first gentle adjustment during this visit. The entire appointment typically takes 45-60 minutes.',
    },
    {
      question: 'How many visits will I need to see results?',
      answer: 'Every patient is unique, but many people notice improvements within the first few visits. Acute conditions may resolve in weeks, while chronic issues often require ongoing care. We develop personalized treatment plans and regularly assess your progress to ensure you\'re getting optimal results.',
    },
  ];

  useSEO({
    title: 'Revival Family Chiropractic | Calm Your Nervous System | Charlotte NC Holistic Wellness',
    description: "Experience holistic chiropractic care that calms and balances your nervous system. Gentle, nervous system-focused adjustments combined with functional nutrition for Charlotte families. Natural wellness for every generation.",
    keywords: 'nervous system chiropractic charlotte, holistic chiropractor charlotte, calm nervous system, pediatric chiropractor charlotte, prenatal chiropractor, nervous system health, family wellness charlotte, functional nutrition charlotte, holistic health charlotte',
    canonical: 'https://revivalfamilychiropractic.com',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        websiteSchema,
        localBusinessSchema,
        personSchema,
        breadcrumbSchema([{ name: 'Home', url: '/' }]),
        faqSchema(faqs),
      ],
    },
  });

  return (
    <main role="main" aria-label="Home page">
      <Hero onScheduleClick={() => navigate('/contact')} />
      <Process />
      <WhoWeServe />
      <WhyChooseUs />
      <FeaturedTestimonials />
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our holistic chiropractic care
            </p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>
      <CTASection />
    </main>
  );
}
