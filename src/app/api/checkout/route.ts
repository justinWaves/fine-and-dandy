import { NextRequest, NextResponse } from 'next/server'
import { shopifyClient } from '@/lib/shopify/client'

const CREATE_CHECKOUT = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
        lineItems(first: 10) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`

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

    // Transform cart items to Shopify checkout line items
    // We need to use the actual variant IDs from Shopify
    const lineItems = items.map((item: { product: { variants: Array<{ id: string }>; id: string }; quantity: number }) => {
      // Use the first variant ID, or fall back to product ID if no variants
      const variantId = item.product.variants[0]?.id || item.product.id
      return {
        variantId: variantId,
        quantity: item.quantity
      }
    })

    console.log('Line items for checkout:', JSON.stringify(lineItems, null, 2))

    // Create checkout session
    const response = await shopifyClient.request(CREATE_CHECKOUT, {
      input: {
        lineItems: lineItems
      }
    })

    console.log('Shopify response:', JSON.stringify(response, null, 2))

    const { checkoutCreate } = response as {
      checkoutCreate: {
        checkout?: {
          id: string
          webUrl: string
        }
        checkoutUserErrors?: Array<{
          code: string
          field: string
          message: string
        }>
      }
    }

    if (checkoutCreate.checkoutUserErrors && checkoutCreate.checkoutUserErrors.length > 0) {
      console.error('Checkout errors:', checkoutCreate.checkoutUserErrors)
      return NextResponse.json(
        { error: 'Failed to create checkout', details: checkoutCreate.checkoutUserErrors },
        { status: 400 }
      )
    }

    if (!checkoutCreate.checkout) {
      return NextResponse.json(
        { error: 'Failed to create checkout - no checkout URL returned' },
        { status: 500 }
      )
    }

    console.log('Generated checkout URL:', checkoutCreate.checkout.webUrl)
    
    return NextResponse.json({
      success: true,
      checkoutUrl: checkoutCreate.checkout.webUrl
    })

  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout' },
      { status: 500 }
    )
  }
} 