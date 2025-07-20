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

    const storeDomain = process.env.SHOPIFY_STORE_DOMAIN
    if (!storeDomain) {
      return NextResponse.json(
        { error: 'Shopify store domain not configured' },
        { status: 500 }
      )
    }

    // Filter out out-of-stock items
    const availableItems = items.filter((item: { product: { availableForSale: boolean; variants: Array<{ availableForSale: boolean }>; id: string }; quantity: number }) => {
      const isAvailable = item.product.availableForSale || 
        (item.product.variants && item.product.variants.some(variant => variant.availableForSale))
      
      if (!isAvailable) {
        console.warn('Filtering out out-of-stock item:', item.product.id)
      }
      
      return isAvailable
    })

    if (availableItems.length === 0) {
      return NextResponse.json(
        { error: 'All items in cart are out of stock' },
        { status: 400 }
      )
    }

    // Create cart URL with variant IDs
    // Format: /cart/add?id=VARIANT_ID&quantity=QUANTITY
    const cartItems = availableItems.map((item: { product: { variants: Array<{ id: string }>; id: string }; quantity: number }) => {
      const variantId = item.product.variants[0]?.id || item.product.id
      // Extract just the ID number from the full GID
      const idNumber = variantId.split('/').pop()
      return `id=${idNumber}&quantity=${item.quantity}`
    }).join('&')

    // Create cart URL that will add items and redirect to checkout
    const cartUrl = `https://${storeDomain}/cart/add?${cartItems}&return_to=/checkout`

    console.log('Generated cart URL:', cartUrl)
    
    return NextResponse.json({
      success: true,
      checkoutUrl: cartUrl
    })

  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout' },
      { status: 500 }
    )
  }
} 