"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Search, Info } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { CartDrawer } from "@/components/CartDrawer"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { totalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo - Only visible on scroll */}
        {isScrolled && (
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl text-retro text-shadow-retro text-high-contrast font-bold">
              FINE & DANDY
            </span>
          </Link>
        )}

        {/* Spacer when logo is not visible */}
        {!isScrolled && <div></div>}

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <Button variant="ghost" size="icon" className="text-high-contrast hover:text-retro">
            <Search className="h-5 w-5" />
          </Button>

          {/* Info */}
          <Link href="/info">
            <Button variant="ghost" size="icon" className="text-high-contrast hover:text-retro">
              <Info className="h-5 w-5" />
            </Button>
          </Link>

          {/* Cart */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-high-contrast hover:text-retro relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </header>
  )
} 