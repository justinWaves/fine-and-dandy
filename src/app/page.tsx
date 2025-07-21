"use client"

import { useState, useEffect } from "react"
import { Suspense } from "react"
import Image from "next/image"
import { ShopifyProduct } from "@/lib/shopify/products"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { ProductFilter } from "@/components/ProductFilter"
import { ProductGrid } from "@/components/ProductGrid"

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["jewelry", "apparel", "accessories"])
  const [products, setProducts] = useState<ShopifyProduct[]>([
    {
      id: "gid://shopify/Product/9824381927744",
      title: "Cream and gold snake",
      handle: "cream-and-gold-snake",
      description: "Handcrafted retro-inspired statement earring",
      productType: "",
      vendor: "Fine & Dandy",
      tags: [],
      price: "25.0",
      currencyCode: "USD",
      image: {
        id: "gid://shopify/ProductImage/49286639714624",
        url: "https://cdn.shopify.com/s/files/1/0941/2280/3520/files/IMG_1677.heic?v=1749079440",
        altText: undefined,
        width: 3024,
        height: 4032
      },
      images: [{
        id: "gid://shopify/ProductImage/49286639714624",
        url: "https://cdn.shopify.com/s/files/1/0941/2280/3520/files/IMG_1677.heic?v=1749079440",
        altText: undefined,
        width: 3024,
        height: 4032
      }],
      availableForSale: true,
      variants: []
    },
    {
      id: "gid://shopify/Product/9865940894016",
      title: "Worm Farm",
      handle: "worm-farm",
      description: "Why have a regular pencil sharpener when you can have a worm farm pencil sharpener?",
      productType: "",
      vendor: "Fine & Dandy",
      tags: [],
      price: "3000.0",
      compareAtPrice: "9000.0",
      currencyCode: "USD",
      image: {
        id: "gid://shopify/ProductImage/49804811501888",
        url: "https://cdn.shopify.com/s/files/1/0941/2280/3520/files/27A26888-AC4E-4383-80B9-D71655F55F6F.png?v=1752984648",
        altText: undefined,
        width: 1024,
        height: 1024
      },
      images: [
        {
          id: "gid://shopify/ProductImage/49804811501888",
          url: "https://cdn.shopify.com/s/files/1/0941/2280/3520/files/27A26888-AC4E-4383-80B9-D71655F55F6F.png?v=1752984648",
          altText: undefined,
          width: 1024,
          height: 1024
        },
        {
          id: "gid://shopify/ProductImage/49285113151808",
          url: "https://cdn.shopify.com/s/files/1/0941/2280/3520/files/Fine_Dandy_Logo_3.jpg?v=1749071838",
          altText: undefined,
          width: 1024,
          height: 1024
        },
        {
          id: "gid://shopify/ProductImage/49804937199936",
          url: "https://cdn.shopify.com/s/files/1/0941/2280/3520/files/jewelry-bold-5-middle.jpg?v=1749057298",
          altText: undefined,
          width: 1024,
          height: 1024
        }
      ],
      availableForSale: false,
      variants: []
    }
  ])

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        const data = await response.json()
        
        if (data.success) {
          console.log('Fetched products:', data.products.length, 'products')
          console.log('Product titles:', data.products.map((p: ShopifyProduct) => p.title))
          setProducts(data.products)
        } else {
          console.error('Failed to fetch products:', data.message)
        }
      } catch (error) {
        console.error('Error fetching products:', error)
        // Fallback to test data
        const testProduct = {
          id: "gid://shopify/Product/9824381927744",
          title: "Cream and gold snake",
          handle: "cream-and-gold-snake",
          description: "Handcrafted retro-inspired statement earring",
          productType: "",
          vendor: "Fine & Dandy",
          tags: [],
          price: "25.0",
          currencyCode: "USD",
          image: {
            id: "gid://shopify/ProductImage/49286639714624",
            url: "https://cdn.shopify.com/s/files/1/0941/2280/3520/files/IMG_1677.heic?v=1749079440",
            altText: undefined,
            width: 3024,
            height: 4032
          },
          images: [{
            id: "gid://shopify/ProductImage/49286639714624",
            url: "https://cdn.shopify.com/s/files/1/0941/2280/3520/files/IMG_1677.heic?v=1749079440",
            altText: undefined,
            width: 3024,
            height: 4032
          }],
          availableForSale: true,
          variants: []
        }
        setProducts([testProduct])
      }
    }
    fetchProducts()
  }, [])

  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-warm-beige overflow-x-hidden pt-16">
      {/* Simple Header Section */}
      <section className="py-8 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <Image 
              src="/fad-hero-main.png" 
              alt="Fine & Dandy" 
              width={400}
              height={200}
              className="mx-auto max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>

        </div>
      </section>

      {/* Product Filtering and Display */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <ProductFilter onFilterChange={handleFilterChange} />
          <div className="mt-8">
            <Suspense fallback={<div className="text-center py-12">Loading products...</div>}>
              <ProductGrid products={products} selectedFilters={selectedFilters} />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}
