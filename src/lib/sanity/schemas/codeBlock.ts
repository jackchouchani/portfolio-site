export default {
  name: 'codeBlock',
  title: 'Code',
  type: 'object',
  fields: [
    {
      name: 'language',
      title: 'Langage',
      type: 'string',
      options: {
        list: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'SCSS', value: 'scss' },
          { title: 'PHP', value: 'php' },
          { title: 'Python', value: 'python' },
          { title: 'Bash', value: 'bash' },
          { title: 'JSON', value: 'json' },
          { title: 'Markdown', value: 'markdown' },
          { title: 'Autre', value: 'text' }
        ],
      },
    },
    {
      name: 'code',
      title: 'Code',
      type: 'text',
    },
    {
      name: 'filename',
      title: 'Nom du fichier',
      type: 'string',
      description: 'Optionnel: ajoutez un nom de fichier pour le bloc de code',
    },
  ],
  preview: {
    select: {
      language: 'language',
      code: 'code',
      filename: 'filename',
    },
    prepare(value: Record<string, any>) {
      const { language, code, filename } = value;
      const codePreview = code ? code.substring(0, 30) + '...' : '';
      
      // Définir une icône en fonction du langage
      let icon = '📄'; // Icône par défaut
      
      if (language === 'javascript') icon = '⚛️';
      else if (language === 'typescript') icon = 'TS';
      else if (language === 'html') icon = '🌐';
      else if (language === 'css' || language === 'scss') icon = '🎨';
      else if (language === 'php') icon = '🐘';
      else if (language === 'python') icon = '🐍';
      else if (language === 'bash') icon = '💻';
      else if (language === 'json') icon = '📋';
      
      return {
        title: filename || language || 'Code',
        subtitle: codePreview,
        media: icon
      };
    },
  },
}; 