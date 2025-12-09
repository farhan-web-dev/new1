import Testimonials from '../components/Testimonials';
import { useSEO, breadcrumbSchema, reviewSchema } from '../utils/seo';

export default function TestimonialsPage() {
  const reviews = [
    {
      author: 'Sarah M.',
      rating: 5,
      text: 'Dr. Bryan has been a game-changer for our family! My daughter had constant ear infections, and after just a few adjustments, she\'s been infection-free for six months. We couldn\'t be more grateful!',
      date: '2025-10-15',
    },
    {
      author: 'Michael T.',
      rating: 5,
      text: 'I came in after a car accident with severe neck pain and headaches. Dr. Bryan\'s holistic approach not only relieved my pain but helped me understand how to maintain my health long-term.',
      date: '2025-09-22',
    },
    {
      author: 'Jessica L.',
      rating: 5,
      text: 'Finding Revival Family Chiropractic during my pregnancy was a blessing. Dr. Bryan made me feel comfortable and supported throughout my entire pregnancy.',
      date: '2025-08-10',
    },
  ];

  useSEO({
    title: 'Patient Success Stories | Revival Family Chiropractic Reviews | Charlotte NC',
    description: 'Read real testimonials from Charlotte families who found healing and wellness through holistic chiropractic care. 5-star rated chiropractor serving Oakhurst and Greater Charlotte.',
    keywords: 'chiropractor reviews charlotte, chiropractic testimonials charlotte, best chiropractor charlotte, patient reviews revival family chiropractic',
    canonical: 'https://revivalfamilychiropractic.com/testimonials',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Testimonials', url: '/testimonials' },
        ]),
        reviewSchema(reviews),
      ],
    },
  });

  return (
    <main className="pt-20" role="main" aria-label="Patient testimonials">
      <Testimonials />
    </main>
  );
}
