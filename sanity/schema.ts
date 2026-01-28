import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/project'
import trophy from './schemas/trophy' // La ligne qui doit être propre

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, trophy],
}