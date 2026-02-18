export default {
  name: 'productItem',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'productId', title: 'Product ID', type: 'number', description: 'Unique numeric ID for this product', validation: (Rule) => Rule.required().min(1) },
    { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'category', title: 'Category', type: 'reference', to: [{ type: 'productCategory' }], description: 'Which category this product belongs to', validation: (Rule) => Rule.required() },
    { name: 'order', title: 'Order', type: 'number', description: 'Display order within its category' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Description', type: 'text', rows: 4 },
    { name: 'characteristics', title: 'Characteristics', type: 'array', of: [{ type: 'string' }] },
    { name: 'season', title: 'Season', type: 'string' },
    { name: 'origin', title: 'Origin', type: 'string' },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'season',
      media: 'image',
    },
  },
  orderings: [
    { title: 'Product ID', name: 'productIdAsc', by: [{ field: 'productId', direction: 'asc' }] },
    { title: 'Name', name: 'nameAsc', by: [{ field: 'name', direction: 'asc' }] },
  ],
};
