import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          { title: 'Jewelry', value: 'jewelry' },
          { title: 'Apparel', value: 'apparel' },
          { title: 'Accessories', value: 'accessories' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Product Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'variants',
      title: 'Product Variants',
      type: 'array',
      of: [{ type: 'productVariant' }],
    }),
    defineField({
      name: 'basePrice',
      title: 'Base Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'compareAtPrice',
      title: 'Compare at Price',
      type: 'number',
      description: 'Original price for sale items',
    }),
    defineField({
      name: 'isOnSale',
      title: 'On Sale',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'salePercentage',
      title: 'Sale Percentage',
      type: 'number',
      description: 'Percentage off (e.g., 20 for 20% off)',
      hidden: ({ document }) => !document?.isOnSale,
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Gold', 'Silver', 'Rose Gold', 'Platinum', 'Sterling Silver',
          'Brass', 'Copper', 'Leather', 'Cotton', 'Silk', 'Wool', 'Linen',
          'Polyester', 'Acrylic', 'Glass', 'Pearl', 'Crystal', 'Diamond',
          'Gemstone', 'Wood', 'Bamboo',
        ],
      },
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          // Clothing sizes
          'XS', 'S', 'M', 'L', 'XL', 'XXL',
          // Jewelry sizes
          '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10',
          // Ring sizes
          '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12',
          // One size
          'One Size',
        ],
      },
    }),
    defineField({
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Color Name',
              type: 'string',
            },
            {
              name: 'hex',
              title: 'Hex Code',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'careInstructions',
      title: 'Care Instructions',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Whether this product is available for purchase',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Order in which products appear (lower numbers first)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      productType: 'productType',
      category: 'category.title',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title, productType, category, media } = selection
      return {
        title,
        subtitle: `${productType} • ${category || 'No Category'}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Title Z-A',
      name: 'titleDesc',
      by: [{ field: 'title', direction: 'desc' }],
    },
    {
      title: 'Price Low-High',
      name: 'priceAsc',
      by: [{ field: 'basePrice', direction: 'asc' }],
    },
    {
      title: 'Price High-Low',
      name: 'priceDesc',
      by: [{ field: 'basePrice', direction: 'desc' }],
    },
    {
      title: 'Sort Order',
      name: 'sortOrder',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
}) 