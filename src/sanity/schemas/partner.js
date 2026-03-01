export default {
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    { name: 'order', title: 'Order', type: 'number', validation: (Rule) => Rule.required().min(1) },
    { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
  ],
};
