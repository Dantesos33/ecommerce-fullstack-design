import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/data/recommendations";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="product-card group flex flex-col bg-white border border-slate-200 rounded-xl"
    >
      {/* Image */}
      <div className="flex items-center justify-center w-full h-[200px] p-5">
        <div className="product-card-image relative w-[110px] h-[110px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="110px"
            className="object-contain"
          />
        </div>
      </div>

      {/* Info */}
      <div className="px-3 pb-3 flex flex-col gap-0.5">
        <p className="product-card-price text-sm font-bold text-slate-800 transition-colors duration-300">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-xs text-slate-500 leading-snug line-clamp-2">
          {product.title}
        </p>
      </div>

      <style>{`
        .product-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px -6px rgba(59, 130, 246, 0.15), 0 4px 10px -3px rgba(59, 130, 246, 0.1);
          border-color: #bfdbfe;
        }
        .product-card-image {
          transition: transform 0.3s ease;
        }
        .product-card:hover .product-card-image {
          transform: scale(1.12);
        }
        .product-card:hover .product-card-price {
          color: #2563eb;
        }
      `}</style>
    </Link>
  );
};

export default ProductCard;