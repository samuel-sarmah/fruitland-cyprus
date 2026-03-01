import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from './client';

const builder = client ? createImageUrlBuilder(client) : null;

export const urlFor = (source) => {
  if (!source || !builder) return '';
  return builder.image(source).auto('format').fit('max').url();
};
