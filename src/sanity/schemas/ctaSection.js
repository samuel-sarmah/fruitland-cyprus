export default {
  name: 'ctaSection',
  title: 'Call to Action Section',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'primaryButtonText', title: 'Primary Button Text', type: 'string' },
    { name: 'primaryButtonLink', title: 'Primary Button Link', type: 'string' },
    { name: 'secondaryButtonText', title: 'Secondary Button Text', type: 'string' },
    { name: 'secondaryButtonLink', title: 'Secondary Button Link', type: 'string' },
  ],
};
