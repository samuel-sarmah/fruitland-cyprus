export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteName', title: 'Site Name', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    {
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Label', type: 'string' },
          { name: 'href', title: 'Link', type: 'string' },
        ],
      }],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        { name: 'companyName', title: 'Company Name', type: 'string' },
        {
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'platform', title: 'Platform', type: 'string' },
              { name: 'url', title: 'URL', type: 'url' },
            ],
          }],
        },
        {
          name: 'quickLinks',
          title: 'Quick Links',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name', title: 'Label', type: 'string' },
              { name: 'href', title: 'Link', type: 'string' },
            ],
          }],
        },
        { name: 'address', title: 'Address Line 1', type: 'string' },
        { name: 'addressLine2', title: 'Address Line 2', type: 'string' },
        {
          name: 'phoneNumbers',
          title: 'Phone Numbers',
          type: 'array',
          of: [{ type: 'string' }],
        },
        { name: 'email', title: 'Email', type: 'string' },
      ],
    },
  ],
};
