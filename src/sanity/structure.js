// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Homepage
      S.listItem()
        .title('Homepage')
        .child(
          S.list()
            .title('Homepage Sections')
            .items([
              S.documentTypeListItem('heroSlide').title('Hero Slides'),
              S.documentTypeListItem('feature').title('Features'),
              S.documentTypeListItem('partner').title('Partners'),
              S.documentTypeListItem('ctaSection').title('CTA Section'),
            ])
        ),
      // Products
      S.listItem()
        .title('Products')
        .child(
          S.list()
            .title('Products')
            .items([
              S.documentTypeListItem('productCategory').title('Categories'),
              S.documentTypeListItem('productItem').title('All Products'),
            ])
        ),
      S.divider(),
      // Pages
      S.documentTypeListItem('aboutPage').title('About Page'),
      S.documentTypeListItem('contactPage').title('Contact Page'),
      S.divider(),
      // Settings
      S.documentTypeListItem('siteSettings').title('Site Settings'),
    ])
