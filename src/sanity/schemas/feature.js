export default {
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
    { name: 'order', title: 'Order', type: 'number', validation: (Rule) => Rule.required().min(1) },
    { name: 'icon', title: 'Icon (Emoji)', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
  ],
};
