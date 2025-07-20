import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json()

    console.log('Checkout items received:', JSON.stringify(items, null, 2))

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
        // Try using the catalog page where users can see all products
    const finalCheckoutUrl = `https://${storeDomain}/collections/all`
    
    console.log('Generated checkout URL:', finalCheckoutUrl)
    
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