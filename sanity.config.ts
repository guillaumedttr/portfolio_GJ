import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// On importe le fichier central que tu as déplacé à la racine de /sanity
import { schema } from './sanity/schema';

export default defineConfig({
  name: 'default',
  title: 'Guillaume Portfolio Admin',
  projectId: 'rb0ehitb',
  dataset: 'production',
  basePath: '/admin', // Ton studio est donc à l'adresse /admin
  plugins: [deskTool()],
  schema: schema, // On utilise maintenant l'objet schema qui contient project ET trophy
});