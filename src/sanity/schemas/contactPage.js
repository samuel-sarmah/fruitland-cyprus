export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    { name: 'heroTitle', title: 'Hero Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 2 },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'platform', title: 'Platform', type: 'string', options: { list: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter'] } },
          { name: 'url', title: 'URL', type: 'url' },
        ],
      }],
    },
    { name: 'formSuccessMessage', title: 'Form Success Message', type: 'string' },
  ],
};
