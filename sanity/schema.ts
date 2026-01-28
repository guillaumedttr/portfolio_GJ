import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/project'
import trophy from './schemas/trophy'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, trophy],
}