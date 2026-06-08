import { assets } from "@/data/assets";
import axiosInstance from "@/lib/axiosInstance";

export type Product = {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  freeShipping: boolean;
  description: string;
  brand: string;
};

// Map API response to Product type
export function mapApiProductToProduct(apiProduct: any): Product {
  return {
    id: apiProduct.id,
    title: apiProduct.name,
    price: parseFloat(apiProduct.price),
    originalPrice: parseFloat(apiProduct.price) * 1.15, // Add 15% markup as original price
    rating: 4.5, // Default rating
    reviews: Math.floor(Math.random() * 200) + 50, // Random reviews count
    image: apiProduct.image, // Use the image path directly from API
    freeShipping: Math.random() > 0.4, // 60% free shipping
    description: apiProduct.description,
    brand: getBrandFromCategory(apiProduct.category),
  };
}

function getBrandFromCategory(category: string): string {
  const brands: { [key: string]: string } = {
    'Clothing': 'Fashion Co',
    'Accessories': 'StylePro',
    'Electronics': 'TechCore',
    'Kitchen': 'HomeChef',
    'Wearables': 'SmartTech',
    'Photography': 'CameraMax',
    'Computers': 'PowerPC',
  };
  return brands[category] || 'Premium Brand';
}

// Fetch products from API
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await axiosInstance.get('/products');
    return response.data.map((apiProduct: any) => mapApiProductToProduct(apiProduct));
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return empty array on error
    return [];
  }
}

// Legacy: kept for backward compatibility if needed
export const products: Product[] = [];
