import Conditions from '../components/Conditions';
import { useSEO, breadcrumbSchema, faqSchema, medicalConditionSchema } from '../utils/seo';

export default function ConditionsPage() {
  useSEO({
    title: 'Conditions We Treat | Personal Injury, Sciatica, Migraines & More | Charlotte NC',
    description: 'Expert chiropractic treatment for personal injury, car accident injuries, neck pain, back pain, sciatica, migraines, headaches, sports injuries, and chronic pain in Charlotte, NC.',
    keywords: 'personal injury chiropractor charlotte, car accident injury treatment, sciatica treatment charlotte, migraine relief charlotte, neck pain treatment, back pain chiropractor, sports injury charlotte',
    canonical: 'https://revivalfamilychiropractic.com/conditions',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Conditions', url: '/conditions' },
        ]),
        faqSchema([
          {
            question: 'Can chiropractic care help with car accident injuries?',
            answer: 'Yes, chiropractic care is highly effective for treating car accident injuries including whiplash, neck pain, back pain, and soft tissue damage. We specialize in personal injury recovery and work with insurance companies to ensure you get the care you need.',
          },
          {
            question: 'How does chiropractic help with migraines?',
            answer: 'Chiropractic adjustments can reduce migraine frequency and intensity by addressing spinal misalignments and nervous system dysfunction that contribute to headaches. Many patients experience significant relief within a few weeks of treatment.',
          },
          {
            question: 'Is chiropractic care safe for sciatica?',
            answer: 'Chiropractic care is a safe and effective treatment for sciatica, addressing the root cause of nerve compression through gentle spinal adjustments and holistic care. We use evidence-based techniques to provide lasting relief.',
          },
          {
            question: 'What conditions can chiropractors treat?',
            answer: 'Chiropractors can treat a wide range of conditions including personal injury, car accident injuries, neck and back pain, sciatica, migraines, headaches, sports injuries, TMJ disorders, and various musculoskeletal conditions.',
          },
        ]),
        medicalConditionSchema({
          name: 'Sciatica',
          description: 'Sciatic nerve pain causing discomfort from the lower back through the legs',
          possibleTreatment: ['Chiropractic Adjustment', 'Spinal Decompression', 'Therapeutic Exercise'],
        }),
        medicalConditionSchema({
          name: 'Migraine',
          description: 'Severe headaches often accompanied by nausea, sensitivity to light and sound',
          possibleTreatment: ['Chiropractic Adjustment', 'Nutritional Counseling', 'Lifestyle Modification'],
        }),
        medicalConditionSchema({
          name: 'Whiplash',
          description: 'Neck injury from sudden movement, commonly from car accidents',
          possibleTreatment: ['Chiropractic Adjustment', 'Soft Tissue Therapy', 'Rehabilitation'],
        }),
      ],
    },
  });

  return (
    <main className="pt-20" role="main" aria-label="Conditions we treat">
      <Conditions />
    </main>
  );
}
