/**
 * This page renders the Sanity Studio UI
 * Accessible at: http://localhost:3000/studio
 */

'use client'

import { Studio } from 'sanity'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return <Studio config={config} />
}
