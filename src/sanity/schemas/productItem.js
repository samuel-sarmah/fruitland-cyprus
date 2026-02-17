export default {
  name: 'productItem',
  title: 'Product Item',
  type: 'object',
  fields: [
    { name: 'productId', title: 'Product ID', type: 'number', validation: (Rule) => Rule.required().min(1) },
    { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Description', type: 'text', rows: 4 },
    { name: 'characteristics', title: 'Characteristics', type: 'array', of: [{ type: 'string' }] },
    { name: 'season', title: 'Season', type: 'string' },
    { name: 'origin', title: 'Origin', type: 'string' },
  ],
};
