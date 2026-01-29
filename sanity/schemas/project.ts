export default {
  name: 'project',
  title: 'Projets',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titre du Projet', type: 'string' },
    { name: 'client', title: 'Client', type: 'string' },
    { 
      name: 'description', 
      title: 'Description / Paragraphe', 
      type: 'array', 
      of: [{ type: 'block' }] // Ceci active l'éditeur de texte riche (Gras, sauts de ligne)
    },
    {
      name: 'slug',
      title: 'Lien URL (Slug)',
      type: 'slug',
      options: { source: 'title' },
    },
    { name: 'videoFile', title: 'Vidéo Vignette (Page Accueil)', type: 'file', options: { accept: 'video/mp4' } },
    { name: 'image', title: 'Image Vignette (Page Accueil)', type: 'image', options: { hotspot: true } },
    
    // Crédits
    { name: 'agency', title: 'Agency', type: 'string' },
    { name: 'creativeDirector', title: 'Creative Director', type: 'string' },
    { name: 'director', title: 'Director', type: 'string' },
    { name: 'production', title: 'Production', type: 'string' }, // Renommé ici
    { name: 'dop', title: 'DOP', type: 'string' },
    { name: 'photographer', title: 'Photographer', type: 'string' }, // Nouveau champ ajouté
    
    {
      name: 'gallery',
      title: 'Galerie du projet (Contenu page détail)',
      type: 'array',
      of: [
        { type: 'image', options: { hotspot: true }, title: 'Photo' },
        {
          type: 'object',
          name: 'videoItem',
          title: 'Vidéo',
          fields: [
            { name: 'videoFile', type: 'file', title: 'Fichier Vidéo MP4', options: { accept: 'video/mp4' } }
          ]
        }
      ]
    }
  ]
}