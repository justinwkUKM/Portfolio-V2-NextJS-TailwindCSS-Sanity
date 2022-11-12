export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title of the skill',
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
      name: 'progress',
      title: 'Progress',
      type:'number',
      description:'Progress of skill from 0 to 100%',
      validation: (Rule) => Rule.min(0).max(100)
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
