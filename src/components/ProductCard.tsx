"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ArrowLeft, ArrowRight } from "lucide-react"
import { ShopifyProduct } from "@/lib/shopify/products"
import { useCart } from "@/contexts/CartContext"

interface ProductCardProps {
  product: ShopifyProduct
}

export function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [showSwipeHint, setShowSwipeHint] = useState(false)
  const { addToCart } = useCart()
  

  
  // Get all images from product
  const allImages = product.images || [product.image]

  const hasMultipleImages = allImages.length > 1



  // Show swipe hint briefly for products with multiple images
  useEffect(() => {
    if (hasMultipleImages) {
      setShowSwipeHint(true)
      const timer = setTimeout(() => setShowSwipeHint(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [hasMultipleImages])



  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 30 // Reduced threshold for easier swiping
    const isRightSwipe = distance < -30

    if (isLeftSwipe && hasMultipleImages) {
      nextImage()
    }
    if (isRightSwipe && hasMultipleImages) {
      prevImage()
    }
  }

  return (
    <div className="group">
      {/* Polaroid Card */}
      <div className="bg-white border-8 border-white shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105">
        {/* Photo Area */}
        <div 
          className="aspect-[3/4] bg-gradient-to-br from-muted to-muted/60 relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {allImages.length > 0 ? (
            <>
              <img 
                src={allImages[currentImageIndex].url}
                alt={allImages[currentImageIndex].altText || product.title}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                key={allImages[currentImageIndex].id}
                style={{
                  transform: `scale(${touchStart && touchEnd ? 0.95 : 1})`,
                  transition: 'transform 0.2s ease-out'
                }}
              />
              
              {/* Desktop Hover Arrows */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </>
              )}
              
              {/* Mobile Swipe Indicators */}
              {hasMultipleImages && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 md:hidden">
                  {allImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white' 
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
              
              {/* Mobile Swipe Hint */}
              {hasMultipleImages && (
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium md:hidden flex items-center space-x-1">
                  <span>📷</span>
                  <span>{currentImageIndex + 1} / {allImages.length}</span>
                </div>
              )}
              
              {/* Mobile Swipe Arrows (always visible on mobile) */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-300 md:hidden flex items-center justify-center"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-300 md:hidden flex items-center justify-center"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </>
              )}
              
              {/* Swipe Hint Overlay */}
              {showSwipeHint && hasMultipleImages && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center md:hidden">
                  <div className="bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-medium animate-pulse">
                    ← Swipe to see more photos →
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Placeholder for product image */
            <div className="w-full h-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 mx-auto mb-2 bg-muted rounded-full flex items-center justify-center">
                  <ShoppingCart className="h-8 w-8 text-muted-foreground/60" />
                </div>
                <p className="text-sm font-medium">Product Image</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Polaroid Caption Area */}
        <div className="p-4 bg-white">
          <h3 className="text-lg font-disco-heading text-high-contrast mb-2 text-disco-bounce">
            {product.title}
          </h3>
          
          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl text-polaroid-caption text-primary font-bold">
                ${parseFloat(product.price).toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${parseFloat(product.compareAtPrice).toFixed(2)}
                </span>
              )}
            </div>
            <Button 
              onClick={handleAddToCart}
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 font-disco-body text-sm"
            >
              Add to Cart ✨
            </Button>
          </div>
        </div>
      </div>
      
      {/* Polaroid Shadow */}
      <div className="mt-4 h-2 bg-black/10 rounded-full blur-sm transform -rotate-1"></div>
    </div>
  )
} 