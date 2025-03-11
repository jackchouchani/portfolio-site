import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  apiVersion: '2023-10-01', // Utilisez une date récente
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config);

// Configuration pour les images Sanity
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  return builder.image(source);
}; 