import { shopifyClient } from './client';
import { GET_PRODUCTS, GET_PRODUCT_BY_HANDLE, GET_COLLECTIONS } from './queries';

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  productType: string;
  vendor: string;
  tags: string[];
  collections?: Array<{
    id: string;
    title: string;
    handle: string;
  }>;
  price: string;
  compareAtPrice?: string;
  currencyCode: string;
  image: {
    id: string;
    url: string;
    altText?: string;
    width: number;
    height: number;
  };
  images?: Array<{
    id: string;
    url: string;
    altText?: string;
    width: number;
    height: number;
  }>;
  availableForSale: boolean;
  variants: Array<{
    id: string;
    title: string;
    price: string;
    compareAtPrice?: string;
    availableForSale: boolean;
    image?: {
      id: string;
      url: string;
      altText?: string;
      width: number;
      height: number;
    };
  }>;
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  image?: {
    id: string;
    url: string;
    altText?: string;
    width: number;
    height: number;
  };
}

interface ShopifyProductEdge {
  node: {
    id: string;
    title: string;
    handle: string;
    description: string;
    productType: string;
    vendor: string;
    tags: string[];
    collections?: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          handle: string;
        };
      }>;
    };
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: Array<{
        node: {
          id: string;
          url: string;
          altText?: string;
          width: number;
          height: number;
        };
      }>;
    };
    variants: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          price: {
            amount: string;
            currencyCode: string;
          };
          compareAtPrice?: {
            amount: string;
            currencyCode: string;
          };
          availableForSale: boolean;
          image?: {
            id: string;
            url: string;
            altText?: string;
            width: number;
            height: number;
          };
        };
      }>;
    };
  };
}

interface ShopifyProductsResponse {
  products: {
    edges: ShopifyProductEdge[];
  };
}

interface ShopifyProductResponse {
  product: ShopifyProductEdge['node'] | null;
}

interface ShopifyCollectionsResponse {
  collections: {
    edges: Array<{
      node: ShopifyCollection;
    }>;
  };
}

export async function getShopifyProducts(limit: number = 50): Promise<ShopifyProduct[]> {
  try {
    const data = await shopifyClient.request(GET_PRODUCTS, { first: limit }) as ShopifyProductsResponse;
    
    return data.products.edges.map((edge) => {
      const product = edge.node;
      const firstVariant = product.variants.edges[0]?.node;
      const firstImage = product.images.edges[0]?.node;
      
      return {
        id: product.id,
        title: product.title,
        handle: product.handle,
        description: product.description,
        productType: product.productType,
        vendor: product.vendor,
        tags: product.tags,
        collections: product.collections?.edges.map(edge => edge.node),
        price: firstVariant?.price?.amount || product.priceRange.minVariantPrice.amount,
        compareAtPrice: firstVariant?.compareAtPrice?.amount,
        currencyCode: firstVariant?.price?.currencyCode || product.priceRange.minVariantPrice.currencyCode,
              image: firstImage || {
          id: '',
          url: '',
          altText: product.title,
          width: 400,
          height: 400
        },
        images: product.images.edges.map(edge => edge.node),
        availableForSale: firstVariant?.availableForSale || false,
        variants: product.variants.edges.map((variantEdge) => ({
          id: variantEdge.node.id,
          title: variantEdge.node.title,
          price: variantEdge.node.price.amount,
          compareAtPrice: variantEdge.node.compareAtPrice?.amount,
          availableForSale: variantEdge.node.availableForSale,
          image: variantEdge.node.image
        }))
      };
    });
  } catch (error) {
    console.error('Error fetching Shopify products:', error);
    return [];
  }
}

export async function getShopifyProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  try {
    const data = await shopifyClient.request(GET_PRODUCT_BY_HANDLE, { handle }) as ShopifyProductResponse;
    
    if (!data.product) {
      return null;
    }
    
    const product = data.product;
    const firstVariant = product.variants.edges[0]?.node;
    const firstImage = product.images.edges[0]?.node;
    
    return {
      id: product.id,
      title: product.title,
      handle: product.handle,
      description: product.description,
      productType: product.productType,
      vendor: product.vendor,
      tags: product.tags,
      price: firstVariant?.price?.amount || product.priceRange.minVariantPrice.amount,
      compareAtPrice: firstVariant?.compareAtPrice?.amount,
      currencyCode: firstVariant?.price?.currencyCode || product.priceRange.minVariantPrice.currencyCode,
      image: firstImage || {
        id: '',
        url: '',
        altText: product.title,
        width: 400,
        height: 400
      },
      images: product.images.edges.map(edge => edge.node),
      availableForSale: firstVariant?.availableForSale || false,
      variants: product.variants.edges.map((variantEdge) => ({
        id: variantEdge.node.id,
        title: variantEdge.node.title,
        price: variantEdge.node.price.amount,
        compareAtPrice: variantEdge.node.compareAtPrice?.amount,
        availableForSale: variantEdge.node.availableForSale,
        image: variantEdge.node.image
      }))
    };
  } catch (error) {
    console.error('Error fetching Shopify product:', error);
    return null;
  }
}

export async function getShopifyCollections() {
  try {
    const data = await shopifyClient.request(GET_COLLECTIONS) as ShopifyCollectionsResponse;
    return data.collections.edges.map((edge) => edge.node);
  } catch (error) {
    console.error('Error fetching Shopify collections:', error);
    return [];
  }
} 