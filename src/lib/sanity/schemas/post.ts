export default {
  name: 'post',
  title: 'Articles de Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      description: 'Un court résumé de l\'article',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'author',
      title: 'Auteur',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'authorImage',
      title: 'Image de l\'auteur',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'categories',
      title: 'Catégories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'readingTime',
      title: 'Temps de lecture',
      type: 'string',
      description: 'Ex: "5 min"',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Légende',
              options: {
                isHighlighted: true
              }
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif',
              options: {
                isHighlighted: true
              }
            }
          ]
        },
        {
          type: 'codeBlock',
          title: 'Code',
        }
      ]
    },
    {
      name: 'featured',
      title: 'Article à la une',
      type: 'boolean',
      description: 'Mettre cet article en avant sur la page principale',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage'
    }
  }
}; 