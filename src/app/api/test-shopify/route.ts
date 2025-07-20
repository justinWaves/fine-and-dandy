import { NextResponse } from 'next/server';
import { getShopifyProducts } from '@/lib/shopify/products';

export async function GET() {
  try {
    const products = await getShopifyProducts(5);
    
    return NextResponse.json({
      success: true,
      message: 'Shopify connection successful',
      productCount: products.length,
      products: products.map(p => ({
        id: p.id,
        title: p.title,
        productType: p.productType,
        price: p.price
      }))
    });
  } catch (error) {
    console.error('Shopify test error:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Shopify connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 