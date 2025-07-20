"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
        ? 'bg-black/20 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo - Only visible on scroll */}
        {isScrolled && (
          <Link href="/" className="flex items-center">
            <Image 
              src="/navbar-logo.png" 
              alt="Fine & Dandy" 
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        )}

        {/* Spacer when logo is not visible */}
        {!isScrolled && <div></div>}

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <Button variant="ghost" size="icon" className="text-white hover:text-yellow-300">
            <Search className="h-5 w-5" />
          </Button>

          {/* Info */}
          <Link href="/info">
            <Button variant="ghost" size="icon" className="text-white hover:text-yellow-300">
              <Info className="h-5 w-5" />
            </Button>
          </Link>

          {/* Cart */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-yellow-300 relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-400 text-black text-xs rounded-full flex items-center justify-center font-bold">
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