import Link from "next/link";
import ProductImage from "./ProductImage";
import type { CategoryProduct } from "@/data/category-sections";

interface ProductGridCardProps {
  product: CategoryProduct;
  variant?: "grid" | "scroll";
}

const ProductGridCard = ({
  product,
  variant = "grid",
}: ProductGridCardProps) => {
  if (variant === "scroll") {
    return (
      <Link
        href={product.href}
        className="group flex min-w-[140px] flex-col items-center border-r border-slate-200 px-4 py-5 last:border-r-0 hover:bg-slate-50 transition-colors duration-200"
      >
        <ProductImage src={product.image} alt={product.name} size="md" />
        <p className="text-ui mt-3 text-center line-clamp-2 text-slate-800">
          {product.name}
        </p>
        <p className="text-caption mt-1 text-center">{product.priceLabel}</p>
      </Link>
    );
  }

  return (
    <Link
      href={product.href}
      className="group flex h-full min-h-[144px] flex-col justify-between bg-white p-4 hover:bg-slate-50 transition-colors duration-200"
    >
      <div className="space-y-1">
        <p className="text-sm font-medium text-slate-800 leading-snug">
          {product.name}
        </p>
        <p className="text-xs text-slate-500">{product.priceLabel}</p>
      </div>
      <div className="mt-3 flex justify-end">
        <ProductImage src={product.image} alt={product.name} size="sm" />
      </div>
    </Link>
  );
};

export default ProductGridCard;
