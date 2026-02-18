import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';

const builder = client ? imageUrlBuilder(client) : null;

export const urlFor = (source) => {
  if (!source || !builder) return '';
  return builder.image(source).auto('format').fit('max').url();
};
