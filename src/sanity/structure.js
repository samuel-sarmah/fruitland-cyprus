// Singleton types — only one document of each type should exist
const SINGLETON_TYPES = ['aboutPage', 'contactPage', 'ctaSection', 'siteSettings']

// Helper: create a list item that opens directly to a single document editor
const singletonListItem = (S, typeName, title) =>
  S.listItem()
    .title(title)
    .id(typeName)
    .child(
      S.document()
        .schemaType(typeName)
        .documentId(typeName)
        .title(title)
    )

export const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
export const singletonTypes = new Set(SINGLETON_TYPES)

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
      // Singleton pages — click to edit directly
      singletonListItem(S, 'aboutPage', 'About Page'),
      singletonListItem(S, 'contactPage', 'Contact Page'),
      singletonListItem(S, 'ctaSection', 'CTA Section'),
      S.divider(),
      // Settings
      singletonListItem(S, 'siteSettings', 'Site Settings'),
    ])
