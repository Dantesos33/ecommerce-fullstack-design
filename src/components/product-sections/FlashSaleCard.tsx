import Link from "next/link";
import ProductImage from "./ProductImage";
import type { FlashSaleProduct } from "@/data/flash-sale";

interface FlashSaleCardProps {
  product: FlashSaleProduct;
}

const FlashSaleCard = ({ product }: FlashSaleCardProps) => {
  return (
    <Link
      href={product.href}
      className="group flex min-w-[140px] flex-1 flex-col items-center justify-center border-r border-slate-200 px-3 py-5 last:border-r-0 hover:bg-slate-50 transition-colors duration-200 lg:min-w-0 lg:px-4"
    >
      <ProductImage src={product.image} alt={product.name} size="md" />
      <p className="text-ui mt-3 text-center line-clamp-2">{product.name}</p>
      <span className="mt-2 rounded px-2 py-0.5 text-xs font-medium text-red-500 bg-red-50">
        {product.discount}
      </span>
    </Link>
  );
};

export default FlashSaleCard;
