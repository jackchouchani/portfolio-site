'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { schemaTypes } from './src/lib/sanity/schemas';

// Importer les variables d'environnement
import { apiVersion, dataset, projectId } from './sanity/env';

export default defineConfig({
  name: 'default',
  title: 'Portfolio Blog',
  
  projectId,
  dataset,
  apiVersion,
  
  plugins: [
    deskTool(),
    visionTool(),
    codeInput(),
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  basePath: '/studio',
});
