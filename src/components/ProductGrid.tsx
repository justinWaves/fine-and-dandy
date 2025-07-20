"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { ShopifyProduct } from "@/lib/shopify/products"
import { ProductCard } from "./ProductCard"

interface ProductGridProps {
  products: ShopifyProduct[]
  itemsPerPage?: number
  selectedFilters?: string[]
}

export function ProductGrid({ products, itemsPerPage = 12, selectedFilters = ["jewelry", "apparel", "accessories"] }: ProductGridProps) {
  const [currentPage, setCurrentPage] = useState(1)

  // Filter products based on selected filters
  const filteredProducts = selectedFilters.length === 0 || selectedFilters.length === 3
    ? products 
    : products.filter(product => {
        // Check if product belongs to any of the selected collections
        if (!product.collections || product.collections.length === 0) {
          return selectedFilters.length === 3 // "All" is selected
        }
        
        const productCollectionHandles = product.collections.map(collection => collection.handle.toLowerCase())
        return selectedFilters.some(filter => productCollectionHandles.includes(filter))
      })

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Reset to first page when filters change
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(1)
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-medium-contrast mb-4">No products found</p>
        <p className="text-subtle">Try adjusting your filter or check back later!</p>
      </div>
    )
  }

  return (
    <div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 ${
                  currentPage === page 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>
          
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
} 