// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import axiosInstance from "@/lib/axiosInstance";
import { mapApiProductToProduct, Product } from "@/data/listing-data";
import PromoBanner from "@/components/PromoBanner";

interface Props {
  params: Promise<{ id: string }>;
}

async function fetchProduct(id: string): Promise<Product | null> {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return mapApiProductToProduct(response.data);
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

async function fetchAllProducts(): Promise<Product[]> {
  try {
    const response = await axiosInstance.get('/products');
    return response.data.map((apiProduct: any) => mapApiProductToProduct(apiProduct));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  
  const product = await fetchProduct(id);
  
  if (!product) {
    notFound();
  }

  const allProducts = await fetchAllProducts();
  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 5);

  return (
    <>
      <ProductDetail
        product={product}
        relatedProducts={relatedProducts}
      />
      <PromoBanner />
    </>
  );
}