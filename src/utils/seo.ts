import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  schema?: object;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
}

export const useSEO = ({
  title,
  description,
  canonical,
  ogImage = '/Revival-Family-Chiropractic-Logo-Field-Green-Rgb-900px-w-300ppi.png',
  ogType = 'website',
  keywords,
  schema,
  article,
}: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const metaTags: { [key: string]: string } = {
      description,
      'og:title': title,
      'og:description': description,
      'og:type': ogType,
      'og:image': `https://revivalfamilychiropractic.com${ogImage}`,
      'og:url': `https://revivalfamilychiropractic.com${location.pathname}`,
      'og:locale': 'en_US',
      'og:site_name': 'Revival Family Chiropractic',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': `https://revivalfamilychiropractic.com${ogImage}`,
      'twitter:site': '@revivalchiro',
      'thumbnail': `https://revivalfamilychiropractic.com${ogImage}`,
    };

    if (keywords) {
      metaTags.keywords = keywords;
    }

    if (article) {
      if (article.publishedTime) metaTags['article:published_time'] = article.publishedTime;
      if (article.modifiedTime) metaTags['article:modified_time'] = article.modifiedTime;
      if (article.author) metaTags['article:author'] = article.author;
      if (article.section) metaTags['article:section'] = article.section;
    }

    Object.entries(metaTags).forEach(([name, content]) => {
      const property = name.startsWith('og:') || name.startsWith('twitter:') || name.startsWith('article:') ? 'property' : 'name';
      let meta = document.querySelector(`meta[${property}="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(property, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    });

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical || `https://revivalfamilychiropractic.com${location.pathname}`;

    if (schema) {
      let schemaScript = document.querySelector('script[data-schema="page"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.setAttribute('data-schema', 'page');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }
  }, [title, description, canonical, ogImage, ogType, keywords, schema, article, location.pathname]);
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://revivalfamilychiropractic.com/#website',
  url: 'https://revivalfamilychiropractic.com',
  name: 'Revival Family Chiropractic',
  description: "Charlotte's premier holistic chiropractor specializing in personal injury recovery, pediatric care, prenatal wellness, and nervous system-focused treatment.",
  publisher: {
    '@id': 'https://revivalfamilychiropractic.com/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://revivalfamilychiropractic.com/?s={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-US',
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://revivalfamilychiropractic.com/#organization',
  name: 'Revival Family Chiropractic',
  url: 'https://revivalfamilychiropractic.com',
  logo: {
    '@type': 'ImageObject',
    '@id': 'https://revivalfamilychiropractic.com/#logo',
    url: 'https://revivalfamilychiropractic.com/Revival-Family-Chiropractic-Logo-Field-Green-Rgb-900px-w-300ppi.png',
    width: 900,
    height: 900,
    caption: 'Revival Family Chiropractic Logo',
  },
  image: {
    '@id': 'https://revivalfamilychiropractic.com/#logo',
  },
  description: "Charlotte's premier holistic chiropractor specializing in personal injury recovery, pediatric care, prenatal wellness, and nervous system-focused treatment.",
  sameAs: [
    'https://www.facebook.com/revivalfamilychiropractic',
    'https://www.instagram.com/revivalfamilychiropractic',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Chiropractor',
  '@id': 'https://revivalfamilychiropractic.com/#chiropractor',
  name: 'Revival Family Chiropractic',
  url: 'https://revivalfamilychiropractic.com',
  logo: 'https://revivalfamilychiropractic.com/Revival-Family-Chiropractic-Logo-Field-Green-Rgb-900px-w-300ppi.png',
  image: [
    'https://revivalfamilychiropractic.com/Revival-Family-Chiropractic-Logo-Field-Green-Rgb-900px-w-300ppi.png',
    'https://revivalfamilychiropractic.com/headshots.png',
  ],
  description: "Charlotte's premier holistic chiropractor specializing in personal injury recovery, pediatric care, prenatal wellness, and nervous system-focused treatment.",
  telephone: '(704) 568-2447',
  email: 'admin@chirobryan.com',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Insurance',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5527 Monroe Rd',
    addressLocality: 'Charlotte',
    addressRegion: 'NC',
    postalCode: '28270',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.1495,
    longitude: -80.7837,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/revivalfamilychiropractic',
    'https://www.instagram.com/revivalfamilychiropractic',
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Charlotte',
      '@id': 'https://en.wikipedia.org/wiki/Charlotte,_North_Carolina',
    },
    {
      '@type': 'City',
      name: 'Oakhurst',
    },
    {
      '@type': 'City',
      name: 'Matthews',
    },
    {
      '@type': 'City',
      name: 'Mint Hill',
    },
    {
      '@type': 'State',
      name: 'North Carolina',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Chiropractic Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Personal Injury Chiropractic Care',
          description: 'Specialized treatment for car accidents and personal injury recovery',
          procedureType: 'Therapeutic',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Pediatric Chiropractic',
          description: 'Gentle, safe chiropractic care for infants and children',
          procedureType: 'Therapeutic',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Prenatal Chiropractic',
          description: 'Specialized care for pregnant women and expecting mothers',
          procedureType: 'Therapeutic',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Neurological Chiropractic',
          description: 'Nervous system focused care for optimal health',
          procedureType: 'Therapeutic',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Functional Nutrition',
          description: 'Holistic nutrition guidance and wellness counseling',
          serviceType: 'Nutritional Counseling',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Free Consultation',
      description: 'Complimentary initial consultation for new patients',
      availability: 'https://schema.org/InStock',
    },
  ],
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://revivalfamilychiropractic.com/#doctor',
  name: 'Dr. Bryan',
  jobTitle: 'Doctor of Chiropractic',
  worksFor: {
    '@id': 'https://revivalfamilychiropractic.com/#chiropractor',
  },
  image: 'https://revivalfamilychiropractic.com/headshots.png',
  description: 'Board-certified chiropractor specializing in holistic family care, pediatric chiropractic, and nervous system-focused treatment.',
  alumniOf: 'Palmer College of Chiropractic',
  knowsAbout: [
    'Chiropractic',
    'Pediatric Chiropractic',
    'Prenatal Care',
    'Neurological Care',
    'Functional Nutrition',
    'Sports Medicine',
  ],
  sameAs: [
    'https://www.facebook.com/revivalfamilychiropractic',
    'https://www.instagram.com/revivalfamilychiropractic',
  ],
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://revivalfamilychiropractic.com${item.url}`,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const reviewSchema = (reviews: { author: string; rating: number; text: string; date: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://revivalfamilychiropractic.com/#organization',
  name: 'Revival Family Chiropractic',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: reviews.length.toString(),
    bestRating: '5',
    worstRating: '1',
  },
  review: reviews.map((review) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: review.text,
    datePublished: review.date,
  })),
});

