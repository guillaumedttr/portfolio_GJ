import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'rb0ehitb',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true, // Change false par true ici
})