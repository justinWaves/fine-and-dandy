import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json()

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items in cart' },
        { status: 400 }
      )
    }

    // For now, let's create a simple checkout URL that redirects to the cart
    // This is a temporary solution until we properly integrate with Shopify's checkout
    const storeDomain = process.env.SHOPIFY_STORE_DOMAIN
    if (!storeDomain) {
      return NextResponse.json(
        { error: 'Shopify store domain not configured' },
        { status: 500 }
      )
    }
    const checkoutUrl = `https://${storeDomain}/checkout`
    
    // Add items to the checkout URL using Shopify's format
    // Format: /checkout?items[0][id]=VARIANT_ID&items[0][quantity]=QUANTITY
    const itemParams = items.map((item: { product: { variants: Array<{ id: string }>; id: string }; quantity: number }, index: number) => {
      const variantId = item.product.variants[0]?.id || item.product.id
      return `items[${index}][id]=${variantId}&items[${index}][quantity]=${item.quantity}`
    }).join('&')
    
    const finalCheckoutUrl = `${checkoutUrl}?${itemParams}`

    return NextResponse.json({
      success: true,
      checkoutUrl: finalCheckoutUrl
    })

  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout' },
      { status: 500 }
    )
  }
} 