export const articleSchema = (article: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  section: string;
  url: string;
  image?: string;
  wordCount?: number;
  keywords?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': article.url,
  headline: article.headline,
  description: article.description,
  image: article.image || 'https://revivalfamilychiropractic.com/Revival-Family-Chiropractic-Logo-Field-Green-Rgb-900px-w-300ppi.png',
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    '@type': 'Person',
    name: article.author,
    url: 'https://revivalfamilychiropractic.com/about',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://revivalfamilychiropractic.com/#organization',
    name: 'Revival Family Chiropractic',
    logo: {
      '@type': 'ImageObject',
      url: 'https://revivalfamilychiropractic.com/Revival-Family-Chiropractic-Logo-Field-Green-Rgb-900px-w-300ppi.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url,
  },
  articleSection: article.section,
  inLanguage: 'en-US',
  ...(article.wordCount && { wordCount: article.wordCount }),
  ...(article.keywords && { keywords: article.keywords.join(', ') }),
});

export const medicalConditionSchema = (condition: {
  name: string;
  description: string;
  possibleTreatment: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalCondition',
  name: condition.name,
  description: condition.description,
  possibleTreatment: condition.possibleTreatment.map((treatment) => ({
    '@type': 'MedicalTherapy',
    name: treatment,
  })),
  associatedAnatomy: {
    '@type': 'AnatomicalStructure',
    name: 'Spine',
  },
});
