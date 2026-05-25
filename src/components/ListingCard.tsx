import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { type Product } from "@/data/listing-data";
import StarRating from "./ListingStarRating";

interface ProductCardGridProps {
  product: Product;
}

const ProductCardGrid = ({ product }: ProductCardGridProps) => {
  return (
    <div className="group cursor-pointer flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-300">
      {/* Image */}
      <div className="relative flex items-center justify-center bg-white h-[180px] p-4">
        <div className="relative w-[140px] h-[140px]">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "140px", height: "140px", objectFit: "contain", display: "block" }}
          />
        </div>
        <button className="cursor-pointer absolute top-3 right-3 text-slate-300 hover:text-rose-500 transition-colors duration-200">
          <FaRegHeart size={16} />
        </button>
      </div>

      {/* Info */}
      <div className="px-3 pb-3 flex flex-col gap-1 border-t border-slate-100">
        <div className="flex items-center gap-2 mt-2">
          <span className="text-base font-bold text-slate-800">${product.price.toFixed(2)}</span>
          <span className="text-xs text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
        </div>
        <StarRating rating={product.rating} reviews={product.reviews} />
        <p className="text-xs text-slate-600 leading-snug line-clamp-2 mt-0.5">{product.title}</p>
      </div>
    </div>
  );
};

export default ProductCardGrid;
