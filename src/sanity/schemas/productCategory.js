export default {
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  fields: [
    { name: 'order', title: 'Order', type: 'number', validation: (Rule) => Rule.required().min(1) },
    { name: 'key', title: 'URL Key', type: 'string', description: 'e.g. mangoes, oranges', validation: (Rule) => Rule.required() },
    { name: 'name', title: 'Display Name', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'products', title: 'Products', type: 'array', of: [{ type: 'productItem' }] },
  ],
};
