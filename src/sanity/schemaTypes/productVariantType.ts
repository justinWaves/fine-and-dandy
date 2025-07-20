import { defineField, defineType } from 'sanity'

export const productVariantType = defineType({
  name: 'productVariant',
  title: 'Product Variant',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Variant Name',
      type: 'string',
      description: 'e.g., "Gold Hoop Earrings", "Silver Studs", "Blue Dress"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
      description: 'Stock Keeping Unit - unique identifier',
    }),
    defineField({
      name: 'price',
      title: 'Price',
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
      name: 'image',
      title: 'Variant Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'attributes',
      title: 'Variant Attributes',
      type: 'object',
      fields: [
        {
          name: 'material',
          title: 'Material',
          type: 'string',
          options: {
            list: [
              'Gold', 'Silver', 'Rose Gold', 'Platinum', 'Sterling Silver',
              'Brass', 'Copper', 'Glass', 'Pearl', 'Crystal', 'Diamond',
              'Gemstone', 'Leather', 'Cotton', 'Silk', 'Wool', 'Linen',
              'Polyester', 'Acrylic', 'Wood', 'Bamboo',
            ],
          },
        },
        {
          name: 'color',
          title: 'Color',
          type: 'string',
        },
        {
          name: 'size',
          title: 'Size',
          type: 'string',
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
        },
        {
          name: 'fit',
          title: 'Fit (Apparel)',
          type: 'string',
          options: {
            list: ['Slim', 'Regular', 'Relaxed', 'Oversized'],
          },
        },
        {
          name: 'weight',
          title: 'Weight (grams)',
          type: 'number',
        },
        {
          name: 'dimensions',
          title: 'Dimensions',
          type: 'object',
          fields: [
            { name: 'length', title: 'Length (cm)', type: 'number' },
            { name: 'width', title: 'Width (cm)', type: 'number' },
            { name: 'height', title: 'Height (cm)', type: 'number' },
          ],
        },
      ],
    }),
    defineField({
      name: 'inventory',
      title: 'Inventory',
      type: 'object',
      fields: [
        {
          name: 'quantity',
          title: 'Quantity in Stock',
          type: 'number',
          initialValue: 0,
        },
        {
          name: 'lowStock',
          title: 'Low Stock Alert',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'outOfStock',
          title: 'Out of Stock',
          type: 'boolean',
          initialValue: false,
        },
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Whether this variant is available for purchase',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Order in which variants appear',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      price: 'price',
      material: 'attributes.material',
      size: 'attributes.size',
      media: 'image',
    },
    prepare(selection) {
      const { title, price, material, size, media } = selection
      const subtitle = [
        price && `$${price}`,
        material,
        size,
      ].filter(Boolean).join(' • ')
      
      return {
        title,
        subtitle: subtitle || 'No details',
        media,
      }
    },
  },
}) 