import { NextResponse } from 'next/server';
import { getShopifyProducts } from '@/lib/shopify/products';

export async function GET() {
  try {
    const products = await getShopifyProducts();
    
    return NextResponse.json({
      success: true,
      products
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch products',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 