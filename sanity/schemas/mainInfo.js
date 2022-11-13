export default {
  name: 'mainInfo',
  title: 'Main Info',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'backgroundInformation',
      title: 'Background Information',
      type: 'string'
    },
    {
      name: 'profilePic',
      title: 'Profile Pic',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'url'
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }]
    },
  ]
}
