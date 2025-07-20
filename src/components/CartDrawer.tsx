"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Plus, Minus, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/CartContext"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart()

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      })

      const data = await response.json()

      if (data.success && data.checkoutUrl) {
        // Redirect to Shopify checkout
        window.location.href = data.checkoutUrl
      } else {
        console.error('Checkout failed:', data.error)
        // You might want to show an error message to the user
        alert('Checkout failed. Please try again.')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Checkout failed. Please try again.')
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-md z-50 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        style={{ 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          width: '100vw',
          height: '100vh'
        }}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`} style={{ backgroundColor: 'white', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <h2 className="text-2xl font-disco-heading text-high-contrast">Your Cart 🛒</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 bg-white">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground/60 mb-4" />
              <p className="text-lg font-disco-body text-medium-contrast mb-2">Your cart is empty</p>
              <p className="font-disco-body text-subtle">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  {/* Product Image */}
                  <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    {item.product.image?.url ? (
                      <img 
                        src={item.product.image.url}
                        alt={item.product.image.altText || item.product.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                        <ShoppingCart className="h-6 w-6 text-muted-foreground/60" />
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-disco-heading text-high-contrast truncate">
                      {item.product.title}
                    </h3>
                    <p className="text-primary font-disco-body font-bold">
                      ${parseFloat(item.product.price).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-disco-body font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-1 hover:bg-red-100 rounded transition-colors text-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4 bg-white">
            {/* Summary */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-disco-heading text-high-contrast">Total ({totalItems} items)</span>
              <span className="text-2xl font-disco-body font-bold text-primary">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleCheckout}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-disco-heading text-lg py-3"
              >
                Checkout 🚀
              </Button>
              <Button
                onClick={clearCart}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-disco-heading"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
} 