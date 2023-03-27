import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image of Category',
      type: 'image',
    }),
  ],
})
