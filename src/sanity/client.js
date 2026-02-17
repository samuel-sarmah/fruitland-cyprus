import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId, useCdn } from './env';

export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;
