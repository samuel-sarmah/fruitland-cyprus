export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    { name: 'heroTitle', title: 'Hero Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 2 },
    {
      name: 'founder',
      title: 'Founder Section',
      type: 'object',
      fields: [
        { name: 'sectionLabel', title: 'Section Label', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'paragraph1', title: 'Paragraph 1', type: 'text', rows: 4 },
        { name: 'paragraph2', title: 'Paragraph 2', type: 'text', rows: 4 },
        { name: 'founderName', title: 'Founder Name', type: 'string' },
        { name: 'founderRole', title: 'Founder Role', type: 'string' },
        { name: 'founderBio', title: 'Founder Bio', type: 'text', rows: 3 },
        { name: 'founderEmoji', title: 'Founder Emoji', type: 'string' },
      ],
    },
    {
      name: 'differentiators',
      title: 'What Makes Us Different',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Section Heading', type: 'string' },
        { name: 'subtitle', title: 'Section Subtitle', type: 'text', rows: 2 },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text', rows: 3 },
            ],
          }],
        },
      ],
    },
    {
      name: 'stats',
      title: 'Stats Section',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value (e.g. 50+)', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
        ],
      }],
    },
  ],
};
