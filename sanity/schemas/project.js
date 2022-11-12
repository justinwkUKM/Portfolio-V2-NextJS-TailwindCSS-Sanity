export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title of the project',
      type: 'string',
    },
   
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type:'text'
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type:'array',
      of: [{type:'reference', to:{type:'skill'}}]
    },
    {
      name: 'linkToBuild',
      title: 'Link To Build',
      type:'url',
    },
    // {
      //   name: 'categories',
      //   title: 'Categories',
      //   type: 'array',
      //   of: [{type: 'reference', to: {type: 'category'}}],
      // },
      // {
        //   name: 'publishedAt',
        //   title: 'Published at',
        //   type: 'datetime',
        // },
        // {
          //   name: 'body',
          //   title: 'Body',
          //   type: 'blockContent',
          // },
          // {
          //   name: 'slug',
          //   title: 'Slug',
          //   type: 'slug',
          //   options: {
          //     source: 'title',
          //     maxLength: 96,
          //   },
          // },
        ],
        
        // preview: {
          //   select: {
            //     title: 'title',
            //     author: 'author.name',
            //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`,
  //     })
  //   },
  // },
}
