import React from 'react';

interface ProjectStructuredDataProps {
  title: string;
  description: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  publisherName: string;
  publisherLogo: string;
}

export function ProjectStructuredData({
  title,
  description,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
  publisherName,
  publisherLogo,
}: ProjectStructuredDataProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

interface FAQStructuredDataProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQStructuredData({ questions }: FAQStructuredDataProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

interface ServiceStructuredDataProps {
  serviceName: string;
  description: string;
  provider: string;
  providerUrl: string;
  imageUrl: string;
  price?: string;
}

export function ServiceStructuredData({
  serviceName,
  description,
  provider,
  providerUrl,
  imageUrl,
  price,
}: ServiceStructuredDataProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: providerUrl,
    },
    image: imageUrl,
    ...(price && { offers: { '@type': 'Offer', price, priceCurrency: 'EUR' } }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

interface WebsiteStructuredDataProps {
  websiteName: string;
  websiteUrl: string;
}

export function WebsiteStructuredData({ websiteName, websiteUrl }: WebsiteStructuredDataProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: websiteName,
    url: websiteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${websiteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
} 