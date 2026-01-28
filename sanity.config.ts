import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from './sanity/schemas/project';

export default defineConfig({
  name: 'default',
  title: 'Guillaume Portfolio Admin',
  projectId: 'rb0ehitb',
  dataset: 'production',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: [project],
  },
});