import React from "react"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"

interface PolaroidCardProps {
  title: string
  price: string
  rating?: number
  reviews?: number
  imageUrl?: string
  imageAlt?: string
  onAddToCart?: () => void
  className?: string
  showDateStamp?: boolean
  children?: React.ReactNode
}

export function PolaroidCard({
  title,
  price,
  rating = 0,
  reviews = 0,
  imageUrl,
  imageAlt,
  onAddToCart,
  className,
  showDateStamp = true,
  children
}: PolaroidCardProps) {
  return (
    <div className={cn("group", className)}>
      {/* Polaroid Card */}
      <div className="bg-white border-8 border-white shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105">
        {/* Photo Area */}
        <div className="aspect-[3/4] bg-gradient-to-br from-muted to-muted/60 relative overflow-hidden">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={imageAlt || title}
              className="w-full h-full object-cover"
            />
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
          
          {/* Polaroid Date Stamp */}
          {showDateStamp && (
            <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
              <span className="text-xs font-mono text-muted-foreground">
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          )}
          
          {/* Custom content overlay */}
          {children}
        </div>
        
        {/* Polaroid Caption Area */}
        <div className="p-4 bg-white">
          <h3 className="text-lg text-polaroid-caption text-high-contrast mb-2">{title}</h3>
          
          {/* Rating Stars */}
          {rating > 0 && (
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
              {reviews > 0 && (
                <span className="text-xs text-subtle ml-2 font-mono">
                  ({reviews})
                </span>
              )}
            </div>
          )}
          
          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between">
            <span className="text-xl text-polaroid-caption text-primary">{price}</span>
            {onAddToCart && (
              <Button 
                size="sm" 
                onClick={onAddToCart}
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-8 w-8 p-0 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Polaroid Shadow */}
      <div className="mt-4 h-2 bg-black/10 rounded-full blur-sm transform -rotate-1"></div>
    </div>
  )
} 