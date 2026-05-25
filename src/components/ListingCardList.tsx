// src/components/ProductCardList.tsx
"use client";

import Link from "next/link";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { type Product } from "@/data/listing-data";
import { useCart } from "@/context/CartContext";
import StarRating from "./ListingStarRating";

interface ProductCardListProps {
  product: Product;
}

const ProductCardList = ({ product }: ProductCardListProps) => {
  const { addToCart } = useCart();

  return (
    <div className="flex bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-300">
      {/* Image */}
      <div className="flex items-center justify-center bg-white shrink-0 w-[160px] h-[140px] p-3">
        <Link href={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "120px", height: "120px", objectFit: "contain", display: "block" }}
          />
        </Link>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-center gap-1.5 px-4 py-3 border-l border-slate-100">
        <Link href={`/products/${product.id}`} className="text-sm font-semibold text-slate-800 line-clamp-1 hover:text-blue-600 transition-colors">
          {product.title}
        </Link>
        <StarRating rating={product.rating} reviews={product.reviews} />
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-3 mt-1">
          {product.freeShipping && (
            <span className="text-xs font-medium text-green-600">Free Shipping</span>
          )}
          <button
            onClick={() => addToCart(product)}
            className="cursor-pointer inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            <FaShoppingCart size={11} /> Add to cart
          </button>
        </div>
      </div>

      {/* Price + Wishlist */}
      <div className="flex flex-col items-end justify-between shrink-0 px-4 py-3 min-w-[100px]">
        <button className="cursor-pointer text-slate-300 hover:text-rose-500 transition-colors duration-200">
          <FaRegHeart size={16} />
        </button>
        <div className="text-right">
          <p className="text-base font-bold text-slate-800">${product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-xs text-slate-400 line-through">${product.originalPrice.toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCardList;