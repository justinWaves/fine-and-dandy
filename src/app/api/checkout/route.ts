import { NextRequest, NextResponse } from 'next/server'
import { shopifyClient } from '@/lib/shopify/client'

const CREATE_CHECKOUT = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
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

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items in cart' },
        { status: 400 }
      )
    }

    // Transform cart items to Shopify checkout line items
    const lineItems = items.map((item: { product: { variants: Array<{ id: string }>; id: string }; quantity: number }) => ({
      variantId: item.product.variants[0]?.id || item.product.id,
      quantity: item.quantity
    }))

    // Create checkout session
    const response = await shopifyClient.request(CREATE_CHECKOUT, {
      input: {
        lineItems,
        email: 'customer@example.com', // You might want to collect this from the user
        shippingAddress: {
          // You might want to collect this from the user
          firstName: 'John',
          lastName: 'Doe',
          address1: '123 Main St',
          city: 'San Francisco',
          province: 'CA',
          country: 'US',
          zip: '94102'
        }
      }
    })

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
      return NextResponse.json(
        { error: 'Failed to create checkout', details: checkoutCreate.checkoutUserErrors },
        { status: 400 }
      )
    }

    // Redirect to Shopify checkout
    if (!checkoutCreate.checkout) {
      return NextResponse.json(
        { error: 'Failed to create checkout - no checkout URL returned' },
        { status: 500 }
      )
    }

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