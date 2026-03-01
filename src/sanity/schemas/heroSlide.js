export default {
  name: 'heroSlide',
  title: 'Hero Slide',
  type: 'document',
  fields: [
    { name: 'order', title: 'Order', type: 'number', validation: (Rule) => Rule.required().min(1) },
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3 },
    { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() },
    { name: 'ctaText', title: 'Button Text', type: 'string' },
    { name: 'ctaLink', title: 'Button Link', type: 'string' },
  ],
};
