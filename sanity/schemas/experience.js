export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type:'text'
    },
    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'dateStarted',
      title: 'Date Started',
      type:'date'
    },
    {
      name: 'dateEnded',
      title: 'Date Ended',
      type:'date'
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type:'boolean'
    },
    {
      name: 'skills',
      title: 'Skills',
      type:'array',
      of: [{type:'reference',  to:{type:'skill'}}]
    },
    {
      name: 'points',
      title: 'Points',
      type:'array',
      of:[{type:"string"}]
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
