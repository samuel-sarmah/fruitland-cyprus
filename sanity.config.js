/**
 * This configuration is used by the hosted Sanity Studio deployment.
 */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure, singletonTypes, singletonActions} from './src/sanity/structure'

export default defineConfig({
  basePath: '/',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` set (publish, discardChanges, restore)
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    structureTool({structure}),
  ],
})
