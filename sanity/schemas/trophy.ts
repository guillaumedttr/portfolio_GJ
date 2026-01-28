export default {
    name: 'trophy',
    title: 'Trophies',
    type: 'document',
    fields: [
      {
        name: 'content',
        title: 'Liste des Trophées',
        type: 'array',
        of: [
          {
            type: 'block',
            // Ici on définit ce que tu as le droit de faire
            styles: [{ title: 'Normal', value: 'normal' }],
            lists: [], // On désactive les puces pour rester minimaliste
            marks: {
              decorators: [
                { title: 'Strong', value: 'strong' }, // Gras
                { title: 'Emphasis', value: 'em' }     // Italique
              ]
            }
          }
        ]
      }
    ]
  }