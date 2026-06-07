// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/data/listing-data";
import PromoBanner from "@/components/PromoBanner";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) notFound();

  return (
    <>
      <ProductDetail
        product={product}
        relatedProducts={products.filter((p) => p.id !== product.id).slice(0, 5)}
      />
      <PromoBanner />
    </>
  );
}